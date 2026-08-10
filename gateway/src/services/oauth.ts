import { createServer } from 'node:http';
import { URL } from 'node:url';
import type { Agent } from '../types/index.js';
import { encrypt, decrypt } from './crypto.js';
import { prisma } from '../infrastructure/database.js';
import { logger } from '../infrastructure/logger.js';

interface OAuthProvider {
  name: string;
  clientId: string;
  clientSecret: string;
  authorizeUrl: string;
  tokenUrl: string;
  scopes: string[];
  redirectUri: string;
}

const providers: Record<string, OAuthProvider> = {
  slack: {
    name: 'Slack',
    clientId: process.env.SLACK_CLIENT_ID || '',
    clientSecret: process.env.SLACK_CLIENT_SECRET || '',
    authorizeUrl: 'https://slack.com/oauth/v2/authorize',
    tokenUrl: 'https://slack.com/api/oauth.v2.access',
    scopes: ['chat:write', 'channels:read', 'users:read', 'files:read'],
    redirectUri: `${process.env.GATEWAY_PUBLIC_URL || 'http://localhost:3001'}/v1/auth/callback/slack`,
  },
  github: {
    name: 'GitHub',
    clientId: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    authorizeUrl: 'https://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    scopes: ['repo', 'read:user', 'read:org'],
    redirectUri: `${process.env.GATEWAY_PUBLIC_URL || 'http://localhost:3001'}/v1/auth/callback/github`,
  },
  google: {
    name: 'Google',
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    authorizeUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/userinfo.email'],
    redirectUri: `${process.env.GATEWAY_PUBLIC_URL || 'http://localhost:3001'}/v1/auth/callback/google`,
  },
};

export class OAuthService {
  getAuthorizationUrl(provider: string, state: string): string {
    const config = providers[provider];
    if (!config) throw new Error(`Unknown provider: ${provider}`);
    if (!config.clientId) throw new Error(`${provider} OAuth not configured`);

    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: config.scopes.join(' '),
      state,
      response_type: 'code',
    });

    return `${config.authorizeUrl}?${params.toString()}`;
  }

  async handleCallback(provider: string, code: string): Promise<{
    access_token: string;
    refresh_token: string;
    expires_at: string;
    scopes: string[];
  }> {
    const config = providers[provider];
    if (!config) throw new Error(`Unknown provider: ${provider}`);

    const tokenResponse = await fetch(config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        code,
        redirect_uri: config.redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      logger.error({ provider, error }, 'OAuth token exchange failed');
      throw new Error(`OAuth token exchange failed: ${tokenResponse.status}`);
    }

    const data = await tokenResponse.json() as any;

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token || '',
      expires_at: new Date(Date.now() + (data.expires_in || 3600) * 1000).toISOString(),
      scopes: data.scope ? data.scope.split(/[,\s]/) : config.scopes,
    };
  }

  async refreshToken(provider: string, refreshToken: string): Promise<{
    access_token: string;
    refresh_token: string;
    expires_at: string;
  }> {
    const config = providers[provider];
    if (!config) throw new Error(`Unknown provider: ${provider}`);

    const response = await fetch(config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: new URLSearchParams({
        client_id: config.clientId,
        client_secret: config.clientSecret,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.status}`);
    }

    const data = await response.json() as any;

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token || refreshToken,
      expires_at: new Date(Date.now() + (data.expires_in || 3600) * 1000).toISOString(),
    };
  }

  generateState(agentId: string, provider: string): string {
    const data = JSON.stringify({ agentId, provider, nonce: crypto.randomUUID() });
    return Buffer.from(data).toString('base64url');
  }

  parseState(state: string): { agentId: string; provider: string; nonce: string } {
    try {
      return JSON.parse(Buffer.from(state, 'base64url').toString());
    } catch {
      throw new Error('Invalid OAuth state');
    }
  }
}

export const oauthService = new OAuthService();
