// Generated Adapters — hr (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// PixelSolutions Adapter [380]
// recruiting solution for hr
const hr_recruiting_1_config = {
    id: 'hr_recruiting_1',
    name: 'PixelSolutions',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelsolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_1_config);
export class HrRecruiting1Adapter extends GenericRestAdapter {
    config = hr_recruiting_1_config;
    constructor(credentials) {
        super(hr_recruiting_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_1', HrRecruiting1Adapter);
// DeltaFlow Adapter [381]
// onboarding solution for hr
const hr_onboarding_2_config = {
    id: 'hr_onboarding_2',
    name: 'DeltaFlow',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltaflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_2_config);
export class HrOnboarding2Adapter extends GenericRestAdapter {
    config = hr_onboarding_2_config;
    constructor(credentials) {
        super(hr_onboarding_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_2', HrOnboarding2Adapter);
// BeaconDigital Adapter [382]
// performance solution for hr
const hr_performance_3_config = {
    id: 'hr_performance_3',
    name: 'BeaconDigital',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beacondigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_3_config);
export class HrPerformance3Adapter extends GenericRestAdapter {
    config = hr_performance_3_config;
    constructor(credentials) {
        super(hr_performance_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_3', HrPerformance3Adapter);
// ElevateZone Adapter [383]
// payroll solution for hr
const hr_payroll_4_config = {
    id: 'hr_payroll_4',
    name: 'ElevateZone',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatezone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_4_config);
export class HrPayroll4Adapter extends GenericRestAdapter {
    config = hr_payroll_4_config;
    constructor(credentials) {
        super(hr_payroll_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_4', HrPayroll4Adapter);
// PulseConnect Adapter [384]
// benefits solution for hr
const hr_benefits_5_config = {
    id: 'hr_benefits_5',
    name: 'PulseConnect',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pulseconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_5_config);
export class HrBenefits5Adapter extends GenericRestAdapter {
    config = hr_benefits_5_config;
    constructor(credentials) {
        super(hr_benefits_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_5', HrBenefits5Adapter);
// CipherLabs Adapter [385]
// time tracking solution for hr
const hr_time_tracking_6_config = {
    id: 'hr_time_tracking_6',
    name: 'CipherLabs',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cipherlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_6_config);
export class HrTimeTracking6Adapter extends GenericRestAdapter {
    config = hr_time_tracking_6_config;
    constructor(credentials) {
        super(hr_time_tracking_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_6', HrTimeTracking6Adapter);
// MetaMax Adapter [386]
// engagement solution for hr
const hr_engagement_7_config = {
    id: 'hr_engagement_7',
    name: 'MetaMax',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metamax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_7_config);
export class HrEngagement7Adapter extends GenericRestAdapter {
    config = hr_engagement_7_config;
    constructor(credentials) {
        super(hr_engagement_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_7', HrEngagement7Adapter);
// ZestSoftware Adapter [387]
// learning solution for hr
const hr_learning_8_config = {
    id: 'hr_learning_8',
    name: 'ZestSoftware',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_8_config);
export class HrLearning8Adapter extends GenericRestAdapter {
    config = hr_learning_8_config;
    constructor(credentials) {
        super(hr_learning_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_8', HrLearning8Adapter);
// CatalystMind Adapter [388]
// workforce solution for hr
const hr_workforce_9_config = {
    id: 'hr_workforce_9',
    name: 'CatalystMind',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.catalystmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_9_config);
export class HrWorkforce9Adapter extends GenericRestAdapter {
    config = hr_workforce_9_config;
    constructor(credentials) {
        super(hr_workforce_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_9', HrWorkforce9Adapter);
// NexusDynamics Adapter [389]
// analytics solution for hr
const hr_analytics_10_config = {
    id: 'hr_analytics_10',
    name: 'NexusDynamics',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexusdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_10_config);
export class HrAnalytics10Adapter extends GenericRestAdapter {
    config = hr_analytics_10_config;
    constructor(credentials) {
        super(hr_analytics_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_10', HrAnalytics10Adapter);
// KineticDigital Adapter [390]
// recruiting solution for hr
const hr_recruiting_11_config = {
    id: 'hr_recruiting_11',
    name: 'KineticDigital',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_11_config);
export class HrRecruiting11Adapter extends GenericRestAdapter {
    config = hr_recruiting_11_config;
    constructor(credentials) {
        super(hr_recruiting_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_11', HrRecruiting11Adapter);
// RippleForce Adapter [391]
// onboarding solution for hr
const hr_onboarding_12_config = {
    id: 'hr_onboarding_12',
    name: 'RippleForce',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.rippleforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_12_config);
export class HrOnboarding12Adapter extends GenericRestAdapter {
    config = hr_onboarding_12_config;
    constructor(credentials) {
        super(hr_onboarding_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_12', HrOnboarding12Adapter);
// LogicForce Adapter [392]
// performance solution for hr
const hr_performance_13_config = {
    id: 'hr_performance_13',
    name: 'LogicForce',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.logicforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_13_config);
export class HrPerformance13Adapter extends GenericRestAdapter {
    config = hr_performance_13_config;
    constructor(credentials) {
        super(hr_performance_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_13', HrPerformance13Adapter);
// ZenithLink Adapter [393]
// payroll solution for hr
const hr_payroll_14_config = {
    id: 'hr_payroll_14',
    name: 'ZenithLink',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_14_config);
export class HrPayroll14Adapter extends GenericRestAdapter {
    config = hr_payroll_14_config;
    constructor(credentials) {
        super(hr_payroll_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_14', HrPayroll14Adapter);
// TraxWorks Adapter [394]
// benefits solution for hr
const hr_benefits_15_config = {
    id: 'hr_benefits_15',
    name: 'TraxWorks',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_15_config);
export class HrBenefits15Adapter extends GenericRestAdapter {
    config = hr_benefits_15_config;
    constructor(credentials) {
        super(hr_benefits_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_15', HrBenefits15Adapter);
// VaultCore Adapter [395]
// time tracking solution for hr
const hr_time_tracking_16_config = {
    id: 'hr_time_tracking_16',
    name: 'VaultCore',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_16_config);
export class HrTimeTracking16Adapter extends GenericRestAdapter {
    config = hr_time_tracking_16_config;
    constructor(credentials) {
        super(hr_time_tracking_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_16', HrTimeTracking16Adapter);
// CatalystForce Adapter [396]
// engagement solution for hr
const hr_engagement_17_config = {
    id: 'hr_engagement_17',
    name: 'CatalystForce',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.catalystforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_17_config);
export class HrEngagement17Adapter extends GenericRestAdapter {
    config = hr_engagement_17_config;
    constructor(credentials) {
        super(hr_engagement_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_17', HrEngagement17Adapter);
// VaultPro Adapter [397]
// learning solution for hr
const hr_learning_18_config = {
    id: 'hr_learning_18',
    name: 'VaultPro',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_18_config);
export class HrLearning18Adapter extends GenericRestAdapter {
    config = hr_learning_18_config;
    constructor(credentials) {
        super(hr_learning_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_18', HrLearning18Adapter);
// VaultTechnologies Adapter [398]
// workforce solution for hr
const hr_workforce_19_config = {
    id: 'hr_workforce_19',
    name: 'VaultTechnologies',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaulttechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_19_config);
export class HrWorkforce19Adapter extends GenericRestAdapter {
    config = hr_workforce_19_config;
    constructor(credentials) {
        super(hr_workforce_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_19', HrWorkforce19Adapter);
// LogicPro Adapter [399]
// analytics solution for hr
const hr_analytics_20_config = {
    id: 'hr_analytics_20',
    name: 'LogicPro',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.logicpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_20_config);
export class HrAnalytics20Adapter extends GenericRestAdapter {
    config = hr_analytics_20_config;
    constructor(credentials) {
        super(hr_analytics_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_20', HrAnalytics20Adapter);
// SigmaTechnologies Adapter [400]
// recruiting solution for hr
const hr_recruiting_21_config = {
    id: 'hr_recruiting_21',
    name: 'SigmaTechnologies',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sigmatechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_21_config);
export class HrRecruiting21Adapter extends GenericRestAdapter {
    config = hr_recruiting_21_config;
    constructor(credentials) {
        super(hr_recruiting_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_21', HrRecruiting21Adapter);
// CloudPoint Adapter [401]
// onboarding solution for hr
const hr_onboarding_22_config = {
    id: 'hr_onboarding_22',
    name: 'CloudPoint',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cloudpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_22_config);
export class HrOnboarding22Adapter extends GenericRestAdapter {
    config = hr_onboarding_22_config;
    constructor(credentials) {
        super(hr_onboarding_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_22', HrOnboarding22Adapter);
// ForgeMax Adapter [402]
// performance solution for hr
const hr_performance_23_config = {
    id: 'hr_performance_23',
    name: 'ForgeMax',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgemax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_23_config);
export class HrPerformance23Adapter extends GenericRestAdapter {
    config = hr_performance_23_config;
    constructor(credentials) {
        super(hr_performance_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_23', HrPerformance23Adapter);
// FluxTechnologies Adapter [403]
// payroll solution for hr
const hr_payroll_24_config = {
    id: 'hr_payroll_24',
    name: 'FluxTechnologies',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.fluxtechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_24_config);
export class HrPayroll24Adapter extends GenericRestAdapter {
    config = hr_payroll_24_config;
    constructor(credentials) {
        super(hr_payroll_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_24', HrPayroll24Adapter);
// WaveWorks Adapter [404]
// benefits solution for hr
const hr_benefits_25_config = {
    id: 'hr_benefits_25',
    name: 'WaveWorks',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.waveworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_25_config);
export class HrBenefits25Adapter extends GenericRestAdapter {
    config = hr_benefits_25_config;
    constructor(credentials) {
        super(hr_benefits_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_25', HrBenefits25Adapter);
// ApexZone Adapter [405]
// time tracking solution for hr
const hr_time_tracking_26_config = {
    id: 'hr_time_tracking_26',
    name: 'ApexZone',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_26_config);
export class HrTimeTracking26Adapter extends GenericRestAdapter {
    config = hr_time_tracking_26_config;
    constructor(credentials) {
        super(hr_time_tracking_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_26', HrTimeTracking26Adapter);
// LogicPoint Adapter [406]
// engagement solution for hr
const hr_engagement_27_config = {
    id: 'hr_engagement_27',
    name: 'LogicPoint',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.logicpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_27_config);
export class HrEngagement27Adapter extends GenericRestAdapter {
    config = hr_engagement_27_config;
    constructor(credentials) {
        super(hr_engagement_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_27', HrEngagement27Adapter);
// GridCore Adapter [407]
// learning solution for hr
const hr_learning_28_config = {
    id: 'hr_learning_28',
    name: 'GridCore',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.gridcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_28_config);
export class HrLearning28Adapter extends GenericRestAdapter {
    config = hr_learning_28_config;
    constructor(credentials) {
        super(hr_learning_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_28', HrLearning28Adapter);
// VividLogic Adapter [408]
// workforce solution for hr
const hr_workforce_29_config = {
    id: 'hr_workforce_29',
    name: 'VividLogic',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vividlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_29_config);
export class HrWorkforce29Adapter extends GenericRestAdapter {
    config = hr_workforce_29_config;
    constructor(credentials) {
        super(hr_workforce_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_29', HrWorkforce29Adapter);
// PrismAI Adapter [409]
// analytics solution for hr
const hr_analytics_30_config = {
    id: 'hr_analytics_30',
    name: 'PrismAI',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_30_config);
export class HrAnalytics30Adapter extends GenericRestAdapter {
    config = hr_analytics_30_config;
    constructor(credentials) {
        super(hr_analytics_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_30', HrAnalytics30Adapter);
// PulseWorks Adapter [410]
// recruiting solution for hr
const hr_recruiting_31_config = {
    id: 'hr_recruiting_31',
    name: 'PulseWorks',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pulseworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_31_config);
export class HrRecruiting31Adapter extends GenericRestAdapter {
    config = hr_recruiting_31_config;
    constructor(credentials) {
        super(hr_recruiting_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_31', HrRecruiting31Adapter);
// MatrixCloud Adapter [411]
// onboarding solution for hr
const hr_onboarding_32_config = {
    id: 'hr_onboarding_32',
    name: 'MatrixCloud',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_32_config);
export class HrOnboarding32Adapter extends GenericRestAdapter {
    config = hr_onboarding_32_config;
    constructor(credentials) {
        super(hr_onboarding_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_32', HrOnboarding32Adapter);
// GridPlatform Adapter [412]
// performance solution for hr
const hr_performance_33_config = {
    id: 'hr_performance_33',
    name: 'GridPlatform',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.gridplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_33_config);
export class HrPerformance33Adapter extends GenericRestAdapter {
    config = hr_performance_33_config;
    constructor(credentials) {
        super(hr_performance_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_33', HrPerformance33Adapter);
// TangentWave Adapter [413]
// payroll solution for hr
const hr_payroll_34_config = {
    id: 'hr_payroll_34',
    name: 'TangentWave',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_34_config);
export class HrPayroll34Adapter extends GenericRestAdapter {
    config = hr_payroll_34_config;
    constructor(credentials) {
        super(hr_payroll_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_34', HrPayroll34Adapter);
// BoltNetwork Adapter [414]
// benefits solution for hr
const hr_benefits_35_config = {
    id: 'hr_benefits_35',
    name: 'BoltNetwork',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_35_config);
export class HrBenefits35Adapter extends GenericRestAdapter {
    config = hr_benefits_35_config;
    constructor(credentials) {
        super(hr_benefits_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_35', HrBenefits35Adapter);
// PivotCore Adapter [415]
// time tracking solution for hr
const hr_time_tracking_36_config = {
    id: 'hr_time_tracking_36',
    name: 'PivotCore',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_36_config);
export class HrTimeTracking36Adapter extends GenericRestAdapter {
    config = hr_time_tracking_36_config;
    constructor(credentials) {
        super(hr_time_tracking_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_36', HrTimeTracking36Adapter);
// Uplift360 Adapter [416]
// engagement solution for hr
const hr_engagement_37_config = {
    id: 'hr_engagement_37',
    name: 'Uplift360',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.uplift360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_37_config);
export class HrEngagement37Adapter extends GenericRestAdapter {
    config = hr_engagement_37_config;
    constructor(credentials) {
        super(hr_engagement_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_37', HrEngagement37Adapter);
// PixelBase Adapter [417]
// learning solution for hr
const hr_learning_38_config = {
    id: 'hr_learning_38',
    name: 'PixelBase',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_38_config);
export class HrLearning38Adapter extends GenericRestAdapter {
    config = hr_learning_38_config;
    constructor(credentials) {
        super(hr_learning_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_38', HrLearning38Adapter);
// QuasarWave Adapter [418]
// workforce solution for hr
const hr_workforce_39_config = {
    id: 'hr_workforce_39',
    name: 'QuasarWave',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quasarwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_39_config);
export class HrWorkforce39Adapter extends GenericRestAdapter {
    config = hr_workforce_39_config;
    constructor(credentials) {
        super(hr_workforce_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_39', HrWorkforce39Adapter);
// MatrixTechnologies Adapter [419]
// analytics solution for hr
const hr_analytics_40_config = {
    id: 'hr_analytics_40',
    name: 'MatrixTechnologies',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixtechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_40_config);
export class HrAnalytics40Adapter extends GenericRestAdapter {
    config = hr_analytics_40_config;
    constructor(credentials) {
        super(hr_analytics_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_40', HrAnalytics40Adapter);
// VividFlow Adapter [420]
// recruiting solution for hr
const hr_recruiting_41_config = {
    id: 'hr_recruiting_41',
    name: 'VividFlow',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vividflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_41_config);
export class HrRecruiting41Adapter extends GenericRestAdapter {
    config = hr_recruiting_41_config;
    constructor(credentials) {
        super(hr_recruiting_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_41', HrRecruiting41Adapter);
// RippleSoftware Adapter [421]
// onboarding solution for hr
const hr_onboarding_42_config = {
    id: 'hr_onboarding_42',
    name: 'RippleSoftware',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ripplesoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_42_config);
export class HrOnboarding42Adapter extends GenericRestAdapter {
    config = hr_onboarding_42_config;
    constructor(credentials) {
        super(hr_onboarding_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_42', HrOnboarding42Adapter);
// PeakPro Adapter [422]
// performance solution for hr
const hr_performance_43_config = {
    id: 'hr_performance_43',
    name: 'PeakPro',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.peakpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_43_config);
export class HrPerformance43Adapter extends GenericRestAdapter {
    config = hr_performance_43_config;
    constructor(credentials) {
        super(hr_performance_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_43', HrPerformance43Adapter);
// SphereZone Adapter [423]
// payroll solution for hr
const hr_payroll_44_config = {
    id: 'hr_payroll_44',
    name: 'SphereZone',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.spherezone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_44_config);
export class HrPayroll44Adapter extends GenericRestAdapter {
    config = hr_payroll_44_config;
    constructor(credentials) {
        super(hr_payroll_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_44', HrPayroll44Adapter);
// MeridianPro Adapter [424]
// benefits solution for hr
const hr_benefits_45_config = {
    id: 'hr_benefits_45',
    name: 'MeridianPro',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianpro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_45_config);
export class HrBenefits45Adapter extends GenericRestAdapter {
    config = hr_benefits_45_config;
    constructor(credentials) {
        super(hr_benefits_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_45', HrBenefits45Adapter);
// DriftDigital Adapter [425]
// time tracking solution for hr
const hr_time_tracking_46_config = {
    id: 'hr_time_tracking_46',
    name: 'DriftDigital',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.driftdigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_46_config);
export class HrTimeTracking46Adapter extends GenericRestAdapter {
    config = hr_time_tracking_46_config;
    constructor(credentials) {
        super(hr_time_tracking_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_46', HrTimeTracking46Adapter);
// LumenPlatform Adapter [426]
// engagement solution for hr
const hr_engagement_47_config = {
    id: 'hr_engagement_47',
    name: 'LumenPlatform',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumenplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_47_config);
export class HrEngagement47Adapter extends GenericRestAdapter {
    config = hr_engagement_47_config;
    constructor(credentials) {
        super(hr_engagement_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_47', HrEngagement47Adapter);
// MatrixMind Adapter [427]
// learning solution for hr
const hr_learning_48_config = {
    id: 'hr_learning_48',
    name: 'MatrixMind',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_48_config);
export class HrLearning48Adapter extends GenericRestAdapter {
    config = hr_learning_48_config;
    constructor(credentials) {
        super(hr_learning_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_48', HrLearning48Adapter);
// LumenForce Adapter [428]
// workforce solution for hr
const hr_workforce_49_config = {
    id: 'hr_workforce_49',
    name: 'LumenForce',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumenforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_49_config);
export class HrWorkforce49Adapter extends GenericRestAdapter {
    config = hr_workforce_49_config;
    constructor(credentials) {
        super(hr_workforce_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_49', HrWorkforce49Adapter);
// MeridianWorks Adapter [429]
// analytics solution for hr
const hr_analytics_50_config = {
    id: 'hr_analytics_50',
    name: 'MeridianWorks',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_50_config);
export class HrAnalytics50Adapter extends GenericRestAdapter {
    config = hr_analytics_50_config;
    constructor(credentials) {
        super(hr_analytics_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_50', HrAnalytics50Adapter);
// VectorMax Adapter [430]
// recruiting solution for hr
const hr_recruiting_51_config = {
    id: 'hr_recruiting_51',
    name: 'VectorMax',
    category: 'hr',
    description: 'recruiting solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vectormax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_recruiting_51_config);
export class HrRecruiting51Adapter extends GenericRestAdapter {
    config = hr_recruiting_51_config;
    constructor(credentials) {
        super(hr_recruiting_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_recruiting_51', HrRecruiting51Adapter);
// QuantumCloud Adapter [431]
// onboarding solution for hr
const hr_onboarding_52_config = {
    id: 'hr_onboarding_52',
    name: 'QuantumCloud',
    category: 'hr',
    description: 'onboarding solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quantumcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_onboarding_52_config);
export class HrOnboarding52Adapter extends GenericRestAdapter {
    config = hr_onboarding_52_config;
    constructor(credentials) {
        super(hr_onboarding_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_onboarding_52', HrOnboarding52Adapter);
// NovaSolutions Adapter [432]
// performance solution for hr
const hr_performance_53_config = {
    id: 'hr_performance_53',
    name: 'NovaSolutions',
    category: 'hr',
    description: 'performance solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novasolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_performance_53_config);
export class HrPerformance53Adapter extends GenericRestAdapter {
    config = hr_performance_53_config;
    constructor(credentials) {
        super(hr_performance_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_performance_53', HrPerformance53Adapter);
// EdgeWorks Adapter [433]
// payroll solution for hr
const hr_payroll_54_config = {
    id: 'hr_payroll_54',
    name: 'EdgeWorks',
    category: 'hr',
    description: 'payroll solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgeworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_payroll_54_config);
export class HrPayroll54Adapter extends GenericRestAdapter {
    config = hr_payroll_54_config;
    constructor(credentials) {
        super(hr_payroll_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_payroll_54', HrPayroll54Adapter);
// GlowAI Adapter [434]
// benefits solution for hr
const hr_benefits_55_config = {
    id: 'hr_benefits_55',
    name: 'GlowAI',
    category: 'hr',
    description: 'benefits solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_benefits_55_config);
export class HrBenefits55Adapter extends GenericRestAdapter {
    config = hr_benefits_55_config;
    constructor(credentials) {
        super(hr_benefits_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_benefits_55', HrBenefits55Adapter);
// VaultMind Adapter [435]
// time tracking solution for hr
const hr_time_tracking_56_config = {
    id: 'hr_time_tracking_56',
    name: 'VaultMind',
    category: 'hr',
    description: 'time tracking solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_time_tracking_56_config);
export class HrTimeTracking56Adapter extends GenericRestAdapter {
    config = hr_time_tracking_56_config;
    constructor(credentials) {
        super(hr_time_tracking_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_time_tracking_56', HrTimeTracking56Adapter);
// TangentLogic Adapter [436]
// engagement solution for hr
const hr_engagement_57_config = {
    id: 'hr_engagement_57',
    name: 'TangentLogic',
    category: 'hr',
    description: 'engagement solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.tangentlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_engagement_57_config);
export class HrEngagement57Adapter extends GenericRestAdapter {
    config = hr_engagement_57_config;
    constructor(credentials) {
        super(hr_engagement_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_engagement_57', HrEngagement57Adapter);
// BraveCore Adapter [437]
// learning solution for hr
const hr_learning_58_config = {
    id: 'hr_learning_58',
    name: 'BraveCore',
    category: 'hr',
    description: 'learning solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.bravecore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_learning_58_config);
export class HrLearning58Adapter extends GenericRestAdapter {
    config = hr_learning_58_config;
    constructor(credentials) {
        super(hr_learning_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_learning_58', HrLearning58Adapter);
// IonConnect Adapter [438]
// workforce solution for hr
const hr_workforce_59_config = {
    id: 'hr_workforce_59',
    name: 'IonConnect',
    category: 'hr',
    description: 'workforce solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ionconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_workforce_59_config);
export class HrWorkforce59Adapter extends GenericRestAdapter {
    config = hr_workforce_59_config;
    constructor(credentials) {
        super(hr_workforce_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_workforce_59', HrWorkforce59Adapter);
// VividDynamics Adapter [439]
// analytics solution for hr
const hr_analytics_60_config = {
    id: 'hr_analytics_60',
    name: 'VividDynamics',
    category: 'hr',
    description: 'analytics solution for hr',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vividdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(hr_analytics_60_config);
export class HrAnalytics60Adapter extends GenericRestAdapter {
    config = hr_analytics_60_config;
    constructor(credentials) {
        super(hr_analytics_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('hr_analytics_60', HrAnalytics60Adapter);
//# sourceMappingURL=hr.js.map