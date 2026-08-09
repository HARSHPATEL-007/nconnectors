import { create } from 'zustand';
import { integrations, Integration } from '@/data/integrations';
import { agents, Agent } from '@/data/agents';
import { sessions, Session } from '@/data/sessions';
import { auditEntries, AuditEntry } from '@/data/audit';

interface AppState {
  // Navigation
  sidebarOpen: boolean;
  activePage: string;
  pageHistory: string[];
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setActivePage: (page: string) => void;
  goBack: () => void;
  // Network
  isOnline: boolean;
  setIsOnline: (online: boolean) => void;

  // Integrations
  integrations: Integration[];
  selectedIntegration: Integration | null;
  integrationFilter: string;
  integrationCategory: string;
  setIntegrations: (integrations: Integration[]) => void;
  setSelectedIntegration: (integration: Integration | null) => void;
  setIntegrationFilter: (filter: string) => void;
  setIntegrationCategory: (category: string) => void;
  connectIntegration: (id: string) => void;
  disconnectIntegration: (id: string) => void;

  // Agents
  agents: Agent[];
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent | null) => void;
  toggleAgentStatus: (id: string) => void;

  // Sessions
  sessions: Session[];
  selectedSession: Session | null;
  setSelectedSession: (session: Session | null) => void;

  // Audit
  auditEntries: AuditEntry[];
  auditFilter: string;
  setAuditFilter: (filter: string) => void;

  // Notifications
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  dismissNotification: (id: string) => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Navigation
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
  // Network
  isOnline: true,
  setIsOnline: (online) => set({ isOnline: online }),

  // Integrations
  integrations: integrations,
  selectedIntegration: null,
  integrationFilter: '',
  integrationCategory: 'all',
  setIntegrations: (integrations) => set({ integrations }),
  setSelectedIntegration: (integration) => set({ selectedIntegration: integration }),
  setIntegrationFilter: (filter) => set({ integrationFilter: filter }),
  setIntegrationCategory: (category) => set({ integrationCategory: category }),
  connectIntegration: (id) => set((state) => ({
    integrations: state.integrations.map((i) =>
      i.id === id ? { ...i, status: 'connected' as const, connectedAccounts: i.connectedAccounts + 1, lastSync: new Date().toISOString() } : i
    ),
  })),
  disconnectIntegration: (id) => set((state) => ({
    integrations: state.integrations.map((i) =>
      i.id === id ? { ...i, status: 'available' as const, connectedAccounts: Math.max(0, i.connectedAccounts - 1) } : i
    ),
  })),

  // Agents
  agents: agents,
  selectedAgent: null,
  setSelectedAgent: (agent) => set({ selectedAgent: agent }),
  toggleAgentStatus: (id) => set((state) => ({
    agents: state.agents.map((a) => {
      if (a.id !== id) return a;
      if (a.status === 'active') return { ...a, status: 'paused' as const };
      if (a.status === 'paused') return { ...a, status: 'active' as const };
      return a;
    }),
  })),

  // Sessions
  sessions: sessions,
  selectedSession: null,
  setSelectedSession: (session) => set({ selectedSession: session }),

  // Audit
  auditEntries: auditEntries,
  auditFilter: 'all',
  setAuditFilter: (filter) => set({ auditFilter: filter }),

  // Notifications
  notifications: [
    { id: '1', type: 'warning', title: 'HITL Escalation', message: 'Finance Agent requires approval for external sharing', timestamp: new Date(Date.now() - 120000).toISOString() },
    { id: '2', type: 'error', title: 'Connection Failed', message: 'Twilio API returned 401 — token expired', timestamp: new Date(Date.now() - 600000).toISOString() },
    { id: '3', type: 'success', title: 'Recipe Compiled', message: 'Q3 Invoice Sync recipe deployed successfully', timestamp: new Date(Date.now() - 900000).toISOString() },
  ],
  addNotification: (notification) => set((state) => ({
    notifications: [
      { ...notification, id: Math.random().toString(36).slice(2), timestamp: new Date().toISOString() },
      ...state.notifications,
    ],
  })),
  dismissNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((n) => n.id !== id),
  })),
}));
