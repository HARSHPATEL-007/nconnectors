interface SystemMetrics {
    totalRequests: number;
    totalErrors: number;
    avgLatencyMs: number;
    p99LatencyMs: number;
    activeConnections: number;
    queueDepth: number;
    cpuUsagePercent: number;
    memoryUsageMb: number;
    uptimeSeconds: number;
}
interface Alert {
    alertId: string;
    severity: 'info' | 'warning' | 'critical';
    title: string;
    message: string;
    timestamp: number;
    acknowledged: boolean;
}
declare class ObservabilityService {
    private metrics;
    private alerts;
    private startTime;
    private requestLatencies;
    recordRequest(latencyMs: number, isError?: boolean): void;
    createAlert(severity: string, title: string, message: string): Alert;
    getMetrics(): SystemMetrics;
    getAlerts(severity?: string, limit?: number): Alert[];
    getHealthSummary(): {
        status: string;
        uptimeSeconds: number;
        totalRequests: number;
        totalErrors: number;
        errorRate: number;
        avgLatencyMs: number;
        p99LatencyMs: number;
        activeAlerts: number;
    };
}
export declare const observability: ObservabilityService;
export {};
//# sourceMappingURL=observability.d.ts.map