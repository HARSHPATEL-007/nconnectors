export interface SeedIntegration {
    provider: string;
    name: string;
    category: string;
    description: string;
    authTypes: string[];
    capabilities: string[];
}
export interface SeedTool {
    name: string;
    description: string;
    provider: string;
    category: string;
    riskLevel: 'low' | 'medium' | 'high';
    requiredScopes: string[];
    estimatedLatencyMs: number;
}
export declare const integrations: SeedIntegration[];
export declare const tools: SeedTool[];
//# sourceMappingURL=data.d.ts.map