use std::collections::HashMap;
use crate::n0va1o::auth::{OAuthConfig, TokenPair};

pub struct OAuthManager {
    configs: HashMap<String, OAuthConfig>,
}

impl OAuthManager {
    pub fn new() -> Self {
        Self {
            configs: HashMap::new(),
        }
    }

    pub fn register(&mut self, connector_id: &str, config: OAuthConfig) {
        self.configs.insert(connector_id.to_string(), config);
    }

    pub fn get_authorize_url(&self, connector_id: &str, state: &str) -> Option<String> {
        let config = self.configs.get(connector_id)?;
        let scopes = config.scopes.join(" ");
        Some(format!(
            "{}?client_id={}&redirect_uri={}&response_type=code&scope={}&state={}",
            config.authorize_url,
            urlencoding::encode(&config.client_id),
            urlencoding::encode(&config.redirect_uri),
            urlencoding::encode(&scopes),
            urlencoding::encode(state),
        ))
    }

    pub fn get_config(&self, connector_id: &str) -> Option<&OAuthConfig> {
        self.configs.get(connector_id)
    }

    pub async fn exchange_code(
        &self,
        connector_id: &str,
        code: &str,
    ) -> Result<TokenPair, String> {
        let config = self.configs.get(connector_id)
            .ok_or_else(|| "Connector not configured".to_string())?;

        let client = reqwest::Client::new();
        let mut params = HashMap::new();
        params.insert("grant_type", "authorization_code");
        params.insert("code", code);
        params.insert("redirect_uri", &config.redirect_uri);
        params.insert("client_id", &config.client_id);
        params.insert("client_secret", &config.client_secret);

        let resp = client
            .post(&config.token_url)
            .form(&params)
            .send()
            .await
            .map_err(|e| format!("Token exchange failed: {}", e))?;

        let json: serde_json::Value = resp.json().await
            .map_err(|e| format!("Failed to parse token response: {}", e))?;

        Ok(TokenPair {
            access_token: json["access_token"].as_str().unwrap_or("").to_string(),
            refresh_token: json["refresh_token"].as_str().map(|s| s.to_string()),
            token_type: json["token_type"].as_str().unwrap_or("Bearer").to_string(),
            expires_at: None,
            scopes: config.scopes.clone(),
        })
    }

    pub async fn refresh_token(
        &self,
        connector_id: &str,
        refresh_token: &str,
    ) -> Result<TokenPair, String> {
        let config = self.configs.get(connector_id)
            .ok_or_else(|| "Connector not configured".to_string())?;

        let refresh_url = config.refresh_url.as_ref().unwrap_or(&config.token_url);

        let client = reqwest::Client::new();
        let mut params = HashMap::new();
        params.insert("grant_type", "refresh_token");
        params.insert("refresh_token", refresh_token);
        params.insert("client_id", &config.client_id);
        params.insert("client_secret", &config.client_secret);

        let resp = client
            .post(refresh_url)
            .form(&params)
            .send()
            .await
            .map_err(|e| format!("Token refresh failed: {}", e))?;

        let json: serde_json::Value = resp.json().await
            .map_err(|e| format!("Failed to parse refresh response: {}", e))?;

        Ok(TokenPair {
            access_token: json["access_token"].as_str().unwrap_or("").to_string(),
            refresh_token: json["refresh_token"].as_str().map(|s| s.to_string())
                .or_else(|| Some(refresh_token.to_string())),
            token_type: json["token_type"].as_str().unwrap_or("Bearer").to_string(),
            expires_at: None,
            scopes: config.scopes.clone(),
        })
    }

    pub fn list_configs(&self) -> Vec<&String> {
        self.configs.keys().collect()
    }
}

impl Default for OAuthManager {
    fn default() -> Self {
        Self::new()
    }
}
