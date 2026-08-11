// Error Handler — Classification, recovery, telemetry
// Unified error handling for all 1,000+ integrations

export type ErrorCode =
  | 'RATE_LIMITED'
  | 'AUTH_EXPIRED'
  | 'AUTH_INVALID'
  | 'NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'SERVER_ERROR'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'CIRCUIT_OPEN'
  | 'SCHEMA_DRIFT'
  | 'QUOTA_EXCEEDED'
  | 'FORBIDDEN'
  | 'UNKNOWN';

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

export class ErrorHandler {
  private errorCounts = new Map<string, number>();
  private lastErrors = new Map<string, AdapterError>();
  private readonly config: ErrorHandlerConfig;

  constructor(config: ErrorHandlerConfig = {}) {
    this.config = config;
  }

  classify(statusCode: number, body: unknown, provider: string): AdapterError {
    const message = this.extractMessage(body);
    const code = this.getCode(statusCode, body);
    const retryable = this.isRetryable(code, statusCode);

    const error: AdapterError = {
      code,
      message,
      statusCode,
      provider,
      retryable,
      retryAfter: this.extractRetryAfter(body),
      details: body as Record<string, unknown>,
      timestamp: Date.now(),
    };

    this.recordError(provider, error);
    this.config.onError?.(error);

    if (code === 'AUTH_EXPIRED' || code === 'AUTH_INVALID') {
      this.config.onAuthFailure?.(provider);
    }

    return error;
  }

  shouldRetry(error: AdapterError, attempt: number, maxRetries: number): boolean {
    if (!error.retryable || attempt >= maxRetries) return false;
    if (error.code === 'RATE_LIMITED' && error.retryAfter && error.retryAfter > 30000) return false;
    return true;
  }

  getRetryDelay(error: AdapterError, attempt: number): number {
    if (error.code === 'RATE_LIMITED' && error.retryAfter) {
      return error.retryAfter;
    }
    return Math.min(1000 * Math.pow(2, attempt), 30000);
  }

  getErrorCount(provider: string, windowMs = 3600000): number {
    return this.errorCounts.get(provider) || 0;
  }

  getLastError(provider: string): AdapterError | undefined {
    return this.lastErrors.get(provider);
  }

  reset(provider: string): void {
    this.errorCounts.delete(provider);
    this.lastErrors.delete(provider);
  }

  private recordError(provider: string, error: AdapterError): void {
    this.errorCounts.set(provider, (this.errorCounts.get(provider) || 0) + 1);
    this.lastErrors.set(provider, error);
  }

  private getCode(statusCode: number, body: unknown): ErrorCode {
    if (statusCode === 429) return 'RATE_LIMITED';
    if (statusCode === 401) {
      const msg = this.extractMessage(body).toLowerCase();
      if (msg.includes('expired')) return 'AUTH_EXPIRED';
      return 'AUTH_INVALID';
    }
    if (statusCode === 403) {
      const msg = this.extractMessage(body).toLowerCase();
      if (msg.includes('quota') || msg.includes('limit')) return 'QUOTA_EXCEEDED';
      return 'FORBIDDEN';
    }
    if (statusCode === 404) return 'NOT_FOUND';
    if (statusCode === 408) return 'TIMEOUT';
    if (statusCode === 422) return 'VALIDATION_ERROR';
    if (statusCode >= 500) return 'SERVER_ERROR';
    if (statusCode === 0) return 'NETWORK_ERROR';
    return 'UNKNOWN';
  }

  private isRetryable(code: ErrorCode, statusCode: number): boolean {
    switch (code) {
      case 'RATE_LIMITED':
      case 'SERVER_ERROR':
      case 'NETWORK_ERROR':
      case 'TIMEOUT':
      case 'CIRCUIT_OPEN':
        return true;
      case 'AUTH_EXPIRED':
        return true;
      default:
        return false;
    }
  }

  private extractMessage(body: unknown): string {
    if (body && typeof body === 'object') {
      const b = body as Record<string, unknown>;
      return (
        (b.error as any)?.message ||
        b.message as string ||
        b.error_description as string ||
        b.error as string ||
        'Unknown error'
      );
    }
    return 'Unknown error';
  }

  private extractRetryAfter(body: unknown): number | undefined {
    if (body && typeof body === 'object') {
      const b = body as Record<string, unknown>;
      const retryAfter = b.retry_after as number | string | undefined;
      if (retryAfter) {
        const ms = typeof retryAfter === 'string' ? parseInt(retryAfter, 10) * 1000 : retryAfter * 1000;
        return ms;
      }
    }
    return undefined;
  }
}

export const globalErrorHandler = new ErrorHandler();
