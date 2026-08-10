'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/Progress';
import { useAppStore } from '@/store/useAppStore';
import { Modal } from '@/components/ui/Modal';
import { useState, useEffect } from 'react';
import { formatNumber, formatLatency } from '@/lib/utils';
import { useMediaQuery } from '@/lib/hooks';
import {
  Bot,
  Play,
  Pause,
  Shield,
  Zap,
  Cpu,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

const autonomyColors = {
  low: 'warning',
  medium: 'info',
  high: 'success',
  full: 'default',
} as const;

export function AgentsPage() {
   const { agents, selectedAgent, setSelectedAgent, toggleAgentStatus, fetchAgents, loading } = useAppStore();
   const [showCreate, setShowCreate] = useState(false);
   const isMobile = useMediaQuery('(max-width: 768px)');

   useEffect(() => {
     fetchAgents();
   }, []);

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          {!isMobile && (
            <>
              <h1 className="text-2xl font-bold text-surface-950">Agent Management</h1>
              <p className="text-sm text-surface-700 mt-1">Register, configure, and monitor your AI agents</p>
            </>
          )}
          {isMobile && <h1 className="text-lg font-bold text-surface-950">Agents</h1>}
        </div>
        {!isMobile && (
          <Button onClick={() => setShowCreate(true)} icon={<Zap size={14} />}>
            Register Agent
          </Button>
        )}
        {isMobile && (
          <Button size="sm" onClick={() => setShowCreate(true)} icon={<Zap size={12} />}>
            New
          </Button>
        )}
      </div>

      {/* Agent Grid - 1 col mobile, 2-3 cols desktop */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
         {agents.map((agent) => (
           <motion.div
             key={agent.agent_id}
            whileTap={isMobile ? { scale: 0.98 } : undefined}
            transition={{ duration: 0.1 }}
          >
            <Card
              hover
              glow={agent.status === 'active'}
              className="relative overflow-hidden"
              onClick={() => setSelectedAgent(agent)}
            >
              {/* Status indicator */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                agent.status === 'active' ? 'bg-accent-emerald' :
                agent.status === 'error' ? 'bg-accent-rose' :
                agent.status === 'paused' ? 'bg-accent-amber' : 'bg-surface-500'
              }`} />

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${
                    agent.status === 'active' ? 'bg-accent-emerald/10' :
                    agent.status === 'error' ? 'bg-accent-rose/10' : 'bg-surface-300/50'
                  }`}>
                    <Bot size={16} className={
                      agent.status === 'active' ? 'text-accent-emerald' :
                      agent.status === 'error' ? 'text-accent-rose' : 'text-surface-700'
                    } />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-surface-950">{agent.name}</h3>
                    <p className="text-[10px] text-surface-600">{agent.type}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    agent.status === 'active' ? 'success' :
                    agent.status === 'error' ? 'error' :
                    agent.status === 'paused' ? 'warning' : 'default'
                  }
                  size="sm"
                  dot
                >
                  {agent.status}
                </Badge>
              </div>

              <p className="text-[11px] text-surface-700 mb-3 line-clamp-2">{agent.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                 <div className="text-center p-1.5 rounded-lg bg-surface-200/30">
                   <p className="text-[11px] font-semibold text-surface-950">{formatNumber(agent.max_daily_actions)}</p>
                   <p className="text-[8px] text-surface-600">Quota</p>
                 </div>
                 <div className="text-center p-1.5 rounded-lg bg-surface-200/30">
                   <p className="text-[11px] font-semibold text-surface-950">{agent.tools_available?.length || 0}</p>
                   <p className="text-[8px] text-surface-600">Tools</p>
                 </div>
                 <div className="text-center p-1.5 rounded-lg bg-surface-200/30">
                   <p className="text-[11px] font-semibold text-surface-950">{agent.sandbox_enabled ? 'Yes' : 'No'}</p>
                   <p className="text-[8px] text-surface-600">Sandbox</p>
                 </div>
               </div>

               {/* Footer */}
               <div className="flex items-center justify-between pt-2.5 border-t border-surface-300/20">
                 <div className="flex items-center gap-1.5">
                   <Badge variant={autonomyColors[agent.autonomy_level]} size="sm">{agent.autonomy_level}</Badge>
                   {agent.sandbox_enabled && (
                     <Badge variant="outline" size="sm" className="flex items-center gap-0.5">
                       <Cpu size={8} />
                     </Badge>
                   )}
                 </div>
                 <button
                   onClick={(e) => { e.stopPropagation(); toggleAgentStatus(agent.agent_id); }}
                   className="p-2 -m-1 rounded-lg hover:bg-surface-300/30 text-surface-600 active:scale-90 transition-all touch-manipulation"
                 >
                   {agent.status === 'active' ? <Pause size={14} /> : <Play size={14} />}
                 </button>
               </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Agent Detail Modal */}
      <Modal open={!!selectedAgent} onClose={() => setSelectedAgent(null)} size="lg" title={selectedAgent?.name || ''} subtitle={selectedAgent?.type}>
        {selectedAgent && (
          <div className="space-y-4">
            <p className="text-sm text-surface-700">{selectedAgent.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-surface-200/30 text-center">
                <p className="text-lg font-bold text-surface-950">{formatNumber(selectedAgent.toolsAvailable)}</p>
                <p className="text-[10px] text-surface-600">Tools</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30 text-center">
                <p className="text-lg font-bold text-surface-950">{selectedAgent.toolsUsed}</p>
                <p className="text-[10px] text-surface-600">Used</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30 text-center">
                <p className="text-lg font-bold text-surface-950">{Math.round(selectedAgent.successRate * 100)}%</p>
                <p className="text-[10px] text-surface-600">Success</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-200/30 text-center">
                <p className="text-lg font-bold text-surface-950">{selectedAgent.model.split('-').slice(0, 2).join('-')}</p>
                <p className="text-[10px] text-surface-600">Model</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-surface-900 mb-2">Permissions</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedAgent.permissions.map((p) => (
                  <Badge key={p} variant="info" size="sm">{p}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-surface-900 mb-2">Requires Approval</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedAgent.approvalRequired.map((a) => (
                  <Badge key={a} variant="warning" size="sm" className="flex items-center gap-0.5">
                    <Lock size={8} /> {a}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="secondary" className="flex-1" onClick={() => setSelectedAgent(null)}>Close</Button>
              <Button variant="danger" className="flex-1" onClick={() => toggleAgentStatus(selectedAgent.id)}>
                {selectedAgent.status === 'active' ? 'Pause' : 'Resume'}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
