// Generated Adapters — logistics (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// GlowConnect Adapter [740]
// shipping solution for logistics
const logistics_shipping_1_config = {
    id: 'logistics_shipping_1',
    name: 'GlowConnect',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_1_config);
export class LogisticsShipping1Adapter extends GenericRestAdapter {
    config = logistics_shipping_1_config;
    constructor(credentials) {
        super(logistics_shipping_1_config, credentials);
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
registry.register('logistics_shipping_1', LogisticsShipping1Adapter);
// TangentDigital Adapter [741]
// tracking solution for logistics
const logistics_tracking_2_config = {
    id: 'logistics_tracking_2',
    name: 'TangentDigital',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_2_config);
export class LogisticsTracking2Adapter extends GenericRestAdapter {
    config = logistics_tracking_2_config;
    constructor(credentials) {
        super(logistics_tracking_2_config, credentials);
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
registry.register('logistics_tracking_2', LogisticsTracking2Adapter);
// BrightPro Adapter [742]
// warehouse solution for logistics
const logistics_warehouse_3_config = {
    id: 'logistics_warehouse_3',
    name: 'BrightPro',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.brightpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_3_config);
export class LogisticsWarehouse3Adapter extends GenericRestAdapter {
    config = logistics_warehouse_3_config;
    constructor(credentials) {
        super(logistics_warehouse_3_config, credentials);
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
registry.register('logistics_warehouse_3', LogisticsWarehouse3Adapter);
// MetaPlus Adapter [743]
// fleet solution for logistics
const logistics_fleet_4_config = {
    id: 'logistics_fleet_4',
    name: 'MetaPlus',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metaplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_4_config);
export class LogisticsFleet4Adapter extends GenericRestAdapter {
    config = logistics_fleet_4_config;
    constructor(credentials) {
        super(logistics_fleet_4_config, credentials);
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
registry.register('logistics_fleet_4', LogisticsFleet4Adapter);
// RushPath Adapter [744]
// inventory solution for logistics
const logistics_inventory_5_config = {
    id: 'logistics_inventory_5',
    name: 'RushPath',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.rushpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_5_config);
export class LogisticsInventory5Adapter extends GenericRestAdapter {
    config = logistics_inventory_5_config;
    constructor(credentials) {
        super(logistics_inventory_5_config, credentials);
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
registry.register('logistics_inventory_5', LogisticsInventory5Adapter);
// TraxOne Adapter [745]
// freight solution for logistics
const logistics_freight_6_config = {
    id: 'logistics_freight_6',
    name: 'TraxOne',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_6_config);
export class LogisticsFreight6Adapter extends GenericRestAdapter {
    config = logistics_freight_6_config;
    constructor(credentials) {
        super(logistics_freight_6_config, credentials);
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
registry.register('logistics_freight_6', LogisticsFreight6Adapter);
// ZestZone Adapter [746]
// delivery solution for logistics
const logistics_delivery_7_config = {
    id: 'logistics_delivery_7',
    name: 'ZestZone',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_7_config);
export class LogisticsDelivery7Adapter extends GenericRestAdapter {
    config = logistics_delivery_7_config;
    constructor(credentials) {
        super(logistics_delivery_7_config, credentials);
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
registry.register('logistics_delivery_7', LogisticsDelivery7Adapter);
// WaveDigital Adapter [747]
// supply chain solution for logistics
const logistics_supply_chain_8_config = {
    id: 'logistics_supply_chain_8',
    name: 'WaveDigital',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.wavedigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_8_config);
export class LogisticsSupplyChain8Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_8_config;
    constructor(credentials) {
        super(logistics_supply_chain_8_config, credentials);
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
registry.register('logistics_supply_chain_8', LogisticsSupplyChain8Adapter);
// LambdaCore Adapter [748]
// procurement solution for logistics
const logistics_procurement_9_config = {
    id: 'logistics_procurement_9',
    name: 'LambdaCore',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdacore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_9_config);
export class LogisticsProcurement9Adapter extends GenericRestAdapter {
    config = logistics_procurement_9_config;
    constructor(credentials) {
        super(logistics_procurement_9_config, credentials);
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
registry.register('logistics_procurement_9', LogisticsProcurement9Adapter);
// ShiftSystems Adapter [749]
// customs solution for logistics
const logistics_customs_10_config = {
    id: 'logistics_customs_10',
    name: 'ShiftSystems',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_10_config);
export class LogisticsCustoms10Adapter extends GenericRestAdapter {
    config = logistics_customs_10_config;
    constructor(credentials) {
        super(logistics_customs_10_config, credentials);
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
registry.register('logistics_customs_10', LogisticsCustoms10Adapter);
// KineticDigital Adapter [750]
// shipping solution for logistics
const logistics_shipping_11_config = {
    id: 'logistics_shipping_11',
    name: 'KineticDigital',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_11_config);
export class LogisticsShipping11Adapter extends GenericRestAdapter {
    config = logistics_shipping_11_config;
    constructor(credentials) {
        super(logistics_shipping_11_config, credentials);
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
registry.register('logistics_shipping_11', LogisticsShipping11Adapter);
// HyperPath Adapter [751]
// tracking solution for logistics
const logistics_tracking_12_config = {
    id: 'logistics_tracking_12',
    name: 'HyperPath',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hyperpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_12_config);
export class LogisticsTracking12Adapter extends GenericRestAdapter {
    config = logistics_tracking_12_config;
    constructor(credentials) {
        super(logistics_tracking_12_config, credentials);
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
registry.register('logistics_tracking_12', LogisticsTracking12Adapter);
// PrismSystems Adapter [752]
// warehouse solution for logistics
const logistics_warehouse_13_config = {
    id: 'logistics_warehouse_13',
    name: 'PrismSystems',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_13_config);
export class LogisticsWarehouse13Adapter extends GenericRestAdapter {
    config = logistics_warehouse_13_config;
    constructor(credentials) {
        super(logistics_warehouse_13_config, credentials);
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
registry.register('logistics_warehouse_13', LogisticsWarehouse13Adapter);
// VertexLabs Adapter [753]
// fleet solution for logistics
const logistics_fleet_14_config = {
    id: 'logistics_fleet_14',
    name: 'VertexLabs',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_14_config);
export class LogisticsFleet14Adapter extends GenericRestAdapter {
    config = logistics_fleet_14_config;
    constructor(credentials) {
        super(logistics_fleet_14_config, credentials);
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
registry.register('logistics_fleet_14', LogisticsFleet14Adapter);
// PrismOne Adapter [754]
// inventory solution for logistics
const logistics_inventory_15_config = {
    id: 'logistics_inventory_15',
    name: 'PrismOne',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_15_config);
export class LogisticsInventory15Adapter extends GenericRestAdapter {
    config = logistics_inventory_15_config;
    constructor(credentials) {
        super(logistics_inventory_15_config, credentials);
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
registry.register('logistics_inventory_15', LogisticsInventory15Adapter);
// ZestZone Adapter [755]
// freight solution for logistics
const logistics_freight_16_config = {
    id: 'logistics_freight_16',
    name: 'ZestZone',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_16_config);
export class LogisticsFreight16Adapter extends GenericRestAdapter {
    config = logistics_freight_16_config;
    constructor(credentials) {
        super(logistics_freight_16_config, credentials);
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
registry.register('logistics_freight_16', LogisticsFreight16Adapter);
// TraxSoftware Adapter [756]
// delivery solution for logistics
const logistics_delivery_17_config = {
    id: 'logistics_delivery_17',
    name: 'TraxSoftware',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_17_config);
export class LogisticsDelivery17Adapter extends GenericRestAdapter {
    config = logistics_delivery_17_config;
    constructor(credentials) {
        super(logistics_delivery_17_config, credentials);
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
registry.register('logistics_delivery_17', LogisticsDelivery17Adapter);
// MotionStack Adapter [757]
// supply chain solution for logistics
const logistics_supply_chain_18_config = {
    id: 'logistics_supply_chain_18',
    name: 'MotionStack',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.motionstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_18_config);
export class LogisticsSupplyChain18Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_18_config;
    constructor(credentials) {
        super(logistics_supply_chain_18_config, credentials);
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
registry.register('logistics_supply_chain_18', LogisticsSupplyChain18Adapter);
// VortexWave Adapter [758]
// procurement solution for logistics
const logistics_procurement_19_config = {
    id: 'logistics_procurement_19',
    name: 'VortexWave',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vortexwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_19_config);
export class LogisticsProcurement19Adapter extends GenericRestAdapter {
    config = logistics_procurement_19_config;
    constructor(credentials) {
        super(logistics_procurement_19_config, credentials);
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
registry.register('logistics_procurement_19', LogisticsProcurement19Adapter);
// StellarOne Adapter [759]
// customs solution for logistics
const logistics_customs_20_config = {
    id: 'logistics_customs_20',
    name: 'StellarOne',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stellarone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_20_config);
export class LogisticsCustoms20Adapter extends GenericRestAdapter {
    config = logistics_customs_20_config;
    constructor(credentials) {
        super(logistics_customs_20_config, credentials);
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
registry.register('logistics_customs_20', LogisticsCustoms20Adapter);
// LumenSystems Adapter [760]
// shipping solution for logistics
const logistics_shipping_21_config = {
    id: 'logistics_shipping_21',
    name: 'LumenSystems',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumensystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_21_config);
export class LogisticsShipping21Adapter extends GenericRestAdapter {
    config = logistics_shipping_21_config;
    constructor(credentials) {
        super(logistics_shipping_21_config, credentials);
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
registry.register('logistics_shipping_21', LogisticsShipping21Adapter);
// RadiusLabs Adapter [761]
// tracking solution for logistics
const logistics_tracking_22_config = {
    id: 'logistics_tracking_22',
    name: 'RadiusLabs',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.radiuslabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_22_config);
export class LogisticsTracking22Adapter extends GenericRestAdapter {
    config = logistics_tracking_22_config;
    constructor(credentials) {
        super(logistics_tracking_22_config, credentials);
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
registry.register('logistics_tracking_22', LogisticsTracking22Adapter);
// DriftData Adapter [762]
// warehouse solution for logistics
const logistics_warehouse_23_config = {
    id: 'logistics_warehouse_23',
    name: 'DriftData',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.driftdata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_23_config);
export class LogisticsWarehouse23Adapter extends GenericRestAdapter {
    config = logistics_warehouse_23_config;
    constructor(credentials) {
        super(logistics_warehouse_23_config, credentials);
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
registry.register('logistics_warehouse_23', LogisticsWarehouse23Adapter);
// PrismWave Adapter [763]
// fleet solution for logistics
const logistics_fleet_24_config = {
    id: 'logistics_fleet_24',
    name: 'PrismWave',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_24_config);
export class LogisticsFleet24Adapter extends GenericRestAdapter {
    config = logistics_fleet_24_config;
    constructor(credentials) {
        super(logistics_fleet_24_config, credentials);
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
registry.register('logistics_fleet_24', LogisticsFleet24Adapter);
// LumenDigital Adapter [764]
// inventory solution for logistics
const logistics_inventory_25_config = {
    id: 'logistics_inventory_25',
    name: 'LumenDigital',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumendigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_25_config);
export class LogisticsInventory25Adapter extends GenericRestAdapter {
    config = logistics_inventory_25_config;
    constructor(credentials) {
        super(logistics_inventory_25_config, credentials);
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
registry.register('logistics_inventory_25', LogisticsInventory25Adapter);
// VividSoftware Adapter [765]
// freight solution for logistics
const logistics_freight_26_config = {
    id: 'logistics_freight_26',
    name: 'VividSoftware',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vividsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_26_config);
export class LogisticsFreight26Adapter extends GenericRestAdapter {
    config = logistics_freight_26_config;
    constructor(credentials) {
        super(logistics_freight_26_config, credentials);
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
registry.register('logistics_freight_26', LogisticsFreight26Adapter);
// TitanPlatform Adapter [766]
// delivery solution for logistics
const logistics_delivery_27_config = {
    id: 'logistics_delivery_27',
    name: 'TitanPlatform',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.titanplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_27_config);
export class LogisticsDelivery27Adapter extends GenericRestAdapter {
    config = logistics_delivery_27_config;
    constructor(credentials) {
        super(logistics_delivery_27_config, credentials);
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
registry.register('logistics_delivery_27', LogisticsDelivery27Adapter);
// Zest360 Adapter [767]
// supply chain solution for logistics
const logistics_supply_chain_28_config = {
    id: 'logistics_supply_chain_28',
    name: 'Zest360',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zest360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_28_config);
export class LogisticsSupplyChain28Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_28_config;
    constructor(credentials) {
        super(logistics_supply_chain_28_config, credentials);
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
registry.register('logistics_supply_chain_28', LogisticsSupplyChain28Adapter);
// BeaconPoint Adapter [768]
// procurement solution for logistics
const logistics_procurement_29_config = {
    id: 'logistics_procurement_29',
    name: 'BeaconPoint',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_29_config);
export class LogisticsProcurement29Adapter extends GenericRestAdapter {
    config = logistics_procurement_29_config;
    constructor(credentials) {
        super(logistics_procurement_29_config, credentials);
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
registry.register('logistics_procurement_29', LogisticsProcurement29Adapter);
// DeltaOne Adapter [769]
// customs solution for logistics
const logistics_customs_30_config = {
    id: 'logistics_customs_30',
    name: 'DeltaOne',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltaone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_30_config);
export class LogisticsCustoms30Adapter extends GenericRestAdapter {
    config = logistics_customs_30_config;
    constructor(credentials) {
        super(logistics_customs_30_config, credentials);
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
registry.register('logistics_customs_30', LogisticsCustoms30Adapter);
// BrightForce Adapter [770]
// shipping solution for logistics
const logistics_shipping_31_config = {
    id: 'logistics_shipping_31',
    name: 'BrightForce',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.brightforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_31_config);
export class LogisticsShipping31Adapter extends GenericRestAdapter {
    config = logistics_shipping_31_config;
    constructor(credentials) {
        super(logistics_shipping_31_config, credentials);
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
registry.register('logistics_shipping_31', LogisticsShipping31Adapter);
// QuestCloud Adapter [771]
// tracking solution for logistics
const logistics_tracking_32_config = {
    id: 'logistics_tracking_32',
    name: 'QuestCloud',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_32_config);
export class LogisticsTracking32Adapter extends GenericRestAdapter {
    config = logistics_tracking_32_config;
    constructor(credentials) {
        super(logistics_tracking_32_config, credentials);
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
registry.register('logistics_tracking_32', LogisticsTracking32Adapter);
// SigmaWorks Adapter [772]
// warehouse solution for logistics
const logistics_warehouse_33_config = {
    id: 'logistics_warehouse_33',
    name: 'SigmaWorks',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sigmaworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_33_config);
export class LogisticsWarehouse33Adapter extends GenericRestAdapter {
    config = logistics_warehouse_33_config;
    constructor(credentials) {
        super(logistics_warehouse_33_config, credentials);
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
registry.register('logistics_warehouse_33', LogisticsWarehouse33Adapter);
// MaverickMax Adapter [773]
// fleet solution for logistics
const logistics_fleet_34_config = {
    id: 'logistics_fleet_34',
    name: 'MaverickMax',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_34_config);
export class LogisticsFleet34Adapter extends GenericRestAdapter {
    config = logistics_fleet_34_config;
    constructor(credentials) {
        super(logistics_fleet_34_config, credentials);
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
registry.register('logistics_fleet_34', LogisticsFleet34Adapter);
// CloudStack Adapter [774]
// inventory solution for logistics
const logistics_inventory_35_config = {
    id: 'logistics_inventory_35',
    name: 'CloudStack',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cloudstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_35_config);
export class LogisticsInventory35Adapter extends GenericRestAdapter {
    config = logistics_inventory_35_config;
    constructor(credentials) {
        super(logistics_inventory_35_config, credentials);
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
registry.register('logistics_inventory_35', LogisticsInventory35Adapter);
// ZeroCloud Adapter [775]
// freight solution for logistics
const logistics_freight_36_config = {
    id: 'logistics_freight_36',
    name: 'ZeroCloud',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zerocloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_36_config);
export class LogisticsFreight36Adapter extends GenericRestAdapter {
    config = logistics_freight_36_config;
    constructor(credentials) {
        super(logistics_freight_36_config, credentials);
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
registry.register('logistics_freight_36', LogisticsFreight36Adapter);
// MaverickConnect Adapter [776]
// delivery solution for logistics
const logistics_delivery_37_config = {
    id: 'logistics_delivery_37',
    name: 'MaverickConnect',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_37_config);
export class LogisticsDelivery37Adapter extends GenericRestAdapter {
    config = logistics_delivery_37_config;
    constructor(credentials) {
        super(logistics_delivery_37_config, credentials);
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
registry.register('logistics_delivery_37', LogisticsDelivery37Adapter);
// TruWave Adapter [777]
// supply chain solution for logistics
const logistics_supply_chain_38_config = {
    id: 'logistics_supply_chain_38',
    name: 'TruWave',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_38_config);
export class LogisticsSupplyChain38Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_38_config;
    constructor(credentials) {
        super(logistics_supply_chain_38_config, credentials);
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
registry.register('logistics_supply_chain_38', LogisticsSupplyChain38Adapter);
// TruSoftware Adapter [778]
// procurement solution for logistics
const logistics_procurement_39_config = {
    id: 'logistics_procurement_39',
    name: 'TruSoftware',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.trusoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_39_config);
export class LogisticsProcurement39Adapter extends GenericRestAdapter {
    config = logistics_procurement_39_config;
    constructor(credentials) {
        super(logistics_procurement_39_config, credentials);
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
registry.register('logistics_procurement_39', LogisticsProcurement39Adapter);
// HarborConnect Adapter [779]
// customs solution for logistics
const logistics_customs_40_config = {
    id: 'logistics_customs_40',
    name: 'HarborConnect',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.harborconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_40_config);
export class LogisticsCustoms40Adapter extends GenericRestAdapter {
    config = logistics_customs_40_config;
    constructor(credentials) {
        super(logistics_customs_40_config, credentials);
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
registry.register('logistics_customs_40', LogisticsCustoms40Adapter);
// QuestPath Adapter [780]
// shipping solution for logistics
const logistics_shipping_41_config = {
    id: 'logistics_shipping_41',
    name: 'QuestPath',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_41_config);
export class LogisticsShipping41Adapter extends GenericRestAdapter {
    config = logistics_shipping_41_config;
    constructor(credentials) {
        super(logistics_shipping_41_config, credentials);
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
registry.register('logistics_shipping_41', LogisticsShipping41Adapter);
// HavenAI Adapter [781]
// tracking solution for logistics
const logistics_tracking_42_config = {
    id: 'logistics_tracking_42',
    name: 'HavenAI',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havenai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_42_config);
export class LogisticsTracking42Adapter extends GenericRestAdapter {
    config = logistics_tracking_42_config;
    constructor(credentials) {
        super(logistics_tracking_42_config, credentials);
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
registry.register('logistics_tracking_42', LogisticsTracking42Adapter);
// BoltLabs Adapter [782]
// warehouse solution for logistics
const logistics_warehouse_43_config = {
    id: 'logistics_warehouse_43',
    name: 'BoltLabs',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_43_config);
export class LogisticsWarehouse43Adapter extends GenericRestAdapter {
    config = logistics_warehouse_43_config;
    constructor(credentials) {
        super(logistics_warehouse_43_config, credentials);
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
registry.register('logistics_warehouse_43', LogisticsWarehouse43Adapter);
// GridConnect Adapter [783]
// fleet solution for logistics
const logistics_fleet_44_config = {
    id: 'logistics_fleet_44',
    name: 'GridConnect',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.gridconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_44_config);
export class LogisticsFleet44Adapter extends GenericRestAdapter {
    config = logistics_fleet_44_config;
    constructor(credentials) {
        super(logistics_fleet_44_config, credentials);
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
registry.register('logistics_fleet_44', LogisticsFleet44Adapter);
// Orbit360 Adapter [784]
// inventory solution for logistics
const logistics_inventory_45_config = {
    id: 'logistics_inventory_45',
    name: 'Orbit360',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.orbit360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_45_config);
export class LogisticsInventory45Adapter extends GenericRestAdapter {
    config = logistics_inventory_45_config;
    constructor(credentials) {
        super(logistics_inventory_45_config, credentials);
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
registry.register('logistics_inventory_45', LogisticsInventory45Adapter);
// HulseLogic Adapter [785]
// freight solution for logistics
const logistics_freight_46_config = {
    id: 'logistics_freight_46',
    name: 'HulseLogic',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hulselogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_46_config);
export class LogisticsFreight46Adapter extends GenericRestAdapter {
    config = logistics_freight_46_config;
    constructor(credentials) {
        super(logistics_freight_46_config, credentials);
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
registry.register('logistics_freight_46', LogisticsFreight46Adapter);
// StellarHub Adapter [786]
// delivery solution for logistics
const logistics_delivery_47_config = {
    id: 'logistics_delivery_47',
    name: 'StellarHub',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stellarhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_47_config);
export class LogisticsDelivery47Adapter extends GenericRestAdapter {
    config = logistics_delivery_47_config;
    constructor(credentials) {
        super(logistics_delivery_47_config, credentials);
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
registry.register('logistics_delivery_47', LogisticsDelivery47Adapter);
// NexusPoint Adapter [787]
// supply chain solution for logistics
const logistics_supply_chain_48_config = {
    id: 'logistics_supply_chain_48',
    name: 'NexusPoint',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexuspoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_48_config);
export class LogisticsSupplyChain48Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_48_config;
    constructor(credentials) {
        super(logistics_supply_chain_48_config, credentials);
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
registry.register('logistics_supply_chain_48', LogisticsSupplyChain48Adapter);
// WavePlus Adapter [788]
// procurement solution for logistics
const logistics_procurement_49_config = {
    id: 'logistics_procurement_49',
    name: 'WavePlus',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.waveplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_49_config);
export class LogisticsProcurement49Adapter extends GenericRestAdapter {
    config = logistics_procurement_49_config;
    constructor(credentials) {
        super(logistics_procurement_49_config, credentials);
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
registry.register('logistics_procurement_49', LogisticsProcurement49Adapter);
// DriftSystems Adapter [789]
// customs solution for logistics
const logistics_customs_50_config = {
    id: 'logistics_customs_50',
    name: 'DriftSystems',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.driftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_50_config);
export class LogisticsCustoms50Adapter extends GenericRestAdapter {
    config = logistics_customs_50_config;
    constructor(credentials) {
        super(logistics_customs_50_config, credentials);
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
registry.register('logistics_customs_50', LogisticsCustoms50Adapter);
// HorizonWave Adapter [790]
// shipping solution for logistics
const logistics_shipping_51_config = {
    id: 'logistics_shipping_51',
    name: 'HorizonWave',
    category: 'logistics',
    description: 'shipping solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_shipping_51_config);
export class LogisticsShipping51Adapter extends GenericRestAdapter {
    config = logistics_shipping_51_config;
    constructor(credentials) {
        super(logistics_shipping_51_config, credentials);
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
registry.register('logistics_shipping_51', LogisticsShipping51Adapter);
// SolsticeSolutions Adapter [791]
// tracking solution for logistics
const logistics_tracking_52_config = {
    id: 'logistics_tracking_52',
    name: 'SolsticeSolutions',
    category: 'logistics',
    description: 'tracking solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticesolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_tracking_52_config);
export class LogisticsTracking52Adapter extends GenericRestAdapter {
    config = logistics_tracking_52_config;
    constructor(credentials) {
        super(logistics_tracking_52_config, credentials);
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
registry.register('logistics_tracking_52', LogisticsTracking52Adapter);
// TangentMax Adapter [792]
// warehouse solution for logistics
const logistics_warehouse_53_config = {
    id: 'logistics_warehouse_53',
    name: 'TangentMax',
    category: 'logistics',
    description: 'warehouse solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_warehouse_53_config);
export class LogisticsWarehouse53Adapter extends GenericRestAdapter {
    config = logistics_warehouse_53_config;
    constructor(credentials) {
        super(logistics_warehouse_53_config, credentials);
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
registry.register('logistics_warehouse_53', LogisticsWarehouse53Adapter);
// VectorDynamics Adapter [793]
// fleet solution for logistics
const logistics_fleet_54_config = {
    id: 'logistics_fleet_54',
    name: 'VectorDynamics',
    category: 'logistics',
    description: 'fleet solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vectordynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_fleet_54_config);
export class LogisticsFleet54Adapter extends GenericRestAdapter {
    config = logistics_fleet_54_config;
    constructor(credentials) {
        super(logistics_fleet_54_config, credentials);
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
registry.register('logistics_fleet_54', LogisticsFleet54Adapter);
// PinnaclePro Adapter [794]
// inventory solution for logistics
const logistics_inventory_55_config = {
    id: 'logistics_inventory_55',
    name: 'PinnaclePro',
    category: 'logistics',
    description: 'inventory solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnaclepro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_inventory_55_config);
export class LogisticsInventory55Adapter extends GenericRestAdapter {
    config = logistics_inventory_55_config;
    constructor(credentials) {
        super(logistics_inventory_55_config, credentials);
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
registry.register('logistics_inventory_55', LogisticsInventory55Adapter);
// DeltaPro Adapter [795]
// freight solution for logistics
const logistics_freight_56_config = {
    id: 'logistics_freight_56',
    name: 'DeltaPro',
    category: 'logistics',
    description: 'freight solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltapro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_freight_56_config);
export class LogisticsFreight56Adapter extends GenericRestAdapter {
    config = logistics_freight_56_config;
    constructor(credentials) {
        super(logistics_freight_56_config, credentials);
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
registry.register('logistics_freight_56', LogisticsFreight56Adapter);
// RippleWave Adapter [796]
// delivery solution for logistics
const logistics_delivery_57_config = {
    id: 'logistics_delivery_57',
    name: 'RippleWave',
    category: 'logistics',
    description: 'delivery solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ripplewave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_delivery_57_config);
export class LogisticsDelivery57Adapter extends GenericRestAdapter {
    config = logistics_delivery_57_config;
    constructor(credentials) {
        super(logistics_delivery_57_config, credentials);
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
registry.register('logistics_delivery_57', LogisticsDelivery57Adapter);
// TruFlow Adapter [797]
// supply chain solution for logistics
const logistics_supply_chain_58_config = {
    id: 'logistics_supply_chain_58',
    name: 'TruFlow',
    category: 'logistics',
    description: 'supply chain solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_supply_chain_58_config);
export class LogisticsSupplyChain58Adapter extends GenericRestAdapter {
    config = logistics_supply_chain_58_config;
    constructor(credentials) {
        super(logistics_supply_chain_58_config, credentials);
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
registry.register('logistics_supply_chain_58', LogisticsSupplyChain58Adapter);
// MaverickZone Adapter [798]
// procurement solution for logistics
const logistics_procurement_59_config = {
    id: 'logistics_procurement_59',
    name: 'MaverickZone',
    category: 'logistics',
    description: 'procurement solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_procurement_59_config);
export class LogisticsProcurement59Adapter extends GenericRestAdapter {
    config = logistics_procurement_59_config;
    constructor(credentials) {
        super(logistics_procurement_59_config, credentials);
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
registry.register('logistics_procurement_59', LogisticsProcurement59Adapter);
// BraveZone Adapter [799]
// customs solution for logistics
const logistics_customs_60_config = {
    id: 'logistics_customs_60',
    name: 'BraveZone',
    category: 'logistics',
    description: 'customs solution for logistics',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.bravezone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logistics_customs_60_config);
export class LogisticsCustoms60Adapter extends GenericRestAdapter {
    config = logistics_customs_60_config;
    constructor(credentials) {
        super(logistics_customs_60_config, credentials);
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
registry.register('logistics_customs_60', LogisticsCustoms60Adapter);
//# sourceMappingURL=logistics.js.map