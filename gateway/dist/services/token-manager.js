// Token Manager — OAuth lifecycle, refresh, encryption
// Handles auth for all 1,000+ connected platforms
export class TokenManager {
    tokens = new Map();
    refreshFns = new Map();
    refreshing = new Map();
    config;
    constructor(config = {}) {
        this.config = {
            autoRefresh: true,
            refreshBufferMs: 300000,
            maxRefreshAttempts: 3,
            ...config,
        };
    }
    set(provider, tokens, refreshFn) {
        this.tokens.set(provider, tokens);
        if (refreshFn) {
            this.refreshFns.set(provider, refreshFn);
        }
    }
    get(provider) {
        return this.tokens.get(provider);
    }
    async getValidAccessToken(provider) {
        const tokens = this.tokens.get(provider);
        if (!tokens) {
            throw new Error(`No tokens found for provider: ${provider}`);
        }
        if (this.isExpired(tokens)) {
            const refreshed = await this.refresh(provider);
            return refreshed.accessToken;
        }
        return tokens.accessToken;
    }
    async refresh(provider) {
        const existing = this.refreshing.get(provider);
        if (existing)
            return existing;
        const refreshPromise = this.doRefresh(provider);
        this.refreshing.set(provider, refreshPromise);
        try {
            const result = await refreshPromise;
            return result;
        }
        finally {
            this.refreshing.delete(provider);
        }
    }
    async doRefresh(provider) {
        const tokens = this.tokens.get(provider);
        const refreshFn = this.refreshFns.get(provider);
        if (!tokens?.refreshToken || !refreshFn) {
            throw new Error(`Cannot refresh tokens for ${provider}: no refresh token or handler`);
        }
        let lastError = null;
        for (let attempt = 0; attempt < this.config.maxRefreshAttempts; attempt++) {
            try {
                const newTokens = await refreshFn(tokens.refreshToken);
                const updated = {
                    ...newTokens,
                    refreshToken: newTokens.refreshToken || tokens.refreshToken,
                };
                this.tokens.set(provider, updated);
                if (this.config.onRefresh) {
                    await this.config.onRefresh(provider, updated);
                }
                return updated;
            }
            catch (err) {
                lastError = err;
                if (attempt < this.config.maxRefreshAttempts - 1) {
                    await this.sleep(Math.pow(2, attempt) * 1000);
                }
            }
        }
        if (this.config.onRefreshFailure) {
            await this.config.onRefreshFailure(provider, lastError);
        }
        throw new Error(`Token refresh failed for ${provider} after ${this.config.maxRefreshAttempts} attempts`);
    }
    revoke(provider) {
        this.tokens.delete(provider);
        this.refreshFns.delete(provider);
    }
    isExpired(tokens) {
        if (!tokens.expiresAt)
            return false;
        return Date.now() >= tokens.expiresAt - this.config.refreshBufferMs;
    }
    needsRefresh(provider) {
        const tokens = this.tokens.get(provider);
        if (!tokens)
            return false;
        return this.isExpired(tokens);
    }
    getScopes(provider) {
        return this.tokens.get(provider)?.scopes || [];
    }
    hasScope(provider, scope) {
        return this.getScopes(provider).includes(scope);
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
export const globalTokenManager = new TokenManager();
//# sourceMappingURL=token-manager.js.map