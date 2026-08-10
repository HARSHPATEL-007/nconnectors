use reqwest::{Client, Method, Response};
use std::collections::HashMap;
use std::time::Duration;

pub struct RestAdapter {
    client: Client,
    base_url: String,
    default_headers: HashMap<String, String>,
    timeout_ms: u64,
}

impl RestAdapter {
    pub fn new(base_url: &str, timeout_ms: u64) -> Result<Self, reqwest::Error> {
        let client = Client::builder()
            .timeout(Duration::from_millis(timeout_ms))
            .build()?;

        Ok(Self {
            client,
            base_url: base_url.trim_end_matches('/').to_string(),
            default_headers: HashMap::new(),
            timeout_ms,
        })
    }

    pub fn with_default_header(mut self, key: &str, value: &str) -> Self {
        self.default_headers.insert(key.to_string(), value.to_string());
        self
    }

    pub fn with_bearer_token(self, token: &str) -> Self {
        self.with_default_header("Authorization", &format!("Bearer {}", token))
    }

    pub async fn get(&self, path: &str) -> Result<Response, reqwest::Error> {
        self.request(Method::GET, path, None).await
    }

    pub async fn post(&self, path: &str, body: Option<serde_json::Value>) -> Result<Response, reqwest::Error> {
        self.request(Method::POST, path, body).await
    }

    pub async fn put(&self, path: &str, body: Option<serde_json::Value>) -> Result<Response, reqwest::Error> {
        self.request(Method::PUT, path, body).await
    }

    pub async fn patch(&self, path: &str, body: Option<serde_json::Value>) -> Result<Response, reqwest::Error> {
        self.request(Method::PATCH, path, body).await
    }

    pub async fn delete(&self, path: &str) -> Result<Response, reqwest::Error> {
        self.request(Method::DELETE, path, None).await
    }

    async fn request(&self, method: Method, path: &str, body: Option<serde_json::Value>) -> Result<Response, reqwest::Error> {
        let url = format!("{}/{}", self.base_url, path.trim_start_matches('/'));

        let mut req = self.client.request(method, &url);

        for (key, value) in &self.default_headers {
            req = req.header(key, value);
        }

        req = req.header("Content-Type", "application/json");

        if let Some(b) = body {
            req = req.json(&b);
        }

        req.send().await
    }

    pub async fn get_json<T: serde::de::DeserializeOwned>(&self, path: &str) -> Result<T, reqwest::Error> {
        let resp = self.get(path).await?;
        resp.json::<T>().await
    }

    pub async fn post_json<T: serde::de::DeserializeOwned>(
        &self,
        path: &str,
        body: Option<serde_json::Value>,
    ) -> Result<T, reqwest::Error> {
        let resp = self.post(path, body).await?;
        resp.json::<T>().await
    }
}
