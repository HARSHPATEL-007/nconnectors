from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


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


class SandboxStatus(str, Enum):
    PROVISIONING = "provisioning"
    RUNNING = "running"
    COMPLETED = "completed"
    FAILED = "failed"
    TIMEOUT = "timeout"
    TERMINATED = "terminated"


class SandboxExecution(BaseModel):
    execution_id: str
    session_id: str
    tenant_id: str
    config: SandboxConfig
    status: SandboxStatus = SandboxStatus.PROVISIONING
    code: str = ""
    language: str = "python"
    output: str = ""
    error: str = ""
    exit_code: Optional[int] = None
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    memory_peak_mb: int = 0
    cpu_time_ms: int = 0
    files_created: List[str] = Field(default_factory=list)
