use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct GoogleDriveClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DriveFile {
    pub id: String,
    pub name: String,
    pub mime_type: String,
    pub size: Option<u64>,
    pub modified_time: String,
    pub web_view_link: Option<String>,
    pub parents: Option<Vec<String>>,
    pub trashed: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DriveFileList {
    pub files: Vec<DriveFile>,
    pub next_page_token: Option<String>,
}

impl GoogleDriveClient {
    pub fn new(token: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://www.googleapis.com/drive/v3", token),
        }
    }

    pub async fn list_files(&self, page_size: u32, query: Option<&str>, page_token: Option<&str>) -> Result<DriveFileList, IntegrationError> {
        let mut path = format!("files?pageSize={}&fields=nextPageToken,id,name,mimeType,size,modifiedTime,webViewLink,parents,trashed", page_size);

        if let Some(q) = query {
            path.push_str(&format!("&q={}", urlencoding::encode(q)));
        }

        if let Some(token) = page_token {
            path.push_str(&format!("&pageToken={}", token));
        }

        let result = self.client.get(&path).await?;

        let files = result["files"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing files array".to_string()))?
            .iter()
            .filter_map(|f| {
                Some(DriveFile {
                    id: f["id"].as_str()?.to_string(),
                    name: f["name"].as_str()?.to_string(),
                    mime_type: f["mimeType"].as_str()?.to_string(),
                    size: f["size"].as_str().and_then(|s| s.parse().ok()),
                    modified_time: f["modifiedTime"].as_str()?.to_string(),
                    web_view_link: f["webViewLink"].as_str().map(|s| s.to_string()),
                    parents: f["parents"].as_array().map(|arr| {
                        arr.iter().filter_map(|p| p.as_str().map(|s| s.to_string())).collect()
                    }),
                    trashed: f["trashed"].as_bool().unwrap_or(false),
                })
            })
            .collect();

        Ok(DriveFileList {
            files,
            next_page_token: result["nextPageToken"].as_str().map(|s| s.to_string()),
        })
    }

    pub async fn get_file_metadata(&self, file_id: &str) -> Result<DriveFile, IntegrationError> {
        let path = format!("files/{}?fields=id,name,mimeType,size,modifiedTime,webViewLink,parents,trashed", file_id);
        let result = self.client.get(&path).await?;

        Ok(DriveFile {
            id: result["id"].as_str().unwrap_or("").to_string(),
            name: result["name"].as_str().unwrap_or("").to_string(),
            mime_type: result["mimeType"].as_str().unwrap_or("").to_string(),
            size: result["size"].as_str().and_then(|s| s.parse().ok()),
            modified_time: result["modifiedTime"].as_str().unwrap_or("").to_string(),
            web_view_link: result["webViewLink"].as_str().map(|s| s.to_string()),
            parents: result["parents"].as_array().map(|arr| {
                arr.iter().filter_map(|p| p.as_str().map(|s| s.to_string())).collect()
            }),
            trashed: result["trashed"].as_bool().unwrap_or(false),
        })
    }

    pub async fn create_folder(&self, name: &str, parent_id: Option<&str>) -> Result<DriveFile, IntegrationError> {
        let body = serde_json::json!({
            "name": name,
            "mimeType": "application/vnd.google-apps.folder",
            "parents": parent_id.map(|id| vec![id]).unwrap_or_default(),
        });

        let result = self.client.post("files?fields=id,name,mimeType,modifiedTime", &body).await?;

        Ok(DriveFile {
            id: result["id"].as_str().unwrap_or("").to_string(),
            name: result["name"].as_str().unwrap_or("").to_string(),
            mime_type: result["mimeType"].as_str().unwrap_or("").to_string(),
            size: None,
            modified_time: result["modifiedTime"].as_str().unwrap_or("").to_string(),
            web_view_link: None,
            parents: None,
            trashed: false,
        })
    }

    pub async fn delete_file(&self, file_id: &str) -> Result<(), IntegrationError> {
        let path = format!("files/{}", file_id);
        self.client.delete(&path).await
    }

    pub async fn get_about(&self) -> Result<serde_json::Value, IntegrationError> {
        self.client.get("about?fields=user,storageQuota").await
    }

    pub async fn search_files(&self, query: &str, page_size: u32) -> Result<Vec<DriveFile>, IntegrationError> {
        let path = format!("files?pageSize={}&q=name+contains+'{}'&fields=files(id,name,mimeType,size,modifiedTime,webViewLink,parents,trashed)", page_size, urlencoding::encode(query));
        let result = self.client.get(&path).await?;

        let files = result["files"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing files array".to_string()))?
            .iter()
            .filter_map(|f| {
                Some(DriveFile {
                    id: f["id"].as_str()?.to_string(),
                    name: f["name"].as_str()?.to_string(),
                    mime_type: f["mimeType"].as_str()?.to_string(),
                    size: f["size"].as_str().and_then(|s| s.parse().ok()),
                    modified_time: f["modifiedTime"].as_str()?.to_string(),
                    web_view_link: f["webViewLink"].as_str().map(|s| s.to_string()),
                    parents: f["parents"].as_array().map(|arr| {
                        arr.iter().filter_map(|p| p.as_str().map(|s| s.to_string())).collect()
                    }),
                    trashed: f["trashed"].as_bool().unwrap_or(false),
                })
            })
            .collect();

        Ok(files)
    }
}
