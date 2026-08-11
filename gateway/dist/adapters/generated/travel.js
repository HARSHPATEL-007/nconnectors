// Generated Adapters — travel (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// AcmePath Adapter [800]
// booking solution for travel
const travel_booking_1_config = {
    id: 'travel_booking_1',
    name: 'AcmePath',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acmepath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_1_config);
export class TravelBooking1Adapter extends GenericRestAdapter {
    config = travel_booking_1_config;
    constructor(credentials) {
        super(travel_booking_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_1', TravelBooking1Adapter);
// SwiftSystems Adapter [801]
// itinerary solution for travel
const travel_itinerary_2_config = {
    id: 'travel_itinerary_2',
    name: 'SwiftSystems',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.swiftsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_2_config);
export class TravelItinerary2Adapter extends GenericRestAdapter {
    config = travel_itinerary_2_config;
    constructor(credentials) {
        super(travel_itinerary_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_2', TravelItinerary2Adapter);
// DeltaWave Adapter [802]
// loyalty solution for travel
const travel_loyalty_3_config = {
    id: 'travel_loyalty_3',
    name: 'DeltaWave',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltawave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_3_config);
export class TravelLoyalty3Adapter extends GenericRestAdapter {
    config = travel_loyalty_3_config;
    constructor(credentials) {
        super(travel_loyalty_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_3', TravelLoyalty3Adapter);
// MaverickPlatform Adapter [803]
// reviews solution for travel
const travel_reviews_4_config = {
    id: 'travel_reviews_4',
    name: 'MaverickPlatform',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_4_config);
export class TravelReviews4Adapter extends GenericRestAdapter {
    config = travel_reviews_4_config;
    constructor(credentials) {
        super(travel_reviews_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_4', TravelReviews4Adapter);
// RipplePro Adapter [804]
// accarion solution for travel
const travel_accarion_5_config = {
    id: 'travel_accarion_5',
    name: 'RipplePro',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ripplepro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_5_config);
export class TravelAccarion5Adapter extends GenericRestAdapter {
    config = travel_accarion_5_config;
    constructor(credentials) {
        super(travel_accarion_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_5', TravelAccarion5Adapter);
// EmberPlatform Adapter [805]
// tours solution for travel
const travel_tours_6_config = {
    id: 'travel_tours_6',
    name: 'EmberPlatform',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.emberplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_6_config);
export class TravelTours6Adapter extends GenericRestAdapter {
    config = travel_tours_6_config;
    constructor(credentials) {
        super(travel_tours_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_6', TravelTours6Adapter);
// HyperLink Adapter [806]
// experiences solution for travel
const travel_experiences_7_config = {
    id: 'travel_experiences_7',
    name: 'HyperLink',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hyperlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_7_config);
export class TravelExperiences7Adapter extends GenericRestAdapter {
    config = travel_experiences_7_config;
    constructor(credentials) {
        super(travel_experiences_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_7', TravelExperiences7Adapter);
// HelixMind Adapter [807]
// transportation solution for travel
const travel_transportation_8_config = {
    id: 'travel_transportation_8',
    name: 'HelixMind',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.helixmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_8_config);
export class TravelTransportation8Adapter extends GenericRestAdapter {
    config = travel_transportation_8_config;
    constructor(credentials) {
        super(travel_transportation_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_8', TravelTransportation8Adapter);
// UpliftSoftware Adapter [808]
// insurance solution for travel
const travel_insurance_9_config = {
    id: 'travel_insurance_9',
    name: 'UpliftSoftware',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftsoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_9_config);
export class TravelInsurance9Adapter extends GenericRestAdapter {
    config = travel_insurance_9_config;
    constructor(credentials) {
        super(travel_insurance_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_9', TravelInsurance9Adapter);
// NexusSoftware Adapter [809]
// guides solution for travel
const travel_guides_10_config = {
    id: 'travel_guides_10',
    name: 'NexusSoftware',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexussoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_10_config);
export class TravelGuides10Adapter extends GenericRestAdapter {
    config = travel_guides_10_config;
    constructor(credentials) {
        super(travel_guides_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_10', TravelGuides10Adapter);
// ElevateLogic Adapter [810]
// booking solution for travel
const travel_booking_11_config = {
    id: 'travel_booking_11',
    name: 'ElevateLogic',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatelogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_11_config);
export class TravelBooking11Adapter extends GenericRestAdapter {
    config = travel_booking_11_config;
    constructor(credentials) {
        super(travel_booking_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_11', TravelBooking11Adapter);
// ZestMind Adapter [811]
// itinerary solution for travel
const travel_itinerary_12_config = {
    id: 'travel_itinerary_12',
    name: 'ZestMind',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestmind.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_12_config);
export class TravelItinerary12Adapter extends GenericRestAdapter {
    config = travel_itinerary_12_config;
    constructor(credentials) {
        super(travel_itinerary_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_12', TravelItinerary12Adapter);
// PhaseConnect Adapter [812]
// loyalty solution for travel
const travel_loyalty_13_config = {
    id: 'travel_loyalty_13',
    name: 'PhaseConnect',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.phaseconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_13_config);
export class TravelLoyalty13Adapter extends GenericRestAdapter {
    config = travel_loyalty_13_config;
    constructor(credentials) {
        super(travel_loyalty_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_13', TravelLoyalty13Adapter);
// MetaCloud Adapter [813]
// reviews solution for travel
const travel_reviews_14_config = {
    id: 'travel_reviews_14',
    name: 'MetaCloud',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.metacloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_14_config);
export class TravelReviews14Adapter extends GenericRestAdapter {
    config = travel_reviews_14_config;
    constructor(credentials) {
        super(travel_reviews_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_14', TravelReviews14Adapter);
// EchoOne Adapter [814]
// accarion solution for travel
const travel_accarion_15_config = {
    id: 'travel_accarion_15',
    name: 'EchoOne',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.echoone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_15_config);
export class TravelAccarion15Adapter extends GenericRestAdapter {
    config = travel_accarion_15_config;
    constructor(credentials) {
        super(travel_accarion_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_15', TravelAccarion15Adapter);
// FlashPath Adapter [815]
// tours solution for travel
const travel_tours_16_config = {
    id: 'travel_tours_16',
    name: 'FlashPath',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_16_config);
export class TravelTours16Adapter extends GenericRestAdapter {
    config = travel_tours_16_config;
    constructor(credentials) {
        super(travel_tours_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_16', TravelTours16Adapter);
// SynapseStack Adapter [816]
// experiences solution for travel
const travel_experiences_17_config = {
    id: 'travel_experiences_17',
    name: 'SynapseStack',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.synapsestack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_17_config);
export class TravelExperiences17Adapter extends GenericRestAdapter {
    config = travel_experiences_17_config;
    constructor(credentials) {
        super(travel_experiences_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_17', TravelExperiences17Adapter);
// StratusLogic Adapter [817]
// transportation solution for travel
const travel_transportation_18_config = {
    id: 'travel_transportation_18',
    name: 'StratusLogic',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratuslogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_18_config);
export class TravelTransportation18Adapter extends GenericRestAdapter {
    config = travel_transportation_18_config;
    constructor(credentials) {
        super(travel_transportation_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_18', TravelTransportation18Adapter);
// PivotPoint Adapter [818]
// insurance solution for travel
const travel_insurance_19_config = {
    id: 'travel_insurance_19',
    name: 'PivotPoint',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_19_config);
export class TravelInsurance19Adapter extends GenericRestAdapter {
    config = travel_insurance_19_config;
    constructor(credentials) {
        super(travel_insurance_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_19', TravelInsurance19Adapter);
// MaverickDynamics Adapter [819]
// guides solution for travel
const travel_guides_20_config = {
    id: 'travel_guides_20',
    name: 'MaverickDynamics',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickdynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_20_config);
export class TravelGuides20Adapter extends GenericRestAdapter {
    config = travel_guides_20_config;
    constructor(credentials) {
        super(travel_guides_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_20', TravelGuides20Adapter);
// MaverickNetwork Adapter [820]
// booking solution for travel
const travel_booking_21_config = {
    id: 'travel_booking_21',
    name: 'MaverickNetwork',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.mavericknetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_21_config);
export class TravelBooking21Adapter extends GenericRestAdapter {
    config = travel_booking_21_config;
    constructor(credentials) {
        super(travel_booking_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_21', TravelBooking21Adapter);
// StratusNetwork Adapter [821]
// itinerary solution for travel
const travel_itinerary_22_config = {
    id: 'travel_itinerary_22',
    name: 'StratusNetwork',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratusnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_22_config);
export class TravelItinerary22Adapter extends GenericRestAdapter {
    config = travel_itinerary_22_config;
    constructor(credentials) {
        super(travel_itinerary_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_22', TravelItinerary22Adapter);
// NeonLogic Adapter [822]
// loyalty solution for travel
const travel_loyalty_23_config = {
    id: 'travel_loyalty_23',
    name: 'NeonLogic',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.neonlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_23_config);
export class TravelLoyalty23Adapter extends GenericRestAdapter {
    config = travel_loyalty_23_config;
    constructor(credentials) {
        super(travel_loyalty_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_23', TravelLoyalty23Adapter);
// HavenWave Adapter [823]
// reviews solution for travel
const travel_reviews_24_config = {
    id: 'travel_reviews_24',
    name: 'HavenWave',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havenwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_24_config);
export class TravelReviews24Adapter extends GenericRestAdapter {
    config = travel_reviews_24_config;
    constructor(credentials) {
        super(travel_reviews_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_24', TravelReviews24Adapter);
// UltraHub Adapter [824]
// accarion solution for travel
const travel_accarion_25_config = {
    id: 'travel_accarion_25',
    name: 'UltraHub',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultrahub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_25_config);
export class TravelAccarion25Adapter extends GenericRestAdapter {
    config = travel_accarion_25_config;
    constructor(credentials) {
        super(travel_accarion_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_25', TravelAccarion25Adapter);
// LumenLogic Adapter [825]
// tours solution for travel
const travel_tours_26_config = {
    id: 'travel_tours_26',
    name: 'LumenLogic',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumenlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_26_config);
export class TravelTours26Adapter extends GenericRestAdapter {
    config = travel_tours_26_config;
    constructor(credentials) {
        super(travel_tours_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_26', TravelTours26Adapter);
// MeridianPoint Adapter [826]
// experiences solution for travel
const travel_experiences_27_config = {
    id: 'travel_experiences_27',
    name: 'MeridianPoint',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianpoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_27_config);
export class TravelExperiences27Adapter extends GenericRestAdapter {
    config = travel_experiences_27_config;
    constructor(credentials) {
        super(travel_experiences_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_27', TravelExperiences27Adapter);
// EdgeTechnologies Adapter [827]
// transportation solution for travel
const travel_transportation_28_config = {
    id: 'travel_transportation_28',
    name: 'EdgeTechnologies',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgetechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_28_config);
export class TravelTransportation28Adapter extends GenericRestAdapter {
    config = travel_transportation_28_config;
    constructor(credentials) {
        super(travel_transportation_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_28', TravelTransportation28Adapter);
// MeridianLink Adapter [828]
// insurance solution for travel
const travel_insurance_29_config = {
    id: 'travel_insurance_29',
    name: 'MeridianLink',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_29_config);
export class TravelInsurance29Adapter extends GenericRestAdapter {
    config = travel_insurance_29_config;
    constructor(credentials) {
        super(travel_insurance_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_29', TravelInsurance29Adapter);
// QuestCore Adapter [829]
// guides solution for travel
const travel_guides_30_config = {
    id: 'travel_guides_30',
    name: 'QuestCore',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_30_config);
export class TravelGuides30Adapter extends GenericRestAdapter {
    config = travel_guides_30_config;
    constructor(credentials) {
        super(travel_guides_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_30', TravelGuides30Adapter);
// TraxCore Adapter [830]
// booking solution for travel
const travel_booking_31_config = {
    id: 'travel_booking_31',
    name: 'TraxCore',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_31_config);
export class TravelBooking31Adapter extends GenericRestAdapter {
    config = travel_booking_31_config;
    constructor(credentials) {
        super(travel_booking_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_31', TravelBooking31Adapter);
// NovaLabs Adapter [831]
// itinerary solution for travel
const travel_itinerary_32_config = {
    id: 'travel_itinerary_32',
    name: 'NovaLabs',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novalabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_32_config);
export class TravelItinerary32Adapter extends GenericRestAdapter {
    config = travel_itinerary_32_config;
    constructor(credentials) {
        super(travel_itinerary_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_32', TravelItinerary32Adapter);
// PinnacleBase Adapter [832]
// loyalty solution for travel
const travel_loyalty_33_config = {
    id: 'travel_loyalty_33',
    name: 'PinnacleBase',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnaclebase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_33_config);
export class TravelLoyalty33Adapter extends GenericRestAdapter {
    config = travel_loyalty_33_config;
    constructor(credentials) {
        super(travel_loyalty_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_33', TravelLoyalty33Adapter);
// PixelPlus Adapter [833]
// reviews solution for travel
const travel_reviews_34_config = {
    id: 'travel_reviews_34',
    name: 'PixelPlus',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pixelplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_34_config);
export class TravelReviews34Adapter extends GenericRestAdapter {
    config = travel_reviews_34_config;
    constructor(credentials) {
        super(travel_reviews_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_34', TravelReviews34Adapter);
// UltraStack Adapter [834]
// accarion solution for travel
const travel_accarion_35_config = {
    id: 'travel_accarion_35',
    name: 'UltraStack',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ultrastack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_35_config);
export class TravelAccarion35Adapter extends GenericRestAdapter {
    config = travel_accarion_35_config;
    constructor(credentials) {
        super(travel_accarion_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_35', TravelAccarion35Adapter);
// CrestNetwork Adapter [835]
// tours solution for travel
const travel_tours_36_config = {
    id: 'travel_tours_36',
    name: 'CrestNetwork',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.crestnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_36_config);
export class TravelTours36Adapter extends GenericRestAdapter {
    config = travel_tours_36_config;
    constructor(credentials) {
        super(travel_tours_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_36', TravelTours36Adapter);
// BravePlatform Adapter [836]
// experiences solution for travel
const travel_experiences_37_config = {
    id: 'travel_experiences_37',
    name: 'BravePlatform',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.braveplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_37_config);
export class TravelExperiences37Adapter extends GenericRestAdapter {
    config = travel_experiences_37_config;
    constructor(credentials) {
        super(travel_experiences_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_37', TravelExperiences37Adapter);
// MotionFlow Adapter [837]
// transportation solution for travel
const travel_transportation_38_config = {
    id: 'travel_transportation_38',
    name: 'MotionFlow',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.motionflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_38_config);
export class TravelTransportation38Adapter extends GenericRestAdapter {
    config = travel_transportation_38_config;
    constructor(credentials) {
        super(travel_transportation_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_38', TravelTransportation38Adapter);
// GlowHub Adapter [838]
// insurance solution for travel
const travel_insurance_39_config = {
    id: 'travel_insurance_39',
    name: 'GlowHub',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.glowhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_39_config);
export class TravelInsurance39Adapter extends GenericRestAdapter {
    config = travel_insurance_39_config;
    constructor(credentials) {
        super(travel_insurance_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_39', TravelInsurance39Adapter);
// HyperCore Adapter [839]
// guides solution for travel
const travel_guides_40_config = {
    id: 'travel_guides_40',
    name: 'HyperCore',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hypercore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_40_config);
export class TravelGuides40Adapter extends GenericRestAdapter {
    config = travel_guides_40_config;
    constructor(credentials) {
        super(travel_guides_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_40', TravelGuides40Adapter);
// ZestFlow Adapter [840]
// booking solution for travel
const travel_booking_41_config = {
    id: 'travel_booking_41',
    name: 'ZestFlow',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zestflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_41_config);
export class TravelBooking41Adapter extends GenericRestAdapter {
    config = travel_booking_41_config;
    constructor(credentials) {
        super(travel_booking_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_41', TravelBooking41Adapter);
// HulseTechnologies Adapter [841]
// itinerary solution for travel
const travel_itinerary_42_config = {
    id: 'travel_itinerary_42',
    name: 'HulseTechnologies',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hulsetechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_42_config);
export class TravelItinerary42Adapter extends GenericRestAdapter {
    config = travel_itinerary_42_config;
    constructor(credentials) {
        super(travel_itinerary_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_42', TravelItinerary42Adapter);
// Orbit360 Adapter [842]
// loyalty solution for travel
const travel_loyalty_43_config = {
    id: 'travel_loyalty_43',
    name: 'Orbit360',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.orbit360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_43_config);
export class TravelLoyalty43Adapter extends GenericRestAdapter {
    config = travel_loyalty_43_config;
    constructor(credentials) {
        super(travel_loyalty_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_43', TravelLoyalty43Adapter);
// UpliftOne Adapter [843]
// reviews solution for travel
const travel_reviews_44_config = {
    id: 'travel_reviews_44',
    name: 'UpliftOne',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_44_config);
export class TravelReviews44Adapter extends GenericRestAdapter {
    config = travel_reviews_44_config;
    constructor(credentials) {
        super(travel_reviews_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_44', TravelReviews44Adapter);
// AcmeOne Adapter [844]
// accarion solution for travel
const travel_accarion_45_config = {
    id: 'travel_accarion_45',
    name: 'AcmeOne',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acmeone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_45_config);
export class TravelAccarion45Adapter extends GenericRestAdapter {
    config = travel_accarion_45_config;
    constructor(credentials) {
        super(travel_accarion_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_45', TravelAccarion45Adapter);
// ElevateCloud Adapter [845]
// tours solution for travel
const travel_tours_46_config = {
    id: 'travel_tours_46',
    name: 'ElevateCloud',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.elevatecloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_46_config);
export class TravelTours46Adapter extends GenericRestAdapter {
    config = travel_tours_46_config;
    constructor(credentials) {
        super(travel_tours_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_46', TravelTours46Adapter);
// SolsticePro Adapter [846]
// experiences solution for travel
const travel_experiences_47_config = {
    id: 'travel_experiences_47',
    name: 'SolsticePro',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.solsticepro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_47_config);
export class TravelExperiences47Adapter extends GenericRestAdapter {
    config = travel_experiences_47_config;
    constructor(credentials) {
        super(travel_experiences_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_47', TravelExperiences47Adapter);
// ApexSystems Adapter [847]
// transportation solution for travel
const travel_transportation_48_config = {
    id: 'travel_transportation_48',
    name: 'ApexSystems',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_48_config);
export class TravelTransportation48Adapter extends GenericRestAdapter {
    config = travel_transportation_48_config;
    constructor(credentials) {
        super(travel_transportation_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_48', TravelTransportation48Adapter);
// VaultOne Adapter [848]
// insurance solution for travel
const travel_insurance_49_config = {
    id: 'travel_insurance_49',
    name: 'VaultOne',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vaultone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_49_config);
export class TravelInsurance49Adapter extends GenericRestAdapter {
    config = travel_insurance_49_config;
    constructor(credentials) {
        super(travel_insurance_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_49', TravelInsurance49Adapter);
// LambdaSystems Adapter [849]
// guides solution for travel
const travel_guides_50_config = {
    id: 'travel_guides_50',
    name: 'LambdaSystems',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lambdasystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_50_config);
export class TravelGuides50Adapter extends GenericRestAdapter {
    config = travel_guides_50_config;
    constructor(credentials) {
        super(travel_guides_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_50', TravelGuides50Adapter);
// QuasarTechnologies Adapter [850]
// booking solution for travel
const travel_booking_51_config = {
    id: 'travel_booking_51',
    name: 'QuasarTechnologies',
    category: 'travel',
    description: 'booking solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.quasartechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_booking_51_config);
export class TravelBooking51Adapter extends GenericRestAdapter {
    config = travel_booking_51_config;
    constructor(credentials) {
        super(travel_booking_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_booking_51', TravelBooking51Adapter);
// VisionPlus Adapter [851]
// itinerary solution for travel
const travel_itinerary_52_config = {
    id: 'travel_itinerary_52',
    name: 'VisionPlus',
    category: 'travel',
    description: 'itinerary solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.visionplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_itinerary_52_config);
export class TravelItinerary52Adapter extends GenericRestAdapter {
    config = travel_itinerary_52_config;
    constructor(credentials) {
        super(travel_itinerary_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_itinerary_52', TravelItinerary52Adapter);
// CloudPlatform Adapter [852]
// loyalty solution for travel
const travel_loyalty_53_config = {
    id: 'travel_loyalty_53',
    name: 'CloudPlatform',
    category: 'travel',
    description: 'loyalty solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cloudplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_loyalty_53_config);
export class TravelLoyalty53Adapter extends GenericRestAdapter {
    config = travel_loyalty_53_config;
    constructor(credentials) {
        super(travel_loyalty_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_loyalty_53', TravelLoyalty53Adapter);
// HyperSoftware Adapter [853]
// reviews solution for travel
const travel_reviews_54_config = {
    id: 'travel_reviews_54',
    name: 'HyperSoftware',
    category: 'travel',
    description: 'reviews solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hypersoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_reviews_54_config);
export class TravelReviews54Adapter extends GenericRestAdapter {
    config = travel_reviews_54_config;
    constructor(credentials) {
        super(travel_reviews_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_reviews_54', TravelReviews54Adapter);
// AtlasWave Adapter [854]
// accarion solution for travel
const travel_accarion_55_config = {
    id: 'travel_accarion_55',
    name: 'AtlasWave',
    category: 'travel',
    description: 'accarion solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.atlaswave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_accarion_55_config);
export class TravelAccarion55Adapter extends GenericRestAdapter {
    config = travel_accarion_55_config;
    constructor(credentials) {
        super(travel_accarion_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_accarion_55', TravelAccarion55Adapter);
// OrbitLabs Adapter [855]
// tours solution for travel
const travel_tours_56_config = {
    id: 'travel_tours_56',
    name: 'OrbitLabs',
    category: 'travel',
    description: 'tours solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.orbitlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_tours_56_config);
export class TravelTours56Adapter extends GenericRestAdapter {
    config = travel_tours_56_config;
    constructor(credentials) {
        super(travel_tours_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_tours_56', TravelTours56Adapter);
// LumenTechnologies Adapter [856]
// experiences solution for travel
const travel_experiences_57_config = {
    id: 'travel_experiences_57',
    name: 'LumenTechnologies',
    category: 'travel',
    description: 'experiences solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.lumentechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_experiences_57_config);
export class TravelExperiences57Adapter extends GenericRestAdapter {
    config = travel_experiences_57_config;
    constructor(credentials) {
        super(travel_experiences_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_experiences_57', TravelExperiences57Adapter);
// NovaLogic Adapter [857]
// transportation solution for travel
const travel_transportation_58_config = {
    id: 'travel_transportation_58',
    name: 'NovaLogic',
    category: 'travel',
    description: 'transportation solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novalogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_transportation_58_config);
export class TravelTransportation58Adapter extends GenericRestAdapter {
    config = travel_transportation_58_config;
    constructor(credentials) {
        super(travel_transportation_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_transportation_58', TravelTransportation58Adapter);
// CloudOne Adapter [858]
// insurance solution for travel
const travel_insurance_59_config = {
    id: 'travel_insurance_59',
    name: 'CloudOne',
    category: 'travel',
    description: 'insurance solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cloudone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_insurance_59_config);
export class TravelInsurance59Adapter extends GenericRestAdapter {
    config = travel_insurance_59_config;
    constructor(credentials) {
        super(travel_insurance_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_insurance_59', TravelInsurance59Adapter);
// PinnacleMax Adapter [859]
// guides solution for travel
const travel_guides_60_config = {
    id: 'travel_guides_60',
    name: 'PinnacleMax',
    category: 'travel',
    description: 'guides solution for travel',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pinnaclemax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(travel_guides_60_config);
export class TravelGuides60Adapter extends GenericRestAdapter {
    config = travel_guides_60_config;
    constructor(credentials) {
        super(travel_guides_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('travel_guides_60', TravelGuides60Adapter);
//# sourceMappingURL=travel.js.map