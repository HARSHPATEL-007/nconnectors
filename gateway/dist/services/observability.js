// Observability & Monitoring (Spec Section 13)
// Health checks, metrics, structured logging, and alerting.
import { logger } from '../infrastructure/logger.js';
class ObservabilityService {
    metrics = {
        totalRequests: 0,
        totalErrors: 0,
        avgLatencyMs: 0,
        p99LatencyMs: 0,
        activeConnections: 0,
        queueDepth: 0,
        cpuUsagePercent: 0,
        memoryUsageMb: 0,
        uptimeSeconds: 0,
    };
    alerts = [];
    startTime = Date.now();
    requestLatencies = [];
    recordRequest(latencyMs, isError = false) {
        this.metrics.totalRequests++;
        this.requestLatencies.push(latencyMs);
        if (isError)
            this.metrics.totalErrors++;
        this.metrics.uptimeSeconds = (Date.now() - this.startTime) / 1000;
        if (this.requestLatencies.length > 0) {
            this.metrics.avgLatencyMs = this.requestLatencies.reduce((a, b) => a + b, 0) / this.requestLatencies.length;
            const sorted = [...this.requestLatencies].sort((a, b) => a - b);
            const p99Index = Math.floor(sorted.length * 0.99);
            this.metrics.p99LatencyMs = sorted[Math.min(p99Index, sorted.length - 1)];
        }
    }
    createAlert(severity, title, message) {
        const alert = {
            alertId: `alert_${Date.now()}`,
            severity: severity,
            title,
            message,
            timestamp: Date.now(),
            acknowledged: false,
        };
        this.alerts.push(alert);
        logger.warn({ alertId: alert.alertId, severity, title }, 'Alert created');
        return alert;
    }
    getMetrics() {
        return { ...this.metrics };
    }
    getAlerts(severity, limit = 50) {
        let alerts = this.alerts;
        if (severity)
            alerts = alerts.filter((a) => a.severity === severity);
        return alerts.sort((a, b) => b.timestamp - a.timestamp).slice(0, limit);
    }
    getHealthSummary() {
        return {
            status: this.metrics.totalErrors < this.metrics.totalRequests * 0.01 ? 'healthy' : 'degraded',
            uptimeSeconds: (Date.now() - this.startTime) / 1000,
            totalRequests: this.metrics.totalRequests,
            totalErrors: this.metrics.totalErrors,
            errorRate: this.metrics.totalErrors / Math.max(this.metrics.totalRequests, 1),
            avgLatencyMs: this.metrics.avgLatencyMs,
            p99LatencyMs: this.metrics.p99LatencyMs,
            activeAlerts: this.alerts.filter((a) => !a.acknowledged).length,
        };
    }
}
export const observability = new ObservabilityService();
//# sourceMappingURL=observability.js.map