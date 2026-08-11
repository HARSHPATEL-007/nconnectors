from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class RecipeStatus(str, Enum):
    DRAFT = "draft"
    COMPILING = "compiling"
    ACTIVE = "active"
    PAUSED = "paused"
    FAILED = "failed"
    DEPRECATED = "deprecated"


class ScheduleType(str, Enum):
    CRON = "cron"
    INTERVAL = "interval"
    WEBHOOK = "webhook"
    MANUAL = "manual"


class RecipeSchedule(BaseModel):
    type: ScheduleType = ScheduleType.MANUAL
    expression: str = ""
    timezone: str = "UTC"


class RecipeConfig(BaseModel):
    name: str
    description: str = ""
    schedule: Optional[RecipeSchedule] = None
    optimization_level: str = "standard"
    failover_enabled: bool = True
    notification_channels: List[str] = Field(default_factory=list)


class Recipe(BaseModel):
    recipe_id: str = Field(..., pattern=r"^rec_[a-z0-9_]+$")
    tenant_id: str
    agent_id: str
    session_id: str
    config: RecipeConfig
    status: RecipeStatus = RecipeStatus.DRAFT
    compiled_schema: str = "pydantic_v2"
    execution_endpoint: str = ""
    estimated_latency_ms: int = 0
    requires_approval: bool = False
    risk_score: float = 0.0
    version: str = "1.0.0"
    compiled_at: Optional[datetime] = None
    next_scheduled_run: Optional[datetime] = None
    monitoring_dashboard: str = ""
    source_call_graph: List[Dict[str, Any]] = Field(default_factory=list)
    execution_count: int = 0
    success_count: int = 0
    fail_count: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    metadata: Dict[str, Any] = Field(default_factory=dict)


class RecipeExecution(BaseModel):
    execution_id: str
    recipe_id: str
    tenant_id: str
    status: str = "pending"
    started_at: datetime = Field(default_factory=datetime.utcnow)
    completed_at: Optional[datetime] = None
    latency_ms: int = 0
    result: Optional[Dict[str, Any]] = None
    error: Optional[str] = None
