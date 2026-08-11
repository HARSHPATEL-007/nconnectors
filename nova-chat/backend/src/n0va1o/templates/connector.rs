use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use super::{ConnectorTemplate, AuthTemplate, EndpointTemplate, SchemaTemplate};

pub struct ConnectorTemplateEngine {
    templates: HashMap<String, ConnectorTemplate>,
}

impl ConnectorTemplateEngine {
    pub fn new() -> Self {
        Self {
            templates: HashMap::new(),
        }
    }

    pub fn register(&mut self, template: ConnectorTemplate) {
        self.templates.insert(template.template_id.clone(), template);
    }

    pub fn get(&self, id: &str) -> Option<&ConnectorTemplate> {
        self.templates.get(id)
    }

    pub fn list(&self) -> Vec<&ConnectorTemplate> {
        self.templates.values().collect()
    }

    pub fn generate_oauth_config(&self, provider: &str) -> AuthTemplate {
        AuthTemplate {
            auth_type: "oauth2.1".to_string(),
            config: serde_json::json!({
                "provider": provider,
                "flows": ["authorization_code", "pkce"],
                "scopes": ["read", "write"],
                "token_rotation": true,
                "rotation_interval_days": 15,
            }),
        }
    }

    pub fn generate_api_key_config(&self, provider: &str) -> AuthTemplate {
        AuthTemplate {
            auth_type: "api_key".to_string(),
            config: serde_json::json!({
                "provider": provider,
                "header_name": "Authorization",
                "header_format": "Bearer {key}",
                "rotation": false,
            }),
        }
    }

    pub fn create_default_endpoints(&self, base_path: &str) -> Vec<EndpointTemplate> {
        vec![
            EndpointTemplate {
                name: "list".to_string(),
                method: "GET".to_string(),
                path: format!("{}/", base_path),
                description: "List all resources".to_string(),
                parameters: serde_json::json!({
                    "type": "object",
                    "properties": {
                        "limit": { "type": "integer", "default": 50 },
                        "offset": { "type": "integer", "default": 0 },
                    }
                }),
                response_schema: serde_json::json!({
                    "type": "object",
                    "properties": {
                        "items": { "type": "array" },
                        "total": { "type": "integer" },
                        "has_more": { "type": "boolean" },
                    }
                }),
            },
            EndpointTemplate {
                name: "get".to_string(),
                method: "GET".to_string(),
                path: format!("{}/{{id}}", base_path),
                description: "Get a single resource".to_string(),
                parameters: serde_json::json!({
                    "type": "object",
                    "required": ["id"],
                    "properties": {
                        "id": { "type": "string" },
                    }
                }),
                response_schema: serde_json::json!({
                    "type": "object",
                }),
            },
        ]
    }
}

impl Default for ConnectorTemplateEngine {
    fn default() -> Self {
        Self::new()
    }
}
