pub mod registry;
pub mod slack;
pub mod discord;
pub mod github;
pub mod gitlab;
pub mod jira;
pub mod google;
pub mod notion;
pub mod trello;
pub mod asana;
pub mod hubspot;
pub mod salesforce;
pub mod stripe;
pub mod shopify;

use async_trait::async_trait;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use crate::n0va1o::{ConnectorInfo, ConnectionResponse, ConnectionStatus, SyncEvent};

#[async_trait]
pub trait Connector: Send + Sync {
    fn info(&self) -> ConnectorInfo;
    async fn connect(&self, user_id: &str, config: HashMap<String, String>) -> Result<String, ConnectorError>;
    async fn disconnect(&self, connection_id: &str) -> Result<(), ConnectorError>;
    async fn status(&self, connection_id: &str) -> Result<ConnectionStatus, ConnectorError>;
    async fn sync(&self, connection_id: &str) -> Result<Vec<SyncEvent>, ConnectorError>;
    async fn send_message(&self, connection_id: &str, channel: &str, message: &str) -> Result<(), ConnectorError>;
    async fn fetch_messages(&self, connection_id: &str, channel: &str, limit: u32) -> Result<Vec<ExternalMessage>, ConnectorError>;
    async fn handle_webhook(&self, payload: &[u8], signature: &str) -> Result<SyncEvent, ConnectorError>;
    async fn list_channels(&self, connection_id: &str) -> Result<Vec<ExternalChannel>, ConnectorError>;
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExternalMessage {
    pub id: String,
    pub sender: String,
    pub sender_name: String,
    pub content: String,
    pub timestamp: String,
    pub channel: String,
    pub attachments: Vec<ExternalAttachment>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExternalAttachment {
    pub url: String,
    pub filename: String,
    pub mime_type: String,
    pub size: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExternalChannel {
    pub id: String,
    pub name: String,
    pub channel_type: String,
    pub member_count: u32,
}

#[derive(Debug, thiserror::Error)]
pub enum ConnectorError {
    #[error("Authentication failed: {0}")]
    AuthError(String),
    #[error("Connection not found: {0}")]
    NotFound(String),
    #[error("Rate limited")]
    RateLimited,
    #[error("API error: {0}")]
    ApiError(String),
    #[error("Invalid configuration: {0}")]
    InvalidConfig(String),
    #[error("Internal error: {0}")]
    Internal(String),
}

pub type ConnectorResult<T> = Result<T, ConnectorError>;
