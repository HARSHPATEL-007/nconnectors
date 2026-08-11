mod config;
mod db;
mod handlers;
mod middleware;
mod models;
mod n0va1o;
mod utils;
mod ws;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use log::info;
use std::collections::HashMap;
use std::sync::Arc;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    let config = config::Config::from_env();
    info!("Starting N0VA1O Gateway on {}:{}", config.server_host, config.server_port);

    let db = db::init(&config.database_url).await.expect("Failed to connect to MongoDB");
    info!("Connected to MongoDB");

    let redis = redis::Client::open(config.redis_url.clone()).expect("Failed to connect to Redis");
    info!("Connected to Redis");

    let ws_state = ws::WsState::new(redis.clone(), db.clone());

    // Initialize N0VA1O Core Components
    let tool_registry = Arc::new(n0va1o::mcp::tools::ToolRegistry::new());
    let audit_logger = Arc::new(n0va1o::audit::AuditLogger::new(10_000));
    let schema_modifier = Arc::new(n0va1o::schema::SchemaModifier::new());
    let agent_registry = Arc::new(n0va1o::agents::AgentRegistry::new());
    let session_manager = Arc::new(n0va1o::sessions::SessionManager::new());

    // Register built-in tools
    register_builtin_tools(&tool_registry).await;
    info!("N0VA1O Tool Registry initialized with {} tools", tool_registry.count().await);

    // Initialize MCP Server
    let mcp_server = Arc::new(n0va1o::mcp::server::McpServer::new(
        tool_registry.clone(),
        audit_logger.clone(),
        schema_modifier.clone(),
    ));

    // Initialize Sandbox Engine
    let sandbox_config = n0va1o::sandbox::engine::SandboxConfig::default();
    let sandbox_engine = Arc::new(n0va1o::sandbox::engine::SandboxEngine::new(sandbox_config));

    // Initialize Recipe Compiler & Engine
    let recipe_compiler = Arc::new(n0va1o::recipes::compiler::RecipeCompiler::new());
    let recipe_engine = Arc::new(n0va1o::recipes::engine::RecipeEngine::new());

    // Initialize Webhook Manager
    let webhook_manager = Arc::new(n0va1o::webhooks::WebhookManager::new());

    // Initialize Plugin System (8-slot self-improving architecture)
    let plugin_system = Arc::new(n0va1o::plugins::PluginSystem::new());

    // Shared state
    let escalations = Arc::new(tokio::sync::RwLock::new(HashMap::<String, handlers::n0va1o::escalations::EscalationCase>::new()));
    let connections = Arc::new(tokio::sync::RwLock::new(HashMap::<String, handlers::n0va1o::connections::Connection>::new()));

    info!("N0VA1O Integration Gateway ready");
    info!("  MCP SSE:  GET  /v1/n0va1o/mcp/sse");
    info!("  MCP Msg:  POST /v1/n0va1o/mcp/message");
    info!("  Sandbox:  POST /v1/n0va1o/sandbox/create");
    info!("  Recipes:  POST /v1/n0va1o/recipes/compile");
    info!("  Webhooks: POST /v1/n0va1o/webhooks/events");
    info!("  Plugins:  GET  /v1/n0va1o/plugins/slots");
    info!("  REST API: /v1/n0va1o/*");

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .app_data(web::Data::new(db.clone()))
            .app_data(web::Data::new(redis.clone()))
            .app_data(web::Data::new(ws_state.clone()))
            .app_data(web::Data::new(config.clone()))
            .app_data(web::Data::new(handlers::n0va1o::agents::AppState {
                agent_registry: agent_registry.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::sessions::SessionAppState {
                session_manager: session_manager.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::audit::AuditAppState {
                audit_logger: audit_logger.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::tools::ToolsAppState {
                tool_registry: tool_registry.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::connections::ConnectionAppState {
                connections: connections.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::escalations::EscalationAppState {
                escalations: escalations.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::metrics::MetricsAppState {
                agent_registry: agent_registry.clone(),
                session_manager: session_manager.clone(),
                audit_logger: audit_logger.clone(),
                tool_registry: tool_registry.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::mcp_transport::McpTransportState {
                mcp_server: mcp_server.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::sandbox::SandboxAppState {
                sandbox_engine: sandbox_engine.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::recipes::RecipesAppState {
                compiler: recipe_compiler.clone(),
                engine: recipe_engine.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::webhooks::WebhooksAppState {
                webhook_manager: webhook_manager.clone(),
            }))
            .app_data(web::Data::new(handlers::n0va1o::plugins::PluginsAppState {
                plugin_system: plugin_system.clone(),
            }))
            .configure(handlers::config_routes)
            .configure(ws::config_ws)
    })
    .bind(format!("{}:{}", config.server_host, config.server_port))?
    .run()
    .await
}

async fn register_builtin_tools(registry: &n0va1o::mcp::tools::ToolRegistry) {
    use n0va1o::mcp::tools::{ToolDefinition, ToolMetadata, RiskLevel};
    use n0va1o::mcp::protocol::ToolSchema;
    use std::sync::Arc;

    let builtin_tools: Vec<ToolDefinition> = vec![
        ToolDefinition {
            schema: ToolSchema {
                name: "n0va1o.connections.list".to_string(),
                description: Some("List all active platform connections".to_string()),
                input_schema: serde_json::json!({
                    "type": "object",
                    "properties": {
                        "tenant_id": { "type": "string" },
                        "provider": { "type": "string" },
                        "status": { "type": "string", "enum": ["connected", "pending", "disconnected"] }
                    }
                }),
            },
            handler: Arc::new(|_args| {
                Ok(serde_json::json!({ "connections": [], "total": 0 }))
            }),
            metadata: ToolMetadata {
                provider: "n0va1o".to_string(),
                category: "core".to_string(),
                risk_level: RiskLevel::Low,
                required_scopes: vec!["connections.read".to_string()],
                estimated_latency_ms: 50,
                deprecated: false,
            },
        },
        ToolDefinition {
            schema: ToolSchema {
                name: "n0va1o.agents.discover".to_string(),
                description: Some("Discover available tools by intent query".to_string()),
                input_schema: serde_json::json!({
                    "type": "object",
                    "required": ["query"],
                    "properties": {
                        "query": { "type": "string", "description": "Natural language intent query" },
                        "max_tools": { "type": "integer", "default": 5 }
                    }
                }),
            },
            handler: Arc::new(|args| {
                let query = args.get("query").and_then(|v| v.as_str()).unwrap_or("");
                Ok(serde_json::json!({ "intent": query, "tools": [] }))
            }),
            metadata: ToolMetadata {
                provider: "n0va1o".to_string(),
                category: "core".to_string(),
                risk_level: RiskLevel::Low,
                required_scopes: vec!["tools.discover".to_string()],
                estimated_latency_ms: 45,
                deprecated: false,
            },
        },
        ToolDefinition {
            schema: ToolSchema {
                name: "slack.post_message".to_string(),
                description: Some("Post a message to a Slack channel".to_string()),
                input_schema: serde_json::json!({
                    "type": "object",
                    "required": ["channel", "message"],
                    "properties": {
                        "channel": { "type": "string", "description": "Slack channel name or ID" },
                        "message": { "type": "string", "description": "Message content" },
                        "thread_ts": { "type": "string", "description": "Thread timestamp for replies" }
                    }
                }),
            },
            handler: Arc::new(|args| {
                let channel = args.get("channel").and_then(|v| v.as_str()).unwrap_or("general");
                let msg = args.get("message").and_then(|v| v.as_str()).unwrap_or("");
                Ok(serde_json::json!({ "ok": true, "channel": channel, "ts": "1234567890.123456" }))
            }),
            metadata: ToolMetadata {
                provider: "slack".to_string(),
                category: "communication".to_string(),
                risk_level: RiskLevel::Medium,
                required_scopes: vec!["chat:write".to_string()],
                estimated_latency_ms: 300,
                deprecated: false,
            },
        },
        ToolDefinition {
            schema: ToolSchema {
                name: "github.list_repos".to_string(),
                description: Some("List GitHub repositories for the authenticated user".to_string()),
                input_schema: serde_json::json!({
                    "type": "object",
                    "properties": {
                        "org": { "type": "string" },
                        "visibility": { "type": "string", "enum": ["all", "public", "private"] }
                    }
                }),
            },
            handler: Arc::new(|_args| {
                Ok(serde_json::json!({ "repositories": [], "total": 0 }))
            }),
            metadata: ToolMetadata {
                provider: "github".to_string(),
                category: "developer_tools".to_string(),
                risk_level: RiskLevel::Low,
                required_scopes: vec!["repo".to_string()],
                estimated_latency_ms: 500,
                deprecated: false,
            },
        },
    ];

    for tool in builtin_tools {
        registry.register(tool).await;
    }
}
