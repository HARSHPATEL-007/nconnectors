// Generated Adapters — retail (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// Evo360 Adapter [1400]
// pos solution for retail
const retail_pos_1_config = {
    id: 'retail_pos_1',
    name: 'Evo360',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evo360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_1_config);
export class RetailPos1Adapter extends GenericRestAdapter {
    config = retail_pos_1_config;
    constructor(credentials) {
        super(retail_pos_1_config, credentials);
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
registry.register('retail_pos_1', RetailPos1Adapter);
// CraftSystems Adapter [1401]
// inventory solution for retail
const retail_inventory_2_config = {
    id: 'retail_inventory_2',
    name: 'CraftSystems',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_2_config);
export class RetailInventory2Adapter extends GenericRestAdapter {
    config = retail_inventory_2_config;
    constructor(credentials) {
        super(retail_inventory_2_config, credentials);
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
registry.register('retail_inventory_2', RetailInventory2Adapter);
// TruFlow Adapter [1402]
// ecommerce solution for retail
const retail_ecommerce_3_config = {
    id: 'retail_ecommerce_3',
    name: 'TruFlow',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_3_config);
export class RetailEcommerce3Adapter extends GenericRestAdapter {
    config = retail_ecommerce_3_config;
    constructor(credentials) {
        super(retail_ecommerce_3_config, credentials);
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
registry.register('retail_ecommerce_3', RetailEcommerce3Adapter);
// Stratus360 Adapter [1403]
// loyalty solution for retail
const retail_loyalty_4_config = {
    id: 'retail_loyalty_4',
    name: 'Stratus360',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratus360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_4_config);
export class RetailLoyalty4Adapter extends GenericRestAdapter {
    config = retail_loyalty_4_config;
    constructor(credentials) {
        super(retail_loyalty_4_config, credentials);
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
registry.register('retail_loyalty_4', RetailLoyalty4Adapter);
// CloudCloud Adapter [1404]
// analytics solution for retail
const retail_analytics_5_config = {
    id: 'retail_analytics_5',
    name: 'CloudCloud',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cloudcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_5_config);
export class RetailAnalytics5Adapter extends GenericRestAdapter {
    config = retail_analytics_5_config;
    constructor(credentials) {
        super(retail_analytics_5_config, credentials);
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
registry.register('retail_analytics_5', RetailAnalytics5Adapter);
// EdgeCore Adapter [1405]
// pricing solution for retail
const retail_pricing_6_config = {
    id: 'retail_pricing_6',
    name: 'EdgeCore',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgecore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_6_config);
export class RetailPricing6Adapter extends GenericRestAdapter {
    config = retail_pricing_6_config;
    constructor(credentials) {
        super(retail_pricing_6_config, credentials);
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
registry.register('retail_pricing_6', RetailPricing6Adapter);
// PixelPoint Adapter [1406]
// merchandising solution for retail
const retail_merchandising_7_config = {
    id: 'retail_merchandising_7',
    name: 'PixelPoint',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_7_config);
export class RetailMerchandising7Adapter extends GenericRestAdapter {
    config = retail_merchandising_7_config;
    constructor(credentials) {
        super(retail_merchandising_7_config, credentials);
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
registry.register('retail_merchandising_7', RetailMerchandising7Adapter);
// LumenAI Adapter [1407]
// customer solution for retail
const retail_customer_8_config = {
    id: 'retail_customer_8',
    name: 'LumenAI',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumenai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_8_config);
export class RetailCustomer8Adapter extends GenericRestAdapter {
    config = retail_customer_8_config;
    constructor(credentials) {
        super(retail_customer_8_config, credentials);
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
registry.register('retail_customer_8', RetailCustomer8Adapter);
// BrightPath Adapter [1408]
// supply chain solution for retail
const retail_supply_chain_9_config = {
    id: 'retail_supply_chain_9',
    name: 'BrightPath',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.brightpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_9_config);
export class RetailSupplyChain9Adapter extends GenericRestAdapter {
    config = retail_supply_chain_9_config;
    constructor(credentials) {
        super(retail_supply_chain_9_config, credentials);
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
registry.register('retail_supply_chain_9', RetailSupplyChain9Adapter);
// VertexPath Adapter [1409]
// workforce solution for retail
const retail_workforce_10_config = {
    id: 'retail_workforce_10',
    name: 'VertexPath',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_10_config);
export class RetailWorkforce10Adapter extends GenericRestAdapter {
    config = retail_workforce_10_config;
    constructor(credentials) {
        super(retail_workforce_10_config, credentials);
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
registry.register('retail_workforce_10', RetailWorkforce10Adapter);
// NovaCloud Adapter [1410]
// pos solution for retail
const retail_pos_11_config = {
    id: 'retail_pos_11',
    name: 'NovaCloud',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novacloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_11_config);
export class RetailPos11Adapter extends GenericRestAdapter {
    config = retail_pos_11_config;
    constructor(credentials) {
        super(retail_pos_11_config, credentials);
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
registry.register('retail_pos_11', RetailPos11Adapter);
// GlowLogic Adapter [1411]
// inventory solution for retail
const retail_inventory_12_config = {
    id: 'retail_inventory_12',
    name: 'GlowLogic',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_12_config);
export class RetailInventory12Adapter extends GenericRestAdapter {
    config = retail_inventory_12_config;
    constructor(credentials) {
        super(retail_inventory_12_config, credentials);
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
registry.register('retail_inventory_12', RetailInventory12Adapter);
// JunoDynamics Adapter [1412]
// ecommerce solution for retail
const retail_ecommerce_13_config = {
    id: 'retail_ecommerce_13',
    name: 'JunoDynamics',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junodynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_13_config);
export class RetailEcommerce13Adapter extends GenericRestAdapter {
    config = retail_ecommerce_13_config;
    constructor(credentials) {
        super(retail_ecommerce_13_config, credentials);
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
registry.register('retail_ecommerce_13', RetailEcommerce13Adapter);
// RaptorPoint Adapter [1413]
// loyalty solution for retail
const retail_loyalty_14_config = {
    id: 'retail_loyalty_14',
    name: 'RaptorPoint',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.raptorpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_14_config);
export class RetailLoyalty14Adapter extends GenericRestAdapter {
    config = retail_loyalty_14_config;
    constructor(credentials) {
        super(retail_loyalty_14_config, credentials);
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
registry.register('retail_loyalty_14', RetailLoyalty14Adapter);
// QuestSystems Adapter [1414]
// analytics solution for retail
const retail_analytics_15_config = {
    id: 'retail_analytics_15',
    name: 'QuestSystems',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_15_config);
export class RetailAnalytics15Adapter extends GenericRestAdapter {
    config = retail_analytics_15_config;
    constructor(credentials) {
        super(retail_analytics_15_config, credentials);
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
registry.register('retail_analytics_15', RetailAnalytics15Adapter);
// MetaSolutions Adapter [1415]
// pricing solution for retail
const retail_pricing_16_config = {
    id: 'retail_pricing_16',
    name: 'MetaSolutions',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metasolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_16_config);
export class RetailPricing16Adapter extends GenericRestAdapter {
    config = retail_pricing_16_config;
    constructor(credentials) {
        super(retail_pricing_16_config, credentials);
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
registry.register('retail_pricing_16', RetailPricing16Adapter);
// TruTechnologies Adapter [1416]
// merchandising solution for retail
const retail_merchandising_17_config = {
    id: 'retail_merchandising_17',
    name: 'TruTechnologies',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.trutechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_17_config);
export class RetailMerchandising17Adapter extends GenericRestAdapter {
    config = retail_merchandising_17_config;
    constructor(credentials) {
        super(retail_merchandising_17_config, credentials);
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
registry.register('retail_merchandising_17', RetailMerchandising17Adapter);
// EvoDigital Adapter [1417]
// customer solution for retail
const retail_customer_18_config = {
    id: 'retail_customer_18',
    name: 'EvoDigital',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evodigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_18_config);
export class RetailCustomer18Adapter extends GenericRestAdapter {
    config = retail_customer_18_config;
    constructor(credentials) {
        super(retail_customer_18_config, credentials);
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
registry.register('retail_customer_18', RetailCustomer18Adapter);
// KarmaWave Adapter [1418]
// supply chain solution for retail
const retail_supply_chain_19_config = {
    id: 'retail_supply_chain_19',
    name: 'KarmaWave',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmawave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_19_config);
export class RetailSupplyChain19Adapter extends GenericRestAdapter {
    config = retail_supply_chain_19_config;
    constructor(credentials) {
        super(retail_supply_chain_19_config, credentials);
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
registry.register('retail_supply_chain_19', RetailSupplyChain19Adapter);
// EvoCore Adapter [1419]
// workforce solution for retail
const retail_workforce_20_config = {
    id: 'retail_workforce_20',
    name: 'EvoCore',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evocore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_20_config);
export class RetailWorkforce20Adapter extends GenericRestAdapter {
    config = retail_workforce_20_config;
    constructor(credentials) {
        super(retail_workforce_20_config, credentials);
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
registry.register('retail_workforce_20', RetailWorkforce20Adapter);
// VisionPlus Adapter [1420]
// pos solution for retail
const retail_pos_21_config = {
    id: 'retail_pos_21',
    name: 'VisionPlus',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.visionplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_21_config);
export class RetailPos21Adapter extends GenericRestAdapter {
    config = retail_pos_21_config;
    constructor(credentials) {
        super(retail_pos_21_config, credentials);
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
registry.register('retail_pos_21', RetailPos21Adapter);
// PeakLabs Adapter [1421]
// inventory solution for retail
const retail_inventory_22_config = {
    id: 'retail_inventory_22',
    name: 'PeakLabs',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.peaklabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_22_config);
export class RetailInventory22Adapter extends GenericRestAdapter {
    config = retail_inventory_22_config;
    constructor(credentials) {
        super(retail_inventory_22_config, credentials);
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
registry.register('retail_inventory_22', RetailInventory22Adapter);
// ClearSolutions Adapter [1422]
// ecommerce solution for retail
const retail_ecommerce_23_config = {
    id: 'retail_ecommerce_23',
    name: 'ClearSolutions',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clearsolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_23_config);
export class RetailEcommerce23Adapter extends GenericRestAdapter {
    config = retail_ecommerce_23_config;
    constructor(credentials) {
        super(retail_ecommerce_23_config, credentials);
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
registry.register('retail_ecommerce_23', RetailEcommerce23Adapter);
// HorizonMax Adapter [1423]
// loyalty solution for retail
const retail_loyalty_24_config = {
    id: 'retail_loyalty_24',
    name: 'HorizonMax',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_24_config);
export class RetailLoyalty24Adapter extends GenericRestAdapter {
    config = retail_loyalty_24_config;
    constructor(credentials) {
        super(retail_loyalty_24_config, credentials);
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
registry.register('retail_loyalty_24', RetailLoyalty24Adapter);
// UpliftDynamics Adapter [1424]
// analytics solution for retail
const retail_analytics_25_config = {
    id: 'retail_analytics_25',
    name: 'UpliftDynamics',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_25_config);
export class RetailAnalytics25Adapter extends GenericRestAdapter {
    config = retail_analytics_25_config;
    constructor(credentials) {
        super(retail_analytics_25_config, credentials);
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
registry.register('retail_analytics_25', RetailAnalytics25Adapter);
// BoltCore Adapter [1425]
// pricing solution for retail
const retail_pricing_26_config = {
    id: 'retail_pricing_26',
    name: 'BoltCore',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_26_config);
export class RetailPricing26Adapter extends GenericRestAdapter {
    config = retail_pricing_26_config;
    constructor(credentials) {
        super(retail_pricing_26_config, credentials);
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
registry.register('retail_pricing_26', RetailPricing26Adapter);
// NovaDynamics Adapter [1426]
// merchandising solution for retail
const retail_merchandising_27_config = {
    id: 'retail_merchandising_27',
    name: 'NovaDynamics',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novadynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_27_config);
export class RetailMerchandising27Adapter extends GenericRestAdapter {
    config = retail_merchandising_27_config;
    constructor(credentials) {
        super(retail_merchandising_27_config, credentials);
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
registry.register('retail_merchandising_27', RetailMerchandising27Adapter);
// PivotLogic Adapter [1427]
// customer solution for retail
const retail_customer_28_config = {
    id: 'retail_customer_28',
    name: 'PivotLogic',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_28_config);
export class RetailCustomer28Adapter extends GenericRestAdapter {
    config = retail_customer_28_config;
    constructor(credentials) {
        super(retail_customer_28_config, credentials);
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
registry.register('retail_customer_28', RetailCustomer28Adapter);
// OrbitPoint Adapter [1428]
// supply chain solution for retail
const retail_supply_chain_29_config = {
    id: 'retail_supply_chain_29',
    name: 'OrbitPoint',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.orbitpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_29_config);
export class RetailSupplyChain29Adapter extends GenericRestAdapter {
    config = retail_supply_chain_29_config;
    constructor(credentials) {
        super(retail_supply_chain_29_config, credentials);
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
registry.register('retail_supply_chain_29', RetailSupplyChain29Adapter);
// TruWorks Adapter [1429]
// workforce solution for retail
const retail_workforce_30_config = {
    id: 'retail_workforce_30',
    name: 'TruWorks',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_30_config);
export class RetailWorkforce30Adapter extends GenericRestAdapter {
    config = retail_workforce_30_config;
    constructor(credentials) {
        super(retail_workforce_30_config, credentials);
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
registry.register('retail_workforce_30', RetailWorkforce30Adapter);
// ElevateData Adapter [1430]
// pos solution for retail
const retail_pos_31_config = {
    id: 'retail_pos_31',
    name: 'ElevateData',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatedata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_31_config);
export class RetailPos31Adapter extends GenericRestAdapter {
    config = retail_pos_31_config;
    constructor(credentials) {
        super(retail_pos_31_config, credentials);
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
registry.register('retail_pos_31', RetailPos31Adapter);
// TraxConnect Adapter [1431]
// inventory solution for retail
const retail_inventory_32_config = {
    id: 'retail_inventory_32',
    name: 'TraxConnect',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_32_config);
export class RetailInventory32Adapter extends GenericRestAdapter {
    config = retail_inventory_32_config;
    constructor(credentials) {
        super(retail_inventory_32_config, credentials);
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
registry.register('retail_inventory_32', RetailInventory32Adapter);
// RaptorWorks Adapter [1432]
// ecommerce solution for retail
const retail_ecommerce_33_config = {
    id: 'retail_ecommerce_33',
    name: 'RaptorWorks',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.raptorworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_33_config);
export class RetailEcommerce33Adapter extends GenericRestAdapter {
    config = retail_ecommerce_33_config;
    constructor(credentials) {
        super(retail_ecommerce_33_config, credentials);
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
registry.register('retail_ecommerce_33', RetailEcommerce33Adapter);
// BeaconDigital Adapter [1433]
// loyalty solution for retail
const retail_loyalty_34_config = {
    id: 'retail_loyalty_34',
    name: 'BeaconDigital',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beacondigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_34_config);
export class RetailLoyalty34Adapter extends GenericRestAdapter {
    config = retail_loyalty_34_config;
    constructor(credentials) {
        super(retail_loyalty_34_config, credentials);
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
registry.register('retail_loyalty_34', RetailLoyalty34Adapter);
// TurboWave Adapter [1434]
// analytics solution for retail
const retail_analytics_35_config = {
    id: 'retail_analytics_35',
    name: 'TurboWave',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.turbowave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_35_config);
export class RetailAnalytics35Adapter extends GenericRestAdapter {
    config = retail_analytics_35_config;
    constructor(credentials) {
        super(retail_analytics_35_config, credentials);
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
registry.register('retail_analytics_35', RetailAnalytics35Adapter);
// MatrixForce Adapter [1435]
// pricing solution for retail
const retail_pricing_36_config = {
    id: 'retail_pricing_36',
    name: 'MatrixForce',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_36_config);
export class RetailPricing36Adapter extends GenericRestAdapter {
    config = retail_pricing_36_config;
    constructor(credentials) {
        super(retail_pricing_36_config, credentials);
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
registry.register('retail_pricing_36', RetailPricing36Adapter);
// QuasarPoint Adapter [1436]
// merchandising solution for retail
const retail_merchandising_37_config = {
    id: 'retail_merchandising_37',
    name: 'QuasarPoint',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quasarpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_37_config);
export class RetailMerchandising37Adapter extends GenericRestAdapter {
    config = retail_merchandising_37_config;
    constructor(credentials) {
        super(retail_merchandising_37_config, credentials);
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
registry.register('retail_merchandising_37', RetailMerchandising37Adapter);
// TruLink Adapter [1437]
// customer solution for retail
const retail_customer_38_config = {
    id: 'retail_customer_38',
    name: 'TruLink',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.trulink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_38_config);
export class RetailCustomer38Adapter extends GenericRestAdapter {
    config = retail_customer_38_config;
    constructor(credentials) {
        super(retail_customer_38_config, credentials);
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
registry.register('retail_customer_38', RetailCustomer38Adapter);
// OnyxZone Adapter [1438]
// supply chain solution for retail
const retail_supply_chain_39_config = {
    id: 'retail_supply_chain_39',
    name: 'OnyxZone',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_39_config);
export class RetailSupplyChain39Adapter extends GenericRestAdapter {
    config = retail_supply_chain_39_config;
    constructor(credentials) {
        super(retail_supply_chain_39_config, credentials);
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
registry.register('retail_supply_chain_39', RetailSupplyChain39Adapter);
// ForgeLogic Adapter [1439]
// workforce solution for retail
const retail_workforce_40_config = {
    id: 'retail_workforce_40',
    name: 'ForgeLogic',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgelogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_40_config);
export class RetailWorkforce40Adapter extends GenericRestAdapter {
    config = retail_workforce_40_config;
    constructor(credentials) {
        super(retail_workforce_40_config, credentials);
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
registry.register('retail_workforce_40', RetailWorkforce40Adapter);
// EchoPoint Adapter [1440]
// pos solution for retail
const retail_pos_41_config = {
    id: 'retail_pos_41',
    name: 'EchoPoint',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echopoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_41_config);
export class RetailPos41Adapter extends GenericRestAdapter {
    config = retail_pos_41_config;
    constructor(credentials) {
        super(retail_pos_41_config, credentials);
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
registry.register('retail_pos_41', RetailPos41Adapter);
// Forge360 Adapter [1441]
// inventory solution for retail
const retail_inventory_42_config = {
    id: 'retail_inventory_42',
    name: 'Forge360',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forge360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_42_config);
export class RetailInventory42Adapter extends GenericRestAdapter {
    config = retail_inventory_42_config;
    constructor(credentials) {
        super(retail_inventory_42_config, credentials);
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
registry.register('retail_inventory_42', RetailInventory42Adapter);
// EmberLink Adapter [1442]
// ecommerce solution for retail
const retail_ecommerce_43_config = {
    id: 'retail_ecommerce_43',
    name: 'EmberLink',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.emberlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_43_config);
export class RetailEcommerce43Adapter extends GenericRestAdapter {
    config = retail_ecommerce_43_config;
    constructor(credentials) {
        super(retail_ecommerce_43_config, credentials);
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
registry.register('retail_ecommerce_43', RetailEcommerce43Adapter);
// SolsticeWave Adapter [1443]
// loyalty solution for retail
const retail_loyalty_44_config = {
    id: 'retail_loyalty_44',
    name: 'SolsticeWave',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticewave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_44_config);
export class RetailLoyalty44Adapter extends GenericRestAdapter {
    config = retail_loyalty_44_config;
    constructor(credentials) {
        super(retail_loyalty_44_config, credentials);
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
registry.register('retail_loyalty_44', RetailLoyalty44Adapter);
// PhaseNetwork Adapter [1444]
// analytics solution for retail
const retail_analytics_45_config = {
    id: 'retail_analytics_45',
    name: 'PhaseNetwork',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.phasenetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_45_config);
export class RetailAnalytics45Adapter extends GenericRestAdapter {
    config = retail_analytics_45_config;
    constructor(credentials) {
        super(retail_analytics_45_config, credentials);
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
registry.register('retail_analytics_45', RetailAnalytics45Adapter);
// LeverBase Adapter [1445]
// pricing solution for retail
const retail_pricing_46_config = {
    id: 'retail_pricing_46',
    name: 'LeverBase',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_46_config);
export class RetailPricing46Adapter extends GenericRestAdapter {
    config = retail_pricing_46_config;
    constructor(credentials) {
        super(retail_pricing_46_config, credentials);
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
registry.register('retail_pricing_46', RetailPricing46Adapter);
// BeaconPlatform Adapter [1446]
// merchandising solution for retail
const retail_merchandising_47_config = {
    id: 'retail_merchandising_47',
    name: 'BeaconPlatform',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_47_config);
export class RetailMerchandising47Adapter extends GenericRestAdapter {
    config = retail_merchandising_47_config;
    constructor(credentials) {
        super(retail_merchandising_47_config, credentials);
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
registry.register('retail_merchandising_47', RetailMerchandising47Adapter);
// BeaconZone Adapter [1447]
// customer solution for retail
const retail_customer_48_config = {
    id: 'retail_customer_48',
    name: 'BeaconZone',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_48_config);
export class RetailCustomer48Adapter extends GenericRestAdapter {
    config = retail_customer_48_config;
    constructor(credentials) {
        super(retail_customer_48_config, credentials);
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
registry.register('retail_customer_48', RetailCustomer48Adapter);
// OnyxOne Adapter [1448]
// supply chain solution for retail
const retail_supply_chain_49_config = {
    id: 'retail_supply_chain_49',
    name: 'OnyxOne',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_49_config);
export class RetailSupplyChain49Adapter extends GenericRestAdapter {
    config = retail_supply_chain_49_config;
    constructor(credentials) {
        super(retail_supply_chain_49_config, credentials);
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
registry.register('retail_supply_chain_49', RetailSupplyChain49Adapter);
// PhasePlus Adapter [1449]
// workforce solution for retail
const retail_workforce_50_config = {
    id: 'retail_workforce_50',
    name: 'PhasePlus',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.phaseplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_50_config);
export class RetailWorkforce50Adapter extends GenericRestAdapter {
    config = retail_workforce_50_config;
    constructor(credentials) {
        super(retail_workforce_50_config, credentials);
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
registry.register('retail_workforce_50', RetailWorkforce50Adapter);
// TorchLink Adapter [1450]
// pos solution for retail
const retail_pos_51_config = {
    id: 'retail_pos_51',
    name: 'TorchLink',
    category: 'retail',
    description: 'pos solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.torchlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pos_51_config);
export class RetailPos51Adapter extends GenericRestAdapter {
    config = retail_pos_51_config;
    constructor(credentials) {
        super(retail_pos_51_config, credentials);
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
registry.register('retail_pos_51', RetailPos51Adapter);
// CoreStack Adapter [1451]
// inventory solution for retail
const retail_inventory_52_config = {
    id: 'retail_inventory_52',
    name: 'CoreStack',
    category: 'retail',
    description: 'inventory solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.corestack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_inventory_52_config);
export class RetailInventory52Adapter extends GenericRestAdapter {
    config = retail_inventory_52_config;
    constructor(credentials) {
        super(retail_inventory_52_config, credentials);
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
registry.register('retail_inventory_52', RetailInventory52Adapter);
// IonData Adapter [1452]
// ecommerce solution for retail
const retail_ecommerce_53_config = {
    id: 'retail_ecommerce_53',
    name: 'IonData',
    category: 'retail',
    description: 'ecommerce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.iondata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_ecommerce_53_config);
export class RetailEcommerce53Adapter extends GenericRestAdapter {
    config = retail_ecommerce_53_config;
    constructor(credentials) {
        super(retail_ecommerce_53_config, credentials);
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
registry.register('retail_ecommerce_53', RetailEcommerce53Adapter);
// EmberLink Adapter [1453]
// loyalty solution for retail
const retail_loyalty_54_config = {
    id: 'retail_loyalty_54',
    name: 'EmberLink',
    category: 'retail',
    description: 'loyalty solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.emberlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_loyalty_54_config);
export class RetailLoyalty54Adapter extends GenericRestAdapter {
    config = retail_loyalty_54_config;
    constructor(credentials) {
        super(retail_loyalty_54_config, credentials);
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
registry.register('retail_loyalty_54', RetailLoyalty54Adapter);
// UltraForce Adapter [1454]
// analytics solution for retail
const retail_analytics_55_config = {
    id: 'retail_analytics_55',
    name: 'UltraForce',
    category: 'retail',
    description: 'analytics solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultraforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_analytics_55_config);
export class RetailAnalytics55Adapter extends GenericRestAdapter {
    config = retail_analytics_55_config;
    constructor(credentials) {
        super(retail_analytics_55_config, credentials);
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
registry.register('retail_analytics_55', RetailAnalytics55Adapter);
// HarborSoftware Adapter [1455]
// pricing solution for retail
const retail_pricing_56_config = {
    id: 'retail_pricing_56',
    name: 'HarborSoftware',
    category: 'retail',
    description: 'pricing solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.harborsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_pricing_56_config);
export class RetailPricing56Adapter extends GenericRestAdapter {
    config = retail_pricing_56_config;
    constructor(credentials) {
        super(retail_pricing_56_config, credentials);
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
registry.register('retail_pricing_56', RetailPricing56Adapter);
// HyperStack Adapter [1456]
// merchandising solution for retail
const retail_merchandising_57_config = {
    id: 'retail_merchandising_57',
    name: 'HyperStack',
    category: 'retail',
    description: 'merchandising solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hyperstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_merchandising_57_config);
export class RetailMerchandising57Adapter extends GenericRestAdapter {
    config = retail_merchandising_57_config;
    constructor(credentials) {
        super(retail_merchandising_57_config, credentials);
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
registry.register('retail_merchandising_57', RetailMerchandising57Adapter);
// NovaPoint Adapter [1457]
// customer solution for retail
const retail_customer_58_config = {
    id: 'retail_customer_58',
    name: 'NovaPoint',
    category: 'retail',
    description: 'customer solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novapoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_customer_58_config);
export class RetailCustomer58Adapter extends GenericRestAdapter {
    config = retail_customer_58_config;
    constructor(credentials) {
        super(retail_customer_58_config, credentials);
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
registry.register('retail_customer_58', RetailCustomer58Adapter);
// ForgeStack Adapter [1458]
// supply chain solution for retail
const retail_supply_chain_59_config = {
    id: 'retail_supply_chain_59',
    name: 'ForgeStack',
    category: 'retail',
    description: 'supply chain solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgestack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_supply_chain_59_config);
export class RetailSupplyChain59Adapter extends GenericRestAdapter {
    config = retail_supply_chain_59_config;
    constructor(credentials) {
        super(retail_supply_chain_59_config, credentials);
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
registry.register('retail_supply_chain_59', RetailSupplyChain59Adapter);
// FluxMind Adapter [1459]
// workforce solution for retail
const retail_workforce_60_config = {
    id: 'retail_workforce_60',
    name: 'FluxMind',
    category: 'retail',
    description: 'workforce solution for retail',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.fluxmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(retail_workforce_60_config);
export class RetailWorkforce60Adapter extends GenericRestAdapter {
    config = retail_workforce_60_config;
    constructor(credentials) {
        super(retail_workforce_60_config, credentials);
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
registry.register('retail_workforce_60', RetailWorkforce60Adapter);
//# sourceMappingURL=retail.js.map