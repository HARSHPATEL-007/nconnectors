// Generated Adapters — manufacturing (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// AcmeMind Adapter [1340]
// erp solution for manufacturing
const manufacturing_erp_1_config = {
    id: 'manufacturing_erp_1',
    name: 'AcmeMind',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acmemind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_1_config);
export class ManufacturingErp1Adapter extends GenericRestAdapter {
    config = manufacturing_erp_1_config;
    constructor(credentials) {
        super(manufacturing_erp_1_config, credentials);
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
registry.register('manufacturing_erp_1', ManufacturingErp1Adapter);
// QuestLabs Adapter [1341]
// quality solution for manufacturing
const manufacturing_quality_2_config = {
    id: 'manufacturing_quality_2',
    name: 'QuestLabs',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_2_config);
export class ManufacturingQuality2Adapter extends GenericRestAdapter {
    config = manufacturing_quality_2_config;
    constructor(credentials) {
        super(manufacturing_quality_2_config, credentials);
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
registry.register('manufacturing_quality_2', ManufacturingQuality2Adapter);
// LeverLabs Adapter [1342]
// supply chain solution for manufacturing
const manufacturing_supply_chain_3_config = {
    id: 'manufacturing_supply_chain_3',
    name: 'LeverLabs',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_3_config);
export class ManufacturingSupplyChain3Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_3_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_3_config, credentials);
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
registry.register('manufacturing_supply_chain_3', ManufacturingSupplyChain3Adapter);
// AtlasSystems Adapter [1343]
// inventory solution for manufacturing
const manufacturing_inventory_4_config = {
    id: 'manufacturing_inventory_4',
    name: 'AtlasSystems',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.atlassystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_4_config);
export class ManufacturingInventory4Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_4_config;
    constructor(credentials) {
        super(manufacturing_inventory_4_config, credentials);
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
registry.register('manufacturing_inventory_4', ManufacturingInventory4Adapter);
// SolsticeTechnologies Adapter [1344]
// production solution for manufacturing
const manufacturing_production_5_config = {
    id: 'manufacturing_production_5',
    name: 'SolsticeTechnologies',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticetechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_5_config);
export class ManufacturingProduction5Adapter extends GenericRestAdapter {
    config = manufacturing_production_5_config;
    constructor(credentials) {
        super(manufacturing_production_5_config, credentials);
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
registry.register('manufacturing_production_5', ManufacturingProduction5Adapter);
// NexusSoftware Adapter [1345]
// maintenance solution for manufacturing
const manufacturing_maintenance_6_config = {
    id: 'manufacturing_maintenance_6',
    name: 'NexusSoftware',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexussoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_6_config);
export class ManufacturingMaintenance6Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_6_config;
    constructor(credentials) {
        super(manufacturing_maintenance_6_config, credentials);
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
registry.register('manufacturing_maintenance_6', ManufacturingMaintenance6Adapter);
// ElevateWorks Adapter [1346]
// safety solution for manufacturing
const manufacturing_safety_7_config = {
    id: 'manufacturing_safety_7',
    name: 'ElevateWorks',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevateworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_7_config);
export class ManufacturingSafety7Adapter extends GenericRestAdapter {
    config = manufacturing_safety_7_config;
    constructor(credentials) {
        super(manufacturing_safety_7_config, credentials);
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
registry.register('manufacturing_safety_7', ManufacturingSafety7Adapter);
// SigmaStack Adapter [1347]
// automation solution for manufacturing
const manufacturing_automation_8_config = {
    id: 'manufacturing_automation_8',
    name: 'SigmaStack',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sigmastack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_8_config);
export class ManufacturingAutomation8Adapter extends GenericRestAdapter {
    config = manufacturing_automation_8_config;
    constructor(credentials) {
        super(manufacturing_automation_8_config, credentials);
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
registry.register('manufacturing_automation_8', ManufacturingAutomation8Adapter);
// MaverickWorks Adapter [1348]
// analytics solution for manufacturing
const manufacturing_analytics_9_config = {
    id: 'manufacturing_analytics_9',
    name: 'MaverickWorks',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_9_config);
export class ManufacturingAnalytics9Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_9_config;
    constructor(credentials) {
        super(manufacturing_analytics_9_config, credentials);
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
registry.register('manufacturing_analytics_9', ManufacturingAnalytics9Adapter);
// CraftMind Adapter [1349]
// logistics solution for manufacturing
const manufacturing_logistics_10_config = {
    id: 'manufacturing_logistics_10',
    name: 'CraftMind',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_10_config);
export class ManufacturingLogistics10Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_10_config;
    constructor(credentials) {
        super(manufacturing_logistics_10_config, credentials);
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
registry.register('manufacturing_logistics_10', ManufacturingLogistics10Adapter);
// IonLogic Adapter [1350]
// erp solution for manufacturing
const manufacturing_erp_11_config = {
    id: 'manufacturing_erp_11',
    name: 'IonLogic',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_11_config);
export class ManufacturingErp11Adapter extends GenericRestAdapter {
    config = manufacturing_erp_11_config;
    constructor(credentials) {
        super(manufacturing_erp_11_config, credentials);
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
registry.register('manufacturing_erp_11', ManufacturingErp11Adapter);
// SummitOne Adapter [1351]
// quality solution for manufacturing
const manufacturing_quality_12_config = {
    id: 'manufacturing_quality_12',
    name: 'SummitOne',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.summitone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_12_config);
export class ManufacturingQuality12Adapter extends GenericRestAdapter {
    config = manufacturing_quality_12_config;
    constructor(credentials) {
        super(manufacturing_quality_12_config, credentials);
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
registry.register('manufacturing_quality_12', ManufacturingQuality12Adapter);
// PinnacleForce Adapter [1352]
// supply chain solution for manufacturing
const manufacturing_supply_chain_13_config = {
    id: 'manufacturing_supply_chain_13',
    name: 'PinnacleForce',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnacleforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_13_config);
export class ManufacturingSupplyChain13Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_13_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_13_config, credentials);
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
registry.register('manufacturing_supply_chain_13', ManufacturingSupplyChain13Adapter);
// LambdaCore Adapter [1353]
// inventory solution for manufacturing
const manufacturing_inventory_14_config = {
    id: 'manufacturing_inventory_14',
    name: 'LambdaCore',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdacore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_14_config);
export class ManufacturingInventory14Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_14_config;
    constructor(credentials) {
        super(manufacturing_inventory_14_config, credentials);
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
registry.register('manufacturing_inventory_14', ManufacturingInventory14Adapter);
// PivotForce Adapter [1354]
// production solution for manufacturing
const manufacturing_production_15_config = {
    id: 'manufacturing_production_15',
    name: 'PivotForce',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_15_config);
export class ManufacturingProduction15Adapter extends GenericRestAdapter {
    config = manufacturing_production_15_config;
    constructor(credentials) {
        super(manufacturing_production_15_config, credentials);
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
registry.register('manufacturing_production_15', ManufacturingProduction15Adapter);
// SwiftSystems Adapter [1355]
// maintenance solution for manufacturing
const manufacturing_maintenance_16_config = {
    id: 'manufacturing_maintenance_16',
    name: 'SwiftSystems',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.swiftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_16_config);
export class ManufacturingMaintenance16Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_16_config;
    constructor(credentials) {
        super(manufacturing_maintenance_16_config, credentials);
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
registry.register('manufacturing_maintenance_16', ManufacturingMaintenance16Adapter);
// LeverData Adapter [1356]
// safety solution for manufacturing
const manufacturing_safety_17_config = {
    id: 'manufacturing_safety_17',
    name: 'LeverData',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverdata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_17_config);
export class ManufacturingSafety17Adapter extends GenericRestAdapter {
    config = manufacturing_safety_17_config;
    constructor(credentials) {
        super(manufacturing_safety_17_config, credentials);
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
registry.register('manufacturing_safety_17', ManufacturingSafety17Adapter);
// EvoCore Adapter [1357]
// automation solution for manufacturing
const manufacturing_automation_18_config = {
    id: 'manufacturing_automation_18',
    name: 'EvoCore',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evocore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_18_config);
export class ManufacturingAutomation18Adapter extends GenericRestAdapter {
    config = manufacturing_automation_18_config;
    constructor(credentials) {
        super(manufacturing_automation_18_config, credentials);
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
registry.register('manufacturing_automation_18', ManufacturingAutomation18Adapter);
// VaultLabs Adapter [1358]
// analytics solution for manufacturing
const manufacturing_analytics_19_config = {
    id: 'manufacturing_analytics_19',
    name: 'VaultLabs',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_19_config);
export class ManufacturingAnalytics19Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_19_config;
    constructor(credentials) {
        super(manufacturing_analytics_19_config, credentials);
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
registry.register('manufacturing_analytics_19', ManufacturingAnalytics19Adapter);
// TorchPro Adapter [1359]
// logistics solution for manufacturing
const manufacturing_logistics_20_config = {
    id: 'manufacturing_logistics_20',
    name: 'TorchPro',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.torchpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_20_config);
export class ManufacturingLogistics20Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_20_config;
    constructor(credentials) {
        super(manufacturing_logistics_20_config, credentials);
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
registry.register('manufacturing_logistics_20', ManufacturingLogistics20Adapter);
// PeakMind Adapter [1360]
// erp solution for manufacturing
const manufacturing_erp_21_config = {
    id: 'manufacturing_erp_21',
    name: 'PeakMind',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.peakmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_21_config);
export class ManufacturingErp21Adapter extends GenericRestAdapter {
    config = manufacturing_erp_21_config;
    constructor(credentials) {
        super(manufacturing_erp_21_config, credentials);
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
registry.register('manufacturing_erp_21', ManufacturingErp21Adapter);
// NovaLink Adapter [1361]
// quality solution for manufacturing
const manufacturing_quality_22_config = {
    id: 'manufacturing_quality_22',
    name: 'NovaLink',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novalink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_22_config);
export class ManufacturingQuality22Adapter extends GenericRestAdapter {
    config = manufacturing_quality_22_config;
    constructor(credentials) {
        super(manufacturing_quality_22_config, credentials);
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
registry.register('manufacturing_quality_22', ManufacturingQuality22Adapter);
// DeltaLabs Adapter [1362]
// supply chain solution for manufacturing
const manufacturing_supply_chain_23_config = {
    id: 'manufacturing_supply_chain_23',
    name: 'DeltaLabs',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltalabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_23_config);
export class ManufacturingSupplyChain23Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_23_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_23_config, credentials);
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
registry.register('manufacturing_supply_chain_23', ManufacturingSupplyChain23Adapter);
// CipherCloud Adapter [1363]
// inventory solution for manufacturing
const manufacturing_inventory_24_config = {
    id: 'manufacturing_inventory_24',
    name: 'CipherCloud',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ciphercloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_24_config);
export class ManufacturingInventory24Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_24_config;
    constructor(credentials) {
        super(manufacturing_inventory_24_config, credentials);
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
registry.register('manufacturing_inventory_24', ManufacturingInventory24Adapter);
// SparkStack Adapter [1364]
// production solution for manufacturing
const manufacturing_production_25_config = {
    id: 'manufacturing_production_25',
    name: 'SparkStack',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_25_config);
export class ManufacturingProduction25Adapter extends GenericRestAdapter {
    config = manufacturing_production_25_config;
    constructor(credentials) {
        super(manufacturing_production_25_config, credentials);
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
registry.register('manufacturing_production_25', ManufacturingProduction25Adapter);
// AtlasForce Adapter [1365]
// maintenance solution for manufacturing
const manufacturing_maintenance_26_config = {
    id: 'manufacturing_maintenance_26',
    name: 'AtlasForce',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.atlasforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_26_config);
export class ManufacturingMaintenance26Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_26_config;
    constructor(credentials) {
        super(manufacturing_maintenance_26_config, credentials);
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
registry.register('manufacturing_maintenance_26', ManufacturingMaintenance26Adapter);
// UltraLink Adapter [1366]
// safety solution for manufacturing
const manufacturing_safety_27_config = {
    id: 'manufacturing_safety_27',
    name: 'UltraLink',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultralink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_27_config);
export class ManufacturingSafety27Adapter extends GenericRestAdapter {
    config = manufacturing_safety_27_config;
    constructor(credentials) {
        super(manufacturing_safety_27_config, credentials);
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
registry.register('manufacturing_safety_27', ManufacturingSafety27Adapter);
// VisionData Adapter [1367]
// automation solution for manufacturing
const manufacturing_automation_28_config = {
    id: 'manufacturing_automation_28',
    name: 'VisionData',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.visiondata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_28_config);
export class ManufacturingAutomation28Adapter extends GenericRestAdapter {
    config = manufacturing_automation_28_config;
    constructor(credentials) {
        super(manufacturing_automation_28_config, credentials);
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
registry.register('manufacturing_automation_28', ManufacturingAutomation28Adapter);
// RaptorDigital Adapter [1368]
// analytics solution for manufacturing
const manufacturing_analytics_29_config = {
    id: 'manufacturing_analytics_29',
    name: 'RaptorDigital',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.raptordigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_29_config);
export class ManufacturingAnalytics29Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_29_config;
    constructor(credentials) {
        super(manufacturing_analytics_29_config, credentials);
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
registry.register('manufacturing_analytics_29', ManufacturingAnalytics29Adapter);
// MeridianSolutions Adapter [1369]
// logistics solution for manufacturing
const manufacturing_logistics_30_config = {
    id: 'manufacturing_logistics_30',
    name: 'MeridianSolutions',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridiansolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_30_config);
export class ManufacturingLogistics30Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_30_config;
    constructor(credentials) {
        super(manufacturing_logistics_30_config, credentials);
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
registry.register('manufacturing_logistics_30', ManufacturingLogistics30Adapter);
// OnyxCloud Adapter [1370]
// erp solution for manufacturing
const manufacturing_erp_31_config = {
    id: 'manufacturing_erp_31',
    name: 'OnyxCloud',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_31_config);
export class ManufacturingErp31Adapter extends GenericRestAdapter {
    config = manufacturing_erp_31_config;
    constructor(credentials) {
        super(manufacturing_erp_31_config, credentials);
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
registry.register('manufacturing_erp_31', ManufacturingErp31Adapter);
// DeltaPro Adapter [1371]
// quality solution for manufacturing
const manufacturing_quality_32_config = {
    id: 'manufacturing_quality_32',
    name: 'DeltaPro',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltapro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_32_config);
export class ManufacturingQuality32Adapter extends GenericRestAdapter {
    config = manufacturing_quality_32_config;
    constructor(credentials) {
        super(manufacturing_quality_32_config, credentials);
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
registry.register('manufacturing_quality_32', ManufacturingQuality32Adapter);
// PulseBase Adapter [1372]
// supply chain solution for manufacturing
const manufacturing_supply_chain_33_config = {
    id: 'manufacturing_supply_chain_33',
    name: 'PulseBase',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pulsebase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_33_config);
export class ManufacturingSupplyChain33Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_33_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_33_config, credentials);
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
registry.register('manufacturing_supply_chain_33', ManufacturingSupplyChain33Adapter);
// ApexForce Adapter [1373]
// inventory solution for manufacturing
const manufacturing_inventory_34_config = {
    id: 'manufacturing_inventory_34',
    name: 'ApexForce',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_34_config);
export class ManufacturingInventory34Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_34_config;
    constructor(credentials) {
        super(manufacturing_inventory_34_config, credentials);
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
registry.register('manufacturing_inventory_34', ManufacturingInventory34Adapter);
// ZenithCore Adapter [1374]
// production solution for manufacturing
const manufacturing_production_35_config = {
    id: 'manufacturing_production_35',
    name: 'ZenithCore',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_35_config);
export class ManufacturingProduction35Adapter extends GenericRestAdapter {
    config = manufacturing_production_35_config;
    constructor(credentials) {
        super(manufacturing_production_35_config, credentials);
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
registry.register('manufacturing_production_35', ManufacturingProduction35Adapter);
// OmegaData Adapter [1375]
// maintenance solution for manufacturing
const manufacturing_maintenance_36_config = {
    id: 'manufacturing_maintenance_36',
    name: 'OmegaData',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.omegadata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_36_config);
export class ManufacturingMaintenance36Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_36_config;
    constructor(credentials) {
        super(manufacturing_maintenance_36_config, credentials);
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
registry.register('manufacturing_maintenance_36', ManufacturingMaintenance36Adapter);
// EchoMax Adapter [1376]
// safety solution for manufacturing
const manufacturing_safety_37_config = {
    id: 'manufacturing_safety_37',
    name: 'EchoMax',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echomax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_37_config);
export class ManufacturingSafety37Adapter extends GenericRestAdapter {
    config = manufacturing_safety_37_config;
    constructor(credentials) {
        super(manufacturing_safety_37_config, credentials);
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
registry.register('manufacturing_safety_37', ManufacturingSafety37Adapter);
// ZestPlus Adapter [1377]
// automation solution for manufacturing
const manufacturing_automation_38_config = {
    id: 'manufacturing_automation_38',
    name: 'ZestPlus',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_38_config);
export class ManufacturingAutomation38Adapter extends GenericRestAdapter {
    config = manufacturing_automation_38_config;
    constructor(credentials) {
        super(manufacturing_automation_38_config, credentials);
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
registry.register('manufacturing_automation_38', ManufacturingAutomation38Adapter);
// PinnacleLogic Adapter [1378]
// analytics solution for manufacturing
const manufacturing_analytics_39_config = {
    id: 'manufacturing_analytics_39',
    name: 'PinnacleLogic',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnaclelogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_39_config);
export class ManufacturingAnalytics39Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_39_config;
    constructor(credentials) {
        super(manufacturing_analytics_39_config, credentials);
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
registry.register('manufacturing_analytics_39', ManufacturingAnalytics39Adapter);
// IonForce Adapter [1379]
// logistics solution for manufacturing
const manufacturing_logistics_40_config = {
    id: 'manufacturing_logistics_40',
    name: 'IonForce',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_40_config);
export class ManufacturingLogistics40Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_40_config;
    constructor(credentials) {
        super(manufacturing_logistics_40_config, credentials);
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
registry.register('manufacturing_logistics_40', ManufacturingLogistics40Adapter);
// MetaPro Adapter [1380]
// erp solution for manufacturing
const manufacturing_erp_41_config = {
    id: 'manufacturing_erp_41',
    name: 'MetaPro',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metapro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_41_config);
export class ManufacturingErp41Adapter extends GenericRestAdapter {
    config = manufacturing_erp_41_config;
    constructor(credentials) {
        super(manufacturing_erp_41_config, credentials);
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
registry.register('manufacturing_erp_41', ManufacturingErp41Adapter);
// ParagonZone Adapter [1381]
// quality solution for manufacturing
const manufacturing_quality_42_config = {
    id: 'manufacturing_quality_42',
    name: 'ParagonZone',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.paragonzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_42_config);
export class ManufacturingQuality42Adapter extends GenericRestAdapter {
    config = manufacturing_quality_42_config;
    constructor(credentials) {
        super(manufacturing_quality_42_config, credentials);
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
registry.register('manufacturing_quality_42', ManufacturingQuality42Adapter);
// PixelCore Adapter [1382]
// supply chain solution for manufacturing
const manufacturing_supply_chain_43_config = {
    id: 'manufacturing_supply_chain_43',
    name: 'PixelCore',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_43_config);
export class ManufacturingSupplyChain43Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_43_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_43_config, credentials);
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
registry.register('manufacturing_supply_chain_43', ManufacturingSupplyChain43Adapter);
// MatrixPlus Adapter [1383]
// inventory solution for manufacturing
const manufacturing_inventory_44_config = {
    id: 'manufacturing_inventory_44',
    name: 'MatrixPlus',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_44_config);
export class ManufacturingInventory44Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_44_config;
    constructor(credentials) {
        super(manufacturing_inventory_44_config, credentials);
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
registry.register('manufacturing_inventory_44', ManufacturingInventory44Adapter);
// HavenSystems Adapter [1384]
// production solution for manufacturing
const manufacturing_production_45_config = {
    id: 'manufacturing_production_45',
    name: 'HavenSystems',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havensystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_45_config);
export class ManufacturingProduction45Adapter extends GenericRestAdapter {
    config = manufacturing_production_45_config;
    constructor(credentials) {
        super(manufacturing_production_45_config, credentials);
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
registry.register('manufacturing_production_45', ManufacturingProduction45Adapter);
// PivotDynamics Adapter [1385]
// maintenance solution for manufacturing
const manufacturing_maintenance_46_config = {
    id: 'manufacturing_maintenance_46',
    name: 'PivotDynamics',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_46_config);
export class ManufacturingMaintenance46Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_46_config;
    constructor(credentials) {
        super(manufacturing_maintenance_46_config, credentials);
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
registry.register('manufacturing_maintenance_46', ManufacturingMaintenance46Adapter);
// WaveCloud Adapter [1386]
// safety solution for manufacturing
const manufacturing_safety_47_config = {
    id: 'manufacturing_safety_47',
    name: 'WaveCloud',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.wavecloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_47_config);
export class ManufacturingSafety47Adapter extends GenericRestAdapter {
    config = manufacturing_safety_47_config;
    constructor(credentials) {
        super(manufacturing_safety_47_config, credentials);
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
registry.register('manufacturing_safety_47', ManufacturingSafety47Adapter);
// TangentLogic Adapter [1387]
// automation solution for manufacturing
const manufacturing_automation_48_config = {
    id: 'manufacturing_automation_48',
    name: 'TangentLogic',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_48_config);
export class ManufacturingAutomation48Adapter extends GenericRestAdapter {
    config = manufacturing_automation_48_config;
    constructor(credentials) {
        super(manufacturing_automation_48_config, credentials);
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
registry.register('manufacturing_automation_48', ManufacturingAutomation48Adapter);
// BoltPlus Adapter [1388]
// analytics solution for manufacturing
const manufacturing_analytics_49_config = {
    id: 'manufacturing_analytics_49',
    name: 'BoltPlus',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_49_config);
export class ManufacturingAnalytics49Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_49_config;
    constructor(credentials) {
        super(manufacturing_analytics_49_config, credentials);
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
registry.register('manufacturing_analytics_49', ManufacturingAnalytics49Adapter);
// IonAI Adapter [1389]
// logistics solution for manufacturing
const manufacturing_logistics_50_config = {
    id: 'manufacturing_logistics_50',
    name: 'IonAI',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_50_config);
export class ManufacturingLogistics50Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_50_config;
    constructor(credentials) {
        super(manufacturing_logistics_50_config, credentials);
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
registry.register('manufacturing_logistics_50', ManufacturingLogistics50Adapter);
// ForgeOne Adapter [1390]
// erp solution for manufacturing
const manufacturing_erp_51_config = {
    id: 'manufacturing_erp_51',
    name: 'ForgeOne',
    category: 'manufacturing',
    description: 'erp solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgeone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_erp_51_config);
export class ManufacturingErp51Adapter extends GenericRestAdapter {
    config = manufacturing_erp_51_config;
    constructor(credentials) {
        super(manufacturing_erp_51_config, credentials);
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
registry.register('manufacturing_erp_51', ManufacturingErp51Adapter);
// ZenithLink Adapter [1391]
// quality solution for manufacturing
const manufacturing_quality_52_config = {
    id: 'manufacturing_quality_52',
    name: 'ZenithLink',
    category: 'manufacturing',
    description: 'quality solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_quality_52_config);
export class ManufacturingQuality52Adapter extends GenericRestAdapter {
    config = manufacturing_quality_52_config;
    constructor(credentials) {
        super(manufacturing_quality_52_config, credentials);
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
registry.register('manufacturing_quality_52', ManufacturingQuality52Adapter);
// CatalystLabs Adapter [1392]
// supply chain solution for manufacturing
const manufacturing_supply_chain_53_config = {
    id: 'manufacturing_supply_chain_53',
    name: 'CatalystLabs',
    category: 'manufacturing',
    description: 'supply chain solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.catalystlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_supply_chain_53_config);
export class ManufacturingSupplyChain53Adapter extends GenericRestAdapter {
    config = manufacturing_supply_chain_53_config;
    constructor(credentials) {
        super(manufacturing_supply_chain_53_config, credentials);
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
registry.register('manufacturing_supply_chain_53', ManufacturingSupplyChain53Adapter);
// LeverPath Adapter [1393]
// inventory solution for manufacturing
const manufacturing_inventory_54_config = {
    id: 'manufacturing_inventory_54',
    name: 'LeverPath',
    category: 'manufacturing',
    description: 'inventory solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_inventory_54_config);
export class ManufacturingInventory54Adapter extends GenericRestAdapter {
    config = manufacturing_inventory_54_config;
    constructor(credentials) {
        super(manufacturing_inventory_54_config, credentials);
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
registry.register('manufacturing_inventory_54', ManufacturingInventory54Adapter);
// QuasarFlow Adapter [1394]
// production solution for manufacturing
const manufacturing_production_55_config = {
    id: 'manufacturing_production_55',
    name: 'QuasarFlow',
    category: 'manufacturing',
    description: 'production solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quasarflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_production_55_config);
export class ManufacturingProduction55Adapter extends GenericRestAdapter {
    config = manufacturing_production_55_config;
    constructor(credentials) {
        super(manufacturing_production_55_config, credentials);
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
registry.register('manufacturing_production_55', ManufacturingProduction55Adapter);
// KarmaSystems Adapter [1395]
// maintenance solution for manufacturing
const manufacturing_maintenance_56_config = {
    id: 'manufacturing_maintenance_56',
    name: 'KarmaSystems',
    category: 'manufacturing',
    description: 'maintenance solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmasystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_maintenance_56_config);
export class ManufacturingMaintenance56Adapter extends GenericRestAdapter {
    config = manufacturing_maintenance_56_config;
    constructor(credentials) {
        super(manufacturing_maintenance_56_config, credentials);
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
registry.register('manufacturing_maintenance_56', ManufacturingMaintenance56Adapter);
// MeridianCore Adapter [1396]
// safety solution for manufacturing
const manufacturing_safety_57_config = {
    id: 'manufacturing_safety_57',
    name: 'MeridianCore',
    category: 'manufacturing',
    description: 'safety solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridiancore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_safety_57_config);
export class ManufacturingSafety57Adapter extends GenericRestAdapter {
    config = manufacturing_safety_57_config;
    constructor(credentials) {
        super(manufacturing_safety_57_config, credentials);
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
registry.register('manufacturing_safety_57', ManufacturingSafety57Adapter);
// BeaconFlow Adapter [1397]
// automation solution for manufacturing
const manufacturing_automation_58_config = {
    id: 'manufacturing_automation_58',
    name: 'BeaconFlow',
    category: 'manufacturing',
    description: 'automation solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_automation_58_config);
export class ManufacturingAutomation58Adapter extends GenericRestAdapter {
    config = manufacturing_automation_58_config;
    constructor(credentials) {
        super(manufacturing_automation_58_config, credentials);
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
registry.register('manufacturing_automation_58', ManufacturingAutomation58Adapter);
// LambdaLabs Adapter [1398]
// analytics solution for manufacturing
const manufacturing_analytics_59_config = {
    id: 'manufacturing_analytics_59',
    name: 'LambdaLabs',
    category: 'manufacturing',
    description: 'analytics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdalabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_analytics_59_config);
export class ManufacturingAnalytics59Adapter extends GenericRestAdapter {
    config = manufacturing_analytics_59_config;
    constructor(credentials) {
        super(manufacturing_analytics_59_config, credentials);
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
registry.register('manufacturing_analytics_59', ManufacturingAnalytics59Adapter);
// HelixPro Adapter [1399]
// logistics solution for manufacturing
const manufacturing_logistics_60_config = {
    id: 'manufacturing_logistics_60',
    name: 'HelixPro',
    category: 'manufacturing',
    description: 'logistics solution for manufacturing',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.helixpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(manufacturing_logistics_60_config);
export class ManufacturingLogistics60Adapter extends GenericRestAdapter {
    config = manufacturing_logistics_60_config;
    constructor(credentials) {
        super(manufacturing_logistics_60_config, credentials);
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
registry.register('manufacturing_logistics_60', ManufacturingLogistics60Adapter);
//# sourceMappingURL=manufacturing.js.map