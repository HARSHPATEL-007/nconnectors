use actix_web::{web, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::audit::AuditLogger;

pub struct AuditAppState {
    pub audit_logger: Arc<AuditLogger>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/audit")
            .route("", web::get().to(list_audit))
            .route("/pending", web::get().to(list_pending))
            .route("/agent/{id}", web::get().to(list_by_agent)),
    );
}

async fn list_audit(
    state: web::Data<AuditAppState>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let limit = query.get("limit")
        .and_then(|v| v.parse().ok())
        .unwrap_or(50);

    let entries = state.audit_logger.list_entries(limit).await;
    Ok(HttpResponse::Ok().json(entries))
}

async fn list_pending(state: web::Data<AuditAppState>) -> Result<HttpResponse> {
    let entries = state.audit_logger.list_pending_approval().await;
    Ok(HttpResponse::Ok().json(entries))
}

async fn list_by_agent(
    state: web::Data<AuditAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let agent_id = path.into_inner();
    let entries = state.audit_logger.list_by_agent(&agent_id).await;
    Ok(HttpResponse::Ok().json(entries))
}
