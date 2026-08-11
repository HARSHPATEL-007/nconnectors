use std::sync::Arc;
use tokio::sync::RwLock;

use super::protocol::*;
use super::tools::{ToolRegistry, ToolResult};
use crate::n0va1o::audit::AuditLogger;
use crate::n0va1o::schema::SchemaModifier;

pub struct McpServer {
    tool_registry: Arc<ToolRegistry>,
    audit_logger: Arc<AuditLogger>,
    schema_modifier: Arc<SchemaModifier>,
    sessions: Arc<RwLock<Vec<McpSession>>>,
}

#[derive(Debug, Clone)]
pub struct McpSession {
    pub session_id: String,
    pub agent_id: Option<String>,
    pub tenant_id: String,
    pub initialized: bool,
    pub created_at: String,
}

impl McpServer {
    pub fn new(
        tool_registry: Arc<ToolRegistry>,
        audit_logger: Arc<AuditLogger>,
        schema_modifier: Arc<SchemaModifier>,
    ) -> Self {
        Self {
            tool_registry,
            audit_logger,
            schema_modifier,
            sessions: Arc::new(RwLock::new(Vec::new())),
        }
    }

    pub async fn handle_request(&self, request: JsonRpcRequest) -> JsonRpcResponse {
        match request.method.as_str() {
            "initialize" => self.handle_initialize(request).await,
            "initialized" => JsonRpcResponse::success(request.id, serde_json::json!({})),
            "tools/list" => self.handle_tools_list(request).await,
            "tools/call" => self.handle_tools_call(request).await,
            "tools/discover" => self.handle_tools_discover(request).await,
            "ping" => JsonRpcResponse::success(request.id, serde_json::json!({})),
            _ => JsonRpcResponse::error(
                request.id,
                -32601,
                &format!("Method not found: {}", request.method),
            ),
        }
    }

    async fn handle_initialize(&self, request: JsonRpcRequest) -> JsonRpcResponse {
        let response = initialize_response();
        match serde_json::to_value(&response) {
            Ok(val) => JsonRpcResponse::success(request.id, val),
            Err(e) => JsonRpcResponse::error(request.id, -32603, &format!("Internal error: {}", e)),
        }
    }

    async fn handle_tools_list(&self, request: JsonRpcRequest) -> JsonRpcResponse {
        let tools = self.tool_registry.list().await;
        let response = ToolsListResponse {
            tools,
            next_cursor: None,
        };
        match serde_json::to_value(&response) {
            Ok(val) => JsonRpcResponse::success(request.id, val),
            Err(e) => JsonRpcResponse::error(request.id, -32603, &format!("Internal error: {}", e)),
        }
    }

    async fn handle_tools_call(&self, request: JsonRpcRequest) -> JsonRpcResponse {
        let params = match request.params {
            Some(p) => p,
            None => {
                return JsonRpcResponse::error(request.id, -32602, "Missing parameters");
            }
        };

        let call_req: ToolCallRequest = match serde_json::from_value(params) {
            Ok(req) => req,
            Err(e) => {
                return JsonRpcResponse::error(request.id, -32602, &format!("Invalid parameters: {}", e));
            }
        };

        let arguments = call_req.arguments.unwrap_or(serde_json::Value::Object(serde_json::Map::new()));

        let result = self.tool_registry.execute(&call_req.name, arguments).await;

        self.audit_logger.log_tool_call(
            &call_req.name,
            &result,
        );

        let response = ToolCallResponse {
            content: result.content,
            is_error: if result.success { None } else { Some(true) },
        };

        match serde_json::to_value(&response) {
            Ok(val) => JsonRpcResponse::success(request.id, val),
            Err(e) => JsonRpcResponse::error(request.id, -32603, &format!("Internal error: {}", e)),
        }
    }

    async fn handle_tools_discover(&self, request: JsonRpcRequest) -> JsonRpcResponse {
        let params = match request.params {
            Some(p) => p,
            None => {
                return JsonRpcResponse::error(request.id, -32602, "Missing parameters");
            }
        };

        let query = params.get("query")
            .and_then(|v| v.as_str())
            .unwrap_or("");

        let max_tools = params.get("max_tools")
            .and_then(|v| v.as_u64())
            .unwrap_or(5) as usize;

        let results = self.tool_registry.search_by_intent(query, max_tools).await;

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

        let workflow = if tools.is_empty() {
            "No matching tools found".to_string()
        } else {
            let names: Vec<&str> = tools.iter()
                .filter_map(|t| t.get("name").and_then(|n| n.as_str()))
                .collect();
            if names.len() <= 1 {
                names.first().unwrap_or(&"search").to_string()
            } else {
                format!("{} → execute", names.join(" → "))
            }
        };

        let response = serde_json::json!({
            "intent": query,
            "tools": tools,
            "suggested_workflow": workflow,
        });

        JsonRpcResponse::success(request.id, response)
    }

    pub async fn create_session(&self, tenant_id: &str) -> McpSession {
        let session = McpSession {
            session_id: format!("sess_{}", uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()),
            agent_id: None,
            tenant_id: tenant_id.to_string(),
            initialized: false,
            created_at: chrono::Utc::now().to_rfc3339(),
        };

        let mut sessions = self.sessions.write().await;
        sessions.push(session.clone());
        session
    }
}
