// Generated Adapters — media (60 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// RadiusSoftware Adapter [980]
// streaming solution for media
const media_streaming_1_config = {
    id: 'media_streaming_1',
    name: 'RadiusSoftware',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.radiussoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_1_config);
export class MediaStreaming1Adapter extends GenericRestAdapter {
    config = media_streaming_1_config;
    constructor(credentials) {
        super(media_streaming_1_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_1', MediaStreaming1Adapter);
// SparkHub Adapter [981]
// podcast solution for media
const media_podcast_2_config = {
    id: 'media_podcast_2',
    name: 'SparkHub',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.sparkhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_2_config);
export class MediaPodcast2Adapter extends GenericRestAdapter {
    config = media_podcast_2_config;
    constructor(credentials) {
        super(media_podcast_2_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_2', MediaPodcast2Adapter);
// VertexSystems Adapter [982]
// music solution for media
const media_music_3_config = {
    id: 'media_music_3',
    name: 'VertexSystems',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexsystems.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_3_config);
export class MediaMusic3Adapter extends GenericRestAdapter {
    config = media_music_3_config;
    constructor(credentials) {
        super(media_music_3_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_3', MediaMusic3Adapter);
// SynapseForce Adapter [983]
// video solution for media
const media_video_4_config = {
    id: 'media_video_4',
    name: 'SynapseForce',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.synapseforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_4_config);
export class MediaVideo4Adapter extends GenericRestAdapter {
    config = media_video_4_config;
    constructor(credentials) {
        super(media_video_4_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_4', MediaVideo4Adapter);
// FlashMax Adapter [984]
// publishing solution for media
const media_publishing_5_config = {
    id: 'media_publishing_5',
    name: 'FlashMax',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.flashmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_5_config);
export class MediaPublishing5Adapter extends GenericRestAdapter {
    config = media_publishing_5_config;
    constructor(credentials) {
        super(media_publishing_5_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_5', MediaPublishing5Adapter);
// FluxLink Adapter [985]
// broadcast solution for media
const media_broadcast_6_config = {
    id: 'media_broadcast_6',
    name: 'FluxLink',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.fluxlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_6_config);
export class MediaBroadcast6Adapter extends GenericRestAdapter {
    config = media_broadcast_6_config;
    constructor(credentials) {
        super(media_broadcast_6_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_6', MediaBroadcast6Adapter);
// EdgeSoftware Adapter [986]
// content solution for media
const media_content_7_config = {
    id: 'media_content_7',
    name: 'EdgeSoftware',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgesoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_7_config);
export class MediaContent7Adapter extends GenericRestAdapter {
    config = media_content_7_config;
    constructor(credentials) {
        super(media_content_7_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_7', MediaContent7Adapter);
// Horizon360 Adapter [987]
// social solution for media
const media_social_8_config = {
    id: 'media_social_8',
    name: 'Horizon360',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizon360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_8_config);
export class MediaSocial8Adapter extends GenericRestAdapter {
    config = media_social_8_config;
    constructor(credentials) {
        super(media_social_8_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_8', MediaSocial8Adapter);
// DeltaSoftware Adapter [988]
// gaming solution for media
const media_gaming_9_config = {
    id: 'media_gaming_9',
    name: 'DeltaSoftware',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltasoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_9_config);
export class MediaGaming9Adapter extends GenericRestAdapter {
    config = media_gaming_9_config;
    constructor(credentials) {
        super(media_gaming_9_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_9', MediaGaming9Adapter);
// HavenForce Adapter [989]
// news solution for media
const media_news_10_config = {
    id: 'media_news_10',
    name: 'HavenForce',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.havenforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_10_config);
export class MediaNews10Adapter extends GenericRestAdapter {
    config = media_news_10_config;
    constructor(credentials) {
        super(media_news_10_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_10', MediaNews10Adapter);
// EvoSoftware Adapter [990]
// streaming solution for media
const media_streaming_11_config = {
    id: 'media_streaming_11',
    name: 'EvoSoftware',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.evosoftware.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_11_config);
export class MediaStreaming11Adapter extends GenericRestAdapter {
    config = media_streaming_11_config;
    constructor(credentials) {
        super(media_streaming_11_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_11', MediaStreaming11Adapter);
// CipherPlatform Adapter [991]
// podcast solution for media
const media_podcast_12_config = {
    id: 'media_podcast_12',
    name: 'CipherPlatform',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cipherplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_12_config);
export class MediaPodcast12Adapter extends GenericRestAdapter {
    config = media_podcast_12_config;
    constructor(credentials) {
        super(media_podcast_12_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_12', MediaPodcast12Adapter);
// StratusPro Adapter [992]
// music solution for media
const media_music_13_config = {
    id: 'media_music_13',
    name: 'StratusPro',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratuspro.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_13_config);
export class MediaMusic13Adapter extends GenericRestAdapter {
    config = media_music_13_config;
    constructor(credentials) {
        super(media_music_13_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_13', MediaMusic13Adapter);
// LeverWorks Adapter [993]
// video solution for media
const media_video_14_config = {
    id: 'media_video_14',
    name: 'LeverWorks',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.leverworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_14_config);
export class MediaVideo14Adapter extends GenericRestAdapter {
    config = media_video_14_config;
    constructor(credentials) {
        super(media_video_14_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_14', MediaVideo14Adapter);
// SwiftAI Adapter [994]
// publishing solution for media
const media_publishing_15_config = {
    id: 'media_publishing_15',
    name: 'SwiftAI',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.swiftai.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_15_config);
export class MediaPublishing15Adapter extends GenericRestAdapter {
    config = media_publishing_15_config;
    constructor(credentials) {
        super(media_publishing_15_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_15', MediaPublishing15Adapter);
// TraxConnect Adapter [995]
// broadcast solution for media
const media_broadcast_16_config = {
    id: 'media_broadcast_16',
    name: 'TraxConnect',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxconnect.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_16_config);
export class MediaBroadcast16Adapter extends GenericRestAdapter {
    config = media_broadcast_16_config;
    constructor(credentials) {
        super(media_broadcast_16_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_16', MediaBroadcast16Adapter);
// NexusPoint Adapter [996]
// content solution for media
const media_content_17_config = {
    id: 'media_content_17',
    name: 'NexusPoint',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nexuspoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_17_config);
export class MediaContent17Adapter extends GenericRestAdapter {
    config = media_content_17_config;
    constructor(credentials) {
        super(media_content_17_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_17', MediaContent17Adapter);
// Grid360 Adapter [997]
// social solution for media
const media_social_18_config = {
    id: 'media_social_18',
    name: 'Grid360',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.grid360.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_18_config);
export class MediaSocial18Adapter extends GenericRestAdapter {
    config = media_social_18_config;
    constructor(credentials) {
        super(media_social_18_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_18', MediaSocial18Adapter);
// NovaPlatform Adapter [998]
// gaming solution for media
const media_gaming_19_config = {
    id: 'media_gaming_19',
    name: 'NovaPlatform',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.novaplatform.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_19_config);
export class MediaGaming19Adapter extends GenericRestAdapter {
    config = media_gaming_19_config;
    constructor(credentials) {
        super(media_gaming_19_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_19', MediaGaming19Adapter);
// HelixStack Adapter [999]
// news solution for media
const media_news_20_config = {
    id: 'media_news_20',
    name: 'HelixStack',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.helixstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_20_config);
export class MediaNews20Adapter extends GenericRestAdapter {
    config = media_news_20_config;
    constructor(credentials) {
        super(media_news_20_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_20', MediaNews20Adapter);
// TraxLabs Adapter [1000]
// streaming solution for media
const media_streaming_21_config = {
    id: 'media_streaming_21',
    name: 'TraxLabs',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.traxlabs.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_21_config);
export class MediaStreaming21Adapter extends GenericRestAdapter {
    config = media_streaming_21_config;
    constructor(credentials) {
        super(media_streaming_21_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_21', MediaStreaming21Adapter);
// VertexFlow Adapter [1001]
// podcast solution for media
const media_podcast_22_config = {
    id: 'media_podcast_22',
    name: 'VertexFlow',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.vertexflow.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_22_config);
export class MediaPodcast22Adapter extends GenericRestAdapter {
    config = media_podcast_22_config;
    constructor(credentials) {
        super(media_podcast_22_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_22', MediaPodcast22Adapter);
// FluxCore Adapter [1002]
// music solution for media
const media_music_23_config = {
    id: 'media_music_23',
    name: 'FluxCore',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.fluxcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_23_config);
export class MediaMusic23Adapter extends GenericRestAdapter {
    config = media_music_23_config;
    constructor(credentials) {
        super(media_music_23_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_23', MediaMusic23Adapter);
// ClearLink Adapter [1003]
// video solution for media
const media_video_24_config = {
    id: 'media_video_24',
    name: 'ClearLink',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clearlink.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_24_config);
export class MediaVideo24Adapter extends GenericRestAdapter {
    config = media_video_24_config;
    constructor(credentials) {
        super(media_video_24_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_24', MediaVideo24Adapter);
// OnyxOne Adapter [1004]
// publishing solution for media
const media_publishing_25_config = {
    id: 'media_publishing_25',
    name: 'OnyxOne',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_25_config);
export class MediaPublishing25Adapter extends GenericRestAdapter {
    config = media_publishing_25_config;
    constructor(credentials) {
        super(media_publishing_25_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_25', MediaPublishing25Adapter);
// PivotMax Adapter [1005]
// broadcast solution for media
const media_broadcast_26_config = {
    id: 'media_broadcast_26',
    name: 'PivotMax',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_26_config);
export class MediaBroadcast26Adapter extends GenericRestAdapter {
    config = media_broadcast_26_config;
    constructor(credentials) {
        super(media_broadcast_26_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_26', MediaBroadcast26Adapter);
// DeltaPoint Adapter [1006]
// content solution for media
const media_content_27_config = {
    id: 'media_content_27',
    name: 'DeltaPoint',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.deltapoint.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_27_config);
export class MediaContent27Adapter extends GenericRestAdapter {
    config = media_content_27_config;
    constructor(credentials) {
        super(media_content_27_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_27', MediaContent27Adapter);
// ApexCloud Adapter [1007]
// social solution for media
const media_social_28_config = {
    id: 'media_social_28',
    name: 'ApexCloud',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.apexcloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_28_config);
export class MediaSocial28Adapter extends GenericRestAdapter {
    config = media_social_28_config;
    constructor(credentials) {
        super(media_social_28_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_28', MediaSocial28Adapter);
// MeridianMax Adapter [1008]
// gaming solution for media
const media_gaming_29_config = {
    id: 'media_gaming_29',
    name: 'MeridianMax',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.meridianmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_29_config);
export class MediaGaming29Adapter extends GenericRestAdapter {
    config = media_gaming_29_config;
    constructor(credentials) {
        super(media_gaming_29_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_29', MediaGaming29Adapter);
// UnityPath Adapter [1009]
// news solution for media
const media_news_30_config = {
    id: 'media_news_30',
    name: 'UnityPath',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.unitypath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_30_config);
export class MediaNews30Adapter extends GenericRestAdapter {
    config = media_news_30_config;
    constructor(credentials) {
        super(media_news_30_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_30', MediaNews30Adapter);
// HorizonTechnologies Adapter [1010]
// streaming solution for media
const media_streaming_31_config = {
    id: 'media_streaming_31',
    name: 'HorizonTechnologies',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizontechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_31_config);
export class MediaStreaming31Adapter extends GenericRestAdapter {
    config = media_streaming_31_config;
    constructor(credentials) {
        super(media_streaming_31_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_31', MediaStreaming31Adapter);
// StratusMax Adapter [1011]
// podcast solution for media
const media_podcast_32_config = {
    id: 'media_podcast_32',
    name: 'StratusMax',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratusmax.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_32_config);
export class MediaPodcast32Adapter extends GenericRestAdapter {
    config = media_podcast_32_config;
    constructor(credentials) {
        super(media_podcast_32_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_32', MediaPodcast32Adapter);
// QuestLogic Adapter [1012]
// music solution for media
const media_music_33_config = {
    id: 'media_music_33',
    name: 'QuestLogic',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.questlogic.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_33_config);
export class MediaMusic33Adapter extends GenericRestAdapter {
    config = media_music_33_config;
    constructor(credentials) {
        super(media_music_33_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_33', MediaMusic33Adapter);
// PivotForce Adapter [1013]
// video solution for media
const media_video_34_config = {
    id: 'media_video_34',
    name: 'PivotForce',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.pivotforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_34_config);
export class MediaVideo34Adapter extends GenericRestAdapter {
    config = media_video_34_config;
    constructor(credentials) {
        super(media_video_34_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_34', MediaVideo34Adapter);
// MaverickWorks Adapter [1014]
// publishing solution for media
const media_publishing_35_config = {
    id: 'media_publishing_35',
    name: 'MaverickWorks',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_35_config);
export class MediaPublishing35Adapter extends GenericRestAdapter {
    config = media_publishing_35_config;
    constructor(credentials) {
        super(media_publishing_35_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_35', MediaPublishing35Adapter);
// MatrixPath Adapter [1015]
// broadcast solution for media
const media_broadcast_36_config = {
    id: 'media_broadcast_36',
    name: 'MatrixPath',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixpath.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_36_config);
export class MediaBroadcast36Adapter extends GenericRestAdapter {
    config = media_broadcast_36_config;
    constructor(credentials) {
        super(media_broadcast_36_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_36', MediaBroadcast36Adapter);
// BrightHub Adapter [1016]
// content solution for media
const media_content_37_config = {
    id: 'media_content_37',
    name: 'BrightHub',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.brighthub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_37_config);
export class MediaContent37Adapter extends GenericRestAdapter {
    config = media_content_37_config;
    constructor(credentials) {
        super(media_content_37_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_37', MediaContent37Adapter);
// ForgeOne Adapter [1017]
// social solution for media
const media_social_38_config = {
    id: 'media_social_38',
    name: 'ForgeOne',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.forgeone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_38_config);
export class MediaSocial38Adapter extends GenericRestAdapter {
    config = media_social_38_config;
    constructor(credentials) {
        super(media_social_38_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_38', MediaSocial38Adapter);
// MatrixNetwork Adapter [1018]
// gaming solution for media
const media_gaming_39_config = {
    id: 'media_gaming_39',
    name: 'MatrixNetwork',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_39_config);
export class MediaGaming39Adapter extends GenericRestAdapter {
    config = media_gaming_39_config;
    constructor(credentials) {
        super(media_gaming_39_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_39', MediaGaming39Adapter);
// JunoCloud Adapter [1019]
// news solution for media
const media_news_40_config = {
    id: 'media_news_40',
    name: 'JunoCloud',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.junocloud.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_40_config);
export class MediaNews40Adapter extends GenericRestAdapter {
    config = media_news_40_config;
    constructor(credentials) {
        super(media_news_40_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_40', MediaNews40Adapter);
// HorizonForce Adapter [1020]
// streaming solution for media
const media_streaming_41_config = {
    id: 'media_streaming_41',
    name: 'HorizonForce',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.horizonforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_41_config);
export class MediaStreaming41Adapter extends GenericRestAdapter {
    config = media_streaming_41_config;
    constructor(credentials) {
        super(media_streaming_41_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_41', MediaStreaming41Adapter);
// MaverickZone Adapter [1021]
// podcast solution for media
const media_podcast_42_config = {
    id: 'media_podcast_42',
    name: 'MaverickZone',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.maverickzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_42_config);
export class MediaPodcast42Adapter extends GenericRestAdapter {
    config = media_podcast_42_config;
    constructor(credentials) {
        super(media_podcast_42_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_42', MediaPodcast42Adapter);
// OnyxWave Adapter [1022]
// music solution for media
const media_music_43_config = {
    id: 'media_music_43',
    name: 'OnyxWave',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.onyxwave.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_43_config);
export class MediaMusic43Adapter extends GenericRestAdapter {
    config = media_music_43_config;
    constructor(credentials) {
        super(media_music_43_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_43', MediaMusic43Adapter);
// BoltZone Adapter [1023]
// video solution for media
const media_video_44_config = {
    id: 'media_video_44',
    name: 'BoltZone',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.boltzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_44_config);
export class MediaVideo44Adapter extends GenericRestAdapter {
    config = media_video_44_config;
    constructor(credentials) {
        super(media_video_44_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_44', MediaVideo44Adapter);
// BeaconDigital Adapter [1024]
// publishing solution for media
const media_publishing_45_config = {
    id: 'media_publishing_45',
    name: 'BeaconDigital',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.beacondigital.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_45_config);
export class MediaPublishing45Adapter extends GenericRestAdapter {
    config = media_publishing_45_config;
    constructor(credentials) {
        super(media_publishing_45_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_45', MediaPublishing45Adapter);
// CipherBase Adapter [1025]
// broadcast solution for media
const media_broadcast_46_config = {
    id: 'media_broadcast_46',
    name: 'CipherBase',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cipherbase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_46_config);
export class MediaBroadcast46Adapter extends GenericRestAdapter {
    config = media_broadcast_46_config;
    constructor(credentials) {
        super(media_broadcast_46_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_46', MediaBroadcast46Adapter);
// ZestHub Adapter [1026]
// content solution for media
const media_content_47_config = {
    id: 'media_content_47',
    name: 'ZestHub',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zesthub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_47_config);
export class MediaContent47Adapter extends GenericRestAdapter {
    config = media_content_47_config;
    constructor(credentials) {
        super(media_content_47_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_47', MediaContent47Adapter);
// MatrixSolutions Adapter [1027]
// social solution for media
const media_social_48_config = {
    id: 'media_social_48',
    name: 'MatrixSolutions',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.matrixsolutions.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_48_config);
export class MediaSocial48Adapter extends GenericRestAdapter {
    config = media_social_48_config;
    constructor(credentials) {
        super(media_social_48_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_48', MediaSocial48Adapter);
// HyperStack Adapter [1028]
// gaming solution for media
const media_gaming_49_config = {
    id: 'media_gaming_49',
    name: 'HyperStack',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.hyperstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_49_config);
export class MediaGaming49Adapter extends GenericRestAdapter {
    config = media_gaming_49_config;
    constructor(credentials) {
        super(media_gaming_49_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_49', MediaGaming49Adapter);
// VisionForce Adapter [1029]
// news solution for media
const media_news_50_config = {
    id: 'media_news_50',
    name: 'VisionForce',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.visionforce.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_50_config);
export class MediaNews50Adapter extends GenericRestAdapter {
    config = media_news_50_config;
    constructor(credentials) {
        super(media_news_50_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_50', MediaNews50Adapter);
// RaptorHub Adapter [1030]
// streaming solution for media
const media_streaming_51_config = {
    id: 'media_streaming_51',
    name: 'RaptorHub',
    category: 'media',
    description: 'streaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.raptorhub.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_streaming_51_config);
export class MediaStreaming51Adapter extends GenericRestAdapter {
    config = media_streaming_51_config;
    constructor(credentials) {
        super(media_streaming_51_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_streaming_51', MediaStreaming51Adapter);
// EdgeTechnologies Adapter [1031]
// podcast solution for media
const media_podcast_52_config = {
    id: 'media_podcast_52',
    name: 'EdgeTechnologies',
    category: 'media',
    description: 'podcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.edgetechnologies.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_podcast_52_config);
export class MediaPodcast52Adapter extends GenericRestAdapter {
    config = media_podcast_52_config;
    constructor(credentials) {
        super(media_podcast_52_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_podcast_52', MediaPodcast52Adapter);
// ShiftCore Adapter [1032]
// music solution for media
const media_music_53_config = {
    id: 'media_music_53',
    name: 'ShiftCore',
    category: 'media',
    description: 'music solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.shiftcore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_music_53_config);
export class MediaMusic53Adapter extends GenericRestAdapter {
    config = media_music_53_config;
    constructor(credentials) {
        super(media_music_53_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_music_53', MediaMusic53Adapter);
// UpliftPlus Adapter [1033]
// video solution for media
const media_video_54_config = {
    id: 'media_video_54',
    name: 'UpliftPlus',
    category: 'media',
    description: 'video solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.upliftplus.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_video_54_config);
export class MediaVideo54Adapter extends GenericRestAdapter {
    config = media_video_54_config;
    constructor(credentials) {
        super(media_video_54_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_video_54', MediaVideo54Adapter);
// TitanDynamics Adapter [1034]
// publishing solution for media
const media_publishing_55_config = {
    id: 'media_publishing_55',
    name: 'TitanDynamics',
    category: 'media',
    description: 'publishing solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.titandynamics.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_publishing_55_config);
export class MediaPublishing55Adapter extends GenericRestAdapter {
    config = media_publishing_55_config;
    constructor(credentials) {
        super(media_publishing_55_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_publishing_55', MediaPublishing55Adapter);
// EmberZone Adapter [1035]
// broadcast solution for media
const media_broadcast_56_config = {
    id: 'media_broadcast_56',
    name: 'EmberZone',
    category: 'media',
    description: 'broadcast solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.emberzone.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_broadcast_56_config);
export class MediaBroadcast56Adapter extends GenericRestAdapter {
    config = media_broadcast_56_config;
    constructor(credentials) {
        super(media_broadcast_56_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_broadcast_56', MediaBroadcast56Adapter);
// OmegaNetwork Adapter [1036]
// content solution for media
const media_content_57_config = {
    id: 'media_content_57',
    name: 'OmegaNetwork',
    category: 'media',
    description: 'content solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.omeganetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_content_57_config);
export class MediaContent57Adapter extends GenericRestAdapter {
    config = media_content_57_config;
    constructor(credentials) {
        super(media_content_57_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_content_57', MediaContent57Adapter);
// CoreWorks Adapter [1037]
// social solution for media
const media_social_58_config = {
    id: 'media_social_58',
    name: 'CoreWorks',
    category: 'media',
    description: 'social solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.coreworks.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_social_58_config);
export class MediaSocial58Adapter extends GenericRestAdapter {
    config = media_social_58_config;
    constructor(credentials) {
        super(media_social_58_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_social_58', MediaSocial58Adapter);
// RushNetwork Adapter [1038]
// gaming solution for media
const media_gaming_59_config = {
    id: 'media_gaming_59',
    name: 'RushNetwork',
    category: 'media',
    description: 'gaming solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.rushnetwork.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_gaming_59_config);
export class MediaGaming59Adapter extends GenericRestAdapter {
    config = media_gaming_59_config;
    constructor(credentials) {
        super(media_gaming_59_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_gaming_59', MediaGaming59Adapter);
// StratusStack Adapter [1039]
// news solution for media
const media_news_60_config = {
    id: 'media_news_60',
    name: 'StratusStack',
    category: 'media',
    description: 'news solution for media',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.stratusstack.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(media_news_60_config);
export class MediaNews60Adapter extends GenericRestAdapter {
    config = media_news_60_config;
    constructor(credentials) {
        super(media_news_60_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('media_news_60', MediaNews60Adapter);
//# sourceMappingURL=media.js.map