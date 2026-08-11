declare class ProductionGateway {
    private app;
    private server;
    private wss;
    private clients;
    constructor();
    private setupMiddleware;
    private setupRoutes;
    private setupAuthRoutes;
    private setupAgentRoutes;
    private setupSessionRoutes;
    private setupToolRoutes;
    private setupConnectionRoutes;
    private setupAuditRoutes;
    private setupEscalationRoutes;
    private setupRecipeRoutes;
    private setupWebhookRoutes;
    private setupIntegrationRoutes;
    private setupErrorHandling;
    private handleSSE;
    private handleHTTPMCP;
    private processMCPMessage;
    private extractToolFromInstruction;
    private executeRealTool;
    start(): Promise<void>;
    stop(): Promise<void>;
}
export declare const gateway: ProductionGateway;
export {};
//# sourceMappingURL=server.d.ts.map