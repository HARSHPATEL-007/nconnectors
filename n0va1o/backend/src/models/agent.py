from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any, Set
from enum import Enum
from datetime import datetime


class AgentType(str, Enum):
    WORKFLOW_ORCHESTRATOR = "workflow_orchestrator"
    CAMPAIGN_ORCHESTRATOR = "campaign_orchestrator"
    INFRASTRUCTURE_ORCHESTRATOR = "infrastructure_orchestrator"
    CONCIERGE = "concierge"
    REPLY_ASSISTANT = "reply_assistant"
    TASK_EXTRACTOR = "task_extractor"
    CUSTOM = "custom"


class AutonomyLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    FULL = "full"


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


class Agent(BaseModel):
    agent_id: str = Field(..., pattern=r"^agent_[a-z0-9_]+$")
    tenant_id: str
    config: AgentConfig
    api_key: str = ""
    status: str = "active"
    connected_account: Optional[str] = None
    tools_available: List[str] = Field(default_factory=list)
    session_endpoint: Optional[str] = None
    sandbox_endpoint: Optional[str] = None
    recipe_endpoint: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    last_active: Optional[datetime] = None
    daily_action_count: int = 0
    daily_action_reset_at: Optional[datetime] = None
    risk_score_avg: float = 0.0
    metadata: Dict[str, Any] = Field(default_factory=dict)
