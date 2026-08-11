import asyncio
import uuid
import time
import json
from typing import Dict, List, Optional, Any, Callable
from datetime import datetime, timedelta
from contextlib import asynccontextmanager

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException, Depends, Request, BackgroundTasks
from fastapi.responses import StreamingResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import structlog

from ..models import (
    Agent, AgentConfig, Session, SessionContext, SessionStatus,
    Connection, ConnectionStatus, AuditEvent, AuditAction,
    Recipe, RecipeConfig, RecipeStatus, RecipeExecution,
    SandboxConfig, SandboxExecution, SandboxStatus,
    ToolDefinition, ToolCall, ToolResult, IntentDiscoveryRequest, IntentDiscoveryResult,
    WebhookEvent, WebhookTrigger, WebhookSubscription,
    Tenant, TenantTier,
)
from ..auth.jwt_handler import JWTHandler, get_current_tenant
from ..auth.oauth_manager import OAuthManager
from ..tools.registry import ToolRegistry
from ..tools.intent_router import IntentRouter
from ..sandbox.executor import SandboxExecutor
from ..recipes.compiler import RecipeCompiler
from ..audit.logger import AuditLogger
from ..hitl.interrogation import InterrogationRoom
from ..webhooks.manager import WebhookManager
from ..plugins.engine import PluginEngine
from ..protocols.translator import ProtocolTranslator

logger = structlog.get_logger("n0va1o.gateway")


class N0VA1OGateway:
    def __init__(self):
        self.tenants: Dict[str, Tenant] = {}
        self.agents: Dict[str, Agent] = {}
        self.sessions: Dict[str, Session] = {}
        self.connections: Dict[str, Connection] = {}
        self.recipes: Dict[str, Recipe] = {}
        self.sandbox_executions: Dict[str, SandboxExecution] = {}
        self.webhook_subscriptions: Dict[str, WebhookSubscription] = {}
        self.interrogation_rooms: Dict[str, Any] = {}

        self.jwt_handler = JWTHandler()
        self.oauth_manager = OAuthManager()
        self.tool_registry = ToolRegistry()
        self.intent_router = IntentRouter(self.tool_registry)
        self.sandbox_executor = SandboxExecutor()
        self.recipe_compiler = RecipeCompiler()
        self.audit_logger = AuditLogger()
        self.interrogation_room = InterrogationRoom()
        self.webhook_manager = WebhookManager()
        self.plugin_engine = PluginEngine()
        self.protocol_translator = ProtocolTranslator()

        self._active_websockets: Dict[str, WebSocket] = {}

    def init_demo_data(self):
        demo_tenant = Tenant(
            tenant_id="tenant_001",
            name="Acme Corp",
            tier=TenantTier.PRO,
            encryption_key_id="key_001",
            sso_provider="okta",
            mfa_required=True,
            webhook_secret="whsec_demo_" + uuid.uuid4().hex,
        )
        self.tenants[demo_tenant.tenant_id] = demo_tenant

        demo_agent = Agent(
            agent_id="agent_001",
            tenant_id="tenant_001",
            config=AgentConfig(
                name="Finance Automation Agent",
                type="workflow_orchestrator",
                permissions=[
                    {"resource": "storage", "actions": ["read", "write"]},
                    {"resource": "sheets", "actions": ["read", "write"]},
                    {"resource": "slack", "actions": ["read", "post"]},
                ],
                autonomy_level="high",
                sandbox_enabled=True,
            ),
            api_key="n0va_sk_demo_" + uuid.uuid4().hex[:24],
            tools_available=[
                "dropbox.search_files", "dropbox.download_file",
                "csv_converter.convert", "n0va_sheets.import_csv",
                "slack.post_message", "google_drive.read",
                "salesforce.create", "github.read",
            ],
            session_endpoint="wss://n0va1o.io/sessions/agent_001",
            sandbox_endpoint="https://sandbox.n0va1o.io/agent_001",
            recipe_endpoint="https://recipes.n0va1o.io/agent_001",
        )
        self.agents[demo_agent.agent_id] = demo_agent

        providers = [
            "meta_ads", "google_ads", "salesforce", "hubspot",
            "slack", "github", "shopify", "stripe",
        ]
        for i, provider in enumerate(providers):
            conn = Connection(
                connection_id=f"conn_{provider}_001",
                tenant_id="tenant_001",
                user_id="user_001",
                provider=provider,
                auth_type="oauth2.1",
                encrypted_tokens={
                    "access_token": f"enc_at_{uuid.uuid4().hex}",
                    "refresh_token": f"enc_rt_{uuid.uuid4().hex}",
                    "expires_at": datetime.utcnow() + timedelta(days=15),
                    "scopes": ["read", "write"],
                },
                allowed_actions=["read", "write", "search"],
                blocked_actions=["delete_account", "modify_billing"],
                jit_enabled=True,
                provisioned_at=datetime.utcnow(),
                status=ConnectionStatus.ACTIVE,
                health_score=0.98,
            )
            self.connections[conn.connection_id] = conn

        self.tool_registry.load_builtin_tools()
        logger.info("Demo data initialized", tenant=demo_tenant.tenant_id)


gateway = N0VA1OGateway()


@asynccontextmanager
async def lifespan(app: FastAPI):
    gateway.init_demo_data()
    await gateway.sandbox_executor.initialize()
    await gateway.plugin_engine.initialize()
    logger.info("N0VA1O Gateway started", version="2026.07.0")
    yield
    await gateway.sandbox_executor.shutdown()
    await gateway.plugin_engine.shutdown()
    logger.info("N0VA1O Gateway stopped")


app = FastAPI(
    title="N0VA1O Integration Gateway",
    description="One Gateway. Infinite Possibilities.",
    version="2026.07.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "version": "2026.07.0",
        "module": "N0VA1O",
        "uptime": time.time(),
        "tenants": len(gateway.tenants),
        "agents": len(gateway.agents),
        "active_sessions": sum(1 for s in gateway.sessions.values() if s.status == SessionStatus.ACTIVE),
        "connections": len(gateway.connections),
    }


@app.get("/v1/ai/tools/discover")
async def discover_tools(request: IntentDiscoveryRequest) -> IntentDiscoveryResult:
    start_time = time.time()
    result = await gateway.intent_router.discover(request)
    latency = int((time.time() - start_time) * 1000)

    await gateway.audit_logger.log(AuditEvent(
        audit_id=f"audit_{uuid.uuid4().hex[:16]}",
        tenant_id="tenant_001",
        agent_id=request.agent_id,
        action=AuditAction.TOOL_CALL,
        tool_name="tools.discover",
        intent_classification=result.intent,
        confidence=result.confidence,
        status="success",
        latency_ms=latency,
    ))
    return result


@app.post("/v1/ai/agents/register")
async def register_agent(config: AgentConfig, tenant: Tenant = Depends(get_current_tenant)):
    agent_id = f"agent_{uuid.uuid4().hex[:12]}"
    api_key = f"n0va_sk_{uuid.uuid4().hex}_{uuid.uuid4().hex[:8]}"

    agent = Agent(
        agent_id=agent_id,
        tenant_id=tenant.tenant_id,
        config=config,
        api_key=api_key,
        tools_available=gateway.tool_registry.get_available_tools(config.permissions),
        session_endpoint=f"wss://n0va1o.io/sessions/{agent_id}",
        sandbox_endpoint=f"https://sandbox.n0va1o.io/{agent_id}",
        recipe_endpoint=f"https://recipes.n0va1o.io/{agent_id}",
    )
    gateway.agents[agent_id] = agent

    await gateway.audit_logger.log(AuditEvent(
        audit_id=f"audit_{uuid.uuid4().hex[:16]}",
        tenant_id=tenant.tenant_id,
        agent_id=agent_id,
        action=AuditAction.AGENT_REGISTER,
        status="success",
        result_summary=f"Agent '{config.name}' registered",
    ))

    return {
        "agent_id": agent_id,
        "api_key": api_key,
        "status": "active",
        "tools_available": agent.tools_available,
        "session_endpoint": agent.session_endpoint,
        "sandbox_endpoint": agent.sandbox_endpoint,
        "recipe_endpoint": agent.recipe_endpoint,
        "created_at": agent.created_at.isoformat(),
    }


@app.post("/v1/ai/sessions/create")
async def create_session(
    agent_id: str,
    context: SessionContext,
    tools: List[str] = None,
    sandbox_config: Optional[SandboxConfig] = None,
):
    if agent_id not in gateway.agents:
        raise HTTPException(status_code=404, detail="Agent not found")

    session_id = f"sess_{uuid.uuid4().hex[:16]}"
    agent = gateway.agents[agent_id]

    session = Session(
        session_id=session_id,
        agent_id=agent_id,
        tenant_id=context.tenant_id,
        context=context,
        tools=tools or agent.tools_available[:10],
        sandbox_config=sandbox_config.model_dump() if sandbox_config else None,
        websocket_url=f"wss://n0va1o.io/sessions/{session_id}",
        sandbox_url=f"https://sandbox.n0va1o.io/sessions/{session_id}",
        tools_injected=len(tools or agent.tools_available[:10]),
        context_tokens_remaining=agent.config.context_window,
        expires_at=datetime.utcnow() + timedelta(hours=1),
    )
    gateway.sessions[session_id] = session

    return {
        "session_id": session_id,
        "websocket_url": session.websocket_url,
        "sandbox_url": session.sandbox_url,
        "expires_at": session.expires_at.isoformat(),
        "tools_injected": session.tools_injected,
        "context_tokens_used": session.context_tokens_used,
        "context_tokens_remaining": session.context_tokens_remaining,
    }


@app.post("/v1/ai/recipes/compile")
async def compile_recipe(
    session_id: str,
    config: RecipeConfig,
    tenant: Tenant = Depends(get_current_tenant),
):
    if session_id not in gateway.sessions:
        raise HTTPException(status_code=404, detail="Session not found")

    session = gateway.sessions[session_id]
    recipe = await gateway.recipe_compiler.compile(session, config, tenant)
    gateway.recipes[recipe.recipe_id] = recipe

    await gateway.audit_logger.log(AuditEvent(
        audit_id=f"audit_{uuid.uuid4().hex[:16]}",
        tenant_id=tenant.tenant_id,
        agent_id=session.agent_id,
        action=AuditAction.RECIPE_COMPILED,
        session_id=session_id,
        status="success",
        result_summary=f"Recipe '{config.name}' compiled",
    ))

    return {
        "recipe_id": recipe.recipe_id,
        "compiled_schema": recipe.compiled_schema,
        "execution_endpoint": recipe.execution_endpoint,
        "estimated_latency_ms": recipe.estimated_latency_ms,
        "requires_approval": recipe.requires_approval,
        "risk_score": recipe.risk_score,
        "version": recipe.version,
        "compiled_at": recipe.compiled_at.isoformat() if recipe.compiled_at else None,
        "monitoring_dashboard": recipe.monitoring_dashboard,
    }


@app.post("/v1/ai/recipes/{recipe_id}/execute")
async def execute_recipe(recipe_id: str, params: Dict[str, Any] = None):
    if recipe_id not in gateway.recipes:
        raise HTTPException(status_code=404, detail="Recipe not found")

    recipe = gateway.recipes[recipe_id]
    execution = await gateway.recipe_compiler.execute(recipe, params or {})

    await gateway.audit_logger.log(AuditEvent(
        audit_id=f"audit_{uuid.uuid4().hex[:16]}",
        tenant_id=recipe.tenant_id,
        agent_id=recipe.agent_id,
        action=AuditAction.RECIPE_EXECUTED,
        status=execution.status,
        latency_ms=execution.latency_ms,
        result_summary=f"Recipe execution: {execution.status}",
    ))

    return {
        "execution_id": execution.execution_id,
        "recipe_id": recipe_id,
        "status": execution.status,
        "latency_ms": execution.latency_ms,
        "result": execution.result,
        "error": execution.error,
    }


@app.post("/v1/ai/sandbox/execute")
async def execute_sandbox(
    session_id: str,
    code: str,
    language: str = "python",
    config: Optional[SandboxConfig] = None,
):
    if session_id not in gateway.sessions:
        raise HTTPException(status_code=404, detail="Session not found")

    session = gateway.sessions[session_id]
    execution = await gateway.sandbox_executor.execute(
        session_id=session_id,
        tenant_id=session.tenant_id,
        code=code,
        language=language,
        config=config or SandboxConfig(),
    )
    gateway.sandbox_executions[execution.execution_id] = execution

    return {
        "execution_id": execution.execution_id,
        "status": execution.status,
        "output": execution.output,
        "error": execution.error,
        "exit_code": execution.exit_code,
        "memory_peak_mb": execution.memory_peak_mb,
        "cpu_time_ms": execution.cpu_time_ms,
    }


@app.get("/v1/ai/connections")
async def list_connections(tenant: Tenant = Depends(get_current_tenant)):
    conns = [c for c in gateway.connections.values() if c.tenant_id == tenant.tenant_id]
    return {
        "connections": [
            {
                "connection_id": c.connection_id,
                "provider": c.provider,
                "status": c.status,
                "health_score": c.health_score,
                "usage_count": c.usage_count,
                "last_used": c.last_used.isoformat() if c.last_used else None,
            }
            for c in conns
        ],
        "total": len(conns),
    }


@app.post("/v1/ai/connections/{connection_id}/switch")
async def switch_connection(connection_id: str):
    if connection_id not in gateway.connections:
        raise HTTPException(status_code=404, detail="Connection not found")

    conn = gateway.connections[connection_id]
    conn.last_used = datetime.utcnow()
    conn.usage_count += 1

    return {
        "connection_id": connection_id,
        "provider": conn.provider,
        "status": "active",
        "switched_at": conn.last_used.isoformat(),
    }


@app.get("/v1/ai/audit/trail")
async def get_audit_trail(
    agent_id: Optional[str] = None,
    since: Optional[str] = None,
    limit: int = 100,
    tenant: Tenant = Depends(get_current_tenant),
):
    events = await gateway.audit_logger.get_trail(
        tenant_id=tenant.tenant_id,
        agent_id=agent_id,
        since=since,
        limit=limit,
    )
    return {"events": events, "total": len(events)}


@app.get("/v1/ai/tools/catalog")
async def get_tool_catalog(provider: Optional[str] = None):
    tools = gateway.tool_registry.get_catalog(provider)
    return {
        "tools": [t.model_dump() for t in tools],
        "total": len(tools),
        "providers": gateway.tool_registry.get_providers(),
    }


@app.post("/v1/ai/webhooks/subscribe")
async def subscribe_webhook(
    url: str,
    events: List[WebhookTrigger],
    tenant: Tenant = Depends(get_current_tenant),
):
    sub = WebhookSubscription(
        subscription_id=f"sub_{uuid.uuid4().hex[:12]}",
        tenant_id=tenant.tenant_id,
        url=url,
        events=events,
        secret=f"whsec_{uuid.uuid4().hex}",
    )
    gateway.webhook_subscriptions[sub.subscription_id] = sub
    return {
        "subscription_id": sub.subscription_id,
        "url": sub.url,
        "events": [e.value for e in sub.events],
        "secret": sub.secret,
    }


@app.get("/v1/ai/agents")
async def list_agents(tenant: Tenant = Depends(get_current_tenant)):
    agents = [a for a in gateway.agents.values() if a.tenant_id == tenant.tenant_id]
    return {
        "agents": [
            {
                "agent_id": a.agent_id,
                "name": a.config.name,
                "type": a.config.type,
                "status": a.status,
                "tools_count": len(a.tools_available),
                "created_at": a.created_at.isoformat(),
            }
            for a in agents
        ],
        "total": len(agents),
    }


@app.get("/v1/ai/recipes")
async def list_recipes(tenant: Tenant = Depends(get_current_tenant)):
    recipes = [r for r in gateway.recipes.values() if r.tenant_id == tenant.tenant_id]
    return {
        "recipes": [
            {
                "recipe_id": r.recipe_id,
                "name": r.config.name,
                "status": r.status,
                "execution_count": r.execution_count,
                "success_rate": r.success_count / max(r.execution_count, 1),
                "version": r.version,
            }
            for r in recipes
        ],
        "total": len(recipes),
    }


@app.websocket("/ws/sessions/{session_id}")
async def websocket_session(websocket: WebSocket, session_id: str):
    await websocket.accept()
    gateway._active_websockets[session_id] = websocket

    try:
        if session_id in gateway.sessions:
            session = gateway.sessions[session_id]
            session.status = SessionStatus.ACTIVE

            await websocket.send_json({
                "type": "session_init",
                "session_id": session_id,
                "tools": session.tools,
                "status": "active",
            })

        while True:
            data = await websocket.receive_json()
            msg_type = data.get("type", "unknown")

            if msg_type == "tool_call":
                result = await gateway.tool_registry.execute_tool(
                    tool_name=data["tool_name"],
                    parameters=data.get("parameters", {}),
                    session_id=session_id,
                )
                await websocket.send_json({
                    "type": "tool_result",
                    "call_id": data.get("call_id", ""),
                    "result": result.model_dump(),
                })

            elif msg_type == "sandbox_execute":
                exec_result = await gateway.sandbox_executor.execute(
                    session_id=session_id,
                    tenant_id=data.get("tenant_id", ""),
                    code=data.get("code", ""),
                    language=data.get("language", "python"),
                )
                await websocket.send_json({
                    "type": "sandbox_result",
                    "execution_id": exec_result.execution_id,
                    "output": exec_result.output,
                    "error": exec_result.error,
                })

            elif msg_type == "ping":
                await websocket.send_json({"type": "pong", "timestamp": time.time()})

    except WebSocketDisconnect:
        pass
    finally:
        if session_id in gateway._active_websockets:
            del gateway._active_websockets[session_id]
        if session_id in gateway.sessions:
            gateway.sessions[session_id].status = SessionStatus.COMPLETED


@app.get("/v1/ai/metrics")
async def get_metrics(tenant: Tenant = Depends(get_current_tenant)):
    tenant_agents = [a for a in gateway.agents.values() if a.tenant_id == tenant.tenant_id]
    tenant_sessions = [s for s in gateway.sessions.values() if s.tenant_id == tenant.tenant_id]
    tenant_conns = [c for c in gateway.connections.values() if c.tenant_id == tenant.tenant_id]

    return {
        "agents": {
            "total": len(tenant_agents),
            "active": sum(1 for a in tenant_agents if a.status == "active"),
        },
        "sessions": {
            "total": len(tenant_sessions),
            "active": sum(1 for s in tenant_sessions if s.status == SessionStatus.ACTIVE),
        },
        "connections": {
            "total": len(tenant_conns),
            "active": sum(1 for c in tenant_conns if c.status == ConnectionStatus.ACTIVE),
            "avg_health": sum(c.health_score for c in tenant_conns) / max(len(tenant_conns), 1),
        },
        "tier": tenant.tier.value,
        "limits": tenant.limits().model_dump(),
    }
