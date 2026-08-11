use actix_web::{web, HttpResponse, Result};
use std::collections::HashMap;
use std::sync::Arc;

use crate::n0va1o::mcp::tools::ToolRegistry;

pub struct ToolsAppState {
    pub tool_registry: Arc<ToolRegistry>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/tools")
            .route("", web::get().to(list_tools))
            .route("/discover", web::post().to(discover_tools))
            .route("/call", web::post().to(call_tool))
            .route("/provider/{provider}", web::get().to(list_by_provider)),
    );
}

async fn list_tools(state: web::Data<ToolsAppState>) -> Result<HttpResponse> {
    let tools = state.tool_registry.list().await;
    Ok(HttpResponse::Ok().json(tools))
}

async fn discover_tools(
    state: web::Data<ToolsAppState>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let query = body.get("query")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    let max_tools = body.get("max_tools")
        .and_then(|v| v.as_u64())
        .unwrap_or(5) as usize;

    let results = state.tool_registry.search_by_intent(query, max_tools).await;

    let tools: Vec<serde_json::Value> = results
        .into_iter()
        .map(|(schema, relevance)| {
            serde_json::json!({
                "name": schema.name,
                "description": schema.description,
                "relevance": relevance,
                "input_schema": schema.input_schema,
            })
        })
        .collect();

    Ok(HttpResponse::Ok().json(serde_json::json!({
        "intent": query,
        "tools": tools,
        "count": tools.len(),
    })))
}

async fn call_tool(
    state: web::Data<ToolsAppState>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let tool_name = body.get("name")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    let arguments = body.get("arguments")
        .cloned()
        .unwrap_or_else(|| serde_json::Value::Object(serde_json::Map::new()));

    let result = state.tool_registry.execute(tool_name, arguments).await;

    if result.success {
        Ok(HttpResponse::Ok().json(result))
    } else {
        Ok(HttpResponse::BadRequest().json(result))
    }
}

async fn list_by_provider(
    state: web::Data<ToolsAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let provider = path.into_inner();
    let tools = state.tool_registry.list_by_provider(&provider).await;
    Ok(HttpResponse::Ok().json(tools))
}
