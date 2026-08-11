import { apiClient } from './client';

export interface Integration {
  id: string;
  provider: string;
  name: string;
  category: string;
  description: string;
  auth_types: string[];
  capabilities: string[];
  status?: 'connected' | 'available' | 'error' | 'pending';
  health_score?: number;
}

export interface Agent {
  agent_id: string;
  name: string;
  type: string;
  description: string;
  status: 'active' | 'paused' | 'degraded' | 'failed' | 'error';
  permissions: Record<string, string[]>;
  autonomy_level: string;
  max_daily_actions: number;
  sandbox_enabled: boolean;
  created_at: string;
  tools_available: string[];
  api_key: string;
}

export interface Session {
  session_id: string;
  agent_id: string;
  status: string;
  tools_injected: string[];
  current_step: number;
  created_at: string;
  expires_at: string;
  steps?: SessionStep[];
}

export interface SessionStep {
  step_number: number;
  tool_name: string;
  status: string;
  result?: string;
  latency_ms?: number;
  error?: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  agent_name: string;
  tool_name: string;
  status: string;
  result_summary: string;
  latency_ms: number;
  risk_score: number;
  intent_classification: string;
}

export interface EscalationCase {
  id: string;
  risk_level: string;
  risk_score: number;
  status: string;
  action: {
    tool_name: string;
    description: string;
    parameters: Record<string, unknown>;
  };
  agent_reasoning: string[];
  created_at: string;
  timeout_at: string;
}

export interface DashboardMetrics {
  agents: { total: number; active: number; paused: number };
  sessions: { total: number; running: number; completed: number };
  connections: { total: number; active: number; expired: number };
  auditEntries: { total: number; last24h: number };
  escalations: { pending: number; resolved: number };
  recipes: { total: number };
}

export interface ToolDiscoveryResult {
  intent: string;
  confidence: number;
  tools: Array<{
    name: string;
    relevance: number;
    reason: string;
    estimated_latency_ms: number;
    risk_level: string;
  }>;
  suggested_workflow: string;
}

export const agentsService = {
  async register(params: {
    tenant_id?: string;
    agent_name: string;
    agent_type: string;
    permissions?: Record<string, string[]>;
    autonomy_level?: string;
    sandbox_enabled?: boolean;
    max_daily_actions?: number;
    description?: string;
  }): Promise<Agent> {
    return apiClient.post('/v1/n0va1o/agents/register', params);
  },

  async getAll(): Promise<Agent[]> {
    return apiClient.get('/v1/n0va1o/agents');
  },

  async toggleStatus(agentId: string): Promise<Agent> {
    return apiClient.post(`/v1/n0va1o/agents/${agentId}/toggle`, {});
  },

  async getById(agentId: string): Promise<Agent> {
    return apiClient.get(`/v1/n0va1o/agents/${agentId}`);
  },
};

export const integrationsService = {
  async getAll(category?: string): Promise<Integration[]> {
    const params = category ? `?category=${category}` : '';
    const response = await apiClient.get<{ integrations: Integration[] }>(`/v1/n0va1o/integrations${params}`);
    return response.integrations;
  },

  async getCategories(): Promise<Array<{ name: string; count: number }>> {
    const response = await apiClient.get<{ categories: Array<{ name: string; count: number }> }>('/v1/n0va1o/integrations/categories');
    return response.categories;
  },

  async discoverTools(query: string, maxTools: number = 5): Promise<ToolDiscoveryResult> {
    return apiClient.post('/v1/n0va1o/tools/discover', { query, max_tools: maxTools });
  },

  async listTools(): Promise<unknown[]> {
    return apiClient.get('/v1/n0va1o/tools');
  },
};

export const sessionsService = {
  async create(params: {
    agent_id: string;
    context: { user_id: string; tenant_id?: string; session_type?: string };
    tools?: string[];
    sandbox_config?: { cpu_quota: number; ram_quota: number; timeout_seconds: number; network_mode: string };
  }): Promise<Session> {
    return apiClient.post('/v1/n0va1o/sessions/create', params);
  },

  async getAll(): Promise<Session[]> {
    return apiClient.get('/v1/n0va1o/sessions');
  },

  async get(sessionId: string): Promise<Session> {
    return apiClient.get(`/v1/n0va1o/sessions/${sessionId}`);
  },

  async suspend(sessionId: string): Promise<unknown> {
    return apiClient.post(`/v1/n0va1o/sessions/${sessionId}/suspend`, {});
  },

  async resume(sessionId: string): Promise<unknown> {
    return apiClient.post(`/v1/n0va1o/sessions/${sessionId}/resume`, {});
  },
};

export const auditService = {
  async getAll(params?: { limit?: number; status?: string; since?: string }): Promise<AuditEntry[]> {
    const searchParams = new URLSearchParams();
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.status) searchParams.set('status', params.status);
    if (params?.since) searchParams.set('since', params.since);
    const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
    return apiClient.get<AuditEntry[]>(`/v1/n0va1o/audit${query}`);
  },

  async getByAgent(agentId: string): Promise<AuditEntry[]> {
    return apiClient.get<AuditEntry[]>(`/v1/n0va1o/audit/agent/${agentId}`);
  },

  async getPending(): Promise<AuditEntry[]> {
    return apiClient.get<AuditEntry[]>('/v1/n0va1o/audit/pending');
  },
};

export const escalationsService = {
  async getAll(status?: string): Promise<EscalationCase[]> {
    const params = status ? `?status=${status}` : '';
    return apiClient.get<EscalationCase[]>(`/v1/n0va1o/escalations${params}`);
  },

  async getPending(): Promise<EscalationCase[]> {
    return apiClient.get<EscalationCase[]>('/v1/n0va1o/escalations/pending');
  },

  async approve(escalationId: string): Promise<EscalationCase> {
    return apiClient.post(`/v1/n0va1o/escalations/${escalationId}/approve`, {});
  },

  async reject(escalationId: string): Promise<EscalationCase> {
    return apiClient.post(`/v1/n0va1o/escalations/${escalationId}/reject`, {});
  },

  async modify(escalationId: string, parameters: Record<string, unknown>): Promise<EscalationCase> {
    return apiClient.post(`/v1/n0va1o/escalations/${escalationId}/modify`, parameters);
  },
};

export const metricsService = {
  async getDashboard(): Promise<DashboardMetrics> {
    return apiClient.get('/v1/n0va1o/metrics/dashboard');
  },

  async getHealth(): Promise<{ status: string; checks: Record<string, unknown }> {
    return apiClient.get('/health');
  },
};

export const recipesService = {
  async compile(params: {
    session_id: string;
    recipe_name: string;
    description?: string;
    schedule?: string;
  }): Promise<unknown> {
    return apiClient.post('/v1/ai/recipes/compile', params);
  },

  async execute(recipeId: string): Promise<unknown> {
    return apiClient.get(`/v1/ai/recipes/${recipeId}/execute`);
  },
};
