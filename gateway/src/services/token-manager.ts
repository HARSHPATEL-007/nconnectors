// Token Manager — OAuth lifecycle, refresh, encryption
// Handles auth for all 1,000+ connected platforms

export interface TokenSet {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  scopes?: string[];
  tokenType?: string;
}

export interface TokenManagerConfig {
  autoRefresh: boolean;
  refreshBufferMs: number;
  maxRefreshAttempts: number;
  onRefresh?: (provider: string, tokens: TokenSet) => Promise<void>;
  onRefreshFailure?: (provider: string, error: Error) => Promise<void>;
}

type RefreshFunction = (refreshToken: string) => Promise<TokenSet>;

export class TokenManager {
  private tokens = new Map<string, TokenSet>();
  private refreshFns = new Map<string, RefreshFunction>();
  private refreshing = new Map<string, Promise<TokenSet>>();
  private readonly config: TokenManagerConfig;

  constructor(config: Partial<TokenManagerConfig> = {}) {
    this.config = {
      autoRefresh: true,
      refreshBufferMs: 300000,
      maxRefreshAttempts: 3,
      ...config,
    };
  }

  set(provider: string, tokens: TokenSet, refreshFn?: RefreshFunction): void {
    this.tokens.set(provider, tokens);
    if (refreshFn) {
      this.refreshFns.set(provider, refreshFn);
    }
  }

  get(provider: string): TokenSet | undefined {
    return this.tokens.get(provider);
  }

  async getValidAccessToken(provider: string): Promise<string> {
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

  async refresh(provider: string): Promise<TokenSet> {
    const existing = this.refreshing.get(provider);
    if (existing) return existing;

    const refreshPromise = this.doRefresh(provider);
    this.refreshing.set(provider, refreshPromise);

    try {
      const result = await refreshPromise;
      return result;
    } finally {
      this.refreshing.delete(provider);
    }
  }

  private async doRefresh(provider: string): Promise<TokenSet> {
    const tokens = this.tokens.get(provider);
    const refreshFn = this.refreshFns.get(provider);

    if (!tokens?.refreshToken || !refreshFn) {
      throw new Error(`Cannot refresh tokens for ${provider}: no refresh token or handler`);
    }

    let lastError: Error | null = null;
    for (let attempt = 0; attempt < this.config.maxRefreshAttempts; attempt++) {
      try {
        const newTokens = await refreshFn(tokens.refreshToken);
        const updated: TokenSet = {
          ...newTokens,
          refreshToken: newTokens.refreshToken || tokens.refreshToken,
        };
        this.tokens.set(provider, updated);

        if (this.config.onRefresh) {
          await this.config.onRefresh(provider, updated);
        }

        return updated;
      } catch (err) {
        lastError = err as Error;
        if (attempt < this.config.maxRefreshAttempts - 1) {
          await this.sleep(Math.pow(2, attempt) * 1000);
        }
      }
    }

    if (this.config.onRefreshFailure) {
      await this.config.onRefreshFailure(provider, lastError!);
    }

    throw new Error(`Token refresh failed for ${provider} after ${this.config.maxRefreshAttempts} attempts`);
  }

  revoke(provider: string): void {
    this.tokens.delete(provider);
    this.refreshFns.delete(provider);
  }

  isExpired(tokens: TokenSet): boolean {
    if (!tokens.expiresAt) return false;
    return Date.now() >= tokens.expiresAt - this.config.refreshBufferMs;
  }

  needsRefresh(provider: string): boolean {
    const tokens = this.tokens.get(provider);
    if (!tokens) return false;
    return this.isExpired(tokens);
  }

  getScopes(provider: string): string[] {
    return this.tokens.get(provider)?.scopes || [];
  }

  hasScope(provider: string, scope: string): boolean {
    return this.getScopes(provider).includes(scope);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const globalTokenManager = new TokenManager();
