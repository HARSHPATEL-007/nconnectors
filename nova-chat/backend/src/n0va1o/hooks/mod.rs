use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;
use serde::{Deserialize, Serialize};

use crate::n0va1o::WebhookPayload;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebhookConfig {
    pub connector_id: String,
    pub url: String,
    pub events: Vec<String>,
    pub secret: String,
    pub active: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EventRoute {
    pub source: String,
    pub event_type: String,
    pub target_module: String,
    pub transform_rules: HashMap<String, String>,
}

pub struct WebhookOrchestrator {
    hooks: Arc<RwLock<HashMap<String, Vec<WebhookConfig>>>>,
    routes: Arc<RwLock<Vec<EventRoute>>>,
}

impl WebhookOrchestrator {
    pub fn new() -> Self {
        Self {
            hooks: Arc::new(RwLock::new(HashMap::new())),
            routes: Arc::new(RwLock::new(Vec::new())),
        }
    }

    pub async fn register_hook(&self, user_id: &str, config: WebhookConfig) {
        let mut hooks = self.hooks.write().await;
        hooks.entry(user_id.to_string()).or_default().push(config);
    }

    pub async fn list_hooks(&self, user_id: &str) -> Vec<WebhookConfig> {
        let hooks = self.hooks.read().await;
        hooks.get(user_id).cloned().unwrap_or_default()
    }

    pub async fn remove_hook(&self, user_id: &str, connector_id: &str) {
        let mut hooks = self.hooks.write().await;
        if let Some(user_hooks) = hooks.get_mut(user_id) {
            user_hooks.retain(|h| h.connector_id != connector_id);
        }
    }

    pub async fn add_route(&self, route: EventRoute) {
        let mut routes = self.routes.write().await;
        routes.push(route);
    }

    pub async fn route_event(&self, payload: &WebhookPayload) -> Vec<String> {
        let routes = self.routes.read().await;
        routes
            .iter()
            .filter(|r| r.source == payload.source && r.event_type == payload.event)
            .map(|r| r.target_module.clone())
            .collect()
    }

    pub async fn process_incoming(&self, payload: WebhookPayload) -> Result<ProcessedEvent, String> {
        let targets = self.route_event(&payload).await;

        Ok(ProcessedEvent {
            source: payload.source,
            event_type: payload.event,
            payload: payload.data,
            targets,
            timestamp: payload.timestamp,
        })
    }

    pub async fn count_routes(&self) -> usize {
        let routes = self.routes.read().await;
        routes.len()
    }

    pub async fn count_hooks(&self) -> usize {
        let hooks = self.hooks.read().await;
        hooks.values().map(|v| v.len()).sum()
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProcessedEvent {
    pub source: String,
    pub event_type: String,
    pub payload: serde_json::Value,
    pub targets: Vec<String>,
    pub timestamp: String,
}

impl Default for WebhookOrchestrator {
    fn default() -> Self {
        Self::new()
    }
}
