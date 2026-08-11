use serde::{Deserialize, Serialize};
use std::sync::Arc;
use tokio::sync::RwLock;
use chrono::Utc;

use super::mcp::tools::ToolResult;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct AuditEntry {
    pub audit_id: String,
    pub timestamp: String,
    pub tenant_id: String,
    pub agent_id: Option<String>,
    pub agent_name: Option<String>,
    pub session_id: Option<String>,
    pub tool_name: String,
    pub tool_parameters: Option<serde_json::Value>,
    pub intent_classification: Option<String>,
    pub confidence: Option<f64>,
    pub reasoning_chain: Vec<String>,
    pub status: AuditStatus,
    pub result_summary: String,
    pub latency_ms: u64,
    pub tokens_consumed: Option<u64>,
    pub approval_required: bool,
    pub approved_by: Option<String>,
    pub risk_score: f64,
    pub ip_address: Option<String>,
    pub mfa_verified: bool,
    pub hash: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum AuditStatus {
    Success,
    Failed,
    Blocked,
    PendingApproval,
    RateLimited,
    AuthExpired,
}

pub struct AuditLogger {
    entries: Arc<RwLock<Vec<AuditEntry>>>,
    max_entries: usize,
}

impl AuditLogger {
    pub fn new(max_entries: usize) -> Self {
        Self {
            entries: Arc::new(RwLock::new(Vec::new())),
            max_entries,
        }
    }

    pub async fn log_tool_call(&self, tool_name: &str, result: &ToolResult) {
        let entry = AuditEntry {
            audit_id: format!("audit_{}", generate_id()),
            timestamp: Utc::now().to_rfc3339(),
            tenant_id: "default".to_string(),
            agent_id: None,
            agent_name: None,
            session_id: None,
            tool_name: tool_name.to_string(),
            tool_parameters: None,
            intent_classification: None,
            confidence: None,
            reasoning_chain: vec![],
            status: if result.success {
                AuditStatus::Success
            } else {
                AuditStatus::Failed
            },
            result_summary: result.error.clone().unwrap_or_else(|| "Completed".to_string()),
            latency_ms: result.latency_ms,
            tokens_consumed: None,
            approval_required: result.risk_score > 0.7,
            approved_by: None,
            risk_score: result.risk_score,
            ip_address: None,
            mfa_verified: true,
            hash: compute_hash(tool_name, result),
        };

        let mut entries = self.entries.write().await;
        entries.push(entry);

        if entries.len() > self.max_entries {
            let excess = entries.len() - self.max_entries;
            entries.drain(0..excess);
        }
    }

    pub async fn log_agent_action(
        &self,
        agent_id: &str,
        agent_name: &str,
        tool_name: &str,
        parameters: serde_json::Value,
        result: &ToolResult,
        risk_score: f64,
    ) {
        let entry = AuditEntry {
            audit_id: format!("audit_{}", generate_id()),
            timestamp: Utc::now().to_rfc3339(),
            tenant_id: "default".to_string(),
            agent_id: Some(agent_id.to_string()),
            agent_name: Some(agent_name.to_string()),
            session_id: None,
            tool_name: tool_name.to_string(),
            tool_parameters: Some(parameters),
            intent_classification: None,
            confidence: None,
            reasoning_chain: vec![],
            status: if result.success {
                AuditStatus::Success
            } else {
                AuditStatus::Failed
            },
            result_summary: result.error.clone().unwrap_or_else(|| "Completed".to_string()),
            latency_ms: result.latency_ms,
            tokens_consumed: None,
            approval_required: risk_score > 0.7,
            approved_by: None,
            risk_score,
            ip_address: None,
            mfa_verified: true,
            hash: compute_hash(tool_name, result),
        };

        let mut entries = self.entries.write().await;
        entries.push(entry);

        if entries.len() > self.max_entries {
            let excess = entries.len() - self.max_entries;
            entries.drain(0..excess);
        }
    }

    pub async fn list_entries(&self, limit: usize) -> Vec<AuditEntry> {
        let entries = self.entries.read().await;
        entries.iter().rev().take(limit).cloned().collect()
    }

    pub async fn list_by_agent(&self, agent_id: &str) -> Vec<AuditEntry> {
        let entries = self.entries.read().await;
        entries
            .iter()
            .filter(|e| e.agent_id.as_deref() == Some(agent_id))
            .cloned()
            .collect()
    }

    pub async fn list_pending_approval(&self) -> Vec<AuditEntry> {
        let entries = self.entries.read().await;
        entries
            .iter()
            .filter(|e| e.approval_required && e.approved_by.is_none())
            .cloned()
            .collect()
    }

    pub async fn count(&self) -> usize {
        let entries = self.entries.read().await;
        entries.len()
    }
}

fn generate_id() -> String {
    use std::sync::atomic::{AtomicU64, Ordering};
    static COUNTER: AtomicU64 = AtomicU64::new(0);
    let count = COUNTER.fetch_add(1, Ordering::SeqCst);
    format!("{:012}", count)
}

fn compute_hash(tool_name: &str, result: &ToolResult) -> String {
    use std::collections::hash_map::DefaultHasher;
    use std::hash::{Hash, Hasher};

    let mut hasher = DefaultHasher::new();
    tool_name.hash(&mut hasher);
    result.success.hash(&mut hasher);
    result.latency_ms.hash(&mut hasher);
    format!("{:016x}", hasher.finish())
}
