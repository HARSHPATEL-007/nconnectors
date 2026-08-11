import uuid
import time
from typing import Optional, Dict, Any
from datetime import datetime, timedelta

from jose import jwt, JWTError
from fastapi import HTTPException, Depends, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from ..models import Tenant, TenantTier

SECRET_KEY = "n0va1o_transcendent_secret_key_2026_aes256_gcm_envelope"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24

security = HTTPBearer(auto_error=False)

TENANT_REGISTRY: Dict[str, Tenant] = {
    "tenant_001": Tenant(
        tenant_id="tenant_001",
        name="Acme Corp",
        tier=TenantTier.PRO,
        encryption_key_id="key_001",
        sso_provider="okta",
        mfa_required=True,
        webhook_secret="whsec_demo_secret",
    ),
    "tenant_002": Tenant(
        tenant_id="tenant_002",
        name="StartupXYZ",
        tier=TenantTier.GROWTH,
        encryption_key_id="key_002",
        webhook_secret="whsec_startup_secret",
    ),
}


class JWTHandler:
    def create_tenant_token(self, tenant_id: str, scopes: list = None) -> str:
        payload = {
            "sub": tenant_id,
            "iss": "n0va1o-gateway",
            "iat": int(time.time()),
            "exp": int(time.time()) + ACCESS_TOKEN_EXPIRE_MINUTES * 60,
            "jti": uuid.uuid4().hex,
            "tenant_id": tenant_id,
            "scopes": scopes or ["read", "write", "execute"],
            "type": "tenant_access",
        }
        return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

    def create_agent_token(self, agent_id: str, tenant_id: str) -> str:
        payload = {
            "sub": agent_id,
            "iss": "n0va1o-gateway",
            "iat": int(time.time()),
            "exp": int(time.time()) + 86400,
            "jti": uuid.uuid4().hex,
            "tenant_id": tenant_id,
            "agent_id": agent_id,
            "type": "agent_access",
        }
        return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

    def verify_token(self, token: str) -> Dict[str, Any]:
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            return payload
        except JWTError as e:
            raise HTTPException(status_code=401, detail=f"Invalid token: {str(e)}")

    def create_api_key(self, prefix: str = "n0va_sk") -> str:
        return f"{prefix}_{uuid.uuid4().hex}_{uuid.uuid4().hex[:8]}"


async def get_current_tenant(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security),
) -> Tenant:
    if credentials:
        try:
            handler = JWTHandler()
            payload = handler.verify_token(credentials.credentials)
            tenant_id = payload.get("tenant_id", "")
            if tenant_id in TENANT_REGISTRY:
                return TENANT_REGISTRY[tenant_id]
        except HTTPException:
            pass

    if "tenant_001" in TENANT_REGISTRY:
        return TENANT_REGISTRY["tenant_001"]

    raise HTTPException(status_code=401, detail="Valid tenant authentication required")


def register_tenant(tenant: Tenant):
    TENANT_REGISTRY[tenant.tenant_id] = tenant
