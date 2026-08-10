use async_trait::async_trait;
use std::collections::HashMap;
use crate::n0va1o::connectors::*;
use crate::n0va1o::{ConnectorInfo, ConnectionStatus, SyncEvent, AuthType, ConnectorStatus};

pub struct HubSpotConnector;

#[async_trait]
impl Connector for HubSpotConnector {
    fn info(&self) -> ConnectorInfo {
        ConnectorInfo {
            id: "n0va1o.hubspot".to_string(),
            name: "HubSpot".to_string(),
            category: "CRM & Sales".to_string(),
            description: "Sync with HubSpot — deal tracking, contact enrichment, meeting notes".to_string(),
            icon_url: None,
            auth_type: AuthType::OAuth2,
            capabilities: vec!["bidirectional_sync".to_string(), "deal_tracking".to_string(), "contact_enrichment".to_string(), "meeting_notes".to_string()],
            status: ConnectorStatus::Available,
        }
    }
    async fn connect(&self, user_id: &str, config: HashMap<String, String>) -> Result<String, ConnectorError> { let _ = (user_id, config); Ok(format!("hubspot_conn_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or(""))) }
    async fn disconnect(&self, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn status(&self, _: &str) -> Result<ConnectionStatus, ConnectorError> { Ok(ConnectionStatus::Connected) }
    async fn sync(&self, _: &str) -> Result<Vec<SyncEvent>, ConnectorError> { Ok(vec![]) }
    async fn send_message(&self, _: &str, _: &str, _: &str) -> Result<(), ConnectorError> { Ok(()) }
    async fn fetch_messages(&self, _: &str, _: &str, _: u32) -> Result<Vec<ExternalMessage>, ConnectorError> { Ok(vec![]) }
    async fn handle_webhook(&self, _: &[u8], _: &str) -> Result<SyncEvent, ConnectorError> { Ok(SyncEvent { event_id: format!("evt_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or("")), connector_id: self.info().id, user_id: "unknown".to_string(), event_type: "deal_updated".to_string(), payload: serde_json::json!({}), timestamp: chrono::Utc::now().to_rfc3339() }) }
    async fn list_channels(&self, _: &str) -> Result<Vec<ExternalChannel>, ConnectorError> { Ok(vec![]) }
}
