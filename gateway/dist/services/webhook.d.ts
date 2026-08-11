interface WebhookResult {
    success: boolean;
    event_id?: string;
    error?: string;
}
export declare class WebhookService {
    verifySignature(payload: string, signature: string, secret: string): boolean;
    verifyGitHubSignature(payload: string, signature: string, secret: string): boolean;
    ingestWebhook(provider: string, payload: string, signature: string): Promise<WebhookResult>;
    processWebhook(eventId: string): Promise<void>;
    getUnprocessedEvents(limit?: number): Promise<{
        eventId: string;
        eventType: string;
        tenantId: string;
    }[]>;
}
export declare const webhookService: WebhookService;
export {};
//# sourceMappingURL=webhook.d.ts.map