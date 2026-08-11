export interface AdapterConfig {
    id: string;
    name: string;
    category: string;
    description: string;
    icon?: string;
    authTypes: ('oauth2' | 'oauth1' | 'api_key' | 'basic' | 'bearer' | 'custom')[];
    baseUrl: string;
    rateLimit?: {
        requests: number;
        windowMs: number;
    };
    pagination?: {
        type: 'cursor' | 'offset' | 'page';
        maxPerPage: number;
    };
}
export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path?: string;
    params?: Record<string, string>;
    body?: unknown;
    headers?: Record<string, string>;
}
export interface AdapterResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode: number;
    pagination?: {
        nextCursor?: string;
        hasMore: boolean;
        total?: number;
    };
    rateLimit?: {
        remaining: number;
        resetAt: number;
    };
}
export interface AuthCredentials {
    type: 'oauth2' | 'oauth1' | 'api_key' | 'basic' | 'bearer' | 'custom';
    accessToken?: string;
    refreshToken?: string;
    apiKey?: string;
    username?: string;
    password?: string;
    expiresAt?: string;
}
export interface Adapter {
    readonly config: AdapterConfig;
    readonly credentials: AuthCredentials;
    performRequest<T>(options: RequestOptions): Promise<AdapterResponse<T>>;
    list(params?: Record<string, string>): Promise<AdapterResponse>;
    get(id: string): Promise<AdapterResponse>;
    create(body: unknown): Promise<AdapterResponse>;
    update(id: string, body: unknown): Promise<AdapterResponse>;
    delete(id: string): Promise<AdapterResponse>;
    ping(): Promise<boolean>;
    getRateLimit(): Promise<{
        remaining: number;
        resetAt: number;
    } | null>;
}
export declare abstract class BaseAdapter implements Adapter {
    abstract readonly config: AdapterConfig;
    readonly credentials: AuthCredentials;
    private rateLimitRemaining;
    private rateLimitResetAt;
    private requestTimestamps;
    constructor(credentials: AuthCredentials);
    abstract list(params?: Record<string, string>): Promise<AdapterResponse>;
    abstract get(id: string): Promise<AdapterResponse>;
    abstract create(body: unknown): Promise<AdapterResponse>;
    abstract update(id: string, body: unknown): Promise<AdapterResponse>;
    abstract delete(id: string): Promise<AdapterResponse>;
    ping(): Promise<boolean>;
    getRateLimit(): Promise<{
        remaining: number;
        resetAt: number;
    } | null>;
    performRequest<T>(options: RequestOptions): Promise<AdapterResponse<T>>;
    private buildUrl;
    private buildHeaders;
    private parseRateLimits;
    private enforceRateLimit;
}
export declare class AdapterRegistry {
    private adapters;
    register(id: string, adapter: new (credentials: AuthCredentials) => Adapter): void;
    create(id: string, credentials: AuthCredentials): Adapter | null;
    getAvailableAdapters(): AdapterConfig[];
    getAdaptersByCategory(category: string): AdapterConfig[];
}
export declare const adapterConfigs: AdapterConfig[];
export declare const registry: AdapterRegistry;
export declare function registerAdapter(config: AdapterConfig): void;
//# sourceMappingURL=index.d.ts.map