import uuid
import time
import asyncio
from typing import Dict, List, Optional, Any
from datetime import datetime, timedelta
from enum import Enum

from ..models import AuditEvent, AuditAction, RiskLevel


class InterrogationStatus(str, Enum):
    PENDING = "pending"
    IN_REVIEW = "in_review"
    APPROVED = "approved"
    REJECTED = "rejected"
    MODIFIED = "modified"
    ESCALATED = "escalated"
    TIMED_OUT = "timed_out"


class RiskAssessor:
    def __init__(self):
        self._financial_threshold = 5000
        self._mass_operation_threshold = 500
        self._destructive_keywords = ["delete", "drop", "truncate", "remove", "destroy"]
        self._privilege_keywords = ["admin", "owner", "superuser", "root", "elevate"]

    def assess(self, tool_name: str, parameters: Dict[str, Any], agent_context: Dict[str, Any]) -> Dict[str, Any]:
        score = 0.0
        factors = []

        if any(kw in tool_name.lower() for kw in self._destructive_keywords):
            score += 0.4
            factors.append("destructive_action")

        if any(kw in tool_name.lower() for kw in self._privilege_keywords):
            score += 0.3
            factors.append("privilege_escalation")

        if "amount" in parameters:
            amount = float(parameters.get("amount", 0))
            if amount > self._financial_threshold:
                score += 0.3
                factors.append("high_value_transaction")

        if "count" in parameters:
            count = int(parameters.get("count", 0))
            if count > self._mass_operation_threshold:
                score += 0.2
                factors.append("mass_operation")

        if tool_name.startswith("n0va1o.delete") or tool_name.startswith("crm.delete"):
            score += 0.3
            factors.append("resource_deletion")

        level = "low"
        if score >= 0.8:
            level = "critical"
        elif score >= 0.5:
            level = "high"
        elif score >= 0.2:
            level = "medium"

        return {
            "score": round(score, 2),
            "level": level,
            "factors": factors,
            "requires_approval": score >= 0.5,
            "timeout_seconds": 14400 if level == "critical" else 86400,
        }


class InterrogationRoom:
    def __init__(self):
        self._rooms: Dict[str, Dict[str, Any]] = {}
        self._risk_assessor = RiskAssessor()

    async def evaluate_action(
        self,
        tool_name: str,
        parameters: Dict[str, Any],
        agent_id: str,
        session_id: str,
        reasoning_chain: List[str] = None,
    ) -> Dict[str, Any]:
        risk = self._risk_assessor.assess(tool_name, parameters, {})

        if not risk["requires_approval"]:
            return {
                "approved": True,
                "risk_score": risk["score"],
                "risk_level": risk["level"],
                "auto_approved": True,
            }

        room_id = f"room_{uuid.uuid4().hex[:12]}"
        room = {
            "room_id": room_id,
            "status": InterrogationStatus.PENDING,
            "tool_name": tool_name,
            "parameters": parameters,
            "agent_id": agent_id,
            "session_id": session_id,
            "risk_assessment": risk,
            "reasoning_chain": reasoning_chain or [],
            "created_at": datetime.utcnow(),
            "timeout_at": datetime.utcnow() + timedelta(seconds=risk["timeout_seconds"]),
            "decision": None,
            "decided_by": None,
            "digital_signature": None,
            "audit_trail": [],
        }
        self._rooms[room_id] = room

        return {
            "approved": False,
            "requires_interrogation": True,
            "room_id": room_id,
            "risk_score": risk["score"],
            "risk_level": risk["level"],
            "factors": risk["factors"],
            "timeout_seconds": risk["timeout_seconds"],
            "review_url": f"https://n0va1o.io/interrogation/{room_id}",
        }

    async def get_room(self, room_id: str) -> Optional[Dict[str, Any]]:
        room = self._rooms.get(room_id)
        if not room:
            return None

        if room["status"] == InterrogationStatus.PENDING and datetime.utcnow() > room["timeout_at"]:
            room["status"] = InterrogationStatus.TIMED_OUT
            room["decision"] = "auto_rejected"

        return room

    async def decide(
        self,
        room_id: str,
        decision: str,
        decided_by: str,
        digital_signature: str,
        modified_parameters: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        room = self._rooms.get(room_id)
        if not room:
            return {"error": "Room not found"}

        if room["status"] != InterrogationStatus.PENDING:
            return {"error": f"Room already {room['status']}"}

        if datetime.utcnow() > room["timeout_at"]:
            room["status"] = InterrogationStatus.TIMED_OUT
            return {"error": "Room timed out", "decision": "auto_rejected"}

        if decision == "approve":
            room["status"] = InterrogationStatus.APPROVED
            room["decision"] = "approved"
        elif decision == "reject":
            room["status"] = InterrogationStatus.REJECTED
            room["decision"] = "rejected"
        elif decision == "modify":
            room["status"] = InterrogationStatus.MODIFIED
            room["decision"] = "modified"
            room["parameters"] = modified_parameters or room["parameters"]
        elif decision == "escalate":
            room["status"] = InterrogationStatus.ESCALATED
            room["decision"] = "escalated"
        else:
            return {"error": "Invalid decision"}

        room["decided_by"] = decided_by
        room["digital_signature"] = digital_signature
        room["decided_at"] = datetime.utcnow().isoformat()
        room["audit_trail"].append({
            "action": decision,
            "by": decided_by,
            "at": room["decided_at"],
            "signature": digital_signature,
        })

        return {
            "room_id": room_id,
            "status": room["status"],
            "decision": room["decision"],
            "approved": decision in ("approve", "modify"),
        }

    async def get_pending_rooms(self, tenant_id: str = None) -> List[Dict[str, Any]]:
        pending = []
        for room in self._rooms.values():
            if room["status"] == InterrogationStatus.PENDING:
                if datetime.utcnow() <= room["timeout_at"]:
                    pending.append({
                        "room_id": room["room_id"],
                        "tool_name": room["tool_name"],
                        "risk_level": room["risk_assessment"]["level"],
                        "risk_score": room["risk_assessment"]["score"],
                        "created_at": room["created_at"].isoformat(),
                        "timeout_at": room["timeout_at"].isoformat(),
                        "agent_id": room["agent_id"],
                    })
        return pending

    def get_stats(self) -> Dict[str, Any]:
        total = len(self._rooms)
        by_status = {}
        for room in self._rooms.values():
            status = room["status"]
            by_status[status] = by_status.get(status, 0) + 1

        return {
            "total_rooms": total,
            "by_status": by_status,
            "pending": sum(1 for r in self._rooms.values() if r["status"] == InterrogationStatus.PENDING),
            "avg_decision_time_seconds": self._avg_decision_time(),
        }

    def _avg_decision_time(self) -> float:
        decided = [r for r in self._rooms.values() if r.get("decided_at")]
        if not decided:
            return 0.0

        times = []
        for r in decided:
            created = r["created_at"]
            decided_at = datetime.fromisoformat(r["decided_at"])
            times.append((decided_at - created).total_seconds())

        return sum(times) / len(times)
