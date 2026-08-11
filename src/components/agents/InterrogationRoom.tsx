'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { useState, useEffect, useCallback } from 'react';
import {
  AlertTriangle,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Lock,
  FileText,
  Brain,
  Activity,
  Search,
  ChevronRight,
  Zap,
  MessageSquare,
  Database,
  GitBranch,
  Timer,
  User,
  Hash,
  AlertCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { relativeTime } from '@/lib/utils';
import { escalationsService } from '@/lib/api';

interface EscalationCase {
  escalation_id: string;
  agent_id: string;
  agent_name: string;
  action: string;
  tool_name: string;
  risk_score: number;
  status: 'pending' | 'approved' | 'rejected' | 'modified';
  reasoning: string[];
  data_accessed: string[];
  parameters: Record<string, unknown>;
  created_at: string;
  timeout_at: string;
}

const mockEscalations: EscalationCase[] = [
  {
    escalation_id: 'esc_001',
    agent_id: 'agent_001',
    agent_name: 'Finance Automation Agent',
    action: 'Share Q3 revenue report externally',
    tool_name: 'drive.share_externally',
    risk_score: 0.82,
    status: 'pending',
    created_at: new Date(Date.now() - 120000).toISOString(),
    timeout_at: new Date(Date.now() + 14400000).toISOString(),
    reasoning: [
      'Detected external email domain (partner.com) — not in approved list',
      'File contains Q3 revenue data ($142K MRR, 23% MoM growth)',
      'No previous sharing history with this recipient domain',
      'HITL threshold triggered (risk score 0.82 > 0.7)',
      'Compliance policy: External financial data requires human approval',
    ],
    data_accessed: [
      'revenue_report_q3_2026.pdf',
      'client_list_active.csv',
      'stripe_charges_last_30d.json',
      'n0va_sheets_q3_summary',
    ],
    parameters: {
      file: 'revenue_report_q3_2026.pdf',
      recipient: 'external@partner.com',
      permission: 'view',
      expiry: '7_days',
      watermark: true,
    },
  },
  {
    escalation_id: 'esc_002',
    agent_id: 'agent_002',
    agent_name: 'Marketing Campaign Agent',
    action: 'Increase Meta Ads budget by 35%',
    tool_name: 'meta_ads.update_budget',
    risk_score: 0.65,
    status: 'pending',
    created_at: new Date(Date.now() - 450000).toISOString(),
    timeout_at: new Date(Date.now() + 14400000).toISOString(),
    reasoning: [
      'Current daily budget: $500 → Proposed: $675 (+35%)',
      'Increase exceeds 25% autonomous action threshold',
      'Campaign performance: ROAS 3.2x (above 2.5x target)',
      'Monthly allocation remaining: $8,500 of $15,000',
      'Similar increases approved in past 3 months',
    ],
    data_accessed: [
      'meta_campaign_perf_7d.csv',
      'budget_allocation_sheet',
      'roas_historical_data',
    ],
    parameters: {
      campaign_id: 'camp_789_q3_awareness',
      budget_increase_pct: 35,
      new_daily_budget: 675,
      reason: 'Strong ROAS performance, scaling winner',
    },
  },
  {
    escalation_id: 'esc_003',
    agent_id: 'agent_003',
    agent_name: 'DevOps Automation',
    action: 'Merge pull request #1423 to production',
    tool_name: 'github.merge_pull_request',
    risk_score: 0.71,
    status: 'pending',
    created_at: new Date(Date.now() - 60000).toISOString(),
    timeout_at: new Date(Date.now() + 14400000).toISOString(),
    reasoning: [
      'PR modifies authentication middleware (high-risk code path)',
      'CI checks: 47/47 passed, 0 warnings',
      'Code review: 2 approvals (minimum met)',
      'No database migrations detected',
      'Deployment window: outside peak hours (2:00 AM UTC)',
    ],
    data_accessed: [
      'github.com/n0va/core-service/pull/1423',
      'ci_build_logs_20260811',
      'code_coverage_report',
    ],
    parameters: {
      repository: 'n0va/core-service',
      pull_request: 1423,
      merge_method: 'squash',
      delete_branch: true,
    },
  },
];

export function InterrogationRoom() {
  const [cases, setCases] = useState<EscalationCase[]>(mockEscalations);
  const [selectedCase, setSelectedCase] = useState<EscalationCase | null>(null);
  const [activeTab, setActiveTab] = useState<'reasoning' | 'data' | 'parameters' | 'timeline'>('reasoning');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const pendingCount = cases.filter(c => c.status === 'pending').length;

  const handleApprove = useCallback((id: string) => {
    setCases(prev => prev.map(c =>
      c.escalation_id === id ? { ...c, status: 'approved' as const } : c
    ));
    setSelectedCase(null);
    setShowApproveModal(false);
  }, []);

  const handleReject = useCallback((id: string) => {
    setCases(prev => prev.map(c =>
      c.escalation_id === id ? { ...c, status: 'rejected' as const } : c
    ));
    setSelectedCase(null);
    setShowRejectModal(false);
  }, []);

  const filteredCases = cases.filter(c => filter === 'all' || c.status === filter);

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-950 flex items-center gap-2">
            <Shield size={24} className="text-n0va-400" />
            Interrogation Room
          </h1>
          <p className="text-sm text-surface-700 mt-1">
            Human-in-the-loop review — high-risk agent actions requiring approval
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="warning" dot size="lg">
            {pendingCount} Awaiting Review
          </Badge>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 p-1 bg-surface-200/50 rounded-lg w-fit">
        {(['all', 'pending', 'approved', 'rejected'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              filter === f
                ? 'bg-white text-surface-950 shadow-sm'
                : 'text-surface-600 hover:text-surface-900'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f === 'pending' && pendingCount > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 bg-accent-amber/20 text-accent-amber rounded-full text-[10px]">
                {pendingCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Cases List */}
        <div className="lg:col-span-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((esc) => (
              <motion.div
                key={esc.escalation_id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  hover
                  glow={esc.status === 'pending'}
                  className={`cursor-pointer transition-all ${
                    selectedCase?.escalation_id === esc.id ? 'ring-2 ring-n0va-400/50' : ''
                  } ${esc.status !== 'pending' ? 'opacity-70' : ''}`}
                  onClick={() => setSelectedCase(esc)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        esc.status === 'pending' ? 'bg-accent-amber/10' :
                        esc.status === 'approved' ? 'bg-accent-emerald/10' :
                        'bg-accent-rose/10'
                      }`}>
                        {esc.status === 'pending' ? <AlertTriangle size={16} className="text-accent-amber" /> :
                         esc.status === 'approved' ? <CheckCircle size={16} className="text-accent-emerald" /> :
                         <XCircle size={16} className="text-accent-rose" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-surface-950">{esc.action}</h3>
                        <p className="text-xs text-surface-600 flex items-center gap-1">
                          <Bot size={10} /> {esc.agent_name} · {relativeTime(esc.created_at)}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={esc.status === 'pending' ? 'warning' : esc.status === 'approved' ? 'success' : 'error'}
                      dot={esc.status === 'pending'}
                    >
                      {esc.status}
                    </Badge>
                  </div>

                  {/* Risk Bar */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-surface-600">Risk Score</span>
                      <span className={`text-xs font-bold ${
                        esc.risk_score >= 0.7 ? 'text-accent-rose' :
                        esc.risk_score >= 0.4 ? 'text-accent-amber' : 'text-accent-emerald'
                      }`}>
                        {Math.round(esc.risk_score * 100)}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-surface-300/50">
                      <div
                        className={`h-full rounded-full transition-all ${
                          esc.risk_score >= 0.7 ? 'bg-accent-rose' :
                          esc.risk_score >= 0.4 ? 'bg-accent-amber' : 'bg-accent-emerald'
                        }`}
                        style={{ width: `${esc.risk_score * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[10px] text-surface-600">
                    <span className="flex items-center gap-1">
                      <Database size={9} /> {esc.dataAccessed.length} files
                    </span>
                    <span className="flex items-center gap-1">
                      <Brain size={9} /> {esc.reasoning.length} reasons
                    </span>
                    <span className="font-mono text-n0va-400">{esc.tool_name}</span>
                  </div>

                  {/* Action Buttons */}
                  {esc.status === 'pending' && (
                    <div className="flex gap-2 mt-3 pt-3 border-t border-surface-300/20">
                      <Button
                        size="sm"
                        onClick={(e) => { e.stopPropagation(); setSelectedCase(esc); setShowApproveModal(true); }}
                        icon={<CheckCircle size={12} />}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={(e) => { e.stopPropagation(); setSelectedCase(esc); setShowRejectModal(true); }}
                        icon={<XCircle size={12} />}
                      >
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => { e.stopPropagation(); }}
                        icon={<Eye size={12} />}
                      >
                        Inspect
                      </Button>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <Card className="flex flex-col items-center justify-center py-12 text-center">
              <Shield size={32} className="text-surface-500 mb-3" />
              <p className="text-sm text-surface-700">No cases matching filter</p>
              <p className="text-xs text-surface-600 mt-1">All clear — no escalations require review</p>
            </Card>
          )}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2">
          {selectedCase ? (
            <Card className="sticky top-20 overflow-hidden">
              {/* Header */}
              <div className="pb-3 border-b border-surface-300/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-surface-950">Interrogation Details</h3>
                  <Badge
                    variant={selectedCase.risk_score >= 0.7 ? 'error' : 'warning'}
                    size="sm"
                  >
                    Risk: {Math.round(selectedCase.risk_score * 100)}
                  </Badge>
                </div>
                <p className="text-xs text-surface-600">{selectedCase.action}</p>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-4 overflow-x-auto">
                {([
                  { id: 'reasoning', icon: Brain, label: 'Reasoning' },
                  { id: 'data', icon: Database, label: 'Data' },
                  { id: 'parameters', icon: GitBranch, label: 'Params' },
                  { id: 'timeline', icon: Timer, label: 'Timeline' },
                ] as const).map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-md transition-all whitespace-nowrap ${
                      activeTab === id
                        ? 'bg-n0va-400/10 text-n0va-400'
                        : 'text-surface-600 hover:text-surface-900'
                    }`}
                  >
                    <Icon size={10} /> {label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px]">
                {activeTab === 'reasoning' && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-surface-900 mb-2">Agent Chain-of-Thought</h4>
                    {selectedCase.reasoning.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-xs text-surface-700 p-2 rounded-lg bg-surface-200/30"
                      >
                        <span className="text-n0va-400 font-mono mt-0.5">{i + 1}.</span>
                        <span>{r}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'data' && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-surface-900 mb-2">Data Accessed</h4>
                    {selectedCase.dataAccessed.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-surface-700 p-2 rounded-lg bg-surface-200/30">
                        <FileText size={10} className="text-surface-500" />
                        <span className="font-mono">{d}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'parameters' && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-surface-900 mb-2">Action Parameters</h4>
                    <pre className="text-[10px] font-mono bg-surface-200/30 rounded-lg p-3 text-surface-700 overflow-x-auto whitespace-pre-wrap">
                      {JSON.stringify(selectedCase.parameters, null, 2)}
                    </pre>
                  </div>
                )}

                {activeTab === 'timeline' && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-surface-900 mb-2">Event Timeline</h4>
                    {[
                      { time: '00:00', event: 'Agent initiated action', icon: Bot },
                      { time: '00:01', event: 'Risk assessment computed', icon: Activity },
                      { time: '00:01', event: 'HITL threshold exceeded', icon: AlertTriangle },
                      { time: '00:02', event: 'Session suspended, awaiting review', icon: Lock },
                    ].map((evt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-2 h-2 rounded-full bg-n0va-400" />
                          {i < 3 && <div className="w-px h-4 bg-surface-300/50" />}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span className="text-xs text-surface-700">{evt.event}</span>
                          <span className="text-[10px] font-mono text-surface-500">{evt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Decision Actions */}
              {selectedCase.status === 'pending' && (
                <div className="mt-4 pt-3 border-t border-surface-300/20 space-y-2">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => setShowApproveModal(true)}
                      icon={<CheckCircle size={12} />}
                    >
                      Approve & Resume
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      className="flex-1"
                      onClick={() => setShowRejectModal(true)}
                      icon={<XCircle size={12} />}
                    >
                      Reject & Terminate
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-full"
                    icon={<MessageSquare size={12} />}
                  >
                    Modify Parameters
                  </Button>
                </div>
              )}
            </Card>
          ) : (
            <Card className="flex flex-col items-center justify-center py-16 text-center">
              <div className="p-4 rounded-full bg-surface-200/50 mb-4">
                <Shield size={32} className="text-surface-500" />
              </div>
              <p className="text-sm text-surface-700 font-medium">Select a case to inspect</p>
              <p className="text-xs text-surface-600 mt-1 max-w-[200px]">
                Review agent reasoning, data access patterns, and action parameters
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Approve Confirmation Modal */}
      <Modal
        open={showApproveModal}
        onClose={() => setShowApproveModal(false)}
        title="Approve Action"
        size="md"
      >
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20">
            <p className="text-xs text-accent-emerald font-medium">
              Digital signature required — this action will resume the agent session
            </p>
          </div>
          <p className="text-sm text-surface-700">
            You are approving: <strong>{selectedCase?.action}</strong>
          </p>
          <p className="text-xs text-surface-600">
            The agent will resume execution immediately after approval. This action is logged with your identity and timestamp.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1" onClick={() => setShowApproveModal(false)}>
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={() => selectedCase && handleApprove(selectedCase.escalation_id)}
              icon={<CheckCircle size={14} />}
            >
              Sign & Approve
            </Button>
          </div>
        </div>
      </Modal>

      {/* Reject Confirmation Modal */}
      <Modal
        open={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        title="Reject Action"
        size="md"
      >
        <div className="space-y-4">
          <div className="p-3 rounded-lg bg-accent-rose/10 border border-accent-rose/20">
            <p className="text-xs text-accent-rose font-medium">
              This will terminate the agent action and notify the agent of rejection
            </p>
          </div>
          <p className="text-sm text-surface-700">
            You are rejecting: <strong>{selectedCase?.action}</strong>
          </p>
          <p className="text-xs text-surface-600">
            The agent session will be notified of the rejection. The agent may retry with modified parameters.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1" onClick={() => setShowRejectModal(false)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={() => selectedCase && handleReject(selectedCase.escalation_id)}
              icon={<XCircle size={14} />}
            >
              Confirm Rejection
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function Bot({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}
