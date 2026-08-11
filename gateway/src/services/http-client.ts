// Shared HTTP Client — Retry, timeout, circuit breaker
// Powers all 1,000+ adapter requests through a unified transport

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

export class HttpClient {
  private config: HttpClientConfig;
  private circuitState: 'closed' | 'open' | 'half-open' = 'closed';
  private failureCount = 0;
  private lastFailureTime = 0;
  private readonly circuitThreshold = 5;
  private readonly circuitResetTime = 30000;

  constructor(config: Partial<HttpClientConfig> & { baseUrl: string }) {
    this.config = {
      timeout: 30000,
      maxRetries: 3,
      retryDelay: 1000,
      retryMultiplier: 2,
      maxRetryDelay: 30000,
      ...config,
    };
  }

  async request<T>(req: HttpRequest): Promise<HttpResponse<T>> {
    if (this.circuitState === 'open') {
      if (Date.now() - this.lastFailureTime > this.circuitResetTime) {
        this.circuitState = 'half-open';
      } else {
        throw this.makeError('CIRCUIT_OPEN', 'Circuit breaker is open', 503, false);
      }
    }

    let lastError: Error | null = null;
    let retryCount = 0;

    for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
      try {
        const response = await this.executeRequest<T>(req);
        this.onSuccess();
        return { ...response, retryCount };
      } catch (err) {
        lastError = err as Error;
        retryCount = attempt;

        if (!this.isRetryable(err) || attempt === this.config.maxRetries) {
          this.onFailure();
          throw err;
        }

        const delay = this.getRetryDelay(attempt, err);
        await this.sleep(delay);
      }
    }

    this.onFailure();
    throw lastError;
  }

  private async executeRequest<T>(req: HttpRequest): Promise<Omit<HttpResponse<T>, 'retryCount'>> {
    let url = this.config.baseUrl;
    if (req.path) {
      url += req.path.startsWith('/') ? req.path : `/${req.path}`;
    }
    if (req.params) {
      const searchParams = new URLSearchParams(req.params);
      url += `?${searchParams.toString()}`;
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...this.config.headers,
      ...req.headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    if (req.signal) {
      req.signal.addEventListener('abort', () => controller.abort());
    }

    const response = await fetch(url, {
      method: req.method,
      headers,
      body: req.body !== undefined ? JSON.stringify(req.body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 429) {
      throw this.makeError('RATE_LIMITED', 'Rate limited', 429, true);
    }

    const data = await response.json().catch(() => null) as T;

    if (!response.ok) {
      const retryable = response.status >= 500 || response.status === 408 || response.status === 429;
      throw this.makeError(
        `HTTP_${response.status}`,
        (data as any)?.error?.message || (data as any)?.message || `HTTP ${response.status}`,
        response.status,
        retryable
      );
    }

    return { data, status: response.status, headers: response.headers };
  }

  private isRetryable(err: unknown): boolean {
    if (err && typeof err === 'object' && 'code' in err) {
      const e = err as HttpError;
      return e.retryable || e.rateLimited || e.code === 'CIRCUIT_OPEN';
    }
    return false;
  }

  private getRetryDelay(attempt: number, err: unknown): number {
    let delay = this.config.retryDelay * Math.pow(this.config.retryMultiplier, attempt);

    if (err && typeof err === 'object' && 'rateLimited' in err) {
      const headers = (err as any)._headers as Headers | undefined;
      if (headers) {
        const retryAfter = headers.get('retry-after');
        if (retryAfter) {
          delay = parseInt(retryAfter, 10) * 1000;
        }
      }
    }

    return Math.min(delay, this.config.maxRetryDelay);
  }

  private onSuccess(): void {
    this.failureCount = 0;
    this.circuitState = 'closed';
  }

  private onFailure(): void {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    if (this.failureCount >= this.circuitThreshold) {
      this.circuitState = 'open';
    }
  }

  private makeError(code: string, message: string, statusCode: number, retryable: boolean): HttpError {
    return { code, message, statusCode, retryable, rateLimited: statusCode === 429 };
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
