use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginSlot {
    pub slot_id: u8,
    pub name: String,
    pub description: String,
    pub enabled: bool,
    pub config: HashMap<String, serde_json::Value>,
    pub metrics: PluginMetrics,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct PluginMetrics {
    pub invocations: u64,
    pub last_invocation: Option<String>,
    pub avg_latency_ms: f64,
    pub success_rate: f64,
}

pub struct PluginSystem {
    slots: Arc<RwLock<HashMap<u8, PluginSlot>>>,
}

impl PluginSystem {
    pub fn new() -> Self {
        let mut slots = HashMap::new();

        slots.insert(1, PluginSlot {
            slot_id: 1,
            name: "Auth Optimizer".to_string(),
            description: "Token lifecycle prediction - proactive refresh before expiry".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(2, PluginSlot {
            slot_id: 2,
            name: "Schema Drift Detector".to_string(),
            description: "API change detection - auto-adapt to API v3 to v4 changes".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(3, PluginSlot {
            slot_id: 3,
            name: "Rate Limit Predictor".to_string(),
            description: "Throttling avoidance - smart batching for API calls".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(4, PluginSlot {
            slot_id: 4,
            name: "Error Classifier".to_string(),
            description: "Failure pattern learning - distinguish 429 vs 500 vs auth errors".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(5, PluginSlot {
            slot_id: 5,
            name: "Payload Compressor".to_string(),
            description: "Data size optimization - auto-compress large files before upload".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(6, PluginSlot {
            slot_id: 6,
            name: "Route Optimizer".to_string(),
            description: "Path efficiency - choose fastest CDN edge for access".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(7, PluginSlot {
            slot_id: 7,
            name: "Security Hardening".to_string(),
            description: "Vulnerability patching - auto-block deprecated auth methods".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        slots.insert(8, PluginSlot {
            slot_id: 8,
            name: "Cost Optimizer".to_string(),
            description: "Spend reduction - route infrequent access to cold storage".to_string(),
            enabled: true,
            config: HashMap::new(),
            metrics: PluginMetrics::default(),
        });

        Self {
            slots: Arc::new(RwLock::new(slots)),
        }
    }

    pub async fn get_slot(&self, slot_id: u8) -> Option<PluginSlot> {
        let slots = self.slots.read().await;
        slots.get(&slot_id).cloned()
    }

    pub async fn list_slots(&self) -> Vec<PluginSlot> {
        let slots = self.slots.read().await;
        let mut result: Vec<PluginSlot> = slots.values().cloned().collect();
        result.sort_by_key(|s| s.slot_id);
        result
    }

    pub async fn toggle_slot(&self, slot_id: u8, enabled: bool) -> bool {
        let mut slots = self.slots.write().await;
        if let Some(slot) = slots.get_mut(&slot_id) {
            slot.enabled = enabled;
            true
        } else {
            false
        }
    }

    pub async fn update_metrics(&self, slot_id: u8, latency_ms: f64, success: bool) {
        let mut slots = self.slots.write().await;
        if let Some(slot) = slots.get_mut(&slot_id) {
            slot.metrics.invocations += 1;
            slot.metrics.last_invocation = Some(chrono::Utc::now().to_rfc3339());
            slot.metrics.avg_latency_ms =
                (slot.metrics.avg_latency_ms * (slot.metrics.invocations - 1) as f64 + latency_ms)
                    / slot.metrics.invocations as f64;
            if success {
                slot.metrics.success_rate =
                    (slot.metrics.success_rate * (slot.metrics.invocations - 1) as f64 + 1.0)
                        / slot.metrics.invocations as f64;
            }
        }
    }

    pub async fn enabled_count(&self) -> usize {
        let slots = self.slots.read().await;
        slots.values().filter(|s| s.enabled).count()
    }
}

impl Default for PluginSystem {
    fn default() -> Self {
        Self::new()
    }
}
