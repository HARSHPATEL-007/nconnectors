// Shared HTTP Client — Retry, timeout, circuit breaker
// Powers all 1,000+ adapter requests through a unified transport
export class HttpClient {
    config;
    circuitState = 'closed';
    failureCount = 0;
    lastFailureTime = 0;
    circuitThreshold = 5;
    circuitResetTime = 30000;
    constructor(config) {
        this.config = {
            timeout: 30000,
            maxRetries: 3,
            retryDelay: 1000,
            retryMultiplier: 2,
            maxRetryDelay: 30000,
            ...config,
        };
    }
    async request(req) {
        if (this.circuitState === 'open') {
            if (Date.now() - this.lastFailureTime > this.circuitResetTime) {
                this.circuitState = 'half-open';
            }
            else {
                throw this.makeError('CIRCUIT_OPEN', 'Circuit breaker is open', 503, false);
            }
        }
        let lastError = null;
        let retryCount = 0;
        for (let attempt = 0; attempt <= this.config.maxRetries; attempt++) {
            try {
                const response = await this.executeRequest(req);
                this.onSuccess();
                return { ...response, retryCount };
            }
            catch (err) {
                lastError = err;
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
    async executeRequest(req) {
        let url = this.config.baseUrl;
        if (req.path) {
            url += req.path.startsWith('/') ? req.path : `/${req.path}`;
        }
        if (req.params) {
            const searchParams = new URLSearchParams(req.params);
            url += `?${searchParams.toString()}`;
        }
        const headers = {
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
        const data = await response.json().catch(() => null);
        if (!response.ok) {
            const retryable = response.status >= 500 || response.status === 408 || response.status === 429;
            throw this.makeError(`HTTP_${response.status}`, data?.error?.message || data?.message || `HTTP ${response.status}`, response.status, retryable);
        }
        return { data, status: response.status, headers: response.headers };
    }
    isRetryable(err) {
        if (err && typeof err === 'object' && 'code' in err) {
            const e = err;
            return e.retryable || e.rateLimited || e.code === 'CIRCUIT_OPEN';
        }
        return false;
    }
    getRetryDelay(attempt, err) {
        let delay = this.config.retryDelay * Math.pow(this.config.retryMultiplier, attempt);
        if (err && typeof err === 'object' && 'rateLimited' in err) {
            const headers = err._headers;
            if (headers) {
                const retryAfter = headers.get('retry-after');
                if (retryAfter) {
                    delay = parseInt(retryAfter, 10) * 1000;
                }
            }
        }
        return Math.min(delay, this.config.maxRetryDelay);
    }
    onSuccess() {
        this.failureCount = 0;
        this.circuitState = 'closed';
    }
    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        if (this.failureCount >= this.circuitThreshold) {
            this.circuitState = 'open';
        }
    }
    makeError(code, message, statusCode, retryable) {
        return { code, message, statusCode, retryable, rateLimited: statusCode === 429 };
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
//# sourceMappingURL=http-client.js.map