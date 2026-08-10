// Core Adapter Framework
// Standardized interface for all production connectors

export interface AdapterConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: string;
  authTypes: ('oauth2' | 'api_key' | 'basic' | 'bearer')[];
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
  type: 'oauth2' | 'api_key' | 'basic' | 'bearer';
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

  request<T>(options: RequestOptions): Promise<AdapterResponse<T>>;

  // Standard CRUD operations
  list(params?: Record<string, string>): Promise<AdapterResponse>;
  get(id: string): Promise<AdapterResponse>;
  create(body: unknown): Promise<AdapterResponse>;
  update(id: string, body: unknown): Promise<AdapterResponse>;
  delete(id: string): Promise<AdapterResponse>;

  // Health check
  ping(): Promise<boolean>;

  // Rate limit info
  getRateLimit(): Promise<{ remaining: number; resetAt: number } | null>;
}

// Base adapter with common functionality
export abstract class BaseAdapter implements Adapter {
  abstract readonly config: AdapterConfig;
  readonly credentials: AuthCredentials;
  private rateLimitRemaining = 0;
  private rateLimitResetAt = 0;
  private requestTimestamps: number[] = [];

  constructor(credentials: AuthCredentials) {
    this.credentials = credentials;
  }

  abstract list(params?: Record<string, string>): Promise<AdapterResponse>;
  abstract get(id: string): Promise<AdapterResponse>;
  abstract create(body: unknown): Promise<AdapterResponse>;
  abstract update(id: string, body: unknown): Promise<AdapterResponse>;
  abstract delete(id: string): Promise<AdapterResponse>;

  async ping(): Promise<boolean> {
    try {
      const response = await this.request({ method: 'GET', path: '/health' });
      return response.success;
    } catch {
      return false;
    }
  }

  async getRateLimit(): Promise<{ remaining: number; resetAt: number } | null> {
    return { remaining: this.rateLimitRemaining, resetAt: this.rateLimitResetAt };
  }

  async request<T>(options: RequestOptions): Promise<AdapterResponse<T>> {
    // Rate limiting
    if (this.config.rateLimit) {
      await this.enforceRateLimit();
    }

    const url = this.buildUrl(options);
    const headers = this.buildHeaders(options);

    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
      });

      // Parse rate limit headers
      this.parseRateLimits(response);

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return {
          success: false,
          error: (data as any)?.error?.message || (data as any)?.message || `HTTP ${response.status}`,
          statusCode: response.status,
        };
      }

      return {
        success: true,
        data: data as T,
        statusCode: response.status,
        rateLimit: {
          remaining: this.rateLimitRemaining,
          resetAt: this.rateLimitResetAt,
        },
      };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Request failed',
        statusCode: 0,
      };
    }
  }

  private buildUrl(options: RequestOptions): string {
    let url = this.config.baseUrl;
    if (options.path) {
      url += options.path.startsWith('/') ? options.path : `/${options.path}`;
    }
    if (options.params) {
      const searchParams = new URLSearchParams(options.params);
      url += `?${searchParams.toString()}`;
    }
    return url;
  }

  private buildHeaders(options: RequestOptions): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers,
    };

    switch (this.credentials.type) {
      case 'oauth2':
      case 'bearer':
        if (this.credentials.accessToken) {
          headers['Authorization'] = `Bearer ${this.credentials.accessToken}`;
        }
        break;
      case 'api_key':
        if (this.credentials.apiKey) {
          headers['Authorization'] = `Bearer ${this.credentials.apiKey}`;
        }
        break;
      case 'basic':
        if (this.credentials.username && this.credentials.password) {
          const encoded = Buffer.from(
            `${this.credentials.username}:${this.credentials.password}`
          ).toString('base64');
          headers['Authorization'] = `Basic ${encoded}`;
        }
        break;
    }

    return headers;
  }

  private parseRateLimits(response: Response): void {
    const remaining = response.headers.get('x-ratelimit-remaining');
    const reset = response.headers.get('x-ratelimit-reset');
    if (remaining) this.rateLimitRemaining = parseInt(remaining, 10);
    if (reset) this.rateLimitResetAt = parseInt(reset, 10) * 1000;
  }

  private async enforceRateLimit(): Promise<void> {
    if (!this.config.rateLimit) return;

    const now = Date.now();
    const windowStart = now - this.config.rateLimit.windowMs;

    // Remove old timestamps
    this.requestTimestamps = this.requestTimestamps.filter((t) => t > windowStart);

    if (this.requestTimestamps.length >= this.config.rateLimit.requests) {
      const oldestInWindow = this.requestTimestamps[0];
      const waitTime = oldestInWindow + this.config.rateLimit.windowMs - now;
      if (waitTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }

    this.requestTimestamps.push(now);
  }
}

// Adapter registry
export class AdapterRegistry {
  private adapters = new Map<string, new (credentials: AuthCredentials) => Adapter>();

  register(id: string, adapter: new (credentials: AuthCredentials) => Adapter): void {
    this.adapters.set(id, adapter);
  }

  create(id: string, credentials: AuthCredentials): Adapter | null {
    const AdapterClass = this.adapters.get(id);
    if (!AdapterClass) return null;

    return new AdapterClass(credentials);
  }

  getAvailableAdapters(): AdapterConfig[] {
    return adapterConfigs;
  }

  getAdaptersByCategory(category: string): AdapterConfig[] {
    return adapterConfigs.filter((c) => c.category === category);
  }
}

export const adapterConfigs: AdapterConfig[] = [];
export const registry = new AdapterRegistry();

export function registerAdapter(config: AdapterConfig): void {
  adapterConfigs.push(config);
}
