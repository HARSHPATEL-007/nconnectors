'use client';

import { useAppStore } from '@/store/useAppStore';
import { useDataFetcher } from '@/lib/hooks/useDataFetcher';
import { DashboardPage } from '@/components/dashboard/DashboardPage';
import { IntegrationsPage } from '@/components/integrations/IntegrationsPage';
import { AgentsPage } from '@/components/agents/AgentsPage';
import { SessionsPage } from '@/components/agents/SessionsPage';
import { AuditPage } from '@/components/agents/AuditPage';
import { InterrogationRoom } from '@/components/agents/InterrogationRoom';
import { SettingsPage } from '@/components/agents/SettingsPage';

export default function Home() {
  const { activePage } = useAppStore();
  useDataFetcher();

  const pages: Record<string, React.ReactNode> = {
    dashboard: <DashboardPage />,
    integrations: <IntegrationsPage />,
    agents: <AgentsPage />,
    sessions: <SessionsPage />,
    audit: <AuditPage />,
    escalation: <InterrogationRoom />,
    interrogation: <InterrogationRoom />,
    settings: <SettingsPage />,
  };

  return pages[activePage] || <DashboardPage />;
}
