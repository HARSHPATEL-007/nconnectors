use actix_web::{web, HttpResponse, Result};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Connection {
    pub connection_id: String,
    pub tenant_id: String,
    pub user_id: String,
    pub provider: String,
    pub auth_type: String,
    pub status: String,
    pub scopes: Vec<String>,
    pub created_at: String,
    pub last_used: String,
    pub health_score: f64,
}

pub struct ConnectionAppState {
    pub connections: Arc<RwLock<HashMap<String, Connection>>>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/connections")
            .route("", web::get().to(list_connections))
            .route("/{id}", web::get().to(get_connection))
            .route("/{id}/disconnect", web::post().to(disconnect)),
    );
}

async fn list_connections(state: web::Data<ConnectionAppState>) -> Result<HttpResponse> {
    let conns = state.connections.read().await;
    let connections: Vec<Connection> = conns.values().cloned().collect();
    Ok(HttpResponse::Ok().json(connections))
}

async fn get_connection(
    state: web::Data<ConnectionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let conn_id = path.into_inner();
    let conns = state.connections.read().await;
    match conns.get(&conn_id) {
        Some(conn) => Ok(HttpResponse::Ok().json(conn)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Not found"}))),
    }
}

async fn disconnect(
    state: web::Data<ConnectionAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let conn_id = path.into_inner();
    let mut conns = state.connections.write().await;
    if let Some(conn) = conns.get_mut(&conn_id) {
        conn.status = "disconnected".to_string();
        Ok(HttpResponse::Ok().json(conn))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Not found"})))
    }
}

