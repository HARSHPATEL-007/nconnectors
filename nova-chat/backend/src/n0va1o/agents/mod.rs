use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Agent {
    pub agent_id: String,
    pub name: String,
    pub agent_type: String,
    pub description: String,
    pub status: AgentStatus,
    pub permissions: HashMap<String, Vec<String>>,
    pub autonomy_level: AutonomyLevel,
    pub approval_required_for: Vec<String>,
    pub webhook_url: Option<String>,
    pub max_daily_actions: u32,
    pub sandbox_enabled: bool,
    pub neural_mode: bool,
    pub context_window: u32,
    pub preferred_model: String,
    pub fallback_model: Option<String>,
    pub tools_available: Vec<String>,
    pub api_key: String,
    pub session_endpoint: String,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum AgentStatus {
    Active,
    Paused,
    Degraded,
    Failed,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum AutonomyLevel {
    Low,
    Medium,
    High,
    Full,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RegisterAgentRequest {
    pub agent_name: String,
    pub agent_type: String,
    pub description: String,
    pub permissions: HashMap<String, Vec<String>>,
    pub autonomy_level: String,
    pub approval_required_for: Vec<String>,
    pub webhook_url: Option<String>,
    pub max_daily_actions: u32,
    pub sandbox_enabled: bool,
    pub neural_mode: bool,
    pub context_window: Option<u32>,
    pub preferred_model: Option<String>,
    pub fallback_model: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RegisterAgentResponse {
    pub agent_id: String,
    pub api_key: String,
    pub status: String,
    pub connected_account: String,
    pub tools_available: Vec<String>,
    pub session_endpoint: String,
    pub sandbox_endpoint: Option<String>,
    pub recipe_endpoint: String,
    pub created_at: String,
    pub expires_at: String,
}

pub struct AgentRegistry {
    agents: Arc<RwLock<HashMap<String, Agent>>>,
}

impl AgentRegistry {
    pub fn new() -> Self {
        Self {
            agents: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn register(&self, request: RegisterAgentRequest) -> RegisterAgentResponse {
        let agent_id = format!("agent_{}", generate_short_id());
        let api_key = format!("n0va_sk_{}", generate_short_id());
        let connected_account = format!("ca_n0va1o_{}", generate_short_id());
        let now = chrono::Utc::now();
        let expires = now + chrono::Duration::days(365);

        let tools = self.discover_tools_for_agent(&request.permissions);

        let agent = Agent {
            agent_id: agent_id.clone(),
            name: request.agent_name.clone(),
            agent_type: request.agent_type,
            description: request.description,
            status: AgentStatus::Active,
            permissions: request.permissions,
            autonomy_level: match request.autonomy_level.as_str() {
                "low" => AutonomyLevel::Low,
                "medium" => AutonomyLevel::Medium,
                "high" => AutonomyLevel::High,
                "full" => AutonomyLevel::Full,
                _ => AutonomyLevel::Medium,
            },
            approval_required_for: request.approval_required_for,
            webhook_url: request.webhook_url,
            max_daily_actions: request.max_daily_actions,
            sandbox_enabled: request.sandbox_enabled,
            neural_mode: request.neural_mode,
            context_window: request.context_window.unwrap_or(128_000),
            preferred_model: request.preferred_model.unwrap_or_else(|| "claude-3-5-sonnet-20241022".to_string()),
            fallback_model: request.fallback_model,
            tools_available: tools.clone(),
            api_key: api_key.clone(),
            session_endpoint: format!("wss://n0va1o.io/sessions/{}", agent_id),
            created_at: now.to_rfc3339(),
            updated_at: now.to_rfc3339(),
        };

        {
            let mut agents = self.agents.write().await;
            agents.insert(agent_id.clone(), agent);
        }

        RegisterAgentResponse {
            agent_id,
            api_key,
            status: "active".to_string(),
            connected_account,
            tools_available: tools,
            session_endpoint: format!("wss://n0va1o.io/sessions/{}", agent_id),
            sandbox_endpoint: if request.sandbox_enabled {
                Some(format!("https://sandbox.n0va1o.io/{}", agent_id))
            } else {
                None
            },
            recipe_endpoint: format!("https://recipes.n0va1o.io/{}", agent_id),
            created_at: now.to_rfc3339(),
            expires_at: expires.to_rfc3339(),
        }
    }

    pub async fn get(&self, agent_id: &str) -> Option<Agent> {
        let agents = self.agents.read().await;
        agents.get(agent_id).cloned()
    }

    pub async fn list(&self) -> Vec<Agent> {
        let agents = self.agents.read().await;
        agents.values().cloned().collect()
    }

    pub async fn update_status(&self, agent_id: &str, status: AgentStatus) -> bool {
        let mut agents = self.agents.write().await;
        if let Some(agent) = agents.get_mut(agent_id) {
            agent.status = status;
            agent.updated_at = chrono::Utc::now().to_rfc3339();
            true
        } else {
            false
        }
    }

    pub async fn toggle_status(&self, agent_id: &str) -> Option<AgentStatus> {
        let mut agents = self.agents.write().await;
        if let Some(agent) = agents.get_mut(agent_id) {
            agent.status = match agent.status {
                AgentStatus::Active => AgentStatus::Paused,
                _ => AgentStatus::Active,
            };
            agent.updated_at = chrono::Utc::now().to_rfc3339();
            Some(agent.status.clone())
        } else {
            None
        }
    }

    pub async fn count(&self) -> usize {
        let agents = self.agents.read().await;
        agents.len()
    }

    fn discover_tools_for_agent(&self, permissions: &HashMap<String, Vec<String>>) -> Vec<String> {
        let mut tools = Vec::new();

        for (category, actions) in permissions {
            for action in actions {
                match category.as_str() {
                    "n0va1o" => {
                        tools.push(format!("n0va1o.{}", action));
                    }
                    "storage" => {
                        tools.push(format!("google_drive.{}", action));
                        tools.push(format!("dropbox.{}", action));
                    }
                    "crm" => {
                        tools.push(format!("salesforce.{}", action));
                        tools.push(format!("hubspot.{}", action));
                    }
                    "chat" => {
                        tools.push(format!("slack.{}", action));
                    }
                    _ => {
                        tools.push(format!("{}.{}", category, action));
                    }
                }
            }
        }

        tools.sort();
        tools.dedup();
        tools
    }
}

fn generate_short_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}

impl Default for AgentRegistry {
    fn default() -> Self {
        Self::new()
    }
}
