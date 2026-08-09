'use client';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Shield, Key, Users, Lock, Globe, Server, Bell, Palette } from 'lucide-react';
import { useState } from 'react';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('security');

  const tabs = [
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'team', label: 'Team & Access', icon: Users },
    { id: 'auth', label: 'Authentication', icon: Key },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'infrastructure', label: 'Infrastructure', icon: Server },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-surface-950">Settings</h1>
        <p className="text-sm text-surface-700 mt-1">Configure security, access control, and infrastructure</p>
      </div>

      <div className="flex gap-6">
        {/* Tabs */}
        <div className="w-48 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'bg-n0va-500/10 text-n0va-400'
                      : 'text-surface-700 hover:text-surface-900 hover:bg-surface-300/20'
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'security' && (
            <Card>
              <h3 className="text-sm font-semibold text-surface-950 mb-4">Security Configuration</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-200/30">
                  <div className="flex items-center gap-3">
                    <Lock size={16} className="text-accent-emerald" />
                    <div>
                      <p className="text-xs font-medium text-surface-900">AES-256-GCM Envelope Encryption</p>
                      <p className="text-[10px] text-surface-600">All tokens encrypted with tenant-isolated keys</p>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-200/30">
                  <div className="flex items-center gap-3">
                    <Shield size={16} className="text-accent-cyan" />
                    <div>
                      <p className="text-xs font-medium text-surface-900">Post-Quantum Cryptography (Kyber768)</p>
                      <p className="text-[10px] text-surface-600">Quantum-safe key encapsulation enabled</p>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-200/30">
                  <div className="flex items-center gap-3">
                    <Globe size={16} className="text-accent-blue" />
                    <div>
                      <p className="text-xs font-medium text-surface-900">BYOC Deployment</p>
                      <p className="text-[10px] text-surface-600">Data stays within your VPC boundary</p>
                    </div>
                  </div>
                  <Badge variant="outline" size="sm">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-200/30">
                  <div className="flex items-center gap-3">
                    <Key size={16} className="text-accent-amber" />
                    <div>
                      <p className="text-xs font-medium text-surface-900">Auto Token Rotation</p>
                      <p className="text-[10px] text-surface-600">Every 15 days with zero downtime</p>
                    </div>
                  </div>
                  <Badge variant="success" size="sm">Active</Badge>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'team' && (
            <Card>
              <h3 className="text-sm font-semibold text-surface-950 mb-4">Team & Access Control</h3>
              <div className="space-y-3">
                {[
                  { role: 'Engineering', tools: 48, members: 12, endpoint: 'mcp.n0va.io/team/engineering' },
                  { role: 'Finance', tools: 24, members: 5, endpoint: 'mcp.n0va.io/team/finance' },
                  { role: 'Marketing', tools: 36, members: 8, endpoint: 'mcp.n0va.io/team/marketing' },
                ].map((team) => (
                  <div key={team.role} className="flex items-center justify-between p-3 rounded-lg bg-surface-200/30">
                    <div>
                      <p className="text-xs font-medium text-surface-900">{team.role}</p>
                      <p className="text-[10px] text-surface-600 font-mono">{team.endpoint}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="info" size="sm">{team.tools} tools</Badge>
                      <Badge variant="outline" size="sm">{team.members} members</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {(activeTab === 'auth' || activeTab === 'notifications' || activeTab === 'infrastructure') && (
            <Card>
              <div className="flex flex-col items-center py-8 text-center">
                <Server size={24} className="text-surface-500 mb-2" />
                <p className="text-sm text-surface-700">{tabs.find(t => t.id === activeTab)?.label} settings</p>
                <p className="text-xs text-surface-600 mt-1">Configuration panel available in Enterprise edition</p>
                <Button size="sm" variant="secondary" className="mt-3">Request Access</Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
