from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum
from datetime import datetime


class ConnectionStatus(str, Enum):
    PROVISIONING = "provisioning"
    ACTIVE = "active"
    REFRESHING = "refreshing"
    DEGRADED = "degraded"
    FAILED = "failed"
    REVOKED = "revoked"


class AuthType(str, Enum):
    OAUTH2_1 = "oauth2.1"
    OAUTH2 = "oauth2.0"
    OAUTH1 = "oauth1.0a"
    SAML2 = "saml2.0"
    OIDC = "oidc"
    JWT = "jwt"
    API_KEY = "api_key"
    AWS_SIGV4 = "aws_signature_v4"
    AZURE_SAS = "azure_sas"
    BASIC = "basic"


class EncryptedTokens(BaseModel):
    access_token: str = ""
    refresh_token: str = ""
    expires_at: Optional[datetime] = None
    scopes: List[str] = Field(default_factory=list)


class AttestationReport(BaseModel):
    tpm_quote: str = ""
    secure_enclave_cert: str = ""
    measured_boot: str = ""


class Connection(BaseModel):
    connection_id: str = Field(..., pattern=r"^conn_[a-z0-9_]+$")
    tenant_id: str
    user_id: str
    provider: str
    auth_type: AuthType
    encrypted_tokens: EncryptedTokens = Field(default_factory=EncryptedTokens)
    allowed_actions: List[str] = Field(default_factory=list)
    blocked_actions: List[str] = Field(default_factory=list)
    jit_enabled: bool = True
    provisioned_at: Optional[datetime] = None
    auto_refresh: bool = True
    kyber_public_key: str = ""
    dilithium_signature: str = ""
    last_used: Optional[datetime] = None
    usage_count: int = 0
    health_score: float = 1.0
    status: ConnectionStatus = ConnectionStatus.PROVISIONING
    attestation_report: Optional[AttestationReport] = None
    metadata: Dict[str, Any] = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=datetime.utcnow)
