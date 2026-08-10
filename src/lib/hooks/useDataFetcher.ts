'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

export function useDataFetcher() {
  const fetchIntegrations = useAppStore((s) => s.fetchIntegrations);
  const fetchAgents = useAppStore((s) => s.fetchAgents);
  const fetchAuditEntries = useAppStore((s) => s.fetchAuditEntries);
  const fetchEscalations = useAppStore((s) => s.fetchEscalations);
  const fetchDashboardMetrics = useAppStore((s) => s.fetchDashboardMetrics);
  const activePage = useAppStore((s) => s.activePage);

  useEffect(() => {
    fetchDashboardMetrics();
    fetchIntegrations();
    fetchAgents();
    fetchAuditEntries();
    fetchEscalations();
  }, []);

  useEffect(() => {
    switch (activePage) {
      case 'integrations':
        fetchIntegrations();
        break;
      case 'agents':
        fetchAgents();
        break;
      case 'sessions':
        fetchAgents();
        break;
      case 'audit':
        fetchAuditEntries();
        break;
      case 'escalation':
        fetchEscalations();
        break;
      case 'dashboard':
        fetchDashboardMetrics();
        break;
    }
  }, [activePage]);
}
