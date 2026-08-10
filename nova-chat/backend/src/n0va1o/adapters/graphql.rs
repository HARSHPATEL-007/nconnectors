use reqwest::Client;
use std::collections::HashMap;
use std::time::Duration;

pub struct GraphqlAdapter {
    client: Client,
    endpoint: String,
    default_headers: HashMap<String, String>,
}

impl GraphqlAdapter {
    pub fn new(endpoint: &str) -> Result<Self, reqwest::Error> {
        let client = Client::builder()
            .timeout(Duration::from_secs(30))
            .build()?;

        Ok(Self {
            client,
            endpoint: endpoint.to_string(),
            default_headers: HashMap::new(),
        })
    }

    pub fn with_bearer_token(mut self, token: &str) -> Self {
        self.default_headers.insert("Authorization".to_string(), format!("Bearer {}", token));
        self
    }

    pub async fn query<T: serde::de::DeserializeOwned>(
        &self,
        query: &str,
        variables: Option<serde_json::Value>,
    ) -> Result<T, reqwest::Error> {
        let mut body = serde_json::json!({ "query": query });
        if let Some(vars) = variables {
            body["variables"] = vars;
        }

        let mut req = self.client.post(&self.endpoint).json(&body);
        for (key, value) in &self.default_headers {
            req = req.header(key, value);
        }

        let resp = req.send().await?;
        resp.json::<T>().await
    }

    pub async fn mutate<T: serde::de::DeserializeOwned>(
        &self,
        mutation: &str,
        variables: Option<serde_json::Value>,
    ) -> Result<T, reqwest::Error> {
        self.query(mutation, variables).await
    }
}
