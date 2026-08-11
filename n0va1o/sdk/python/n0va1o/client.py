import httpx
import asyncio
from typing import Dict, List, Optional, Any
from datetime import datetime

from .models import AgentConfig, SandboxConfig, SessionConfig, RecipeConfig, ToolDiscoveryResult
from .exceptions import N0VA1OError, AuthenticationError, RateLimitError, HITLRequiredError


class N0VA1OClient:
    def __init__(
        self,
        api_key: str,
        tenant_id: str = "tenant_001",
        endpoint: str = "https://n0va1o.io",
        transport: str = "websocket",
        timeout: float = 30.0,
    ):
        self.api_key = api_key
        self.tenant_id = tenant_id
        self.endpoint = endpoint.rstrip("/")
        self.transport = transport
        self.timeout = timeout
        self._client = httpx.AsyncClient(
            base_url=self.endpoint,
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
                "X-N0VA1O-Tenant": tenant_id,
            },
            timeout=self.timeout,
        )
        self.agents = AgentManager(self._client, self.tenant_id)
        self.sessions = SessionManager(self._client, self.tenant_id)
        self.recipes = RecipeManager(self._client, self.tenant_id)
        self.tools = ToolManager(self._client, self.tenant_id)
        self.connections = ConnectionManager(self._client, self.tenant_id)
        self.audit = AuditManager(self._client, self.tenant_id)
        self.sandbox = SandboxManager(self._client, self.tenant_id)

    async def health(self) -> Dict[str, Any]:
        resp = await self._client.get("/health")
        return resp.json()

    async def metrics(self) -> Dict[str, Any]:
        resp = await self._client.get("/v1/ai/metrics")
        return resp.json()

    async def close(self):
        await self._client.aclose()

    async def __aenter__(self):
        return self

    async def __aexit__(self, *args):
        await self.close()


class AgentManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def register(self, config: AgentConfig) -> Dict[str, Any]:
        resp = await self._client.post("/v1/ai/agents/register", json=config.model_dump())
        self._check_error(resp)
        return resp.json()

    async def list(self) -> List[Dict[str, Any]]:
        resp = await self._client.get("/v1/ai/agents")
        data = resp.json()
        return data.get("agents", [])

    def _check_error(self, resp: httpx.Response):
        if resp.status_code == 401:
            raise AuthenticationError("Invalid API key")
        if resp.status_code == 429:
            raise RateLimitError("Rate limit exceeded")
        if resp.status_code >= 400:
            raise N0VA1OError(f"API error {resp.status_code}: {resp.text}")


class SessionManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def create(
        self,
        agent_id: str,
        session_type: str = "interactive",
        tools: List[str] = None,
        sandbox_config: SandboxConfig = None,
    ) -> Dict[str, Any]:
        payload = {
            "agent_id": agent_id,
            "context": {
                "user_id": "user_001",
                "tenant_id": self.tenant_id,
                "session_type": session_type,
            },
            "tools": tools or [],
        }
        if sandbox_config:
            payload["sandbox_config"] = sandbox_config.model_dump()

        resp = await self._client.post("/v1/ai/sessions/create", json=payload)
        if resp.status_code >= 400:
            raise N0VA1OError(f"Failed to create session: {resp.text}")
        return resp.json()

    async def list(self) -> List[Dict[str, Any]]:
        return []


class RecipeManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def compile(self, session_id: str, name: str, description: str = "", schedule: str = None) -> Dict[str, Any]:
        config = RecipeConfig(name=name, description=description)
        if schedule:
            config.schedule = {"type": "cron", "expression": schedule}

        resp = await self._client.post("/v1/ai/recipes/compile", params={"session_id": session_id}, json=config.model_dump())
        if resp.status_code >= 400:
            raise N0VA1OError(f"Failed to compile recipe: {resp.text}")
        return resp.json()

    async def execute(self, recipe_id: str, params: Dict[str, Any] = None) -> Dict[str, Any]:
        resp = await self._client.post(f"/v1/ai/recipes/{recipe_id}/execute", json=params or {})
        if resp.status_code >= 400:
            raise N0VA1OError(f"Failed to execute recipe: {resp.text}")
        return resp.json()

    async def list(self) -> List[Dict[str, Any]]:
        resp = await self._client.get("/v1/ai/recipes")
        data = resp.json()
        return data.get("recipes", [])


class ToolManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def discover(self, query: str, agent_id: str, max_tools: int = 5) -> ToolDiscoveryResult:
        payload = {
            "query": query,
            "agent_id": agent_id,
            "max_tools": max_tools,
            "context_window_size": 128000,
            "preferred_latency": "low",
            "risk_tolerance": "medium",
        }
        resp = await self._client.post("/v1/ai/tools/discover", json=payload)
        if resp.status_code >= 400:
            raise N0VA1OError(f"Tool discovery failed: {resp.text}")
        data = resp.json()
        return ToolDiscoveryResult(**data)

    async def catalog(self, provider: str = None) -> List[Dict[str, Any]]:
        params = {"provider": provider} if provider else {}
        resp = await self._client.get("/v1/ai/tools/catalog", params=params)
        data = resp.json()
        return data.get("tools", [])


class ConnectionManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def list(self) -> List[Dict[str, Any]]:
        resp = await self._client.get("/v1/ai/connections")
        data = resp.json()
        return data.get("connections", [])

    async def switch(self, connection_id: str) -> Dict[str, Any]:
        resp = await self._client.post(f"/v1/ai/connections/{connection_id}/switch")
        return resp.json()


class AuditManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def trail(self, agent_id: str = None, since: str = None, limit: int = 100) -> List[Dict[str, Any]]:
        params = {"limit": limit}
        if agent_id:
            params["agent_id"] = agent_id
        if since:
            params["since"] = since

        resp = await self._client.get("/v1/ai/audit/trail", params=params)
        data = resp.json()
        return data.get("events", [])


class SandboxManager:
    def __init__(self, client: httpx.AsyncClient, tenant_id: str):
        self._client = client
        self.tenant_id = tenant_id

    async def execute(self, session_id: str, code: str, language: str = "python", config: SandboxConfig = None) -> Dict[str, Any]:
        params = {"session_id": session_id, "code": code, "language": language}
        payload = config.model_dump() if config else None
        resp = await self._client.post("/v1/ai/sandbox/execute", params=params, json=payload)
        if resp.status_code >= 400:
            raise N0VA1OError(f"Sandbox execution failed: {resp.text}")
        return resp.json()
