export type ErrorCode = 'RATE_LIMITED' | 'AUTH_EXPIRED' | 'AUTH_INVALID' | 'NOT_FOUND' | 'VALIDATION_ERROR' | 'SERVER_ERROR' | 'NETWORK_ERROR' | 'TIMEOUT' | 'CIRCUIT_OPEN' | 'SCHEMA_DRIFT' | 'QUOTA_EXCEEDED' | 'FORBIDDEN' | 'UNKNOWN';
export interface AdapterError {
    code: ErrorCode;
    message: string;
    statusCode: number;
    provider: string;
    retryable: boolean;
    retryAfter?: number;
    details?: Record<string, unknown>;
    timestamp: number;
}
export interface ErrorHandlerConfig {
    onError?: (error: AdapterError) => void;
    onRetry?: (error: AdapterError, attempt: number) => void;
    onCircuitOpen?: (provider: string) => void;
    onAuthFailure?: (provider: string) => void;
}
export declare class ErrorHandler {
    private errorCounts;
    private lastErrors;
    private readonly config;
    constructor(config?: ErrorHandlerConfig);
    classify(statusCode: number, body: unknown, provider: string): AdapterError;
    shouldRetry(error: AdapterError, attempt: number, maxRetries: number): boolean;
    getRetryDelay(error: AdapterError, attempt: number): number;
    getErrorCount(provider: string, windowMs?: number): number;
    getLastError(provider: string): AdapterError | undefined;
    reset(provider: string): void;
    private recordError;
    private getCode;
    private isRetryable;
    private extractMessage;
    private extractRetryAfter;
}
export declare const globalErrorHandler: ErrorHandler;
//# sourceMappingURL=error-handler.d.ts.map