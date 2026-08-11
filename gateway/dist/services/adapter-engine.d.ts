import { AdapterConfig, AuthCredentials } from '../adapters/core/index.js';
import '../adapters/index.js';
export interface AdapterRequest {
    provider: string;
    action: string;
    params?: Record<string, unknown>;
    credentials?: AuthCredentials;
}
export interface AdapterResult {
    success: boolean;
    data?: unknown;
    error?: string;
    provider: string;
    action: string;
    latencyMs: number;
}
export declare class AdapterEngine {
    private static instance;
    static getInstance(): AdapterEngine;
    private getAdapter;
    execute(request: AdapterRequest): Promise<AdapterResult>;
    private executeAction;
    private getRateLimitForProvider;
    getAvailableProviders(): AdapterConfig[];
    getProvidersByCategory(category: string): AdapterConfig[];
    searchProviders(query: string): AdapterConfig[];
    getCategories(): string[];
}
export declare const adapterEngine: AdapterEngine;
//# sourceMappingURL=adapter-engine.d.ts.map