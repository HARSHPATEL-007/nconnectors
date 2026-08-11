use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ConnectorTemplate {
    pub template_id: String,
    pub name: String,
    pub provider: String,
    pub version: String,
    pub auth_config: AuthTemplate,
    pub endpoints: Vec<EndpointTemplate>,
    pub schemas: Vec<SchemaTemplate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuthTemplate {
    pub auth_type: String,
    pub config: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EndpointTemplate {
    pub name: String,
    pub method: String,
    pub path: String,
    pub description: String,
    pub parameters: serde_json::Value,
    pub response_schema: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SchemaTemplate {
    pub name: String,
    pub schema_type: String,
    pub definition: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeTemplate {
    pub recipe_id: String,
    pub name: String,
    pub description: String,
    pub steps: Vec<RecipeStep>,
    pub schedule: Option<String>,
    pub compiled: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RecipeStep {
    pub step_number: u32,
    pub tool_name: String,
    pub parameters: serde_json::Value,
    pub dependencies: Vec<u32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkflowTemplate {
    pub workflow_id: String,
    pub name: String,
    pub description: String,
    pub triggers: Vec<TriggerTemplate>,
    pub actions: Vec<ActionTemplate>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TriggerTemplate {
    pub trigger_type: String,
    pub config: serde_json::Value,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ActionTemplate {
    pub action_type: String,
    pub tool_name: String,
    pub parameters: serde_json::Value,
}
