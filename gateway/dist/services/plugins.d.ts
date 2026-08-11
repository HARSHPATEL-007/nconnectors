interface PluginContext {
    tenantId: string;
    metrics: Record<string, any>;
    config: Record<string, any>;
}
interface PluginResult {
    slot: string;
    action: string;
    impact: string;
    timestamp: number;
    data?: any;
}
declare class PluginManager {
    private slots;
    runAll(context: PluginContext): Promise<PluginResult[]>;
    getStatus(): Record<number, any>;
}
export declare const pluginManager: PluginManager;
export {};
//# sourceMappingURL=plugins.d.ts.map