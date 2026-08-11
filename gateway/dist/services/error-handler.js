// Error Handler — Classification, recovery, telemetry
// Unified error handling for all 1,000+ integrations
export class ErrorHandler {
    errorCounts = new Map();
    lastErrors = new Map();
    config;
    constructor(config = {}) {
        this.config = config;
    }
    classify(statusCode, body, provider) {
        const message = this.extractMessage(body);
        const code = this.getCode(statusCode, body);
        const retryable = this.isRetryable(code, statusCode);
        const error = {
            code,
            message,
            statusCode,
            provider,
            retryable,
            retryAfter: this.extractRetryAfter(body),
            details: body,
            timestamp: Date.now(),
        };
        this.recordError(provider, error);
        this.config.onError?.(error);
        if (code === 'AUTH_EXPIRED' || code === 'AUTH_INVALID') {
            this.config.onAuthFailure?.(provider);
        }
        return error;
    }
    shouldRetry(error, attempt, maxRetries) {
        if (!error.retryable || attempt >= maxRetries)
            return false;
        if (error.code === 'RATE_LIMITED' && error.retryAfter && error.retryAfter > 30000)
            return false;
        return true;
    }
    getRetryDelay(error, attempt) {
        if (error.code === 'RATE_LIMITED' && error.retryAfter) {
            return error.retryAfter;
        }
        return Math.min(1000 * Math.pow(2, attempt), 30000);
    }
    getErrorCount(provider, windowMs = 3600000) {
        return this.errorCounts.get(provider) || 0;
    }
    getLastError(provider) {
        return this.lastErrors.get(provider);
    }
    reset(provider) {
        this.errorCounts.delete(provider);
        this.lastErrors.delete(provider);
    }
    recordError(provider, error) {
        this.errorCounts.set(provider, (this.errorCounts.get(provider) || 0) + 1);
        this.lastErrors.set(provider, error);
    }
    getCode(statusCode, body) {
        if (statusCode === 429)
            return 'RATE_LIMITED';
        if (statusCode === 401) {
            const msg = this.extractMessage(body).toLowerCase();
            if (msg.includes('expired'))
                return 'AUTH_EXPIRED';
            return 'AUTH_INVALID';
        }
        if (statusCode === 403) {
            const msg = this.extractMessage(body).toLowerCase();
            if (msg.includes('quota') || msg.includes('limit'))
                return 'QUOTA_EXCEEDED';
            return 'FORBIDDEN';
        }
        if (statusCode === 404)
            return 'NOT_FOUND';
        if (statusCode === 408)
            return 'TIMEOUT';
        if (statusCode === 422)
            return 'VALIDATION_ERROR';
        if (statusCode >= 500)
            return 'SERVER_ERROR';
        if (statusCode === 0)
            return 'NETWORK_ERROR';
        return 'UNKNOWN';
    }
    isRetryable(code, statusCode) {
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
    extractMessage(body) {
        if (body && typeof body === 'object') {
            const b = body;
            return (b.error?.message ||
                b.message ||
                b.error_description ||
                b.error ||
                'Unknown error');
        }
        return 'Unknown error';
    }
    extractRetryAfter(body) {
        if (body && typeof body === 'object') {
            const b = body;
            const retryAfter = b.retry_after;
            if (retryAfter) {
                const ms = typeof retryAfter === 'string' ? parseInt(retryAfter, 10) * 1000 : retryAfter * 1000;
                return ms;
            }
        }
        return undefined;
    }
}
export const globalErrorHandler = new ErrorHandler();
//# sourceMappingURL=error-handler.js.map