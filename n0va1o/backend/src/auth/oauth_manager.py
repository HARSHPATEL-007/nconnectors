import uuid
import time
import hashlib
import secrets
from typing import Dict, Optional, List, Any
from datetime import datetime, timedelta

from .jwt_handler import JWTHandler


class OAuthManager:
    def __init__(self):
        self.jwt_handler = JWTHandler()
        self._auth_links: Dict[str, Dict[str, Any]] = {}
        self._pending_provisions: Dict[str, Dict[str, Any]] = {}

    def generate_auth_link(
        self,
        tenant_id: str,
        provider: str,
        redirect_uri: str,
        scopes: List[str],
    ) -> str:
        link_id = f"auth_{uuid.uuid4().hex[:16]}"
        token = secrets.token_urlsafe(48)

        self._auth_links[link_id] = {
            "link_id": link_id,
            "tenant_id": tenant_id,
            "provider": provider,
            "redirect_uri": redirect_uri,
            "scopes": scopes,
            "token": token,
            "created_at": datetime.utcnow(),
            "expires_at": datetime.utcnow() + timedelta(minutes=15),
            "status": "pending",
            "single_use": True,
        }

        return f"https://connect.n0va1o.io/auth/{link_id}?token={token}&provider={provider}"

    def verify_auth_link(self, link_id: str, token: str) -> Optional[Dict[str, Any]]:
        link = self._auth_links.get(link_id)
        if not link:
            return None

        if link["status"] != "pending":
            return None

        if datetime.utcnow() > link["expires_at"]:
            link["status"] = "expired"
            return None

        if not secrets.compare_digest(link["token"], token):
            return None

        return link

    def complete_auth(
        self,
        link_id: str,
        access_token: str,
        refresh_token: str,
        expires_in: int = 3600,
    ) -> Dict[str, Any]:
        link = self._auth_links.get(link_id)
        if not link:
            raise ValueError("Invalid auth link")

        link["status"] = "completed"
        link["completed_at"] = datetime.utcnow()

        encrypted_access = self._encrypt_token(access_token, link["tenant_id"])
        encrypted_refresh = self._encrypt_token(refresh_token, link["tenant_id"])

        return {
            "connection_id": f"conn_{link['provider']}_{uuid.uuid4().hex[:8]}",
            "provider": link["provider"],
            "tenant_id": link["tenant_id"],
            "encrypted_tokens": {
                "access_token": encrypted_access,
                "refresh_token": encrypted_refresh,
                "expires_at": datetime.utcnow() + timedelta(seconds=expires_in),
                "scopes": link["scopes"],
            },
            "status": "active",
            "provisioned_at": datetime.utcnow().isoformat(),
        }

    def refresh_token(self, connection_id: str, encrypted_tokens: Dict[str, Any]) -> Dict[str, Any]:
        new_access = secrets.token_urlsafe(64)
        new_refresh = secrets.token_urlsafe(64)
        tenant_id = encrypted_tokens.get("tenant_id", "unknown")

        return {
            "access_token": self._encrypt_token(new_access, tenant_id),
            "refresh_token": self._encrypt_token(new_refresh, tenant_id),
            "expires_at": datetime.utcnow() + timedelta(days=15),
            "rotated_at": datetime.utcnow().isoformat(),
        }

    def _encrypt_token(self, token: str, tenant_id: str) -> str:
        key_material = f"{tenant_id}:{SECRET_KEY}"
        key_hash = hashlib.sha256(key_material.encode()).hexdigest()[:16]
        return f"enc_{key_hash}:{token[::-1]}"

    def provision_jit(
        self,
        tenant_id: str,
        provider: str,
        intent: str,
        agent_id: str,
    ) -> Dict[str, Any]:
        provision_id = f"jit_{uuid.uuid4().hex[:12]}"

        required_scopes = self._get_scopes_for_intent(provider, intent)

        self._pending_provisions[provision_id] = {
            "provision_id": provision_id,
            "tenant_id": tenant_id,
            "provider": provider,
            "intent": intent,
            "agent_id": agent_id,
            "required_scopes": required_scopes,
            "created_at": datetime.utcnow(),
            "status": "awaiting_auth",
        }

        auth_link = self.generate_auth_link(
            tenant_id=tenant_id,
            provider=provider,
            redirect_uri=f"https://connect.n0va1o.io/callback/{provision_id}",
            scopes=required_scopes,
        )

        return {
            "provision_id": provision_id,
            "auth_link": auth_link,
            "required_scopes": required_scopes,
            "expires_in_seconds": 900,
            "message": f"JIT auth required for {provider}. User must authorize via Connect Link.",
        }

    def _get_scopes_for_intent(self, provider: str, intent: str) -> List[str]:
        scope_map = {
            "meta_ads": {
                "default": ["ads_read"],
                "campaign_management": ["ads_read", "ads_management", "business_management"],
                "reporting": ["ads_read", "read_insights"],
            },
            "google_ads": {
                "default": ["adwords"],
                "campaign_management": ["adwords", "campaigns"],
            },
            "salesforce": {
                "default": ["api"],
                "crm_write": ["api", "refresh_token"],
            },
            "slack": {
                "default": ["chat:read"],
                "messaging": ["chat:read", "chat:write"],
            },
            "github": {
                "default": ["read:user"],
                "repo_access": ["read:user", "repo"],
            },
        }

        provider_scopes = scope_map.get(provider, {"default": ["read"]})
        return provider_scopes.get(intent, provider_scopes.get("default", ["read"]))


SECRET_KEY = "n0va1o_transcendent_secret_key_2026_aes256_gcm_envelope"
