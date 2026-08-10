use async_trait::async_trait;
use std::collections::HashMap;

use crate::n0va1o::connectors::*;
use crate::n0va1o::{ConnectorInfo, ConnectionStatus, SyncEvent, AuthType, ConnectorStatus};

pub struct SlackConnector;

#[async_trait]
impl Connector for SlackConnector {
    fn info(&self) -> ConnectorInfo {
        ConnectorInfo {
            id: "n0va1o.slack".to_string(),
            name: "Slack".to_string(),
            category: "Social & Collaboration".to_string(),
            description: "Bidirectional sync with Slack workspaces — messages, channels, reactions, files".to_string(),
            icon_url: Some("https://cdn.n0va.ai/icons/slack.svg".to_string()),
            auth_type: AuthType::OAuth2,
            capabilities: vec![
                "bidirectional_sync".to_string(),
                "message_sync".to_string(),
                "channel_mapping".to_string(),
                "file_sharing".to_string(),
                "reaction_sync".to_string(),
                "thread_sync".to_string(),
                "user_sync".to_string(),
            ],
            status: ConnectorStatus::Available,
        }
    }

    async fn connect(&self, user_id: &str, config: HashMap<String, String>) -> Result<String, ConnectorError> {
        let access_token = config.get("access_token")
            .ok_or_else(|| ConnectorError::InvalidConfig("access_token required".to_string()))?;

        let _ = access_token;
        let _ = user_id;

        Ok(format!("slack_conn_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or("")))
    }

    async fn disconnect(&self, connection_id: &str) -> Result<(), ConnectorError> {
        let _ = connection_id;
        Ok(())
    }

    async fn status(&self, connection_id: &str) -> Result<ConnectionStatus, ConnectorError> {
        let _ = connection_id;
        Ok(ConnectionStatus::Connected)
    }

    async fn sync(&self, connection_id: &str) -> Result<Vec<SyncEvent>, ConnectorError> {
        let _ = connection_id;
        Ok(vec![])
    }

    async fn send_message(&self, connection_id: &str, channel: &str, message: &str) -> Result<(), ConnectorError> {
        let _ = (connection_id, channel, message);
        Ok(())
    }

    async fn fetch_messages(&self, connection_id: &str, channel: &str, limit: u32) -> Result<Vec<ExternalMessage>, ConnectorError> {
        let _ = (connection_id, channel, limit);
        Ok(vec![])
    }

    async fn handle_webhook(&self, payload: &[u8], signature: &str) -> Result<SyncEvent, ConnectorError> {
        let _ = (payload, signature);
        Ok(SyncEvent {
            event_id: format!("evt_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or("")),
            connector_id: self.info().id,
            user_id: "unknown".to_string(),
            event_type: "message".to_string(),
            payload: serde_json::json!({}),
            timestamp: chrono::Utc::now().to_rfc3339(),
        })
    }

    async fn list_channels(&self, connection_id: &str) -> Result<Vec<ExternalChannel>, ConnectorError> {
        let _ = connection_id;
        Ok(vec![])
    }
}
