// Generated Adapters — government (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// EdgeLabs Adapter [1100]
// civic solution for government
const government_civic_1_config = {
    id: 'government_civic_1',
    name: 'EdgeLabs',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgelabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_1_config);
export class GovernmentCivic1Adapter extends GenericRestAdapter {
    config = government_civic_1_config;
    constructor(credentials) {
        super(government_civic_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_1', GovernmentCivic1Adapter);
// CoreFlow Adapter [1101]
// permits solution for government
const government_permits_2_config = {
    id: 'government_permits_2',
    name: 'CoreFlow',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.coreflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_2_config);
export class GovernmentPermits2Adapter extends GenericRestAdapter {
    config = government_permits_2_config;
    constructor(credentials) {
        super(government_permits_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_2', GovernmentPermits2Adapter);
// VortexWave Adapter [1102]
// tax solution for government
const government_tax_3_config = {
    id: 'government_tax_3',
    name: 'VortexWave',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vortexwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_3_config);
export class GovernmentTax3Adapter extends GenericRestAdapter {
    config = government_tax_3_config;
    constructor(credentials) {
        super(government_tax_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_3', GovernmentTax3Adapter);
// OmegaDigital Adapter [1103]
// public safety solution for government
const government_public_safety_4_config = {
    id: 'government_public_safety_4',
    name: 'OmegaDigital',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.omegadigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_4_config);
export class GovernmentPublicSafety4Adapter extends GenericRestAdapter {
    config = government_public_safety_4_config;
    constructor(credentials) {
        super(government_public_safety_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_4', GovernmentPublicSafety4Adapter);
// IonLabs Adapter [1104]
// transportation solution for government
const government_transportation_5_config = {
    id: 'government_transportation_5',
    name: 'IonLabs',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_5_config);
export class GovernmentTransportation5Adapter extends GenericRestAdapter {
    config = government_transportation_5_config;
    constructor(credentials) {
        super(government_transportation_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_5', GovernmentTransportation5Adapter);
// CraftCore Adapter [1105]
// health solution for government
const government_health_6_config = {
    id: 'government_health_6',
    name: 'CraftCore',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_6_config);
export class GovernmentHealth6Adapter extends GenericRestAdapter {
    config = government_health_6_config;
    constructor(credentials) {
        super(government_health_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_6', GovernmentHealth6Adapter);
// GlowAI Adapter [1106]
// education solution for government
const government_education_7_config = {
    id: 'government_education_7',
    name: 'GlowAI',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_7_config);
export class GovernmentEducation7Adapter extends GenericRestAdapter {
    config = government_education_7_config;
    constructor(credentials) {
        super(government_education_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_7', GovernmentEducation7Adapter);
// CraftWorks Adapter [1107]
// environment solution for government
const government_environment_8_config = {
    id: 'government_environment_8',
    name: 'CraftWorks',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_8_config);
export class GovernmentEnvironment8Adapter extends GenericRestAdapter {
    config = government_environment_8_config;
    constructor(credentials) {
        super(government_environment_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_8', GovernmentEnvironment8Adapter);
// SphereZone Adapter [1108]
// procurement solution for government
const government_procurement_9_config = {
    id: 'government_procurement_9',
    name: 'SphereZone',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.spherezone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_9_config);
export class GovernmentProcurement9Adapter extends GenericRestAdapter {
    config = government_procurement_9_config;
    constructor(credentials) {
        super(government_procurement_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_9', GovernmentProcurement9Adapter);
// Forge360 Adapter [1109]
// transparency solution for government
const government_transparency_10_config = {
    id: 'government_transparency_10',
    name: 'Forge360',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forge360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_10_config);
export class GovernmentTransparency10Adapter extends GenericRestAdapter {
    config = government_transparency_10_config;
    constructor(credentials) {
        super(government_transparency_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_10', GovernmentTransparency10Adapter);
// EchoPath Adapter [1110]
// civic solution for government
const government_civic_11_config = {
    id: 'government_civic_11',
    name: 'EchoPath',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echopath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_11_config);
export class GovernmentCivic11Adapter extends GenericRestAdapter {
    config = government_civic_11_config;
    constructor(credentials) {
        super(government_civic_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_11', GovernmentCivic11Adapter);
// KarmaWorks Adapter [1111]
// permits solution for government
const government_permits_12_config = {
    id: 'government_permits_12',
    name: 'KarmaWorks',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmaworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_12_config);
export class GovernmentPermits12Adapter extends GenericRestAdapter {
    config = government_permits_12_config;
    constructor(credentials) {
        super(government_permits_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_12', GovernmentPermits12Adapter);
// MeridianBase Adapter [1112]
// tax solution for government
const government_tax_13_config = {
    id: 'government_tax_13',
    name: 'MeridianBase',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_13_config);
export class GovernmentTax13Adapter extends GenericRestAdapter {
    config = government_tax_13_config;
    constructor(credentials) {
        super(government_tax_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_13', GovernmentTax13Adapter);
// MatrixOne Adapter [1113]
// public safety solution for government
const government_public_safety_14_config = {
    id: 'government_public_safety_14',
    name: 'MatrixOne',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_14_config);
export class GovernmentPublicSafety14Adapter extends GenericRestAdapter {
    config = government_public_safety_14_config;
    constructor(credentials) {
        super(government_public_safety_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_14', GovernmentPublicSafety14Adapter);
// PinnaclePoint Adapter [1114]
// transportation solution for government
const government_transportation_15_config = {
    id: 'government_transportation_15',
    name: 'PinnaclePoint',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnaclepoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_15_config);
export class GovernmentTransportation15Adapter extends GenericRestAdapter {
    config = government_transportation_15_config;
    constructor(credentials) {
        super(government_transportation_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_15', GovernmentTransportation15Adapter);
// HarborFlow Adapter [1115]
// health solution for government
const government_health_16_config = {
    id: 'government_health_16',
    name: 'HarborFlow',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.harborflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_16_config);
export class GovernmentHealth16Adapter extends GenericRestAdapter {
    config = government_health_16_config;
    constructor(credentials) {
        super(government_health_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_16', GovernmentHealth16Adapter);
// PrismConnect Adapter [1116]
// education solution for government
const government_education_17_config = {
    id: 'government_education_17',
    name: 'PrismConnect',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_17_config);
export class GovernmentEducation17Adapter extends GenericRestAdapter {
    config = government_education_17_config;
    constructor(credentials) {
        super(government_education_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_17', GovernmentEducation17Adapter);
// BeaconLink Adapter [1117]
// environment solution for government
const government_environment_18_config = {
    id: 'government_environment_18',
    name: 'BeaconLink',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_18_config);
export class GovernmentEnvironment18Adapter extends GenericRestAdapter {
    config = government_environment_18_config;
    constructor(credentials) {
        super(government_environment_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_18', GovernmentEnvironment18Adapter);
// ZeroCloud Adapter [1118]
// procurement solution for government
const government_procurement_19_config = {
    id: 'government_procurement_19',
    name: 'ZeroCloud',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zerocloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_19_config);
export class GovernmentProcurement19Adapter extends GenericRestAdapter {
    config = government_procurement_19_config;
    constructor(credentials) {
        super(government_procurement_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_19', GovernmentProcurement19Adapter);
// Synapse360 Adapter [1119]
// transparency solution for government
const government_transparency_20_config = {
    id: 'government_transparency_20',
    name: 'Synapse360',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.synapse360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_20_config);
export class GovernmentTransparency20Adapter extends GenericRestAdapter {
    config = government_transparency_20_config;
    constructor(credentials) {
        super(government_transparency_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_20', GovernmentTransparency20Adapter);
// RadiusSolutions Adapter [1120]
// civic solution for government
const government_civic_21_config = {
    id: 'government_civic_21',
    name: 'RadiusSolutions',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.radiussolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_21_config);
export class GovernmentCivic21Adapter extends GenericRestAdapter {
    config = government_civic_21_config;
    constructor(credentials) {
        super(government_civic_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_21', GovernmentCivic21Adapter);
// BoltLink Adapter [1121]
// permits solution for government
const government_permits_22_config = {
    id: 'government_permits_22',
    name: 'BoltLink',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_22_config);
export class GovernmentPermits22Adapter extends GenericRestAdapter {
    config = government_permits_22_config;
    constructor(credentials) {
        super(government_permits_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_22', GovernmentPermits22Adapter);
// PivotZone Adapter [1122]
// tax solution for government
const government_tax_23_config = {
    id: 'government_tax_23',
    name: 'PivotZone',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_23_config);
export class GovernmentTax23Adapter extends GenericRestAdapter {
    config = government_tax_23_config;
    constructor(credentials) {
        super(government_tax_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_23', GovernmentTax23Adapter);
// SpherePro Adapter [1123]
// public safety solution for government
const government_public_safety_24_config = {
    id: 'government_public_safety_24',
    name: 'SpherePro',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.spherepro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_24_config);
export class GovernmentPublicSafety24Adapter extends GenericRestAdapter {
    config = government_public_safety_24_config;
    constructor(credentials) {
        super(government_public_safety_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_24', GovernmentPublicSafety24Adapter);
// StratusWorks Adapter [1124]
// transportation solution for government
const government_transportation_25_config = {
    id: 'government_transportation_25',
    name: 'StratusWorks',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratusworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_25_config);
export class GovernmentTransportation25Adapter extends GenericRestAdapter {
    config = government_transportation_25_config;
    constructor(credentials) {
        super(government_transportation_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_25', GovernmentTransportation25Adapter);
// ShiftAI Adapter [1125]
// health solution for government
const government_health_26_config = {
    id: 'government_health_26',
    name: 'ShiftAI',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_26_config);
export class GovernmentHealth26Adapter extends GenericRestAdapter {
    config = government_health_26_config;
    constructor(credentials) {
        super(government_health_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_26', GovernmentHealth26Adapter);
// CrestPlatform Adapter [1126]
// education solution for government
const government_education_27_config = {
    id: 'government_education_27',
    name: 'CrestPlatform',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_27_config);
export class GovernmentEducation27Adapter extends GenericRestAdapter {
    config = government_education_27_config;
    constructor(credentials) {
        super(government_education_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_27', GovernmentEducation27Adapter);
// ReachLabs Adapter [1127]
// environment solution for government
const government_environment_28_config = {
    id: 'government_environment_28',
    name: 'ReachLabs',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.reachlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_28_config);
export class GovernmentEnvironment28Adapter extends GenericRestAdapter {
    config = government_environment_28_config;
    constructor(credentials) {
        super(government_environment_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_28', GovernmentEnvironment28Adapter);
// VaultMind Adapter [1128]
// procurement solution for government
const government_procurement_29_config = {
    id: 'government_procurement_29',
    name: 'VaultMind',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_29_config);
export class GovernmentProcurement29Adapter extends GenericRestAdapter {
    config = government_procurement_29_config;
    constructor(credentials) {
        super(government_procurement_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_29', GovernmentProcurement29Adapter);
// QuantumPlatform Adapter [1129]
// transparency solution for government
const government_transparency_30_config = {
    id: 'government_transparency_30',
    name: 'QuantumPlatform',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quantumplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_30_config);
export class GovernmentTransparency30Adapter extends GenericRestAdapter {
    config = government_transparency_30_config;
    constructor(credentials) {
        super(government_transparency_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_30', GovernmentTransparency30Adapter);
// CraftDigital Adapter [1130]
// civic solution for government
const government_civic_31_config = {
    id: 'government_civic_31',
    name: 'CraftDigital',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_31_config);
export class GovernmentCivic31Adapter extends GenericRestAdapter {
    config = government_civic_31_config;
    constructor(credentials) {
        super(government_civic_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_31', GovernmentCivic31Adapter);
// NovaMax Adapter [1131]
// permits solution for government
const government_permits_32_config = {
    id: 'government_permits_32',
    name: 'NovaMax',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novamax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_32_config);
export class GovernmentPermits32Adapter extends GenericRestAdapter {
    config = government_permits_32_config;
    constructor(credentials) {
        super(government_permits_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_32', GovernmentPermits32Adapter);
// PixelPath Adapter [1132]
// tax solution for government
const government_tax_33_config = {
    id: 'government_tax_33',
    name: 'PixelPath',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_33_config);
export class GovernmentTax33Adapter extends GenericRestAdapter {
    config = government_tax_33_config;
    constructor(credentials) {
        super(government_tax_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_33', GovernmentTax33Adapter);
// SwiftPath Adapter [1133]
// public safety solution for government
const government_public_safety_34_config = {
    id: 'government_public_safety_34',
    name: 'SwiftPath',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.swiftpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_34_config);
export class GovernmentPublicSafety34Adapter extends GenericRestAdapter {
    config = government_public_safety_34_config;
    constructor(credentials) {
        super(government_public_safety_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_34', GovernmentPublicSafety34Adapter);
// RiseConnect Adapter [1134]
// transportation solution for government
const government_transportation_35_config = {
    id: 'government_transportation_35',
    name: 'RiseConnect',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.riseconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_35_config);
export class GovernmentTransportation35Adapter extends GenericRestAdapter {
    config = government_transportation_35_config;
    constructor(credentials) {
        super(government_transportation_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_35', GovernmentTransportation35Adapter);
// LeverPlatform Adapter [1135]
// health solution for government
const government_health_36_config = {
    id: 'government_health_36',
    name: 'LeverPlatform',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_36_config);
export class GovernmentHealth36Adapter extends GenericRestAdapter {
    config = government_health_36_config;
    constructor(credentials) {
        super(government_health_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_36', GovernmentHealth36Adapter);
// TurboHub Adapter [1136]
// education solution for government
const government_education_37_config = {
    id: 'government_education_37',
    name: 'TurboHub',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.turbohub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_37_config);
export class GovernmentEducation37Adapter extends GenericRestAdapter {
    config = government_education_37_config;
    constructor(credentials) {
        super(government_education_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_37', GovernmentEducation37Adapter);
// RushWave Adapter [1137]
// environment solution for government
const government_environment_38_config = {
    id: 'government_environment_38',
    name: 'RushWave',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.rushwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_38_config);
export class GovernmentEnvironment38Adapter extends GenericRestAdapter {
    config = government_environment_38_config;
    constructor(credentials) {
        super(government_environment_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_38', GovernmentEnvironment38Adapter);
// PixelOne Adapter [1138]
// procurement solution for government
const government_procurement_39_config = {
    id: 'government_procurement_39',
    name: 'PixelOne',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_39_config);
export class GovernmentProcurement39Adapter extends GenericRestAdapter {
    config = government_procurement_39_config;
    constructor(credentials) {
        super(government_procurement_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_39', GovernmentProcurement39Adapter);
// QuestPlus Adapter [1139]
// transparency solution for government
const government_transparency_40_config = {
    id: 'government_transparency_40',
    name: 'QuestPlus',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_40_config);
export class GovernmentTransparency40Adapter extends GenericRestAdapter {
    config = government_transparency_40_config;
    constructor(credentials) {
        super(government_transparency_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_40', GovernmentTransparency40Adapter);
// HorizonSolutions Adapter [1140]
// civic solution for government
const government_civic_41_config = {
    id: 'government_civic_41',
    name: 'HorizonSolutions',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonsolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_41_config);
export class GovernmentCivic41Adapter extends GenericRestAdapter {
    config = government_civic_41_config;
    constructor(credentials) {
        super(government_civic_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_41', GovernmentCivic41Adapter);
// RiseDigital Adapter [1141]
// permits solution for government
const government_permits_42_config = {
    id: 'government_permits_42',
    name: 'RiseDigital',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.risedigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_42_config);
export class GovernmentPermits42Adapter extends GenericRestAdapter {
    config = government_permits_42_config;
    constructor(credentials) {
        super(government_permits_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_42', GovernmentPermits42Adapter);
// EmberSolutions Adapter [1142]
// tax solution for government
const government_tax_43_config = {
    id: 'government_tax_43',
    name: 'EmberSolutions',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.embersolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_43_config);
export class GovernmentTax43Adapter extends GenericRestAdapter {
    config = government_tax_43_config;
    constructor(credentials) {
        super(government_tax_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_43', GovernmentTax43Adapter);
// ParagonMax Adapter [1143]
// public safety solution for government
const government_public_safety_44_config = {
    id: 'government_public_safety_44',
    name: 'ParagonMax',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.paragonmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_44_config);
export class GovernmentPublicSafety44Adapter extends GenericRestAdapter {
    config = government_public_safety_44_config;
    constructor(credentials) {
        super(government_public_safety_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_44', GovernmentPublicSafety44Adapter);
// FlashHub Adapter [1144]
// transportation solution for government
const government_transportation_45_config = {
    id: 'government_transportation_45',
    name: 'FlashHub',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_45_config);
export class GovernmentTransportation45Adapter extends GenericRestAdapter {
    config = government_transportation_45_config;
    constructor(credentials) {
        super(government_transportation_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_45', GovernmentTransportation45Adapter);
// TurboWave Adapter [1145]
// health solution for government
const government_health_46_config = {
    id: 'government_health_46',
    name: 'TurboWave',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.turbowave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_46_config);
export class GovernmentHealth46Adapter extends GenericRestAdapter {
    config = government_health_46_config;
    constructor(credentials) {
        super(government_health_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_46', GovernmentHealth46Adapter);
// TangentMax Adapter [1146]
// education solution for government
const government_education_47_config = {
    id: 'government_education_47',
    name: 'TangentMax',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_47_config);
export class GovernmentEducation47Adapter extends GenericRestAdapter {
    config = government_education_47_config;
    constructor(credentials) {
        super(government_education_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_47', GovernmentEducation47Adapter);
// HulseMax Adapter [1147]
// environment solution for government
const government_environment_48_config = {
    id: 'government_environment_48',
    name: 'HulseMax',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hulsemax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_48_config);
export class GovernmentEnvironment48Adapter extends GenericRestAdapter {
    config = government_environment_48_config;
    constructor(credentials) {
        super(government_environment_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_48', GovernmentEnvironment48Adapter);
// ShiftLogic Adapter [1148]
// procurement solution for government
const government_procurement_49_config = {
    id: 'government_procurement_49',
    name: 'ShiftLogic',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_49_config);
export class GovernmentProcurement49Adapter extends GenericRestAdapter {
    config = government_procurement_49_config;
    constructor(credentials) {
        super(government_procurement_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_49', GovernmentProcurement49Adapter);
// HelixPlus Adapter [1149]
// transparency solution for government
const government_transparency_50_config = {
    id: 'government_transparency_50',
    name: 'HelixPlus',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.helixplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_50_config);
export class GovernmentTransparency50Adapter extends GenericRestAdapter {
    config = government_transparency_50_config;
    constructor(credentials) {
        super(government_transparency_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_50', GovernmentTransparency50Adapter);
// TitanCloud Adapter [1150]
// civic solution for government
const government_civic_51_config = {
    id: 'government_civic_51',
    name: 'TitanCloud',
    category: 'government',
    description: 'civic solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.titancloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_civic_51_config);
export class GovernmentCivic51Adapter extends GenericRestAdapter {
    config = government_civic_51_config;
    constructor(credentials) {
        super(government_civic_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_civic_51', GovernmentCivic51Adapter);
// TangentSolutions Adapter [1151]
// permits solution for government
const government_permits_52_config = {
    id: 'government_permits_52',
    name: 'TangentSolutions',
    category: 'government',
    description: 'permits solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentsolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_permits_52_config);
export class GovernmentPermits52Adapter extends GenericRestAdapter {
    config = government_permits_52_config;
    constructor(credentials) {
        super(government_permits_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_permits_52', GovernmentPermits52Adapter);
// SigmaPath Adapter [1152]
// tax solution for government
const government_tax_53_config = {
    id: 'government_tax_53',
    name: 'SigmaPath',
    category: 'government',
    description: 'tax solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sigmapath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_tax_53_config);
export class GovernmentTax53Adapter extends GenericRestAdapter {
    config = government_tax_53_config;
    constructor(credentials) {
        super(government_tax_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_tax_53', GovernmentTax53Adapter);
// MetaSolutions Adapter [1153]
// public safety solution for government
const government_public_safety_54_config = {
    id: 'government_public_safety_54',
    name: 'MetaSolutions',
    category: 'government',
    description: 'public safety solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metasolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_public_safety_54_config);
export class GovernmentPublicSafety54Adapter extends GenericRestAdapter {
    config = government_public_safety_54_config;
    constructor(credentials) {
        super(government_public_safety_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_public_safety_54', GovernmentPublicSafety54Adapter);
// ElevateDynamics Adapter [1154]
// transportation solution for government
const government_transportation_55_config = {
    id: 'government_transportation_55',
    name: 'ElevateDynamics',
    category: 'government',
    description: 'transportation solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatedynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transportation_55_config);
export class GovernmentTransportation55Adapter extends GenericRestAdapter {
    config = government_transportation_55_config;
    constructor(credentials) {
        super(government_transportation_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transportation_55', GovernmentTransportation55Adapter);
// VaultOne Adapter [1155]
// health solution for government
const government_health_56_config = {
    id: 'government_health_56',
    name: 'VaultOne',
    category: 'government',
    description: 'health solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_health_56_config);
export class GovernmentHealth56Adapter extends GenericRestAdapter {
    config = government_health_56_config;
    constructor(credentials) {
        super(government_health_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_health_56', GovernmentHealth56Adapter);
// LeverTechnologies Adapter [1156]
// education solution for government
const government_education_57_config = {
    id: 'government_education_57',
    name: 'LeverTechnologies',
    category: 'government',
    description: 'education solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.levertechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_education_57_config);
export class GovernmentEducation57Adapter extends GenericRestAdapter {
    config = government_education_57_config;
    constructor(credentials) {
        super(government_education_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_education_57', GovernmentEducation57Adapter);
// ShiftWorks Adapter [1157]
// environment solution for government
const government_environment_58_config = {
    id: 'government_environment_58',
    name: 'ShiftWorks',
    category: 'government',
    description: 'environment solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_environment_58_config);
export class GovernmentEnvironment58Adapter extends GenericRestAdapter {
    config = government_environment_58_config;
    constructor(credentials) {
        super(government_environment_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_environment_58', GovernmentEnvironment58Adapter);
// KineticCore Adapter [1158]
// procurement solution for government
const government_procurement_59_config = {
    id: 'government_procurement_59',
    name: 'KineticCore',
    category: 'government',
    description: 'procurement solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_procurement_59_config);
export class GovernmentProcurement59Adapter extends GenericRestAdapter {
    config = government_procurement_59_config;
    constructor(credentials) {
        super(government_procurement_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_procurement_59', GovernmentProcurement59Adapter);
// KineticAI Adapter [1159]
// transparency solution for government
const government_transparency_60_config = {
    id: 'government_transparency_60',
    name: 'KineticAI',
    category: 'government',
    description: 'transparency solution for government',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(government_transparency_60_config);
export class GovernmentTransparency60Adapter extends GenericRestAdapter {
    config = government_transparency_60_config;
    constructor(credentials) {
        super(government_transparency_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('government_transparency_60', GovernmentTransparency60Adapter);
//# sourceMappingURL=government.js.map