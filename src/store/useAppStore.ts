import { create } from 'zustand';
import { agentsService, integrationsService, sessionsService, auditService, escalationsService, metricsService } from '@/lib/api';

interface Integration {
  id: string;
  provider: string;
  name: string;
  category: string;
  description: string;
  auth_types: string[];
  capabilities: string[];
  status?: 'connected' | 'available' | 'error' | 'pending';
}

interface Agent {
  agent_id: string;
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'active' | 'paused' | 'degraded' | 'failed' | 'error';
  permissions: string[];
  autonomy_level: 'low' | 'medium' | 'high' | 'full';
  max_daily_actions: number;
  sandbox_enabled: boolean;
  created_at: string;
  tools_available: string[];
  toolsAvailable: number;
  toolsUsed: number;
  successRate: number;
  model: string;
  approvalRequired: string[];
  api_key: string;
}

interface SessionStep {
  step: number;
  action: string;
  tool: string;
  status: 'completed' | 'running' | 'failed' | 'pending';
  latencyMs: number;
}

interface Session {
  session_id: string;
  id: string;
  agent_id: string;
  agentName: string;
  status: 'running' | 'completed' | 'paused' | 'failed' | 'waiting_approval';
  tools_injected: string[];
  current_step: number;
  currentStep: number;
  totalSteps: number;
  context: string;
  type: string;
  steps: SessionStep[];
  startTime: string;
  tokensUsed: number;
  latencyMs: number;
  riskScore: number;
  created_at: string;
  expires_at: string;
}

interface AuditEntry {
  id: string;
  timestamp: string;
  agent_name: string;
  agentName: string;
  tool_name: string;
  toolName: string;
  status: 'success' | 'failed' | 'blocked' | 'pending_approval';
  result_summary: string;
  action: string;
  result: string;
  latency_ms: number;
  risk_score: number;
  riskScore: number;
}

interface EscalationCase {
  id: string;
  risk_level: string;
  risk_score: number;
  status: string;
  action: { tool_name: string; description: string; parameters: Record<string, unknown> };
  agent_reasoning: string[];
  created_at: string;
  timeout_at: string;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
}

interface AppState {
  sidebarOpen: boolean;
  activePage: string;
  pageHistory: string[];
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActivePage: (page: string) => void;
  goBack: () => void;

  isOnline: boolean;
  setIsOnline: (online: boolean) => void;

  integrations: Integration[];
  selectedIntegration: Integration | null;
  integrationFilter: string;
  integrationCategory: string;
  setIntegrations: (integrations: Integration[]) => void;
  setSelectedIntegration: (integration: Integration | null) => void;
  setIntegrationFilter: (filter: string) => void;
  setIntegrationCategory: (category: string) => void;
  fetchIntegrations: () => Promise<void>;
  connectIntegration: (id: string) => void;
  disconnectIntegration: (id: string) => void;

  agents: Agent[];
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent | null) => void;
  toggleAgentStatus: (id: string) => Promise<void>;
  fetchAgents: () => Promise<void>;

  sessions: Session[];
  selectedSession: Session | null;
  setSelectedSession: (session: Session | null) => void;
  fetchSessions: () => Promise<void>;

  auditEntries: AuditEntry[];
  auditFilter: string;
  setAuditFilter: (filter: string) => void;
  fetchAuditEntries: () => Promise<void>;

  escalations: EscalationCase[];
  fetchEscalations: () => Promise<void>;
  resolveEscalation: (id: string, decision: string) => Promise<void>;

  dashboardMetrics: { agents: number; sessions: number; connections: number; auditEntries: number; escalations: number } | null;
  fetchDashboardMetrics: () => Promise<void>;

  loading: Record<string, boolean>;
  errors: Record<string, string | null>;

  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  dismissNotification: (id: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  sidebarOpen: true,
  activePage: 'dashboard',
  pageHistory: ['dashboard'],
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActivePage: (page) => set((state) => ({
    activePage: page,
    pageHistory: [...state.pageHistory, page],
  })),
  goBack: () => set((state) => {
    const history = state.pageHistory.slice(0, -1);
    const previous = history[history.length - 1] || 'dashboard';
    return { activePage: previous, pageHistory: history };
  }),

  isOnline: true,
  setIsOnline: (online) => set({ isOnline: online }),

  integrations: [],
  selectedIntegration: null,
  integrationFilter: '',
  integrationCategory: 'all',
  setIntegrations: (integrations) => set({ integrations }),
  setSelectedIntegration: (integration) => set({ selectedIntegration: integration }),
  setIntegrationFilter: (filter) => set({ integrationFilter: filter }),
  setIntegrationCategory: (category) => set({ integrationCategory: category }),
  fetchIntegrations: async () => {
    set((state) => ({ loading: { ...state.loading, integrations: true }, errors: { ...state.errors, integrations: null } }));
    try {
      const category = get().integrationCategory;
      const data = await integrationsService.getAll(category === 'all' ? undefined : category);
      set({ integrations: data, loading: { ...get().loading, integrations: false } });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, integrations: err instanceof Error ? err.message : 'Failed to fetch integrations' },
        loading: { ...state.loading, integrations: false },
      }));
    }
  },
  connectIntegration: (id) => set((state) => ({
    integrations: state.integrations.map((i) =>
      i.id === id ? { ...i, status: 'connected' as const } : i
    ),
  })),
  disconnectIntegration: (id) => set((state) => ({
    integrations: state.integrations.map((i) =>
      i.id === id ? { ...i, status: 'available' as const } : i
    ),
  })),

  agents: [],
  selectedAgent: null,
  setSelectedAgent: (agent) => set({ selectedAgent: agent }),
  toggleAgentStatus: async (agentId) => {
    try {
      await agentsService.toggleStatus(agentId);
      set((state) => ({
        agents: state.agents.map((a) =>
          a.agent_id === agentId
            ? { ...a, status: a.status === 'active' ? 'paused' as const : 'active' as const }
            : a
        ),
      }));
      get().addNotification({ type: 'success', title: 'Agent Updated', message: 'Agent status changed' });
    } catch (err) {
      get().addNotification({ type: 'error', title: 'Failed', message: err instanceof Error ? err.message : 'Failed to toggle agent' });
    }
  },
  fetchAgents: async () => {
    set((state) => ({ loading: { ...state.loading, agents: true }, errors: { ...state.errors, agents: null } }));
    try {
      const data = await agentsService.getAll();
      const normalized = data.map((a) => ({
        agent_id: a.agent_id,
        id: a.agent_id,
        name: a.name,
        type: a.type,
        description: a.description,
        status: a.status,
        permissions: Object.values(a.permissions).flat(),
        autonomy_level: a.autonomy_level as Agent['autonomy_level'],
        max_daily_actions: a.max_daily_actions,
        sandbox_enabled: a.sandbox_enabled,
        tools_available: a.tools_available,
        toolsAvailable: a.tools_available.length,
        toolsUsed: 0,
        successRate: 0.95,
        model: 'claude-3-5-sonnet',
        approvalRequired: [],
        created_at: a.created_at,
        api_key: a.api_key,
      }));
      set({ agents: normalized, loading: { ...get().loading, agents: false } });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, agents: err instanceof Error ? err.message : 'Failed to fetch agents' },
        loading: { ...state.loading, agents: false },
      }));
    }
  },

  sessions: [],
  selectedSession: null,
  setSelectedSession: (session) => set({ selectedSession: session }),
  fetchSessions: async () => {
    set((state) => ({ loading: { ...state.loading, sessions: true }, errors: { ...state.errors, sessions: null } }));
    try {
      set({ sessions: [], loading: { ...get().loading, sessions: false } });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, sessions: err instanceof Error ? err.message : 'Failed to fetch sessions' },
        loading: { ...state.loading, sessions: false },
      }));
    }
  },

  auditEntries: [],
  auditFilter: 'all',
  setAuditFilter: (filter) => set({ auditFilter: filter }),
  fetchAuditEntries: async () => {
    set((state) => ({ loading: { ...state.loading, audit: true }, errors: { ...state.errors, audit: null } }));
    try {
      const filter = get().auditFilter;
      const data = await auditService.getAll({ status: filter === 'all' ? undefined : filter, limit: 50 });
      const normalized = data.map((e) => ({
        ...e,
        agentName: e.agent_name,
        toolName: e.tool_name,
        action: e.result_summary,
        result: e.result_summary,
        riskScore: e.risk_score,
        status: e.status as AuditEntry['status'],
      }));
      set({ auditEntries: normalized, loading: { ...get().loading, audit: false } });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, audit: err instanceof Error ? err.message : 'Failed to fetch audit entries' },
        loading: { ...state.loading, audit: false },
      }));
    }
  },

  escalations: [],
  fetchEscalations: async () => {
    set((state) => ({ loading: { ...state.loading, escalations: true }, errors: { ...state.errors, escalations: null } }));
    try {
      const data = await escalationsService.getAll();
      set({ escalations: data, loading: { ...get().loading, escalations: false } });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, escalations: err instanceof Error ? err.message : 'Failed to fetch escalations' },
        loading: { ...state.loading, escalations: false },
      }));
    }
  },
  resolveEscalation: async (id, decision) => {
    try {
      await escalationsService.resolve(id, decision);
      set((state) => ({
        escalations: state.escalations.map((e) =>
          e.id === id ? { ...e, status: decision === 'approve' ? 'approved' : 'rejected' } : e
        ),
      }));
      get().addNotification({ type: 'success', title: 'Escalation Resolved', message: `Escalation ${decision}d successfully` });
    } catch (err) {
      get().addNotification({ type: 'error', title: 'Failed', message: err instanceof Error ? err.message : 'Failed to resolve escalation' });
    }
  },

  dashboardMetrics: null,
  fetchDashboardMetrics: async () => {
    set((state) => ({ loading: { ...state.loading, metrics: true }, errors: { ...state.errors, metrics: null } }));
    try {
      const data = await metricsService.getDashboard();
      set({
        dashboardMetrics: {
          agents: data.agents.total,
          sessions: data.sessions.total,
          connections: data.connections.active,
          auditEntries: data.auditEntries.total,
          escalations: data.escalations.pending,
        },
        loading: { ...get().loading, metrics: false },
      });
    } catch (err) {
      set((state) => ({
        errors: { ...state.errors, metrics: err instanceof Error ? err.message : 'Failed to fetch metrics' },
        loading: { ...state.loading, metrics: false },
      }));
    }
  },

  loading: {},
  errors: {},

  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [
      { ...notification, id: Math.random().toString(36).slice(2), timestamp: new Date().toISOString() },
      ...state.notifications,
    ].slice(0, 10),
  })),
  dismissNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
}));
