from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class AuditAction(str, Enum):
    TOOL_CALL = "tool_call"
    AGENT_REGISTER = "agent_register"
    AGENT_EXECUTE = "agent_execute"
    CONNECTION_ESTABLISHED = "connection_established"
    CONNECTION_FAILED = "connection_failed"
    RECIPE_COMPILED = "recipe_compiled"
    RECIPE_EXECUTED = "recipe_executed"
    SANDBOX_EXECUTED = "sandbox_executed"
    APPROVAL_REQUIRED = "approval_required"
    APPROVAL_GRANTED = "approval_granted"
    APPROVAL_REJECTED = "approval_rejected"
    SCHEMA_DRIFT = "schema_drift"
    RATE_LIMIT = "rate_limit"
    SECURITY_ALERT = "security_alert"
    TOKEN_ROTATED = "token_rotated"


class AuditEvent(BaseModel):
    audit_id: str = Field(..., pattern=r"^audit_[a-z0-9_]+$")
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    tenant_id: str
    agent_id: Optional[str] = None
    agent_name: Optional[str] = None
    agent_version: Optional[str] = None
    action: AuditAction
    tool_name: Optional[str] = None
    tool_parameters: Optional[Dict[str, Any]] = None
    session_id: Optional[str] = None
    workflow_id: Optional[str] = None
    step_number: Optional[int] = None
    intent_classification: Optional[str] = None
    confidence: Optional[float] = None
    reasoning_chain: List[str] = Field(default_factory=list)
    status: str = "success"
    result_summary: str = ""
    latency_ms: int = 0
    tokens_consumed: int = 0
    approval_required: bool = False
    approved_by: Optional[str] = None
    approval_timestamp: Optional[datetime] = None
    ip_address: str = ""
    user_agent: str = ""
    mfa_verified: bool = False
    risk_score: float = 0.0
    hash: str = ""
    merkle_root: str = ""
    blockchain_anchor: str = ""
    quantum_signature: str = ""
    metadata: Dict[str, Any] = Field(default_factory=dict)
