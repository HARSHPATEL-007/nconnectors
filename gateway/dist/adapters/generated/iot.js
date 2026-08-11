// Generated Adapters — iot (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// GridZone Adapter [920]
// device mgmt solution for iot
const iot_device_mgmt_1_config = {
    id: 'iot_device_mgmt_1',
    name: 'GridZone',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.gridzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_1_config);
export class IotDeviceMgmt1Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_1_config;
    constructor(credentials) {
        super(iot_device_mgmt_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_1', IotDeviceMgmt1Adapter);
// LumenZone Adapter [921]
// sensors solution for iot
const iot_sensors_2_config = {
    id: 'iot_sensors_2',
    name: 'LumenZone',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumenzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_2_config);
export class IotSensors2Adapter extends GenericRestAdapter {
    config = iot_sensors_2_config;
    constructor(credentials) {
        super(iot_sensors_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_2', IotSensors2Adapter);
// TangentMax Adapter [922]
// edge solution for iot
const iot_edge_3_config = {
    id: 'iot_edge_3',
    name: 'TangentMax',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_3_config);
export class IotEdge3Adapter extends GenericRestAdapter {
    config = iot_edge_3_config;
    constructor(credentials) {
        super(iot_edge_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_3', IotEdge3Adapter);
// NovaPoint Adapter [923]
// automation solution for iot
const iot_automation_4_config = {
    id: 'iot_automation_4',
    name: 'NovaPoint',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novapoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_4_config);
export class IotAutomation4Adapter extends GenericRestAdapter {
    config = iot_automation_4_config;
    constructor(credentials) {
        super(iot_automation_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_4', IotAutomation4Adapter);
// NeonBase Adapter [924]
// monitoring solution for iot
const iot_monitoring_5_config = {
    id: 'iot_monitoring_5',
    name: 'NeonBase',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.neonbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_5_config);
export class IotMonitoring5Adapter extends GenericRestAdapter {
    config = iot_monitoring_5_config;
    constructor(credentials) {
        super(iot_monitoring_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_5', IotMonitoring5Adapter);
// CrestFlow Adapter [925]
// analytics solution for iot
const iot_analytics_6_config = {
    id: 'iot_analytics_6',
    name: 'CrestFlow',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_6_config);
export class IotAnalytics6Adapter extends GenericRestAdapter {
    config = iot_analytics_6_config;
    constructor(credentials) {
        super(iot_analytics_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_6', IotAnalytics6Adapter);
// CraftCore Adapter [926]
// security solution for iot
const iot_security_7_config = {
    id: 'iot_security_7',
    name: 'CraftCore',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_7_config);
export class IotSecurity7Adapter extends GenericRestAdapter {
    config = iot_security_7_config;
    constructor(credentials) {
        super(iot_security_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_7', IotSecurity7Adapter);
// StratusHub Adapter [927]
// connectivity solution for iot
const iot_connectivity_8_config = {
    id: 'iot_connectivity_8',
    name: 'StratusHub',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratushub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_8_config);
export class IotConnectivity8Adapter extends GenericRestAdapter {
    config = iot_connectivity_8_config;
    constructor(credentials) {
        super(iot_connectivity_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_8', IotConnectivity8Adapter);
// LambdaLink Adapter [928]
// platform solution for iot
const iot_platform_9_config = {
    id: 'iot_platform_9',
    name: 'LambdaLink',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdalink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_9_config);
export class IotPlatform9Adapter extends GenericRestAdapter {
    config = iot_platform_9_config;
    constructor(credentials) {
        super(iot_platform_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_9', IotPlatform9Adapter);
// SummitCloud Adapter [929]
// data solution for iot
const iot_data_10_config = {
    id: 'iot_data_10',
    name: 'SummitCloud',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.summitcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_10_config);
export class IotData10Adapter extends GenericRestAdapter {
    config = iot_data_10_config;
    constructor(credentials) {
        super(iot_data_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_10', IotData10Adapter);
// CatalystAI Adapter [930]
// device mgmt solution for iot
const iot_device_mgmt_11_config = {
    id: 'iot_device_mgmt_11',
    name: 'CatalystAI',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.catalystai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_11_config);
export class IotDeviceMgmt11Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_11_config;
    constructor(credentials) {
        super(iot_device_mgmt_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_11', IotDeviceMgmt11Adapter);
// NexusData Adapter [931]
// sensors solution for iot
const iot_sensors_12_config = {
    id: 'iot_sensors_12',
    name: 'NexusData',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexusdata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_12_config);
export class IotSensors12Adapter extends GenericRestAdapter {
    config = iot_sensors_12_config;
    constructor(credentials) {
        super(iot_sensors_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_12', IotSensors12Adapter);
// GlowFlow Adapter [932]
// edge solution for iot
const iot_edge_13_config = {
    id: 'iot_edge_13',
    name: 'GlowFlow',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_13_config);
export class IotEdge13Adapter extends GenericRestAdapter {
    config = iot_edge_13_config;
    constructor(credentials) {
        super(iot_edge_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_13', IotEdge13Adapter);
// VisionPro Adapter [933]
// automation solution for iot
const iot_automation_14_config = {
    id: 'iot_automation_14',
    name: 'VisionPro',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.visionpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_14_config);
export class IotAutomation14Adapter extends GenericRestAdapter {
    config = iot_automation_14_config;
    constructor(credentials) {
        super(iot_automation_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_14', IotAutomation14Adapter);
// VortexSystems Adapter [934]
// monitoring solution for iot
const iot_monitoring_15_config = {
    id: 'iot_monitoring_15',
    name: 'VortexSystems',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vortexsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_15_config);
export class IotMonitoring15Adapter extends GenericRestAdapter {
    config = iot_monitoring_15_config;
    constructor(credentials) {
        super(iot_monitoring_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_15', IotMonitoring15Adapter);
// ForgeDynamics Adapter [935]
// analytics solution for iot
const iot_analytics_16_config = {
    id: 'iot_analytics_16',
    name: 'ForgeDynamics',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgedynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_16_config);
export class IotAnalytics16Adapter extends GenericRestAdapter {
    config = iot_analytics_16_config;
    constructor(credentials) {
        super(iot_analytics_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_16', IotAnalytics16Adapter);
// LeverSystems Adapter [936]
// security solution for iot
const iot_security_17_config = {
    id: 'iot_security_17',
    name: 'LeverSystems',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leversystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_17_config);
export class IotSecurity17Adapter extends GenericRestAdapter {
    config = iot_security_17_config;
    constructor(credentials) {
        super(iot_security_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_17', IotSecurity17Adapter);
// ElevateStack Adapter [937]
// connectivity solution for iot
const iot_connectivity_18_config = {
    id: 'iot_connectivity_18',
    name: 'ElevateStack',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatestack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_18_config);
export class IotConnectivity18Adapter extends GenericRestAdapter {
    config = iot_connectivity_18_config;
    constructor(credentials) {
        super(iot_connectivity_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_18', IotConnectivity18Adapter);
// ForgeSoftware Adapter [938]
// platform solution for iot
const iot_platform_19_config = {
    id: 'iot_platform_19',
    name: 'ForgeSoftware',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgesoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_19_config);
export class IotPlatform19Adapter extends GenericRestAdapter {
    config = iot_platform_19_config;
    constructor(credentials) {
        super(iot_platform_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_19', IotPlatform19Adapter);
// IonLink Adapter [939]
// data solution for iot
const iot_data_20_config = {
    id: 'iot_data_20',
    name: 'IonLink',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_20_config);
export class IotData20Adapter extends GenericRestAdapter {
    config = iot_data_20_config;
    constructor(credentials) {
        super(iot_data_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_20', IotData20Adapter);
// SparkDynamics Adapter [940]
// device mgmt solution for iot
const iot_device_mgmt_21_config = {
    id: 'iot_device_mgmt_21',
    name: 'SparkDynamics',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_21_config);
export class IotDeviceMgmt21Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_21_config;
    constructor(credentials) {
        super(iot_device_mgmt_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_21', IotDeviceMgmt21Adapter);
// PeakMax Adapter [941]
// sensors solution for iot
const iot_sensors_22_config = {
    id: 'iot_sensors_22',
    name: 'PeakMax',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.peakmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_22_config);
export class IotSensors22Adapter extends GenericRestAdapter {
    config = iot_sensors_22_config;
    constructor(credentials) {
        super(iot_sensors_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_22', IotSensors22Adapter);
// CrestStack Adapter [942]
// edge solution for iot
const iot_edge_23_config = {
    id: 'iot_edge_23',
    name: 'CrestStack',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.creststack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_23_config);
export class IotEdge23Adapter extends GenericRestAdapter {
    config = iot_edge_23_config;
    constructor(credentials) {
        super(iot_edge_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_23', IotEdge23Adapter);
// OmegaFlow Adapter [943]
// automation solution for iot
const iot_automation_24_config = {
    id: 'iot_automation_24',
    name: 'OmegaFlow',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.omegaflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_24_config);
export class IotAutomation24Adapter extends GenericRestAdapter {
    config = iot_automation_24_config;
    constructor(credentials) {
        super(iot_automation_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_24', IotAutomation24Adapter);
// ApexDynamics Adapter [944]
// monitoring solution for iot
const iot_monitoring_25_config = {
    id: 'iot_monitoring_25',
    name: 'ApexDynamics',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_25_config);
export class IotMonitoring25Adapter extends GenericRestAdapter {
    config = iot_monitoring_25_config;
    constructor(credentials) {
        super(iot_monitoring_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_25', IotMonitoring25Adapter);
// HyperForce Adapter [945]
// analytics solution for iot
const iot_analytics_26_config = {
    id: 'iot_analytics_26',
    name: 'HyperForce',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hyperforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_26_config);
export class IotAnalytics26Adapter extends GenericRestAdapter {
    config = iot_analytics_26_config;
    constructor(credentials) {
        super(iot_analytics_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_26', IotAnalytics26Adapter);
// TitanPlus Adapter [946]
// security solution for iot
const iot_security_27_config = {
    id: 'iot_security_27',
    name: 'TitanPlus',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.titanplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_27_config);
export class IotSecurity27Adapter extends GenericRestAdapter {
    config = iot_security_27_config;
    constructor(credentials) {
        super(iot_security_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_27', IotSecurity27Adapter);
// HorizonPath Adapter [947]
// connectivity solution for iot
const iot_connectivity_28_config = {
    id: 'iot_connectivity_28',
    name: 'HorizonPath',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_28_config);
export class IotConnectivity28Adapter extends GenericRestAdapter {
    config = iot_connectivity_28_config;
    constructor(credentials) {
        super(iot_connectivity_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_28', IotConnectivity28Adapter);
// ReachDigital Adapter [948]
// platform solution for iot
const iot_platform_29_config = {
    id: 'iot_platform_29',
    name: 'ReachDigital',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.reachdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_29_config);
export class IotPlatform29Adapter extends GenericRestAdapter {
    config = iot_platform_29_config;
    constructor(credentials) {
        super(iot_platform_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_29', IotPlatform29Adapter);
// PixelTechnologies Adapter [949]
// data solution for iot
const iot_data_30_config = {
    id: 'iot_data_30',
    name: 'PixelTechnologies',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixeltechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_30_config);
export class IotData30Adapter extends GenericRestAdapter {
    config = iot_data_30_config;
    constructor(credentials) {
        super(iot_data_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_30', IotData30Adapter);
// KineticPro Adapter [950]
// device mgmt solution for iot
const iot_device_mgmt_31_config = {
    id: 'iot_device_mgmt_31',
    name: 'KineticPro',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_31_config);
export class IotDeviceMgmt31Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_31_config;
    constructor(credentials) {
        super(iot_device_mgmt_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_31', IotDeviceMgmt31Adapter);
// JunoDynamics Adapter [951]
// sensors solution for iot
const iot_sensors_32_config = {
    id: 'iot_sensors_32',
    name: 'JunoDynamics',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junodynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_32_config);
export class IotSensors32Adapter extends GenericRestAdapter {
    config = iot_sensors_32_config;
    constructor(credentials) {
        super(iot_sensors_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_32', IotSensors32Adapter);
// MeridianMind Adapter [952]
// edge solution for iot
const iot_edge_33_config = {
    id: 'iot_edge_33',
    name: 'MeridianMind',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_33_config);
export class IotEdge33Adapter extends GenericRestAdapter {
    config = iot_edge_33_config;
    constructor(credentials) {
        super(iot_edge_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_33', IotEdge33Adapter);
// LambdaOne Adapter [953]
// automation solution for iot
const iot_automation_34_config = {
    id: 'iot_automation_34',
    name: 'LambdaOne',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdaone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_34_config);
export class IotAutomation34Adapter extends GenericRestAdapter {
    config = iot_automation_34_config;
    constructor(credentials) {
        super(iot_automation_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_34', IotAutomation34Adapter);
// Acme360 Adapter [954]
// monitoring solution for iot
const iot_monitoring_35_config = {
    id: 'iot_monitoring_35',
    name: 'Acme360',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acme360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_35_config);
export class IotMonitoring35Adapter extends GenericRestAdapter {
    config = iot_monitoring_35_config;
    constructor(credentials) {
        super(iot_monitoring_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_35', IotMonitoring35Adapter);
// JunoNetwork Adapter [955]
// analytics solution for iot
const iot_analytics_36_config = {
    id: 'iot_analytics_36',
    name: 'JunoNetwork',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junonetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_36_config);
export class IotAnalytics36Adapter extends GenericRestAdapter {
    config = iot_analytics_36_config;
    constructor(credentials) {
        super(iot_analytics_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_36', IotAnalytics36Adapter);
// UpliftPlatform Adapter [956]
// security solution for iot
const iot_security_37_config = {
    id: 'iot_security_37',
    name: 'UpliftPlatform',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_37_config);
export class IotSecurity37Adapter extends GenericRestAdapter {
    config = iot_security_37_config;
    constructor(credentials) {
        super(iot_security_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_37', IotSecurity37Adapter);
// RaptorHub Adapter [957]
// connectivity solution for iot
const iot_connectivity_38_config = {
    id: 'iot_connectivity_38',
    name: 'RaptorHub',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.raptorhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_38_config);
export class IotConnectivity38Adapter extends GenericRestAdapter {
    config = iot_connectivity_38_config;
    constructor(credentials) {
        super(iot_connectivity_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_38', IotConnectivity38Adapter);
// OnyxBase Adapter [958]
// platform solution for iot
const iot_platform_39_config = {
    id: 'iot_platform_39',
    name: 'OnyxBase',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_39_config);
export class IotPlatform39Adapter extends GenericRestAdapter {
    config = iot_platform_39_config;
    constructor(credentials) {
        super(iot_platform_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_39', IotPlatform39Adapter);
// RadiusNetwork Adapter [959]
// data solution for iot
const iot_data_40_config = {
    id: 'iot_data_40',
    name: 'RadiusNetwork',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.radiusnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_40_config);
export class IotData40Adapter extends GenericRestAdapter {
    config = iot_data_40_config;
    constructor(credentials) {
        super(iot_data_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_40', IotData40Adapter);
// BoltZone Adapter [960]
// device mgmt solution for iot
const iot_device_mgmt_41_config = {
    id: 'iot_device_mgmt_41',
    name: 'BoltZone',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_41_config);
export class IotDeviceMgmt41Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_41_config;
    constructor(credentials) {
        super(iot_device_mgmt_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_41', IotDeviceMgmt41Adapter);
// PrismStack Adapter [961]
// sensors solution for iot
const iot_sensors_42_config = {
    id: 'iot_sensors_42',
    name: 'PrismStack',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_42_config);
export class IotSensors42Adapter extends GenericRestAdapter {
    config = iot_sensors_42_config;
    constructor(credentials) {
        super(iot_sensors_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_42', IotSensors42Adapter);
// VertexFlow Adapter [962]
// edge solution for iot
const iot_edge_43_config = {
    id: 'iot_edge_43',
    name: 'VertexFlow',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_43_config);
export class IotEdge43Adapter extends GenericRestAdapter {
    config = iot_edge_43_config;
    constructor(credentials) {
        super(iot_edge_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_43', IotEdge43Adapter);
// ReachLogic Adapter [963]
// automation solution for iot
const iot_automation_44_config = {
    id: 'iot_automation_44',
    name: 'ReachLogic',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.reachlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_44_config);
export class IotAutomation44Adapter extends GenericRestAdapter {
    config = iot_automation_44_config;
    constructor(credentials) {
        super(iot_automation_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_44', IotAutomation44Adapter);
// LambdaHub Adapter [964]
// monitoring solution for iot
const iot_monitoring_45_config = {
    id: 'iot_monitoring_45',
    name: 'LambdaHub',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdahub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_45_config);
export class IotMonitoring45Adapter extends GenericRestAdapter {
    config = iot_monitoring_45_config;
    constructor(credentials) {
        super(iot_monitoring_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_45', IotMonitoring45Adapter);
// UpliftWorks Adapter [965]
// analytics solution for iot
const iot_analytics_46_config = {
    id: 'iot_analytics_46',
    name: 'UpliftWorks',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_46_config);
export class IotAnalytics46Adapter extends GenericRestAdapter {
    config = iot_analytics_46_config;
    constructor(credentials) {
        super(iot_analytics_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_46', IotAnalytics46Adapter);
// MetaFlow Adapter [966]
// security solution for iot
const iot_security_47_config = {
    id: 'iot_security_47',
    name: 'MetaFlow',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metaflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_47_config);
export class IotSecurity47Adapter extends GenericRestAdapter {
    config = iot_security_47_config;
    constructor(credentials) {
        super(iot_security_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_47', IotSecurity47Adapter);
// PivotLink Adapter [967]
// connectivity solution for iot
const iot_connectivity_48_config = {
    id: 'iot_connectivity_48',
    name: 'PivotLink',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_48_config);
export class IotConnectivity48Adapter extends GenericRestAdapter {
    config = iot_connectivity_48_config;
    constructor(credentials) {
        super(iot_connectivity_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_48', IotConnectivity48Adapter);
// MatrixData Adapter [968]
// platform solution for iot
const iot_platform_49_config = {
    id: 'iot_platform_49',
    name: 'MatrixData',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixdata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_49_config);
export class IotPlatform49Adapter extends GenericRestAdapter {
    config = iot_platform_49_config;
    constructor(credentials) {
        super(iot_platform_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_49', IotPlatform49Adapter);
// AcmeHub Adapter [969]
// data solution for iot
const iot_data_50_config = {
    id: 'iot_data_50',
    name: 'AcmeHub',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acmehub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_50_config);
export class IotData50Adapter extends GenericRestAdapter {
    config = iot_data_50_config;
    constructor(credentials) {
        super(iot_data_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_50', IotData50Adapter);
// LogicWorks Adapter [970]
// device mgmt solution for iot
const iot_device_mgmt_51_config = {
    id: 'iot_device_mgmt_51',
    name: 'LogicWorks',
    category: 'iot',
    description: 'device mgmt solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.logicworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_device_mgmt_51_config);
export class IotDeviceMgmt51Adapter extends GenericRestAdapter {
    config = iot_device_mgmt_51_config;
    constructor(credentials) {
        super(iot_device_mgmt_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_device_mgmt_51', IotDeviceMgmt51Adapter);
// VaultLogic Adapter [971]
// sensors solution for iot
const iot_sensors_52_config = {
    id: 'iot_sensors_52',
    name: 'VaultLogic',
    category: 'iot',
    description: 'sensors solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_sensors_52_config);
export class IotSensors52Adapter extends GenericRestAdapter {
    config = iot_sensors_52_config;
    constructor(credentials) {
        super(iot_sensors_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_sensors_52', IotSensors52Adapter);
// VortexFlow Adapter [972]
// edge solution for iot
const iot_edge_53_config = {
    id: 'iot_edge_53',
    name: 'VortexFlow',
    category: 'iot',
    description: 'edge solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vortexflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_edge_53_config);
export class IotEdge53Adapter extends GenericRestAdapter {
    config = iot_edge_53_config;
    constructor(credentials) {
        super(iot_edge_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_edge_53', IotEdge53Adapter);
// MetaHub Adapter [973]
// automation solution for iot
const iot_automation_54_config = {
    id: 'iot_automation_54',
    name: 'MetaHub',
    category: 'iot',
    description: 'automation solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metahub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_automation_54_config);
export class IotAutomation54Adapter extends GenericRestAdapter {
    config = iot_automation_54_config;
    constructor(credentials) {
        super(iot_automation_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_automation_54', IotAutomation54Adapter);
// CoreCore Adapter [974]
// monitoring solution for iot
const iot_monitoring_55_config = {
    id: 'iot_monitoring_55',
    name: 'CoreCore',
    category: 'iot',
    description: 'monitoring solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.corecore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_monitoring_55_config);
export class IotMonitoring55Adapter extends GenericRestAdapter {
    config = iot_monitoring_55_config;
    constructor(credentials) {
        super(iot_monitoring_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_monitoring_55', IotMonitoring55Adapter);
// FluxConnect Adapter [975]
// analytics solution for iot
const iot_analytics_56_config = {
    id: 'iot_analytics_56',
    name: 'FluxConnect',
    category: 'iot',
    description: 'analytics solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.fluxconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_analytics_56_config);
export class IotAnalytics56Adapter extends GenericRestAdapter {
    config = iot_analytics_56_config;
    constructor(credentials) {
        super(iot_analytics_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_analytics_56', IotAnalytics56Adapter);
// SolsticePath Adapter [976]
// security solution for iot
const iot_security_57_config = {
    id: 'iot_security_57',
    name: 'SolsticePath',
    category: 'iot',
    description: 'security solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticepath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_security_57_config);
export class IotSecurity57Adapter extends GenericRestAdapter {
    config = iot_security_57_config;
    constructor(credentials) {
        super(iot_security_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_security_57', IotSecurity57Adapter);
// EdgeCloud Adapter [977]
// connectivity solution for iot
const iot_connectivity_58_config = {
    id: 'iot_connectivity_58',
    name: 'EdgeCloud',
    category: 'iot',
    description: 'connectivity solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgecloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_connectivity_58_config);
export class IotConnectivity58Adapter extends GenericRestAdapter {
    config = iot_connectivity_58_config;
    constructor(credentials) {
        super(iot_connectivity_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_connectivity_58', IotConnectivity58Adapter);
// SparkCore Adapter [978]
// platform solution for iot
const iot_platform_59_config = {
    id: 'iot_platform_59',
    name: 'SparkCore',
    category: 'iot',
    description: 'platform solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_platform_59_config);
export class IotPlatform59Adapter extends GenericRestAdapter {
    config = iot_platform_59_config;
    constructor(credentials) {
        super(iot_platform_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_platform_59', IotPlatform59Adapter);
// HavenAI Adapter [979]
// data solution for iot
const iot_data_60_config = {
    id: 'iot_data_60',
    name: 'HavenAI',
    category: 'iot',
    description: 'data solution for iot',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havenai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(iot_data_60_config);
export class IotData60Adapter extends GenericRestAdapter {
    config = iot_data_60_config;
    constructor(credentials) {
        super(iot_data_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('iot_data_60', IotData60Adapter);
//# sourceMappingURL=iot.js.map