pub mod oauth;
pub mod tokens;

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OAuthConfig {
    pub client_id: String,
    pub client_secret: String,
    pub redirect_uri: String,
    pub scopes: Vec<String>,
    pub authorize_url: String,
    pub token_url: String,
    pub refresh_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TokenPair {
    pub access_token: String,
    pub refresh_token: Option<String>,
    pub token_type: String,
    pub expires_at: Option<String>,
    pub scopes: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuthContext {
    pub connector_id: String,
    pub user_id: String,
    pub tokens: TokenPair,
    pub metadata: HashMap<String, String>,
}

pub use oauth::OAuthManager;
pub use tokens::TokenStore;
