use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::protocol::{ToolSchema, ToolCallResponse, ContentBlock};

pub type ToolFn = Arc<dyn Fn(serde_json::Value) -> Result<serde_json::Value, ToolError> + Send + Sync>;

pub struct ToolDefinition {
    pub schema: ToolSchema,
    pub handler: ToolFn,
    pub metadata: ToolMetadata,
}

impl std::fmt::Debug for ToolDefinition {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("ToolDefinition")
            .field("schema", &self.schema)
            .field("metadata", &self.metadata)
            .field("handler", &"<function>")
            .finish()
    }
}

impl Clone for ToolDefinition {
    fn clone(&self) -> Self {
        Self {
            schema: self.schema.clone(),
            handler: self.handler.clone(),
            metadata: self.metadata.clone(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolMetadata {
    pub provider: String,
    pub category: String,
    pub risk_level: RiskLevel,
    pub required_scopes: Vec<String>,
    pub estimated_latency_ms: u32,
    pub deprecated: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum RiskLevel {
    Low,
    Medium,
    High,
    Critical,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolResult {
    pub success: bool,
    pub content: Vec<ContentBlock>,
    pub error: Option<String>,
    pub latency_ms: u64,
    pub risk_score: f64,
}

#[derive(Debug, thiserror::Error)]
pub enum ToolError {
    #[error("Authentication required: {0}")]
    AuthRequired(String),
    #[error("Rate limited")]
    RateLimited,
    #[error("Invalid parameters: {0}")]
    InvalidParams(String),
    #[error("Provider error: {0}")]
    ProviderError(String),
    #[error("Schema drift detected: {0}")]
    SchemaDrift(String),
    #[error("HITL escalation required")]
    HitlRequired,
    #[error("Internal error: {0}")]
    Internal(String),
}

pub struct ToolRegistry {
    tools: Arc<RwLock<HashMap<String, ToolDefinition>>>,
}

impl ToolRegistry {
    pub fn new() -> Self {
        Self {
            tools: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn register(&self, tool: ToolDefinition) {
        let mut tools = self.tools.write().await;
        tools.insert(tool.schema.name.clone(), tool);
    }

    pub async fn get(&self, name: &str) -> Option<ToolDefinition> {
        let tools = self.tools.read().await;
        tools.get(name).cloned()
    }

    pub async fn list(&self) -> Vec<ToolSchema> {
        let tools = self.tools.read().await;
        tools.values().map(|t| t.schema.clone()).collect()
    }

    pub async fn list_by_provider(&self, provider: &str) -> Vec<ToolSchema> {
        let tools = self.tools.read().await;
        tools
            .values()
            .filter(|t| t.metadata.provider == provider)
            .map(|t| t.schema.clone())
            .collect()
    }

    pub async fn search_by_intent(&self, query: &str, max_results: usize) -> Vec<(ToolSchema, f64)> {
        let tools = self.tools.read().await;
        let query_lower = query.to_lowercase();
        let query_terms: Vec<&str> = query_lower.split_whitespace().collect();

        let mut scored: Vec<(ToolSchema, f64)> = tools
            .values()
            .map(|tool| {
                let name_lower = tool.schema.name.to_lowercase();
                let desc_lower = tool.schema.description.as_deref().unwrap_or("").to_lowercase();
                let provider_lower = tool.metadata.provider.to_lowercase();

                let mut score = 0.0;

                for term in &query_terms {
                    if name_lower.contains(term) {
                        score += 0.4;
                    }
                    if desc_lower.contains(term) {
                        score += 0.2;
                    }
                    if provider_lower.contains(term) {
                        score += 0.3;
                    }
                    if tool.metadata.category.to_lowercase().contains(term) {
                        score += 0.1;
                    }
                }

                if name_lower.starts_with(&query_lower) {
                    score += 0.5;
                }

                (tool.schema.clone(), score)
            })
            .filter(|(_, score)| *score > 0.0)
            .collect();

        scored.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        scored.truncate(max_results);
        scored
    }

    pub async fn count(&self) -> usize {
        let tools = self.tools.read().await;
        tools.len()
    }

    pub async fn execute(&self, name: &str, arguments: serde_json::Value) -> ToolResult {
        let start = std::time::Instant::now();

        let tool = match self.get(name).await {
            Some(t) => t,
            None => {
                return ToolResult {
                    success: false,
                    content: vec![ContentBlock::Text {
                        text: format!("Tool '{}' not found", name),
                    }],
                    error: Some(format!("Unknown tool: {}", name)),
                    latency_ms: start.elapsed().as_millis() as u64,
                    risk_score: 0.0,
                };
            }
        };

        match (tool.handler)(arguments) {
            Ok(result) => ToolResult {
                success: true,
                content: vec![ContentBlock::Text {
                    text: serde_json::to_string_pretty(&result).unwrap_or_default(),
                }],
                error: None,
                latency_ms: start.elapsed().as_millis() as u64,
                risk_score: risk_to_score(&tool.metadata.risk_level),
            },
            Err(e) => ToolResult {
                success: false,
                content: vec![ContentBlock::Text {
                    text: format!("Error: {}", e),
                }],
                error: Some(e.to_string()),
                latency_ms: start.elapsed().as_millis() as u64,
                risk_score: risk_to_score(&tool.metadata.risk_level),
            },
        }
    }
}

fn risk_to_score(risk: &RiskLevel) -> f64 {
    match risk {
        RiskLevel::Low => 0.1,
        RiskLevel::Medium => 0.4,
        RiskLevel::High => 0.7,
        RiskLevel::Critical => 0.95,
    }
}

impl Default for ToolRegistry {
    fn default() -> Self {
        Self::new()
    }
}
