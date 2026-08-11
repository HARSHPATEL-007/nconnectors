import { createCipheriv, createDecipheriv, randomBytes, scryptSync, createHash, createHmac } from 'node:crypto';
const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;
const SALT_LENGTH = 32;
function deriveKey(masterSecret, salt) {
    return scryptSync(masterSecret, salt, 32);
}
function getMasterKey() {
    return process.env.N0VA1O_MASTER_KEY || 'n0va1o-default-master-key-change-in-production';
}
export function encrypt(plaintext) {
    const salt = randomBytes(SALT_LENGTH);
    const iv = randomBytes(IV_LENGTH);
    const key = deriveKey(getMasterKey(), salt);
    const cipher = createCipheriv(ALGORITHM, key, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();
    const combined = Buffer.concat([salt, iv, authTag, encrypted]);
    return combined.toString('base64');
}
export function decrypt(ciphertext) {
    const combined = Buffer.from(ciphertext, 'base64');
    const salt = combined.subarray(0, SALT_LENGTH);
    const iv = combined.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const authTag = combined.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);
    const encrypted = combined.subarray(SALT_LENGTH + IV_LENGTH + AUTH_TAG_LENGTH);
    const key = deriveKey(getMasterKey(), salt);
    const decipher = createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
}
export function encryptTokens(tokens) {
    return {
        access_token: encrypt(tokens.access_token),
        refresh_token: encrypt(tokens.refresh_token),
        expires_at: tokens.expires_at,
        scopes: tokens.scopes,
    };
}
export function decryptTokens(encrypted) {
    return {
        access_token: decrypt(encrypted.access_token),
        refresh_token: decrypt(encrypted.refresh_token),
        expires_at: encrypted.expires_at,
        scopes: encrypted.scopes,
    };
}
export function generateApiKey() {
    const prefix = 'n0va_sk_';
    const randomPart = randomBytes(32).toString('base64url');
    return `${prefix}${randomPart}`;
}
export function generateSessionId() {
    return `sess_${randomBytes(16).toString('hex')}`;
}
export function generateConnectionId() {
    return `ca_${randomBytes(12).toString('base64url')}`;
}
export function generateAgentId() {
    return `agent_${randomBytes(8).toString('hex')}`;
}
export function generateAuditId(agentId) {
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = randomBytes(4).toString('hex');
    return `audit_${agentId}_${timestamp}_${random}`;
}
export function generateEscalationId() {
    return `esc_${randomBytes(12).toString('hex')}`;
}
export function generateRecipeId() {
    return `rec_${randomBytes(8).toString('hex')}`;
}
export function hashData(data) {
    return createHash('sha3-512').update(data).digest('hex');
}
export function hmacSign(data, secret) {
    const key = secret || getMasterKey();
    return createHmac('sha256', key).update(data).digest('hex');
}
export function verifyHmac(data, signature, secret) {
    const expected = hmacSign(data, secret);
    try {
        return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
    }
    catch {
        return false;
    }
}
function timingSafeEqual(a, b) {
    if (a.length !== b.length)
        return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return result === 0;
}
export function generateMerkleRoot(hashes) {
    if (hashes.length === 0)
        return hashData('');
    if (hashes.length === 1)
        return hashes[0];
    let level = hashes.map(h => hashData(h));
    while (level.length > 1) {
        const next = [];
        for (let i = 0; i < level.length; i += 2) {
            const left = level[i];
            const right = level[i + 1] || left;
            next.push(hashData(left + right));
        }
        level = next;
    }
    return level[0];
}
//# sourceMappingURL=crypto.js.map