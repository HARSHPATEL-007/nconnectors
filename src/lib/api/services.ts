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
  status: 'active' | 'paused' | 'degraded' | 'failed';
  permissions: Record<string, string[]>;
  autonomy_level: string;
  max_daily_actions: number;
  sandbox_enabled: boolean;
  created_at: string;
  tools_available: string[];
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
  }): Promise<Agent> {
    return apiClient.post('/v1/ai/agents/register', params);
  },

  async getAll(): Promise<Agent[]> {
    return apiClient.get('/v1/ai/agents');
  },

  async toggleStatus(agentId: string): Promise<Agent> {
    return apiClient.put(`/v1/ai/agents/${agentId}/toggle`, {});
  },
};

export const integrationsService = {
  async getAll(category?: string): Promise<Integration[]> {
    const params = category ? `?category=${category}` : '';
    const response = await apiClient.get<{ integrations: Integration[] }>(`/v1/ai/integrations${params}`);
    return response.integrations;
  },

  async getCategories(): Promise<Array<{ name: string; count: number }>> {
    const response = await apiClient.get<{ categories: Array<{ name: string; count: number }> }>('/v1/ai/integrations/categories');
    return response.categories;
  },

  async discoverTools(query: string, maxTools: number = 5): Promise<ToolDiscoveryResult> {
    return apiClient.post('/v1/ai/tools/discover', { query, max_tools: maxTools });
  },
};

export const sessionsService = {
  async create(params: {
    context: { user_id: string; tenant_id?: string; session_type?: string };
    tools?: string[];
  }): Promise<Session> {
    return apiClient.post('/v1/ai/sessions/create', params);
  },

  async get(sessionId: string): Promise<Session> {
    return apiClient.get(`/v1/ai/sessions/${sessionId}`);
  },

  async execute(sessionId: string, instruction: string): Promise<unknown> {
    return apiClient.post(`/v1/ai/sessions/${sessionId}/execute`, { instruction });
  },

  async close(sessionId: string): Promise<unknown> {
    return apiClient.delete(`/v1/ai/sessions/${sessionId}`);
  },
};

export const auditService = {
  async getAll(params?: { limit?: number; status?: string; since?: string }): Promise<AuditEntry[]> {
    const searchParams = new URLSearchParams();
    if (params?.limit) searchParams.set('limit', params.limit.toString());
    if (params?.status) searchParams.set('status', params.status);
    if (params?.since) searchParams.set('since', params.since);
    const query = searchParams.toString() ? `?${searchParams.toString()}` : '';
    const response = await apiClient.get<{ entries: AuditEntry[]; merkle_root: string }>(`/v1/ai/audit${query}`);
    return response.entries;
  },
};

export const escalationsService = {
  async getAll(status?: string): Promise<EscalationCase[]> {
    const params = status ? `?status=${status}` : '';
    const response = await apiClient.get<{ escalations: EscalationCase[] }>(`/v1/ai/escalations${params}`);
    return response.escalations;
  },

  async resolve(escalationId: string, decision: string): Promise<EscalationCase> {
    return apiClient.post(`/v1/ai/escalations/${escalationId}/resolve`, { decision });
  },
};

export const metricsService = {
  async getDashboard(): Promise<DashboardMetrics> {
    return apiClient.get('/metrics');
  },

  async getHealth(): Promise<{ status: string; checks: Record<string, unknown> }> {
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
