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
export declare class TokenManager {
    private tokens;
    private refreshFns;
    private refreshing;
    private readonly config;
    constructor(config?: Partial<TokenManagerConfig>);
    set(provider: string, tokens: TokenSet, refreshFn?: RefreshFunction): void;
    get(provider: string): TokenSet | undefined;
    getValidAccessToken(provider: string): Promise<string>;
    refresh(provider: string): Promise<TokenSet>;
    private doRefresh;
    revoke(provider: string): void;
    isExpired(tokens: TokenSet): boolean;
    needsRefresh(provider: string): boolean;
    getScopes(provider: string): string[];
    hasScope(provider: string, scope: string): boolean;
    private sleep;
}
export declare const globalTokenManager: TokenManager;
export {};
//# sourceMappingURL=token-manager.d.ts.map