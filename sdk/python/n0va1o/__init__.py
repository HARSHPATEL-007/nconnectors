"""
N0VA1O Python SDK
pip install n0va1o
"""

import asyncio
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union
import urllib.request
import urllib.error
import json


@dataclass
class N0VA1OConfig:
    api_key: str
    tenant_id: str = "default"
    endpoint: str = "https://n0va1o.io"
    transport: str = "websocket"
    timeout: int = 30


@dataclass
class AgentConfig:
    name: str
    type: str = "workflow_orchestrator"
    description: str = ""
    permissions: Dict[str, List[str]] = field(default_factory=dict)
    autonomy_level: str = "medium"
    approval_required_for: List[str] = field(default_factory=list)
    webhook_url: Optional[str] = None
    max_daily_actions: int = 10000
    sandbox_enabled: bool = True
    context_window: int = 128000
    preferred_model: str = "claude-3-5-sonnet-20241022"
    fallback_model: Optional[str] = None


@dataclass
class SandboxConfig:
    cpu: int = 2
    ram: int = 4096
    timeout: int = 600
    network_mode: str = "filtered"
    allowed_domains: List[str] = field(default_factory=list)


@dataclass
class Agent:
    agent_id: str
    name: str
    type: str
    status: str
    api_key: str
    tools_available: List[str] = field(default_factory=list)
    session_endpoint: str = ""
    sandbox_endpoint: str = ""
    recipe_endpoint: str = ""
    created_at: str = ""
    expires_at: str = ""


@dataclass
class DiscoveredTool:
    name: str
    relevance: float
    reason: str
    estimated_latency_ms: int
    required_scopes: List[str]
    risk_level: str


@dataclass
class ToolDiscoveryResult:
    intent: str
    confidence: float
    tools: List[DiscoveredTool]
    suggested_workflow: str
    context_tokens_saved: int
    total_estimated_latency_ms: int


@dataclass
class Session:
    session_id: str
    websocket_url: str
    sandbox_url: str
    expires_at: str
    tools_injected: int = 0
    context_tokens_used: int = 0
    context_tokens_remaining: int = 0


@dataclass
class Recipe:
    recipe_id: str
    compiled_schema: str
    execution_endpoint: str
    estimated_latency_ms: int
    requires_approval: bool
    risk_score: float
    version: str
    compiled_at: str


class N0VA1OClient:
    """Main client for N0VA1O Integration Gateway."""

    def __init__(self, config: Union[N0VA1OConfig, Dict[str, Any]]):
        if isinstance(config, dict):
            config = N0VA1OConfig(**config)
        self.config = config
        self._agents = AgentsAPI(self)
        self._tools = ToolsAPI(self)
        self._sessions = SessionsAPI(self)
        self._recipes = RecipesAPI(self)
        self._audit = AuditAPI(self)
        self._escalations = EscalationsAPI(self)

    @property
    def agents(self) -> "AgentsAPI":
        return self._agents

    @property
    def tools(self) -> "ToolsAPI":
        return self._tools

    @property
    def sessions(self) -> "SessionsAPI":
        return self._sessions

    @property
    def recipes(self) -> "RecipesAPI":
        return self._recipes

    @property
    def audit(self) -> "AuditAPI":
        return self._audit

    @property
    def escalations(self) -> "EscalationsAPI":
        return self._escalations

    def _request(self, method: str, path: str, body: Any = None) -> Any:
        url = f"{self.config.endpoint}{path}"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.config.api_key}",
        }
        data = json.dumps(body).encode() if body else None
        req = urllib.request.Request(url, data=data, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=self.config.timeout) as resp:
                return json.loads(resp.read().decode())
        except urllib.error.HTTPError as e:
            error_body = e.read().decode()
            try:
                error_json = json.loads(error_body)
                raise N0VA1OError(error_json.get("error", f"HTTP {e.code}"))
            except json.JSONDecodeError:
                raise N0VA1OError(f"HTTP {e.code}: {error_body}")

    async def close(self):
        pass


class N0VA1OError(Exception):
    pass


class AgentsAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def register(self, config: Union[AgentConfig, Dict[str, Any]]) -> Agent:
        if isinstance(config, dict):
            config = AgentConfig(**config)
        body = {
            "agent_name": config.name,
            "agent_type": config.type,
            "description": config.description,
            "permissions": config.permissions,
            "autonomy_level": config.autonomy_level,
            "approval_required_for": config.approval_required_for,
            "webhook_url": config.webhook_url,
            "max_daily_actions": config.max_daily_actions,
            "sandbox_enabled": config.sandbox_enabled,
            "context_window": config.context_window,
            "preferred_model": config.preferred_model,
            "fallback_model": config.fallback_model,
        }
        result = self._client._request("POST", "/v1/ai/agents/register", body)
        return Agent(
            agent_id=result["agent_id"],
            name=config.name,
            type=config.type,
            status=result["status"],
            api_key=result["api_key"],
            tools_available=result.get("tools_available", []),
            session_endpoint=result.get("session_endpoint", ""),
            sandbox_endpoint=result.get("sandbox_endpoint", ""),
            recipe_endpoint=result.get("recipe_endpoint", ""),
            created_at=result.get("created_at", ""),
            expires_at=result.get("expires_at", ""),
        )


class ToolsAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def discover(self, query: str, max_tools: int = 5) -> ToolDiscoveryResult:
        body = {"query": query, "max_tools": max_tools}
        result = self._client._request("POST", "/v1/ai/tools/discover", body)
        tools = [
            DiscoveredTool(
                name=t["name"],
                relevance=t["relevance"],
                reason=t["reason"],
                estimated_latency_ms=t["estimated_latency_ms"],
                required_scopes=t.get("required_scopes", []),
                risk_level=t.get("risk_level", "low"),
            )
            for t in result.get("tools", [])
        ]
        return ToolDiscoveryResult(
            intent=result["intent"],
            confidence=result["confidence"],
            tools=tools,
            suggested_workflow=result.get("suggested_workflow", ""),
            context_tokens_saved=result.get("context_tokens_saved", 0),
            total_estimated_latency_ms=result.get("total_estimated_latency_ms", 0),
        )


class SessionsAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def create(
        self,
        agent_id: str,
        context: Optional[Dict[str, str]] = None,
        tools: Optional[List[str]] = None,
        sandbox_config: Optional[Union[SandboxConfig, Dict]] = None,
    ) -> Session:
        body: Dict[str, Any] = {
            "context": context or {"user_id": "user_001", "session_type": "interactive"},
        }
        if tools:
            body["tools"] = tools
        if sandbox_config:
            if isinstance(sandbox_config, dict):
                sandbox_config = SandboxConfig(**sandbox_config)
            body["sandbox_config"] = {
                "cpu_quota": sandbox_config.cpu,
                "ram_quota": sandbox_config.ram,
                "timeout_seconds": sandbox_config.timeout,
                "network_mode": sandbox_config.network_mode,
            }
        result = self._client._request("POST", "/v1/ai/sessions/create", body)
        return Session(
            session_id=result["session_id"],
            websocket_url=result.get("websocket_url", ""),
            sandbox_url=result.get("sandbox_url", ""),
            expires_at=result.get("expires_at", ""),
            tools_injected=result.get("tools_injected", 0),
            context_tokens_used=result.get("context_tokens_used", 0),
            context_tokens_remaining=result.get("context_tokens_remaining", 0),
        )

    def execute(self, session_id: str, instruction: str) -> Any:
        return self._client._request("POST", f"/v1/ai/sessions/{session_id}/execute", {"instruction": instruction})


class RecipesAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def compile(
        self,
        session_id: str,
        name: str,
        description: str = "",
        schedule: Optional[str] = None,
    ) -> Recipe:
        body: Dict[str, Any] = {
            "session_id": session_id,
            "recipe_name": name,
            "description": description,
        }
        if schedule:
            body["schedule"] = schedule
        result = self._client._request("POST", "/v1/ai/recipes/compile", body)
        return Recipe(
            recipe_id=result["recipe_id"],
            compiled_schema=result.get("compiled_schema", "pydantic_v2"),
            execution_endpoint=result["execution_endpoint"],
            estimated_latency_ms=result.get("estimated_latency_ms", 85),
            requires_approval=result.get("requires_approval", False),
            risk_score=result.get("risk_score", 0.12),
            version=result.get("version", "1.0.0"),
            compiled_at=result.get("compiled_at", ""),
        )

    def execute(self, recipe_id: str) -> Any:
        return self._client._request("GET", f"/v1/ai/recipes/{recipe_id}/execute")


class AuditAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def query(self, limit: int = 50, status: Optional[str] = None, since: Optional[str] = None) -> List[Dict]:
        params = f"?limit={limit}"
        if status:
            params += f"&status={status}"
        if since:
            params += f"&since={since}"
        return self._client._request("GET", f"/v1/ai/audit{params}")


class EscalationsAPI:
    def __init__(self, client: N0VA1OClient):
        self._client = client

    def list(self, status: Optional[str] = None) -> List[Dict]:
        params = f"?status={status}" if status else ""
        return self._client._request("GET", f"/v1/ai/escalations{params}")

    def resolve(self, escalation_id: str, decision: str) -> Dict:
        return self._client._request("POST", f"/v1/ai/escalations/{escalation_id}/resolve", {"decision": decision})
