// Generated Adapters — nonprofit (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// EchoPoint Adapter [1040]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_1_config = {
    id: 'nonprofit_donor_mgmt_1',
    name: 'EchoPoint',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echopoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_1_config);
export class NonprofitDonorMgmt1Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_1_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_1', NonprofitDonorMgmt1Adapter);
// PhaseSolutions Adapter [1041]
// volunteer solution for nonprofit
const nonprofit_volunteer_2_config = {
    id: 'nonprofit_volunteer_2',
    name: 'PhaseSolutions',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.phasesolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_2_config);
export class NonprofitVolunteer2Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_2_config;
    constructor(credentials) {
        super(nonprofit_volunteer_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_2', NonprofitVolunteer2Adapter);
// SphereSolutions Adapter [1042]
// fundraising solution for nonprofit
const nonprofit_fundraising_3_config = {
    id: 'nonprofit_fundraising_3',
    name: 'SphereSolutions',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.spheresolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_3_config);
export class NonprofitFundraising3Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_3_config;
    constructor(credentials) {
        super(nonprofit_fundraising_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_3', NonprofitFundraising3Adapter);
// ForgePath Adapter [1043]
// grant solution for nonprofit
const nonprofit_grant_4_config = {
    id: 'nonprofit_grant_4',
    name: 'ForgePath',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgepath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_4_config);
export class NonprofitGrant4Adapter extends GenericRestAdapter {
    config = nonprofit_grant_4_config;
    constructor(credentials) {
        super(nonprofit_grant_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_4', NonprofitGrant4Adapter);
// GlowAI Adapter [1044]
// membership solution for nonprofit
const nonprofit_membership_5_config = {
    id: 'nonprofit_membership_5',
    name: 'GlowAI',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_5_config);
export class NonprofitMembership5Adapter extends GenericRestAdapter {
    config = nonprofit_membership_5_config;
    constructor(credentials) {
        super(nonprofit_membership_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_5', NonprofitMembership5Adapter);
// Beacon360 Adapter [1045]
// events solution for nonprofit
const nonprofit_events_6_config = {
    id: 'nonprofit_events_6',
    name: 'Beacon360',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beacon360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_6_config);
export class NonprofitEvents6Adapter extends GenericRestAdapter {
    config = nonprofit_events_6_config;
    constructor(credentials) {
        super(nonprofit_events_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_6', NonprofitEvents6Adapter);
// RippleLink Adapter [1046]
// advocacy solution for nonprofit
const nonprofit_advocacy_7_config = {
    id: 'nonprofit_advocacy_7',
    name: 'RippleLink',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ripplelink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_7_config);
export class NonprofitAdvocacy7Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_7_config;
    constructor(credentials) {
        super(nonprofit_advocacy_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_7', NonprofitAdvocacy7Adapter);
// SynapseOne Adapter [1047]
// outreach solution for nonprofit
const nonprofit_outreach_8_config = {
    id: 'nonprofit_outreach_8',
    name: 'SynapseOne',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.synapseone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_8_config);
export class NonprofitOutreach8Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_8_config;
    constructor(credentials) {
        super(nonprofit_outreach_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_8', NonprofitOutreach8Adapter);
// ZenithWave Adapter [1048]
// reporting solution for nonprofit
const nonprofit_reporting_9_config = {
    id: 'nonprofit_reporting_9',
    name: 'ZenithWave',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_9_config);
export class NonprofitReporting9Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_9_config;
    constructor(credentials) {
        super(nonprofit_reporting_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_9', NonprofitReporting9Adapter);
// TorchMind Adapter [1049]
// campaign solution for nonprofit
const nonprofit_campaign_10_config = {
    id: 'nonprofit_campaign_10',
    name: 'TorchMind',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.torchmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_10_config);
export class NonprofitCampaign10Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_10_config;
    constructor(credentials) {
        super(nonprofit_campaign_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_10', NonprofitCampaign10Adapter);
// ZestWorks Adapter [1050]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_11_config = {
    id: 'nonprofit_donor_mgmt_11',
    name: 'ZestWorks',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_11_config);
export class NonprofitDonorMgmt11Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_11_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_11', NonprofitDonorMgmt11Adapter);
// CoreLink Adapter [1051]
// volunteer solution for nonprofit
const nonprofit_volunteer_12_config = {
    id: 'nonprofit_volunteer_12',
    name: 'CoreLink',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.corelink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_12_config);
export class NonprofitVolunteer12Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_12_config;
    constructor(credentials) {
        super(nonprofit_volunteer_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_12', NonprofitVolunteer12Adapter);
// HarborLogic Adapter [1052]
// fundraising solution for nonprofit
const nonprofit_fundraising_13_config = {
    id: 'nonprofit_fundraising_13',
    name: 'HarborLogic',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.harborlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_13_config);
export class NonprofitFundraising13Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_13_config;
    constructor(credentials) {
        super(nonprofit_fundraising_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_13', NonprofitFundraising13Adapter);
// HorizonAI Adapter [1053]
// grant solution for nonprofit
const nonprofit_grant_14_config = {
    id: 'nonprofit_grant_14',
    name: 'HorizonAI',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_14_config);
export class NonprofitGrant14Adapter extends GenericRestAdapter {
    config = nonprofit_grant_14_config;
    constructor(credentials) {
        super(nonprofit_grant_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_14', NonprofitGrant14Adapter);
// SigmaData Adapter [1054]
// membership solution for nonprofit
const nonprofit_membership_15_config = {
    id: 'nonprofit_membership_15',
    name: 'SigmaData',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sigmadata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_15_config);
export class NonprofitMembership15Adapter extends GenericRestAdapter {
    config = nonprofit_membership_15_config;
    constructor(credentials) {
        super(nonprofit_membership_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_15', NonprofitMembership15Adapter);
// ZestLink Adapter [1055]
// events solution for nonprofit
const nonprofit_events_16_config = {
    id: 'nonprofit_events_16',
    name: 'ZestLink',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_16_config);
export class NonprofitEvents16Adapter extends GenericRestAdapter {
    config = nonprofit_events_16_config;
    constructor(credentials) {
        super(nonprofit_events_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_16', NonprofitEvents16Adapter);
// MaverickFlow Adapter [1056]
// advocacy solution for nonprofit
const nonprofit_advocacy_17_config = {
    id: 'nonprofit_advocacy_17',
    name: 'MaverickFlow',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_17_config);
export class NonprofitAdvocacy17Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_17_config;
    constructor(credentials) {
        super(nonprofit_advocacy_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_17', NonprofitAdvocacy17Adapter);
// KarmaFlow Adapter [1057]
// outreach solution for nonprofit
const nonprofit_outreach_18_config = {
    id: 'nonprofit_outreach_18',
    name: 'KarmaFlow',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.karmaflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_18_config);
export class NonprofitOutreach18Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_18_config;
    constructor(credentials) {
        super(nonprofit_outreach_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_18', NonprofitOutreach18Adapter);
// VectorAI Adapter [1058]
// reporting solution for nonprofit
const nonprofit_reporting_19_config = {
    id: 'nonprofit_reporting_19',
    name: 'VectorAI',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vectorai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_19_config);
export class NonprofitReporting19Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_19_config;
    constructor(credentials) {
        super(nonprofit_reporting_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_19', NonprofitReporting19Adapter);
// ZenithSystems Adapter [1059]
// campaign solution for nonprofit
const nonprofit_campaign_20_config = {
    id: 'nonprofit_campaign_20',
    name: 'ZenithSystems',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zenithsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_20_config);
export class NonprofitCampaign20Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_20_config;
    constructor(credentials) {
        super(nonprofit_campaign_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_20', NonprofitCampaign20Adapter);
// BoltMind Adapter [1060]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_21_config = {
    id: 'nonprofit_donor_mgmt_21',
    name: 'BoltMind',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_21_config);
export class NonprofitDonorMgmt21Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_21_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_21', NonprofitDonorMgmt21Adapter);
// PrismPlus Adapter [1061]
// volunteer solution for nonprofit
const nonprofit_volunteer_22_config = {
    id: 'nonprofit_volunteer_22',
    name: 'PrismPlus',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_22_config);
export class NonprofitVolunteer22Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_22_config;
    constructor(credentials) {
        super(nonprofit_volunteer_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_22', NonprofitVolunteer22Adapter);
// MetaSystems Adapter [1062]
// fundraising solution for nonprofit
const nonprofit_fundraising_23_config = {
    id: 'nonprofit_fundraising_23',
    name: 'MetaSystems',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metasystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_23_config);
export class NonprofitFundraising23Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_23_config;
    constructor(credentials) {
        super(nonprofit_fundraising_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_23', NonprofitFundraising23Adapter);
// BeaconWorks Adapter [1063]
// grant solution for nonprofit
const nonprofit_grant_24_config = {
    id: 'nonprofit_grant_24',
    name: 'BeaconWorks',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beaconworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_24_config);
export class NonprofitGrant24Adapter extends GenericRestAdapter {
    config = nonprofit_grant_24_config;
    constructor(credentials) {
        super(nonprofit_grant_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_24', NonprofitGrant24Adapter);
// PhasePlatform Adapter [1064]
// membership solution for nonprofit
const nonprofit_membership_25_config = {
    id: 'nonprofit_membership_25',
    name: 'PhasePlatform',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.phaseplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_25_config);
export class NonprofitMembership25Adapter extends GenericRestAdapter {
    config = nonprofit_membership_25_config;
    constructor(credentials) {
        super(nonprofit_membership_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_25', NonprofitMembership25Adapter);
// PrismTechnologies Adapter [1065]
// events solution for nonprofit
const nonprofit_events_26_config = {
    id: 'nonprofit_events_26',
    name: 'PrismTechnologies',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.prismtechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_26_config);
export class NonprofitEvents26Adapter extends GenericRestAdapter {
    config = nonprofit_events_26_config;
    constructor(credentials) {
        super(nonprofit_events_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_26', NonprofitEvents26Adapter);
// ZeroPlus Adapter [1066]
// advocacy solution for nonprofit
const nonprofit_advocacy_27_config = {
    id: 'nonprofit_advocacy_27',
    name: 'ZeroPlus',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zeroplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_27_config);
export class NonprofitAdvocacy27Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_27_config;
    constructor(credentials) {
        super(nonprofit_advocacy_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_27', NonprofitAdvocacy27Adapter);
// MatrixAI Adapter [1067]
// outreach solution for nonprofit
const nonprofit_outreach_28_config = {
    id: 'nonprofit_outreach_28',
    name: 'MatrixAI',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_28_config);
export class NonprofitOutreach28Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_28_config;
    constructor(credentials) {
        super(nonprofit_outreach_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_28', NonprofitOutreach28Adapter);
// HulsePlus Adapter [1068]
// reporting solution for nonprofit
const nonprofit_reporting_29_config = {
    id: 'nonprofit_reporting_29',
    name: 'HulsePlus',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hulseplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_29_config);
export class NonprofitReporting29Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_29_config;
    constructor(credentials) {
        super(nonprofit_reporting_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_29', NonprofitReporting29Adapter);
// CrestSoftware Adapter [1069]
// campaign solution for nonprofit
const nonprofit_campaign_30_config = {
    id: 'nonprofit_campaign_30',
    name: 'CrestSoftware',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_30_config);
export class NonprofitCampaign30Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_30_config;
    constructor(credentials) {
        super(nonprofit_campaign_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_30', NonprofitCampaign30Adapter);
// PulseSoftware Adapter [1070]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_31_config = {
    id: 'nonprofit_donor_mgmt_31',
    name: 'PulseSoftware',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pulsesoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_31_config);
export class NonprofitDonorMgmt31Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_31_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_31', NonprofitDonorMgmt31Adapter);
// IonDigital Adapter [1071]
// volunteer solution for nonprofit
const nonprofit_volunteer_32_config = {
    id: 'nonprofit_volunteer_32',
    name: 'IonDigital',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.iondigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_32_config);
export class NonprofitVolunteer32Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_32_config;
    constructor(credentials) {
        super(nonprofit_volunteer_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_32', NonprofitVolunteer32Adapter);
// KineticPlus Adapter [1072]
// fundraising solution for nonprofit
const nonprofit_fundraising_33_config = {
    id: 'nonprofit_fundraising_33',
    name: 'KineticPlus',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_33_config);
export class NonprofitFundraising33Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_33_config;
    constructor(credentials) {
        super(nonprofit_fundraising_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_33', NonprofitFundraising33Adapter);
// LeverDynamics Adapter [1073]
// grant solution for nonprofit
const nonprofit_grant_34_config = {
    id: 'nonprofit_grant_34',
    name: 'LeverDynamics',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_34_config);
export class NonprofitGrant34Adapter extends GenericRestAdapter {
    config = nonprofit_grant_34_config;
    constructor(credentials) {
        super(nonprofit_grant_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_34', NonprofitGrant34Adapter);
// VortexConnect Adapter [1074]
// membership solution for nonprofit
const nonprofit_membership_35_config = {
    id: 'nonprofit_membership_35',
    name: 'VortexConnect',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vortexconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_35_config);
export class NonprofitMembership35Adapter extends GenericRestAdapter {
    config = nonprofit_membership_35_config;
    constructor(credentials) {
        super(nonprofit_membership_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_35', NonprofitMembership35Adapter);
// TorchPlatform Adapter [1075]
// events solution for nonprofit
const nonprofit_events_36_config = {
    id: 'nonprofit_events_36',
    name: 'TorchPlatform',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.torchplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_36_config);
export class NonprofitEvents36Adapter extends GenericRestAdapter {
    config = nonprofit_events_36_config;
    constructor(credentials) {
        super(nonprofit_events_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_36', NonprofitEvents36Adapter);
// FlashWorks Adapter [1076]
// advocacy solution for nonprofit
const nonprofit_advocacy_37_config = {
    id: 'nonprofit_advocacy_37',
    name: 'FlashWorks',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_37_config);
export class NonprofitAdvocacy37Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_37_config;
    constructor(credentials) {
        super(nonprofit_advocacy_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_37', NonprofitAdvocacy37Adapter);
// MetaData Adapter [1077]
// outreach solution for nonprofit
const nonprofit_outreach_38_config = {
    id: 'nonprofit_outreach_38',
    name: 'MetaData',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metadata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_38_config);
export class NonprofitOutreach38Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_38_config;
    constructor(credentials) {
        super(nonprofit_outreach_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_38', NonprofitOutreach38Adapter);
// UltraZone Adapter [1078]
// reporting solution for nonprofit
const nonprofit_reporting_39_config = {
    id: 'nonprofit_reporting_39',
    name: 'UltraZone',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultrazone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_39_config);
export class NonprofitReporting39Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_39_config;
    constructor(credentials) {
        super(nonprofit_reporting_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_39', NonprofitReporting39Adapter);
// LambdaForce Adapter [1079]
// campaign solution for nonprofit
const nonprofit_campaign_40_config = {
    id: 'nonprofit_campaign_40',
    name: 'LambdaForce',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdaforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_40_config);
export class NonprofitCampaign40Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_40_config;
    constructor(credentials) {
        super(nonprofit_campaign_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_40', NonprofitCampaign40Adapter);
// ClearZone Adapter [1080]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_41_config = {
    id: 'nonprofit_donor_mgmt_41',
    name: 'ClearZone',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clearzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_41_config);
export class NonprofitDonorMgmt41Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_41_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_41', NonprofitDonorMgmt41Adapter);
// SynapseAI Adapter [1081]
// volunteer solution for nonprofit
const nonprofit_volunteer_42_config = {
    id: 'nonprofit_volunteer_42',
    name: 'SynapseAI',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.synapseai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_42_config);
export class NonprofitVolunteer42Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_42_config;
    constructor(credentials) {
        super(nonprofit_volunteer_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_42', NonprofitVolunteer42Adapter);
// EchoFlow Adapter [1082]
// fundraising solution for nonprofit
const nonprofit_fundraising_43_config = {
    id: 'nonprofit_fundraising_43',
    name: 'EchoFlow',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echoflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_43_config);
export class NonprofitFundraising43Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_43_config;
    constructor(credentials) {
        super(nonprofit_fundraising_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_43', NonprofitFundraising43Adapter);
// ReachTechnologies Adapter [1083]
// grant solution for nonprofit
const nonprofit_grant_44_config = {
    id: 'nonprofit_grant_44',
    name: 'ReachTechnologies',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.reachtechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_44_config);
export class NonprofitGrant44Adapter extends GenericRestAdapter {
    config = nonprofit_grant_44_config;
    constructor(credentials) {
        super(nonprofit_grant_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_44', NonprofitGrant44Adapter);
// ShiftForce Adapter [1084]
// membership solution for nonprofit
const nonprofit_membership_45_config = {
    id: 'nonprofit_membership_45',
    name: 'ShiftForce',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_45_config);
export class NonprofitMembership45Adapter extends GenericRestAdapter {
    config = nonprofit_membership_45_config;
    constructor(credentials) {
        super(nonprofit_membership_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_45', NonprofitMembership45Adapter);
// VectorWorks Adapter [1085]
// events solution for nonprofit
const nonprofit_events_46_config = {
    id: 'nonprofit_events_46',
    name: 'VectorWorks',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vectorworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_46_config);
export class NonprofitEvents46Adapter extends GenericRestAdapter {
    config = nonprofit_events_46_config;
    constructor(credentials) {
        super(nonprofit_events_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_46', NonprofitEvents46Adapter);
// JunoStack Adapter [1086]
// advocacy solution for nonprofit
const nonprofit_advocacy_47_config = {
    id: 'nonprofit_advocacy_47',
    name: 'JunoStack',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junostack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_47_config);
export class NonprofitAdvocacy47Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_47_config;
    constructor(credentials) {
        super(nonprofit_advocacy_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_47', NonprofitAdvocacy47Adapter);
// HorizonAI Adapter [1087]
// outreach solution for nonprofit
const nonprofit_outreach_48_config = {
    id: 'nonprofit_outreach_48',
    name: 'HorizonAI',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_48_config);
export class NonprofitOutreach48Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_48_config;
    constructor(credentials) {
        super(nonprofit_outreach_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_48', NonprofitOutreach48Adapter);
// CoreTechnologies Adapter [1088]
// reporting solution for nonprofit
const nonprofit_reporting_49_config = {
    id: 'nonprofit_reporting_49',
    name: 'CoreTechnologies',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.coretechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_49_config);
export class NonprofitReporting49Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_49_config;
    constructor(credentials) {
        super(nonprofit_reporting_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_49', NonprofitReporting49Adapter);
// CrestMax Adapter [1089]
// campaign solution for nonprofit
const nonprofit_campaign_50_config = {
    id: 'nonprofit_campaign_50',
    name: 'CrestMax',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_50_config);
export class NonprofitCampaign50Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_50_config;
    constructor(credentials) {
        super(nonprofit_campaign_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_50', NonprofitCampaign50Adapter);
// SparkWave Adapter [1090]
// donor mgmt solution for nonprofit
const nonprofit_donor_mgmt_51_config = {
    id: 'nonprofit_donor_mgmt_51',
    name: 'SparkWave',
    category: 'nonprofit',
    description: 'donor mgmt solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_donor_mgmt_51_config);
export class NonprofitDonorMgmt51Adapter extends GenericRestAdapter {
    config = nonprofit_donor_mgmt_51_config;
    constructor(credentials) {
        super(nonprofit_donor_mgmt_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_donor_mgmt_51', NonprofitDonorMgmt51Adapter);
// DeltaPlus Adapter [1091]
// volunteer solution for nonprofit
const nonprofit_volunteer_52_config = {
    id: 'nonprofit_volunteer_52',
    name: 'DeltaPlus',
    category: 'nonprofit',
    description: 'volunteer solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltaplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_volunteer_52_config);
export class NonprofitVolunteer52Adapter extends GenericRestAdapter {
    config = nonprofit_volunteer_52_config;
    constructor(credentials) {
        super(nonprofit_volunteer_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_volunteer_52', NonprofitVolunteer52Adapter);
// RadiusPlus Adapter [1092]
// fundraising solution for nonprofit
const nonprofit_fundraising_53_config = {
    id: 'nonprofit_fundraising_53',
    name: 'RadiusPlus',
    category: 'nonprofit',
    description: 'fundraising solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.radiusplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_fundraising_53_config);
export class NonprofitFundraising53Adapter extends GenericRestAdapter {
    config = nonprofit_fundraising_53_config;
    constructor(credentials) {
        super(nonprofit_fundraising_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_fundraising_53', NonprofitFundraising53Adapter);
// BrightDynamics Adapter [1093]
// grant solution for nonprofit
const nonprofit_grant_54_config = {
    id: 'nonprofit_grant_54',
    name: 'BrightDynamics',
    category: 'nonprofit',
    description: 'grant solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.brightdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_grant_54_config);
export class NonprofitGrant54Adapter extends GenericRestAdapter {
    config = nonprofit_grant_54_config;
    constructor(credentials) {
        super(nonprofit_grant_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_grant_54', NonprofitGrant54Adapter);
// UpliftLogic Adapter [1094]
// membership solution for nonprofit
const nonprofit_membership_55_config = {
    id: 'nonprofit_membership_55',
    name: 'UpliftLogic',
    category: 'nonprofit',
    description: 'membership solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_membership_55_config);
export class NonprofitMembership55Adapter extends GenericRestAdapter {
    config = nonprofit_membership_55_config;
    constructor(credentials) {
        super(nonprofit_membership_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_membership_55', NonprofitMembership55Adapter);
// CraftWorks Adapter [1095]
// events solution for nonprofit
const nonprofit_events_56_config = {
    id: 'nonprofit_events_56',
    name: 'CraftWorks',
    category: 'nonprofit',
    description: 'events solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.craftworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_events_56_config);
export class NonprofitEvents56Adapter extends GenericRestAdapter {
    config = nonprofit_events_56_config;
    constructor(credentials) {
        super(nonprofit_events_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_events_56', NonprofitEvents56Adapter);
// KineticStack Adapter [1096]
// advocacy solution for nonprofit
const nonprofit_advocacy_57_config = {
    id: 'nonprofit_advocacy_57',
    name: 'KineticStack',
    category: 'nonprofit',
    description: 'advocacy solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_advocacy_57_config);
export class NonprofitAdvocacy57Adapter extends GenericRestAdapter {
    config = nonprofit_advocacy_57_config;
    constructor(credentials) {
        super(nonprofit_advocacy_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_advocacy_57', NonprofitAdvocacy57Adapter);
// KineticLabs Adapter [1097]
// outreach solution for nonprofit
const nonprofit_outreach_58_config = {
    id: 'nonprofit_outreach_58',
    name: 'KineticLabs',
    category: 'nonprofit',
    description: 'outreach solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.kineticlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_outreach_58_config);
export class NonprofitOutreach58Adapter extends GenericRestAdapter {
    config = nonprofit_outreach_58_config;
    constructor(credentials) {
        super(nonprofit_outreach_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_outreach_58', NonprofitOutreach58Adapter);
// MetaData Adapter [1098]
// reporting solution for nonprofit
const nonprofit_reporting_59_config = {
    id: 'nonprofit_reporting_59',
    name: 'MetaData',
    category: 'nonprofit',
    description: 'reporting solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metadata.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_reporting_59_config);
export class NonprofitReporting59Adapter extends GenericRestAdapter {
    config = nonprofit_reporting_59_config;
    constructor(credentials) {
        super(nonprofit_reporting_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_reporting_59', NonprofitReporting59Adapter);
// MatrixLabs Adapter [1099]
// campaign solution for nonprofit
const nonprofit_campaign_60_config = {
    id: 'nonprofit_campaign_60',
    name: 'MatrixLabs',
    category: 'nonprofit',
    description: 'campaign solution for nonprofit',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nonprofit_campaign_60_config);
export class NonprofitCampaign60Adapter extends GenericRestAdapter {
    config = nonprofit_campaign_60_config;
    constructor(credentials) {
        super(nonprofit_campaign_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nonprofit_campaign_60', NonprofitCampaign60Adapter);
//# sourceMappingURL=nonprofit.js.map