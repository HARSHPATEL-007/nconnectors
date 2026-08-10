import { createHmac, timingSafeEqual } from 'node:crypto';
import { prisma } from '../infrastructure/database.js';
import { logger } from '../infrastructure/logger.js';

interface WebhookPayload {
  event_type: string;
  tenant_id: string;
  data: Record<string, unknown>;
}

interface WebhookResult {
  success: boolean;
  event_id?: string;
  error?: string;
}

const webhookSecrets: Record<string, string> = {
  slack: process.env.SLACK_SIGNING_SECRET || '',
  github: process.env.GITHUB_WEBHOOK_SECRET || '',
  stripe: process.env.STRIPE_WEBHOOK_SECRET || '',
  shopify: process.env.SHOPIFY_WEBHOOK_SECRET || '',
};

export class WebhookService {
  verifySignature(payload: string, signature: string, secret: string): boolean {
    if (!secret || !signature) return false;

    const expected = createHmac('sha256', secret).update(payload).digest('hex');
    const expectedBuf = Buffer.from(`sha256=${expected}`);
    const actualBuf = Buffer.from(signature);

    if (expectedBuf.length !== actualBuf.length) return false;
    return timingSafeEqual(expectedBuf, actualBuf);
  }

  verifyGitHubSignature(payload: string, signature: string, secret: string): boolean {
    if (!secret || !signature) return false;

    const expected = createHmac('sha256', secret).update(payload).digest('hex');
    const expectedBuf = Buffer.from(`sha256=${expected}`);
    const actualBuf = Buffer.from(signature);

    if (expectedBuf.length !== actualBuf.length) return false;
    return timingSafeEqual(expectedBuf, actualBuf);
  }

  async ingestWebhook(
    provider: string,
    payload: string,
    signature: string
  ): Promise<WebhookResult> {
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

    let parsed: WebhookPayload;
    try {
      parsed = JSON.parse(payload);
    } catch {
      return { success: false, error: 'Invalid JSON payload' };
    }

    const eventId = crypto.randomUUID();

    await prisma.webhookEvent.create({
      data: {
        eventId,
        eventType: parsed.event_type || 'unknown',
        tenantId: parsed.tenant_id || 'unknown',
        payload: (parsed.data || parsed) as any,
        signature,
      },
    });

    logger.info({ provider, eventId, eventType: parsed.event_type }, 'Webhook ingested');

    return { success: true, event_id: eventId };
  }

  async processWebhook(eventId: string): Promise<void> {
    const event = await prisma.webhookEvent.findUnique({
      where: { eventId },
    });

    if (!event) {
      logger.warn({ eventId }, 'Webhook event not found');
      return;
    }

    logger.info(
      { eventId, eventType: event.eventType, tenantId: event.tenantId },
      'Processing webhook event'
    );

    await prisma.webhookEvent.update({
      where: { eventId },
      data: { processedAt: new Date() },
    });
  }

  async getUnprocessedEvents(limit: number = 50): Promise<{ eventId: string; eventType: string; tenantId: string }[]> {
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
