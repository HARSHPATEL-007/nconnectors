use actix_web::{web, HttpResponse, Result};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

use crate::n0va1o::agents::{AgentRegistry, RegisterAgentRequest, AgentStatus};

pub struct AppState {
    pub agent_registry: Arc<AgentRegistry>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/agents")
            .route("/register", web::post().to(register_agent))
            .route("", web::get().to(list_agents))
            .route("/{id}", web::get().to(get_agent))
            .route("/{id}/toggle", web::post().to(toggle_agent))
            .route("/{id}/status", web::put().to(update_agent_status)),
    );
}

async fn register_agent(
    state: web::Data<AppState>,
    body: web::Json<RegisterAgentRequest>,
) -> Result<HttpResponse> {
    let response = state.agent_registry.register(body.into_inner()).await;
    Ok(HttpResponse::Created().json(response))
}

async fn list_agents(state: web::Data<AppState>) -> Result<HttpResponse> {
    let agents = state.agent_registry.list().await;
    Ok(HttpResponse::Ok().json(agents))
}

async fn get_agent(
    state: web::Data<AppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let agent_id = path.into_inner();
    match state.agent_registry.get(&agent_id).await {
        Some(agent) => Ok(HttpResponse::Ok().json(agent)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Agent not found"
        }))),
    }
}

async fn toggle_agent(
    state: web::Data<AppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let agent_id = path.into_inner();
    match state.agent_registry.toggle_status(&agent_id).await {
        Some(status) => Ok(HttpResponse::Ok().json(serde_json::json!({
            "agent_id": agent_id,
            "status": status,
        }))),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Agent not found"
        }))),
    }
}

async fn update_agent_status(
    state: web::Data<AppState>,
    path: web::Path<String>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let agent_id = path.into_inner();
    let status = body.get("status").and_then(|s| s.as_str()).unwrap_or("active");

    let new_status = match status {
        "active" => AgentStatus::Active,
        "paused" => AgentStatus::Paused,
        "degraded" => AgentStatus::Degraded,
        _ => AgentStatus::Active,
    };

    if state.agent_registry.update_status(&agent_id, new_status).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({
            "agent_id": agent_id,
            "status": status,
        })))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Agent not found"
        })))
    }
}
