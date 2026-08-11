import uuid
import re
from typing import Dict, List, Optional, Any
from datetime import datetime

from ..models import IntentDiscoveryRequest, IntentDiscoveryResult, RiskLevel
from .registry import ToolRegistry


class IntentRouter:
    def __init__(self, tool_registry: ToolRegistry):
        self.tool_registry = tool_registry
        self._intent_patterns = self._build_intent_patterns()

    def _build_intent_patterns(self) -> Dict[str, Dict[str, Any]]:
        return {
            "cross_platform_file_workflow": {
                "keywords": ["find", "search", "convert", "upload", "import", "export", "csv", "pdf", "file"],
                "providers": ["dropbox", "google_drive", "csv_converter", "n0va_sheets"],
                "workflow_template": "search -> convert -> import -> notify",
            },
            "campaign_management": {
                "keywords": ["campaign", "ad", "budget", "bid", "audience", "creative", "meta", "google ads"],
                "providers": ["meta_ads", "google_ads"],
                "workflow_template": "analyze -> optimize -> update -> report",
            },
            "crm_sync": {
                "keywords": ["lead", "contact", "deal", "opportunity", "crm", "salesforce", "hubspot"],
                "providers": ["salesforce", "hubspot"],
                "workflow_template": "detect -> create -> assign -> notify",
            },
            "notification_workflow": {
                "keywords": ["notify", "message", "slack", "teams", "email", "alert", "send"],
                "providers": ["slack", "teams"],
                "workflow_template": "trigger -> format -> send -> confirm",
            },
            "data_analysis": {
                "keywords": ["analyze", "report", "metrics", "dashboard", "data", "statistics"],
                "providers": ["n0va_sheets", "csv_converter"],
                "workflow_template": "extract -> transform -> load -> visualize",
            },
        }

    async def discover(self, request: IntentDiscoveryRequest) -> IntentDiscoveryResult:
        intent = self._classify_intent(request.query)
        relevant_tools = self._find_relevant_tools(request, intent)
        pruned_tools = self._apply_scope_pruning(relevant_tools, request)

        total_latency = sum(t.get("estimated_latency_ms", 500) for t in pruned_tools)
        tokens_saved = max(0, (len(relevant_tools) - len(pruned_tools)) * 2000)

        return IntentDiscoveryResult(
            intent=intent["name"],
            confidence=intent["confidence"],
            tools=pruned_tools[:request.max_tools],
            suggested_workflow=intent.get("workflow", "sequential"),
            context_tokens_saved=tokens_saved,
            total_estimated_latency_ms=total_latency,
            fallback_tools=self._get_fallback_tools(intent["name"], pruned_tools),
        )

    def _classify_intent(self, query: str) -> Dict[str, Any]:
        query_lower = query.lower()
        best_match = {"name": "general_purpose", "confidence": 0.5, "workflow": "sequential"}

        for intent_name, pattern in self._intent_patterns.items():
            match_count = sum(1 for kw in pattern["keywords"] if kw in query_lower)
            if match_count > 0:
                confidence = min(0.95, 0.4 + (match_count * 0.15))
                if confidence > best_match["confidence"]:
                    best_match = {
                        "name": intent_name,
                        "confidence": confidence,
                        "workflow": pattern["workflow_template"],
                        "providers": pattern["providers"],
                    }

        return best_match

    def _find_relevant_tools(self, request: IntentDiscoveryRequest, intent: Dict[str, Any]) -> List[Dict[str, Any]]:
        scored_tools = []
        query_lower = request.query.lower()

        for tool in self.tool_registry.get_catalog():
            if tool.deprecated and not request.include_deprecated:
                continue

            if tool.risk_level == RiskLevel.CRITICAL and request.risk_tolerance != "high":
                continue

            relevance = self._calculate_relevance(tool, query_lower, intent)
            if relevance > 0.1:
                scored_tools.append({
                    "name": tool.name,
                    "relevance": round(relevance, 2),
                    "reason": self._generate_reason(tool, query_lower),
                    "estimated_latency_ms": tool.estimated_latency_ms,
                    "required_scopes": tool.required_scopes,
                    "risk_level": tool.risk_level.value,
                    "deprecated": tool.deprecated,
                })

        scored_tools.sort(key=lambda x: x["relevance"], reverse=True)
        return scored_tools

    def _calculate_relevance(self, tool, query: str, intent: Dict[str, Any]) -> float:
        score = 0.0

        if any(word in tool.name.lower() for word in query.split()):
            score += 0.4

        if any(word in tool.description.lower() for word in query.split()):
            score += 0.2

        intent_providers = intent.get("providers", [])
        if tool.provider in intent_providers:
            score += 0.3

        if "search" in query and "search" in tool.name:
            score += 0.2
        if "convert" in query and "convert" in tool.name:
            score += 0.2
        if "upload" in query and "import" in tool.name:
            score += 0.2
        if "notify" in query and "post" in tool.name:
            score += 0.2

        return min(score, 1.0)

    def _generate_reason(self, tool, query: str) -> str:
        reasons = {
            "dropbox": "Search and retrieve files from Dropbox",
            "csv_converter": "Convert between file formats with data extraction",
            "n0va_sheets": "Import and manage spreadsheet data",
            "slack": "Send notifications and messages to channels",
            "google_drive": "Access files from Google Drive",
            "salesforce": "Create and manage CRM records",
            "github": "Read repository data and manage code",
            "meta_ads": "Manage advertising campaigns and budgets",
        }
        return reasons.get(tool.provider, f"Execute {tool.name} operations")

    def _apply_scope_pruning(self, tools: List[Dict[str, Any]], request: IntentDiscoveryRequest) -> List[Dict[str, Any]]:
        if request.risk_tolerance == "low":
            tools = [t for t in tools if t.get("risk_level") == "low"]
        elif request.risk_tolerance == "medium":
            tools = [t for t in tools if t.get("risk_level") in ("low", "medium")]

        if request.preferred_latency == "low":
            tools.sort(key=lambda x: x.get("estimated_latency_ms", 1000))

        return tools

    def _get_fallback_tools(self, intent_name: str, selected_tools: List[Dict[str, Any]]) -> List[str]:
        selected_names = {t["name"] for t in selected_tools}
        fallbacks = []

        fallback_map = {
            "dropbox.search_files": ["google_drive.read"],
            "google_drive.read": ["dropbox.search_files"],
            "slack.post_message": ["teams.send_message"],
            "salesforce.create": ["hubspot.create_contact"],
        }

        for tool_name in selected_names:
            if tool_name in fallback_map:
                for fallback in fallback_map[tool_name]:
                    if fallback not in selected_names:
                        fallbacks.append(fallback)

        return fallbacks[:3]
