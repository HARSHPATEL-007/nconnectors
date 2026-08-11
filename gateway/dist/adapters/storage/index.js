// Storage Production Connectors
import { BaseAdapter, registerAdapter } from '../core/index.js';
const s3Config = {
    id: 'aws_s3',
    name: 'AWS S3',
    category: 'storage',
    description: 'Amazon Simple Storage Service',
    authTypes: ['api_key'],
    baseUrl: 'https://s3.amazonaws.com',
    rateLimit: { requests: 100, windowMs: 60000 },
};
registerAdapter(s3Config);
export class S3Adapter extends BaseAdapter {
    config = s3Config;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/',
            params: { 'list-type': '2', prefix: params?.prefix || '', 'max-keys': params?.max_keys || '1000' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PUT', path: `/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/${id}` });
    }
    async uploadFile(bucket, key, content) {
        return this.performRequest({ method: 'PUT', path: `/${bucket}/${key}`, body: content });
    }
    async downloadFile(bucket, key) {
        return this.performRequest({ method: 'GET', path: `/${bucket}/${key}` });
    }
    async listBuckets() {
        return this.performRequest({ method: 'GET', path: '/' });
    }
}
const googleDriveConfig = {
    id: 'google_drive',
    name: 'Google Drive',
    category: 'storage',
    description: 'Cloud storage and document management',
    authTypes: ['oauth2'],
    baseUrl: 'https://www.googleapis.com/drive/v3',
    rateLimit: { requests: 1000, windowMs: 100000 },
    pagination: { type: 'cursor', maxPerPage: 1000 },
};
registerAdapter(googleDriveConfig);
export class GoogleDriveAdapter extends BaseAdapter {
    config = googleDriveConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'GET',
            path: '/files',
            params: { pageSize: params?.pageSize || '100', pageToken: params?.pageToken || '', q: params?.q || '' },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'GET', path: `/files/${id}` });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/files', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'PATCH', path: `/files/${id}`, body });
    }
    async delete(id) {
        return this.performRequest({ method: 'DELETE', path: `/files/${id}` });
    }
    async downloadFile(fileId) {
        return this.performRequest({ method: 'GET', path: `/files/${fileId}?alt=media` });
    }
    async uploadFile(name, content, mimeType) {
        return this.performRequest({
            method: 'POST',
            path: '/files?uploadType=multipart',
            body: { name, mimeType },
        });
    }
    async search(query) {
        return this.performRequest({ method: 'GET', path: '/files', params: { q: `name contains '${query}'` } });
    }
}
const dropboxConfig = {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'storage',
    description: 'Cloud file storage and sharing',
    authTypes: ['oauth2', 'bearer'],
    baseUrl: 'https://api.dropboxapi.com/2',
    rateLimit: { requests: 100, windowMs: 60000 },
};
registerAdapter(dropboxConfig);
export class DropboxAdapter extends BaseAdapter {
    config = dropboxConfig;
    constructor(credentials) {
        super(credentials);
    }
    async list(params) {
        return this.performRequest({
            method: 'POST',
            path: '/files/list_folder',
            body: { path: params?.path || '', recursive: false, limit: parseInt(params?.limit || '100') },
        });
    }
    async get(id) {
        return this.performRequest({ method: 'POST', path: '/files/get_metadata', body: { path: id } });
    }
    async create(body) {
        return this.performRequest({ method: 'POST', path: '/files/create_folder_v2', body });
    }
    async update(id, body) {
        return this.performRequest({ method: 'POST', path: '/files/move_v2', body: { from_path: id, ...body } });
    }
    async delete(id) {
        return this.performRequest({ method: 'POST', path: '/files/delete_v2', body: { path: id } });
    }
    async upload(path, content) {
        return this.performRequest({
            method: 'POST',
            path: '/files/upload',
            body: { path, mode: 'overwrite' },
            headers: { 'Content-Type': 'application/octet-stream' },
        });
    }
    async download(path) {
        return this.performRequest({ method: 'POST', path: '/files/download', body: { path } });
    }
    async search(query) {
        return this.performRequest({ method: 'POST', path: '/files/search_v2', body: { query, max_results: 100 } });
    }
}
//# sourceMappingURL=index.js.map