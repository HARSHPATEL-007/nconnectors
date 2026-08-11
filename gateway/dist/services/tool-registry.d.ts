import { EventEmitter } from 'node:events';
import type { ToolDefinition, ToolDiscoveryResult, Agent } from '../types/index.js';
declare class ToolRegistry extends EventEmitter {
    private tools;
    private integrations;
    registerTool(tool: ToolDefinition): void;
    registerIntegration(id: string, name: string, category: string): void;
    linkToolToIntegration(integrationId: string, toolName: string): void;
    getTool(name: string): ToolDefinition | undefined;
    getAllTools(): ToolDefinition[];
    getToolsByProvider(provider: string): ToolDefinition[];
    getToolsByCategory(category: string): ToolDefinition[];
    discoverTools(query: string, agent: Agent, maxTools?: number): ToolDiscoveryResult;
    private calculateRelevance;
    private generateReason;
    private classifyIntent;
    private suggestWorkflow;
    private calculateTokenSavings;
    private isToolAuthorized;
    getIntegrationCatalog(): {
        id: string;
        name: string;
        category: string;
        toolCount: number;
    }[];
}
export declare const toolRegistry: ToolRegistry;
export {};
//# sourceMappingURL=tool-registry.d.ts.map