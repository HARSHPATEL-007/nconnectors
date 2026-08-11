use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeSchema {
    pub recipe_id: String,
    pub name: String,
    pub description: String,
    pub steps: Vec<RecipeStep>,
    pub trigger: Option<RecipeTrigger>,
    pub optimization_level: super::compiler::OptimizationLevel,
    pub failover_enabled: bool,
    pub notification_channels: Vec<String>,
    pub version: String,
    pub compiled_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeStep {
    pub step_number: u32,
    pub tool_name: String,
    pub parameters: serde_json::Value,
    pub dependencies: Vec<u32>,
    pub retry_policy: Option<RetryPolicy>,
    pub timeout_ms: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RetryPolicy {
    pub max_retries: u32,
    pub backoff_ms: u64,
    pub backoff_multiplier: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeTrigger {
    pub trigger_type: String,
    pub expression: String,
    pub timezone: String,
}
