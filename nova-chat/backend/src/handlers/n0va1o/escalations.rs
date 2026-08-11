use actix_web::{web, HttpResponse, Result};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EscalationCase {
    pub escalation_id: String,
    pub agent_id: String,
    pub agent_name: String,
    pub action: String,
    pub tool_name: String,
    pub risk_score: f64,
    pub status: String,
    pub reasoning: Vec<String>,
    pub data_accessed: Vec<String>,
    pub parameters: serde_json::Value,
    pub created_at: String,
    pub timeout_at: String,
}

pub struct EscalationAppState {
    pub escalations: Arc<RwLock<HashMap<String, EscalationCase>>>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/escalations")
            .route("", web::get().to(list_escalations))
            .route("/pending", web::get().to(list_pending))
            .route("/{id}/approve", web::post().to(approve))
            .route("/{id}/reject", web::post().to(reject))
            .route("/{id}/modify", web::post().to(modify)),
    );
}

async fn list_escalations(state: web::Data<EscalationAppState>) -> Result<HttpResponse> {
    let esc = state.escalations.read().await;
    let cases: Vec<EscalationCase> = esc.values().cloned().collect();
    Ok(HttpResponse::Ok().json(cases))
}

async fn list_pending(state: web::Data<EscalationAppState>) -> Result<HttpResponse> {
    let esc = state.escalations.read().await;
    let cases: Vec<EscalationCase> = esc
        .values()
        .filter(|e| e.status == "pending")
        .cloned()
        .collect();
    Ok(HttpResponse::Ok().json(cases))
}

async fn approve(
    state: web::Data<EscalationAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let id = path.into_inner();
    let mut esc = state.escalations.write().await;
    if let Some(case) = esc.get_mut(&id) {
        case.status = "approved".to_string();
        Ok(HttpResponse::Ok().json(case))
    } else {
        Ok(HttpResponse::NotFound().finish())
    }
}

async fn reject(
    state: web::Data<EscalationAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let id = path.into_inner();
    let mut esc = state.escalations.write().await;
    if let Some(case) = esc.get_mut(&id) {
        case.status = "rejected".to_string();
        Ok(HttpResponse::Ok().json(case))
    } else {
        Ok(HttpResponse::NotFound().finish())
    }
}

async fn modify(
    state: web::Data<EscalationAppState>,
    path: web::Path<String>,
    _body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let id = path.into_inner();
    let mut esc = state.escalations.write().await;
    if let Some(case) = esc.get_mut(&id) {
        case.status = "modified".to_string();
        Ok(HttpResponse::Ok().json(case))
    } else {
        Ok(HttpResponse::NotFound().finish())
    }
}
