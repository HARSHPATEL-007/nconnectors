export type TransportType = 'stdio' | 'http_sse' | 'websocket';
export type AgentStatus = 'active' | 'paused' | 'degraded' | 'failed';
export type AuthType = 'oauth2.1' | 'oauth2.0' | 'oauth1.0a' | 'saml' | 'oidc' | 'jwt' | 'api_key' | 'basic' | 'aws_sigv4' | 'azure_sas';
export type ConnectionStatus = 'active' | 'expired' | 'revoked' | 'failed' | 'provisioning';
export type RiskLevel = 'critical' | 'high' | 'medium' | 'low';
export type AuditStatus = 'success' | 'failed' | 'blocked' | 'pending_approval';
export type ProtocolType = 'rest' | 'soap' | 'graphql' | 'grpc' | 'webdav' | 'ftp' | 'odata';
export type SessionStatus = 'running' | 'completed' | 'paused' | 'failed' | 'waiting_approval';
export type SandboxNetworkMode = 'isolated' | 'filtered' | 'full';
export interface Tenant {
    tenant_id: string;
    name: string;
    created_at: string;
    encryption_key_id: string;
    settings: TenantSettings;
}
export interface TenantSettings {
    default_transport: TransportType;
    sandbox_enabled: boolean;
    hitl_enabled: boolean;
    audit_retention_days: number;
    max_concurrent_agents: number;
    max_daily_actions: number;
    mfa_required: boolean;
    session_ttl: string;
}
export interface Agent {
    agent_id: string;
    tenant_id: string;
    name: string;
    type: string;
    description: string;
    status: AgentStatus;
    permissions: Record<string, string[]>;
    autonomy_level: 'low' | 'medium' | 'high';
    approval_required_for: string[];
    webhook_url?: string;
    max_daily_actions: number;
    sandbox_enabled: boolean;
    context_window: number;
    preferred_model: string;
    fallback_model?: string;
    api_key: string;
    created_at: string;
    expires_at: string;
    tools_available: string[];
    session_endpoint: string;
    sandbox_endpoint: string;
    recipe_endpoint: string;
}
export interface ConnectedAccount {
    connection_id: string;
    tenant_id: string;
    user_id: string;
    provider: string;
    auth_type: AuthType;
    status: ConnectionStatus;
    encrypted_tokens: EncryptedTokens;
    allowed_actions: string[];
    blocked_actions: string[];
    jit_enabled: boolean;
    provisioned_at: string;
    auto_refresh: boolean;
    last_used: string;
    usage_count: number;
    health_score: number;
}
export interface EncryptedTokens {
    access_token: string;
    refresh_token: string;
    expires_at: string;
    scopes: string[];
}
export interface Session {
    session_id: string;
    agent_id: string;
    tenant_id: string;
    user_id: string;
    status: SessionStatus;
    context: SessionContext;
    tools_injected: string[];
    steps: SessionStep[];
    current_step: number;
    sandbox_config?: SandboxConfig;
    websocket_url: string;
    sandbox_url: string;
    created_at: string;
    expires_at: string;
}
export interface SessionContext {
    user_id: string;
    tenant_id: string;
    session_type: 'interactive' | 'automated';
}
export interface SessionStep {
    step_number: number;
    tool_name: string;
    parameters: Record<string, unknown>;
    status: 'pending' | 'running' | 'completed' | 'failed' | 'blocked';
    result?: string;
    latency_ms?: number;
    error?: string;
}
export interface SandboxConfig {
    cpu_quota: number;
    ram_quota: number;
    timeout_seconds: number;
    network_mode: SandboxNetworkMode;
    allowed_domains?: string[];
}
export interface ToolDefinition {
    name: string;
    description: string;
    parameters: Record<string, ParameterSchema>;
    provider: string;
    integration: string;
    category: string;
    risk_level: RiskLevel;
    required_scopes: string[];
    estimated_latency_ms: number;
    deprecated: boolean;
}
export interface ParameterSchema {
    type: string;
    description: string;
    required?: boolean;
    enum?: unknown[];
    minimum?: number;
    maximum?: number;
    default?: unknown;
}
export interface ToolDiscoveryResult {
    intent: string;
    confidence: number;
    tools: DiscoveredTool[];
    suggested_workflow: string;
    context_tokens_saved: number;
    total_estimated_latency_ms: number;
}
export interface DiscoveredTool {
    name: string;
    relevance: number;
    reason: string;
    estimated_latency_ms: number;
    required_scopes: string[];
    risk_level: RiskLevel;
    deprecated: boolean;
}
export interface AuditEntry {
    audit_id: string;
    timestamp: string;
    tenant_id: string;
    agent_id: string;
    agent_name: string;
    agent_version: string;
    tool_name: string;
    tool_parameters: Record<string, unknown>;
    session_id: string;
    workflow_id?: string;
    step_number: number;
    intent_classification: string;
    confidence: number;
    reasoning_chain: string[];
    status: AuditStatus;
    result_summary: string;
    latency_ms: number;
    tokens_consumed: number;
    approval_required: boolean;
    approved_by?: string;
    approval_timestamp?: string;
    ip_address: string;
    user_agent: string;
    mfa_verified: boolean;
    risk_score: number;
    hash: string;
    merkle_root: string;
    blockchain_anchor?: string;
}
export interface EscalationCase {
    escalation_id: string;
    tenant_id: string;
    agent_id: string;
    session_id: string;
    risk_level: RiskLevel;
    risk_score: number;
    status: 'pending' | 'approved' | 'rejected' | 'modified' | 'escalated';
    action: EscalationAction;
    agent_reasoning: string[];
    data_accessed: string[];
    proposed_parameters: Record<string, unknown>;
    created_at: string;
    timeout_at: string;
    resolved_at?: string;
    resolved_by?: string;
    digital_signature?: string;
}
export interface EscalationAction {
    tool_name: string;
    description: string;
    parameters: Record<string, unknown>;
    impact: string;
}
export interface Recipe {
    recipe_id: string;
    tenant_id: string;
    agent_id: string;
    name: string;
    description: string;
    source_session_id: string;
    version: string;
    compiled_schema: string;
    execution_endpoint: string;
    estimated_latency_ms: number;
    requires_approval: boolean;
    risk_score: number;
    schedule?: RecipeSchedule;
    created_at: string;
    compiled_at: string;
    monitoring_dashboard: string;
}
export interface RecipeSchedule {
    type: 'cron' | 'interval';
    expression: string;
    timezone: string;
}
export interface Integration {
    id: string;
    name: string;
    provider: string;
    category: string;
    status: 'connected' | 'available' | 'error' | 'pending';
    capabilities: string[];
    auth_types: AuthType[];
    health_score: number;
    icon?: string;
}
export interface WebhookEvent {
    event_id: string;
    event_type: string;
    tenant_id: string;
    payload: Record<string, unknown>;
    timestamp: string;
    signature: string;
}
export interface MCPRequest {
    jsonrpc: '2.0';
    id: string | number;
    method: string;
    params?: Record<string, unknown>;
}
export interface MCPResponse {
    jsonrpc: '2.0';
    id: string | number;
    result?: unknown;
    error?: MCPError;
}
export interface MCPError {
    code: number;
    message: string;
    data?: unknown;
}
export interface ServerConfig {
    host: string;
    port: number;
    transports: TransportType[];
    encryption: EncryptionConfig;
    sandbox: SandboxDefaults;
    audit: AuditConfig;
    hitl: HITLConfig;
}
export interface EncryptionConfig {
    algorithm: string;
    key_rotation_days: number;
    quantum_safe: boolean;
}
export interface SandboxDefaults {
    cpu_quota: number;
    ram_quota: number;
    timeout_seconds: number;
    network_mode: SandboxNetworkMode;
}
export interface AuditConfig {
    retention_days: number;
    merkle_tree: boolean;
    blockchain_anchor: boolean;
}
export interface HITLConfig {
    critical_timeout_hours: number;
    high_timeout_hours: number;
    medium_timeout_hours: number;
}
//# sourceMappingURL=index.d.ts.map