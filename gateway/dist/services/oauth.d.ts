export declare class OAuthService {
    getAuthorizationUrl(provider: string, state: string): string;
    handleCallback(provider: string, code: string): Promise<{
        access_token: string;
        refresh_token: string;
        expires_at: string;
        scopes: string[];
    }>;
    refreshToken(provider: string, refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
        expires_at: string;
    }>;
    generateState(agentId: string, provider: string): string;
    parseState(state: string): {
        agentId: string;
        provider: string;
        nonce: string;
    };
}
export declare const oauthService: OAuthService;
//# sourceMappingURL=oauth.d.ts.map