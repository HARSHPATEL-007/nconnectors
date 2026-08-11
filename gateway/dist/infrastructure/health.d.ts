interface HealthStatus {
    status: 'healthy' | 'degraded' | 'unhealthy';
    timestamp: string;
    uptime: number;
    version: string;
    checks: {
        database: HealthCheckResult;
        redis: HealthCheckResult;
        memory: HealthCheckResult;
    };
}
interface HealthCheckResult {
    status: 'pass' | 'fail' | 'warn';
    responseTimeMs: number;
    message?: string;
}
interface Metrics {
    agents: {
        total: number;
        active: number;
        paused: number;
    };
    sessions: {
        total: number;
        running: number;
        completed: number;
    };
    connections: {
        total: number;
        active: number;
        expired: number;
    };
    auditEntries: {
        total: number;
        last24h: number;
    };
    escalations: {
        pending: number;
        resolved: number;
    };
    recipes: {
        total: number;
    };
}
declare class HealthService {
    getHealth(): Promise<HealthStatus>;
    private checkDatabase;
    private checkRedis;
    private checkMemory;
    getMetrics(): Promise<Metrics>;
    getReadiness(): {
        ready: boolean;
        checks: Record<string, boolean>;
    };
}
export declare const healthService: HealthService;
export {};
//# sourceMappingURL=health.d.ts.map