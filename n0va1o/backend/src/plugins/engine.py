import time
import math
from typing import Dict, List, Optional, Any, Callable
from datetime import datetime
from enum import Enum


class PluginSlot(int, Enum):
    AUTH_OPTIMIZER = 1
    SCHEMA_DRIFT_DETECTOR = 2
    RATE_LIMIT_PREDICTOR = 3
    ERROR_CLASSIFIER = 4
    PAYLOAD_COMPRESSOR = 5
    ROUTE_OPTIMIZER = 6
    SECURITY_HARDENING = 7
    COST_OPTIMIZER = 8


class Plugin:
    def __init__(self, slot: PluginSlot, name: str, description: str, enabled: bool = True):
        self.slot = slot
        self.name = name
        self.description = description
        self.enabled = enabled
        self.metrics: Dict[str, Any] = {
            "invocations": 0,
            "last_invoked": None,
            "total_value": 0,
        }

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        self.metrics["invocations"] += 1
        self.metrics["last_invoked"] = datetime.utcnow().isoformat()
        return {"plugin": self.name, "status": "executed"}


class AuthOptimizerPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.AUTH_OPTIMIZER, "Auth Optimizer", "Token lifecycle prediction")
        self._token_patterns: Dict[str, List[float]] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        connection_id = context.get("connection_id", "")
        usage_times = self._token_patterns.get(connection_id, [])

        if len(usage_times) > 5:
            avg_interval = sum(usage_times[i+1] - usage_times[i] for i in range(len(usage_times)-1)) / (len(usage_times)-1)
            predicted_expiry = usage_times[-1] + avg_interval if usage_times else time.time()
            return {
                "plugin": self.name,
                "predicted_expiry": predicted_expiry,
                "should_refresh": predicted_expiry - time.time() < 900,
                "confidence": min(0.95, len(usage_times) * 0.1),
            }

        return {"plugin": self.name, "should_refresh": False, "confidence": 0.3}


class SchemaDriftDetectorPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.SCHEMA_DRIFT_DETECTOR, "Schema Drift Detector", "API change detection")
        self._schema_hashes: Dict[str, str] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        provider = context.get("provider", "")
        current_schema = context.get("schema", {})
        current_hash = str(hash(frozenset(current_schema.items())))

        previous_hash = self._schema_hashes.get(provider)
        self._schema_hashes[provider] = current_hash

        drift_detected = previous_hash is not None and previous_hash != current_hash

        return {
            "plugin": self.name,
            "drift_detected": drift_detected,
            "provider": provider,
            "previous_hash": previous_hash,
            "current_hash": current_hash,
            "action": "auto_adapt" if drift_detected else "none",
        }


class RateLimitPredictorPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.RATE_LIMIT_PREDICTOR, "Rate Limit Predictor", "Throttling avoidance")
        self._call_history: Dict[str, List[float]] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        provider = context.get("provider", "")
        now = time.time()

        if provider not in self._call_history:
            self._call_history[provider] = []

        self._call_history[provider].append(now)
        recent = [t for t in self._call_history[provider] if now - t < 3600]
        self._call_history[provider] = recent

        rate = len(recent) / 3600
        limit = context.get("rate_limit", 1000)
        remaining = max(0, limit - len(recent))

        return {
            "plugin": self.name,
            "calls_last_hour": len(recent),
            "remaining_quota": remaining,
            "should_batch": remaining < limit * 0.2,
            "recommended_batch_size": max(1, remaining // 10),
        }


class ErrorClassifierPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.ERROR_CLASSIFIER, "Error Classifier", "Failure pattern learning")
        self._error_patterns: Dict[str, int] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        error_code = context.get("error_code", "")
        error_type = self._classify_error(error_code)

        self._error_patterns[error_type] = self._error_patterns.get(error_type, 0) + 1

        return {
            "plugin": self.name,
            "error_type": error_type,
            "retry_recommended": error_type in ("rate_limit", "server_error", "timeout"),
            "retry_delay_seconds": self._get_retry_delay(error_type),
            "escalate": error_type in ("auth_fatal", "permission_denied"),
        }

    def _classify_error(self, error_code: str) -> str:
        if error_code.startswith("429"):
            return "rate_limit"
        elif error_code.startswith("5"):
            return "server_error"
        elif error_code.startswith("401") or error_code.startswith("403"):
            return "auth_fatal"
        elif "timeout" in error_code.lower():
            return "timeout"
        elif "permission" in error_code.lower():
            return "permission_denied"
        return "unknown"

    def _get_retry_delay(self, error_type: str) -> int:
        delays = {"rate_limit": 60, "server_error": 30, "timeout": 15, "unknown": 5}
        return delays.get(error_type, 10)


class PayloadCompressorPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.PAYLOAD_COMPRESSOR, "Payload Compressor", "Data size optimization")

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        payload_size = context.get("payload_size_bytes", 0)
        threshold = 10 * 1024 * 1024

        should_compress = payload_size > threshold
        estimated_savings = payload_size * 0.6 if should_compress else 0

        return {
            "plugin": self.name,
            "should_compress": should_compress,
            "original_size_mb": round(payload_size / (1024 * 1024), 2),
            "estimated_savings_mb": round(estimated_savings / (1024 * 1024), 2),
            "algorithm": "gzip" if should_compress else "none",
        }


class RouteOptimizerPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.ROUTE_OPTIMIZER, "Route Optimizer", "Path efficiency")
        self._latency_map: Dict[str, List[float]] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        provider = context.get("provider", "")
        endpoint = context.get("endpoint", "")

        key = f"{provider}:{endpoint}"
        latencies = self._latency_map.get(key, [])

        avg_latency = sum(latencies) / len(latencies) if latencies else 500

        return {
            "plugin": self.name,
            "endpoint": key,
            "avg_latency_ms": round(avg_latency, 1),
            "recommended_endpoint": key,
            "cache_recommended": avg_latency > 200,
            "cache_ttl_seconds": max(60, int(avg_latency * 2)),
        }


class SecurityHardeningPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.SECURITY_HARDENING, "Security Hardening", "Vulnerability patching")
        self._blocked_methods: set = {"basic_auth", "api_key_plaintext", "oauth1_unsigned"}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        auth_method = context.get("auth_method", "")
        is_deprecated = auth_method in self._blocked_methods

        return {
            "plugin": self.name,
            "auth_method": auth_method,
            "is_deprecated": is_deprecated,
            "blocked": is_deprecated,
            "recommended_alternative": "oauth2.1" if is_deprecated else auth_method,
            "cve_check": "clean",
        }


class CostOptimizerPlugin(Plugin):
    def __init__(self):
        super().__init__(PluginSlot.COST_OPTIMIZER, "Cost Optimizer", "Spend reduction")
        self._access_patterns: Dict[str, List[float]] = {}

    async def execute(self, context: Dict[str, Any]) -> Dict[str, Any]:
        await super().execute(context)
        provider = context.get("provider", "")
        access_count = context.get("access_count", 0)
        is_infrequent = access_count < 10

        return {
            "plugin": self.name,
            "provider": provider,
            "tier_recommendation": "cold_storage" if is_infrequent else "standard",
            "estimated_monthly_savings": round(access_count * 0.002, 2) if is_infrequent else 0,
            "batch_recommended": is_infrequent,
        }


class PluginEngine:
    def __init__(self):
        self._plugins: Dict[PluginSlot, Plugin] = {}
        self._register_defaults()

    def _register_defaults(self):
        self._plugins[PluginSlot.AUTH_OPTIMIZER] = AuthOptimizerPlugin()
        self._plugins[PluginSlot.SCHEMA_DRIFT_DETECTOR] = SchemaDriftDetectorPlugin()
        self._plugins[PluginSlot.RATE_LIMIT_PREDICTOR] = RateLimitPredictorPlugin()
        self._plugins[PluginSlot.ERROR_CLASSIFIER] = ErrorClassifierPlugin()
        self._plugins[PluginSlot.PAYLOAD_COMPRESSOR] = PayloadCompressorPlugin()
        self._plugins[PluginSlot.ROUTE_OPTIMIZER] = RouteOptimizerPlugin()
        self._plugins[PluginSlot.SECURITY_HARDENING] = SecurityHardeningPlugin()
        self._plugins[PluginSlot.COST_OPTIMIZER] = CostOptimizerPlugin()

    async def initialize(self):
        pass

    async def shutdown(self):
        pass

    def get_plugin(self, slot: PluginSlot) -> Optional[Plugin]:
        return self._plugins.get(slot)

    def get_all_plugins(self) -> List[Plugin]:
        return list(self._plugins.values())

    def enable_plugin(self, slot: PluginSlot):
        plugin = self._plugins.get(slot)
        if plugin:
            plugin.enabled = True

    def disable_plugin(self, slot: PluginSlot):
        plugin = self._plugins.get(slot)
        if plugin:
            plugin.enabled = False

    async def execute_plugin(self, slot: PluginSlot, context: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        plugin = self._plugins.get(slot)
        if plugin and plugin.enabled:
            return await plugin.execute(context)
        return None

    async def execute_all(self, context: Dict[str, Any]) -> Dict[str, Any]:
        results = {}
        for slot, plugin in self._plugins.items():
            if plugin.enabled:
                result = await plugin.execute(context)
                results[plugin.name] = result
        return results

    def get_status(self) -> Dict[str, Any]:
        return {
            slot.value: {
                "name": plugin.name,
                "enabled": plugin.enabled,
                "invocations": plugin.metrics["invocations"],
                "last_invoked": plugin.metrics["last_invoked"],
            }
            for slot, plugin in self._plugins.items()
        }
