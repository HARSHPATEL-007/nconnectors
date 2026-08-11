from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class SessionType(str, Enum):
    INTERACTIVE = "interactive"
    AUTOMATED = "automated"
    RECIPE = "recipe"
    SANDBOX = "sandbox"


class SessionStatus(str, Enum):
    ACTIVE = "active"
    PAUSED = "paused"
    SUSPENDED = "suspended"
    COMPLETED = "completed"
    FAILED = "failed"
    EXPIRED = "expired"


class SessionContext(BaseModel):
    user_id: str
    tenant_id: str
    session_type: SessionType = SessionType.INTERACTIVE


class Session(BaseModel):
    session_id: str = Field(..., pattern=r"^sess_[a-z0-9_]+$")
    agent_id: str
    tenant_id: str
    context: SessionContext
    status: SessionStatus = SessionStatus.ACTIVE
    tools: List[str] = Field(default_factory=list)
    sandbox_config: Optional[Dict[str, Any]] = None
    websocket_url: Optional[str] = None
    sandbox_url: Optional[str] = None
    tools_injected: int = 0
    context_tokens_used: int = 0
    context_tokens_remaining: int = 128000
    step_count: int = 0
    reasoning_chain: List[str] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    expires_at: Optional[datetime] = None
    last_activity: datetime = Field(default_factory=datetime.utcnow)
    metadata: Dict[str, Any] = Field(default_factory=dict)
