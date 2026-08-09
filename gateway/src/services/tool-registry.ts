import { EventEmitter } from 'node:events';
import type { ToolDefinition, ToolDiscoveryResult, DiscoveredTool, RiskLevel, Agent } from '../types/index.js';

class ToolRegistry extends EventEmitter {
  private tools: Map<string, ToolDefinition> = new Map();
  private integrations: Map<string, { name: string; category: string; tools: string[] }> = new Map();

  registerTool(tool: ToolDefinition): void {
    this.tools.set(tool.name, tool);
    this.emit('tool.registered', tool);
  }

  registerIntegration(id: string, name: string, category: string): void {
    this.integrations.set(id, { name, category, tools: [] });
  }

  linkToolToIntegration(integrationId: string, toolName: string): void {
    const integration = this.integrations.get(integrationId);
    if (integration) {
      integration.tools.push(toolName);
    }
  }

  getTool(name: string): ToolDefinition | undefined {
    return this.tools.get(name);
  }

  getAllTools(): ToolDefinition[] {
    return Array.from(this.tools.values());
  }

  getToolsByProvider(provider: string): ToolDefinition[] {
    return Array.from(this.tools.values()).filter(t => t.provider === provider);
  }

  getToolsByCategory(category: string): ToolDefinition[] {
    return Array.from(this.tools.values()).filter(t => t.category === category);
  }

  discoverTools(query: string, agent: Agent, maxTools: number = 5): ToolDiscoveryResult {
    const queryLower = query.toLowerCase();
    const queryTerms = queryLower.split(/\s+/);

    const scored: DiscoveredTool[] = [];

    for (const tool of this.tools.values()) {
      if (tool.deprecated) continue;
      if (!this.isToolAuthorized(tool, agent)) continue;

      const score = this.calculateRelevance(tool, queryTerms, queryLower);
      if (score > 0) {
        scored.push({
          name: tool.name,
          relevance: score,
          reason: this.generateReason(tool, queryTerms),
          estimated_latency_ms: tool.estimated_latency_ms,
          required_scopes: tool.required_scopes,
          risk_level: tool.risk_level,
          deprecated: tool.deprecated,
        });
      }
    }

    scored.sort((a, b) => b.relevance - a.relevance);
    const selected = scored.slice(0, maxTools);

    const intent = this.classifyIntent(queryLower);
    const workflow = this.suggestWorkflow(selected);

    return {
      intent: intent.type,
      confidence: intent.confidence,
      tools: selected,
      suggested_workflow: workflow,
      context_tokens_saved: this.calculateTokenSavings(selected, agent),
      total_estimated_latency_ms: selected.reduce((sum, t) => sum + t.estimated_latency_ms, 0),
    };
  }

  private calculateRelevance(tool: ToolDefinition, queryTerms: string[], fullQuery: string): number {
    let score = 0;
    const toolNameLower = tool.name.toLowerCase();
    const toolDescLower = tool.description.toLowerCase();

    for (const term of queryTerms) {
      if (toolNameLower.includes(term)) score += 0.4;
      if (toolDescLower.includes(term)) score += 0.2;
      if (tool.category.toLowerCase().includes(term)) score += 0.15;
      if (tool.provider.toLowerCase().includes(term)) score += 0.1;
    }

    if (toolNameLower.includes(fullQuery)) score += 0.3;
    if (toolDescLower.includes(fullQuery)) score += 0.15;

    const actionVerbs: Record<string, string[]> = {
      find: ['search', 'find', 'get', 'list', 'fetch', 'retrieve'],
      create: ['create', 'add', 'new', 'upload', 'post', 'send'],
      update: ['update', 'edit', 'modify', 'change', 'set'],
      delete: ['delete', 'remove', 'clear'],
      notify: ['notify', 'alert', 'message', 'slack', 'email'],
      convert: ['convert', 'transform', 'export', 'import'],
      analyze: ['analyze', 'stats', 'metrics', 'report'],
    };

    for (const [action, verbs] of Object.entries(actionVerbs)) {
      for (const verb of verbs) {
        if (queryTerms.includes(verb)) {
          if (toolNameLower.includes(action) || toolDescLower.includes(action)) {
            score += 0.25;
          }
        }
      }
    }

    return Math.min(score, 1.0);
  }

  private generateReason(tool: ToolDefinition, queryTerms: string[]): string {
    const matchedTerms = queryTerms.filter(
      t => tool.name.toLowerCase().includes(t) || tool.description.toLowerCase().includes(t)
    );

    if (matchedTerms.length > 0) {
      return `Matches intent: "${matchedTerms.join(', ')}" — ${tool.description}`;
    }
    return tool.description;
  }

  private classifyIntent(query: string): { type: string; confidence: number } {
    const patterns: Record<string, { regex: RegExp; type: string }> = {
      cross_platform_file_workflow: { regex: /find.*convert.*upload|search.*import.*notify/i, type: 'cross_platform_file_workflow' },
      campaign_management: { regex: /campaign|ad.*manage|bid|budget/i, type: 'campaign_management' },
      crm_sync: { regex: /lead|contact|deal|crm|pipeline/i, type: 'crm_sync' },
      data_analysis: { regex: /analyze|metrics|report|stats|dashboard/i, type: 'data_analysis' },
      communication: { regex: /notify|message|slack|email|send/i, type: 'communication' },
      file_operations: { regex: /file|upload|download|document|csv/i, type: 'file_operations' },
      code_management: { regex: /pull request|commit|branch|merge|ci/i, type: 'code_management' },
      scheduling: { regex: /schedule|meeting|calendar|book/i, type: 'scheduling' },
    };

    for (const [, { regex, type }] of Object.entries(patterns)) {
      if (regex.test(query)) {
        return { type, confidence: 0.9 };
      }
    }

    return { type: 'general', confidence: 0.5 };
  }

  private suggestWorkflow(tools: DiscoveredTool[]): string {
    if (tools.length === 0) return '';
    return tools.map(t => t.name.split('.')[1] || t.name).join(' -> ');
  }

  private calculateTokenSavings(selected: DiscoveredTool[], agent: Agent): number {
    const totalTools = this.tools.size;
    const avgSchemaTokens = 250;
    return Math.max(0, (totalTools - selected.length) * avgSchemaTokens);
  }

  private isToolAuthorized(tool: ToolDefinition, agent: Agent): boolean {
    const agentPermissions = Object.keys(agent.permissions);
    const [provider] = tool.name.split('.');
    return agentPermissions.some(
      p => p === '*' || p === provider || p === tool.provider || p === tool.category
    );
  }

  getIntegrationCatalog(): { id: string; name: string; category: string; toolCount: number }[] {
    return Array.from(this.integrations.entries()).map(([id, info]) => ({
      id,
      name: info.name,
      category: info.category,
      toolCount: info.tools.length,
    }));
  }
}

export const toolRegistry = new ToolRegistry();
