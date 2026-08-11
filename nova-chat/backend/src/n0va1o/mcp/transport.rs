use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum TransportType {
    Stdio,
    HttpSse,
    WebSocket,
}

impl TransportType {
    pub fn from_str(s: &str) -> Option<Self> {
        match s.to_lowercase().as_str() {
            "stdio" => Some(Self::Stdio),
            "http_sse" | "sse" | "http" => Some(Self::HttpSse),
            "websocket" | "ws" | "wss" => Some(Self::WebSocket),
            _ => None,
        }
    }

    pub fn latency_ms(&self) -> u32 {
        match self {
            Self::Stdio => 1,
            Self::WebSocket => 10,
            Self::HttpSse => 50,
        }
    }
}

#[derive(Debug, Clone)]
pub struct TransportConfig {
    pub transport_type: TransportType,
    pub buffer_size: usize,
    pub heartbeat_interval_secs: u64,
}

impl TransportConfig {
    pub fn for_type(transport_type: TransportType) -> Self {
        match transport_type {
            TransportType::Stdio => Self {
                transport_type,
                buffer_size: 65536,
                heartbeat_interval_secs: 30,
            },
            TransportType::HttpSse => Self {
                transport_type,
                buffer_size: 1_048_576,
                heartbeat_interval_secs: 15,
            },
            TransportType::WebSocket => Self {
                transport_type,
                buffer_size: 16_777_216,
                heartbeat_interval_secs: 10,
            },
        }
    }
}

#[async_trait::async_trait]
pub trait Transport: Send + Sync {
    fn transport_type(&self) -> TransportType;
    async fn send(&self, message: &str) -> Result<(), TransportError>;
    async fn receive(&self) -> Result<String, TransportError>;
}

#[derive(Debug, thiserror::Error)]
pub enum TransportError {
    #[error("Connection closed")]
    Closed,
    #[error("IO error: {0}")]
    Io(String),
    #[error("Serialization error: {0}")]
    Serialization(String),
    #[error("Timeout")]
    Timeout,
}
