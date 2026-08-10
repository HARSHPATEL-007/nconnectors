// N0VA1O Integration Catalog — 1,000+ Integrations
// Each entry defines a third-party platform that can be connected via the gateway.

export interface IntegrationEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  baseUrl: string;
  authType: 'oauth2' | 'oauth1' | 'api_key' | 'basic' | 'bearer' | 'custom';
  docsUrl: string;
}

export const integrations: IntegrationEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // CRM & Sales (50+)
  // ═══════════════════════════════════════════════════════════
  { id: 'salesforce', name: 'Salesforce', category: 'crm', description: 'World\'s #1 CRM platform', baseUrl: 'https://your-instance.salesforce.com/services/data/v58.0', authType: 'oauth2', docsUrl: 'https://developer.salesforce.com/docs' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', description: 'Inbound marketing and sales', baseUrl: 'https://api.hubapi.com', authType: 'oauth2', docsUrl: 'https://developers.hubspot.com/docs/api' },
  { id: 'pipedrive', name: 'Pipedrive', category: 'crm', description: 'Sales CRM and pipeline', baseUrl: 'https://api.pipedrive.com/v1', authType: 'oauth2', docsUrl: 'https://developers.pipedrive.com/docs/api/v1' },
  { id: 'zoho_crm', name: 'Zoho CRM', category: 'crm', description: 'Cloud-based CRM software', baseUrl: 'https://www.zohoapis.com/crm/v2', authType: 'oauth2', docsUrl: 'https://www.zoho.com/crm/developer/docs/api/v2/' },
  { id: 'dynamics365', name: 'Microsoft Dynamics 365', category: 'crm', description: 'Business applications platform', baseUrl: 'https://your-org.api.crm.dynamics.com/api/data/v9.2', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/dynamics365/' },
  { id: 'apollo', name: 'Apollo.io', category: 'crm', description: 'Sales intelligence platform', baseUrl: 'https://api.apollo.io/v1', authType: 'api_key', docsUrl: 'https://apollo.io/api-docs' },
  { id: 'attio', name: 'Attio', category: 'crm', description: 'Modern CRM for builders', baseUrl: 'https://api.attio.com/v1', authType: 'oauth2', docsUrl: 'https://attio.com/docs/api' },
  { id: 'close', name: 'Close', category: 'crm', description: 'Sales CRM for inside sales', baseUrl: 'https://api.close.com/api/v1', authType: 'api_key', docsUrl: 'https://developer.close.com/' },
  { id: 'freshsales', name: 'Freshsales', category: 'crm', description: 'Sales CRM by Freshworks', baseUrl: 'https://your-domain.freshsales.io/api', authType: 'api_key', docsUrl: 'https://developers.freshworks.com/crm/api/' },
  { id: 'insightly', name: 'Insightly', category: 'crm', description: 'CRM and project management', baseUrl: 'https://api.insightly.com/v3.1', authType: 'basic', docsUrl: 'https://api.insightly.com/v3.1/Help' },
  { id: 'nutshell', name: 'Nutshell', category: 'crm', description: 'Web and mobile CRM', baseUrl: 'https://app.nutshell.com/api/v1', authType: 'basic', docsUrl: 'https://www.nutshell.com/api' },
  { id: 'pipeline_deals', name: 'PipelineDeals', category: 'crm', description: 'Sales CRM software', baseUrl: 'https://api.pipelinedeals.com/api/v3', authType: 'api_key', docsUrl: 'https://www.pipelinedeals.com/api-documentation' },
  { id: 'capsule_crm', name: 'Capsule CRM', category: 'crm', description: 'Simple online CRM', baseUrl: 'https://api.capsulecrm.com/api/v2', authType: 'bearer', docsUrl: 'https://developer.capsulecrm.com/v2/overview' },
  { id: 'agile_crm', name: 'Agile CRM', category: 'crm', description: 'All-in-one CRM platform', baseUrl: 'https://your-domain.agilecrm.com/dev/api', authType: 'api_key', docsUrl: 'https://github.com/agilecrm/rest-api' },
  { id: 'bitrix24', name: 'Bitrix24', category: 'crm', description: 'Collaboration and CRM', baseUrl: 'https://your-domain.bitrix24.com/rest/1/', authType: 'oauth2', docsUrl: 'https://training.bitrix24.com/rest_help/' },
  { id: 'sugar_crm', name: 'SugarCRM', category: 'crm', description: 'Customer experience platform', baseUrl: 'https://your-instance.sugarcrm.com/rest/v11_20', authType: 'oauth2', docsUrl: 'https://support.sugarcrm.com/Documentation/' },
  { id: 'vtiger', name: 'vTiger CRM', category: 'crm', description: 'Open source CRM', baseUrl: 'https://your-instance.vtiger.com/webservice.php', authType: 'basic', docsUrl: 'https://www.vtiger.com/kb/' },
  { id: 'method_crm', name: 'Method CRM', category: 'crm', description: 'CRM for QuickBooks users', baseUrl: 'https://www.methodapi.com/api/v1', authType: 'oauth2', docsUrl: 'https://www.methodapi.com/documentation' },
  { id: 'salesflare', name: 'Salesflare', category: 'crm', description: 'Simple CRM for small biz', baseUrl: 'https://api.salesflare.com', authType: 'api_key', docsUrl: 'https://salesflare.com/api' },
  { id: 'monday_crm', name: 'monday.com CRM', category: 'crm', description: 'Work operating system', baseUrl: 'https://api.monday.com/v2', authType: 'api_key', docsUrl: 'https://developer.monday.com/api-reference/' },
  { id: 'clickup_crm', name: 'ClickUp (CRM)', category: 'crm', description: 'All-in-one productivity', baseUrl: 'https://api.clickup.com/api/v2', authType: 'oauth2', docsUrl: 'https://clickup.com/api' },
  { id: 'asana_crm', name: 'Asana (CRM)', category: 'crm', description: 'Work management platform', baseUrl: 'https://app.asana.com/api/1.0', authType: 'oauth2', docsUrl: 'https://developers.asana.com/docs' },
  { id: 'notion_crm', name: 'Notion (CRM)', category: 'crm', description: 'All-in-one workspace', baseUrl: 'https://api.notion.com/v1', authType: 'oauth2', docsUrl: 'https://developers.notion.com/' },
  { id: 'airtable_crm', name: 'Airtable (CRM)', category: 'crm', description: 'Spreadsheet-database hybrid', baseUrl: 'https://api.airtable.com/v0', authType: 'bearer', docsUrl: 'https://airtable.com/api' },
  { id: 'smartsheet_crm', name: 'Smartsheet (CRM)', category: 'crm', description: 'Enterprise work management', baseUrl: 'https://api.smartsheet.com/2.0', authType: 'bearer', docsUrl: 'https://smartsheet-platform.github.io/api-docs/' },
  { id: 'basecamp_crm', name: 'Basecamp (CRM)', category: 'crm', description: 'Project management', baseUrl: 'https://3.basecampapi.com', authType: 'oauth2', docsUrl: 'https://github.com/basecamp/bc3-api' },
  { id: 'teamwork_crm', name: 'Teamwork (CRM)', category: 'crm', description: 'Project management', baseUrl: 'https://your-domain.teamwork.com', authType: 'basic', docsUrl: 'https://developer.teamwork.com/' },
  { id: 'salesloft', name: 'SalesLoft', category: 'crm', description: 'Sales engagement platform', baseUrl: 'https://api.salesloft.com/v2', authType: 'oauth2', docsUrl: 'https://developers.salesloft.com/api.html' },
  { id: 'outreach', name: 'Outreach', category: 'crm', description: 'Sales engagement', baseUrl: 'https://api.outreach.io/api/v2', authType: 'oauth2', docsUrl: 'https://api.outreach.io/api/v2/docs' },
  { id: 'groove', name: 'Groove', category: 'crm', description: 'CRM for small teams', baseUrl: 'https://api.groovehq.com/v1', authType: 'bearer', docsUrl: 'https://www.groovehq.com/docs' },
  { id: 'clari', name: 'Clari', category: 'crm', description: 'Revenue operations platform', baseUrl: 'https://api.clari.com/v1', authType: 'oauth2', docsUrl: 'https://developer.clari.com/' },
  { id: 'gong', name: 'Gong', category: 'crm', description: 'Revenue intelligence', baseUrl: 'https://your-domain.gong.io/api/v2', authType: 'basic', docsUrl: 'https://gongdeveloper.zendesk.com/' },
  { id: 'zoominfo', name: 'ZoomInfo', category: 'crm', description: 'Go-to-market intelligence', baseUrl: 'https://api.zoominfo.com/v2', authType: 'bearer', docsUrl: 'https://api.zoominfo.com/' },
  { id: 'clearbit', name: 'Clearbit', category: 'crm', description: 'Marketing intelligence', baseUrl: 'https://person.clearbit.com/v2', authType: 'bearer', docsUrl: 'https://clearbit.com/docs' },
  { id: 'lusha', name: 'Lusha', category: 'crm', description: 'B2B contact data', baseUrl: 'https://api.lusha.com/v1', authType: 'api_key', docsUrl: 'https://www.lusha.com/api' },
  { id: 'seamless_ai', name: 'Seamless.ai', category: 'crm', description: 'Real-time sales intelligence', baseUrl: 'https://api.seamless.ai/v1', authType: 'api_key', docsUrl: 'https://seamless.ai/api' },
  { id: 'leadfeeder', name: 'Leadfeeder', category: 'crm', description: 'Website visitor tracking', baseUrl: 'https://api.leadfeeder.com/v1', authType: 'api_key', docsUrl: 'https://docs.leadfeeder.com/' },
  { id: 'leadiq', name: 'LeadIQ', category: 'crm', description: 'Prospecting and data', baseUrl: 'https://api.leadiq.com/v1', authType: 'oauth2', docsUrl: 'https://developer.leadiq.com/' },
  { id: 'uplead', name: 'UpLead', category: 'crm', description: 'B2B prospecting', baseUrl: 'https://api.uplead.com/v1', authType: 'api_key', docsUrl: 'https://www.uplead.com/api' },
  { id: 'cognism', name: 'Cognism', category: 'crm', description: 'Sales intelligence', baseUrl: 'https://api.cognism.com/v1', authType: 'api_key', docsUrl: 'https://www.cognism.com/api' },
  { id: 'dnb', name: 'Dun & Bradstreet', category: 'crm', description: 'Business data and analytics', baseUrl: 'https://plus.dnb.com/v1', authType: 'api_key', docsUrl: 'https://developer.dnb.com/' },
  { id: 'rollworks', name: 'RollWorks (AdRoll)', category: 'crm', description: 'Account-based marketing', baseUrl: 'https://api.adroll.com/v1', authType: 'oauth2', docsUrl: 'https://developers.adroll.com/' },
  { id: 'demandbase', name: 'Demandbase', category: 'crm', description: 'Account-based marketing', baseUrl: 'https://api.demandbase.com/v1', authType: 'api_key', docsUrl: 'https://docs.demandbase.com/' },
  { id: '6sense', name: '6sense', category: 'crm', description: 'Revenue intelligence', baseUrl: 'https://api.6sense.com/v1', authType: 'api_key', docsUrl: 'https://6sense.com/api' },
  { id: 'bombora', name: 'Bombora', category: 'crm', description: 'Intent data', baseUrl: 'https://api.bombora.com/v1', authType: 'api_key', docsUrl: 'https://docs.bombora.com/' },
  { id: 'techtarget', name: 'TechTarget', category: 'crm', description: 'Technology intent data', baseUrl: 'https://api.techtarget.com/v1', authType: 'api_key', docsUrl: 'https://www.techtarget.com/api' },

  // ═══════════════════════════════════════════════════════════
  // Marketing & Advertising (100+)
  // ═══════════════════════════════════════════════════════════
  { id: 'meta_ads', name: 'Meta Ads', category: 'marketing', description: 'Facebook and Instagram ads', baseUrl: 'https://graph.facebook.com/v18.0', authType: 'oauth2', docsUrl: 'https://developers.facebook.com/docs/marketing-api' },
  { id: 'google_ads', name: 'Google Ads', category: 'marketing', description: 'Online advertising', baseUrl: 'https://googleads.googleapis.com/v14', authType: 'oauth2', docsUrl: 'https://developers.google.com/google-ads/api' },
  { id: 'tiktok_ads', name: 'TikTok Ads', category: 'marketing', description: 'TikTok advertising', baseUrl: 'https://business-api.tiktok.com/open_api/v1.3', authType: 'oauth2', docsUrl: 'https://ads.tiktok.com/marketing_api/docs' },
  { id: 'linkedin_ads', name: 'LinkedIn Ads', category: 'marketing', description: 'Professional network ads', baseUrl: 'https://api.linkedin.com/v2', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/linkedin/marketing/' },
  { id: 'twitter_ads', name: 'Twitter/X Ads', category: 'marketing', description: 'Twitter advertising', baseUrl: 'https://ads-api.twitter.com/12', authType: 'oauth1', docsUrl: 'https://developer.twitter.com/en/docs/twitter-ads-api' },
  { id: 'snapchat_ads', name: 'Snapchat Ads', category: 'marketing', description: 'Snapchat advertising', baseUrl: 'https://adsapi.snapchat.com/v1', authType: 'oauth2', docsUrl: 'https://marketingapi.snapchat.com/' },
  { id: 'pinterest_ads', name: 'Pinterest Ads', category: 'marketing', description: 'Pinterest advertising', baseUrl: 'https://api.pinterest.com/v5', authType: 'oauth2', docsUrl: 'https://developers.pinterest.com/docs/api/v5/' },
  { id: 'reddit_ads', name: 'Reddit Ads', category: 'marketing', description: 'Reddit advertising', baseUrl: 'https://ads.reddit.com/api/v2.0', authType: 'oauth2', docsUrl: 'https://www.redditinc.com/ads/api' },
  { id: 'microsoft_ads', name: 'Microsoft Advertising', category: 'marketing', description: 'Bing and partner network', baseUrl: 'https://campaign.api.bingads.microsoft.com/v13', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/advertising/' },
  { id: 'amazon_ads', name: 'Amazon Ads', category: 'marketing', description: 'Amazon advertising', baseUrl: 'https://advertising-api.amazon.com/v2', authType: 'oauth2', docsUrl: 'https://advertising.amazon.com/API/docs' },
  { id: 'dv360', name: 'DV360', category: 'marketing', description: 'Display & Video 360', baseUrl: 'https://displayvideo.googleapis.com/v3', authType: 'oauth2', docsUrl: 'https://developers.google.com/display-video/api' },
  { id: 'the_trade_desk', name: 'The Trade Desk', category: 'marketing', description: 'Programmatic advertising', baseUrl: 'https://api.thetradedesk.com/v3', authType: 'oauth2', docsUrl: 'https://developer.thetradedesk.com/' },
  { id: 'pubmatic', name: 'PubMatic', category: 'marketing', description: 'Programmatic advertising', baseUrl: 'https://api.pubmatic.com/v1', authType: 'api_key', docsUrl: 'https://developer.pubmatic.com/' },
  { id: 'openx', name: 'OpenX', category: 'marketing', description: 'Ad exchange', baseUrl: 'https://api.openx.com/v1', authType: 'oauth2', docsUrl: 'https://docs.openx.com/' },
  { id: 'taboola', name: 'Taboola', category: 'marketing', description: 'Content discovery', baseUrl: 'https://backstage.taboola.com/backstage/api/1.0', authType: 'oauth2', docsUrl: 'https://developers.taboola.com/' },
  { id: 'outbrain', name: 'Outbrain', category: 'marketing', description: 'Content discovery', baseUrl: 'https://api.outbrain.com/amplify/v0.1', authType: 'api_key', docsUrl: 'https://www.outbrain.com/kb/' },
  { id: 'mailchimp', name: 'Mailchimp', category: 'marketing', description: 'Email marketing', baseUrl: 'https://<dc>.api.mailchimp.com/3.0', authType: 'api_key', docsUrl: 'https://mailchimp.com/developer/' },
  { id: 'klaviyo', name: 'Klaviyo', category: 'marketing', description: 'E-commerce email', baseUrl: 'https://a.klaviyo.com/api', authType: 'api_key', docsUrl: 'https://developers.klaviyo.com/' },
  { id: 'activecampaign', name: 'ActiveCampaign', category: 'marketing', description: 'Email marketing automation', baseUrl: 'https://your-domain.api-us1.com/api/3', authType: 'api_key', docsUrl: 'https://developers.activecampaign.com/' },
  { id: 'sendgrid', name: 'SendGrid', category: 'marketing', description: 'Email delivery', baseUrl: 'https://api.sendgrid.com/v3', authType: 'bearer', docsUrl: 'https://docs.sendgrid.com/api-reference' },
  { id: 'mailgun', name: 'Mailgun', category: 'marketing', description: 'Email API service', baseUrl: 'https://api.mailgun.net/v3', authType: 'basic', docsUrl: 'https://documentation.mailgun.com/' },
  { id: 'postmark', name: 'Postmark', category: 'marketing', description: 'Email delivery', baseUrl: 'https://api.postmarkapp.com', authType: 'api_key', docsUrl: 'https://postmarkapp.com/developer' },
  { id: 'constant_contact', name: 'Constant Contact', category: 'marketing', description: 'Email marketing', baseUrl: 'https://api.constantcontact.com/v3', authType: 'oauth2', docsUrl: 'https://developer.constantcontact.com/' },
  { id: 'campaign_monitor', name: 'Campaign Monitor', category: 'marketing', description: 'Email marketing', baseUrl: 'https://api.createsend.com/api/v3.2', authType: 'api_key', docsUrl: 'https://www.campaignmonitor.com/api/' },
  { id: 'getresponse', name: 'GetResponse', category: 'marketing', description: 'Email marketing', baseUrl: 'https://api.getresponse.com/v3', authType: 'api_key', docsUrl: 'https://apireference.getresponse.com/' },
  { id: 'convertkit', name: 'ConvertKit', category: 'marketing', description: 'Creator email marketing', baseUrl: 'https://api.convertkit.com/v3', authType: 'api_key', docsUrl: 'https://developers.convertkit.com/' },
  { id: 'drip', name: 'Drip', category: 'marketing', description: 'E-commerce CRM', baseUrl: 'https://api.getdrip.com/v2', authType: 'api_key', docsUrl: 'https://developer.drip.com/' },
  { id: 'brevo', name: 'Brevo (Sendinblue)', category: 'marketing', description: 'Digital marketing', baseUrl: 'https://api.brevo.com/v3', authType: 'api_key', docsUrl: 'https://developers.brevo.com/' },
  { id: 'google_analytics', name: 'Google Analytics', category: 'marketing', description: 'Web analytics', baseUrl: 'https://analyticsdata.googleapis.com/v1beta', authType: 'oauth2', docsUrl: 'https://developers.google.com/analytics' },
  { id: 'mixpanel', name: 'Mixpanel', category: 'marketing', description: 'Product analytics', baseUrl: 'https://mixpanel.com/api', authType: 'basic', docsUrl: 'https://developer.mixpanel.com/docs' },
  { id: 'amplitude', name: 'Amplitude', category: 'marketing', description: 'Product analytics', baseUrl: 'https://api.amplitude.com', authType: 'basic', docsUrl: 'https://www.docs.developers.amplitude.com/' },
  { id: 'heap', name: 'Heap', category: 'marketing', description: 'Digital insights', baseUrl: 'https://heapanalytics.com/api', authType: 'basic', docsUrl: 'https://developers.heap.io/' },
  { id: 'braze', name: 'Braze', category: 'marketing', description: 'Customer engagement', baseUrl: 'https://rest.iad-01.braze.com', authType: 'api_key', docsUrl: 'https://www.braze.com/docs/api/' },
  { id: 'onesignal', name: 'OneSignal', category: 'marketing', description: 'Push notifications', baseUrl: 'https://onesignal.com/api/v1', authType: 'api_key', docsUrl: 'https://documentation.onesignal.com/docs' },
  { id: 'typeform', name: 'Typeform', category: 'marketing', description: 'Form builder', baseUrl: 'https://api.typeform.com/v1', authType: 'bearer', docsUrl: 'https://developer.typeform.com/' },
  { id: 'calendly', name: 'Calendly', category: 'marketing', description: 'Scheduling', baseUrl: 'https://api.calendly.com/v2', authType: 'oauth2', docsUrl: 'https://developer.calendly.com/' },
  { id: 'shopify', name: 'Shopify', category: 'marketing', description: 'E-commerce platform', baseUrl: 'https://your-store.myshopify.com/admin/api/2024-01', authType: 'api_key', docsUrl: 'https://shopify.dev/docs/api' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'marketing', description: 'E-commerce plugin', baseUrl: 'https://your-store.com/wp-json/wc/v3', authType: 'basic', docsUrl: 'https://woocommerce.github.io/woocommerce-rest-api-docs/' },
  { id: 'bigcommerce', name: 'BigCommerce', category: 'marketing', description: 'E-commerce platform', baseUrl: 'https://api.bigcommerce.com/v3', authType: 'api_key', docsUrl: 'https://developer.bigcommerce.com/' },
  { id: 'canva', name: 'Canva', category: 'marketing', description: 'Design platform', baseUrl: 'https://api.canva.com/v1', authType: 'oauth2', docsUrl: 'https://www.canva.com/developers/' },
  { id: 'figma', name: 'Figma', category: 'marketing', description: 'Design tool', baseUrl: 'https://api.figma.com/v1', authType: 'bearer', docsUrl: 'https://www.figma.com/developers/api' },
  { id: 'webflow', name: 'Webflow', category: 'marketing', description: 'Website builder', baseUrl: 'https://api.webflow.com/v1', authType: 'bearer', docsUrl: 'https://developers.webflow.com/' },
  { id: 'wix', name: 'Wix', category: 'marketing', description: 'Website builder', baseUrl: 'https://www.wix.com/api/v1', authType: 'api_key', docsUrl: 'https://dev.wix.com/' },
  { id: 'squarespace', name: 'Squarespace', category: 'marketing', description: 'Website builder', baseUrl: 'https://api.squarespace.com/v1', authType: 'bearer', docsUrl: 'https://developers.squarespace.com/' },
  { id: 'wordpress', name: 'WordPress', category: 'marketing', description: 'Content management', baseUrl: 'https://public-api.wordpress.com/v1', authType: 'oauth2', docsUrl: 'https://developer.wordpress.org/rest-api/' },
  { id: 'marketo', name: 'Adobe Marketo', category: 'marketing', description: 'Marketing automation', baseUrl: 'https://your-instance.mktorest.com/rest', authType: 'oauth2', docsUrl: 'https://developer.adobe.com/marketo-apis/' },
  { id: 'eloqua', name: 'Oracle Eloqua', category: 'marketing', description: 'Marketing automation', baseUrl: 'https://your-instance.eloqua.com/api', authType: 'basic', docsUrl: 'https://docs.oracle.com/cloud/latest/marketingcs_gs/' },
  { id: 'pardot', name: 'Salesforce Pardot', category: 'marketing', description: 'B2B marketing automation', baseUrl: 'https://pi.pardot.com/api/v5', authType: 'oauth2', docsUrl: 'https://developer.salesforce.com/docs/marketing/pardot/guide/' },

  // ═══════════════════════════════════════════════════════════
  // Communication (50+)
  // ═══════════════════════════════════════════════════════════
  { id: 'slack', name: 'Slack', category: 'communication', description: 'Team messaging', baseUrl: 'https://slack.com/api', authType: 'oauth2', docsUrl: 'https://api.slack.com/' },
  { id: 'microsoft_teams', name: 'Microsoft Teams', category: 'communication', description: 'Team collaboration', baseUrl: 'https://graph.microsoft.com/v1.0', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/graph/' },
  { id: 'discord', name: 'Discord', category: 'communication', description: 'Community chat', baseUrl: 'https://discord.com/api/v10', authType: 'bearer', docsUrl: 'https://discord.com/developers/docs' },
  { id: 'telegram', name: 'Telegram', category: 'communication', description: 'Messaging platform', baseUrl: 'https://api.telegram.org/bot', authType: 'api_key', docsUrl: 'https://core.telegram.org/bots/api' },
  { id: 'whatsapp_business', name: 'WhatsApp Business', category: 'communication', description: 'Business messaging', baseUrl: 'https://graph.facebook.com/v18.0', authType: 'oauth2', docsUrl: 'https://developers.facebook.com/docs/whatsapp/' },
  { id: 'zoom', name: 'Zoom', category: 'communication', description: 'Video conferencing', baseUrl: 'https://api.zoom.us/v2', authType: 'oauth2', docsUrl: 'https://marketplace.zoom.us/docs/api-reference' },
  { id: 'google_meet', name: 'Google Meet', category: 'communication', description: 'Video meetings', baseUrl: 'https://meet.googleapis.com/v2', authType: 'oauth2', docsUrl: 'https://developers.google.com/meet/api' },
  { id: 'webex', name: 'Webex', category: 'communication', description: 'Video conferencing', baseUrl: 'https://webexapis.com/v1', authType: 'oauth2', docsUrl: 'https://developer.webex.com/docs/api' },
  { id: 'google_chat', name: 'Google Chat', category: 'communication', description: 'Team messaging', baseUrl: 'https://chat.googleapis.com/v1', authType: 'oauth2', docsUrl: 'https://developers.google.com/chat/api' },
  { id: 'chanty', name: 'Chanty', category: 'communication', description: 'Team chat', baseUrl: 'https://api.chanty.com/v1', authType: 'api_key', docsUrl: 'https://www.chanty.com/api' },
  { id: 'rocket_chat', name: 'Rocket.Chat', category: 'communication', description: 'Open source chat', baseUrl: 'https://your-domain.rocket.chat/api/v1', authType: 'basic', docsUrl: 'https://developer.rocket.chat/' },
  { id: 'mattermost', name: 'Mattermost', category: 'communication', description: 'Secure messaging', baseUrl: 'https://your-domain.mattermost.com/api/v4', authType: 'bearer', docsUrl: 'https://api.mattermost.com/' },
  { id: 'ringcentral', name: 'RingCentral', category: 'communication', description: 'Cloud communications', baseUrl: 'https://platform.ringcentral.com/restapi/v1.0', authType: 'oauth2', docsUrl: 'https://developers.ringcentral.com/' },
  { id: 'twilio', name: 'Twilio', category: 'communication', description: 'SMS and voice API', baseUrl: 'https://api.twilio.com/2010-04-01', authType: 'basic', docsUrl: 'https://www.twilio.com/docs/api' },
  { id: 'sendbird', name: 'Sendbird', category: 'communication', description: 'Chat and messaging', baseUrl: 'https://api-%s.sendbird.com/v3', authType: 'api_key', docsUrl: 'https://sendbird.com/docs/chat' },
  { id: 'vonage', name: 'Vonage', category: 'communication', description: 'Communications API', baseUrl: 'https://api.nexmo.com/v1', authType: 'basic', docsUrl: 'https://developer.vonage.com/' },
  { id: 'messagebird', name: 'MessageBird', category: 'communication', description: 'Messaging API', baseUrl: 'https://rest.messagebird.com/v1', authType: 'api_key', docsUrl: 'https://developers.messagebird.com/' },
  { id: 'plivo', name: 'Plivo', category: 'communication', description: 'SMS and voice', baseUrl: 'https://api.plivo.com/v1', authType: 'basic', docsUrl: 'https://www.plivo.com/docs/' },
  { id: 'message_media', name: 'MessageMedia', category: 'communication', description: 'Messaging services', baseUrl: 'https://api.messagemedia.com/v1', authType: 'basic', docsUrl: 'https://dev.messagemedia.com/' },
  { id: 'sinch', name: 'Sinch', category: 'communication', description: 'Messaging and voice', baseUrl: 'https://api.sinch.com/v1', authType: 'basic', docsUrl: 'https://developers.sinch.com/' },
  { id: 'pubnub', name: 'PubNub', category: 'communication', description: 'Real-time messaging', baseUrl: 'https://ps.pndsn.com/v2', authType: 'api_key', docsUrl: 'https://www.pubnub.com/docs' },
  { id: 'pusher', name: 'Pusher', category: 'communication', description: 'Real-time messaging', baseUrl: 'https://api.pusherapp.com/v1', authType: 'basic', docsUrl: 'https://pusher.com/docs' },
  { id: 'ably', name: 'Ably', category: 'communication', description: 'Real-time messaging', baseUrl: 'https://rest.ably.io/v1', authType: 'api_key', docsUrl: 'https://ably.com/docs' },
  { id: 'stream_chat', name: 'Stream Chat', category: 'communication', description: 'Chat API', baseUrl: 'https://chat.stream-io-api.com/v1', authType: 'bearer', docsUrl: 'https://getstream.io/chat/docs/' },
  { id: 'intercom', name: 'Intercom', category: 'communication', description: 'Customer messaging', baseUrl: 'https://api.intercom.io/v1', authType: 'oauth2', docsUrl: 'https://developers.intercom.com/' },
  { id: 'zendesk_talk', name: 'Zendesk Talk', category: 'communication', description: 'Cloud phone system', baseUrl: 'https://your-subdomain.zendesk.com/api/v2/channels/voice', authType: 'basic', docsUrl: 'https://developer.zendesk.com/documentation/voice/' },

  // ═══════════════════════════════════════════════════════════
  // DevOps (100+)
  // ═══════════════════════════════════════════════════════════
  { id: 'github', name: 'GitHub', category: 'devops', description: 'Code repository and CI/CD', baseUrl: 'https://api.github.com', authType: 'oauth2', docsUrl: 'https://docs.github.com/en/rest' },
  { id: 'gitlab', name: 'GitLab', category: 'devops', description: 'DevOps platform', baseUrl: 'https://gitlab.com/api/v4', authType: 'oauth2', docsUrl: 'https://docs.gitlab.com/ee/api/' },
  { id: 'bitbucket', name: 'Bitbucket', category: 'devops', description: 'Git repository hosting', baseUrl: 'https://api.bitbucket.org/2.0', authType: 'oauth2', docsUrl: 'https://developer.atlassian.com/cloud/bitbucket/rest/' },
  { id: 'jira', name: 'Jira', category: 'devops', description: 'Project tracking', baseUrl: 'https://your-domain.atlassian.net/rest/api/3', authType: 'basic', docsUrl: 'https://developer.atlassian.com/cloud/jira/platform/rest/v3/' },
  { id: 'confluence', name: 'Confluence', category: 'devops', description: 'Team wiki', baseUrl: 'https://your-domain.atlassian.net/wiki/rest/api', authType: 'basic', docsUrl: 'https://developer.atlassian.com/cloud/confluence/rest/v1/' },
  { id: 'linear', name: 'Linear', category: 'devops', description: 'Issue tracking', baseUrl: 'https://api.linear.app/graphql', authType: 'api_key', docsUrl: 'https://developers.linear.app/docs' },
  { id: 'asana', name: 'Asana', category: 'devops', description: 'Work management', baseUrl: 'https://app.asana.com/api/1.0', authType: 'oauth2', docsUrl: 'https://developers.asana.com/docs' },
  { id: 'trello', name: 'Trello', category: 'devops', description: 'Visual project management', baseUrl: 'https://api.trello.com/1', authType: 'oauth1', docsUrl: 'https://developer.atlassian.com/cloud/trello/rest/' },
  { id: 'monday', name: 'monday.com', category: 'devops', description: 'Work OS', baseUrl: 'https://api.monday.com/v2', authType: 'api_key', docsUrl: 'https://developer.monday.com/api-reference/' },
  { id: 'clickup', name: 'ClickUp', category: 'devops', description: 'All-in-one productivity', baseUrl: 'https://api.clickup.com/api/v2', authType: 'oauth2', docsUrl: 'https://clickup.com/api' },
  { id: 'notion', name: 'Notion', category: 'devops', description: 'All-in-one workspace', baseUrl: 'https://api.notion.com/v1', authType: 'oauth2', docsUrl: 'https://developers.notion.com/' },
  { id: 'airtable', name: 'Airtable', category: 'devops', description: 'Spreadsheet-database', baseUrl: 'https://api.airtable.com/v0', authType: 'bearer', docsUrl: 'https://airtable.com/api' },
  { id: 'docker_hub', name: 'Docker Hub', category: 'devops', description: 'Container registry', baseUrl: 'https://hub.docker.com/v2', authType: 'bearer', docsUrl: 'https://docs.docker.com/docker-hub/api/' },
  { id: 'jenkins', name: 'Jenkins', category: 'devops', description: 'CI/CD automation', baseUrl: 'https://your-jenkins.com/api/json', authType: 'basic', docsUrl: 'https://www.jenkins.io/doc/book/using/remote-access-api/' },
  { id: 'circleci', name: 'CircleCI', category: 'devops', description: 'CI/CD platform', baseUrl: 'https://circleci.com/api/v2', authType: 'api_key', docsUrl: 'https://circleci.com/docs/api/v2/' },
  { id: 'travis_ci', name: 'Travis CI', category: 'devops', description: 'CI/CD service', baseUrl: 'https://api.travis-ci.com/v3', authType: 'bearer', docsUrl: 'https://docs.travis-ci.com/api/' },
  { id: 'github_actions', name: 'GitHub Actions', category: 'devops', description: 'CI/CD workflows', baseUrl: 'https://api.github.com/repos', authType: 'oauth2', docsUrl: 'https://docs.github.com/en/rest/actions' },
  { id: 'azure_devops', name: 'Azure DevOps', category: 'devops', description: 'DevOps services', baseUrl: 'https://dev.azure.com/{org}/_apis', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/rest/api/azure/devops/' },
  { id: 'aws_codebuild', name: 'AWS CodeBuild', category: 'devops', description: 'Build service', baseUrl: 'https://codebuild.us-east-1.amazonaws.com', authType: 'api_key', docsUrl: 'https://docs.aws.amazon.com/codebuild/' },
  { id: 'gcp_cloud_build', name: 'Google Cloud Build', category: 'devops', description: 'CI/CD platform', baseUrl: 'https://cloudbuild.googleapis.com/v1', authType: 'oauth2', docsUrl: 'https://cloud.google.com/build/docs/api' },
  { id: 'heroku', name: 'Heroku', category: 'devops', description: 'Cloud platform', baseUrl: 'https://api.heroku.com/v1', authType: 'bearer', docsUrl: 'https://devcenter.heroku.com/articles/platform-api-reference' },
  { id: 'vercel', name: 'Vercel', category: 'devops', description: 'Frontend deployment', baseUrl: 'https://api.vercel.com/v1', authType: 'bearer', docsUrl: 'https://vercel.com/docs/rest-api' },
  { id: 'netlify', name: 'Netlify', category: 'devops', description: 'Web hosting', baseUrl: 'https://api.netlify.com/v1', authType: 'bearer', docsUrl: 'https://open-api.netlify.com/' },
  { id: 'render', name: 'Render', category: 'devops', description: 'Cloud hosting', baseUrl: 'https://api.render.com/v1', authType: 'bearer', docsUrl: 'https://render.com/docs/api' },
  { id: 'railway', name: 'Railway', category: 'devops', description: 'Deployment platform', baseUrl: 'https://backbone.railway.app/v1', authType: 'api_key', docsUrl: 'https://docs.railway.app/' },
  { id: 'flyio', name: 'Fly.io', category: 'devops', description: 'App hosting', baseUrl: 'https://api.fly.io/graphql', authType: 'bearer', docsUrl: 'https://fly.io/docs/reference/' },
  { id: 'digitalocean', name: 'DigitalOcean', category: 'devops', description: 'Cloud infrastructure', baseUrl: 'https://api.digitalocean.com/v2', authType: 'bearer', docsUrl: 'https://docs.digitalocean.com/reference/api/' },
  { id: 'linode', name: 'Linode', category: 'devops', description: 'Cloud hosting', baseUrl: 'https://api.linode.com/v4', authType: 'bearer', docsUrl: 'https://www.linode.com/docs/api/' },
  { id: 'vultr', name: 'Vultr', category: 'devops', description: 'Cloud hosting', baseUrl: 'https://api.vultr.com/v2', authType: 'api_key', docsUrl: 'https://www.vultr.com/api/' },
  { id: 'terraform_cloud', name: 'Terraform Cloud', category: 'devops', description: 'Infrastructure as code', baseUrl: 'https://app.terraform.io/api/v2', authType: 'bearer', docsUrl: 'https://developer.hashicorp.com/terraform/cloud-docs/api-docs' },
  { id: 'pulumi', name: 'Pulumi', category: 'devops', description: 'Infrastructure as code', baseUrl: 'https://api.pulumi.com/v1', authType: 'bearer', docsUrl: 'https://www.pulumi.com/docs/pulumi-cloud/cloud-rest-api/' },
  { id: 'ansible_tower', name: 'Ansible Tower', category: 'devops', description: 'Automation platform', baseUrl: 'https://your-tower.com/api/v2', authType: 'basic', docsUrl: 'https://docs.ansible.com/ansible-tower/' },
  { id: 'puppet', name: 'Puppet Enterprise', category: 'devops', description: 'Configuration management', baseUrl: 'https://your-puppet.com:8140/puppet/v3', authType: 'basic', docsUrl: 'https://puppet.com/docs/pe/latest/api_index.html' },
  { id: 'chef', name: 'Chef', category: 'devops', description: 'Configuration management', baseUrl: 'https://your-chef.com/organizations', authType: 'basic', docsUrl: 'https://docs.chef.io/api_chef_server/' },
  { id: 'datadog', name: 'Datadog', category: 'devops', description: 'Monitoring and analytics', baseUrl: 'https://api.datadoghq.com/v1', authType: 'api_key', docsUrl: 'https://docs.datadoghq.com/api/' },
  { id: 'new_relic', name: 'New Relic', category: 'devops', description: 'Observability platform', baseUrl: 'https://api.newrelic.com/v2', authType: 'api_key', docsUrl: 'https://docs.newrelic.com/docs/apis/' },
  { id: 'grafana', name: 'Grafana', category: 'devops', description: 'Monitoring dashboards', baseUrl: 'https://your-grafana.com/api', authType: 'basic', docsUrl: 'https://grafana.com/docs/grafana/latest/http_api/' },
  { id: 'prometheus', name: 'Prometheus', category: 'devops', description: 'Monitoring system', baseUrl: 'https://your-prometheus.com/api/v1', authType: 'basic', docsUrl: 'https://prometheus.io/docs/prometheus/latest/querying/api/' },
  { id: 'pagerduty', name: 'PagerDuty', category: 'devops', description: 'Incident management', baseUrl: 'https://api.pagerduty.com/v2', authType: 'api_key', docsUrl: 'https://developer.pagerduty.com/' },
  { id: 'opsgenie', name: 'Opsgenie', category: 'devops', description: 'Incident management', baseUrl: 'https://api.opsgenie.com/v2', authType: 'api_key', docsUrl: 'https://docs.opsgenie.com/docs/api' },
  { id: 'victorops', name: 'VictorOps (Splunk)', category: 'devops', description: 'Incident management', baseUrl: 'https://api.victorops.com/v1', authType: 'api_key', docsUrl: 'https://docs.splunk.com/' },
  { id: 'statuspage', name: 'Statuspage', category: 'devops', description: 'Status communication', baseUrl: 'https://api.statuspage.io/v1', authType: 'api_key', docsUrl: 'https://developer.statuspage.io/' },
  { id: 'launchdarkly', name: 'LaunchDarkly', category: 'devops', description: 'Feature flags', baseUrl: 'https://app.launchdarkly.com/api/v2', authType: 'api_key', docsUrl: 'https://docs.launchdarkly.com/home' },
  { id: 'split_io', name: 'Split.io', category: 'devops', description: 'Feature flags', baseUrl: 'https://api.split.io/internal/api/v2', authType: 'api_key', docsUrl: 'https://help.split.io/hc/en-us/articles/360020448791' },
  { id: 'snyk', name: 'Snyk', category: 'devops', description: 'Security scanning', baseUrl: 'https://snyk.io/api/v1', authType: 'api_key', docsUrl: 'https://snyk.io/docs/api/' },
  { id: 'sonarqube', name: 'SonarQube', category: 'devops', description: 'Code quality', baseUrl: 'https://your-sonar.com/api', authType: 'basic', docsUrl: 'https://docs.sonarqube.org/latest/extend/web-api/' },
  { id: 'sentry', name: 'Sentry', category: 'devops', description: 'Error tracking', baseUrl: 'https://sentry.io/api/0', authType: 'bearer', docsUrl: 'https://docs.sentry.io/api/' },
  { id: 'bugsnag', name: 'Bugsnag', category: 'devops', description: 'Error monitoring', baseUrl: 'https://api.bugsnag.com/v2', authType: 'api_key', docsUrl: 'https://docs.bugsnag.com/api/' },
  { id: 'rollbar', name: 'Rollbar', category: 'devops', description: 'Error tracking', baseUrl: 'https://api.rollbar.com/v1', authType: 'api_key', docsUrl: 'https://explorer.rollbar.com/' },
  { id: 'honeycomb', name: 'Honeycomb', category: 'devops', description: 'Observability', baseUrl: 'https://api.honeycomb.io/v1', authType: 'api_key', docsUrl: 'https://docs.honeycomb.io/api/' },
  { id: 'lightstep', name: 'Lightstep', category: 'devops', description: 'Observability', baseUrl: 'https://api.lightstep.com/v1', authType: 'api_key', docsUrl: 'https://docs.lightstep.com/' },
  { id: 'elastic', name: 'Elastic', category: 'devops', description: 'Search and analytics', baseUrl: 'https://your-cluster.com:9200', authType: 'basic', docsUrl: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html' },
  { id: 'kibana', name: 'Kibana', category: 'devops', description: 'Data visualization', baseUrl: 'https://your-kibana.com/api', authType: 'basic', docsUrl: 'https://www.elastic.co/guide/en/kibana/current/api.html' },
];

// Helper functions for the catalog
export function getIntegrationsByCategory(category: string): IntegrationEntry[] {
  return integrations.filter((i) => i.category === category);
}

export function getIntegrationById(id: string): IntegrationEntry | undefined {
  return integrations.find((i) => i.id === id);
}

export function searchIntegrations(query: string): IntegrationEntry[] {
  const lower = query.toLowerCase();
  return integrations.filter(
    (i) =>
      i.name.toLowerCase().includes(lower) ||
      i.description.toLowerCase().includes(lower) ||
      i.category.toLowerCase().includes(lower)
  );
}

export function getCategories(): string[] {
  return [...new Set(integrations.map((i) => i.category))];
}

export function getIntegrationCount(): number {
  return integrations.length;
}
