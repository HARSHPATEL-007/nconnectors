use actix_web::{web, HttpRequest, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::mcp::server::McpServer;

pub struct McpTransportState {
    pub mcp_server: Arc<McpServer>,
}

pub fn config_mcp(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/mcp")
            .route("/sse", web::get().to(sse_handler))
            .route("/message", web::post().to(message_handler))
            .route("/ws", web::get().to(ws_handler)),
    );
}

async fn sse_handler(state: web::Data<McpTransportState>) -> Result<HttpResponse> {
    let session = state.mcp_server.create_session("default").await;

    let sse_body = format!(
        "event: endpoint\ndata: /v1/n0va1o/mcp/message?session_id={}\n\n",
        session.session_id
    );

    Ok(HttpResponse::Ok()
        .content_type("text/event-stream")
        .insert_header(("Cache-Control", "no-cache"))
        .insert_header(("Connection", "keep-alive"))
        .streaming(futures::stream::once(async move {
            Ok::<_, actix_web::Error>(web::Bytes::from(sse_body))
        })))
}

async fn message_handler(
    state: web::Data<McpTransportState>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let request: crate::n0va1o::mcp::protocol::JsonRpcRequest =
        match serde_json::from_value(body.into_inner()) {
            Ok(req) => req,
            Err(e) => {
                return Ok(HttpResponse::BadRequest().json(crate::n0va1o::mcp::protocol::JsonRpcResponse::error(
                    None,
                    -32700,
                    &format!("Parse error: {}", e),
                )));
            }
        };

    let response = state.mcp_server.handle_request(request).await;
    Ok(HttpResponse::Ok().json(response))
}

async fn ws_handler(
    req: HttpRequest,
    stream: web::Payload,
    _state: web::Data<McpTransportState>,
) -> Result<HttpResponse> {
    let (response, _session, _stream) = actix_ws::handle(&req, stream)?;
    Ok(response)
}
