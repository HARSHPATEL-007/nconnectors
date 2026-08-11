from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum


class AgentType(str, Enum):
    WORKFLOW_ORCHESTRATOR = "workflow_orchestrator"
    CAMPAIGN_ORCHESTRATOR = "campaign_orchestrator"
    INFRASTRUCTURE_ORCHESTRATOR = "infrastructure_orchestrator"
    CONCIERGE = "concierge"
    CUSTOM = "custom"


class AutonomyLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    FULL = "full"


class TransportType(str, Enum):
    WEBSOCKET = "websocket"
    HTTP_SSE = "http_sse"
    STDIO = "stdio"


class AgentPermission(BaseModel):
    resource: str
    actions: List[str]


class AgentConfig(BaseModel):
    name: str
    type: AgentType = AgentType.WORKFLOW_ORCHESTRATOR
    description: str = ""
    permissions: List[AgentPermission] = Field(default_factory=list)
    autonomy_level: AutonomyLevel = AutonomyLevel.MEDIUM
    approval_required_for: List[str] = Field(default_factory=list)
    webhook_url: Optional[str] = None
    max_daily_actions: int = 10000
    sandbox_enabled: bool = True
    neural_mode: bool = True
    context_window: int = 128000
    preferred_model: str = "claude-3-5-sonnet-20241022"
    fallback_model: str = "gpt-4-turbo-preview"


class NetworkMode(str, Enum):
    ISOLATED = "isolated"
    FILTERED = "filtered"
    FULL = "full"


class SandboxConfig(BaseModel):
    cpu: int = 2
    ram: int = 4096
    timeout: int = 600
    network_mode: NetworkMode = NetworkMode.ISOLATED
    allowed_domains: List[str] = Field(default_factory=list)
    disk_quota_gb: int = 10
    gpu_enabled: bool = False


class SessionConfig(BaseModel):
    agent_id: str
    session_type: str = "interactive"
    tools: List[str] = Field(default_factory=list)
    sandbox_config: Optional[SandboxConfig] = None


class RecipeSchedule(BaseModel):
    type: str = "cron"
    expression: str = ""
    timezone: str = "UTC"


class RecipeConfig(BaseModel):
    name: str
    description: str = ""
    schedule: Optional[RecipeSchedule] = None
    optimization_level: str = "standard"
    failover_enabled: bool = True
    notification_channels: List[str] = Field(default_factory=list)


class ToolDiscoveryResult(BaseModel):
    intent: str
    confidence: float
    tools: List[Dict[str, Any]]
    suggested_workflow: str
    context_tokens_saved: int = 0
    total_estimated_latency_ms: int = 0
    fallback_tools: List[str] = Field(default_factory=list)
