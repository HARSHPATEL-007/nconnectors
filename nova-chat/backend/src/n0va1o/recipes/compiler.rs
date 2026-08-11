use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use super::schema::{RecipeSchema, RecipeStep, RecipeTrigger};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeCompilationRequest {
    pub session_id: String,
    pub recipe_name: String,
    pub description: String,
    pub schedule: Option<RecipeSchedule>,
    pub optimization_level: OptimizationLevel,
    pub failover_enabled: bool,
    pub notification_channels: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeSchedule {
    pub schedule_type: String,
    pub expression: String,
    pub timezone: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum OptimizationLevel {
    None,
    Conservative,
    Aggressive,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeCompilationResult {
    pub recipe_id: String,
    pub compiled_schema: String,
    pub execution_endpoint: String,
    pub estimated_latency_ms: u32,
    pub requires_approval: bool,
    pub risk_score: f64,
    pub version: String,
    pub compiled_at: String,
    pub next_scheduled_run: Option<String>,
    pub monitoring_dashboard: String,
}

pub struct RecipeCompiler {
    compiled_recipes: Arc<RwLock<HashMap<String, RecipeSchema>>>,
}

impl RecipeCompiler {
    pub fn new() -> Self {
        Self {
            compiled_recipes: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn compile(&self, request: RecipeCompilationRequest) -> RecipeCompilationResult {
        let recipe_id = format!("rec_{}", generate_id());
        let now = chrono::Utc::now();

        let schema = RecipeSchema {
            recipe_id: recipe_id.clone(),
            name: request.recipe_name.clone(),
            description: request.description.clone(),
            steps: vec![],
            trigger: request.schedule.as_ref().map(|s| RecipeTrigger {
                trigger_type: s.schedule_type.clone(),
                expression: s.expression.clone(),
                timezone: s.timezone.clone(),
            }),
            optimization_level: request.optimization_level.clone(),
            failover_enabled: request.failover_enabled,
            notification_channels: request.notification_channels.clone(),
            version: "1.0.0".to_string(),
            compiled_at: now.to_rfc3339(),
        };

        {
            let mut recipes = self.compiled_recipes.write().await;
            recipes.insert(recipe_id.clone(), schema);
        }

        let next_run = request.schedule.as_ref().map(|s| {
            format!("cron:{} tz:{}", s.expression, s.timezone)
        });

        let execution_endpoint = format!("https://n0va1o.io/recipes/{}/execute", recipe_id);
        let monitoring_dashboard = format!("https://n0va1o.io/dashboard/recipes/{}", recipe_id);

        RecipeCompilationResult {
            recipe_id,
            compiled_schema: "pydantic_v2".to_string(),
            execution_endpoint,
            estimated_latency_ms: 85,
            requires_approval: false,
            risk_score: 0.12,
            version: "1.0.0".to_string(),
            compiled_at: now.to_rfc3339(),
            next_scheduled_run: next_run,
            monitoring_dashboard,
        }
    }

    pub async fn get(&self, recipe_id: &str) -> Option<RecipeSchema> {
        let recipes = self.compiled_recipes.read().await;
        recipes.get(recipe_id).cloned()
    }

    pub async fn list(&self) -> Vec<RecipeSchema> {
        let recipes = self.compiled_recipes.read().await;
        recipes.values().cloned().collect()
    }

    pub async fn delete(&self, recipe_id: &str) -> bool {
        let mut recipes = self.compiled_recipes.write().await;
        recipes.remove(recipe_id).is_some()
    }
}

fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}

impl Default for RecipeCompiler {
    fn default() -> Self {
        Self::new()
    }
}
