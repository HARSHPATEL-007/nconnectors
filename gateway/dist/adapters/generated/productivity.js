// Generated Adapters — productivity (41 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// Trello Adapter [110]
// Visual project management
const trello_config = {
    id: 'trello',
    name: 'Trello',
    category: 'productivity',
    description: 'Visual project management',
    authTypes: ['oauth1'],
    baseUrl: 'https://api.trello.com/1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(trello_config);
export class TrelloAdapter extends GenericRestAdapter {
    config = trello_config;
    constructor(credentials) {
        super(trello_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('trello', TrelloAdapter);
// Asana Adapter [111]
// Work management platform
const asana_config = {
    id: 'asana',
    name: 'Asana',
    category: 'productivity',
    description: 'Work management platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://app.asana.com/api/1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(asana_config);
export class AsanaAdapter extends GenericRestAdapter {
    config = asana_config;
    constructor(credentials) {
        super(asana_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('asana', AsanaAdapter);
// Notion Adapter [112]
// All-in-one workspace
const notion_config = {
    id: 'notion',
    name: 'Notion',
    category: 'productivity',
    description: 'All-in-one workspace',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.notion.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(notion_config);
export class NotionAdapter extends GenericRestAdapter {
    config = notion_config;
    constructor(credentials) {
        super(notion_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('notion', NotionAdapter);
// ClickUp Adapter [113]
// All-in-one productivity
const clickup_config = {
    id: 'clickup',
    name: 'ClickUp',
    category: 'productivity',
    description: 'All-in-one productivity',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.clickup.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(clickup_config);
export class ClickupAdapter extends GenericRestAdapter {
    config = clickup_config;
    constructor(credentials) {
        super(clickup_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('clickup', ClickupAdapter);
// Basecamp Adapter [114]
// Project collaboration
const basecamp_config = {
    id: 'basecamp',
    name: 'Basecamp',
    category: 'productivity',
    description: 'Project collaboration',
    authTypes: ['oauth2'],
    baseUrl: 'https://3.basecampapi.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(basecamp_config);
export class BasecampAdapter extends GenericRestAdapter {
    config = basecamp_config;
    constructor(credentials) {
        super(basecamp_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('basecamp', BasecampAdapter);
// Airtable Adapter [115]
// Spreadsheet-database hybrid
const airtable_config = {
    id: 'airtable',
    name: 'Airtable',
    category: 'productivity',
    description: 'Spreadsheet-database hybrid',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.airtable.com/v0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(airtable_config);
export class AirtableAdapter extends GenericRestAdapter {
    config = airtable_config;
    constructor(credentials) {
        super(airtable_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('airtable', AirtableAdapter);
// Smartsheet Adapter [116]
// Work management platform
const smartsheet_config = {
    id: 'smartsheet',
    name: 'Smartsheet',
    category: 'productivity',
    description: 'Work management platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.smartsheet.com/2.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(smartsheet_config);
export class SmartsheetAdapter extends GenericRestAdapter {
    config = smartsheet_config;
    constructor(credentials) {
        super(smartsheet_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('smartsheet', SmartsheetAdapter);
// Monday.com Adapter [117]
// Work operating system
const monday_com_config = {
    id: 'monday_com',
    name: 'Monday.com',
    category: 'productivity',
    description: 'Work operating system',
    authTypes: ['api_key'],
    baseUrl: 'https://api.monday.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(monday_com_config);
export class MondayComAdapter extends GenericRestAdapter {
    config = monday_com_config;
    constructor(credentials) {
        super(monday_com_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('monday_com', MondayComAdapter);
// Wrike Adapter [118]
// Work management collaboration
const wrike_config = {
    id: 'wrike',
    name: 'Wrike',
    category: 'productivity',
    description: 'Work management collaboration',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.wrike.com/api/v4',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(wrike_config);
export class WrikeAdapter extends GenericRestAdapter {
    config = wrike_config;
    constructor(credentials) {
        super(wrike_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('wrike', WrikeAdapter);
// Teamwork Adapter [119]
// Client project management
const teamwork_config = {
    id: 'teamwork',
    name: 'Teamwork',
    category: 'productivity',
    description: 'Client project management',
    authTypes: ['basic'],
    baseUrl: 'https://your-domain.teamwork.com/json',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(teamwork_config);
export class TeamworkAdapter extends GenericRestAdapter {
    config = teamwork_config;
    constructor(credentials) {
        super(teamwork_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('teamwork', TeamworkAdapter);
// MeisterTask Adapter [120]
// Collaborative task management
const meistertask_config = {
    id: 'meistertask',
    name: 'MeisterTask',
    category: 'productivity',
    description: 'Collaborative task management',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.meistertask.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(meistertask_config);
export class MeistertaskAdapter extends GenericRestAdapter {
    config = meistertask_config;
    constructor(credentials) {
        super(meistertask_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('meistertask', MeistertaskAdapter);
// Kintone Adapter [121]
// Custom database platform
const kintone_config = {
    id: 'kintone',
    name: 'Kintone',
    category: 'productivity',
    description: 'Custom database platform',
    authTypes: ['basic'],
    baseUrl: 'https://domain.cybozu.com/k/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(kintone_config);
export class KintoneAdapter extends GenericRestAdapter {
    config = kintone_config;
    constructor(credentials) {
        super(kintone_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('kintone', KintoneAdapter);
// Coda Adapter [122]
// All-in-one doc platform
const coda_config = {
    id: 'coda',
    name: 'Coda',
    category: 'productivity',
    description: 'All-in-one doc platform',
    authTypes: ['api_key'],
    baseUrl: 'https://coda.io/apis/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(coda_config);
export class CodaAdapter extends GenericRestAdapter {
    config = coda_config;
    constructor(credentials) {
        super(coda_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('coda', CodaAdapter);
// Todoist Adapter [123]
// Task management and to-do
const todoist_config = {
    id: 'todoist',
    name: 'Todoist',
    category: 'productivity',
    description: 'Task management and to-do',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.todoist.com/rest/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(todoist_config);
export class TodoistAdapter extends GenericRestAdapter {
    config = todoist_config;
    constructor(credentials) {
        super(todoist_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('todoist', TodoistAdapter);
// TickTick Adapter [124]
// Task management and habits
const ticktick_config = {
    id: 'ticktick',
    name: 'TickTick',
    category: 'productivity',
    description: 'Task management and habits',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.ticktick.com/open/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(ticktick_config);
export class TicktickAdapter extends GenericRestAdapter {
    config = ticktick_config;
    constructor(credentials) {
        super(ticktick_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('ticktick', TicktickAdapter);
// Taskade Adapter [125]
// AI productivity collaboration
const taskade_config = {
    id: 'taskade',
    name: 'Taskade',
    category: 'productivity',
    description: 'AI productivity collaboration',
    authTypes: ['api_key'],
    baseUrl: 'https://www.taskade.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(taskade_config);
export class TaskadeAdapter extends GenericRestAdapter {
    config = taskade_config;
    constructor(credentials) {
        super(taskade_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('taskade', TaskadeAdapter);
// Quire Adapter [126]
// Collaborative task management
const quire_config = {
    id: 'quire',
    name: 'Quire',
    category: 'productivity',
    description: 'Collaborative task management',
    authTypes: ['oauth2'],
    baseUrl: 'https://quire.io/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(quire_config);
export class QuireAdapter extends GenericRestAdapter {
    config = quire_config;
    constructor(credentials) {
        super(quire_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('quire', QuireAdapter);
// Habitica Adapter [127]
// Gamified habit management
const habitica_config = {
    id: 'habitica',
    name: 'Habitica',
    category: 'productivity',
    description: 'Gamified habit management',
    authTypes: ['api_key'],
    baseUrl: 'https://habitica.com/api/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(habitica_config);
export class HabiticaAdapter extends GenericRestAdapter {
    config = habitica_config;
    constructor(credentials) {
        super(habitica_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('habitica', HabiticaAdapter);
// Roam Research Adapter [128]
// Note-taking knowledge mgmt
const roam_research_config = {
    id: 'roam_research',
    name: 'Roam Research',
    category: 'productivity',
    description: 'Note-taking knowledge mgmt',
    authTypes: ['api_key'],
    baseUrl: 'https://api.roamresearch.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(roam_research_config);
export class RoamResearchAdapter extends GenericRestAdapter {
    config = roam_research_config;
    constructor(credentials) {
        super(roam_research_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('roam_research', RoamResearchAdapter);
// Logseq Adapter [129]
// Open source knowledge mgmt
const logseq_config = {
    id: 'logseq',
    name: 'Logseq',
    category: 'productivity',
    description: 'Open source knowledge mgmt',
    authTypes: ['api_key'],
    baseUrl: 'https://api.logseq.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(logseq_config);
export class LogseqAdapter extends GenericRestAdapter {
    config = logseq_config;
    constructor(credentials) {
        super(logseq_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('logseq', LogseqAdapter);
// Heptabase Adapter [130]
// Visual note-taking
const heptabase_config = {
    id: 'heptabase',
    name: 'Heptabase',
    category: 'productivity',
    description: 'Visual note-taking',
    authTypes: ['api_key'],
    baseUrl: 'https://api.heptabase.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(heptabase_config);
export class HeptabaseAdapter extends GenericRestAdapter {
    config = heptabase_config;
    constructor(credentials) {
        super(heptabase_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('heptabase', HeptabaseAdapter);
// Capacities Adapter [131]
// Note-taking with objects
const capacities_config = {
    id: 'capacities',
    name: 'Capacities',
    category: 'productivity',
    description: 'Note-taking with objects',
    authTypes: ['api_key'],
    baseUrl: 'https://api.capacities.io/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(capacities_config);
export class CapacitiesAdapter extends GenericRestAdapter {
    config = capacities_config;
    constructor(credentials) {
        super(capacities_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('capacities', CapacitiesAdapter);
// Tana Adapter [132]
// Supernote and outliner
const tana_config = {
    id: 'tana',
    name: 'Tana',
    category: 'productivity',
    description: 'Supernote and outliner',
    authTypes: ['api_key'],
    baseUrl: 'https://api.tana.inc/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(tana_config);
export class TanaAdapter extends GenericRestAdapter {
    config = tana_config;
    constructor(credentials) {
        super(tana_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('tana', TanaAdapter);
// WorkFlowy Adapter [133]
// Outlining and notes
const workflowy_config = {
    id: 'workflowy',
    name: 'WorkFlowy',
    category: 'productivity',
    description: 'Outlining and notes',
    authTypes: ['api_key'],
    baseUrl: 'https://workflowy.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(workflowy_config);
export class WorkflowyAdapter extends GenericRestAdapter {
    config = workflowy_config;
    constructor(credentials) {
        super(workflowy_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('workflowy', WorkflowyAdapter);
// Dynalist Adapter [134]
// Outliner and notes
const dynalist_config = {
    id: 'dynalist',
    name: 'Dynalist',
    category: 'productivity',
    description: 'Outliner and notes',
    authTypes: ['api_key'],
    baseUrl: 'https://dynalist.io/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(dynalist_config);
export class DynalistAdapter extends GenericRestAdapter {
    config = dynalist_config;
    constructor(credentials) {
        super(dynalist_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('dynalist', DynalistAdapter);
// Miro Adapter [135]
// Online collaborative whiteboard
const miro_config = {
    id: 'miro',
    name: 'Miro',
    category: 'productivity',
    description: 'Online collaborative whiteboard',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.miro.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(miro_config);
export class MiroAdapter extends GenericRestAdapter {
    config = miro_config;
    constructor(credentials) {
        super(miro_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('miro', MiroAdapter);
// Mural Adapter [136]
// Visual collaboration workspace
const mural_config = {
    id: 'mural',
    name: 'Mural',
    category: 'productivity',
    description: 'Visual collaboration workspace',
    authTypes: ['oauth2'],
    baseUrl: 'https://app.mural.co/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mural_config);
export class MuralAdapter extends GenericRestAdapter {
    config = mural_config;
    constructor(credentials) {
        super(mural_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mural', MuralAdapter);
// Calendly Adapter [137]
// Online appointment scheduling
const calendly_config = {
    id: 'calendly',
    name: 'Calendly',
    category: 'productivity',
    description: 'Online appointment scheduling',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.calendly.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(calendly_config);
export class CalendlyAdapter extends GenericRestAdapter {
    config = calendly_config;
    constructor(credentials) {
        super(calendly_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('calendly', CalendlyAdapter);
// Acuity Scheduling Adapter [138]
// Appointment scheduling
const acuity_scheduling_config = {
    id: 'acuity_scheduling',
    name: 'Acuity Scheduling',
    category: 'productivity',
    description: 'Appointment scheduling',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.acuityscheduling.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(acuity_scheduling_config);
export class AcuitySchedulingAdapter extends GenericRestAdapter {
    config = acuity_scheduling_config;
    constructor(credentials) {
        super(acuity_scheduling_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('acuity_scheduling', AcuitySchedulingAdapter);
// Doodle Adapter [139]
// Meeting scheduling polling
const doodle_config = {
    id: 'doodle',
    name: 'Doodle',
    category: 'productivity',
    description: 'Meeting scheduling polling',
    authTypes: ['oauth2'],
    baseUrl: 'https://doodle.com/api/v2.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(doodle_config);
export class DoodleAdapter extends GenericRestAdapter {
    config = doodle_config;
    constructor(credentials) {
        super(doodle_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('doodle', DoodleAdapter);
// Square Appointments Adapter [140]
// Scheduling for services
const square_appointments_config = {
    id: 'square_appointments',
    name: 'Square Appointments',
    category: 'productivity',
    description: 'Scheduling for services',
    authTypes: ['oauth2'],
    baseUrl: 'https://connect.squareup.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(square_appointments_config);
export class SquareAppointmentsAdapter extends GenericRestAdapter {
    config = square_appointments_config;
    constructor(credentials) {
        super(square_appointments_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('square_appointments', SquareAppointmentsAdapter);
// Setmore Adapter [141]
// Free appointment scheduling
const setmore_config = {
    id: 'setmore',
    name: 'Setmore',
    category: 'productivity',
    description: 'Free appointment scheduling',
    authTypes: ['oauth2'],
    baseUrl: 'https://developer.setmore.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(setmore_config);
export class SetmoreAdapter extends GenericRestAdapter {
    config = setmore_config;
    constructor(credentials) {
        super(setmore_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('setmore', SetmoreAdapter);
// Cal.com Adapter [142]
// Open source scheduling
const cal_com_config = {
    id: 'cal_com',
    name: 'Cal.com',
    category: 'productivity',
    description: 'Open source scheduling',
    authTypes: ['api_key'],
    baseUrl: 'https://api.cal.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(cal_com_config);
export class CalComAdapter extends GenericRestAdapter {
    config = cal_com_config;
    constructor(credentials) {
        super(cal_com_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('cal_com', CalComAdapter);
// Cronofy Adapter [143]
// Unified calendar API
const cronofy_config = {
    id: 'cronofy',
    name: 'Cronofy',
    category: 'productivity',
    description: 'Unified calendar API',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.cronofy.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(cronofy_config);
export class CronofyAdapter extends GenericRestAdapter {
    config = cronofy_config;
    constructor(credentials) {
        super(cronofy_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('cronofy', CronofyAdapter);
// Nylas Adapter [144]
// Email calendar contacts API
const nylas_config = {
    id: 'nylas',
    name: 'Nylas',
    category: 'productivity',
    description: 'Email calendar contacts API',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.nylas.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(nylas_config);
export class NylasAdapter extends GenericRestAdapter {
    config = nylas_config;
    constructor(credentials) {
        super(nylas_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('nylas', NylasAdapter);
// Google Calendar Adapter [145]
// Calendar by Google
const google_calendar_config = {
    id: 'google_calendar',
    name: 'Google Calendar',
    category: 'productivity',
    description: 'Calendar by Google',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.googleapis.com/calendar/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(google_calendar_config);
export class GoogleCalendarAdapter extends GenericRestAdapter {
    config = google_calendar_config;
    constructor(credentials) {
        super(google_calendar_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('google_calendar', GoogleCalendarAdapter);
// Microsoft Calendar Adapter [146]
// Calendar by Microsoft
const microsoft_calendar_config = {
    id: 'microsoft_calendar',
    name: 'Microsoft Calendar',
    category: 'productivity',
    description: 'Calendar by Microsoft',
    authTypes: ['oauth2'],
    baseUrl: 'https://graph.microsoft.com/v1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(microsoft_calendar_config);
export class MicrosoftCalendarAdapter extends GenericRestAdapter {
    config = microsoft_calendar_config;
    constructor(credentials) {
        super(microsoft_calendar_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('microsoft_calendar', MicrosoftCalendarAdapter);
// Loom Adapter [147]
// Video messaging screen recording
const loom_config = {
    id: 'loom',
    name: 'Loom',
    category: 'productivity',
    description: 'Video messaging screen recording',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.loom.com/api/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(loom_config);
export class LoomAdapter extends GenericRestAdapter {
    config = loom_config;
    constructor(credentials) {
        super(loom_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('loom', LoomAdapter);
// Confluence Adapter [148]
// Team workspace knowledge
const confluence_config = {
    id: 'confluence',
    name: 'Confluence',
    category: 'productivity',
    description: 'Team workspace knowledge',
    authTypes: ['oauth2'],
    baseUrl: 'https://your-domain.atlassian.net/wiki/rest/api',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(confluence_config);
export class ConfluenceAdapter extends GenericRestAdapter {
    config = confluence_config;
    constructor(credentials) {
        super(confluence_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('confluence', ConfluenceAdapter);
// Linear Adapter [149]
// Issue tracking project mgmt
const linear_config = {
    id: 'linear',
    name: 'Linear',
    category: 'productivity',
    description: 'Issue tracking project mgmt',
    authTypes: ['api_key'],
    baseUrl: 'https://api.linear.app/graphql',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(linear_config);
export class LinearAdapter extends GenericRestAdapter {
    config = linear_config;
    constructor(credentials) {
        super(linear_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('linear', LinearAdapter);
// Height Adapter [150]
// Collaborative project mgmt
const height_config = {
    id: 'height',
    name: 'Height',
    category: 'productivity',
    description: 'Collaborative project mgmt',
    authTypes: ['api_key'],
    baseUrl: 'https://api.height.app/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(height_config);
export class HeightAdapter extends GenericRestAdapter {
    config = height_config;
    constructor(credentials) {
        super(height_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('height', HeightAdapter);
//# sourceMappingURL=productivity.js.map