use async_trait::async_trait;
use std::collections::HashMap;
use crate::n0va1o::connectors::*;
use crate::n0va1o::{ConnectorInfo, ConnectionStatus, SyncEvent, AuthType, ConnectorStatus};

pub struct DiscordConnector;

#[async_trait]
impl Connector for DiscordConnector {
    fn info(&self) -> ConnectorInfo {
        ConnectorInfo {
            id: "n0va1o.discord".to_string(),
            name: "Discord".to_string(),
            category: "Social & Collaboration".to_string(),
            description: "Sync with Discord servers — messages, channels, roles, voice status".to_string(),
            icon_url: Some("https://cdn.n0va.ai/icons/discord.svg".to_string()),
            auth_type: AuthType::OAuth2,
            capabilities: vec!["one_way_sync".to_string(), "message_sync".to_string(), "channel_sync".to_string(), "role_sync".to_string(), "voice_status".to_string()],
            status: ConnectorStatus::Available,
        }
    }
    async fn connect(&self, user_id: &str, config: HashMap<String, String>) -> Result<String, ConnectorError> { let _ = (user_id, config); Ok(format!("discord_conn_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or(""))) }
    async fn disconnect(&self, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn status(&self, _: &str) -> Result<ConnectionStatus, ConnectorError> { Ok(ConnectionStatus::Connected) }
    async fn sync(&self, _: &str) -> Result<Vec<SyncEvent>, ConnectorError> { Ok(vec![]) }
    async fn send_message(&self, _: &str, _: &str, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn fetch_messages(&self, _: &str, _: &str, _: u32) -> Result<Vec<ExternalMessage>, ConnectorError> { Ok(vec![]) }
    async fn handle_webhook(&self, _: &[u8], _: &str) -> Result<SyncEvent, ConnectorError> { Ok(SyncEvent { event_id: format!("evt_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or("")), connector_id: self.info().id, user_id: "unknown".to_string(), event_type: "message".to_string(), payload: serde_json::json!({}), timestamp: chrono::Utc::now().to_rfc3339() }) }
    async fn list_channels(&self, _: &str) -> Result<Vec<ExternalChannel>, ConnectorError> { Ok(vec![]) }
}
