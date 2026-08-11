use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebhookTrigger {
    pub trigger_id: String,
    pub tenant_id: String,
    pub source: String,
    pub event_type: String,
    pub agent_id: String,
    pub workflow_id: Option<String>,
    pub enabled: bool,
    pub config: TriggerConfig,
    pub created_at: String,
    pub last_triggered: Option<String>,
    pub trigger_count: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TriggerConfig {
    pub filter_expression: Option<String>,
    pub transform_mapping: HashMap<String, String>,
    pub retry_policy: TriggerRetryPolicy,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TriggerRetryPolicy {
    pub max_retries: u32,
    pub backoff_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebhookEvent {
    pub event_id: String,
    pub source: String,
    pub event_type: String,
    pub payload: serde_json::Value,
    pub signature: String,
    pub timestamp: String,
    pub processed: bool,
}

pub struct WebhookManager {
    triggers: Arc<RwLock<HashMap<String, WebhookTrigger>>>,
    event_log: Arc<RwLock<Vec<WebhookEvent>>>,
}

impl WebhookManager {
    pub fn new() -> Self {
        Self {
            triggers: Arc::new(RwLock::new(HashMap::new())),
            event_log: Arc::new(RwLock::new(Vec::new())),
        }
    }

    pub async fn register_trigger(&self, trigger: WebhookTrigger) {
        let mut triggers = self.triggers.write().await;
        triggers.insert(trigger.trigger_id.clone(), trigger);
    }

    pub async fn ingest_event(&self, event: WebhookEvent) -> Vec<String> {
        let mut triggered_agents = Vec::new();

        {
            let mut log = self.event_log.write().await;
            log.push(event.clone());
        }

        let triggers = self.triggers.read().await;
        for trigger in triggers.values() {
            if !trigger.enabled {
                continue;
            }
            if trigger.source == event.source && trigger.event_type == event.event_type {
                triggered_agents.push(trigger.agent_id.clone());
            }
        }

        triggered_agents
    }

    pub async fn list_triggers(&self, tenant_id: &str) -> Vec<WebhookTrigger> {
        let triggers = self.triggers.read().await;
        triggers
            .values()
            .filter(|t| t.tenant_id == tenant_id)
            .cloned()
            .collect()
    }

    pub async fn disable_trigger(&self, trigger_id: &str) -> bool {
        let mut triggers = self.triggers.write().await;
        if let Some(trigger) = triggers.get_mut(trigger_id) {
            trigger.enabled = false;
            true
        } else {
            false
        }
    }

    pub async fn get_event_log(&self, limit: usize) -> Vec<WebhookEvent> {
        let log = self.event_log.read().await;
        log.iter().rev().take(limit).cloned().collect()
    }
}

impl Default for WebhookManager {
    fn default() -> Self {
        Self::new()
    }
}
