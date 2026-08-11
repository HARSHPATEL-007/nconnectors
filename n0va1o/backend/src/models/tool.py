from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class RiskLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class ToolDefinition(BaseModel):
    name: str
    provider: str
    description: str
    parameters: Dict[str, Any] = Field(default_factory=dict)
    required_scopes: List[str] = Field(default_factory=list)
    risk_level: RiskLevel = RiskLevel.LOW
    deprecated: bool = False
    estimated_latency_ms: int = 500
    version: str = "1.0.0"
    schema_hash: str = ""
    metadata: Dict[str, Any] = Field(default_factory=dict)


class ToolCall(BaseModel):
    call_id: str
    session_id: str
    agent_id: str
    tenant_id: str
    tool_name: str
    parameters: Dict[str, Any] = Field(default_factory=dict)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    timeout_ms: int = 30000


class ToolResult(BaseModel):
    call_id: str
    success: bool
    data: Any = None
    error: Optional[str] = None
    latency_ms: int = 0
    tokens_consumed: int = 0
    risk_score: float = 0.0
    approval_required: bool = False
    truncated: bool = False
    file_pointer: Optional[str] = None


class IntentDiscoveryRequest(BaseModel):
    query: str
    agent_id: str
    max_tools: int = 5
    context_window_size: int = 128000
    preferred_latency: str = "low"
    risk_tolerance: str = "medium"
    include_deprecated: bool = False
    require_sandbox: bool = False


class IntentDiscoveryResult(BaseModel):
    intent: str
    confidence: float
    tools: List[Dict[str, Any]]
    suggested_workflow: str
    context_tokens_saved: int = 0
    total_estimated_latency_ms: int = 0
    fallback_tools: List[str] = Field(default_factory=list)
