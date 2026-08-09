'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useAppStore } from '@/store/useAppStore';
import { relativeTime, formatLatency } from '@/lib/utils';
import { Activity, CheckCircle, XCircle, Clock, Pause, Play } from 'lucide-react';

export function SessionsPage() {
  const { sessions } = useAppStore();

  const statusConfig = {
    running: { variant: 'success' as const, icon: Play, color: 'text-accent-emerald' },
    completed: { variant: 'info' as const, icon: CheckCircle, color: 'text-accent-blue' },
    paused: { variant: 'warning' as const, icon: Pause, color: 'text-accent-amber' },
    failed: { variant: 'error' as const, icon: XCircle, color: 'text-accent-rose' },
    waiting_approval: { variant: 'warning' as const, icon: Clock, color: 'text-accent-amber' },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">Sessions</h1>
          <p className="text-sm text-surface-700 mt-1">Monitor active and historical agent sessions</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="success" dot>{sessions.filter(s => s.status === 'running').length} Running</Badge>
          <Badge variant="warning">{sessions.filter(s => s.status === 'waiting_approval').length} Pending</Badge>
        </div>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => {
          const config = statusConfig[session.status];
          const StatusIcon = config.icon;
          return (
            <Card key={session.id} glow={session.status === 'running'}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-surface-200/50 ${config.color}`}>
                    <StatusIcon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-950">{session.agentName}</h3>
                    <p className="text-xs text-surface-600">{session.context} · {session.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={config.variant} dot>{session.status.replace('_', ' ')}</Badge>
                  <Badge variant="outline" size="sm">{session.type}</Badge>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-surface-700">Step {session.currentStep} of {session.totalSteps}</span>
                  <span className="text-xs text-surface-700">{Math.round((session.currentStep / session.totalSteps) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-300/50 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-n0va-500 to-accent-cyan transition-all duration-500"
                    style={{ width: `${(session.currentStep / session.totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-2 mb-4">
                {session.steps.map((step) => (
                  <div key={step.step} className="flex items-center gap-3 text-xs">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium bg-surface-300/30 text-surface-700">
                      {step.step}
                    </span>
                    <span className="flex-1 text-surface-800">{step.action}</span>
                    <span className="text-surface-600 font-mono">{step.tool}</span>
                    {step.status === 'completed' && <CheckCircle size={12} className="text-accent-emerald" />}
                    {step.status === 'running' && <div className="w-3 h-3 rounded-full border-2 border-accent-blue border-t-transparent animate-spin" />}
                    {step.status === 'failed' && <XCircle size={12} className="text-accent-rose" />}
                    {step.status === 'pending' && <Clock size={12} className="text-surface-600" />}
                    {step.latencyMs > 0 && <span className="text-surface-600">{formatLatency(step.latencyMs)}</span>}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-surface-300/20 text-xs text-surface-600">
                <div className="flex items-center gap-4">
                  <span>Started {relativeTime(session.startTime)}</span>
                  <span>{session.tokensUsed.toLocaleString()} tokens</span>
                  <span>{formatLatency(session.latencyMs)} total</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Risk:</span>
                  <span className={session.riskScore >= 0.7 ? 'text-accent-rose' : session.riskScore >= 0.4 ? 'text-accent-amber' : 'text-accent-emerald'}>
                    {Math.round(session.riskScore * 100)}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
