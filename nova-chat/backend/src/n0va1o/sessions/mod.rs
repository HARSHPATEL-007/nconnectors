use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Session {
    pub session_id: String,
    pub agent_id: String,
    pub tenant_id: String,
    pub status: SessionStatus,
    pub session_type: SessionType,
    pub tools_injected: Vec<String>,
    pub current_step: u32,
    pub total_steps: u32,
    pub context_tokens_used: u32,
    pub context_tokens_remaining: u32,
    pub sandbox_config: Option<SandboxConfig>,
    pub websocket_url: String,
    pub sandbox_url: Option<String>,
    pub created_at: String,
    pub expires_at: String,
    pub last_activity: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum SessionStatus {
    Running,
    Completed,
    Paused,
    Failed,
    WaitingApproval,
    Suspended,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum SessionType {
    Interactive,
    Automated,
    Recipe,
    Debug,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SandboxConfig {
    pub cpu_quota: u32,
    pub ram_quota: u32,
    pub timeout_seconds: u32,
    pub network_mode: String,
    pub allowed_domains: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateSessionRequest {
    pub agent_id: String,
    pub context: SessionContext,
    pub tools: Vec<String>,
    pub sandbox_config: Option<SandboxConfig>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SessionContext {
    pub user_id: String,
    pub tenant_id: String,
    pub session_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SessionStep {
    pub step_number: u32,
    pub tool_name: String,
    pub action: String,
    pub status: StepStatus,
    pub latency_ms: u64,
    pub result_summary: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum StepStatus {
    Completed,
    Running,
    Failed,
    Pending,
    Blocked,
}

pub struct SessionManager {
    sessions: Arc<RwLock<HashMap<String, Session>>>,
    session_steps: Arc<RwLock<HashMap<String, Vec<SessionStep>>>>,
}

impl SessionManager {
    pub fn new() -> Self {
        Self {
            sessions: Arc::new(RwLock::new(HashMap::new())),
            session_steps: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub async fn create(&self, request: CreateSessionRequest) -> Session {
        let session_id = format!("sess_{}", generate_id());
        let now = chrono::Utc::now();
        let expires = now + chrono::Duration::hours(1);

        let session = Session {
            session_id: session_id.clone(),
            agent_id: request.agent_id.clone(),
            tenant_id: request.context.tenant_id.clone(),
            status: SessionStatus::Running,
            session_type: match request.context.session_type.as_str() {
                "automated" => SessionType::Automated,
                "recipe" => SessionType::Recipe,
                "debug" => SessionType::Debug,
                _ => SessionType::Interactive,
            },
            tools_injected: request.tools.clone(),
            current_step: 0,
            total_steps: 0,
            context_tokens_used: 2450,
            context_tokens_remaining: 125550,
            sandbox_config: request.sandbox_config,
            websocket_url: format!("wss://n0va1o.io/sessions/{}", session_id),
            sandbox_url: Some(format!("https://sandbox.n0va1o.io/sessions/{}", session_id)),
            created_at: now.to_rfc3339(),
            expires_at: expires.to_rfc3339(),
            last_activity: now.to_rfc3339(),
        };

        {
            let mut sessions = self.sessions.write().await;
            sessions.insert(session_id.clone(), session.clone());
        }

        {
            let mut steps = self.session_steps.write().await;
            steps.insert(session_id.clone(), Vec::new());
        }

        session
    }

    pub async fn get(&self, session_id: &str) -> Option<Session> {
        let sessions = self.sessions.read().await;
        sessions.get(session_id).cloned()
    }

    pub async fn list(&self) -> Vec<Session> {
        let sessions = self.sessions.read().await;
        sessions.values().cloned().collect()
    }

    pub async fn list_by_agent(&self, agent_id: &str) -> Vec<Session> {
        let sessions = self.sessions.read().await;
        sessions
            .values()
            .filter(|s| s.agent_id == agent_id)
            .cloned()
            .collect()
    }

    pub async fn add_step(&self, session_id: &str, step: SessionStep) {
        let mut steps = self.session_steps.write().await;
        if let Some(session_steps) = steps.get_mut(session_id) {
            session_steps.push(step);
        }

        let mut sessions = self.sessions.write().await;
        if let Some(session) = sessions.get_mut(session_id) {
            session.current_step = session.current_step + 1;
            session.total_steps = session.total_steps + 1;
            session.last_activity = chrono::Utc::now().to_rfc3339();
        }
    }

    pub async fn get_steps(&self, session_id: &str) -> Vec<SessionStep> {
        let steps = self.session_steps.read().await;
        steps.get(session_id).cloned().unwrap_or_default()
    }

    pub async fn update_status(&self, session_id: &str, status: SessionStatus) -> bool {
        let mut sessions = self.sessions.write().await;
        if let Some(session) = sessions.get_mut(session_id) {
            session.status = status;
            session.last_activity = chrono::Utc::now().to_rfc3339();
            true
        } else {
            false
        }
    }

    pub async fn suspend_for_approval(&self, session_id: &str) -> bool {
        self.update_status(session_id, SessionStatus::WaitingApproval).await
    }

    pub async fn resume(&self, session_id: &str) -> bool {
        self.update_status(session_id, SessionStatus::Running).await
    }

    pub async fn count(&self) -> usize {
        let sessions = self.sessions.read().await;
        sessions.len()
    }

    pub async fn active_count(&self) -> usize {
        let sessions = self.sessions.read().await;
        sessions
            .values()
            .filter(|s| matches!(s.status, SessionStatus::Running))
            .count()
    }
}

fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}

impl Default for SessionManager {
    fn default() -> Self {
        Self::new()
    }
}
