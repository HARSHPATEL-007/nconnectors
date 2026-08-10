// Adapter Framework — Main Export
// Registers all production connectors

import { registry } from './core/index.js';
import { SalesforceAdapter, HubSpotAdapter, PipedriveAdapter } from './crm/index.js';
import { SlackAdapter, MicrosoftTeamsAdapter, DiscordAdapter } from './communication/index.js';
import { GitHubAdapter, GitLabAdapter, JiraAdapter } from './devops/index.js';
import { StripeAdapter, PayPalAdapter } from './finance/index.js';
import { S3Adapter, GoogleDriveAdapter, DropboxAdapter } from './storage/index.js';
import { MailchimpAdapter, KlaviyoAdapter } from './marketing/index.js';

// Register all adapters with the registry
registry.register('salesforce', SalesforceAdapter);
registry.register('hubspot', HubSpotAdapter);
registry.register('pipedrive', PipedriveAdapter);

registry.register('slack', SlackAdapter);
registry.register('microsoft_teams', MicrosoftTeamsAdapter);
registry.register('discord', DiscordAdapter);

registry.register('github', GitHubAdapter);
registry.register('gitlab', GitLabAdapter);
registry.register('jira', JiraAdapter);

registry.register('stripe', StripeAdapter);
registry.register('paypal', PayPalAdapter);

registry.register('aws_s3', S3Adapter);
registry.register('google_drive', GoogleDriveAdapter);
registry.register('dropbox', DropboxAdapter);

registry.register('mailchimp', MailchimpAdapter);
registry.register('klaviyo', KlaviyoAdapter);

// Re-export everything
export * from './core/index.js';
export * from './crm/index.js';
export * from './communication/index.js';
export * from './devops/index.js';
export * from './finance/index.js';
export * from './storage/index.js';
export * from './marketing/index.js';

// Utility function to create adapter from connection
export function createAdapter(connectionId: string, provider: string, credentials: { type: string; accessToken?: string; apiKey?: string; username?: string; password?: string }) {
  return registry.create(provider, {
    type: credentials.type as any,
    accessToken: credentials.accessToken,
    apiKey: credentials.apiKey,
    username: credentials.username,
    password: credentials.password,
  });
}
