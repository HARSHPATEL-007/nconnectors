// Generated Adapters — crm (81 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// Salesforce Adapter [1]
// World #1 CRM platform
const salesforce_config = {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'crm',
    description: 'World #1 CRM platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://your-instance.salesforce.com/services/data/v58.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(salesforce_config);
export class SalesforceAdapter extends GenericRestAdapter {
    config = salesforce_config;
    constructor(credentials) {
        super(salesforce_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('salesforce', SalesforceAdapter);
// HubSpot Adapter [2]
// Inbound marketing sales CRM
const hubspot_config = {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'crm',
    description: 'Inbound marketing sales CRM',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hubapi.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hubspot_config);
export class HubspotAdapter extends GenericRestAdapter {
    config = hubspot_config;
    constructor(credentials) {
        super(hubspot_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hubspot', HubspotAdapter);
// Pipedrive Adapter [3]
// Sales CRM pipeline management
const pipedrive_config = {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'crm',
    description: 'Sales CRM pipeline management',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pipedrive.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(pipedrive_config);
export class PipedriveAdapter extends GenericRestAdapter {
    config = pipedrive_config;
    constructor(credentials) {
        super(pipedrive_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('pipedrive', PipedriveAdapter);
// Zoho CRM Adapter [4]
// Complete CRM suite
const zoho_crm_config = {
    id: 'zoho_crm',
    name: 'Zoho CRM',
    category: 'crm',
    description: 'Complete CRM suite',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.zohoapis.com/crm/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(zoho_crm_config);
export class ZohoCrmAdapter extends GenericRestAdapter {
    config = zoho_crm_config;
    constructor(credentials) {
        super(zoho_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('zoho_crm', ZohoCrmAdapter);
// Freshsales Adapter [5]
// Sales CRM with phone email chat
const freshsales_config = {
    id: 'freshsales',
    name: 'Freshsales',
    category: 'crm',
    description: 'Sales CRM with phone email chat',
    authTypes: ['api_key'],
    baseUrl: 'https://domain.freshsales.io/api',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(freshsales_config);
export class FreshsalesAdapter extends GenericRestAdapter {
    config = freshsales_config;
    constructor(credentials) {
        super(freshsales_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('freshsales', FreshsalesAdapter);
// Close CRM Adapter [6]
// Inside sales CRM platform
const close_config = {
    id: 'close',
    name: 'Close CRM',
    category: 'crm',
    description: 'Inside sales CRM platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.close.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(close_config);
export class CloseAdapter extends GenericRestAdapter {
    config = close_config;
    constructor(credentials) {
        super(close_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('close', CloseAdapter);
// Insightly Adapter [7]
// CRM with project management
const insightly_config = {
    id: 'insightly',
    name: 'Insightly',
    category: 'crm',
    description: 'CRM with project management',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.insightly.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(insightly_config);
export class InsightlyAdapter extends GenericRestAdapter {
    config = insightly_config;
    constructor(credentials) {
        super(insightly_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('insightly', InsightlyAdapter);
// Nutshell Adapter [8]
// Simple CRM for small business
const nutshell_config = {
    id: 'nutshell',
    name: 'Nutshell',
    category: 'crm',
    description: 'Simple CRM for small business',
    authTypes: ['api_key'],
    baseUrl: 'https://app.nutshell.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nutshell_config);
export class NutshellAdapter extends GenericRestAdapter {
    config = nutshell_config;
    constructor(credentials) {
        super(nutshell_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nutshell', NutshellAdapter);
// Agile CRM Adapter [9]
// All-in-one CRM
const agile_crm_config = {
    id: 'agile_crm',
    name: 'Agile CRM',
    category: 'crm',
    description: 'All-in-one CRM',
    authTypes: ['api_key'],
    baseUrl: 'https://domain.agilecrm.com/dev/api',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(agile_crm_config);
export class AgileCrmAdapter extends GenericRestAdapter {
    config = agile_crm_config;
    constructor(credentials) {
        super(agile_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('agile_crm', AgileCrmAdapter);
// Capsule CRM Adapter [10]
// Simple CRM for small business
const capsule_config = {
    id: 'capsule',
    name: 'Capsule CRM',
    category: 'crm',
    description: 'Simple CRM for small business',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.capsulecrm.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(capsule_config);
export class CapsuleAdapter extends GenericRestAdapter {
    config = capsule_config;
    constructor(credentials) {
        super(capsule_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('capsule', CapsuleAdapter);
// Bitrix24 Adapter [11]
// CRM collaboration suite
const bitrix24_config = {
    id: 'bitrix24',
    name: 'Bitrix24',
    category: 'crm',
    description: 'CRM collaboration suite',
    authTypes: ['oauth2'],
    baseUrl: 'https://domain.bitrix24.com/rest/',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(bitrix24_config);
export class Bitrix24Adapter extends GenericRestAdapter {
    config = bitrix24_config;
    constructor(credentials) {
        super(bitrix24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('bitrix24', Bitrix24Adapter);
// Salesflare Adapter [12]
// CRM for small businesses
const salesflare_config = {
    id: 'salesflare',
    name: 'Salesflare',
    category: 'crm',
    description: 'CRM for small businesses',
    authTypes: ['api_key'],
    baseUrl: 'https://api.salesflare.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(salesflare_config);
export class SalesflareAdapter extends GenericRestAdapter {
    config = salesflare_config;
    constructor(credentials) {
        super(salesflare_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('salesflare', SalesflareAdapter);
// Apptivo Adapter [13]
// Cloud CRM suite
const apptivo_config = {
    id: 'apptivo',
    name: 'Apptivo',
    category: 'crm',
    description: 'Cloud CRM suite',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apptivo.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(apptivo_config);
export class ApptivoAdapter extends GenericRestAdapter {
    config = apptivo_config;
    constructor(credentials) {
        super(apptivo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('apptivo', ApptivoAdapter);
// Pipeline CRM Adapter [14]
// Sales CRM that drives revenue
const pipeline_config = {
    id: 'pipeline',
    name: 'Pipeline CRM',
    category: 'crm',
    description: 'Sales CRM that drives revenue',
    authTypes: ['api_key'],
    baseUrl: 'https://api.pipelinecrm.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(pipeline_config);
export class PipelineAdapter extends GenericRestAdapter {
    config = pipeline_config;
    constructor(credentials) {
        super(pipeline_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('pipeline', PipelineAdapter);
// Monday Sales CRM Adapter [15]
// Work OS with CRM
const monday_sales_config = {
    id: 'monday_sales',
    name: 'Monday Sales CRM',
    category: 'crm',
    description: 'Work OS with CRM',
    authTypes: ['api_key'],
    baseUrl: 'https://api.monday.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(monday_sales_config);
export class MondaySalesAdapter extends GenericRestAdapter {
    config = monday_sales_config;
    constructor(credentials) {
        super(monday_sales_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('monday_sales', MondaySalesAdapter);
// Keap Adapter [16]
// CRM and sales automation
const keap_config = {
    id: 'keap',
    name: 'Keap',
    category: 'crm',
    description: 'CRM and sales automation',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.infusionsoft.com/crm/rest/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(keap_config);
export class KeapAdapter extends GenericRestAdapter {
    config = keap_config;
    constructor(credentials) {
        super(keap_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('keap', KeapAdapter);
// Copper CRM Adapter [17]
// Google-native CRM
const copper_config = {
    id: 'copper',
    name: 'Copper CRM',
    category: 'crm',
    description: 'Google-native CRM',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.copper.com/developer_api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(copper_config);
export class CopperAdapter extends GenericRestAdapter {
    config = copper_config;
    constructor(credentials) {
        super(copper_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('copper', CopperAdapter);
// SugarCRM Adapter [18]
// Commercial open source CRM
const sugar_crm_config = {
    id: 'sugar_crm',
    name: 'SugarCRM',
    category: 'crm',
    description: 'Commercial open source CRM',
    authTypes: ['oauth2'],
    baseUrl: 'https://sugarcrm.com/rest/v11_20',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sugar_crm_config);
export class SugarCrmAdapter extends GenericRestAdapter {
    config = sugar_crm_config;
    constructor(credentials) {
        super(sugar_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sugar_crm', SugarCrmAdapter);
// vtiger CRM Adapter [19]
// Open source CRM
const vtiger_config = {
    id: 'vtiger',
    name: 'vtiger CRM',
    category: 'crm',
    description: 'Open source CRM',
    authTypes: ['api_key'],
    baseUrl: 'https://your-domain.vtiger.com/webservice.php',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(vtiger_config);
export class VtigerAdapter extends GenericRestAdapter {
    config = vtiger_config;
    constructor(credentials) {
        super(vtiger_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('vtiger', VtigerAdapter);
// Microsoft Dynamics 365 Adapter [20]
// Business apps CRM and ERP
const dynamics365_config = {
    id: 'dynamics365',
    name: 'Microsoft Dynamics 365',
    category: 'crm',
    description: 'Business apps CRM and ERP',
    authTypes: ['oauth2'],
    baseUrl: 'https://org.api.crm.dynamics.com/api/data/v9.2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(dynamics365_config);
export class Dynamics365Adapter extends GenericRestAdapter {
    config = dynamics365_config;
    constructor(credentials) {
        super(dynamics365_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('dynamics365', Dynamics365Adapter);
// Salesloft Adapter [21]
// Sales engagement platform
const salesloft_config = {
    id: 'salesloft',
    name: 'Salesloft',
    category: 'crm',
    description: 'Sales engagement platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://accounts.salesloft.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(salesloft_config);
export class SalesloftAdapter extends GenericRestAdapter {
    config = salesloft_config;
    constructor(credentials) {
        super(salesloft_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('salesloft', SalesloftAdapter);
// Outreach Adapter [22]
// Revenue engagement platform
const outreach_config = {
    id: 'outreach',
    name: 'Outreach',
    category: 'crm',
    description: 'Revenue engagement platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.outreach.io/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(outreach_config);
export class OutreachAdapter extends GenericRestAdapter {
    config = outreach_config;
    constructor(credentials) {
        super(outreach_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('outreach', OutreachAdapter);
// Clari Adapter [23]
// Revenue intelligence platform
const clari_config = {
    id: 'clari',
    name: 'Clari',
    category: 'crm',
    description: 'Revenue intelligence platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clari.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(clari_config);
export class ClariAdapter extends GenericRestAdapter {
    config = clari_config;
    constructor(credentials) {
        super(clari_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('clari', ClariAdapter);
// Gong Adapter [24]
// Revenue intelligence for calls
const gong_config = {
    id: 'gong',
    name: 'Gong',
    category: 'crm',
    description: 'Revenue intelligence for calls',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.gong.io/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(gong_config);
export class GongAdapter extends GenericRestAdapter {
    config = gong_config;
    constructor(credentials) {
        super(gong_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('gong', GongAdapter);
// 6sense Adapter [25]
// ABM and sales intelligence
const _6sense_config = {
    id: '6sense',
    name: '6sense',
    category: 'crm',
    description: 'ABM and sales intelligence',
    authTypes: ['api_key'],
    baseUrl: 'https://api.6sense.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(_6sense_config);
export class _6senseAdapter extends GenericRestAdapter {
    config = _6sense_config;
    constructor(credentials) {
        super(_6sense_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('6sense', _6senseAdapter);
// ZoomInfo Adapter [26]
// Go-to-market intelligence
const zoominfo_config = {
    id: 'zoominfo',
    name: 'ZoomInfo',
    category: 'crm',
    description: 'Go-to-market intelligence',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zoominfo.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(zoominfo_config);
export class ZoominfoAdapter extends GenericRestAdapter {
    config = zoominfo_config;
    constructor(credentials) {
        super(zoominfo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('zoominfo', ZoominfoAdapter);
// Clearbit Adapter [27]
// Marketing data enrichment
const clearbit_config = {
    id: 'clearbit',
    name: 'Clearbit',
    category: 'crm',
    description: 'Marketing data enrichment',
    authTypes: ['api_key'],
    baseUrl: 'https://company.clearbit.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(clearbit_config);
export class ClearbitAdapter extends GenericRestAdapter {
    config = clearbit_config;
    constructor(credentials) {
        super(clearbit_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('clearbit', ClearbitAdapter);
// Apollo.io Adapter [28]
// Sales intelligence platform
const apollo_config = {
    id: 'apollo',
    name: 'Apollo.io',
    category: 'crm',
    description: 'Sales intelligence platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.apollo.io/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(apollo_config);
export class ApolloAdapter extends GenericRestAdapter {
    config = apollo_config;
    constructor(credentials) {
        super(apollo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('apollo', ApolloAdapter);
// Leadfeeder Adapter [29]
// Website visitor tracking
const leadfeeder_config = {
    id: 'leadfeeder',
    name: 'Leadfeeder',
    category: 'crm',
    description: 'Website visitor tracking',
    authTypes: ['api_key'],
    baseUrl: 'https://api.leadfeeder.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(leadfeeder_config);
export class LeadfeederAdapter extends GenericRestAdapter {
    config = leadfeeder_config;
    constructor(credentials) {
        super(leadfeeder_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('leadfeeder', LeadfeederAdapter);
// Rollworks Adapter [30]
// Account-based marketing
const rollworks_config = {
    id: 'rollworks',
    name: 'Rollworks',
    category: 'crm',
    description: 'Account-based marketing',
    authTypes: ['api_key'],
    baseUrl: 'https://services.rollworks.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(rollworks_config);
export class RollworksAdapter extends GenericRestAdapter {
    config = rollworks_config;
    constructor(credentials) {
        super(rollworks_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('rollworks', RollworksAdapter);
// Demandbase Adapter [31]
// Account-based marketing
const demandbase_config = {
    id: 'demandbase',
    name: 'Demandbase',
    category: 'crm',
    description: 'Account-based marketing',
    authTypes: ['api_key'],
    baseUrl: 'https://api.demandbase.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(demandbase_config);
export class DemandbaseAdapter extends GenericRestAdapter {
    config = demandbase_config;
    constructor(credentials) {
        super(demandbase_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('demandbase', DemandbaseAdapter);
// Bombora Adapter [32]
// B2B intent data provider
const bombora_config = {
    id: 'bombora',
    name: 'Bombora',
    category: 'crm',
    description: 'B2B intent data provider',
    authTypes: ['api_key'],
    baseUrl: 'https://api.bombora.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(bombora_config);
export class BomboraAdapter extends GenericRestAdapter {
    config = bombora_config;
    constructor(credentials) {
        super(bombora_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('bombora', BomboraAdapter);
// AdRoll Adapter [33]
// Retargeting platform
const adroll_config = {
    id: 'adroll',
    name: 'AdRoll',
    category: 'crm',
    description: 'Retargeting platform',
    authTypes: ['api_key'],
    baseUrl: 'https://services.adroll.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(adroll_config);
export class AdrollAdapter extends GenericRestAdapter {
    config = adroll_config;
    constructor(credentials) {
        super(adroll_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('adroll', AdrollAdapter);
// Criteo Adapter [34]
// Commerce media platform
const criteo_config = {
    id: 'criteo',
    name: 'Criteo',
    category: 'crm',
    description: 'Commerce media platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.criteo.com/marketing/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(criteo_config);
export class CriteoAdapter extends GenericRestAdapter {
    config = criteo_config;
    constructor(credentials) {
        super(criteo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('criteo', CriteoAdapter);
// Taboola Adapter [35]
// Native advertising
const taboola_config = {
    id: 'taboola',
    name: 'Taboola',
    category: 'crm',
    description: 'Native advertising',
    authTypes: ['oauth2'],
    baseUrl: 'https://backstage.taboola.com/backstage/api/1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(taboola_config);
export class TaboolaAdapter extends GenericRestAdapter {
    config = taboola_config;
    constructor(credentials) {
        super(taboola_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('taboola', TaboolaAdapter);
// Outbrain Adapter [36]
// Content discovery
const outbrain_config = {
    id: 'outbrain',
    name: 'Outbrain',
    category: 'crm',
    description: 'Content discovery',
    authTypes: ['api_key'],
    baseUrl: 'https://api.outbrain.com/amplify/v0.1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(outbrain_config);
export class OutbrainAdapter extends GenericRestAdapter {
    config = outbrain_config;
    constructor(credentials) {
        super(outbrain_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('outbrain', OutbrainAdapter);
// SharpSpring Adapter [37]
// Marketing automation
const sharpspring_config = {
    id: 'sharpspring',
    name: 'SharpSpring',
    category: 'crm',
    description: 'Marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api.sharpspring.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sharpspring_config);
export class SharpspringAdapter extends GenericRestAdapter {
    config = sharpspring_config;
    constructor(credentials) {
        super(sharpspring_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sharpspring', SharpspringAdapter);
// Autopilot Adapter [38]
// Visual marketing automation
const autopilot_config = {
    id: 'autopilot',
    name: 'Autopilot',
    category: 'crm',
    description: 'Visual marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api2.autopilothq.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(autopilot_config);
export class AutopilotAdapter extends GenericRestAdapter {
    config = autopilot_config;
    constructor(credentials) {
        super(autopilot_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('autopilot', AutopilotAdapter);
// Customer.io Adapter [39]
// Automated messaging
const customer_io_crm_config = {
    id: 'customer_io_crm',
    name: 'Customer.io',
    category: 'crm',
    description: 'Automated messaging',
    authTypes: ['api_key'],
    baseUrl: 'https://api.customer.io/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(customer_io_crm_config);
export class CustomerIoCrmAdapter extends GenericRestAdapter {
    config = customer_io_crm_config;
    constructor(credentials) {
        super(customer_io_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('customer_io_crm', CustomerIoCrmAdapter);
// Adobe Marketo Engage Adapter [40]
// Marketing automation
const marketo_config = {
    id: 'marketo',
    name: 'Adobe Marketo Engage',
    category: 'crm',
    description: 'Marketing automation',
    authTypes: ['oauth2'],
    baseUrl: 'https://instance.mktorest.com/rest',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(marketo_config);
export class MarketoAdapter extends GenericRestAdapter {
    config = marketo_config;
    constructor(credentials) {
        super(marketo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('marketo', MarketoAdapter);
// Oracle Eloqua Adapter [41]
// Enterprise marketing automation
const eloqua_config = {
    id: 'eloqua',
    name: 'Oracle Eloqua',
    category: 'crm',
    description: 'Enterprise marketing automation',
    authTypes: ['oauth2'],
    baseUrl: 'https://secure.p-00.com/odata',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(eloqua_config);
export class EloquaAdapter extends GenericRestAdapter {
    config = eloqua_config;
    constructor(credentials) {
        super(eloqua_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('eloqua', EloquaAdapter);
// Pardot Adapter [42]
// B2B marketing automation
const pardot_config = {
    id: 'pardot',
    name: 'Pardot',
    category: 'crm',
    description: 'B2B marketing automation',
    authTypes: ['oauth2'],
    baseUrl: 'https://pi.pardot.com/api/version/4',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(pardot_config);
export class PardotAdapter extends GenericRestAdapter {
    config = pardot_config;
    constructor(credentials) {
        super(pardot_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('pardot', PardotAdapter);
// Salesforce Marketing Cloud Adapter [43]
// Digital marketing automation
const salesforce_marketing_config = {
    id: 'salesforce_marketing',
    name: 'Salesforce Marketing Cloud',
    category: 'crm',
    description: 'Digital marketing automation',
    authTypes: ['oauth2'],
    baseUrl: 'https://subdomain.marketingcloudapis.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(salesforce_marketing_config);
export class SalesforceMarketingAdapter extends GenericRestAdapter {
    config = salesforce_marketing_config;
    constructor(credentials) {
        super(salesforce_marketing_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('salesforce_marketing', SalesforceMarketingAdapter);
// Mailchimp Adapter [44]
// Email marketing platform
const mailchimp_crm_config = {
    id: 'mailchimp_crm',
    name: 'Mailchimp',
    category: 'crm',
    description: 'Email marketing platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://us1.api.mailchimp.com/3.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailchimp_crm_config);
export class MailchimpCrmAdapter extends GenericRestAdapter {
    config = mailchimp_crm_config;
    constructor(credentials) {
        super(mailchimp_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailchimp_crm', MailchimpCrmAdapter);
// Constant Contact Adapter [45]
// Email marketing
const constant_contact_crm_config = {
    id: 'constant_contact_crm',
    name: 'Constant Contact',
    category: 'crm',
    description: 'Email marketing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.constantcontact.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(constant_contact_crm_config);
export class ConstantContactCrmAdapter extends GenericRestAdapter {
    config = constant_contact_crm_config;
    constructor(credentials) {
        super(constant_contact_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('constant_contact_crm', ConstantContactCrmAdapter);
// Brevo Adapter [46]
// Digital marketing platform
const sendinblue_crm_config = {
    id: 'sendinblue_crm',
    name: 'Brevo',
    category: 'crm',
    description: 'Digital marketing platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.brevo.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sendinblue_crm_config);
export class SendinblueCrmAdapter extends GenericRestAdapter {
    config = sendinblue_crm_config;
    constructor(credentials) {
        super(sendinblue_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sendinblue_crm', SendinblueCrmAdapter);
// AWeber Adapter [47]
// Email marketing
const aweber_crm_config = {
    id: 'aweber_crm',
    name: 'AWeber',
    category: 'crm',
    description: 'Email marketing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.aweber.com/1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(aweber_crm_config);
export class AweberCrmAdapter extends GenericRestAdapter {
    config = aweber_crm_config;
    constructor(credentials) {
        super(aweber_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('aweber_crm', AweberCrmAdapter);
// GetResponse Adapter [48]
// Email marketing automation
const getresponse_crm_config = {
    id: 'getresponse_crm',
    name: 'GetResponse',
    category: 'crm',
    description: 'Email marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api.getresponse.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(getresponse_crm_config);
export class GetresponseCrmAdapter extends GenericRestAdapter {
    config = getresponse_crm_config;
    constructor(credentials) {
        super(getresponse_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('getresponse_crm', GetresponseCrmAdapter);
// Campaign Monitor Adapter [49]
// Email marketing
const campaign_monitor_crm_config = {
    id: 'campaign_monitor_crm',
    name: 'Campaign Monitor',
    category: 'crm',
    description: 'Email marketing',
    authTypes: ['api_key'],
    baseUrl: 'https://api.createsend.com/api/v3.2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(campaign_monitor_crm_config);
export class CampaignMonitorCrmAdapter extends GenericRestAdapter {
    config = campaign_monitor_crm_config;
    constructor(credentials) {
        super(campaign_monitor_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('campaign_monitor_crm', CampaignMonitorCrmAdapter);
// Drip Adapter [50]
// E-commerce email marketing
const drip_crm_config = {
    id: 'drip_crm',
    name: 'Drip',
    category: 'crm',
    description: 'E-commerce email marketing',
    authTypes: ['api_key'],
    baseUrl: 'https://api.getdrip.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(drip_crm_config);
export class DripCrmAdapter extends GenericRestAdapter {
    config = drip_crm_config;
    constructor(credentials) {
        super(drip_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('drip_crm', DripCrmAdapter);
// Klaviyo Adapter [51]
// Email SMS for e-commerce
const klaviyo_crm_config = {
    id: 'klaviyo_crm',
    name: 'Klaviyo',
    category: 'crm',
    description: 'Email SMS for e-commerce',
    authTypes: ['api_key'],
    baseUrl: 'https://a.klaviyo.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(klaviyo_crm_config);
export class KlaviyoCrmAdapter extends GenericRestAdapter {
    config = klaviyo_crm_config;
    constructor(credentials) {
        super(klaviyo_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('klaviyo_crm', KlaviyoCrmAdapter);
// ConvertKit Adapter [52]
// Email for creators
const convertkit_crm_config = {
    id: 'convertkit_crm',
    name: 'ConvertKit',
    category: 'crm',
    description: 'Email for creators',
    authTypes: ['api_key'],
    baseUrl: 'https://api.convertkit.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(convertkit_crm_config);
export class ConvertkitCrmAdapter extends GenericRestAdapter {
    config = convertkit_crm_config;
    constructor(credentials) {
        super(convertkit_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('convertkit_crm', ConvertkitCrmAdapter);
// ActiveCampaign Adapter [53]
// Email marketing automation
const activecampaign_crm_config = {
    id: 'activecampaign_crm',
    name: 'ActiveCampaign',
    category: 'crm',
    description: 'Email marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://domain.api-us1.com/api/3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(activecampaign_crm_config);
export class ActivecampaignCrmAdapter extends GenericRestAdapter {
    config = activecampaign_crm_config;
    constructor(credentials) {
        super(activecampaign_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('activecampaign_crm', ActivecampaignCrmAdapter);
// HubSpot Marketing Adapter [54]
// Inbound marketing platform
const hubspot_marketing_config = {
    id: 'hubspot_marketing',
    name: 'HubSpot Marketing',
    category: 'crm',
    description: 'Inbound marketing platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hubapi.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hubspot_marketing_config);
export class HubspotMarketingAdapter extends GenericRestAdapter {
    config = hubspot_marketing_config;
    constructor(credentials) {
        super(hubspot_marketing_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hubspot_marketing', HubspotMarketingAdapter);
// Zoho Marketing Automation Adapter [55]
// Marketing automation by Zoho
const zoho_marketing_config = {
    id: 'zoho_marketing',
    name: 'Zoho Marketing Automation',
    category: 'crm',
    description: 'Marketing automation by Zoho',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.zohoapis.com/marketingautomation',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(zoho_marketing_config);
export class ZohoMarketingAdapter extends GenericRestAdapter {
    config = zoho_marketing_config;
    constructor(credentials) {
        super(zoho_marketing_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('zoho_marketing', ZohoMarketingAdapter);
// SharpSpring Marketing Adapter [56]
// Marketing automation and CRM
const SharpSpring_marketing_config = {
    id: 'SharpSpring_marketing',
    name: 'SharpSpring Marketing',
    category: 'crm',
    description: 'Marketing automation and CRM',
    authTypes: ['api_key'],
    baseUrl: 'https://api.sharpspring.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(SharpSpring_marketing_config);
export class SharpSpringMarketingAdapter extends GenericRestAdapter {
    config = SharpSpring_marketing_config;
    constructor(credentials) {
        super(SharpSpring_marketing_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('SharpSpring_marketing', SharpSpringMarketingAdapter);
// Autopilot CRM Adapter [57]
// Visual automation
const autopilot_crm_config = {
    id: 'autopilot_crm',
    name: 'Autopilot CRM',
    category: 'crm',
    description: 'Visual automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api2.autopilothq.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(autopilot_crm_config);
export class AutopilotCrmAdapter extends GenericRestAdapter {
    config = autopilot_crm_config;
    constructor(credentials) {
        super(autopilot_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('autopilot_crm', AutopilotCrmAdapter);
// dotdigital Adapter [58]
// Marketing automation
const dotdigital_config = {
    id: 'dotdigital',
    name: 'dotdigital',
    category: 'crm',
    description: 'Marketing automation',
    authTypes: ['basic'],
    baseUrl: 'https://r1-api.dotdigital.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(dotdigital_config);
export class DotdigitalAdapter extends GenericRestAdapter {
    config = dotdigital_config;
    constructor(credentials) {
        super(dotdigital_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('dotdigital', DotdigitalAdapter);
// Emarsys (SAP) Adapter [59]
// Marketing automation
const emarsys_config = {
    id: 'emarsys',
    name: 'Emarsys (SAP)',
    category: 'crm',
    description: 'Marketing automation',
    authTypes: ['basic'],
    baseUrl: 'https://api.emarsys.net/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(emarsys_config);
export class EmarsysAdapter extends GenericRestAdapter {
    config = emarsys_config;
    constructor(credentials) {
        super(emarsys_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('emarsys', EmarsysAdapter);
// BlueConic Adapter [60]
// Customer data platform
const blueconic_config = {
    id: 'blueconic',
    name: 'BlueConic',
    category: 'crm',
    description: 'Customer data platform',
    authTypes: ['basic'],
    baseUrl: 'https://{domain}.blueconic.net/api',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(blueconic_config);
export class BlueconicAdapter extends GenericRestAdapter {
    config = blueconic_config;
    constructor(credentials) {
        super(blueconic_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('blueconic', BlueconicAdapter);
// Optimizely Data Platform Adapter [61]
// Digital experience and CDP
const optimizely_crm_config = {
    id: 'optimizely_crm',
    name: 'Optimizely Data Platform',
    category: 'crm',
    description: 'Digital experience and CDP',
    authTypes: ['api_key'],
    baseUrl: 'https://api.optimizely.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(optimizely_crm_config);
export class OptimizelyCrmAdapter extends GenericRestAdapter {
    config = optimizely_crm_config;
    constructor(credentials) {
        super(optimizely_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('optimizely_crm', OptimizelyCrmAdapter);
// Lytics Adapter [62]
// Customer data platform
const lytics_config = {
    id: 'lytics',
    name: 'Lytics',
    category: 'crm',
    description: 'Customer data platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.lytics.io/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(lytics_config);
export class LyticsAdapter extends GenericRestAdapter {
    config = lytics_config;
    constructor(credentials) {
        super(lytics_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('lytics', LyticsAdapter);
// mParticle Adapter [63]
// Customer data platform
const mparticle_config = {
    id: 'mparticle',
    name: 'mParticle',
    category: 'crm',
    description: 'Customer data platform',
    authTypes: ['basic'],
    baseUrl: 'https://s2s.mparticle.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mparticle_config);
export class MparticleAdapter extends GenericRestAdapter {
    config = mparticle_config;
    constructor(credentials) {
        super(mparticle_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mparticle', MparticleAdapter);
// Segment (Twilio) Adapter [64]
// Customer data platform
const segment_config = {
    id: 'segment',
    name: 'Segment (Twilio)',
    category: 'crm',
    description: 'Customer data platform',
    authTypes: ['basic'],
    baseUrl: 'https://api.segment.io/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(segment_config);
export class SegmentAdapter extends GenericRestAdapter {
    config = segment_config;
    constructor(credentials) {
        super(segment_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('segment', SegmentAdapter);
// Tealium Adapter [65]
// Customer data platform
const tealium_config = {
    id: 'tealium',
    name: 'Tealium',
    category: 'crm',
    description: 'Customer data platform',
    authTypes: ['basic'],
    baseUrl: 'https://community.tealiumapis.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(tealium_config);
export class TealiumAdapter extends GenericRestAdapter {
    config = tealium_config;
    constructor(credentials) {
        super(tealium_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('tealium', TealiumAdapter);
// Loomi Adapter [66]
// Marketing automation
const loomi_config = {
    id: 'loomi',
    name: 'Loomi',
    category: 'crm',
    description: 'Marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api.loomi.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(loomi_config);
export class LoomiAdapter extends GenericRestAdapter {
    config = loomi_config;
    constructor(credentials) {
        super(loomi_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('loomi', LoomiAdapter);
// Drip Ecommerce Adapter [67]
// E-commerce marketing automation
const drip_ecom_config = {
    id: 'drip_ecom',
    name: 'Drip Ecommerce',
    category: 'crm',
    description: 'E-commerce marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api.getdrip.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(drip_ecom_config);
export class DripEcomAdapter extends GenericRestAdapter {
    config = drip_ecom_config;
    constructor(credentials) {
        super(drip_ecom_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('drip_ecom', DripEcomAdapter);
// Omnisend Adapter [68]
// E-commerce email SMS
const omnisend_crm_config = {
    id: 'omnisend_crm',
    name: 'Omnisend',
    category: 'crm',
    description: 'E-commerce email SMS',
    authTypes: ['api_key'],
    baseUrl: 'https://api.omnisend.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(omnisend_crm_config);
export class OmnisendCrmAdapter extends GenericRestAdapter {
    config = omnisend_crm_config;
    constructor(credentials) {
        super(omnisend_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('omnisend_crm', OmnisendCrmAdapter);
// Moosend Adapter [69]
// Email marketing automation
const moosend_crm_config = {
    id: 'moosend_crm',
    name: 'Moosend',
    category: 'crm',
    description: 'Email marketing automation',
    authTypes: ['api_key'],
    baseUrl: 'https://api.moosend.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(moosend_crm_config);
export class MoosendCrmAdapter extends GenericRestAdapter {
    config = moosend_crm_config;
    constructor(credentials) {
        super(moosend_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('moosend_crm', MoosendCrmAdapter);
// EmailOctopus Adapter [70]
// Affordable email marketing
const emailoctopus_crm_config = {
    id: 'emailoctopus_crm',
    name: 'EmailOctopus',
    category: 'crm',
    description: 'Affordable email marketing',
    authTypes: ['api_key'],
    baseUrl: 'https://emailoctopus.com/api/1.6',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(emailoctopus_crm_config);
export class EmailoctopusCrmAdapter extends GenericRestAdapter {
    config = emailoctopus_crm_config;
    constructor(credentials) {
        super(emailoctopus_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('emailoctopus_crm', EmailoctopusCrmAdapter);
// MailerLite Adapter [71]
// Email for growing businesses
const mailerlite_crm_config = {
    id: 'mailerlite_crm',
    name: 'MailerLite',
    category: 'crm',
    description: 'Email for growing businesses',
    authTypes: ['api_key'],
    baseUrl: 'https://api.mailerlite.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailerlite_crm_config);
export class MailerliteCrmAdapter extends GenericRestAdapter {
    config = mailerlite_crm_config;
    constructor(credentials) {
        super(mailerlite_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailerlite_crm', MailerliteCrmAdapter);
// Benchmark Email Adapter [72]
// Email marketing platform
const benchmark_email_crm_config = {
    id: 'benchmark_email_crm',
    name: 'Benchmark Email',
    category: 'crm',
    description: 'Email marketing platform',
    authTypes: ['api_key'],
    baseUrl: 'https://client.benchmarkemail.com/Contact',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(benchmark_email_crm_config);
export class BenchmarkEmailCrmAdapter extends GenericRestAdapter {
    config = benchmark_email_crm_config;
    constructor(credentials) {
        super(benchmark_email_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('benchmark_email_crm', BenchmarkEmailCrmAdapter);
// Mailjet Adapter [73]
// Email delivery platform
const mailjet_crm_config = {
    id: 'mailjet_crm',
    name: 'Mailjet',
    category: 'crm',
    description: 'Email delivery platform',
    authTypes: ['basic'],
    baseUrl: 'https://api.mailjet.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailjet_crm_config);
export class MailjetCrmAdapter extends GenericRestAdapter {
    config = mailjet_crm_config;
    constructor(credentials) {
        super(mailjet_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailjet_crm', MailjetCrmAdapter);
// Elastic Email Adapter [74]
// Affordable email platform
const elastic_email_crm_config = {
    id: 'elastic_email_crm',
    name: 'Elastic Email',
    category: 'crm',
    description: 'Affordable email platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.elasticemail.com/v4',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(elastic_email_crm_config);
export class ElasticEmailCrmAdapter extends GenericRestAdapter {
    config = elastic_email_crm_config;
    constructor(credentials) {
        super(elastic_email_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('elastic_email_crm', ElasticEmailCrmAdapter);
// SendGrid Adapter [75]
// Email delivery service
const sendgrid_crm_config = {
    id: 'sendgrid_crm',
    name: 'SendGrid',
    category: 'crm',
    description: 'Email delivery service',
    authTypes: ['bearer'],
    baseUrl: 'https://api.sendgrid.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sendgrid_crm_config);
export class SendgridCrmAdapter extends GenericRestAdapter {
    config = sendgrid_crm_config;
    constructor(credentials) {
        super(sendgrid_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sendgrid_crm', SendgridCrmAdapter);
// Mailgun Adapter [76]
// Email API for developers
const mailgun_crm_config = {
    id: 'mailgun_crm',
    name: 'Mailgun',
    category: 'crm',
    description: 'Email API for developers',
    authTypes: ['basic'],
    baseUrl: 'https://api.mailgun.net/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailgun_crm_config);
export class MailgunCrmAdapter extends GenericRestAdapter {
    config = mailgun_crm_config;
    constructor(credentials) {
        super(mailgun_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailgun_crm', MailgunCrmAdapter);
// SparkPost Adapter [77]
// Email delivery analytics
const sparkpost_crm_config = {
    id: 'sparkpost_crm',
    name: 'SparkPost',
    category: 'crm',
    description: 'Email delivery analytics',
    authTypes: ['api_key'],
    baseUrl: 'https://api.sparkpost.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sparkpost_crm_config);
export class SparkpostCrmAdapter extends GenericRestAdapter {
    config = sparkpost_crm_config;
    constructor(credentials) {
        super(sparkpost_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sparkpost_crm', SparkpostCrmAdapter);
// Postmark Adapter [78]
// Transactional email
const postmark_crm_config = {
    id: 'postmark_crm',
    name: 'Postmark',
    category: 'crm',
    description: 'Transactional email',
    authTypes: ['api_key'],
    baseUrl: 'https://api.postmarkapp.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(postmark_crm_config);
export class PostmarkCrmAdapter extends GenericRestAdapter {
    config = postmark_crm_config;
    constructor(credentials) {
        super(postmark_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('postmark_crm', PostmarkCrmAdapter);
// Amazon SES Adapter [79]
// AWS email service
const amazonses_crm_config = {
    id: 'amazonses_crm',
    name: 'Amazon SES',
    category: 'crm',
    description: 'AWS email service',
    authTypes: ['api_key'],
    baseUrl: 'https://email.us-east-1.amazonaws.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(amazonses_crm_config);
export class AmazonsesCrmAdapter extends GenericRestAdapter {
    config = amazonses_crm_config;
    constructor(credentials) {
        super(amazonses_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('amazonses_crm', AmazonsesCrmAdapter);
// Mailtrap Adapter [80]
// Email testing platform
const mailtrap_crm_config = {
    id: 'mailtrap_crm',
    name: 'Mailtrap',
    category: 'crm',
    description: 'Email testing platform',
    authTypes: ['api_key'],
    baseUrl: 'https://mailtrap.io/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailtrap_crm_config);
export class MailtrapCrmAdapter extends GenericRestAdapter {
    config = mailtrap_crm_config;
    constructor(credentials) {
        super(mailtrap_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailtrap_crm', MailtrapCrmAdapter);
// Pepipost Adapter [81]
// Email delivery platform
const pepipost_crm_config = {
    id: 'pepipost_crm',
    name: 'Pepipost',
    category: 'crm',
    description: 'Email delivery platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.pepipost.com/v5',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(pepipost_crm_config);
export class PepipostCrmAdapter extends GenericRestAdapter {
    config = pepipost_crm_config;
    constructor(credentials) {
        super(pepipost_crm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('pepipost_crm', PepipostCrmAdapter);
//# sourceMappingURL=crm.js.map