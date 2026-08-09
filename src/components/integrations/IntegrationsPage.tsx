'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { Modal } from '@/components/ui/Modal';
import { useState } from 'react';
import { integrationCategories, Integration } from '@/data/integrations';
import { relativeTime } from '@/lib/utils';
import {
  Search,
  Plug,
  CheckCircle,
  AlertCircle,
  Clock,
  Loader2,
  ExternalLink,
  RefreshCw,
  Power,
  Shield,
} from 'lucide-react';
import {
  Megaphone,
  Users,
  BarChart3,
  MessageCircle,
  HardDrive,
  Code,
  DollarSign,
  ShoppingCart,
  Briefcase,
  Share2,
  Brain,
  Zap,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  megaphone: Megaphone,
  users: Users,
  'bar-chart': BarChart3,
  'message-circle': MessageCircle,
  'hard-drive': HardDrive,
  code: Code,
  'dollar-sign': DollarSign,
  'shopping-cart': ShoppingCart,
  briefcase: Briefcase,
  'share-2': Share2,
  brain: Brain,
  zap: Zap,
};

export function IntegrationsPage() {
  const { integrations, selectedIntegration, setSelectedIntegration, integrationFilter, setIntegrationFilter, integrationCategory, setIntegrationCategory, connectIntegration, disconnectIntegration } = useAppStore();
  const [showConnect, setShowConnect] = useState(false);

  const filtered = integrations.filter((i) => {
    const matchesSearch = i.name.toLowerCase().includes(integrationFilter.toLowerCase()) ||
      i.description.toLowerCase().includes(integrationFilter.toLowerCase());
    const matchesCategory = integrationCategory === 'all' || i.category === integrationCategory;
    return matchesSearch && matchesCategory;
  });

  const connectedCount = integrations.filter((i) => i.status === 'connected').length;
  const availableCount = integrations.filter((i) => i.status === 'available').length;
  const errorCount = integrations.filter((i) => i.status === 'error').length;

  const statusConfig = {
    connected: { icon: CheckCircle, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10', badge: 'success' as const },
    available: { icon: Plug, color: 'text-surface-600', bg: 'bg-surface-300/30', badge: 'default' as const },
    error: { icon: AlertCircle, color: 'text-accent-rose', bg: 'bg-accent-rose/10', badge: 'error' as const },
    pending: { icon: Loader2, color: 'text-accent-amber', bg: 'bg-accent-amber/10', badge: 'warning' as const },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">Integration Catalog</h1>
          <p className="text-sm text-surface-700 mt-1">Connect and manage 1,000+ third-party applications</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" dot>{connectedCount} Connected</Badge>
          {errorCount > 0 && <Badge variant="error">{errorCount} Error</Badge>}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-600" />
          <input
            type="text"
            placeholder="Search integrations..."
            value={integrationFilter}
            onChange={(e) => setIntegrationFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-surface-200/50 border border-surface-300/30 rounded-xl text-surface-900 placeholder:text-surface-600 focus:outline-none focus:border-n0va-500/40 transition-all"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setIntegrationCategory('all')}
          className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
            integrationCategory === 'all'
              ? 'bg-n0va-500/15 text-n0va-400 border border-n0va-500/30'
              : 'text-surface-700 hover:text-surface-900 hover:bg-surface-300/30 border border-transparent'
          }`}
        >
          All ({integrations.length})
        </button>
        {integrationCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Zap;
          const count = integrations.filter((i) => i.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setIntegrationCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-colors ${
                integrationCategory === cat.id
                  ? 'bg-n0va-500/15 text-n0va-400 border border-n0va-500/30'
                  : 'text-surface-700 hover:text-surface-900 hover:bg-surface-300/30 border border-transparent'
              }`}
            >
              <Icon size={12} />
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((integration) => {
          const config = statusConfig[integration.status];
          const StatusIcon = config.icon;
          return (
            <Card
              key={integration.id}
              hover
              glow={integration.status === 'connected'}
              className="cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedIntegration(integration)}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                integration.status === 'connected' ? 'bg-accent-emerald' :
                integration.status === 'error' ? 'bg-accent-rose' :
                integration.status === 'pending' ? 'bg-accent-amber' : 'bg-surface-400'
              }`} />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center font-bold text-xs ${config.color}`}>
                    {integration.icon.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-950">{integration.name}</h3>
                    <p className="text-[10px] text-surface-600">{integration.subcategory}</p>
                  </div>
                </div>
                <StatusIcon size={14} className={config.color} />
              </div>

              <p className="text-xs text-surface-700 mb-3 line-clamp-2">{integration.description}</p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-1 mb-3">
                {integration.capabilities.slice(0, 3).map((cap) => (
                  <span key={cap} className="text-[10px] px-1.5 py-0.5 rounded bg-surface-200/50 text-surface-700">
                    {cap}
                  </span>
                ))}
                {integration.capabilities.length > 3 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-200/50 text-surface-600">
                    +{integration.capabilities.length - 3}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-surface-300/20">
                <div className="flex items-center gap-2">
                  {integration.status === 'connected' && (
                    <>
                      <span className="text-[10px] text-surface-600">{integration.connectedAccounts} accounts</span>
                      {integration.lastSync && (
                        <span className="text-[10px] text-surface-600">· {relativeTime(integration.lastSync)}</span>
                      )}
                    </>
                  )}
                  {integration.status === 'available' && (
                    <span className="text-[10px] text-surface-600">{integration.authType}</span>
                  )}
                  {integration.status === 'error' && (
                    <span className="text-[10px] text-accent-rose">Connection failed</span>
                  )}
                </div>
                {integration.healthScore !== undefined && (
                  <span className={`text-[10px] font-medium ${
                    integration.healthScore >= 0.9 ? 'text-accent-emerald' :
                    integration.healthScore >= 0.7 ? 'text-accent-amber' : 'text-accent-rose'
                  }`}>
                    {Math.round(integration.healthScore * 100)}%
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Integration Detail Modal */}
      <Modal
        open={!!selectedIntegration}
        onClose={() => setSelectedIntegration(null)}
        size="md"
        title={selectedIntegration?.name || ''}
        subtitle={selectedIntegration?.subcategory}
      >
        {selectedIntegration && (
          <div className="space-y-4">
            <p className="text-sm text-surface-700">{selectedIntegration.description}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Status</p>
                <Badge variant={statusConfig[selectedIntegration.status].badge} className="mt-1" dot>
                  {selectedIntegration.status}
                </Badge>
              </div>
              <div className="p-3 rounded-lg bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Auth Type</p>
                <p className="text-xs font-medium text-surface-900 mt-1">{selectedIntegration.authType}</p>
              </div>
              <div className="p-3 rounded-lg bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Connected Accounts</p>
                <p className="text-xs font-medium text-surface-900 mt-1">{selectedIntegration.connectedAccounts}</p>
              </div>
              <div className="p-3 rounded-lg bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Health Score</p>
                <p className="text-xs font-medium text-surface-900 mt-1">
                  {selectedIntegration.healthScore ? `${Math.round(selectedIntegration.healthScore * 100)}%` : 'N/A'}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-surface-900 mb-2">Capabilities</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedIntegration.capabilities.map((cap) => (
                  <Badge key={cap} variant="info" size="sm">{cap}</Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={() => setSelectedIntegration(null)}>Close</Button>
              {selectedIntegration.status === 'connected' ? (
                <Button variant="danger" onClick={() => { disconnectIntegration(selectedIntegration.id); setSelectedIntegration(null); }}>
                  Disconnect
                </Button>
              ) : (
                <Button onClick={() => { connectIntegration(selectedIntegration.id); setSelectedIntegration(null); }}>
                  Connect
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
