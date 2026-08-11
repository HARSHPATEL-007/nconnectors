// Generated Adapters — energy (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// BoltZone Adapter [1220]
// utility solution for energy
const energy_utility_1_config = {
    id: 'energy_utility_1',
    name: 'BoltZone',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_1_config);
export class EnergyUtility1Adapter extends GenericRestAdapter {
    config = energy_utility_1_config;
    constructor(credentials) {
        super(energy_utility_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_1', EnergyUtility1Adapter);
// HorizonLogic Adapter [1221]
// solar solution for energy
const energy_solar_2_config = {
    id: 'energy_solar_2',
    name: 'HorizonLogic',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_2_config);
export class EnergySolar2Adapter extends GenericRestAdapter {
    config = energy_solar_2_config;
    constructor(credentials) {
        super(energy_solar_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_2', EnergySolar2Adapter);
// StratusAI Adapter [1222]
// wind solution for energy
const energy_wind_3_config = {
    id: 'energy_wind_3',
    name: 'StratusAI',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratusai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_3_config);
export class EnergyWind3Adapter extends GenericRestAdapter {
    config = energy_wind_3_config;
    constructor(credentials) {
        super(energy_wind_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_3', EnergyWind3Adapter);
// IonZone Adapter [1223]
// oil gas solution for energy
const energy_oil_gas_4_config = {
    id: 'energy_oil_gas_4',
    name: 'IonZone',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_4_config);
export class EnergyOilGas4Adapter extends GenericRestAdapter {
    config = energy_oil_gas_4_config;
    constructor(credentials) {
        super(energy_oil_gas_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_4', EnergyOilGas4Adapter);
// LambdaOne Adapter [1224]
// grid solution for energy
const energy_grid_5_config = {
    id: 'energy_grid_5',
    name: 'LambdaOne',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdaone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_5_config);
export class EnergyGrid5Adapter extends GenericRestAdapter {
    config = energy_grid_5_config;
    constructor(credentials) {
        super(energy_grid_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_5', EnergyGrid5Adapter);
// KarmaOne Adapter [1225]
// storage solution for energy
const energy_storage_6_config = {
    id: 'energy_storage_6',
    name: 'KarmaOne',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmaone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_6_config);
export class EnergyStorage6Adapter extends GenericRestAdapter {
    config = energy_storage_6_config;
    constructor(credentials) {
        super(energy_storage_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_6', EnergyStorage6Adapter);
// Craft360 Adapter [1226]
// efficiency solution for energy
const energy_efficiency_7_config = {
    id: 'energy_efficiency_7',
    name: 'Craft360',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craft360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_7_config);
export class EnergyEfficiency7Adapter extends GenericRestAdapter {
    config = energy_efficiency_7_config;
    constructor(credentials) {
        super(energy_efficiency_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_7', EnergyEfficiency7Adapter);
// CloudData Adapter [1227]
// carbon solution for energy
const energy_carbon_8_config = {
    id: 'energy_carbon_8',
    name: 'CloudData',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clouddata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_8_config);
export class EnergyCarbon8Adapter extends GenericRestAdapter {
    config = energy_carbon_8_config;
    constructor(credentials) {
        super(energy_carbon_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_8', EnergyCarbon8Adapter);
// JunoDynamics Adapter [1228]
// compliance solution for energy
const energy_compliance_9_config = {
    id: 'energy_compliance_9',
    name: 'JunoDynamics',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junodynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_9_config);
export class EnergyCompliance9Adapter extends GenericRestAdapter {
    config = energy_compliance_9_config;
    constructor(credentials) {
        super(energy_compliance_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_9', EnergyCompliance9Adapter);
// ZenithPro Adapter [1229]
// analytics solution for energy
const energy_analytics_10_config = {
    id: 'energy_analytics_10',
    name: 'ZenithPro',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_10_config);
export class EnergyAnalytics10Adapter extends GenericRestAdapter {
    config = energy_analytics_10_config;
    constructor(credentials) {
        super(energy_analytics_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_10', EnergyAnalytics10Adapter);
// FlashMind Adapter [1230]
// utility solution for energy
const energy_utility_11_config = {
    id: 'energy_utility_11',
    name: 'FlashMind',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_11_config);
export class EnergyUtility11Adapter extends GenericRestAdapter {
    config = energy_utility_11_config;
    constructor(credentials) {
        super(energy_utility_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_11', EnergyUtility11Adapter);
// SwiftWorks Adapter [1231]
// solar solution for energy
const energy_solar_12_config = {
    id: 'energy_solar_12',
    name: 'SwiftWorks',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.swiftworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_12_config);
export class EnergySolar12Adapter extends GenericRestAdapter {
    config = energy_solar_12_config;
    constructor(credentials) {
        super(energy_solar_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_12', EnergySolar12Adapter);
// AcmeLogic Adapter [1232]
// wind solution for energy
const energy_wind_13_config = {
    id: 'energy_wind_13',
    name: 'AcmeLogic',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acmelogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_13_config);
export class EnergyWind13Adapter extends GenericRestAdapter {
    config = energy_wind_13_config;
    constructor(credentials) {
        super(energy_wind_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_13', EnergyWind13Adapter);
// TurboSoftware Adapter [1233]
// oil gas solution for energy
const energy_oil_gas_14_config = {
    id: 'energy_oil_gas_14',
    name: 'TurboSoftware',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.turbosoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_14_config);
export class EnergyOilGas14Adapter extends GenericRestAdapter {
    config = energy_oil_gas_14_config;
    constructor(credentials) {
        super(energy_oil_gas_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_14', EnergyOilGas14Adapter);
// SparkPro Adapter [1234]
// grid solution for energy
const energy_grid_15_config = {
    id: 'energy_grid_15',
    name: 'SparkPro',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_15_config);
export class EnergyGrid15Adapter extends GenericRestAdapter {
    config = energy_grid_15_config;
    constructor(credentials) {
        super(energy_grid_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_15', EnergyGrid15Adapter);
// WaveCore Adapter [1235]
// storage solution for energy
const energy_storage_16_config = {
    id: 'energy_storage_16',
    name: 'WaveCore',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.wavecore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_16_config);
export class EnergyStorage16Adapter extends GenericRestAdapter {
    config = energy_storage_16_config;
    constructor(credentials) {
        super(energy_storage_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_16', EnergyStorage16Adapter);
// ReachPro Adapter [1236]
// efficiency solution for energy
const energy_efficiency_17_config = {
    id: 'energy_efficiency_17',
    name: 'ReachPro',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.reachpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_17_config);
export class EnergyEfficiency17Adapter extends GenericRestAdapter {
    config = energy_efficiency_17_config;
    constructor(credentials) {
        super(energy_efficiency_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_17', EnergyEfficiency17Adapter);
// BoltConnect Adapter [1237]
// carbon solution for energy
const energy_carbon_18_config = {
    id: 'energy_carbon_18',
    name: 'BoltConnect',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_18_config);
export class EnergyCarbon18Adapter extends GenericRestAdapter {
    config = energy_carbon_18_config;
    constructor(credentials) {
        super(energy_carbon_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_18', EnergyCarbon18Adapter);
// MotionNetwork Adapter [1238]
// compliance solution for energy
const energy_compliance_19_config = {
    id: 'energy_compliance_19',
    name: 'MotionNetwork',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.motionnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_19_config);
export class EnergyCompliance19Adapter extends GenericRestAdapter {
    config = energy_compliance_19_config;
    constructor(credentials) {
        super(energy_compliance_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_19', EnergyCompliance19Adapter);
// WaveOne Adapter [1239]
// analytics solution for energy
const energy_analytics_20_config = {
    id: 'energy_analytics_20',
    name: 'WaveOne',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.waveone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_20_config);
export class EnergyAnalytics20Adapter extends GenericRestAdapter {
    config = energy_analytics_20_config;
    constructor(credentials) {
        super(energy_analytics_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_20', EnergyAnalytics20Adapter);
// FlashPath Adapter [1240]
// utility solution for energy
const energy_utility_21_config = {
    id: 'energy_utility_21',
    name: 'FlashPath',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_21_config);
export class EnergyUtility21Adapter extends GenericRestAdapter {
    config = energy_utility_21_config;
    constructor(credentials) {
        super(energy_utility_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_21', EnergyUtility21Adapter);
// TitanOne Adapter [1241]
// solar solution for energy
const energy_solar_22_config = {
    id: 'energy_solar_22',
    name: 'TitanOne',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.titanone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_22_config);
export class EnergySolar22Adapter extends GenericRestAdapter {
    config = energy_solar_22_config;
    constructor(credentials) {
        super(energy_solar_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_22', EnergySolar22Adapter);
// ApexPlatform Adapter [1242]
// wind solution for energy
const energy_wind_23_config = {
    id: 'energy_wind_23',
    name: 'ApexPlatform',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_23_config);
export class EnergyWind23Adapter extends GenericRestAdapter {
    config = energy_wind_23_config;
    constructor(credentials) {
        super(energy_wind_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_23', EnergyWind23Adapter);
// PixelHub Adapter [1243]
// oil gas solution for energy
const energy_oil_gas_24_config = {
    id: 'energy_oil_gas_24',
    name: 'PixelHub',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_24_config);
export class EnergyOilGas24Adapter extends GenericRestAdapter {
    config = energy_oil_gas_24_config;
    constructor(credentials) {
        super(energy_oil_gas_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_24', EnergyOilGas24Adapter);
// SummitData Adapter [1244]
// grid solution for energy
const energy_grid_25_config = {
    id: 'energy_grid_25',
    name: 'SummitData',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.summitdata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_25_config);
export class EnergyGrid25Adapter extends GenericRestAdapter {
    config = energy_grid_25_config;
    constructor(credentials) {
        super(energy_grid_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_25', EnergyGrid25Adapter);
// KineticLogic Adapter [1245]
// storage solution for energy
const energy_storage_26_config = {
    id: 'energy_storage_26',
    name: 'KineticLogic',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_26_config);
export class EnergyStorage26Adapter extends GenericRestAdapter {
    config = energy_storage_26_config;
    constructor(credentials) {
        super(energy_storage_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_26', EnergyStorage26Adapter);
// CoreHub Adapter [1246]
// efficiency solution for energy
const energy_efficiency_27_config = {
    id: 'energy_efficiency_27',
    name: 'CoreHub',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.corehub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_27_config);
export class EnergyEfficiency27Adapter extends GenericRestAdapter {
    config = energy_efficiency_27_config;
    constructor(credentials) {
        super(energy_efficiency_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_27', EnergyEfficiency27Adapter);
// RushSystems Adapter [1247]
// carbon solution for energy
const energy_carbon_28_config = {
    id: 'energy_carbon_28',
    name: 'RushSystems',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.rushsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_28_config);
export class EnergyCarbon28Adapter extends GenericRestAdapter {
    config = energy_carbon_28_config;
    constructor(credentials) {
        super(energy_carbon_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_28', EnergyCarbon28Adapter);
// SolsticeLink Adapter [1248]
// compliance solution for energy
const energy_compliance_29_config = {
    id: 'energy_compliance_29',
    name: 'SolsticeLink',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticelink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_29_config);
export class EnergyCompliance29Adapter extends GenericRestAdapter {
    config = energy_compliance_29_config;
    constructor(credentials) {
        super(energy_compliance_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_29', EnergyCompliance29Adapter);
// TorchForce Adapter [1249]
// analytics solution for energy
const energy_analytics_30_config = {
    id: 'energy_analytics_30',
    name: 'TorchForce',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.torchforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_30_config);
export class EnergyAnalytics30Adapter extends GenericRestAdapter {
    config = energy_analytics_30_config;
    constructor(credentials) {
        super(energy_analytics_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_30', EnergyAnalytics30Adapter);
// CraftPath Adapter [1250]
// utility solution for energy
const energy_utility_31_config = {
    id: 'energy_utility_31',
    name: 'CraftPath',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_31_config);
export class EnergyUtility31Adapter extends GenericRestAdapter {
    config = energy_utility_31_config;
    constructor(credentials) {
        super(energy_utility_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_31', EnergyUtility31Adapter);
// NexusPro Adapter [1251]
// solar solution for energy
const energy_solar_32_config = {
    id: 'energy_solar_32',
    name: 'NexusPro',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexuspro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_32_config);
export class EnergySolar32Adapter extends GenericRestAdapter {
    config = energy_solar_32_config;
    constructor(credentials) {
        super(energy_solar_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_32', EnergySolar32Adapter);
// CrestMind Adapter [1252]
// wind solution for energy
const energy_wind_33_config = {
    id: 'energy_wind_33',
    name: 'CrestMind',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_33_config);
export class EnergyWind33Adapter extends GenericRestAdapter {
    config = energy_wind_33_config;
    constructor(credentials) {
        super(energy_wind_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_33', EnergyWind33Adapter);
// Evo360 Adapter [1253]
// oil gas solution for energy
const energy_oil_gas_34_config = {
    id: 'energy_oil_gas_34',
    name: 'Evo360',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evo360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_34_config);
export class EnergyOilGas34Adapter extends GenericRestAdapter {
    config = energy_oil_gas_34_config;
    constructor(credentials) {
        super(energy_oil_gas_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_34', EnergyOilGas34Adapter);
// TruZone Adapter [1254]
// grid solution for energy
const energy_grid_35_config = {
    id: 'energy_grid_35',
    name: 'TruZone',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_35_config);
export class EnergyGrid35Adapter extends GenericRestAdapter {
    config = energy_grid_35_config;
    constructor(credentials) {
        super(energy_grid_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_35', EnergyGrid35Adapter);
// DriftPlus Adapter [1255]
// storage solution for energy
const energy_storage_36_config = {
    id: 'energy_storage_36',
    name: 'DriftPlus',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.driftplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_36_config);
export class EnergyStorage36Adapter extends GenericRestAdapter {
    config = energy_storage_36_config;
    constructor(credentials) {
        super(energy_storage_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_36', EnergyStorage36Adapter);
// VividStack Adapter [1256]
// efficiency solution for energy
const energy_efficiency_37_config = {
    id: 'energy_efficiency_37',
    name: 'VividStack',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vividstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_37_config);
export class EnergyEfficiency37Adapter extends GenericRestAdapter {
    config = energy_efficiency_37_config;
    constructor(credentials) {
        super(energy_efficiency_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_37', EnergyEfficiency37Adapter);
// ZeroZone Adapter [1257]
// carbon solution for energy
const energy_carbon_38_config = {
    id: 'energy_carbon_38',
    name: 'ZeroZone',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zerozone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_38_config);
export class EnergyCarbon38Adapter extends GenericRestAdapter {
    config = energy_carbon_38_config;
    constructor(credentials) {
        super(energy_carbon_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_38', EnergyCarbon38Adapter);
// HelixPath Adapter [1258]
// compliance solution for energy
const energy_compliance_39_config = {
    id: 'energy_compliance_39',
    name: 'HelixPath',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.helixpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_39_config);
export class EnergyCompliance39Adapter extends GenericRestAdapter {
    config = energy_compliance_39_config;
    constructor(credentials) {
        super(energy_compliance_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_39', EnergyCompliance39Adapter);
// UltraPath Adapter [1259]
// analytics solution for energy
const energy_analytics_40_config = {
    id: 'energy_analytics_40',
    name: 'UltraPath',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultrapath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_40_config);
export class EnergyAnalytics40Adapter extends GenericRestAdapter {
    config = energy_analytics_40_config;
    constructor(credentials) {
        super(energy_analytics_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_40', EnergyAnalytics40Adapter);
// MeridianZone Adapter [1260]
// utility solution for energy
const energy_utility_41_config = {
    id: 'energy_utility_41',
    name: 'MeridianZone',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_41_config);
export class EnergyUtility41Adapter extends GenericRestAdapter {
    config = energy_utility_41_config;
    constructor(credentials) {
        super(energy_utility_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_41', EnergyUtility41Adapter);
// CoreSoftware Adapter [1261]
// solar solution for energy
const energy_solar_42_config = {
    id: 'energy_solar_42',
    name: 'CoreSoftware',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.coresoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_42_config);
export class EnergySolar42Adapter extends GenericRestAdapter {
    config = energy_solar_42_config;
    constructor(credentials) {
        super(energy_solar_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_42', EnergySolar42Adapter);
// HavenCore Adapter [1262]
// wind solution for energy
const energy_wind_43_config = {
    id: 'energy_wind_43',
    name: 'HavenCore',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havencore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_43_config);
export class EnergyWind43Adapter extends GenericRestAdapter {
    config = energy_wind_43_config;
    constructor(credentials) {
        super(energy_wind_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_43', EnergyWind43Adapter);
// CraftSystems Adapter [1263]
// oil gas solution for energy
const energy_oil_gas_44_config = {
    id: 'energy_oil_gas_44',
    name: 'CraftSystems',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_44_config);
export class EnergyOilGas44Adapter extends GenericRestAdapter {
    config = energy_oil_gas_44_config;
    constructor(credentials) {
        super(energy_oil_gas_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_44', EnergyOilGas44Adapter);
// JunoAI Adapter [1264]
// grid solution for energy
const energy_grid_45_config = {
    id: 'energy_grid_45',
    name: 'JunoAI',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junoai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_45_config);
export class EnergyGrid45Adapter extends GenericRestAdapter {
    config = energy_grid_45_config;
    constructor(credentials) {
        super(energy_grid_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_45', EnergyGrid45Adapter);
// Turbo360 Adapter [1265]
// storage solution for energy
const energy_storage_46_config = {
    id: 'energy_storage_46',
    name: 'Turbo360',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.turbo360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_46_config);
export class EnergyStorage46Adapter extends GenericRestAdapter {
    config = energy_storage_46_config;
    constructor(credentials) {
        super(energy_storage_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_46', EnergyStorage46Adapter);
// GlowNetwork Adapter [1266]
// efficiency solution for energy
const energy_efficiency_47_config = {
    id: 'energy_efficiency_47',
    name: 'GlowNetwork',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glownetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_47_config);
export class EnergyEfficiency47Adapter extends GenericRestAdapter {
    config = energy_efficiency_47_config;
    constructor(credentials) {
        super(energy_efficiency_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_47', EnergyEfficiency47Adapter);
// JunoForce Adapter [1267]
// carbon solution for energy
const energy_carbon_48_config = {
    id: 'energy_carbon_48',
    name: 'JunoForce',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junoforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_48_config);
export class EnergyCarbon48Adapter extends GenericRestAdapter {
    config = energy_carbon_48_config;
    constructor(credentials) {
        super(energy_carbon_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_48', EnergyCarbon48Adapter);
// ParagonMax Adapter [1268]
// compliance solution for energy
const energy_compliance_49_config = {
    id: 'energy_compliance_49',
    name: 'ParagonMax',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.paragonmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_49_config);
export class EnergyCompliance49Adapter extends GenericRestAdapter {
    config = energy_compliance_49_config;
    constructor(credentials) {
        super(energy_compliance_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_49', EnergyCompliance49Adapter);
// VertexNetwork Adapter [1269]
// analytics solution for energy
const energy_analytics_50_config = {
    id: 'energy_analytics_50',
    name: 'VertexNetwork',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_50_config);
export class EnergyAnalytics50Adapter extends GenericRestAdapter {
    config = energy_analytics_50_config;
    constructor(credentials) {
        super(energy_analytics_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_50', EnergyAnalytics50Adapter);
// KarmaHub Adapter [1270]
// utility solution for energy
const energy_utility_51_config = {
    id: 'energy_utility_51',
    name: 'KarmaHub',
    category: 'energy',
    description: 'utility solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmahub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_utility_51_config);
export class EnergyUtility51Adapter extends GenericRestAdapter {
    config = energy_utility_51_config;
    constructor(credentials) {
        super(energy_utility_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_utility_51', EnergyUtility51Adapter);
// NexusTechnologies Adapter [1271]
// solar solution for energy
const energy_solar_52_config = {
    id: 'energy_solar_52',
    name: 'NexusTechnologies',
    category: 'energy',
    description: 'solar solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexustechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_solar_52_config);
export class EnergySolar52Adapter extends GenericRestAdapter {
    config = energy_solar_52_config;
    constructor(credentials) {
        super(energy_solar_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_solar_52', EnergySolar52Adapter);
// TruHub Adapter [1272]
// wind solution for energy
const energy_wind_53_config = {
    id: 'energy_wind_53',
    name: 'TruHub',
    category: 'energy',
    description: 'wind solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.truhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_wind_53_config);
export class EnergyWind53Adapter extends GenericRestAdapter {
    config = energy_wind_53_config;
    constructor(credentials) {
        super(energy_wind_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_wind_53', EnergyWind53Adapter);
// SolsticeOne Adapter [1273]
// oil gas solution for energy
const energy_oil_gas_54_config = {
    id: 'energy_oil_gas_54',
    name: 'SolsticeOne',
    category: 'energy',
    description: 'oil gas solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticeone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_oil_gas_54_config);
export class EnergyOilGas54Adapter extends GenericRestAdapter {
    config = energy_oil_gas_54_config;
    constructor(credentials) {
        super(energy_oil_gas_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_oil_gas_54', EnergyOilGas54Adapter);
// MaverickNetwork Adapter [1274]
// grid solution for energy
const energy_grid_55_config = {
    id: 'energy_grid_55',
    name: 'MaverickNetwork',
    category: 'energy',
    description: 'grid solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.mavericknetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_grid_55_config);
export class EnergyGrid55Adapter extends GenericRestAdapter {
    config = energy_grid_55_config;
    constructor(credentials) {
        super(energy_grid_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_grid_55', EnergyGrid55Adapter);
// DeltaOne Adapter [1275]
// storage solution for energy
const energy_storage_56_config = {
    id: 'energy_storage_56',
    name: 'DeltaOne',
    category: 'energy',
    description: 'storage solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltaone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_storage_56_config);
export class EnergyStorage56Adapter extends GenericRestAdapter {
    config = energy_storage_56_config;
    constructor(credentials) {
        super(energy_storage_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_storage_56', EnergyStorage56Adapter);
// PrismForce Adapter [1276]
// efficiency solution for energy
const energy_efficiency_57_config = {
    id: 'energy_efficiency_57',
    name: 'PrismForce',
    category: 'energy',
    description: 'efficiency solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_efficiency_57_config);
export class EnergyEfficiency57Adapter extends GenericRestAdapter {
    config = energy_efficiency_57_config;
    constructor(credentials) {
        super(energy_efficiency_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_efficiency_57', EnergyEfficiency57Adapter);
// EmberConnect Adapter [1277]
// carbon solution for energy
const energy_carbon_58_config = {
    id: 'energy_carbon_58',
    name: 'EmberConnect',
    category: 'energy',
    description: 'carbon solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.emberconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_carbon_58_config);
export class EnergyCarbon58Adapter extends GenericRestAdapter {
    config = energy_carbon_58_config;
    constructor(credentials) {
        super(energy_carbon_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_carbon_58', EnergyCarbon58Adapter);
// RippleZone Adapter [1278]
// compliance solution for energy
const energy_compliance_59_config = {
    id: 'energy_compliance_59',
    name: 'RippleZone',
    category: 'energy',
    description: 'compliance solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ripplezone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_compliance_59_config);
export class EnergyCompliance59Adapter extends GenericRestAdapter {
    config = energy_compliance_59_config;
    constructor(credentials) {
        super(energy_compliance_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_compliance_59', EnergyCompliance59Adapter);
// KineticPath Adapter [1279]
// analytics solution for energy
const energy_analytics_60_config = {
    id: 'energy_analytics_60',
    name: 'KineticPath',
    category: 'energy',
    description: 'analytics solution for energy',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(energy_analytics_60_config);
export class EnergyAnalytics60Adapter extends GenericRestAdapter {
    config = energy_analytics_60_config;
    constructor(credentials) {
        super(energy_analytics_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('energy_analytics_60', EnergyAnalytics60Adapter);
//# sourceMappingURL=energy.js.map