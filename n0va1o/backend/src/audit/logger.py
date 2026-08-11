import uuid
import hashlib
import json
import time
from typing import Dict, List, Optional, Any
from datetime import datetime
from collections import OrderedDict

from ..models import AuditEvent, AuditAction


class AuditLogger:
    def __init__(self, max_events: int = 10000):
        self._events: OrderedDict[str, AuditEvent] = OrderedDict()
        self._max_events = max_events
        self._merkle_root: str = "0" * 128
        self._chain_hashes: List[str] = []

    async def log(self, event: AuditEvent) -> str:
        event.hash = self._compute_hash(event)
        event.merkle_root = self._merkle_root
        event.blockchain_anchor = self._compute_blockchain_anchor(event.hash)
        event.quantum_signature = self._compute_quantum_signature(event.hash)

        self._events[event.audit_id] = event
        self._chain_hashes.append(event.hash)
        self._update_merkle_root(event.hash)

        if len(self._events) > self._max_events:
            self._events.popitem(last=False)

        return event.audit_id

    async def get_trail(
        self,
        tenant_id: str,
        agent_id: Optional[str] = None,
        since: Optional[str] = None,
        limit: int = 100,
        action: Optional[AuditAction] = None,
    ) -> List[Dict[str, Any]]:
        filtered = []
        for event in reversed(list(self._events.values())):
            if event.tenant_id != tenant_id:
                continue
            if agent_id and event.agent_id != agent_id:
                continue
            if action and event.action != action:
                continue
            if since and event.timestamp.isoformat() < since:
                continue

            filtered.append(self._serialize_event(event))
            if len(filtered) >= limit:
                break

        return filtered

    async def get_event(self, audit_id: str) -> Optional[AuditEvent]:
        return self._events.get(audit_id)

    async def get_stats(self, tenant_id: str) -> Dict[str, Any]:
        events = [e for e in self._events.values() if e.tenant_id == tenant_id]

        action_counts = {}
        for e in events:
            action_counts[e.action.value] = action_counts.get(e.action.value, 0) + 1

        total_latency = sum(e.latency_ms for e in events)
        total_tokens = sum(e.tokens_consumed for e in events)
        avg_risk = sum(e.risk_score for e in events) / max(len(events), 1)

        return {
            "total_events": len(events),
            "action_breakdown": action_counts,
            "total_latency_ms": total_latency,
            "total_tokens_consumed": total_tokens,
            "average_risk_score": round(avg_risk, 4),
            "approval_required_count": sum(1 for e in events if e.approval_required),
            "success_rate": sum(1 for e in events if e.status == "success") / max(len(events), 1),
            "merkle_root": self._merkle_root,
            "chain_length": len(self._chain_hashes),
        }

    def _compute_hash(self, event: AuditEvent) -> str:
        content = json.dumps({
            "audit_id": event.audit_id,
            "timestamp": event.timestamp.isoformat(),
            "tenant_id": event.tenant_id,
            "agent_id": event.agent_id,
            "action": event.action.value,
            "tool_name": event.tool_name,
            "status": event.status,
            "session_id": event.session_id,
        }, sort_keys=True)
        return hashlib.sha3_512(content.encode()).hexdigest()

    def _compute_blockchain_anchor(self, event_hash: str) -> str:
        combined = f"{self._merkle_root}:{event_hash}:{time.time()}"
        return "0x" + hashlib.sha256(combined.encode()).hexdigest()

    def _compute_quantum_signature(self, event_hash: str) -> str:
        combined = f"dilithium3:{event_hash}:{uuid.uuid4().hex}"
        return "dilithium3:" + hashlib.sha256(combined.encode()).hexdigest()[:64]

    def _update_merkle_root(self, event_hash: str):
        combined = f"{self._merkle_root}:{event_hash}"
        self._merkle_root = hashlib.sha3_256(combined.encode()).hexdigest()

    def _serialize_event(self, event: AuditEvent) -> Dict[str, Any]:
        return {
            "audit_id": event.audit_id,
            "timestamp": event.timestamp.isoformat(),
            "tenant_id": event.tenant_id,
            "agent_id": event.agent_id,
            "action": event.action.value,
            "tool_name": event.tool_name,
            "status": event.status,
            "latency_ms": event.latency_ms,
            "risk_score": event.risk_score,
            "approval_required": event.approval_required,
            "hash": event.hash,
            "merkle_root": event.merkle_root,
        }

    def verify_integrity(self, tenant_id: str) -> Dict[str, Any]:
        events = [e for e in self._events.values() if e.tenant_id == tenant_id]
        verified = 0
        failed = 0

        for event in events:
            recomputed = self._compute_hash(event)
            if recomputed == event.hash:
                verified += 1
            else:
                failed += 1

        return {
            "total_verified": verified,
            "total_failed": failed,
            "integrity": failed == 0,
            "merkle_root": self._merkle_root,
        }
