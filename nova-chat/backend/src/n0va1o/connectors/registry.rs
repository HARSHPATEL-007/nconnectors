use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;
use serde::{Deserialize, Serialize};

use super::*;
use crate::n0va1o::catalog::ConnectorCatalog;

pub type ConnectorArc = Arc<dyn Connector>;

#[derive(Clone)]
pub struct ConnectorRegistry {
    connectors: Arc<RwLock<HashMap<String, ConnectorArc>>>,
    connections: Arc<RwLock<HashMap<String, ConnectionRecord>>>,
    catalog: ConnectorCatalog,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectionRecord {
    pub connection_id: String,
    pub user_id: String,
    pub connector_id: String,
    pub status: ConnectionStatus,
    pub config: HashMap<String, String>,
    pub created_at: String,
    pub last_sync_at: Option<String>,
}

impl ConnectorRegistry {
    pub fn new() -> Self {
        Self {
            connectors: Arc::new(RwLock::new(HashMap::new())),
            connections: Arc::new(RwLock::new(HashMap::new())),
            catalog: ConnectorCatalog::new(),
        }
    }

    pub async fn register(&self, connector: ConnectorArc) {
        let info = connector.info();
        let mut connectors = self.connectors.write().await;
        connectors.insert(info.id.clone(), connector);
        log::info!("Registered N0VA1O connector: {} ({})", info.name, info.id);
    }

    pub async fn get(&self, id: &str) -> Option<ConnectorArc> {
        let connectors = self.connectors.read().await;
        connectors.get(id).cloned()
    }

    pub async fn list(&self) -> Vec<ConnectorInfo> {
        let connectors = self.connectors.read().await;
        connectors.values().map(|c| c.info()).collect()
    }

    pub async fn list_by_category(&self, category: &str) -> Vec<ConnectorInfo> {
        let connectors = self.connectors.read().await;
        connectors
            .values()
            .filter(|c| c.info().category.to_lowercase() == category.to_lowercase())
            .map(|c| c.info())
            .collect()
    }

    pub async fn create_connection(
        &self,
        user_id: &str,
        connector_id: &str,
        config: HashMap<String, String>,
    ) -> Result<ConnectionResponse, ConnectorError> {
        let connector = self.get(connector_id).await
            .ok_or_else(|| ConnectorError::NotFound(format!("Connector {} not found", connector_id)))?;

        let connection_id = format!("conn_{}", uuid::Uuid::new_v4().to_string().split('-').next().unwrap_or(""));
        let result = connector.connect(user_id, config.clone()).await;

        match result {
            Ok(ref _token) => {
                let record = ConnectionRecord {
                    connection_id: connection_id.clone(),
                    user_id: user_id.to_string(),
                    connector_id: connector_id.to_string(),
                    status: ConnectionStatus::Connected,
                    config,
                    created_at: chrono::Utc::now().to_rfc3339(),
                    last_sync_at: None,
                };

                let mut connections = self.connections.write().await;
                connections.insert(connection_id.clone(), record);

                Ok(ConnectionResponse {
                    connection_id,
                    status: ConnectionStatus::Connected,
                    auth_url: None,
                    message: "Connected successfully".to_string(),
                })
            }
            Err(e) => Err(e),
        }
    }

    pub async fn disconnect(&self, connection_id: &str) -> Result<(), ConnectorError> {
        let connections = self.connections.read().await;
        let record = connections.get(connection_id)
            .ok_or_else(|| ConnectorError::NotFound(format!("Connection {} not found", connection_id)))?
            .clone();
        drop(connections);

        let connector = self.get(&record.connector_id).await
            .ok_or_else(|| ConnectorError::NotFound("Connector not found".to_string()))?;

        connector.disconnect(connection_id).await?;

        let mut connections = self.connections.write().await;
        if let Some(rec) = connections.get_mut(connection_id) {
            rec.status = ConnectionStatus::Disconnected;
        }

        Ok(())
    }

    pub async fn get_connection(&self, connection_id: &str) -> Option<ConnectionRecord> {
        let connections = self.connections.read().await;
        connections.get(connection_id).cloned()
    }

    pub async fn list_user_connections(&self, user_id: &str) -> Vec<ConnectionRecord> {
        let connections = self.connections.read().await;
        connections
            .values()
            .filter(|c| c.user_id == user_id)
            .cloned()
            .collect()
    }

    pub async fn sync_connection(&self, connection_id: &str) -> Result<Vec<SyncEvent>, ConnectorError> {
        let connections = self.connections.read().await;
        let record = connections.get(connection_id)
            .ok_or_else(|| ConnectorError::NotFound(format!("Connection {} not found", connection_id)))?
            .clone();
        drop(connections);

        let connector = self.get(&record.connector_id).await
            .ok_or_else(|| ConnectorError::NotFound("Connector not found".to_string()))?;

        let events = connector.sync(connection_id).await?;

        let mut connections = self.connections.write().await;
        if let Some(rec) = connections.get_mut(connection_id) {
            rec.last_sync_at = Some(chrono::Utc::now().to_rfc3339());
        }

        Ok(events)
    }

    pub async fn send_to_external(
        &self,
        connection_id: &str,
        channel: &str,
        message: &str,
    ) -> Result<(), ConnectorError> {
        let connections = self.connections.read().await;
        let record = connections.get(connection_id)
            .ok_or_else(|| ConnectorError::NotFound("Connection not found".to_string()))?
            .clone();
        drop(connections);

        let connector = self.get(&record.connector_id).await
            .ok_or_else(|| ConnectorError::NotFound("Connector not found".to_string()))?;

        connector.send_message(connection_id, channel, message).await
    }

    pub fn catalog(&self) -> &ConnectorCatalog {
        &self.catalog
    }

    pub async fn count(&self) -> usize {
        let connectors = self.connectors.read().await;
        connectors.len()
    }

    pub async fn catalog_count(&self) -> usize {
        self.catalog.count()
    }
}

impl Default for ConnectorRegistry {
    fn default() -> Self {
        Self::new()
    }
}
