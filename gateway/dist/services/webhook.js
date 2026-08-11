import { createHmac, timingSafeEqual } from 'node:crypto';
import { prisma } from '../infrastructure/database.js';
import { logger } from '../infrastructure/logger.js';
const webhookSecrets = {
    slack: process.env.SLACK_SIGNING_SECRET || '',
    github: process.env.GITHUB_WEBHOOK_SECRET || '',
    stripe: process.env.STRIPE_WEBHOOK_SECRET || '',
    shopify: process.env.SHOPIFY_WEBHOOK_SECRET || '',
};
export class WebhookService {
    verifySignature(payload, signature, secret) {
        if (!secret || !signature)
            return false;
        const expected = createHmac('sha256', secret).update(payload).digest('hex');
        const expectedBuf = Buffer.from(`sha256=${expected}`);
        const actualBuf = Buffer.from(signature);
        if (expectedBuf.length !== actualBuf.length)
            return false;
        return timingSafeEqual(expectedBuf, actualBuf);
    }
    verifyGitHubSignature(payload, signature, secret) {
        if (!secret || !signature)
            return false;
        const expected = createHmac('sha256', secret).update(payload).digest('hex');
        const expectedBuf = Buffer.from(`sha256=${expected}`);
        const actualBuf = Buffer.from(signature);
        if (expectedBuf.length !== actualBuf.length)
            return false;
        return timingSafeEqual(expectedBuf, actualBuf);
    }
    async ingestWebhook(provider, payload, signature) {
        const secret = webhookSecrets[provider];
        if (!secret) {
            return { success: false, error: `No webhook secret configured for ${provider}` };
        }
        const isValid = provider === 'github'
            ? this.verifyGitHubSignature(payload, signature, secret)
            : this.verifySignature(payload, signature, secret);
        if (!isValid) {
            logger.warn({ provider }, 'Invalid webhook signature');
            return { success: false, error: 'Invalid signature' };
        }
        let parsed;
        try {
            parsed = JSON.parse(payload);
        }
        catch {
            return { success: false, error: 'Invalid JSON payload' };
        }
        const eventId = crypto.randomUUID();
        await prisma.webhookEvent.create({
            data: {
                eventId,
                eventType: parsed.event_type || 'unknown',
                tenantId: parsed.tenant_id || 'unknown',
                payload: (parsed.data || parsed),
                signature,
            },
        });
        logger.info({ provider, eventId, eventType: parsed.event_type }, 'Webhook ingested');
        return { success: true, event_id: eventId };
    }
    async processWebhook(eventId) {
        const event = await prisma.webhookEvent.findUnique({
            where: { eventId },
        });
        if (!event) {
            logger.warn({ eventId }, 'Webhook event not found');
            return;
        }
        logger.info({ eventId, eventType: event.eventType, tenantId: event.tenantId }, 'Processing webhook event');
        await prisma.webhookEvent.update({
            where: { eventId },
            data: { processedAt: new Date() },
        });
    }
    async getUnprocessedEvents(limit = 50) {
        const events = await prisma.webhookEvent.findMany({
            where: { processedAt: null },
            orderBy: { createdAt: 'asc' },
            take: limit,
            select: { eventId: true, eventType: true, tenantId: true },
        });
        return events;
    }
}
export const webhookService = new WebhookService();
//# sourceMappingURL=webhook.js.map