// Generated Adapters — communication (28 integrations)
// Auto-generated from catalog — DO NOT EDIT MANUALLY
import { registerAdapter, registry } from '../core/index.js';
import { GenericRestAdapter } from '../generic.js';
// Gmail Adapter [82]
// Google email service
const gmail_config = {
    id: 'gmail',
    name: 'Gmail',
    category: 'communication',
    description: 'Google email service',
    authTypes: ['oauth2'],
    baseUrl: 'https://gmail.googleapis.com/gmail/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(gmail_config);
export class GmailAdapter extends GenericRestAdapter {
    config = gmail_config;
    constructor(credentials) {
        super(gmail_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('gmail', GmailAdapter);
// Microsoft Outlook Adapter [83]
// Microsoft email calendar contacts
const outlook_config = {
    id: 'outlook',
    name: 'Microsoft Outlook',
    category: 'communication',
    description: 'Microsoft email calendar contacts',
    authTypes: ['oauth2'],
    baseUrl: 'https://graph.microsoft.com/v1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(outlook_config);
export class OutlookAdapter extends GenericRestAdapter {
    config = outlook_config;
    constructor(credentials) {
        super(outlook_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('outlook', OutlookAdapter);
// Slack Adapter [84]
// Business communication platform
const slack_config = {
    id: 'slack',
    name: 'Slack',
    category: 'communication',
    description: 'Business communication platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://slack.com/api',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(slack_config);
export class SlackAdapter extends GenericRestAdapter {
    config = slack_config;
    constructor(credentials) {
        super(slack_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('slack', SlackAdapter);
// Discord Adapter [85]
// Voice video text communication
const discord_config = {
    id: 'discord',
    name: 'Discord',
    category: 'communication',
    description: 'Voice video text communication',
    authTypes: ['bearer'],
    baseUrl: 'https://discord.com/api/v10',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(discord_config);
export class DiscordAdapter extends GenericRestAdapter {
    config = discord_config;
    constructor(credentials) {
        super(discord_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('discord', DiscordAdapter);
// Telegram Adapter [86]
// Cloud messaging with bot API
const telegram_config = {
    id: 'telegram',
    name: 'Telegram',
    category: 'communication',
    description: 'Cloud messaging with bot API',
    authTypes: ['api_key'],
    baseUrl: 'https://api.telegram.org/bot',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(telegram_config);
export class TelegramAdapter extends GenericRestAdapter {
    config = telegram_config;
    constructor(credentials) {
        super(telegram_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('telegram', TelegramAdapter);
// WhatsApp Business Adapter [87]
// Business messaging API
const whatsapp_business_config = {
    id: 'whatsapp_business',
    name: 'WhatsApp Business',
    category: 'communication',
    description: 'Business messaging API',
    authTypes: ['oauth2'],
    baseUrl: 'https://graph.facebook.com/v18.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(whatsapp_business_config);
export class WhatsappBusinessAdapter extends GenericRestAdapter {
    config = whatsapp_business_config;
    constructor(credentials) {
        super(whatsapp_business_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('whatsapp_business', WhatsappBusinessAdapter);
// Microsoft Teams Adapter [88]
// Team collaboration platform
const microsoft_teams_config = {
    id: 'microsoft_teams',
    name: 'Microsoft Teams',
    category: 'communication',
    description: 'Team collaboration platform',
    authTypes: ['oauth2'],
    baseUrl: 'https://graph.microsoft.com/v1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(microsoft_teams_config);
export class MicrosoftTeamsAdapter extends GenericRestAdapter {
    config = microsoft_teams_config;
    constructor(credentials) {
        super(microsoft_teams_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('microsoft_teams', MicrosoftTeamsAdapter);
// Zoom Adapter [89]
// Video conferencing webinars
const zoom_config = {
    id: 'zoom',
    name: 'Zoom',
    category: 'communication',
    description: 'Video conferencing webinars',
    authTypes: ['oauth2'],
    baseUrl: 'https://api.zoom.us/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(zoom_config);
export class ZoomAdapter extends GenericRestAdapter {
    config = zoom_config;
    constructor(credentials) {
        super(zoom_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('zoom', ZoomAdapter);
// Google Meet Adapter [90]
// Video conferencing by Google
const google_meet_config = {
    id: 'google_meet',
    name: 'Google Meet',
    category: 'communication',
    description: 'Video conferencing by Google',
    authTypes: ['oauth2'],
    baseUrl: 'https://meet.googleapis.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(google_meet_config);
export class GoogleMeetAdapter extends GenericRestAdapter {
    config = google_meet_config;
    constructor(credentials) {
        super(google_meet_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('google_meet', GoogleMeetAdapter);
// Webex Adapter [91]
// Cisco video collaboration
const webex_config = {
    id: 'webex',
    name: 'Webex',
    category: 'communication',
    description: 'Cisco video collaboration',
    authTypes: ['oauth2'],
    baseUrl: 'https://webexapis.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(webex_config);
export class WebexAdapter extends GenericRestAdapter {
    config = webex_config;
    constructor(credentials) {
        super(webex_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('webex', WebexAdapter);
// Twilio Adapter [92]
// Cloud communications SMS voice
const twilio_config = {
    id: 'twilio',
    name: 'Twilio',
    category: 'communication',
    description: 'Cloud communications SMS voice',
    authTypes: ['basic'],
    baseUrl: 'https://api.twilio.com/2010-04-01',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(twilio_config);
export class TwilioAdapter extends GenericRestAdapter {
    config = twilio_config;
    constructor(credentials) {
        super(twilio_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('twilio', TwilioAdapter);
// Vonage Adapter [93]
// Communications APIs
const vonage_config = {
    id: 'vonage',
    name: 'Vonage',
    category: 'communication',
    description: 'Communications APIs',
    authTypes: ['api_key'],
    baseUrl: 'https://api.nexmo.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(vonage_config);
export class VonageAdapter extends GenericRestAdapter {
    config = vonage_config;
    constructor(credentials) {
        super(vonage_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('vonage', VonageAdapter);
// SendGrid Adapter [94]
// Cloud email delivery
const sendgrid_comm_config = {
    id: 'sendgrid_comm',
    name: 'SendGrid',
    category: 'communication',
    description: 'Cloud email delivery',
    authTypes: ['bearer'],
    baseUrl: 'https://api.sendgrid.com/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sendgrid_comm_config);
export class SendgridCommAdapter extends GenericRestAdapter {
    config = sendgrid_comm_config;
    constructor(credentials) {
        super(sendgrid_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sendgrid_comm', SendgridCommAdapter);
// Mailgun Adapter [95]
// Email API for developers
const mailgun_comm_config = {
    id: 'mailgun_comm',
    name: 'Mailgun',
    category: 'communication',
    description: 'Email API for developers',
    authTypes: ['basic'],
    baseUrl: 'https://api.mailgun.net/v3',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(mailgun_comm_config);
export class MailgunCommAdapter extends GenericRestAdapter {
    config = mailgun_comm_config;
    constructor(credentials) {
        super(mailgun_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('mailgun_comm', MailgunCommAdapter);
// Postmark Adapter [96]
// Transactional email delivery
const postmark_comm_config = {
    id: 'postmark_comm',
    name: 'Postmark',
    category: 'communication',
    description: 'Transactional email delivery',
    authTypes: ['api_key'],
    baseUrl: 'https://api.postmarkapp.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(postmark_comm_config);
export class PostmarkCommAdapter extends GenericRestAdapter {
    config = postmark_comm_config;
    constructor(credentials) {
        super(postmark_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('postmark_comm', PostmarkCommAdapter);
// Amazon SES Adapter [97]
// AWS email service
const amazon_ses_comm_config = {
    id: 'amazon_ses_comm',
    name: 'Amazon SES',
    category: 'communication',
    description: 'AWS email service',
    authTypes: ['api_key'],
    baseUrl: 'https://email.us-east-1.amazonaws.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(amazon_ses_comm_config);
export class AmazonSesCommAdapter extends GenericRestAdapter {
    config = amazon_ses_comm_config;
    constructor(credentials) {
        super(amazon_ses_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('amazon_ses_comm', AmazonSesCommAdapter);
// RingCentral Adapter [98]
// Cloud phone system
const ringcentral_config = {
    id: 'ringcentral',
    name: 'RingCentral',
    category: 'communication',
    description: 'Cloud phone system',
    authTypes: ['oauth2'],
    baseUrl: 'https://platform.ringcentral.com/restapi/v1.0',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(ringcentral_config);
export class RingcentralAdapter extends GenericRestAdapter {
    config = ringcentral_config;
    constructor(credentials) {
        super(ringcentral_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('ringcentral', RingcentralAdapter);
// Google Chat Adapter [99]
// Messaging for Google Workspace
const google_chat_config = {
    id: 'google_chat',
    name: 'Google Chat',
    category: 'communication',
    description: 'Messaging for Google Workspace',
    authTypes: ['oauth2'],
    baseUrl: 'https://chat.googleapis.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(google_chat_config);
export class GoogleChatAdapter extends GenericRestAdapter {
    config = google_chat_config;
    constructor(credentials) {
        super(google_chat_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('google_chat', GoogleChatAdapter);
// FireText Adapter [100]
// SMS messaging platform
const firetext_config = {
    id: 'firetext',
    name: 'FireText',
    category: 'communication',
    description: 'SMS messaging platform',
    authTypes: ['api_key'],
    baseUrl: 'https://www.firetext.co.uk/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(firetext_config);
export class FiretextAdapter extends GenericRestAdapter {
    config = firetext_config;
    constructor(credentials) {
        super(firetext_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('firetext', FiretextAdapter);
// Messente Adapter [101]
// Business SMS messaging
const messente_config = {
    id: 'messente',
    name: 'Messente',
    category: 'communication',
    description: 'Business SMS messaging',
    authTypes: ['basic'],
    baseUrl: 'https://api.messente.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(messente_config);
export class MessenteAdapter extends GenericRestAdapter {
    config = messente_config;
    constructor(credentials) {
        super(messente_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('messente', MessenteAdapter);
// Sinch Adapter [102]
// Cloud communications SMS
const sinch_config = {
    id: 'sinch',
    name: 'Sinch',
    category: 'communication',
    description: 'Cloud communications SMS',
    authTypes: ['api_key'],
    baseUrl: 'https://sms.api.sinch.com/xms/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(sinch_config);
export class SinchAdapter extends GenericRestAdapter {
    config = sinch_config;
    constructor(credentials) {
        super(sinch_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('sinch', SinchAdapter);
// Plivo Adapter [103]
// Cloud communications
const plivo_config = {
    id: 'plivo',
    name: 'Plivo',
    category: 'communication',
    description: 'Cloud communications',
    authTypes: ['basic'],
    baseUrl: 'https://api.plivo.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(plivo_config);
export class PlivoAdapter extends GenericRestAdapter {
    config = plivo_config;
    constructor(credentials) {
        super(plivo_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('plivo', PlivoAdapter);
// MessageBird Adapter [104]
// Omnichannel communications
const messagebird_config = {
    id: 'messagebird',
    name: 'MessageBird',
    category: 'communication',
    description: 'Omnichannel communications',
    authTypes: ['api_key'],
    baseUrl: 'https://rest.messagebird.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(messagebird_config);
export class MessagebirdAdapter extends GenericRestAdapter {
    config = messagebird_config;
    constructor(credentials) {
        super(messagebird_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('messagebird', MessagebirdAdapter);
// Clickatell Adapter [105]
// SMS messaging platform
const clickatell_config = {
    id: 'clickatell',
    name: 'Clickatell',
    category: 'communication',
    description: 'SMS messaging platform',
    authTypes: ['api_key'],
    baseUrl: 'https://platform.clickatell.com/messages',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(clickatell_config);
export class ClickatellAdapter extends GenericRestAdapter {
    config = clickatell_config;
    constructor(credentials) {
        super(clickatell_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('clickatell', ClickatellAdapter);
// Telnyx Adapter [106]
// Communications platform
const telnyx_config = {
    id: 'telnyx',
    name: 'Telnyx',
    category: 'communication',
    description: 'Communications platform',
    authTypes: ['api_key'],
    baseUrl: 'https://api.telnyx.com/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(telnyx_config);
export class TelnyxAdapter extends GenericRestAdapter {
    config = telnyx_config;
    constructor(credentials) {
        super(telnyx_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('telnyx', TelnyxAdapter);
// Bandwidth Adapter [107]
// Communications API
const bandwidth_config = {
    id: 'bandwidth',
    name: 'Bandwidth',
    category: 'communication',
    description: 'Communications API',
    authTypes: ['basic'],
    baseUrl: 'https://messaging.bandwidth.com/api/v2',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(bandwidth_config);
export class BandwidthAdapter extends GenericRestAdapter {
    config = bandwidth_config;
    constructor(credentials) {
        super(bandwidth_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('bandwidth', BandwidthAdapter);
// Amazon SNS Adapter [108]
// AWS notification service
const amazon_sns_comm_config = {
    id: 'amazon_sns_comm',
    name: 'Amazon SNS',
    category: 'communication',
    description: 'AWS notification service',
    authTypes: ['api_key'],
    baseUrl: 'https://sns.us-east-1.amazonaws.com',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(amazon_sns_comm_config);
export class AmazonSnsCommAdapter extends GenericRestAdapter {
    config = amazon_sns_comm_config;
    constructor(credentials) {
        super(amazon_sns_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('amazon_sns_comm', AmazonSnsCommAdapter);
// Amazon Pinpoint Adapter [109]
// AWS engagement service
const amazon_pinpoint_comm_config = {
    id: 'amazon_pinpoint_comm',
    name: 'Amazon Pinpoint',
    category: 'communication',
    description: 'AWS engagement service',
    authTypes: ['api_key'],
    baseUrl: 'https://pinpoint.us-east-1.amazonaws.com/v1',
    rateLimit: { requests: 100, windowMs: 60000 },
    pagination: { type: 'offset', maxPerPage: 100 },
};
registerAdapter(amazon_pinpoint_comm_config);
export class AmazonPinpointCommAdapter extends GenericRestAdapter {
    config = amazon_pinpoint_comm_config;
    constructor(credentials) {
        super(amazon_pinpoint_comm_config, credentials);
    }
    // Provider-specific methods
    async search(query, params) {
        return this.performRequest({ method: 'GET', path: '/search', params: { q: query, ...params } });
    }
    async getById(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async createResource(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async updateResource(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async deleteResource(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
}
registry.register('amazon_pinpoint_comm', AmazonPinpointCommAdapter);
//# sourceMappingURL=communication.js.map