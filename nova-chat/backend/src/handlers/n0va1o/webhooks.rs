use actix_web::{web, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::webhooks::WebhookManager;

pub struct WebhooksAppState {
    pub webhook_manager: Arc<WebhookManager>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/webhooks")
            .route("/triggers", web::post().to(register_trigger))
            .route("/triggers", web::get().to(list_triggers))
            .route("/events", web::post().to(ingest_event))
            .route("/events", web::get().to(event_log))
            .route("/triggers/{id}/disable", web::post().to(disable_trigger)),
    );
}

async fn register_trigger(
    state: web::Data<WebhooksAppState>,
    body: web::Json<crate::n0va1o::webhooks::WebhookTrigger>,
) -> Result<HttpResponse> {
    state.webhook_manager.register_trigger(body.into_inner()).await;
    Ok(HttpResponse::Created().json(serde_json::json!({"status": "registered"})))
}

async fn list_triggers(state: web::Data<WebhooksAppState>) -> Result<HttpResponse> {
    let triggers = state.webhook_manager.list_triggers("default").await;
    Ok(HttpResponse::Ok().json(triggers))
}

async fn ingest_event(
    state: web::Data<WebhooksAppState>,
    body: web::Json<crate::n0va1o::webhooks::WebhookEvent>,
) -> Result<HttpResponse> {
    let agents = state.webhook_manager.ingest_event(body.into_inner()).await;
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "triggered_agents": agents,
    })))
}

async fn event_log(state: web::Data<WebhooksAppState>) -> Result<HttpResponse> {
    let events = state.webhook_manager.get_event_log(50).await;
    Ok(HttpResponse::Ok().json(events))
}

async fn disable_trigger(
    state: web::Data<WebhooksAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let trigger_id = path.into_inner();
    if state.webhook_manager.disable_trigger(&trigger_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({"disabled": true})))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Not found"})))
    }
}
