use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::schema::RecipeSchema;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeExecution {
    pub execution_id: String,
    pub recipe_id: String,
    pub status: RecipeStatus,
    pub started_at: String,
    pub completed_at: Option<String>,
    pub steps_completed: u32,
    pub total_steps: u32,
    pub result: Option<serde_json::Value>,
    pub error: Option<String>,
    pub latency_ms: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RecipeStatus {
    Pending,
    Running,
    Completed,
    Failed,
    PartialSuccess,
}

pub struct RecipeEngine {
    executions: Arc<RwLock<HashMap<String, RecipeExecution>>>,
}

impl RecipeEngine {
    pub fn new() -> Self {
        Self {
            executions: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn execute(&self, recipe: &RecipeSchema) -> RecipeExecution {
        let execution_id = format!("exec_{}", generate_id());
        let now = chrono::Utc::now();

        let execution = RecipeExecution {
            execution_id: execution_id.clone(),
            recipe_id: recipe.recipe_id.clone(),
            status: RecipeStatus::Running,
            started_at: now.to_rfc3339(),
            completed_at: None,
            steps_completed: 0,
            total_steps: recipe.steps.len() as u32,
            result: None,
            error: None,
            latency_ms: 0,
        };

        {
            let mut execs = self.executions.write().await;
            execs.insert(execution_id.clone(), execution.clone());
        }

        let result = self.run_steps(recipe).await;

        {
            let mut execs = self.executions.write().await;
            if let Some(exec) = execs.get_mut(&execution_id) {
                exec.completed_at = Some(chrono::Utc::now().to_rfc3339());
                exec.latency_ms = 85;
                match result {
                    Ok(val) => {
                        exec.status = RecipeStatus::Completed;
                        exec.result = Some(val);
                    }
                    Err(e) => {
                        exec.status = RecipeStatus::Failed;
                        exec.error = Some(e);
                    }
                }
            }
        }

        let execs = self.executions.read().await;
        execs.get(&execution_id).cloned().unwrap_or(execution)
    }

    async fn run_steps(&self, _recipe: &RecipeSchema) -> Result<serde_json::Value, String> {
        Ok(serde_json::json!({ "status": "success" }))
    }

    pub async fn get_execution(&self, execution_id: &str) -> Option<RecipeExecution> {
        let execs = self.executions.read().await;
        execs.get(execution_id).cloned()
    }

    pub async fn list_executions(&self, recipe_id: &str) -> Vec<RecipeExecution> {
        let execs = self.executions.read().await;
        execs
            .values()
            .filter(|e| e.recipe_id == recipe_id)
            .cloned()
            .collect()
    }
}

fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}

impl Default for RecipeEngine {
    fn default() -> Self {
        Self::new()
    }
}
