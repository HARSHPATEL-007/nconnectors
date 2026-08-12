use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone)]
pub struct InMemoryDb {
    data: Arc<RwLock<HashMap<String, Vec<serde_json::Value>>>>,
}

impl InMemoryDb {
    pub fn new() -> Self {
        Self {
            data: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn insert(&self, collection: &str, doc: serde_json::Value) {
        let mut data = self.data.write().await;
        data.entry(collection.to_string()).or_default().push(doc);
    }

    pub async fn find_all(&self, collection: &str) -> Vec<serde_json::Value> {
        let data = self.data.read().await;
        data.get(collection).cloned().unwrap_or_default()
    }

    pub async fn find_by(&self, collection: &str, field: &str, value: &str) -> Vec<serde_json::Value> {
        let data = self.data.read().await;
        data.get(collection)
            .map(|docs| {
                docs.iter()
                    .filter(|d| d.get(field).and_then(|v| v.as_str()) == Some(value))
                    .cloned()
                    .collect()
            })
            .unwrap_or_default()
    }

    pub async fn delete(&self, collection: &str, field: &str, value: &str) -> usize {
        let mut data = self.data.write().await;
        if let Some(docs) = data.get_mut(collection) {
            let before = docs.len();
            docs.retain(|d| d.get(field).and_then(|v| v.as_str()) != Some(value));
            before - docs.len()
        } else {
            0
        }
    }

    pub async fn count(&self, collection: &str) -> usize {
        let data = self.data.read().await;
        data.get(collection).map(|d| d.len()).unwrap_or(0)
    }

    pub async fn clear(&self, collection: &str) {
        let mut data = self.data.write().await;
        data.remove(collection);
    }
}

impl Default for InMemoryDb {
    fn default() -> Self {
        Self::new()
    }
}

pub type Database = InMemoryDb;

pub async fn init(_uri: &str) -> Result<Database, Box<dyn std::error::Error>> {
    Ok(InMemoryDb::new())
}
