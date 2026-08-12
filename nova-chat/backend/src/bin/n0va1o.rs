use actix_cors::Cors;
use actix_web::{web, App, HttpResponse, HttpServer, Result};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Agent {
    pub agent_id: String,
    pub name: String,
    pub agent_type: String,
    pub description: String,
    pub status: String,
    pub permissions: HashMap<String, Vec<String>>,
    pub autonomy_level: String,
    pub max_daily_actions: u32,
    pub sandbox_enabled: bool,
    pub tools_available: Vec<String>,
    pub api_key: String,
    pub session_endpoint: String,
    pub created_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Session {
    pub session_id: String,
    pub agent_id: String,
    pub status: String,
    pub tools_injected: Vec<String>,
    pub current_step: u32,
    pub created_at: String,
    pub expires_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuditEntry {
    pub audit_id: String,
    pub timestamp: String,
    pub agent_id: Option<String>,
    pub tool_name: String,
    pub status: String,
    pub result_summary: String,
    pub latency_ms: u64,
    pub risk_score: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IntegrationCatalog {
    pub entries: Vec<CatalogEntry>,
    pub total: usize,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CatalogEntry {
    pub id: String,
    pub name: String,
    pub category: String,
    pub description: String,
    pub auth_type: String,
    pub capabilities: Vec<String>,
    pub status: String,
}

#[derive(Debug, Clone, Default)]
pub struct AppState {
    agents: Arc<RwLock<HashMap<String, Agent>>>,
    sessions: Arc<RwLock<HashMap<String, Session>>>,
    audit_log: Arc<RwLock<Vec<AuditEntry>>>,
    tools: Arc<RwLock<HashMap<String, ToolDefinition>>>,
    catalog: Arc<RwLock<Vec<CatalogEntry>>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolDefinition {
    pub name: String,
    pub description: String,
    pub provider: String,
    pub risk_level: String,
}

#[derive(Debug, Deserialize)]
pub struct RegisterAgentRequest {
    pub agent_name: String,
    #[serde(default)]
    pub agent_type: String,
    pub description: Option<String>,
    pub permissions: Option<HashMap<String, Vec<String>>>,
    pub autonomy_level: Option<String>,
    pub max_daily_actions: Option<u32>,
    pub sandbox_enabled: Option<bool>,
}

#[derive(Debug, Serialize)]
pub struct RegisterAgentResponse {
    pub agent_id: String,
    pub api_key: String,
    pub status: String,
    pub tools_available: Vec<String>,
    pub session_endpoint: String,
    pub created_at: String,
}

#[derive(Debug, Deserialize)]
pub struct CreateSessionRequest {
    pub agent_id: String,
    pub tools: Option<Vec<String>>,
}

#[derive(Debug, Deserialize)]
pub struct ToolDiscoverRequest {
    pub query: String,
    pub max_tools: Option<usize>,
}

#[derive(Debug, Serialize)]
pub struct ToolDiscoverResponse {
    pub intent: String,
    pub tools: Vec<ToolResult>,
    pub suggested_workflow: String,
}

#[derive(Debug, Serialize)]
pub struct ToolResult {
    pub name: String,
    pub relevance: f64,
    pub reason: String,
    pub estimated_latency_ms: u32,
}

#[derive(Debug, Deserialize)]
pub struct CompileRecipeRequest {
    pub session_id: String,
    pub recipe_name: String,
    pub description: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct CompileRecipeResponse {
    pub recipe_id: String,
    pub execution_endpoint: String,
    pub estimated_latency_ms: u32,
    pub compiled_at: String,
}

#[derive(Debug, Serialize)]
pub struct HealthResponse {
    pub status: &'static str,
    pub version: &'static str,
    pub uptime_seconds: u64,
    pub endpoints: Vec<&'static str>,
}

use std::time::Instant;

pub struct ServerStart {
    instant: Instant,
}

impl ServerStart {
    pub fn new() -> Self {
        Self { instant: Instant::now() }
    }

    pub fn elapsed_secs(&self) -> u64 {
        self.instant.elapsed().as_secs()
    }
}

use std::sync::OnceLock;
static SERVER_START: OnceLock<ServerStart> = OnceLock::new();

pub fn init_server_start() {
    SERVER_START.set(ServerStart::new()).ok();
}

pub fn uptime() -> u64 {
    SERVER_START.get().map(|s| s.elapsed_secs()).unwrap_or(0)
}

pub fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..16].to_string()
}

#[actix_web::get("/health")]
async fn health() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(HealthResponse {
        status: "healthy",
        version: "2026.07.0",
        uptime_seconds: uptime(),
        endpoints: vec![
            "/v1/n0va1o/agents/register",
            "/v1/n0va1o/agents",
            "/v1/n0va1o/sessions/create",
            "/v1/n0va1o/tools/discover",
            "/v1/n0va1o/tools/call",
            "/v1/n0va1o/recipes/compile",
            "/v1/n0va1o/audit",
            "/v1/n0va1o/metrics/dashboard",
            "/v1/n0va1o/catalog",
            "/v1/n0va1o/escalations",
        ],
    }))
}

#[actix_web::post("/v1/n0va1o/agents/register")]
async fn register_agent(
    state: web::Data<AppState>,
    body: web::Json<RegisterAgentRequest>,
) -> Result<HttpResponse> {
    let agent_id = format!("agent_{}", generate_id());
    let api_key = format!("n0va_sk_{}", generate_id());
    let now = chrono::Utc::now().to_rfc3339();

    let tools = discover_tools_for_query(&body.agent_name, body.permissions.as_ref());

    let agent = Agent {
        agent_id: agent_id.clone(),
        name: body.agent_name.clone(),
        agent_type: if body.agent_type.is_empty() { "workflow_orchestrator".to_string() } else { body.agent_type.clone() },
        description: body.description.clone().unwrap_or_default(),
        status: "active".to_string(),
        permissions: body.permissions.clone().unwrap_or_default(),
        autonomy_level: body.autonomy_level.clone().unwrap_or_else(|| "medium".to_string()),
        max_daily_actions: body.max_daily_actions.unwrap_or(10000),
        sandbox_enabled: body.sandbox_enabled.unwrap_or(true),
        tools_available: tools.clone(),
        api_key: api_key.clone(),
        session_endpoint: format!("wss://n0va1o.io/sessions/{}", agent_id),
        created_at: now.clone(),
    };

    {
        let mut agents = state.agents.write().await;
        agents.insert(agent_id.clone(), agent);
    }

    let response = RegisterAgentResponse {
        agent_id: agent_id.clone(),
        api_key,
        status: "active".to_string(),
        tools_available: tools,
        session_endpoint: format!("wss://n0va1o.io/sessions/{}", agent_id),
        created_at: now,
    };

    Ok(HttpResponse::Created().json(response))
}

#[actix_web::get("/v1/n0va1o/agents")]
async fn list_agents(state: web::Data<AppState>) -> Result<HttpResponse> {
    let agents = state.agents.read().await;
    let agent_list: Vec<Agent> = agents.values().cloned().collect();
    Ok(HttpResponse::Ok().json(agent_list))
}

#[actix_web::post("/v1/n0va1o/sessions/create")]
async fn create_session(
    state: web::Data<AppState>,
    body: web::Json<CreateSessionRequest>,
) -> Result<HttpResponse> {
    let session_id = format!("sess_{}", generate_id());
    let now = chrono::Utc::now();
    let expires = now + chrono::Duration::hours(1);

    let tools = {
        let agents = state.agents.read().await;
        agents.get(&body.agent_id).map(|a| a.tools_available.clone()).unwrap_or_default()
    };

    let session = Session {
        session_id: session_id.clone(),
        agent_id: body.agent_id.clone(),
        status: "running".to_string(),
        tools_injected: body.tools.clone().unwrap_or(tools),
        current_step: 0,
        created_at: now.to_rfc3339(),
        expires_at: expires.to_rfc3339(),
    };

    {
        let mut sessions = state.sessions.write().await;
        sessions.insert(session_id.clone(), session);
    }

    Ok(HttpResponse::Created().json(serde_json::json!({
        "session_id": session_id,
        "status": "running",
        "websocket_url": format!("wss://n0va1o.io/sessions/{}", session_id),
        "expires_at": expires.to_rfc3339(),
    })))
}

#[actix_web::post("/v1/n0va1o/tools/discover")]
async fn discover_tools(
    state: web::Data<AppState>,
    body: web::Json<ToolDiscoverRequest>,
) -> Result<HttpResponse> {
    let max = body.max_tools.unwrap_or(5);
    let query = body.query.to_lowercase();

    let catalog = state.catalog.read().await;
    let mut results: Vec<ToolResult> = catalog
        .iter()
        .map(|entry| {
            let name_match = entry.name.to_lowercase().contains(&query) || query.contains(&entry.name.to_lowercase());
            let desc_match = entry.description.to_lowercase().contains(&query);
            let relevance = if name_match { 0.95 } else if desc_match { 0.7 } else { 0.3 };

            ToolResult {
                name: entry.id.clone(),
                relevance,
                reason: format!("{} integration for {}", entry.category, entry.name),
                estimated_latency_ms: 300,
            }
        })
        .filter(|r| r.relevance > 0.5)
        .take(max)
        .collect();

    if results.is_empty() {
        results.push(ToolResult {
            name: "n0va1o.search".to_string(),
            relevance: 0.5,
            reason: "General search across all integrations".to_string(),
            estimated_latency_ms: 45,
        });
    }

    let response = ToolDiscoverResponse {
        intent: query,
        tools: results,
        suggested_workflow: "search → execute".to_string(),
    };

    Ok(HttpResponse::Ok().json(response))
}

#[actix_web::post("/v1/n0va1o/tools/call")]
async fn call_tool(
    state: web::Data<AppState>,
    body: web::Json<serde_json::Value>,
) -> Result<HttpResponse> {
    let tool_name = body.get("name").and_then(|v| v.as_str()).unwrap_or("unknown");
    let now = chrono::Utc::now().to_rfc3339();

    let audit = AuditEntry {
        audit_id: format!("audit_{}", generate_id()),
        timestamp: now,
        agent_id: None,
        tool_name: tool_name.to_string(),
        status: "success".to_string(),
        result_summary: format!("Tool {} executed successfully", tool_name),
        latency_ms: 85,
        risk_score: 0.12,
    };

    {
        let mut log = state.audit_log.write().await;
        log.push(audit);
    }

    Ok(HttpResponse::Ok().json(serde_json::json!({
        "success": true,
        "tool": tool_name,
        "result": {"status": "completed"},
        "latency_ms": 85,
    })))
}

#[actix_web::post("/v1/n0va1o/recipes/compile")]
async fn compile_recipe(
    _state: web::Data<AppState>,
    _body: web::Json<CompileRecipeRequest>,
) -> Result<HttpResponse> {
    let recipe_id = format!("rec_{}", generate_id());
    let now = chrono::Utc::now().to_rfc3339();

    let response = CompileRecipeResponse {
        recipe_id: recipe_id.clone(),
        execution_endpoint: format!("https://n0va1o.io/recipes/{}/execute", recipe_id),
        estimated_latency_ms: 85,
        compiled_at: now,
    };

    Ok(HttpResponse::Created().json(response))
}

#[actix_web::get("/v1/n0va1o/audit")]
async fn list_audit(state: web::Data<AppState>) -> Result<HttpResponse> {
    let log = state.audit_log.read().await;
    Ok(HttpResponse::Ok().json(log.iter().rev().take(50).cloned().collect::<Vec<_>>()))
}

#[actix_web::get("/v1/n0va1o/metrics/dashboard")]
async fn dashboard_metrics(state: web::Data<AppState>) -> Result<HttpResponse> {
    let agents = state.agents.read().await;
    let sessions = state.sessions.read().await;
    let audit = state.audit_log.read().await;

    Ok(HttpResponse::Ok().json(serde_json::json!({
        "agents": { "total": agents.len(), "active": agents.values().filter(|a| a.status == "active").count(), "paused": 0 },
        "sessions": { "total": sessions.len(), "active": sessions.values().filter(|s| s.status == "running").count(), "waiting_approval": 0 },
        "connections": { "total": 25, "active": 8, "providers": 25 },
        "audit_entries": { "total": audit.len(), "pending_approval": 0, "risk_score_avg": 0.15 },
        "escalations": { "pending": 0, "total": 0 },
    })))
}

#[actix_web::get("/v1/n0va1o/catalog")]
async fn get_catalog(state: web::Data<AppState>) -> Result<HttpResponse> {
    let entries = state.catalog.read().await;
    Ok(HttpResponse::Ok().json(IntegrationCatalog {
        entries: entries.clone(),
        total: entries.len(),
    }))
}

#[actix_web::get("/v1/n0va1o/tools")]
async fn list_tools(state: web::Data<AppState>) -> Result<HttpResponse> {
    let _ = state;
    let tools = vec![
        serde_json::json!({"name": "slack.post_message", "description": "Post message to Slack", "provider": "slack", "risk_level": "medium"}),
        serde_json::json!({"name": "github.list_repos", "description": "List GitHub repositories", "provider": "github", "risk_level": "low"}),
        serde_json::json!({"name": "stripe.create_payment_intent", "description": "Create payment", "provider": "stripe", "risk_level": "high"}),
        serde_json::json!({"name": "jira.search_issues", "description": "Search Jira issues", "provider": "jira", "risk_level": "low"}),
        serde_json::json!({"name": "notion.create_page", "description": "Create Notion page", "provider": "notion", "risk_level": "low"}),
        serde_json::json!({"name": "google_drive.list_files", "description": "List Drive files", "provider": "google_drive", "risk_level": "low"}),
        serde_json::json!({"name": "discord.send_message", "description": "Send Discord message", "provider": "discord", "risk_level": "medium"}),
        serde_json::json!({"name": "hubspot.search_contacts", "description": "Search HubSpot contacts", "provider": "hubspot", "risk_level": "low"}),
    ];
    Ok(HttpResponse::Ok().json(tools))
}

#[actix_web::get("/v1/n0va1o/escalations")]
async fn list_escalations() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(Vec::<serde_json::Value>::new()))
}

#[actix_web::get("/v1/n0va1o/integrations")]
async fn list_integrations(state: web::Data<AppState>) -> Result<HttpResponse> {
    let catalog = state.catalog.read().await;
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "integrations": &*catalog,
        "total": catalog.len(),
        "categories": ["Communication", "Developer", "Storage", "Finance", "Project Management", "Productivity", "CRM"]
    })))
}

fn discover_tools_for_query(name: &str, permissions: Option<&HashMap<String, Vec<String>>>) -> Vec<String> {
    let mut tools = vec![
        "n0va1o.connections.list".to_string(),
        "n0va1o.tools.discover".to_string(),
        "n0va1o.audit.query".to_string(),
    ];

    if name.to_lowercase().contains("finance") {
        tools.push("stripe.create_payment_intent".to_string());
        tools.push("stripe.list_invoices".to_string());
        tools.push("quickbooks.sync".to_string());
    }
    if name.to_lowercase().contains("marketing") {
        tools.push("slack.post_message".to_string());
        tools.push("meta_ads.update_budget".to_string());
        tools.push("google_analytics.query".to_string());
    }
    if name.to_lowercase().contains("devops") {
        tools.push("github.list_repos".to_string());
        tools.push("github.merge_pull_request".to_string());
        tools.push("jira.search_issues".to_string());
    }

    if let Some(perms) = permissions {
        for (category, actions) in perms {
            for action in actions {
                tools.push(format!("{}.{}", category, action));
            }
        }
    }

    tools.sort();
    tools.dedup();
    tools
}

fn generate_catalog() -> Vec<CatalogEntry> {
    vec![
        CatalogEntry { id: "slack".to_string(), name: "Slack".to_string(), category: "Communication".to_string(), description: "Team messaging and collaboration".to_string(), auth_type: "oauth2".to_string(), capabilities: vec!["message_sync".into(), "channel_sync".into()], status: "available".to_string() },
        CatalogEntry { id: "github".to_string(), name: "GitHub".to_string(), category: "Developer".to_string(), description: "Code hosting and CI/CD".to_string(), auth_type: "oauth2".to_string(), capabilities: vec!["repo_sync".into(), "pr_management".into()], status: "available".to_string() },
        CatalogEntry { id: "google_drive".to_string(), name: "Google Drive".to_string(), category: "Storage".to_string(), description: "Cloud file storage".to_string(), auth_type: "oauth2".to_string(), capabilities: vec!["file_sync".into(), "search".into()], status: "available".to_string() },
        CatalogEntry { id: "stripe".to_string(), name: "Stripe".to_string(), category: "Finance".to_string(), description: "Payment processing".to_string(), auth_type: "api_key".to_string(), capabilities: vec!["payments".into(), "invoicing".into()], status: "available".to_string() },
        CatalogEntry { id: "jira".to_string(), name: "Jira".to_string(), category: "Project Management".to_string(), description: "Issue tracking".to_string(), auth_type: "oauth2".to_string(), capabilities: vec!["issues".into(), "sprints".into()], status: "available".to_string() },
        CatalogEntry { id: "notion".to_string(), name: "Notion".to_string(), category: "Productivity".to_string(), description: "Notes and databases".to_string(), auth_type: "token".to_string(), capabilities: vec!["pages".into(), "databases".into()], status: "available".to_string() },
        CatalogEntry { id: "discord".to_string(), name: "Discord".to_string(), category: "Communication".to_string(), description: "Community chat".to_string(), auth_type: "token".to_string(), capabilities: vec!["messages".into(), "channels".into()], status: "available".to_string() },
        CatalogEntry { id: "hubspot".to_string(), name: "HubSpot".to_string(), category: "CRM".to_string(), description: "Customer relationship management".to_string(), auth_type: "api_key".to_string(), capabilities: vec!["contacts".into(), "deals".into()], status: "available".to_string() },
        CatalogEntry { id: "aws_s3".to_string(), name: "AWS S3".to_string(), category: "Storage".to_string(), description: "Object storage".to_string(), auth_type: "api_key".to_string(), capabilities: vec![].into(), status: "available".to_string() },
    ]
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    init_server_start();

    let state = web::Data::new(AppState {
        agents: Arc::new(RwLock::new(HashMap::new())),
        sessions: Arc::new(RwLock::new(HashMap::new())),
        audit_log: Arc::new(RwLock::new(Vec::new())),
        tools: Arc::new(RwLock::new(HashMap::new())),
        catalog: Arc::new(RwLock::new(generate_catalog())),
    });

    println!("
  ╔══════════════════════════════════════════════════════╗
  ║          N0VA1O INTEGRATION GATEWAY                  ║
  ║          Transcendent Edition v2026.07               ║
  ╠══════════════════════════════════════════════════════╣
  ║                                                      ║
  ║   Server starting on http://0.0.0.0:8080             ║
  ║                                                      ║
  ║   Endpoints:                                         ║
  ║   ├── GET  /health                                   ║
  ║   ├── POST /v1/n0va1o/agents/register                ║
  ║   ├── GET  /v1/n0va1o/agents                         ║
  ║   ├── POST /v1/n0va1o/sessions/create                ║
  ║   ├── POST /v1/n0va1o/tools/discover                 ║
  ║   ├── POST /v1/n0va1o/tools/call                     ║
  ║   ├── POST /v1/n0va1o/recipes/compile                ║
  ║   ├── GET  /v1/n0va1o/audit                          ║
  ║   ├── GET  /v1/n0va1o/metrics/dashboard              ║
  ║   ├── GET  /v1/n0va1o/catalog                        ║
  ║   └── GET  /v1/n0va1o/escalations                    ║
  ║                                                      ║
  ╚══════════════════════════════════════════════════════╝
");

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .app_data(state.clone())
            .service(health)
            .service(register_agent)
            .service(list_agents)
            .service(create_session)
            .service(discover_tools)
            .service(call_tool)
            .service(list_tools)
            .service(compile_recipe)
            .service(list_audit)
            .service(dashboard_metrics)
            .service(get_catalog)
            .service(list_escalations)
            .service(list_integrations)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
