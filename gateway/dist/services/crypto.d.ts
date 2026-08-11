import type { EncryptedTokens } from '../types/index.js';
export declare function encrypt(plaintext: string): string;
export declare function decrypt(ciphertext: string): string;
export declare function encryptTokens(tokens: {
    access_token: string;
    refresh_token: string;
    expires_at: string;
    scopes: string[];
}): EncryptedTokens;
export declare function decryptTokens(encrypted: EncryptedTokens): {
    access_token: string;
    refresh_token: string;
    expires_at: string;
    scopes: string[];
};
export declare function generateApiKey(): string;
export declare function generateSessionId(): string;
export declare function generateConnectionId(): string;
export declare function generateAgentId(): string;
export declare function generateAuditId(agentId: string): string;
export declare function generateEscalationId(): string;
export declare function generateRecipeId(): string;
export declare function hashData(data: string): string;
export declare function hmacSign(data: string, secret?: string): string;
export declare function verifyHmac(data: string, signature: string, secret?: string): boolean;
export declare function generateMerkleRoot(hashes: string[]): string;
//# sourceMappingURL=crypto.d.ts.map