import uuid
import time
import asyncio
from typing import Dict, List, Optional, Any, Callable
from datetime import datetime

from ..models import (
    ToolDefinition, ToolCall, ToolResult, RiskLevel, IntentDiscoveryRequest, IntentDiscoveryResult,
)


class ToolRegistry:
    def __init__(self):
        self._tools: Dict[str, ToolDefinition] = {}
        self._handlers: Dict[str, Callable] = {}
        self._usage_stats: Dict[str, Dict[str, Any]] = {}
        self._rate_limits: Dict[str, Dict[str, Any]] = {}

    def load_builtin_tools(self):
        tools = [
            ToolDefinition(
                name="dropbox.search_files",
                provider="dropbox",
                description="Search for files in Dropbox by name, content, or metadata",
                parameters={
                    "query": {"type": "string", "description": "Search query"},
                    "path": {"type": "string", "description": "Folder path to search in"},
                    "max_results": {"type": "integer", "default": 20},
                    "file_extensions": {"type": "array", "items": {"type": "string"}},
                },
                required_scopes=["files.content.read"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=450,
            ),
            ToolDefinition(
                name="dropbox.download_file",
                provider="dropbox",
                description="Download a file from Dropbox to the sandbox",
                parameters={
                    "path": {"type": "string", "description": "File path in Dropbox"},
                    "destination": {"type": "string", "description": "Sandbox destination path"},
                },
                required_scopes=["files.content.read"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=800,
            ),
            ToolDefinition(
                name="csv_converter.convert",
                provider="csv_converter",
                description="Convert files (PDF, Excel) to CSV format with OCR support",
                parameters={
                    "source_format": {"type": "string", "enum": ["pdf", "xlsx", "docx"]},
                    "target_format": {"type": "string", "default": "csv"},
                    "ocr_enabled": {"type": "boolean", "default": True},
                    "preserve_headers": {"type": "boolean", "default": True},
                },
                required_scopes=["sandbox.execute"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=2000,
            ),
            ToolDefinition(
                name="n0va_sheets.import_csv",
                provider="n0va_sheets",
                description="Import CSV data into N0VA Sheets workbook",
                parameters={
                    "workbook_id": {"type": "string"},
                    "sheet_name": {"type": "string", "default": "Sheet1"},
                    "data": {"type": "string", "description": "CSV data or file pointer"},
                    "append_mode": {"type": "boolean", "default": False},
                    "deduplicate": {"type": "boolean", "default": True},
                },
                required_scopes=["sheets.write"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=800,
            ),
            ToolDefinition(
                name="slack.post_message",
                provider="slack",
                description="Post a message to a Slack channel or user",
                parameters={
                    "channel": {"type": "string", "description": "Channel name or user ID"},
                    "message": {"type": "string", "description": "Message content"},
                    "blocks": {"type": "array", "description": "Rich message blocks"},
                    "thread_ts": {"type": "string", "description": "Thread timestamp for replies"},
                    "priority": {"type": "string", "enum": ["low", "normal", "high"], "default": "normal"},
                },
                required_scopes=["chat:write"],
                risk_level=RiskLevel.MEDIUM,
                estimated_latency_ms=300,
            ),
            ToolDefinition(
                name="google_drive.read",
                provider="google_drive",
                description="Read files from Google Drive",
                parameters={
                    "file_id": {"type": "string"},
                    "mime_type": {"type": "string"},
                    "query": {"type": "string"},
                },
                required_scopes=["drive.readonly"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=600,
            ),
            ToolDefinition(
                name="salesforce.create",
                provider="salesforce",
                description="Create a record in Salesforce",
                parameters={
                    "object_type": {"type": "string", "description": "Salesforce object type"},
                    "fields": {"type": "object", "description": "Field values for the record"},
                },
                required_scopes=["api"],
                risk_level=RiskLevel.MEDIUM,
                estimated_latency_ms=700,
            ),
            ToolDefinition(
                name="github.read",
                provider="github",
                description="Read GitHub repositories, issues, pull requests",
                parameters={
                    "owner": {"type": "string"},
                    "repo": {"type": "string"},
                    "resource": {"type": "string", "enum": ["repo", "issues", "pulls", "commits"]},
                },
                required_scopes=["read:user"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=500,
            ),
            ToolDefinition(
                name="meta_ads.read_campaigns",
                provider="meta_ads",
                description="Read Meta Ads campaign data including performance metrics",
                parameters={
                    "account_id": {"type": "string"},
                    "date_range": {"type": "string"},
                    "fields": {"type": "array", "items": {"type": "string"}},
                },
                required_scopes=["ads_read"],
                risk_level=RiskLevel.LOW,
                estimated_latency_ms=900,
            ),
            ToolDefinition(
                name="meta_ads.update_budget",
                provider="meta_ads",
                description="Update campaign budget in Meta Ads",
                parameters={
                    "campaign_id": {"type": "string"},
                    "budget_amount": {"type": "number"},
                    "budget_type": {"type": "string", "enum": ["daily", "lifetime"]},
                },
                required_scopes=["ads_management"],
                risk_level=RiskLevel.HIGH,
                estimated_latency_ms=600,
            ),
        ]

        for tool in tools:
            self._tools[tool.name] = tool
            self._usage_stats[tool.name] = {
                "total_calls": 0,
                "successful_calls": 0,
                "failed_calls": 0,
                "total_latency_ms": 0,
                "last_called": None,
            }

    def register_handler(self, tool_name: str, handler: Callable):
        self._handlers[tool_name] = handler

    def get_tool(self, name: str) -> Optional[ToolDefinition]:
        return self._tools.get(name)

    def get_catalog(self, provider: Optional[str] = None) -> List[ToolDefinition]:
        tools = list(self._tools.values())
        if provider:
            tools = [t for t in tools if t.provider == provider]
        return tools

    def get_providers(self) -> List[str]:
        return list(set(t.provider for t in self._tools.values()))

    def get_available_tools(self, permissions: List[Any]) -> List[str]:
        available = []
        for tool in self._tools.values():
            if tool.risk_level != RiskLevel.CRITICAL:
                available.append(tool.name)
        return available

    async def execute_tool(
        self,
        tool_name: str,
        parameters: Dict[str, Any],
        session_id: str,
    ) -> ToolResult:
        call_id = f"call_{uuid.uuid4().hex[:16]}"
        start_time = time.time()

        tool = self._tools.get(tool_name)
        if not tool:
            return ToolResult(
                call_id=call_id,
                success=False,
                error=f"Tool '{tool_name}' not found",
                latency_ms=int((time.time() - start_time) * 1000),
            )

        self._check_rate_limit(tool_name)

        try:
            handler = self._handlers.get(tool_name)
            if handler:
                result_data = await handler(parameters, session_id)
            else:
                result_data = await self._simulate_tool_execution(tool, parameters)

            latency_ms = int((time.time() - start_time) * 1000)

            self._usage_stats[tool_name]["total_calls"] += 1
            self._usage_stats[tool_name]["successful_calls"] += 1
            self._usage_stats[tool_name]["total_latency_ms"] += latency_ms
            self._usage_stats[tool_name]["last_called"] = datetime.utcnow().isoformat()

            return ToolResult(
                call_id=call_id,
                success=True,
                data=result_data,
                latency_ms=latency_ms,
                risk_score=self._calculate_risk_score(tool, parameters),
            )
        except Exception as e:
            latency_ms = int((time.time() - start_time) * 1000)
            self._usage_stats[tool_name]["total_calls"] += 1
            self._usage_stats[tool_name]["failed_calls"] += 1

            return ToolResult(
                call_id=call_id,
                success=False,
                error=str(e),
                latency_ms=latency_ms,
            )

    async def _simulate_tool_execution(self, tool: ToolDefinition, params: Dict[str, Any]) -> Dict[str, Any]:
        await asyncio.sleep(min(tool.estimated_latency_ms / 1000, 0.5))

        simulators = {
            "dropbox.search_files": lambda p: {
                "files": [
                    {"name": "Q3_Invoice_001.pdf", "path": "/Finance/Q3_2026/Invoices/", "size": 245000},
                    {"name": "Q3_Invoice_002.pdf", "path": "/Finance/Q3_2026/Invoices/", "size": 312000},
                ],
                "total_found": 2,
                "query": p.get("query", ""),
            },
            "slack.post_message": lambda p: {
                "ok": True,
                "channel": p.get("channel", "#general"),
                "ts": f"{int(time.time())}.123456",
                "message": {"text": p.get("message", "")},
            },
            "csv_converter.convert": lambda p: {
                "converted": True,
                "rows": 150,
                "columns": 12,
                "output_file": "/sandbox/outputs/converted.csv",
                "format": p.get("target_format", "csv"),
            },
            "n0va_sheets.import_csv": lambda p: {
                "imported": True,
                "sheet_url": f"https://sheets.n0va.io/wb/{p.get('workbook_id', 'default')}",
                "row_count": 150,
                "sheet_name": p.get("sheet_name", "Sheet1"),
            },
        }

        simulator = simulators.get(tool.name)
        if simulator:
            return simulator(params)

        return {"executed": True, "tool": tool.name, "parameters": params, "timestamp": time.time()}

    def _check_rate_limit(self, tool_name: str):
        now = time.time()
        if tool_name not in self._rate_limits:
            self._rate_limits[tool_name] = {"count": 0, "window_start": now}

        limit = self._rate_limits[tool_name]
        if now - limit["window_start"] > 3600:
            limit["count"] = 0
            limit["window_start"] = now
        limit["count"] += 1

    def _calculate_risk_score(self, tool: ToolDefinition, params: Dict[str, Any]) -> float:
        base_scores = {
            RiskLevel.LOW: 0.1,
            RiskLevel.MEDIUM: 0.4,
            RiskLevel.HIGH: 0.7,
            RiskLevel.CRITICAL: 0.9,
        }
        return base_scores.get(tool.risk_level, 0.5)

    def get_usage_stats(self, tool_name: Optional[str] = None) -> Dict[str, Any]:
        if tool_name:
            return {tool_name: self._usage_stats.get(tool_name, {})}
        return self._usage_stats

    def search_tools(self, query: str, max_results: int = 10) -> List[ToolDefinition]:
        query_lower = query.lower()
        scored = []

        for tool in self._tools.values():
            score = 0.0
            if query_lower in tool.name.lower():
                score += 0.5
            if query_lower in tool.description.lower():
                score += 0.3
            if query_lower in tool.provider.lower():
                score += 0.2

            words = query_lower.split()
            for word in words:
                if word in tool.name.lower():
                    score += 0.1
                if word in tool.description.lower():
                    score += 0.05

            if score > 0:
                scored.append((score, tool))

        scored.sort(key=lambda x: x[0], reverse=True)
        return [tool for _, tool in scored[:max_results]]
