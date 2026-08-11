use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SchemaModifier {
    pub rules: Vec<ModifierRule>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModifierRule {
    pub tool_name: String,
    pub modifier_type: ModifierType,
    pub field: Option<String>,
    pub value: Option<serde_json::Value>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ModifierType {
    FieldRedaction,
    ValueCapping,
    ActionBlocking,
    PiiMasking,
    ScopeFiltering,
    TemporalGating,
    GeographicFencing,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AgentContext {
    pub agent_id: String,
    pub role: String,
    pub permissions: Vec<String>,
    pub autonomy_level: AutonomyLevel,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum AutonomyLevel {
    Low,
    Medium,
    High,
    Full,
}

impl SchemaModifier {
    pub fn new() -> Self {
        Self { rules: Vec::new() }
    }

    pub fn add_rule(&mut self, rule: ModifierRule) {
        self.rules.push(rule);
    }

    pub fn apply(&self, tool_name: &str, schema: &serde_json::Value, context: &AgentContext) -> serde_json::Value {
        let mut modified = schema.clone();

        for rule in &self.rules {
            if rule.tool_name != tool_name && rule.tool_name != "*" {
                continue;
            }

            match rule.modifier_type {
                ModifierType::FieldRedaction => {
                    if let Some(ref field) = rule.field {
                        if let Some(obj) = modified.as_object_mut() {
                            obj.remove(field);
                        }
                    }
                }
                ModifierType::ValueCapping => {
                    if let (Some(ref field), Some(ref cap_value)) = (&rule.field, &rule.value) {
                        if let Some(obj) = modified.as_object_mut() {
                            if let Some(field_val) = obj.get_mut(field) {
                                if let (Some(num), Some(cap)) = (field_val.as_f64(), cap_value.as_f64()) {
                                    if num > cap {
                                        *field_val = serde_json::json!(cap);
                                    }
                                }
                            }
                        }
                    }
                }
                ModifierType::ActionBlocking => {
                    if let Some(obj) = modified.as_object_mut() {
                        obj.insert("_blocked".to_string(), serde_json::json!(true));
                        obj.insert("_block_reason".to_string(), serde_json::json!("Action blocked by policy"));
                    }
                }
                ModifierType::PiiMasking => {
                    mask_pii_in_schema(&mut modified);
                }
                ModifierType::ScopeFiltering => {
                    if let Some(obj) = modified.as_object_mut() {
                        let allowed: Vec<String> = context.permissions.clone();
                        obj.insert("_allowed_scopes".to_string(), serde_json::json!(allowed));
                    }
                }
                ModifierType::TemporalGating => {
                    let now = chrono::Utc::now();
                    let hour = now.time().hour();
                    if hour >= 18 || hour < 6 {
                        if let Some(obj) = modified.as_object_mut() {
                            obj.insert("_temporally_blocked".to_string(), serde_json::json!(true));
                        }
                    }
                }
                ModifierType::GeographicFencing => {
                    // Placeholder for geo-fencing logic
                }
            }
        }

        modified
    }

    pub fn should_escalate(&self, tool_name: &str, risk_score: f64) -> bool {
        risk_score > 0.7 || self.rules.iter().any(|r| {
            r.tool_name == tool_name && matches!(r.modifier_type, ModifierType::ActionBlocking)
        })
    }
}

fn mask_pii_in_schema(schema: &mut serde_json::Value) {
    if let Some(obj) = schema.as_object_mut() {
        for (_, value) in obj.iter_mut() {
            if let Some(s) = value.as_str() {
                if s.contains('@') && s.contains('.') {
                    *value = serde_json::json!("***@***.com");
                }
            }
        }
    }
}

impl Default for SchemaModifier {
    fn default() -> Self {
        Self::new()
    }
}
