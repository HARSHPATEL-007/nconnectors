use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GrpcRequest {
    pub service: String,
    pub method: String,
    pub message: serde_json::Value,
    pub metadata: HashMap<String, String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GrpcResponse {
    pub message: serde_json::Value,
    pub status: GrpcStatus,
    pub metadata: HashMap<String, String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GrpcStatus {
    pub code: i32,
    pub message: String,
    pub details: Vec<String>,
}

pub struct GrpcAdapter {
    pub endpoint: String,
    pub timeout_ms: u64,
    pub use_tls: bool,
}

impl GrpcAdapter {
    pub fn new(endpoint: &str) -> Self {
        Self {
            endpoint: endpoint.to_string(),
            timeout_ms: 30_000,
            use_tls: true,
        }
    }

    pub fn with_timeout(mut self, ms: u64) -> Self {
        self.timeout_ms = ms;
        self
    }

    pub fn with_tls(mut self, use_tls: bool) -> Self {
        self.use_tls = use_tls;
        self
    }

    pub async fn call(&self, request: GrpcRequest) -> Result<GrpcResponse, GrpcError> {
        let client = reqwest::Client::builder()
            .timeout(std::time::Duration::from_millis(self.timeout_ms))
            .build()
            .map_err(|e| GrpcError::Internal(e.to_string()))?;

        let url = format!("{}/{}", self.endpoint, request.service);

        let mut headers = request.metadata.clone();
        headers.insert("content-type".to_string(), "application/grpc+proto".to_string());

        let response = client
            .post(&url)
            .json(&request.message)
            .headers({
                let mut h = reqwest::header::HeaderMap::new();
                for (k, v) in &headers {
                    if let (Ok(name), Ok(value)) = (
                        reqwest::header::HeaderName::from_bytes(k.as_bytes()),
                        reqwest::header::HeaderValue::from_str(v),
                    ) {
                        h.insert(name, value);
                    }
                }
                h
            })
            .send()
            .await
            .map_err(|e| GrpcError::Network(e.to_string()))?;

        let status = response.status();
        let body: serde_json::Value = response
            .json()
            .await
            .map_err(|e| GrpcError::Internal(e.to_string()))?;

        Ok(GrpcResponse {
            message: body,
            status: GrpcStatus {
                code: if status.is_success() { 0 } else { 1 },
                message: status.to_string(),
                details: vec![],
            },
            metadata: HashMap::new(),
        })
    }

    pub fn translate_from_rest(&self, rest_json: &serde_json::Value) -> GrpcRequest {
        GrpcRequest {
            service: "default.Service".to_string(),
            method: "Execute".to_string(),
            message: rest_json.clone(),
            metadata: HashMap::new(),
        }
    }
}

#[derive(Debug, thiserror::Error)]
pub enum GrpcError {
    #[error("Network error: {0}")]
    Network(String),
    #[error("Internal error: {0}")]
    Internal(String),
    #[error("Timeout")]
    Timeout,
}
