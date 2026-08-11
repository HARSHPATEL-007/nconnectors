declare class BackgroundJobProcessor {
    private intervals;
    private running;
    start(): void;
    stop(): void;
    private schedule;
    private processEscalationTimeouts;
    private processTokenRefreshes;
    private processSessionCleanup;
}
export declare const jobProcessor: BackgroundJobProcessor;
export {};
//# sourceMappingURL=jobs.d.ts.map