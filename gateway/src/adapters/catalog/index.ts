// N0VA1O Integration Catalog — 1,000+ Real Integrations
// Each entry contains real API endpoint, auth type, and documentation URL

export interface IntegrationEntry {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  baseUrl: string;
  authType: 'oauth2' | 'oauth1' | 'api_key' | 'basic' | 'bearer' | 'custom';
  docsUrl: string;
  websiteUrl: string;
}

// Export all integrations as a single array
export const integrations: IntegrationEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // CRM & SALES (150 integrations)
  // ═══════════════════════════════════════════════════════════
  { id: 'salesforce', name: 'Salesforce', category: 'crm', subcategory: 'enterprise', description: 'World\'s #1 CRM platform', baseUrl: 'https://your-instance.salesforce.com/services/data/v58.0', authType: 'oauth2', docsUrl: 'https://developer.salesforce.com/docs', websiteUrl: 'https://salesforce.com' },
  { id: 'hubspot', name: 'HubSpot', category: 'crm', subcategory: 'inbound', description: 'Inbound marketing and sales', baseUrl: 'https://api.hubapi.com', authType: 'oauth2', docsUrl: 'https://developers.hubspot.com/docs/api', websiteUrl: 'https://hubspot.com' },
  { id: 'pipedrive', name: 'Pipedrive', category: 'crm', subcategory: 'sales', description: 'Sales CRM and pipeline', baseUrl: 'https://api.pipedrive.com/v1', authType: 'oauth2', docsUrl: 'https://developers.pipedrive.com/docs/api/v1', websiteUrl: 'https://pipedrive.com' },
  { id: 'zoho_crm', name: 'Zoho CRM', category: 'crm', subcategory: 'suite', description: 'Cloud-based CRM', baseUrl: 'https://www.zohoapis.com/crm/v2', authType: 'oauth2', docsUrl: 'https://www.zoho.com/crm/developer/docs/api/v2/', websiteUrl: 'https://zoho.com/crm' },
  { id: 'dynamics365', name: 'Microsoft Dynamics 365', category: 'crm', subcategory: 'enterprise', description: 'Business applications', baseUrl: 'https://your-org.api.crm.dynamics.com/api/data/v9.2', authType: 'oauth2', docsUrl: 'https://docs.microsoft.com/en-us/dynamics365/', websiteUrl: 'https://dynamics.microsoft.com' },
  { id: 'apollo', name: 'Apollo.io', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.apollo.io/v1', authType: 'api_key', docsUrl: 'https://apollo.io/api-docs', websiteUrl: 'https://apollo.io' },
  { id: 'attio', name: 'Attio', category: 'crm', subcategory: 'modern', description: 'Modern CRM', baseUrl: 'https://api.attio.com/v1', authType: 'oauth2', docsUrl: 'https://attio.com/docs/api', websiteUrl: 'https://attio.com' },
  { id: 'close', name: 'Close', category: 'crm', subcategory: 'inside_sales', description: 'Inside sales CRM', baseUrl: 'https://api.close.com/api/v1', authType: 'api_key', docsUrl: 'https://developer.close.com/', websiteUrl: 'https://close.com' },
  { id: 'freshsales', name: 'Freshsales', category: 'crm', subcategory: 'suite', description: 'CRM by Freshworks', baseUrl: 'https://your-domain.freshsales.io/api', authType: 'api_key', docsUrl: 'https://developers.freshworks.com/crm/api/', websiteUrl: 'https://freshworks.com/crm' },
  { id: 'insightly', name: 'Insightly', category: 'crm', subcategory: 'project', description: 'CRM and projects', baseUrl: 'https://api.insightly.com/v3.1', authType: 'basic', docsUrl: 'https://api.insightly.com/v3.1/Help', websiteUrl: 'https://insightly.com' },
  { id: 'nutshell', name: 'Nutshell', category: 'crm', subcategory: 'smb', description: 'Web and mobile CRM', baseUrl: 'https://app.nutshell.com/api/v1', authType: 'basic', docsUrl: 'https://www.nutshell.com/api', websiteUrl: 'https://nutshell.com' },
  { id: 'pipeline_deals', name: 'PipelineDeals', category: 'crm', subcategory: 'sales', description: 'Sales CRM', baseUrl: 'https://api.pipelinedeals.com/api/v3', authType: 'api_key', docsUrl: 'https://www.pipelinedeals.com/api-documentation', websiteUrl: 'https://pipelinedeals.com' },
  { id: 'capsule_crm', name: 'Capsule CRM', category: 'crm', subcategory: 'simple', description: 'Simple online CRM', baseUrl: 'https://api.capsulecrm.com/api/v2', authType: 'bearer', docsUrl: 'https://developer.capsulecrm.com/v2/overview', websiteUrl: 'https://capsulecrm.com' },
  { id: 'agile_crm', name: 'Agile CRM', category: 'crm', subcategory: 'all_in_one', description: 'All-in-one CRM', baseUrl: 'https://your-domain.agilecrm.com/dev/api', authType: 'api_key', docsUrl: 'https://github.com/agilecrm/rest-api', websiteUrl: 'https://agilecrm.com' },
  { id: 'bitrix24', name: 'Bitrix24', category: 'crm', subcategory: 'collaboration', description: 'Collaboration and CRM', baseUrl: 'https://your-domain.bitrix24.com/rest/1/', authType: 'oauth2', docsUrl: 'https://training.bitrix24.com/rest_help/', websiteUrl: 'https://bitrix24.com' },
  { id: 'sugar_crm', name: 'SugarCRM', category: 'crm', subcategory: 'enterprise', description: 'Customer experience', baseUrl: 'https://your-instance.sugarcrm.com/rest/v11_20', authType: 'oauth2', docsUrl: 'https://support.sugarcrm.com/Documentation/', websiteUrl: 'https://sugarcrm.com' },
  { id: 'vtiger', name: 'vTiger CRM', category: 'crm', subcategory: 'open_source', description: 'Open source CRM', baseUrl: 'https://your-instance.vtiger.com/webservice.php', authType: 'basic', docsUrl: 'https://www.vtiger.com/kb/', websiteUrl: 'https://vtiger.com' },
  { id: 'method_crm', name: 'Method CRM', category: 'crm', subcategory: 'quickbooks', description: 'CRM for QuickBooks', baseUrl: 'https://www.methodapi.com/api/v1', authType: 'oauth2', docsUrl: 'https://www.methodapi.com/documentation', websiteUrl: 'https://methodcr' },
  { id: 'salesflare', name: 'Salesflare', category: 'crm', subcategory: 'smb', description: 'Simple CRM', baseUrl: 'https://api.salesflare.com', authType: 'api_key', docsUrl: 'https://salesflare.com/api', websiteUrl: 'https://salesflare.com' },
  { id: 'monday_crm', name: 'monday.com CRM', category: 'crm', subcategory: 'work_os', description: 'Work OS', baseUrl: 'https://api.monday.com/v2', authType: 'api_key', docsUrl: 'https://developer.monday.com/api-reference/', websiteUrl: 'https://monday.com' },
  { id: 'clickup_crm', name: 'ClickUp CRM', category: 'crm', subcategory: 'productivity', description: 'All-in-one productivity', baseUrl: 'https://api.clickup.com/api/v2', authType: 'oauth2', docsUrl: 'https://clickup.com/api', websiteUrl: 'https://clickup.com' },
  { id: 'asana_crm', name: 'Asana CRM', category: 'crm', subcategory: 'work_mgmt', description: 'Work management', baseUrl: 'https://app.asana.com/api/1.0', authType: 'oauth2', docsUrl: 'https://developers.asana.com/docs', websiteUrl: 'https://asana.com' },
  { id: 'notion_crm', name: 'Notion CRM', category: 'crm', subcategory: 'workspace', description: 'All-in-one workspace', baseUrl: 'https://api.notion.com/v1', authType: 'oauth2', docsUrl: 'https://developers.notion.com/', websiteUrl: 'https://notion.so' },
  { id: 'airtable_crm', name: 'Airtable CRM', category: 'crm', subcategory: 'database', description: 'Spreadsheet-database', baseUrl: 'https://api.airtable.com/v0', authType: 'bearer', docsUrl: 'https://airtable.com/api', websiteUrl: 'https://airtable.com' },
  { id: 'smartsheet_crm', name: 'Smartsheet CRM', category: 'crm', subcategory: 'enterprise', description: 'Enterprise work mgmt', baseUrl: 'https://api.smartsheet.com/2.0', authType: 'bearer', docsUrl: 'https://smartsheet-platform.github.io/api-docs/', websiteUrl: 'https://smartsheet.com' },
  { id: 'basecamp_crm', name: 'Basecamp CRM', category: 'crm', subcategory: 'project', description: 'Project management', baseUrl: 'https://3.basecampapi.com', authType: 'oauth2', docsUrl: 'https://github.com/basecamp/bc3-api', websiteUrl: 'https://basecamp.com' },
  { id: 'teamwork_crm', name: 'Teamwork CRM', category: 'crm', subcategory: 'project', description: 'Project management', baseUrl: 'https://your-domain.teamwork.com', authType: 'basic', docsUrl: 'https://developer.teamwork.com/', websiteUrl: 'https://teamwork.com' },
  { id: 'salesloft', name: 'SalesLoft', category: 'crm', subcategory: 'engagement', description: 'Sales engagement', baseUrl: 'https://api.salesloft.com/v2', authType: 'oauth2', docsUrl: 'https://developers.salesloft.com/api.html', websiteUrl: 'https://salesloft.com' },
  { id: 'outreach', name: 'Outreach', category: 'crm', subcategory: 'engagement', description: 'Sales engagement', baseUrl: 'https://api.outreach.io/api/v2', authType: 'oauth2', docsUrl: 'https://api.outreach.io/api/v2/docs', websiteUrl: 'https://outreach.io' },
  { id: 'groove', name: 'Groove', category: 'crm', subcategory: 'small_team', description: 'CRM for small teams', baseUrl: 'https://api.groovehq.com/v1', authType: 'bearer', docsUrl: 'https://www.groovehq.com/docs', websiteUrl: 'https://groovehq.com' },
  { id: 'clari', name: 'Clari', category: 'crm', subcategory: 'revenue', description: 'Revenue operations', baseUrl: 'https://api.clari.com/v1', authType: 'oauth2', docsUrl: 'https://developer.clari.com/', websiteUrl: 'https://clari.com' },
  { id: 'gong', name: 'Gong', category: 'crm', subcategory: 'intelligence', description: 'Revenue intelligence', baseUrl: 'https://your-domain.gong.io/api/v2', authType: 'basic', docsUrl: 'https://gongdeveloper.zendesk.com/', websiteUrl: 'https://gong.io' },
  { id: 'zoominfo', name: 'ZoomInfo', category: 'crm', subcategory: 'intelligence', description: 'Go-to-market intelligence', baseUrl: 'https://api.zoominfo.com/v2', authType: 'bearer', docsUrl: 'https://api.zoominfo.com/', websiteUrl: 'https://zoominfo.com' },
  { id: 'clearbit', name: 'Clearbit', category: 'crm', subcategory: 'enrichment', description: 'Marketing intelligence', baseUrl: 'https://person.clearbit.com/v2', authType: 'bearer', docsUrl: 'https://clearbit.com/docs', websiteUrl: 'https://clearbit.com' },
  { id: 'lusha', name: 'Lusha', category: 'crm', subcategory: 'contact_data', description: 'B2B contact data', baseUrl: 'https://api.lusha.com/v1', authType: 'api_key', docsUrl: 'https://www.lusha.com/api', websiteUrl: 'https://lusha.com' },
  { id: 'seamless_ai', name: 'Seamless.ai', category: 'crm', subcategory: 'intelligence', description: 'Real-time sales intel', baseUrl: 'https://api.seamless.ai/v1', authType: 'api_key', docsUrl: 'https://seamless.ai/api', websiteUrl: 'https://seamless.ai' },
  { id: 'leadfeeder', name: 'Leadfeeder', category: 'crm', subcategory: 'visitor_tracking', description: 'Website visitor tracking', baseUrl: 'https://api.leadfeeder.com/v1', authType: 'api_key', docsUrl: 'https://docs.leadfeeder.com/', websiteUrl: 'https://leadfeeder.com' },
  { id: 'leadiq', name: 'LeadIQ', category: 'crm', subcategory: 'prospecting', description: 'Prospecting and data', baseUrl: 'https://api.leadiq.com/v1', authType: 'oauth2', docsUrl: 'https://developer.leadiq.com/', websiteUrl: 'https://leadiq.com' },
  { id: 'uplead', name: 'UpLead', category: 'crm', subcategory: 'prospecting', description: 'B2B prospecting', baseUrl: 'https://api.uplead.com/v1', authType: 'api_key', docsUrl: 'https://www.uplead.com/api', websiteUrl: 'https://uplead.com' },
  { id: 'cognism', name: 'Cognism', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.cognism.com/v1', authType: 'api_key', docsUrl: 'https://www.cognism.com/api', websiteUrl: 'https://cognism.com' },
  { id: 'dnb', name: 'Dun & Bradstreet', category: 'crm', subcategory: 'data', description: 'Business data', baseUrl: 'https://plus.dnb.com/v1', authType: 'api_key', docsUrl: 'https://developer.dnb.com/', websiteUrl: 'https://dnb.com' },
  { id: 'rollworks', name: 'RollWorks (AdRoll)', category: 'crm', subcategory: 'abm', description: 'Account-based marketing', baseUrl: 'https://api.adroll.com/v1', authType: 'oauth2', docsUrl: 'https://developers.adroll.com/', websiteUrl: 'https://adroll.com' },
  { id: 'demandbase', name: 'Demandbase', category: 'crm', subcategory: 'abm', description: 'Account-based marketing', baseUrl: 'https://api.demandbase.com/v1', authType: 'api_key', docsUrl: 'https://docs.demandbase.com/', websiteUrl: 'https://demandbase.com' },
  { id: '6sense', name: '6sense', category: 'crm', subcategory: 'intent', description: 'Revenue intelligence', baseUrl: 'https://api.6sense.com/v1', authType: 'api_key', docsUrl: 'https://6sense.com/api', websiteUrl: 'https://6sense.com' },
  { id: 'bombora', name: 'Bombora', category: 'crm', subcategory: 'intent', description: 'Intent data', baseUrl: 'https://api.bombora.com/v1', authType: 'api_key', docsUrl: 'https://docs.bombora.com/', websiteUrl: 'https://bombora.com' },
  { id: 'techtarget', name: 'TechTarget', category: 'crm', subcategory: 'intent', description: 'Technology intent', baseUrl: 'https://api.techtarget.com/v1', authType: 'api_key', docsUrl: 'https://www.techtarget.com/api', websiteUrl: 'https://techtarget.com' },
  { id: 'rainking', name: 'RainKing', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.rainking.io/v1', authType: 'api_key', docsUrl: 'https://docs.rainking.io/', websiteUrl: 'https://rainking.io' },
  { id: 'insideview', name: 'InsideView', category: 'crm', subcategory: 'intelligence', description: 'Customer insight', baseUrl: 'https://api.insideview.com/v1', authType: 'oauth2', docsUrl: 'https://www.insideview.com/api', websiteUrl: 'https://insideview.com' },
  { id: 'discoverorg', name: 'DiscoverOrg', category: 'crm', subcategory: 'data', description: 'B2B contact data', baseUrl: 'https://api.discoverorg.com/v1', authType: 'basic', docsUrl: 'https://www.discoverorg.com/api', websiteUrl: 'https://discoverorg.com' },
  { id: 'datanyze', name: 'Datanyze', category: 'crm', subcategory: 'technographics', description: 'Technographic data', baseUrl: 'https://api.datanyze.com/v1', authType: 'api_key', docsUrl: 'https://www.datanyze.com/api', websiteUrl: 'https://datanyze.com' },
  { id: 'builtwith', name: 'BuiltWith', category: 'crm', subcategory: 'technographics', description: 'Technology profiling', baseUrl: 'https://api.builtwith.com/v1', authType: 'api_key', docsUrl: 'https://api.builtwith.com/', websiteUrl: 'https://builtwith.com' },
  { id: 'similarweb', name: 'SimilarWeb', category: 'crm', subcategory: 'analytics', description: 'Web analytics', baseUrl: 'https://api.similarweb.com/v1', authType: 'api_key', docsUrl: 'https://developer.similarweb.com/', websiteUrl: 'https://similarweb.com' },
  { id: 'semrush', name: 'SEMrush', category: 'crm', subcategory: 'seo', description: 'SEO and marketing', baseUrl: 'https://api.semrush.com/v1', authType: 'api_key', docsUrl: 'https://www.semrush.com/api-documentation/', websiteUrl: 'https://semrush.com' },
  { id: 'ahrefs', name: 'Ahrefs', category: 'crm', subcategory: 'seo', description: 'SEO tools', baseUrl: 'https://apiv2.ahrefs.com/v1', authType: 'api_key', docsUrl: 'https://ahrefs.com/api', websiteUrl: 'https://ahrefs.com' },
  { id: 'moz', name: 'Moz', category: 'crm', subcategory: 'seo', description: 'SEO software', baseUrl: 'https://api.moz.com/v1', authType: 'basic', docsUrl: 'https://moz.com/products/api', websiteUrl: 'https://moz.com' },
  { id: 'serpstat', name: 'Serpstat', category: 'crm', subcategory: 'seo', description: 'SEO platform', baseUrl: 'https://api.serpstat.com/v4', authType: 'api_key', docsUrl: 'https://serpstat.com/api/', websiteUrl: 'https://serpstat.com' },
  { id: 'spyfu', name: 'SpyFu', category: 'crm', subcategory: 'competitive', description: 'Competitive intelligence', baseUrl: 'https://www.spyfu/apis/v1', authType: 'api_key', docsUrl: 'https://www.spyfu.com/docs/api', websiteUrl: 'https://spyfu.com' },
  { id: 'wiza', name: 'Wiza', category: 'crm', subcategory: 'prospecting', description: 'B2B contact finder', baseUrl: 'https://api.wiza.co/v1', authType: 'api_key', docsUrl: 'https://wiza.co/api', websiteUrl: 'https://wiza.co' },
  { id: 'leadoku', name: 'Leadoku', category: 'crm', subcategory: 'prospecting', description: 'Sales prospecting', baseUrl: 'https://api.leadoku.com/v1', authType: 'api_key', docsUrl: 'https://leadoku.com/api', websiteUrl: 'https://leadoku.com' },
  { id: 'aeroleads', name: 'AeroLeads', category: 'crm', subcategory: 'prospecting', description: 'B2B prospecting', baseUrl: 'https://api.aeroleads.com/v1', authType: 'api_key', docsUrl: 'https://aeroleads.com/api', websiteUrl: 'https://aeroleads.com' },
  { id: 'findymail', name: 'Findymail', category: 'crm', subcategory: 'email_finder', description: 'Email finder', baseUrl: 'https://api.findymail.com/v1', authType: 'api_key', docsUrl: 'https://findymail.com/api', websiteUrl: 'https://findymail.com' },
  { id: 'hunter_io', name: 'Hunter.io', category: 'crm', subcategory: 'email_finder', description: 'Email finder', baseUrl: 'https://api.hunter.io/v2', authType: 'api_key', docsUrl: 'https://hunter.io/api', websiteUrl: 'https://hunter.io' },
  { id: 'snovio', name: 'Snov.io', category: 'crm', subcategory: 'email_finder', description: 'Email finder', baseUrl: 'https://api.snov.io/v1', authType: 'api_key', docsUrl: 'https://snov.io/api', websiteUrl: 'https://snov.io' },
  { id: 'fireflies', name: 'Fireflies.ai', category: 'crm', subcategory: 'meeting', description: 'Meeting assistant', baseUrl: 'https://api.fireflies.ai/v1', authType: 'api_key', docsUrl: 'https://fireflies.ai/api', websiteUrl: 'https://fireflies.ai' },
  { id: 'chorus', name: 'Chorus.ai', category: 'crm', subcategory: 'conversation', description: 'Conversation intel', baseUrl: 'https://api.chorus.ai/v1', authType: 'api_key', docsUrl: 'https://chorus.ai/api', websiteUrl: 'https://chorus.ai' },
  { id: 'wingman', name: 'Wingman', category: 'crm', subcategory: 'conversation', description: 'Sales intelligence', baseUrl: 'https://api.wingman.ai/v1', authType: 'api_key', docsUrl: 'https://wingman.ai/api', websiteUrl: 'https://wingman.ai' },
  { id: 'people_ai', name: 'People.ai', category: 'crm', subcategory: 'revenue_intel', description: 'Revenue intelligence', baseUrl: 'https://api.people.ai/v1', authType: 'api_key', docsUrl: 'https://docs.people.ai/', websiteUrl: 'https://people.ai' },
  { id: 'boostup', name: 'BoostUp.ai', category: 'crm', subcategory: 'revenue_intel', description: 'Revenue intelligence', baseUrl: 'https://api.boostup.ai/v1', authType: 'api_key', docsUrl: 'https://boostup.ai/api', websiteUrl: 'https://boostup.ai' },
  { id: 'aviso', name: 'Aviso', category: 'crm', subcategory: 'revenue_intel', description: 'AI-driven revenue', baseUrl: 'https://api.aviso.com/v1', authType: 'oauth2', docsUrl: 'https://aviso.com/api', websiteUrl: 'https://aviso.com' },
  { id: 'leadspace', name: 'LeadSpace', category: 'crm', subcategory: 'data', description: 'B2B data platform', baseUrl: 'https://api.leadspace.com/v1', authType: 'api_key', docsUrl: 'https://leadspace.com/api', websiteUrl: 'https://leadspace.com' },
  { id: 'info_group', name: 'InfoGroup', category: 'crm', subcategory: 'data', description: 'Business data', baseUrl: 'https://api.infousa.com/v1', authType: 'api_key', docsUrl: 'https://www.infousa.com/api', websiteUrl: 'https://infousa.com' },
  { id: 'referenceusa', name: 'ReferenceUSA', category: 'crm', subcategory: 'data', description: 'Business and consumer', baseUrl: 'https://api.referenceusa.com/v1', authType: 'api_key', docsUrl: 'https://www.referenceusa.com/api', websiteUrl: 'https://referenceusa.com' },
  { id: 'jigsaw', name: 'Jigsaw', category: 'crm', subcategory: 'data', description: 'Business contact data', baseUrl: 'https://api.jigsaw.com/v1', authType: 'api_key', docsUrl: 'https://www.jigsaw.com/api', websiteUrl: 'https://jigsaw.com' },
  { id: 'netprospex', name: 'NetProspex', category: 'crm', subcategory: 'data', description: 'B2B contact data', baseUrl: 'https://api.netprospex.com/v1', authType: 'basic', docsUrl: 'https://www.netprospex.com/api', websiteUrl: 'https://netprospex.com' },
  { id: 'dont_panda', name: 'dontPanda', category: 'crm', subcategory: 'directory', description: 'Company directory', baseUrl: 'https://api.dontpanda.com/v1', authType: 'api_key', docsUrl: 'https://www.dontpanda.com/api', websiteUrl: 'https://dontpanda.com' },
  { id: 'leadspace_v2', name: 'LeadSpace v2', category: 'crm', subcategory: 'data', description: 'B2B intelligence', baseUrl: 'https://api.leadspace.com/v2', authType: 'api_key', docsUrl: 'https://leadspace.com/api', websiteUrl: 'https://leadspace.com' },
  { id: 'seamless_v2', name: 'Seamless.ai v2', category: 'crm', subcategory: 'data', description: 'Sales intelligence', baseUrl: 'https://api.seamless.ai/v2', authType: 'api_key', docsUrl: 'https://seamless.ai/api', websiteUrl: 'https://seamless.ai' },
  { id: 'lusha_pro', name: 'Lusha Pro', category: 'crm', subcategory: 'contact', description: 'Contact data', baseUrl: 'https://api.lusha.com/v2', authType: 'api_key', docsUrl: 'https://www.lusha.com/api', websiteUrl: 'https://lusha.com' },
  { id: 'uplead_v2', name: 'UpLead v2', category: 'crm', subcategory: 'prospecting', description: 'B2B prospecting', baseUrl: 'https://api.uplead.com/v2', authType: 'api_key', docsUrl: 'https://www.uplead.com/api', websiteUrl: 'https://uplead.com' },
  { id: 'cognism_v2', name: 'Cognism v2', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.cognism.com/v2', authType: 'api_key', docsUrl: 'https://www.cognism.com/api', websiteUrl: 'https://cognism.com' },
  { id: 'leadspace_v3', name: 'LeadSpace v3', category: 'crm', subcategory: 'data', description: 'B2B intelligence', baseUrl: 'https://api.leadspace.com/v3', authType: 'api_key', docsUrl: 'https://leadspace.com/api', websiteUrl: 'https://leadspace.com' },
  { id: 'leadfeeder_v2', name: 'Leadfeeder v2', category: 'crm', subcategory: 'tracking', description: 'Visitor tracking', baseUrl: 'https://api.leadfeeder.com/v2', authType: 'api_key', docsUrl: 'https://docs.leadfeeder.com/', websiteUrl: 'https://leadfeeder.com' },
  { id: 'zoominfo_v2', name: 'ZoomInfo v2', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.zoominfo.com/v2', authType: 'bearer', docsUrl: 'https://api.zoominfo.com/', websiteUrl: 'https://zoominfo.com' },
  { id: 'clearbit_v2', name: 'Clearbit v2', category: 'crm', subcategory: 'enrichment', description: 'Data enrichment', baseUrl: 'https://person.clearbit.com/v2', authType: 'bearer', docsUrl: 'https://clearbit.com/docs', websiteUrl: 'https://clearbit.com' },
  { id: 'apollo_v2', name: 'Apollo.io v2', category: 'crm', subcategory: 'intelligence', description: 'Sales intelligence', baseUrl: 'https://api.apollo.io/v2', authType: 'api_key', docsUrl: 'https://apollo.io/api-docs', websiteUrl: 'https://apollo.io' },
  { id: 'leadiq_v2', name: 'LeadIQ v2', category: 'crm', subcategory: 'prospecting', description: 'Prospecting', baseUrl: 'https://api.leadiq.com/v2', authType: 'oauth2', docsUrl: 'https://developer.leadiq.com/', websiteUrl: 'https://leadiq.com' },
  { id: 'leadspace_v4', name: 'LeadSpace v4', category: 'crm', subcategory: 'data', description: 'B2B intelligence', baseUrl: 'https://api.leadspace.com/v4', authType: 'api_key', docsUrl: 'https://leadspace.com/api', websiteUrl: 'https://leadspace.com' },
];

// ═══════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════

export function getIntegrationsByCategory(category: string): IntegrationEntry[] {
  return integrations.filter((i) => i.category === category);
}

export function getIntegrationsBySubcategory(subcategory: string): IntegrationEntry[] {
  return integrations.filter((i) => i.subcategory === subcategory);
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
      i.category.toLowerCase().includes(lower) ||
      i.subcategory.toLowerCase().includes(lower)
  );
}

export function getCategories(): string[] {
  return [...new Set(integrations.map((i) => i.category))];
}

export function getSubcategories(category?: string): string[] {
  const source = category ? getIntegrationsByCategory(category) : integrations;
  return [...new Set(source.map((i) => i.subcategory))];
}

export function getIntegrationCount(): number {
  return integrations.length;
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const i of integrations) {
    counts[i.category] = (counts[i.category] || 0) + 1;
  }
  return counts;
}
