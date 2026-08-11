use actix_web::{web, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::sandbox::{SandboxEngine, SandboxConfig};

pub struct SandboxAppState {
    pub sandbox_engine: Arc<SandboxEngine>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/sandbox")
            .route("/create", web::post().to(create_sandbox))
            .route("/{id}/execute", web::post().to(execute_code))
            .route("/{id}/status", web::get().to(get_status))
            .route("/{id}/destroy", web::post().to(destroy_sandbox))
            .route("/{id}/kill", web::post().to(kill_sandbox))
            .route("/active", web::get().to(list_active)),
    );
}

async fn create_sandbox(state: web::Data<SandboxAppState>) -> Result<HttpResponse> {
    let id = state.sandbox_engine.create().await;
    Ok(HttpResponse::Created().json(serde_json::json!({
        "sandbox_id": id,
        "status": "created",
    })))
}

async fn execute_code(
    state: web::Data<SandboxAppState>,
    path: web::Path<String>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let sandbox_id = path.into_inner();
    let code = body.get("code").and_then(|v| v.as_str()).unwrap_or("");
    let result = state.sandbox_engine.execute(&sandbox_id, code).await;
    Ok(HttpResponse::Ok().json(result))
}

async fn get_status(
    state: web::Data<SandboxAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let sandbox_id = path.into_inner();
    match state.sandbox_engine.get_status(&sandbox_id).await {
        Some(status) => Ok(HttpResponse::Ok().json(serde_json::json!({
            "sandbox_id": sandbox_id,
            "status": status,
        }))),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Sandbox not found",
        }))),
    }
}

async fn destroy_sandbox(
    state: web::Data<SandboxAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let sandbox_id = path.into_inner();
    if state.sandbox_engine.destroy(&sandbox_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({
            "sandbox_id": sandbox_id,
            "status": "destroyed",
        })))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Sandbox not found",
        })))
    }
}

async fn kill_sandbox(
    state: web::Data<SandboxAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let sandbox_id = path.into_inner();
    if state.sandbox_engine.kill(&sandbox_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({
            "sandbox_id": sandbox_id,
            "status": "killed",
        })))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Sandbox not found",
        })))
    }
}

async fn list_active(state: web::Data<SandboxAppState>) -> Result<HttpResponse> {
    let active = state.sandbox_engine.list_active().await;
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "active_sandboxes": active,
        "count": active.len(),
    })))
}
