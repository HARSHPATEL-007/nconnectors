use serde::{Deserialize, Serialize};
use super::{RecipeTemplate, RecipeStep};

pub struct RecipeCompiler;

impl RecipeCompiler {
    pub fn new() -> Self { Self }

    pub fn compile(&self, name: &str, description: &str, steps: Vec<RecipeStep>) -> RecipeTemplate {
        RecipeTemplate {
            recipe_id: format!("rec_{}", generate_id()),
            name: name.to_string(),
            description: description.to_string(),
            steps,
            schedule: None,
            compiled: true,
        }
    }

    pub fn validate(&self, recipe: &RecipeTemplate) -> Result<(), RecipeError> {
        if recipe.name.is_empty() {
            return Err(RecipeError::Validation("Recipe name cannot be empty".to_string()));
        }
        if recipe.steps.is_empty() {
            return Err(RecipeError::Validation("Recipe must have at least one step".to_string()));
        }
        for step in &recipe.steps {
            if step.tool_name.is_empty() {
                return Err(RecipeError::Validation(
                    format!("Step {} has no tool_name", step.step_number)
                ));
            }
        }
        Ok(())
    }
}

#[derive(Debug, thiserror::Error)]
pub enum RecipeError {
    #[error("Compilation error: {0}")]
    Compilation(String),
    #[error("Validation error: {0}")]
    Validation(String),
}

fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}
