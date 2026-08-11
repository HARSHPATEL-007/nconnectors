use actix_web::{web, HttpResponse, Result};
use serde::Serialize;
use std::sync::Arc;

use crate::n0va1o::agents::AgentRegistry;
use crate::n0va1o::sessions::SessionManager;
use crate::n0va1o::audit::AuditLogger;
use crate::n0va1o::mcp::tools::ToolRegistry;

pub struct MetricsAppState {
    pub agent_registry: Arc<AgentRegistry>,
    pub session_manager: Arc<SessionManager>,
    pub audit_logger: Arc<AuditLogger>,
    pub tool_registry: Arc<ToolRegistry>,
}

#[derive(Debug, Serialize)]
pub struct DashboardMetrics {
    pub agents: MetricsAgents,
    pub sessions: MetricsSessions,
    pub connections: MetricsConnections,
    pub audit_entries: MetricsAudit,
    pub escalations: MetricsEscalations,
}

#[derive(Debug, Serialize)]
pub struct MetricsAgents {
    pub total: usize,
    pub active: usize,
    pub paused: usize,
}

#[derive(Debug, Serialize)]
pub struct MetricsSessions {
    pub total: usize,
    pub active: usize,
    pub waiting_approval: usize,
}

#[derive(Debug, Serialize)]
pub struct MetricsConnections {
    pub total: usize,
    pub active: usize,
    pub providers: usize,
}

#[derive(Debug, Serialize)]
pub struct MetricsAudit {
    pub total: usize,
    pub pending_approval: usize,
    pub risk_score_avg: f64,
}

#[derive(Debug, Serialize)]
pub struct MetricsEscalations {
    pub pending: usize,
    pub total: usize,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/metrics")
            .route("/dashboard", web::get().to(dashboard)),
    );
}

async fn dashboard(state: web::Data<MetricsAppState>) -> Result<HttpResponse> {
    let agents = state.agent_registry.list().await;
    let sessions = state.session_manager.list().await;
    let audit_count = state.audit_logger.count().await;
    let tool_count = state.tool_registry.count().await;

    let active_agents = agents.iter()
        .filter(|a| matches!(a.status, crate::n0va1o::agents::AgentStatus::Active))
        .count();

    let active_sessions = sessions.iter()
        .filter(|s| matches!(s.status, crate::n0va1o::sessions::SessionStatus::Running))
        .count();

    let waiting_sessions = sessions.iter()
        .filter(|s| matches!(s.status, crate::n0va1o::sessions::SessionStatus::WaitingApproval))
        .count();

    let metrics = DashboardMetrics {
        agents: MetricsAgents {
            total: agents.len(),
            active: active_agents,
            paused: agents.len() - active_agents,
        },
        sessions: MetricsSessions {
            total: sessions.len(),
            active: active_sessions,
            waiting_approval: waiting_sessions,
        },
        connections: MetricsConnections {
            total: tool_count,
            active: tool_count,
            providers: 25,
        },
        audit_entries: MetricsAudit {
            total: audit_count,
            pending_approval: 0,
            risk_score_avg: 0.15,
        },
        escalations: MetricsEscalations {
            pending: waiting_sessions,
            total: waiting_sessions,
        },
    };

    Ok(HttpResponse::Ok().json(metrics))
}
