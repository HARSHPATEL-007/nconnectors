from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class WebhookTrigger(str, Enum):
    CONNECTION_ESTABLISHED = "n0va1o.connection_established"
    CONNECTION_FAILED = "n0va1o.connection_failed"
    RECIPE_EXECUTED = "n0va1o.recipe_executed"
    AGENT_ACTION_COMPLETED = "n0va1o.agent_action_completed"
    APPROVAL_REQUIRED = "n0va1o.approval_required"
    SCHEMA_DRIFT_DETECTED = "n0va1o.schema_drift_detected"
    RATE_LIMIT_APPROACHING = "n0va1o.rate_limit_approaching"
    SANDBOX_EXECUTION_COMPLETE = "n0va1o.sandbox_execution_complete"
    TOKEN_ROTATED = "n0va1o.token_rotated"
    SECURITY_ALERT = "n0va1o.security_alert"


class WebhookEvent(BaseModel):
    event_id: str
    trigger: WebhookTrigger
    tenant_id: str
    agent_id: Optional[str] = None
    payload: Dict[str, Any] = Field(default_factory=dict)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    signature: str = ""
    delivered: bool = False
    delivery_attempts: int = 0
    retry_count: int = 0


class WebhookSubscription(BaseModel):
    subscription_id: str
    tenant_id: str
    url: str
    events: List[WebhookTrigger]
    secret: str
    active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
