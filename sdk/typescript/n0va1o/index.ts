export interface N0VA1OConfig {
  apiKey: string;
  tenantId?: string;
  endpoint?: string;
  transport?: 'stdio' | 'http_sse' | 'websocket';
  timeout?: number;
}

export interface AgentConfig {
  name: string;
  type?: string;
  description?: string;
  permissions?: Record<string, string[]>;
  autonomyLevel?: 'low' | 'medium' | 'high' | 'full';
  approvalRequiredFor?: string[];
  webhookUrl?: string;
  maxDailyActions?: number;
  sandboxEnabled?: boolean;
  contextWindow?: number;
  preferredModel?: string;
  fallbackModel?: string;
}

export interface SandboxConfig {
  cpu?: number;
  ram?: number;
  timeout?: number;
  networkMode?: string;
  allowedDomains?: string[];
}

export interface Agent {
  agent_id: string;
  name: string;
  type: string;
  status: string;
  api_key: string;
  tools_available: string[];
  session_endpoint: string;
  sandbox_endpoint?: string;
  recipe_endpoint: string;
  created_at: string;
  expires_at: string;
}

export interface DiscoveredTool {
  name: string;
  relevance: number;
  reason?: string;
  estimated_latency_ms: number;
  required_scopes: string[];
  risk_level: string;
}

export interface ToolDiscoveryResult {
  intent: string;
  tools: DiscoveredTool[];
  count: number;
}

export interface Session {
  session_id: string;
  agent_id: string;
  status: string;
  tools_injected: string[];
  websocket_url: string;
  sandbox_url?: string;
  created_at: string;
  expires_at: string;
}

export interface Recipe {
  recipe_id: string;
  compiled_schema: string;
  execution_endpoint: string;
  estimated_latency_ms: number;
  requires_approval: boolean;
  risk_score: number;
}

export interface AuditEntry {
  audit_id: string;
  timestamp: string;
  agent_id?: string;
  tool_name: string;
  status: string;
  result_summary: string;
  latency_ms: number;
  risk_score: number;
  approval_required: boolean;
}

export interface EscalationCase {
  escalation_id: string;
  agent_id: string;
  agent_name: string;
  action: string;
  tool_name: string;
  risk_score: number;
  status: string;
  reasoning: string[];
  data_accessed: string[];
  parameters: Record<string, unknown>;
  created_at: string;
  timeout_at: string;
}

export class N0VA1OError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'N0VA1OError';
  }
}

export class N0VA1OClient {
  private config: N0VA1OConfig;

  constructor(config: N0VA1OConfig) {
    this.config = {
      tenantId: 'default',
      endpoint: 'https://n0va1o.io',
      transport: 'websocket',
      timeout: 30000,
      ...config,
    };
  }

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const url = `${this.config.endpoint}${path}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.apiKey}`,
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
      throw new N0VA1OError(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  async registerAgent(config: AgentConfig): Promise<Agent> {
    return this.request<Agent>('POST', '/v1/n0va1o/agents/register', {
      agent_name: config.name,
      agent_type: config.type || 'workflow_orchestrator',
      description: config.description || '',
      permissions: config.permissions || {},
      autonomy_level: config.autonomyLevel || 'medium',
      approval_required_for: config.approvalRequiredFor || [],
      webhook_url: config.webhookUrl,
      max_daily_actions: config.maxDailyActions || 10000,
      sandbox_enabled: config.sandboxEnabled ?? true,
      context_window: config.contextWindow || 128000,
      preferred_model: config.preferredModel || 'claude-3-5-sonnet-20241022',
      fallback_model: config.fallbackModel,
    });
  }

  async listAgents(): Promise<Agent[]> {
    return this.request<Agent[]>('GET', '/v1/n0va1o/agents');
  }

  async getAgent(agentId: string): Promise<Agent> {
    return this.request<Agent>('GET', `/v1/n0va1o/agents/${agentId}`);
  }

  async toggleAgent(agentId: string): Promise<{ agent_id: string; status: string }> {
    return this.request('POST', `/v1/n0va1o/agents/${agentId}/toggle`);
  }

  async discoverTools(query: string, maxTools = 5): Promise<ToolDiscoveryResult> {
    return this.request<ToolDiscoveryResult>('POST', '/v1/n0va1o/tools/discover', {
      query,
      max_tools: maxTools,
    });
  }

  async listTools(): Promise<unknown[]> {
    return this.request<unknown[]>('GET', '/v1/n0va1o/tools');
  }

  async callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
    return this.request('POST', '/v1/n0va1o/tools/call', { name, arguments: args });
  }

  async createSession(agentId: string, options?: {
    tools?: string[];
    sandboxConfig?: SandboxConfig;
  }): Promise<Session> {
    return this.request<Session>('POST', '/v1/n0va1o/sessions/create', {
      agent_id: agentId,
      context: { user_id: 'user_001', tenant_id: this.config.tenantId, session_type: 'interactive' },
      tools: options?.tools || [],
      sandbox_config: options?.sandboxConfig,
    });
  }

  async listSessions(): Promise<Session[]> {
    return this.request<Session[]>('GET', '/v1/n0va1o/sessions');
  }

  async getSession(sessionId: string): Promise<Session> {
    return this.request<Session>('GET', `/v1/n0va1o/sessions/${sessionId}`);
  }

  async suspendSession(sessionId: string): Promise<unknown> {
    return this.request('POST', `/v1/n0va1o/sessions/${sessionId}/suspend`);
  }

  async resumeSession(sessionId: string): Promise<unknown> {
    return this.request('POST', `/v1/n0va1o/sessions/${sessionId}/resume`);
  }

  async listAudit(limit = 50): Promise<AuditEntry[]> {
    return this.request<AuditEntry[]>('GET', `/v1/n0va1o/audit?limit=${limit}`);
  }

  async listEscalations(): Promise<EscalationCase[]> {
    return this.request<EscalationCase[]>('GET', '/v1/n0va1o/escalations');
  }

  async approveEscalation(id: string): Promise<unknown> {
    return this.request('POST', `/v1/n0va1o/escalations/${id}/approve`);
  }

  async rejectEscalation(id: string): Promise<unknown> {
    return this.request('POST', `/v1/n0va1o/escalations/${id}/reject`);
  }

  async getDashboardMetrics(): Promise<unknown> {
    return this.request('GET', '/v1/n0va1o/metrics/dashboard');
  }
}
