// Service Layer — Unified exports for shared infrastructure

export { HttpClient, type HttpClientConfig, type HttpRequest, type HttpResponse } from './http-client.js';
export { RateLimiter, RateLimiterRegistry, globalRateLimiterRegistry, type RateLimiterConfig } from './rate-limiter.js';
export { TokenManager, globalTokenManager, type TokenManagerConfig, type TokenSet } from './token-manager.js';
export { ErrorHandler, globalErrorHandler, type ErrorHandlerConfig, type AdapterError, type ErrorCode } from './error-handler.js';
