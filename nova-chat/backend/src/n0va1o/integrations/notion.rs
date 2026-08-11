use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct NotionClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotionPage {
    pub id: String,
    pub title: Option<String>,
    pub url: String,
    pub created_time: String,
    pub last_edited_time: String,
    pub archived: bool,
    pub parent_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotionDatabase {
    pub id: String,
    pub title: Option<String>,
    pub url: String,
    pub created_time: String,
}

impl NotionClient {
    pub fn new(token: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://api.notion.com/v1", token),
        }
    }

    pub async fn search_pages(&self, query: &str, page_size: u32) -> Result<Vec<NotionPage>, IntegrationError> {
        let body = serde_json::json!({
            "query": query,
            "page_size": page_size,
        });

        let result = self.client.post("search", &body).await?;

        let pages = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|page| {
                let title = page["properties"]["title"]["title"]
                    .as_array()
                    .and_then(|arr| arr.first())
                    .and_then(|t| t["plain_text"].as_str())
                    .map(|s| s.to_string());

                Some(NotionPage {
                    id: page["id"].as_str()?.to_string(),
                    title,
                    url: page["url"].as_str()?.to_string(),
                    created_time: page["created_time"].as_str()?.to_string(),
                    last_edited_time: page["last_edited_time"].as_str()?.to_string(),
                    archived: page["archived"].as_bool().unwrap_or(false),
                    parent_type: page["parent"]["type"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(pages)
    }

    pub async fn get_page(&self, page_id: &str) -> Result<serde_json::Value, IntegrationError> {
        self.client.get(&format!("pages/{}", page_id)).await
    }

    pub async fn create_page(&self, database_id: &str, title: &str, content: Option<&str>) -> Result<NotionPage, IntegrationError> {
        let body = serde_json::json!({
            "parent": {"database_id": database_id},
            "properties": {
                "title": {
                    "title": [{"text": {"content": title}}]
                }
            },
            "children": content.map(|c| vec![
                serde_json::json!({
                    "object": "block",
                    "type": "paragraph",
                    "paragraph": {
                        "rich_text": [{"text": {"content": c}}]
                    }
                })
            ]),
        });

        let result = self.client.post("pages", &body).await?;

        let page_title = result["properties"]["title"]["title"]
            .as_array()
            .and_then(|arr| arr.first())
            .and_then(|t| t["plain_text"].as_str())
            .map(|s| s.to_string());

        Ok(NotionPage {
            id: result["id"].as_str().unwrap_or("").to_string(),
            title: page_title,
            url: result["url"].as_str().unwrap_or("").to_string(),
            created_time: result["created_time"].as_str().unwrap_or("").to_string(),
            last_edited_time: result["last_edited_time"].as_str().unwrap_or("").to_string(),
            archived: false,
            parent_type: "database".to_string(),
        })
    }

    pub async fn list_databases(&self) -> Result<Vec<NotionDatabase>, IntegrationError> {
        let body = serde_json::json!({
            "filter": {"property": "object", "value": "database"},
        });

        let result = self.client.post("search", &body).await?;

        let databases = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|db| {
                let title = db["title"]
                    .as_array()
                    .and_then(|arr| arr.first())
                    .and_then(|t| t["plain_text"].as_str())
                    .map(|s| s.to_string());

                Some(NotionDatabase {
                    id: db["id"].as_str()?.to_string(),
                    title,
                    url: db["url"].as_str()?.to_string(),
                    created_time: db["created_time"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(databases)
    }

    pub async fn query_database(&self, database_id: &str, filter: Option<&serde_json::Value>) -> Result<Vec<NotionPage>, IntegrationError> {
        let body = serde_json::json!({
            "database_id": database_id,
            "filter": filter,
        });

        let result = self.client.post(&format!("databases/{}/query", database_id), &body).await?;

        let pages = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|page| {
                let title = page["properties"]["title"]["title"]
                    .as_array()
                    .and_then(|arr| arr.first())
                    .and_then(|t| t["plain_text"].as_str())
                    .map(|s| s.to_string());

                Some(NotionPage {
                    id: page["id"].as_str()?.to_string(),
                    title,
                    url: page["url"].as_str()?.to_string(),
                    created_time: page["created_time"].as_str()?.to_string(),
                    last_edited_time: page["last_edited_time"].as_str()?.to_string(),
                    archived: page["archived"].as_bool().unwrap_or(false),
                    parent_type: page["parent"]["type"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(pages)
    }
}
