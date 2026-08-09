'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { useState } from 'react';
import { AlertTriangle, Shield, CheckCircle, XCircle, Clock, Eye, Lock, FileText, Brain, Activity } from 'lucide-react';
import { relativeTime } from '@/lib/utils';

interface EscalationCase {
  id: string;
  agentName: string;
  agentId: string;
  action: string;
  tool: string;
  riskScore: number;
  status: 'pending' | 'approved' | 'rejected' | 'modified';
  timestamp: string;
  reasoning: string[];
  dataAccessed: string[];
  parameters: Record<string, unknown>;
}

const escalationCases: EscalationCase[] = [
  {
    id: 'esc_001',
    agentName: 'Finance Automation Agent',
    agentId: 'agent_001',
    action: 'Share financial report externally',
    tool: 'drive.share_externally',
    riskScore: 0.72,
    status: 'pending',
    timestamp: new Date(Date.now() - 120000).toISOString(),
    reasoning: [
      'Detected external email domain (partner.com)',
      'File contains Q3 revenue data ($142K MRR)',
      'No previous sharing history with this recipient',
      'HITL threshold triggered (>0.7 risk score)',
    ],
    dataAccessed: ['revenue_report_q3.pdf', 'client_list.csv', 'stripe_charges_last_30d'],
    parameters: { file: 'revenue_report.pdf', recipient: 'external@partner.com', permission: 'view' },
  },
  {
    id: 'esc_002',
    agentName: 'Marketing Campaign Agent',
    agentId: 'agent_002',
    action: 'Increase campaign budget by 35%',
    tool: 'meta_ads.update_budget',
    riskScore: 0.58,
    status: 'pending',
    timestamp: new Date(Date.now() - 450000).toISOString(),
    reasoning: [
      'Current daily budget: $500 → Proposed: $675',
      'Increase exceeds 25% threshold for autonomous action',
      'Campaign performance: ROAS 3.2x (above target)',
      'Budget increase within monthly allocation',
    ],
    dataAccessed: ['meta_campaign_perf_7d.csv', 'budget_allocation_sheet'],
    parameters: { campaign: 'camp_789', budget_increase_pct: 35 },
  },
];

export function EscalationPage() {
  const [selectedCase, setSelectedCase] = useState<EscalationCase | null>(null);
  const [cases, setCases] = useState(escalationCases);

  const handleDecision = (id: string, decision: 'approved' | 'rejected') => {
    setCases((prev) => prev.map((c) => c.id === id ? { ...c, status: decision } : c));
    setSelectedCase(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">HITL Escalation Room</h1>
          <p className="text-sm text-surface-700 mt-1">Human-in-the-loop review for high-risk agent actions</p>
        </div>
        <Badge variant="warning" dot>{cases.filter(c => c.status === 'pending').length} Awaiting Review</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Cases List */}
        <div className="lg:col-span-2 space-y-4">
          {cases.map((esc) => (
            <Card
              key={esc.id}
              hover
              glow={esc.status === 'pending'}
              className={`cursor-pointer ${selectedCase?.id === esc.id ? 'glow-border-active' : ''}`}
              onClick={() => setSelectedCase(esc)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${esc.status === 'pending' ? 'bg-accent-amber/10' : esc.status === 'approved' ? 'bg-accent-emerald/10' : 'bg-accent-rose/10'}`}>
                    {esc.status === 'pending' ? <AlertTriangle size={16} className="text-accent-amber" /> :
                     esc.status === 'approved' ? <CheckCircle size={16} className="text-accent-emerald" /> :
                     <XCircle size={16} className="text-accent-rose" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-950">{esc.action}</h3>
                    <p className="text-xs text-surface-600">{esc.agentName} · {relativeTime(esc.timestamp)}</p>
                  </div>
                </div>
                <Badge
                  variant={esc.status === 'pending' ? 'warning' : esc.status === 'approved' ? 'success' : 'error'}
                  dot={esc.status === 'pending'}
                >
                  {esc.status}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-surface-700">
                <span className="flex items-center gap-1"><Lock size={10} /> Risk: {Math.round(esc.riskScore * 100)}</span>
                <span className="flex items-center gap-1"><FileText size={10} /> {esc.dataAccessed.length} files</span>
                <span className="font-mono text-n0va-400">{esc.tool}</span>
              </div>

              {esc.status === 'pending' && (
                <div className="flex gap-2 mt-3 pt-3 border-t border-surface-300/20">
                  <Button size="sm" onClick={(e) => { e.stopPropagation(); handleDecision(esc.id, 'approved'); }} icon={<CheckCircle size={12} />}>
                    Approve
                  </Button>
                  <Button size="sm" variant="danger" onClick={(e) => { e.stopPropagation(); handleDecision(esc.id, 'rejected'); }} icon={<XCircle size={12} />}>
                    Reject
                  </Button>
                  <Button size="sm" variant="ghost" onClick={(e) => { e.stopPropagation(); }} icon={<Eye size={12} />}>
                    Inspect
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-1">
          {selectedCase ? (
            <Card className="sticky top-20">
              <h3 className="text-sm font-semibold text-surface-950 mb-4">Interrogation Room</h3>

              {/* Risk Score */}
              <div className="mb-4 p-3 rounded-lg bg-surface-200/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-surface-700">Risk Assessment</span>
                  <span className={`text-lg font-bold ${selectedCase.riskScore >= 0.7 ? 'text-accent-rose' : 'text-accent-amber'}`}>
                    {Math.round(selectedCase.riskScore * 100)}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-300/50">
                  <div
                    className={`h-full rounded-full ${selectedCase.riskScore >= 0.7 ? 'bg-accent-rose' : 'bg-accent-amber'}`}
                    style={{ width: `${selectedCase.riskScore * 100}%` }}
                  />
                </div>
              </div>

              {/* Agent Reasoning */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-surface-900 mb-2 flex items-center gap-1">
                  <Brain size={12} /> Agent Reasoning
                </h4>
                <div className="space-y-1.5">
                  {selectedCase.reasoning.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-surface-700">
                      <span className="text-n0va-400 mt-0.5">›</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Accessed */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-surface-900 mb-2 flex items-center gap-1">
                  <Activity size={12} /> Data Accessed
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedCase.dataAccessed.map((d) => (
                    <Badge key={d} variant="outline" size="sm">{d}</Badge>
                  ))}
                </div>
              </div>

              {/* Parameters */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-surface-900 mb-2">Parameters</h4>
                <pre className="text-[10px] font-mono bg-surface-200/30 rounded-lg p-2 text-surface-700 overflow-x-auto">
                  {JSON.stringify(selectedCase.parameters, null, 2)}
                </pre>
              </div>
            </Card>
          ) : (
            <Card className="flex flex-col items-center justify-center py-12 text-center">
              <Shield size={32} className="text-surface-500 mb-3" />
              <p className="text-sm text-surface-700">Select an escalation case to inspect</p>
              <p className="text-xs text-surface-600 mt-1">Review agent reasoning, data access, and parameters</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
