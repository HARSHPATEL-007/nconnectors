'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { Modal } from '@/components/ui/Modal';
import { useState } from 'react';
import { integrationCategories, Integration } from '@/data/integrations';
import { relativeTime } from '@/lib/utils';
import { useMediaQuery, useDebounce } from '@/lib/hooks';
import {
  Search,
  Plug,
  CheckCircle,
  AlertCircle,
  Clock,
  Loader2,
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
import { motion } from 'framer-motion';

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
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [localFilter, setLocalFilter] = useState('');
  const debouncedFilter = useDebounce(localFilter, 200);

  // Sync debounced filter to store
  useState(() => {
    setIntegrationFilter(debouncedFilter);
  });

  const filtered = integrations.filter((i) => {
    const matchesSearch = !integrationFilter ||
      i.name.toLowerCase().includes(integrationFilter.toLowerCase()) ||
      i.description.toLowerCase().includes(integrationFilter.toLowerCase());
    const matchesCategory = integrationCategory === 'all' || i.category === integrationCategory;
    return matchesSearch && matchesCategory;
  });

  const connectedCount = integrations.filter((i) => i.status === 'connected').length;

  const statusConfig = {
    connected: { icon: CheckCircle, color: 'text-accent-emerald', bg: 'bg-accent-emerald/10', badge: 'success' as const },
    available: { icon: Plug, color: 'text-surface-600', bg: 'bg-surface-300/30', badge: 'default' as const },
    error: { icon: AlertCircle, color: 'text-accent-rose', bg: 'bg-accent-rose/10', badge: 'error' as const },
    pending: { icon: Loader2, color: 'text-accent-amber', bg: 'bg-accent-amber/10', badge: 'warning' as const },
  };

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          {!isMobile && (
            <>
              <h1 className="text-2xl font-bold text-surface-950">Integration Catalog</h1>
              <p className="text-sm text-surface-700 mt-1">Connect and manage 1,000+ third-party applications</p>
            </>
          )}
          {isMobile && (
            <h1 className="text-lg font-bold text-surface-950">Integrations</h1>
          )}
        </div>
        <Badge variant="success" dot>{connectedCount} Connected</Badge>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-600" />
        <input
          type="text"
          placeholder="Search integrations..."
          value={localFilter}
          onChange={(e) => { setLocalFilter(e.target.value); setIntegrationFilter(e.target.value); }}
          className="input-field pl-10"
        />
      </div>

      {/* Category Pills - horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
        <button
          onClick={() => setIntegrationCategory('all')}
          className={`flex-shrink-0 px-3 py-1.5 text-xs rounded-lg transition-colors ${
            integrationCategory === 'all'
              ? 'bg-n0va-500/15 text-n0va-400 border border-n0va-500/30'
              : 'text-surface-700 hover:text-surface-900 border border-surface-400/20'
          }`}
        >
          All
        </button>
        {integrationCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Zap;
          const count = integrations.filter((i) => i.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setIntegrationCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-colors ${
                integrationCategory === cat.id
                  ? 'bg-n0va-500/15 text-n0va-400 border border-n0va-500/30'
                  : 'text-surface-700 hover:text-surface-900 border border-surface-400/20'
              }`}
            >
              <Icon size={12} />
              {!isMobile && cat.name}
              {isMobile && count}
            </button>
          );
        })}
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((integration) => {
          const config = statusConfig[integration.status];
          const StatusIcon = config.icon;
          return (
            <Card
              key={integration.id}
              hover
              glow={integration.status === 'connected'}
              className="relative overflow-hidden"
              onClick={() => setSelectedIntegration(integration)}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                integration.status === 'connected' ? 'bg-accent-emerald' :
                integration.status === 'error' ? 'bg-accent-rose' :
                integration.status === 'pending' ? 'bg-accent-amber' : 'bg-surface-400'
              }`} />

              <div className="flex items-start justify-between mb-2">
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

              <p className="text-[11px] text-surface-700 mb-3 line-clamp-2">{integration.description}</p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-1 mb-3">
                {integration.capabilities.slice(0, 3).map((cap) => (
                  <span key={cap} className="text-[9px] px-1.5 py-0.5 rounded bg-surface-200/50 text-surface-700">
                    {cap}
                  </span>
                ))}
                {integration.capabilities.length > 3 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-200/50 text-surface-600">
                    +{integration.capabilities.length - 3}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2.5 border-t border-surface-300/20">
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

      {/* Integration Detail Modal (bottom sheet on mobile) */}
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

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Status</p>
                <Badge variant={statusConfig[selectedIntegration.status].badge} className="mt-1" dot>
                  {selectedIntegration.status}
                </Badge>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Auth Type</p>
                <p className="text-xs font-medium text-surface-900 mt-1">{selectedIntegration.authType}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Accounts</p>
                <p className="text-xs font-medium text-surface-900 mt-1">{selectedIntegration.connectedAccounts}</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30">
                <p className="text-[10px] text-surface-600">Health</p>
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

            <div className="flex gap-2 pt-2">
              <Button variant="secondary" className="flex-1" onClick={() => setSelectedIntegration(null)}>
                Close
              </Button>
              {selectedIntegration.status === 'connected' ? (
                <Button variant="danger" className="flex-1" onClick={() => { disconnectIntegration(selectedIntegration.id); setSelectedIntegration(null); }}>
                  Disconnect
                </Button>
              ) : (
                <Button className="flex-1" onClick={() => { connectIntegration(selectedIntegration.id); setSelectedIntegration(null); }}>
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
