export interface HttpClientConfig {
    baseUrl: string;
    timeout: number;
    maxRetries: number;
    retryDelay: number;
    retryMultiplier: number;
    maxRetryDelay: number;
    headers?: Record<string, string>;
}
export interface HttpRequest {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path?: string;
    params?: Record<string, string>;
    body?: unknown;
    headers?: Record<string, string>;
    signal?: AbortSignal;
}
export interface HttpResponse<T = unknown> {
    data: T;
    status: number;
    headers: Headers;
    retryCount: number;
}
export interface HttpError {
    code: string;
    message: string;
    statusCode: number;
    retryable: boolean;
    rateLimited: boolean;
}
export declare class HttpClient {
    private config;
    private circuitState;
    private failureCount;
    private lastFailureTime;
    private readonly circuitThreshold;
    private readonly circuitResetTime;
    constructor(config: Partial<HttpClientConfig> & {
        baseUrl: string;
    });
    request<T>(req: HttpRequest): Promise<HttpResponse<T>>;
    private executeRequest;
    private isRetryable;
    private getRetryDelay;
    private onSuccess;
    private onFailure;
    private makeError;
    private sleep;
}
//# sourceMappingURL=http-client.d.ts.map