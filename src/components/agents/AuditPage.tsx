'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useAppStore } from '@/store/useAppStore';
import { relativeTime, getRiskLabel } from '@/lib/utils';
import { useState } from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Clock, Filter } from 'lucide-react';

export function AuditPage() {
  const { auditEntries, auditFilter, setAuditFilter } = useAppStore();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? auditEntries
    : auditEntries.filter((e) => e.status === filter);

  const statusIcons = {
    success: <CheckCircle size={12} className="text-accent-emerald" />,
    failed: <XCircle size={12} className="text-accent-rose" />,
    blocked: <AlertTriangle size={12} className="text-accent-amber" />,
    pending_approval: <Clock size={12} className="text-accent-blue" />,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">Audit Trail</h1>
          <p className="text-sm text-surface-700 mt-1">Immutable record of every agent action with cryptographic integrity</p>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-accent-emerald" />
          <span className="text-xs text-surface-700">SHA3-512 · Merkle anchored</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        <Filter size={14} className="text-surface-600" />
        {['all', 'success', 'failed', 'blocked', 'pending_approval'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
              filter === f
                ? 'bg-n0va-500/15 text-n0va-400 border border-n0va-500/30'
                : 'text-surface-700 hover:text-surface-900 hover:bg-surface-300/30'
            }`}
          >
            {f === 'all' ? 'All' : f.replace('_', ' ')}
            <span className="ml-1 opacity-60">
              ({f === 'all' ? auditEntries.length : auditEntries.filter((e) => e.status === f).length})
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <Card className="overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-300/20">
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Time</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Agent</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Tool</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Action</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Result</th>
                <th className="text-left text-[10px] font-semibold text-surface-600 uppercase tracking-wider px-4 py-3">Risk</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((entry) => (
                <tr key={entry.id} className="border-b border-surface-300/10 hover:bg-surface-200/20 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {statusIcons[entry.status]}
                      <span className="text-xs capitalize text-surface-800">{entry.status.replace('_', ' ')}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-surface-700">{relativeTime(entry.timestamp)}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-surface-900 font-medium">{entry.agentName}</span>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-[10px] text-n0va-400 font-mono">{entry.toolName}</code>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-surface-800">{entry.action}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-surface-700 max-w-[200px] truncate block">{entry.result}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={entry.riskScore >= 0.7 ? 'error' : entry.riskScore >= 0.4 ? 'warning' : 'success'}
                      size="sm"
                    >
                      {getRiskLabel(entry.riskScore)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
