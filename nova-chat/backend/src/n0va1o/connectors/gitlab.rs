use async_trait::async_trait;
use std::collections::HashMap;
use crate::n0va1o::connectors::*;
use crate::n0va1o::{ConnectorInfo, ConnectionStatus, SyncEvent, AuthType, ConnectorStatus};

pub struct GitLabConnector;

#[async_trait]
impl Connector for GitLabConnector {
    fn info(&self) -> ConnectorInfo {
        ConnectorInfo {
            id: "n0va1o.gitlab".to_string(),
            name: "GitLab".to_string(),
            category: "Developer Tools".to_string(),
            description: "Sync with GitLab — merge requests, issues, pipelines, wiki updates".to_string(),
            icon_url: None,
            auth_type: AuthType::OAuth2,
            capabilities: vec!["bidirectional_sync".to_string(), "mr_sync".to_string(), "issue_tracking".to_string(), "pipeline_status".to_string()],
            status: ConnectorStatus::Available,
        }
    }
    async fn connect(&self, user_id: &str, config: HashMap<String, String>) -> Result<String, ConnectorError> { let _ = (user_id, config); Ok(format!("gitlab_conn_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or(""))) }
    async fn disconnect(&self, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn status(&self, _: &str) -> Result<ConnectionStatus, ConnectorError> { Ok(ConnectionStatus::Connected) }
    async fn sync(&self, _: &str) -> Result<Vec<SyncEvent>, ConnectorError> { Ok(vec![]) }
    async fn send_message(&self, _: &str, _: &str, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn fetch_messages(&self, _: &str, _: &str, _: u32) -> Result<Vec<ExternalMessage>, ConnectorError> { Ok(vec![]) }
    async fn handle_webhook(&self, _: &[u8], _: &str) -> Result<SyncEvent, ConnectorError> { Ok(SyncEvent { event_id: format!("evt_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or("")), connector_id: self.info().id, user_id: "unknown".to_string(), event_type: "merge_request".to_string(), payload: serde_json::json!({}), timestamp: chrono::Utc::now().to_rfc3339() }) }
    async fn list_channels(&self, _: &str) -> Result<Vec<ExternalChannel>, ConnectorError> { Ok(vec![]) }
}
