use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;
use crate::n0va1o::auth::TokenPair;

pub struct TokenStore {
    tokens: Arc<RwLock<HashMap<String, TokenPair>>>,
}

impl TokenStore {
    pub fn new() -> Self {
        Self {
            tokens: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn store(&self, key: &str, tokens: TokenPair) {
        let mut store = self.tokens.write().await;
        store.insert(key.to_string(), tokens);
    }

    pub async fn get(&self, key: &str) -> Option<TokenPair> {
        let store = self.tokens.read().await;
        store.get(key).cloned()
    }

    pub async fn remove(&self, key: &str) -> Option<TokenPair> {
        let mut store = self.tokens.write().await;
        store.remove(key)
    }

    pub async fn update_access_token(&self, key: &str, access_token: &str) {
        let mut store = self.tokens.write().await;
        if let Some(token) = store.get_mut(key) {
            token.access_token = access_token.to_string();
        }
    }

    pub async fn list_keys(&self) -> Vec<String> {
        let store = self.tokens.read().await;
        store.keys().cloned().collect()
    }

    pub async fn count(&self) -> usize {
        let store = self.tokens.read().await;
        store.len()
    }
}

impl Default for TokenStore {
    fn default() -> Self {
        Self::new()
    }
}
