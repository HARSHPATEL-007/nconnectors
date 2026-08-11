pub mod adapters;
pub mod agents;
pub mod audit;
pub mod auth;
pub mod catalog;
pub mod connectors;
pub mod hooks;
pub mod intent;
pub mod mcp;
pub mod schema;
pub mod sessions;
pub mod templates;

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct N0VA1OConfig {
    pub gateway_url: String,
    pub webhook_secret: String,
    pub max_connections_per_user: u32,
    pub retry_policy: RetryPolicy,
    pub rate_limit_policy: RateLimitPolicy,
}

impl Default for N0VA1OConfig {
    fn default() -> Self {
        Self {
            gateway_url: "http://localhost:8080/v1/n0va1o".to_string(),
            webhook_secret: "n0va1o_webhook_secret".to_string(),
            max_connections_per_user: 50,
            retry_policy: RetryPolicy::default(),
            rate_limit_policy: RateLimitPolicy::default(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RetryPolicy {
    pub max_retries: u32,
    pub initial_delay_ms: u64,
    pub max_delay_ms: u64,
    pub backoff_multiplier: f64,
}

impl Default for RetryPolicy {
    fn default() -> Self {
        Self {
            max_retries: 5,
            initial_delay_ms: 1000,
            max_delay_ms: 60000,
            backoff_multiplier: 2.0,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RateLimitPolicy {
    pub requests_per_minute: u32,
    pub burst_size: u32,
}

impl Default for RateLimitPolicy {
    fn default() -> Self {
        Self {
            requests_per_minute: 100,
            burst_size: 150,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectionRequest {
    pub user_id: String,
    pub connector_id: String,
    pub config: HashMap<String, String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectionResponse {
    pub connection_id: String,
    pub status: ConnectionStatus,
    pub auth_url: Option<String>,
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ConnectionStatus {
    Connected,
    PendingAuth,
    Disconnected,
    Error,
    Syncing,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectorInfo {
    pub id: String,
    pub name: String,
    pub category: String,
    pub description: String,
    pub icon_url: Option<String>,
    pub auth_type: AuthType,
    pub capabilities: Vec<String>,
    pub status: ConnectorStatus,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum AuthType {
    OAuth2,
    ApiKey,
    BasicAuth,
    Token,
    None,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ConnectorStatus {
    Available,
    Beta,
    ComingSoon,
    Deprecated,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SyncEvent {
    pub event_id: String,
    pub connector_id: String,
    pub user_id: String,
    pub event_type: String,
    pub payload: serde_json::Value,
    pub timestamp: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebhookPayload {
    pub source: String,
    pub event: String,
    pub data: serde_json::Value,
    pub signature: String,
    pub timestamp: String,
}
