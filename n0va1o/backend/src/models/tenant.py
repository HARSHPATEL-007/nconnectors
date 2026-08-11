from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class TenantTier(str, Enum):
    FREE = "free"
    GROWTH = "growth"
    PRO = "pro"
    ENTERPRISE = "enterprise"
    TRANSCENDENT = "transcendent"


class TierLimits(BaseModel):
    agent_executions_per_day: int
    concurrent_agents: int
    max_workflow_steps: int
    sandbox_execution_minutes: int
    tool_call_latency_p99_ms: int
    api_calls_per_day: int
    webhook_ingestion_per_sec: int
    recipe_compilation: bool
    multi_account_switching: str = "manual"


TIER_LIMITS = {
    TenantTier.FREE: TierLimits(
        agent_executions_per_day=100,
        concurrent_agents=1,
        max_workflow_steps=10,
        sandbox_execution_minutes=5,
        tool_call_latency_p99_ms=2000,
        api_calls_per_day=100,
        webhook_ingestion_per_sec=10,
        recipe_compilation=False,
    ),
    TenantTier.GROWTH: TierLimits(
        agent_executions_per_day=10000,
        concurrent_agents=10,
        max_workflow_steps=50,
        sandbox_execution_minutes=10,
        tool_call_latency_p99_ms=1000,
        api_calls_per_day=10000,
        webhook_ingestion_per_sec=100,
        recipe_compilation=False,
    ),
    TenantTier.PRO: TierLimits(
        agent_executions_per_day=100000,
        concurrent_agents=50,
        max_workflow_steps=100,
        sandbox_execution_minutes=60,
        tool_call_latency_p99_ms=500,
        api_calls_per_day=100000,
        webhook_ingestion_per_sec=1000,
        recipe_compilation=True,
    ),
    TenantTier.ENTERPRISE: TierLimits(
        agent_executions_per_day=999999999,
        concurrent_agents=500,
        max_workflow_steps=500,
        sandbox_execution_minutes=240,
        tool_call_latency_p99_ms=200,
        api_calls_per_day=1000000,
        webhook_ingestion_per_sec=10000,
        recipe_compilation=True,
    ),
    TenantTier.TRANSCENDENT: TierLimits(
        agent_executions_per_day=999999999,
        concurrent_agents=999999999,
        max_workflow_steps=999999999,
        sandbox_execution_minutes=999999999,
        tool_call_latency_p99_ms=100,
        api_calls_per_day=999999999,
        webhook_ingestion_per_sec=100000,
        recipe_compilation=True,
        multi_account_switching="instant",
    ),
}


class Tenant(BaseModel):
    tenant_id: str = Field(..., pattern=r"^tenant_[a-z0-9_]+$")
    name: str
    tier: TenantTier = TenantTier.FREE
    created_at: datetime = Field(default_factory=datetime.utcnow)
    encryption_key_id: str
    sso_provider: Optional[str] = None
    mfa_required: bool = False
    webhook_secret: str = ""
    metadata: Dict[str, Any] = Field(default_factory=dict)
    active: bool = True

    def limits(self) -> TierLimits:
        return TIER_LIMITS[self.tier]
