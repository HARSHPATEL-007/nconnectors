pub mod rest;
pub mod graphql;
pub mod websocket;
pub mod grpc;

use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProtocolAdapter {
    pub protocol_type: ProtocolType,
    pub base_url: String,
    pub headers: std::collections::HashMap<String, String>,
    pub timeout_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ProtocolType {
    Rest,
    Graphql,
    WebSocket,
    Grpc,
    Soap,
    XmlRpc,
}

impl ProtocolAdapter {
    pub fn rest(base_url: &str) -> Self {
        Self {
            protocol_type: ProtocolType::Rest,
            base_url: base_url.to_string(),
            headers: std::collections::HashMap::new(),
            timeout_ms: 30000,
        }
    }

    pub fn graphql(base_url: &str) -> Self {
        Self {
            protocol_type: ProtocolType::Graphql,
            base_url: base_url.to_string(),
            headers: std::collections::HashMap::new(),
            timeout_ms: 30000,
        }
    }

    pub fn with_auth_bearer(mut self, token: &str) -> Self {
        self.headers.insert("Authorization".to_string(), format!("Bearer {}", token));
        self
    }

    pub fn with_api_key(mut self, key: &str, value: &str) -> Self {
        self.headers.insert(key.to_string(), value.to_string());
        self
    }

    pub fn with_timeout(mut self, ms: u64) -> Self {
        self.timeout_ms = ms;
        self
    }
}

pub use rest::RestAdapter;
pub use graphql::GraphqlAdapter;
pub use websocket::WebSocketAdapter;
