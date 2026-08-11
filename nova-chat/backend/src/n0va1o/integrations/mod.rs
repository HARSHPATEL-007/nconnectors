pub mod github;
pub mod google_drive;
pub mod slack;

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct IntegrationClient {
    pub base_url: String,
    pub auth_token: String,
    pub client: reqwest::Client,
}

impl IntegrationClient {
    pub fn new(base_url: &str, auth_token: &str) -> Self {
        Self {
            base_url: base_url.to_string(),
            auth_token: auth_token.to_string(),
            client: reqwest::Client::builder()
                .timeout(std::time::Duration::from_secs(30))
                .build()
                .expect("Failed to build HTTP client"),
        }
    }

    pub async fn get(&self, path: &str) -> Result<serde_json::Value, IntegrationError> {
        let url = format!("{}/{}", self.base_url, path);
        let response = self.client
            .get(&url)
            .header("Authorization", format!("Bearer {}", self.auth_token))
            .header("Content-Type", "application/json")
            .send()
            .await
            .map_err(|e| IntegrationError::Network(e.to_string()))?;

        if !response.status().is_success() {
            return Err(IntegrationError::Api(format!("HTTP {}", response.status())));
        }

        response.json().await
            .map_err(|e| IntegrationError::Parse(e.to_string()))
    }

    pub async fn post(&self, path: &str, body: &serde_json::Value) -> Result<serde_json::Value, IntegrationError> {
        let url = format!("{}/{}", self.base_url, path);
        let response = self.client
            .post(&url)
            .header("Authorization", format!("Bearer {}", self.auth_token))
            .header("Content-Type", "application/json")
            .json(body)
            .send()
            .await
            .map_err(|e| IntegrationError::Network(e.to_string()))?;

        if !response.status().is_success() {
            return Err(IntegrationError::Api(format!("HTTP {}", response.status())));
        }

        response.json().await
            .map_err(|e| IntegrationError::Parse(e.to_string()))
    }

    pub async fn put(&self, path: &str, body: &serde_json::Value) -> Result<serde_json::Value, IntegrationError> {
        let url = format!("{}/{}", self.base_url, path);
        let response = self.client
            .put(&url)
            .header("Authorization", format!("Bearer {}", self.auth_token))
            .header("Content-Type", "application/json")
            .json(body)
            .send()
            .await
            .map_err(|e| IntegrationError::Network(e.to_string()))?;

        if !response.status().is_success() {
            return Err(IntegrationError::Api(format!("HTTP {}", response.status())));
        }

        response.json().await
            .map_err(|e| IntegrationError::Parse(e.to_string()))
    }

    pub async fn delete(&self, path: &str) -> Result<(), IntegrationError> {
        let url = format!("{}/{}", self.base_url, path);
        let response = self.client
            .delete(&url)
            .header("Authorization", format!("Bearer {}", self.auth_token))
            .send()
            .await
            .map_err(|e| IntegrationError::Network(e.to_string()))?;

        if !response.status().is_success() {
            return Err(IntegrationError::Api(format!("HTTP {}", response.status())));
        }

        Ok(())
    }
}

#[derive(Debug, thiserror::Error)]
pub enum IntegrationError {
    #[error("Network error: {0}")]
    Network(String),
    #[error("API error: {0}")]
    Api(String),
    #[error("Parse error: {0}")]
    Parse(String),
    #[error("Auth error: {0}")]
    Auth(String),
    #[error("Rate limited")]
    RateLimited,
    #[error("Not found")]
    NotFound,
    #[error("Internal error: {0}")]
    Internal(String),
}

pub type IntegrationResult<T> = Result<T, IntegrationError>;
