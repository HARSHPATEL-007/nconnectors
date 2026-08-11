use actix_web::{web, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::plugins::PluginSystem;

pub struct PluginsAppState {
    pub plugin_system: Arc<PluginSystem>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/plugins")
            .route("/slots", web::get().to(list_slots))
            .route("/slots/{id}", web::get().to(get_slot))
            .route("/slots/{id}/toggle", web::post().to(toggle_slot)),
    );
}

async fn list_slots(state: web::Data<PluginsAppState>) -> Result<HttpResponse> {
    let slots = state.plugin_system.list_slots().await;
    Ok(HttpResponse::Ok().json(slots))
}

async fn get_slot(
    state: web::Data<PluginsAppState>,
    path: web::Path<u8>,
) -> Result<HttpResponse> {
    let slot_id = path.into_inner();
    match state.plugin_system.get_slot(slot_id).await {
        Some(slot) => Ok(HttpResponse::Ok().json(slot)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Slot not found"}))),
    }
}

async fn toggle_slot(
    state: web::Data<PluginsAppState>,
    path: web::Path<u8>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let slot_id = path.into_inner();
    let enabled = body.get("enabled").and_then(|v| v.as_bool()).unwrap_or(true);
    if state.plugin_system.toggle_slot(slot_id, enabled).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({"toggled": true, "enabled": enabled})))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Slot not found"})))
    }
}
