'use client';

import { useAppStore } from '@/store/useAppStore';
import { DashboardPage } from '@/components/dashboard/DashboardPage';
import { IntegrationsPage } from '@/components/integrations/IntegrationsPage';
import { AgentsPage } from '@/components/agents/AgentsPage';
import { SessionsPage } from '@/components/agents/SessionsPage';
import { AuditPage } from '@/components/agents/AuditPage';
import { EscalationPage } from '@/components/agents/EscalationPage';
import { SettingsPage } from '@/components/agents/SettingsPage';

export default function Home() {
  const { activePage } = useAppStore();

  const pages: Record<string, React.ReactNode> = {
    dashboard: <DashboardPage />,
    integrations: <IntegrationsPage />,
    agents: <AgentsPage />,
    sessions: <SessionsPage />,
    audit: <AuditPage />,
    escalation: <EscalationPage />,
    settings: <SettingsPage />,
  };

  return pages[activePage] || <DashboardPage />;
}
