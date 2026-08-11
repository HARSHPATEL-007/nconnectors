import { prisma } from '../infrastructure/database.js';
import { logger } from '../infrastructure/logger.js';
import { escalationRepository } from './repositories.js';
class BackgroundJobProcessor {
    intervals = new Map();
    running = false;
    start() {
        if (this.running)
            return;
        this.running = true;
        logger.info({}, 'Background job processor started');
        this.schedule('escalation-timeout', 60000, () => this.processEscalationTimeouts());
        this.schedule('token-refresh', 300000, () => this.processTokenRefreshes());
        this.schedule('session-cleanup', 600000, () => this.processSessionCleanup());
    }
    stop() {
        for (const [name, interval] of this.intervals) {
            clearInterval(interval);
            logger.info({ job: name }, 'Job stopped');
        }
        this.intervals.clear();
        this.running = false;
    }
    schedule(name, intervalMs, handler) {
        const interval = setInterval(async () => {
            try {
                const result = await handler();
                if (result.processed > 0) {
                    logger.info(result, 'Job completed');
                }
            }
            catch (err) {
                logger.error({ err, job: name }, 'Job failed');
            }
        }, intervalMs);
        this.intervals.set(name, interval);
        logger.info({ job: name, intervalMs }, 'Job scheduled');
    }
    async processEscalationTimeouts() {
        const expired = await escalationRepository.findTimeoutExpired();
        let processed = 0;
        for (const escalation of expired) {
            await escalationRepository.resolve(escalation.id, 'rejected', 'system-timeout', 'auto-reject-timeout');
            processed++;
            logger.info({ escalationId: escalation.id }, 'Escalation auto-rejected due to timeout');
        }
        return { job: 'escalation-timeout', processed, errors: 0 };
    }
    async processTokenRefreshes() {
        const fiveMinutesFromNow = new Date(Date.now() + 5 * 60 * 1000);
        const expiring = await prisma.connectedAccount.findMany({
            where: {
                status: 'active',
                autoRefresh: true,
                expiresAt: { lt: fiveMinutesFromNow },
            },
            take: 10,
        });
        let processed = 0;
        let errors = 0;
        for (const conn of expiring) {
            try {
                logger.info({ connectionId: conn.id, provider: conn.provider }, 'Token refresh needed');
                processed++;
            }
            catch (err) {
                errors++;
                logger.error({ err, connectionId: conn.id }, 'Token refresh failed');
            }
        }
        return { job: 'token-refresh', processed, errors };
    }
    async processSessionCleanup() {
        const expired = await prisma.session.updateMany({
            where: {
                status: 'running',
                expiresAt: { lt: new Date() },
            },
            data: { status: 'completed' },
        });
        return { job: 'session-cleanup', processed: expired.count, errors: 0 };
    }
}
export const jobProcessor = new BackgroundJobProcessor();
//# sourceMappingURL=jobs.js.map