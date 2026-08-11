use serde::{Deserialize, Serialize};
use super::{WorkflowTemplate, TriggerTemplate, ActionTemplate};
use std::collections::HashMap;

pub struct WorkflowEngine {
    workflows: HashMap<String, WorkflowTemplate>,
}

impl WorkflowEngine {
    pub fn new() -> Self {
        Self { workflows: HashMap::new() }
    }

    pub fn register(&mut self, workflow: WorkflowTemplate) {
        self.workflows.insert(workflow.workflow_id.clone(), workflow);
    }

    pub fn get(&self, id: &str) -> Option<&WorkflowTemplate> {
        self.workflows.get(id)
    }

    pub fn create_workflow(&self, name: &str, description: &str) -> WorkflowTemplate {
        WorkflowTemplate {
            workflow_id: format!("wf_{}", uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()),
            name: name.to_string(),
            description: description.to_string(),
            triggers: vec![],
            actions: vec![],
        }
    }

    pub fn add_trigger(&self, workflow: &mut WorkflowTemplate, trigger_type: &str, config: serde_json::Value) {
        workflow.triggers.push(TriggerTemplate {
            trigger_type: trigger_type.to_string(),
            config,
        });
    }

    pub fn add_action(&self, workflow: &mut WorkflowTemplate, action_type: &str, tool_name: &str, parameters: serde_json::Value) {
        workflow.actions.push(ActionTemplate {
            action_type: action_type.to_string(),
            tool_name: tool_name.to_string(),
            parameters,
        });
    }
}

impl Default for WorkflowEngine {
    fn default() -> Self { Self::new() }
}
