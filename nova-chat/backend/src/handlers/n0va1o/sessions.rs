use actix_web::{web, HttpResponse, Result};
use serde::Serialize;
use std::sync::Arc;

use crate::n0va1o::sessions::{SessionManager, CreateSessionRequest};

pub struct SessionAppState {
    pub session_manager: Arc<SessionManager>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/sessions")
            .route("/create", web::post().to(create_session))
            .route("", web::get().to(list_sessions))
            .route("/{id}", web::get().to(get_session))
            .route("/{id}/steps", web::get().to(get_session_steps))
            .route("/{id}/suspend", web::post().to(suspend_session))
            .route("/{id}/resume", web::post().to(resume_session)),
    );
}

async fn create_session(
    state: web::Data<SessionAppState>,
    body: web::Json<CreateSessionRequest>,
) -> Result<HttpResponse> {
    let session = state.session_manager.create(body.into_inner()).await;
    Ok(HttpResponse::Created().json(session))
}

async fn list_sessions(state: web::Data<SessionAppState>) -> Result<HttpResponse> {
    let sessions = state.session_manager.list().await;
    Ok(HttpResponse::Ok().json(sessions))
}

async fn get_session(
    state: web::Data<SessionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let session_id = path.into_inner();
    match state.session_manager.get(&session_id).await {
        Some(session) => Ok(HttpResponse::Ok().json(session)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Session not found"
        }))),
    }
}

async fn get_session_steps(
    state: web::Data<SessionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let session_id = path.into_inner();
    let steps = state.session_manager.get_steps(&session_id).await;
    Ok(HttpResponse::Ok().json(steps))
}

async fn suspend_session(
    state: web::Data<SessionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let session_id = path.into_inner();
    if state.session_manager.suspend_for_approval(&session_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({
            "session_id": session_id,
            "status": "waiting_approval",
        })))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Session not found"
        })))
    }
}

async fn resume_session(
    state: web::Data<SessionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let session_id = path.into_inner();
    if state.session_manager.resume(&session_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({
            "session_id": session_id,
            "status": "running",
        })))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "Session not found"
        })))
    }
}
