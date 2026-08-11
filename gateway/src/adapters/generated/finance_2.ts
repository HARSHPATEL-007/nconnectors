// Generated Adapters — finance (12 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY

import { AdapterConfig, AdapterResponse, AuthCredentials, registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';


// YouHodler Adapter [308]
// Crypto lending
const youhodler_config: AdapterConfig = {
  id: 'youhodler',
  name: 'YouHodler',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.youhodler.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(youhodler_config);

export class YouhodlerAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = youhodler_config;

  constructor(credentials: AuthCredentials) {
    super(youhodler_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('youhodler', YouhodlerAdapter);


// CoinLoan Adapter [309]
// Crypto lending
const coinloan_config: AdapterConfig = {
  id: 'coinloan',
  name: 'CoinLoan',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coinloan.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coinloan_config);

export class CoinloanAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coinloan_config;

  constructor(credentials: AuthCredentials) {
    super(coinloan_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('coinloan', CoinloanAdapter);


// Ledn Adapter [310]
// Crypto lending
const ledn_config: AdapterConfig = {
  id: 'ledn',
  name: 'Ledn',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.ledn.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(ledn_config);

export class LednAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = ledn_config;

  constructor(credentials: AuthCredentials) {
    super(ledn_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('ledn', LednAdapter);


// Hodlnaut Adapter [311]
// Crypto lending
const hodlnaut_config: AdapterConfig = {
  id: 'hodlnaut',
  name: 'Hodlnaut',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.hodlnaut.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(hodlnaut_config);

export class HodlnautAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = hodlnaut_config;

  constructor(credentials: AuthCredentials) {
    super(hodlnaut_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('hodlnaut', HodlnautAdapter);


// Stablegains Adapter [312]
// Crypto lending
const stablegains_config: AdapterConfig = {
  id: 'stablegains',
  name: 'Stablegains',
  category: 'finance',
  description: 'Crypto lending',
  authTypes: ['api_key'],
  baseUrl: 'https://api.stablegains.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(stablegains_config);

export class StablegainsAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = stablegains_config;

  constructor(credentials: AuthCredentials) {
    super(stablegains_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('stablegains', StablegainsAdapter);


// Coinmerce Adapter [313]
// Crypto exchange
const coinmerce_config: AdapterConfig = {
  id: 'coinmerce',
  name: 'Coinmerce',
  category: 'finance',
  description: 'Crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.coinmerce.io/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(coinmerce_config);

export class CoinmerceAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = coinmerce_config;

  constructor(credentials: AuthCredentials) {
    super(coinmerce_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('coinmerce', CoinmerceAdapter);


// Bitvavo Adapter [314]
// European crypto exchange
const bitvavo_config: AdapterConfig = {
  id: 'bitvavo',
  name: 'Bitvavo',
  category: 'finance',
  description: 'European crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitvavo.com/v2',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitvavo_config);

export class BitvavoAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitvavo_config;

  constructor(credentials: AuthCredentials) {
    super(bitvavo_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('bitvavo', BitvavoAdapter);


// Bitpanda Adapter [315]
// European crypto exchange
const bitpanda_config: AdapterConfig = {
  id: 'bitpanda',
  name: 'Bitpanda',
  category: 'finance',
  description: 'European crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.bitpanda.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(bitpanda_config);

export class BitpandaAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = bitpanda_config;

  constructor(credentials: AuthCredentials) {
    super(bitpanda_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('bitpanda', BitpandaAdapter);


// Blockchain Exchange Adapter [316]
// Crypto exchange
const blockchain_exchange_config: AdapterConfig = {
  id: 'blockchain_exchange',
  name: 'Blockchain Exchange',
  category: 'finance',
  description: 'Crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.blockchain.exchange/v3',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(blockchain_exchange_config);

export class BlockchainExchangeAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = blockchain_exchange_config;

  constructor(credentials: AuthCredentials) {
    super(blockchain_exchange_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('blockchain_exchange', BlockchainExchangeAdapter);


// Miraiex Adapter [317]
// Crypto exchange
const miraiex_config: AdapterConfig = {
  id: 'miraiex',
  name: 'Miraiex',
  category: 'finance',
  description: 'Crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.miraiex.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(miraiex_config);

export class MiraiexAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = miraiex_config;

  constructor(credentials: AuthCredentials) {
    super(miraiex_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('miraiex', MiraiexAdapter);


// Mercuri Adapter [318]
// Crypto exchange
const mercuri_config: AdapterConfig = {
  id: 'mercuri',
  name: 'Mercuri',
  category: 'finance',
  description: 'Crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.mercuri.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(mercuri_config);

export class MercuriAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = mercuri_config;

  constructor(credentials: AuthCredentials) {
    super(mercuri_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('mercuri', MercuriAdapter);


// Monful Adapter [319]
// Crypto exchange
const monful_config: AdapterConfig = {
  id: 'monful',
  name: 'Monful',
  category: 'finance',
  description: 'Crypto exchange',
  authTypes: ['api_key'],
  baseUrl: 'https://api.monful.com/v1',
  rateLimit: { requests: 100, windowMs: 60000 },
  pagination: { type: 'offset', maxPerPage: 100 },
};

registerAdapter(monful_config);

export class MonfulAdapter extends GenericRestAdapter {
  readonly config: AdapterConfig = monful_config;

  constructor(credentials: AuthCredentials) {
    super(monful_config, credentials);
  }

  // Provider-specific methods
  async search(query: string, params?: Record<string, string>): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
  }

  async getById(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'GET', path: `/${id}` });
  }

  async createResource(body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'POST', path: '/', body });
  }

  async updateResource(id: string, body: unknown): Promise<AdapterResponse> {
    return this.performRequest({ method: 'PUT', path: `/${id}`, body });
  }

  async deleteResource(id: string): Promise<AdapterResponse> {
    return this.performRequest({ method: 'DELETE', path: `/${id}` });
  }
}

registry.register('monful', MonfulAdapter);

