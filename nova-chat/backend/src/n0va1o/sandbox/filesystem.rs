use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FilePointer {
    pub path: String,
    pub size_bytes: u64,
    pub mime_type: String,
    pub sandbox_id: String,
    pub created_at: String,
    pub metadata: HashMap<String, String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "snake_case")]
pub enum FileOperation {
    Read { path: String, offset: u64, limit: u64 },
    Write { path: String, content: String },
    Delete { path: String },
    List { path: String },
    Grep { path: String, pattern: String },
    ChunkRead { path: String, chunk_size: usize },
    Convert { path: String, target_format: String },
    Summarize { path: String },
}

pub struct VirtualFilesystem {
    files: Arc<RwLock<HashMap<String, VirtualFile>>>,
    base_path: String,
}

#[derive(Debug, Clone)]
struct VirtualFile {
    path: String,
    content: Vec<u8>,
    mime_type: String,
    size: u64,
    created_at: String,
}

impl VirtualFilesystem {
    pub fn new(base_path: &str) -> Self {
        Self {
            files: Arc::new(RwLock::new(HashMap::new())),
            base_path: base_path.to_string(),
        }
    }

    pub async fn store(&self, path: String, content: Vec<u8>, mime_type: String) -> FilePointer {
        let size = content.len() as u64;
        let file = VirtualFile {
            path: path.clone(),
            content,
            mime_type: mime_type.clone(),
            size,
            created_at: chrono::Utc::now().to_rfc3339(),
        };

        let mut files = self.files.write().await;
        files.insert(path.clone(), file);

        FilePointer {
            path,
            size_bytes: size,
            mime_type,
            sandbox_id: self.base_path.clone(),
            created_at: chrono::Utc::now().to_rfc3339(),
            metadata: HashMap::new(),
        }
    }

    pub async fn read(&self, path: &str, offset: u64, limit: u64) -> Option<Vec<u8>> {
        let files = self.files.read().await;
        files.get(path).map(|f| {
            let start = offset as usize;
            let end = ((offset + limit) as usize).min(f.content.len());
            f.content[start..end].to_vec()
        })
    }

    pub async fn delete(&self, path: &str) -> bool {
        let mut files = self.files.write().await;
        files.remove(path).is_some()
    }

    pub async fn list(&self) -> Vec<FilePointer> {
        let files = self.files.read().await;
        files
            .values()
            .map(|f| FilePointer {
                path: f.path.clone(),
                size_bytes: f.size,
                mime_type: f.mime_type.clone(),
                sandbox_id: self.base_path.clone(),
                created_at: f.created_at.clone(),
                metadata: HashMap::new(),
            })
            .collect()
    }

    pub async fn grep(&self, path: &str, pattern: &str) -> Vec<(usize, String)> {
        let files = self.files.read().await;
        match files.get(path) {
            Some(file) => {
                let content = String::from_utf8_lossy(&file.content);
                content
                    .lines()
                    .enumerate()
                    .filter(|(_, line)| line.contains(pattern))
                    .map(|(i, line)| (i, line.to_string()))
                    .collect()
            }
            None => vec![],
        }
    }

    pub async fn offload_large_payload(&self, path: String, content: Vec<u8>) -> FilePointer {
        let mime_type = detect_mime_type(&content);
        self.store(path, content, mime_type).await
    }
}

fn detect_mime_type(content: &[u8]) -> String {
    if content.starts_with(b"{") || content.starts_with(b"[") {
        "application/json".to_string()
    } else if content.starts_with(b"PK") {
        "application/zip".to_string()
    } else if content.starts_with(&[0x89, 0x50, 0x4E, 0x47]) {
        "image/png".to_string()
    } else {
        "application/octet-stream".to_string()
    }
}
