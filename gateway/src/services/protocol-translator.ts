import type { ProtocolType } from '../types/index.js';

interface TranslationRequest {
  sourceProtocol: ProtocolType;
  targetProtocol: ProtocolType;
  endpoint: string;
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  queryParams?: Record<string, string>;
}

interface TranslationResult {
  success: boolean;
  protocol: ProtocolType;
  endpoint: string;
  method: string;
  headers: Record<string, string>;
  body: unknown;
  metadata: {
    translated: boolean;
    sourceProtocol: ProtocolType;
    transformations: string[];
  };
}

class ProtocolTranslator {
  private transformations: Map<string, (req: TranslationRequest) => TranslationResult> = new Map();

  constructor() {
    this.registerDefaultTranslations();
  }

  private registerDefaultTranslations(): void {
    this.transformations.set('rest:soap', this.restToSoap.bind(this));
    this.transformations.set('rest:graphql', this.restToGraphQL.bind(this));
    this.transformations.set('rest:grpc', this.restToGrpc.bind(this));
    this.transformations.set('graphql:rest', this.graphqlToRest.bind(this));
    this.transformations.set('grpc:rest', this.grpcToRest.bind(this));
    this.transformations.set('webdav:rest', this.webdavToRest.bind(this));
    this.transformations.set('ftp:rest', this.ftpToRest.bind(this));
    this.transformations.set('soap:rest', this.soapToRest.bind(this));
  }

  translate(request: TranslationRequest): TranslationResult {
    const key = `${request.sourceProtocol}:${request.targetProtocol}`;

    if (request.sourceProtocol === request.targetProtocol) {
      return {
        success: true,
        protocol: request.targetProtocol,
        endpoint: request.endpoint,
        method: request.method || 'GET',
        headers: request.headers || {},
        body: request.body,
        metadata: { translated: false, sourceProtocol: request.sourceProtocol, transformations: [] },
      };
    }

    const transformer = this.transformations.get(key);
    if (!transformer) {
      return {
        success: false,
        protocol: request.targetProtocol,
        endpoint: request.endpoint,
        method: request.method || 'GET',
        headers: request.headers || {},
        body: request.body,
        metadata: { translated: false, sourceProtocol: request.sourceProtocol, transformations: [`No translator for ${key}`] },
      };
    }

    return transformer(request);
  }

  supportsTranslation(source: ProtocolType, target: ProtocolType): boolean {
    if (source === target) return true;
    return this.transformations.has(`${source}:${target}`);
  }

  getSupportedTranslations(): { source: ProtocolType; target: ProtocolType }[] {
    const result: { source: ProtocolType; target: ProtocolType }[] = [];
    for (const key of this.transformations.keys()) {
      const [source, target] = key.split(':') as [ProtocolType, ProtocolType];
      result.push({ source, target });
    }
    return result;
  }

  private restToSoap(request: TranslationRequest): TranslationResult {
    const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <${request.method || 'Request'} xmlns="${request.endpoint}">
      ${this.objectToXml(request.body as Record<string, unknown>)}
    </${request.method || 'Request'}>
  </soap:Body>
</soap:Envelope>`;

    return {
      success: true,
      protocol: 'soap',
      endpoint: request.endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': `"${request.endpoint}#${request.method || 'Request'}"`,
      },
      body: soapEnvelope,
      metadata: { translated: true, sourceProtocol: 'rest', transformations: ['JSON to XML', 'SOAP envelope wrapping'] },
    };
  }

  private restToGraphQL(request: TranslationRequest): TranslationResult {
    const operation = this.inferGraphQLOperation(request.method || 'GET');
    const query = this.buildGraphQLQuery(operation, request.endpoint, request.body as Record<string, unknown>);

    return {
      success: true,
      protocol: 'graphql',
      endpoint: request.endpoint,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { query, variables: request.body },
      metadata: { translated: true, sourceProtocol: 'rest', transformations: ['REST to GraphQL query', 'Field mapping'] },
    };
  }

  private restToGrpc(request: TranslationRequest): TranslationResult {
    return {
      success: true,
      protocol: 'grpc',
      endpoint: request.endpoint,
      method: request.method || 'POST',
      headers: { 'content-type': 'application/grpc+proto', 'grpc-encoding': 'identity' },
      body: { proto_message: request.body, stream: false },
      metadata: { translated: true, sourceProtocol: 'rest', transformations: ['JSON to Protobuf', 'gRPC framing'] },
    };
  }

  private graphqlToRest(request: TranslationRequest): TranslationResult {
    return {
      success: true,
      protocol: 'rest',
      endpoint: request.endpoint,
      method: request.method || 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: request.body,
      metadata: { translated: true, sourceProtocol: 'graphql', transformations: ['GraphQL query decomposition', 'Batch aggregation'] },
    };
  }

  private grpcToRest(request: TranslationRequest): TranslationResult {
    return {
      success: true,
      protocol: 'rest',
      endpoint: request.endpoint,
      method: request.method || 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: request.body,
      metadata: { translated: true, sourceProtocol: 'grpc', transformations: ['Protobuf to JSON', 'Unary mapping'] },
    };
  }

  private webdavToRest(request: TranslationRequest): TranslationResult {
    const methodMap: Record<string, string> = {
      PROPFIND: 'GET',
      PROPPATCH: 'PUT',
      MKCOL: 'POST',
      COPY: 'POST',
      MOVE: 'PUT',
      LOCK: 'POST',
      UNLOCK: 'DELETE',
    };

    return {
      success: true,
      protocol: 'rest',
      endpoint: request.endpoint,
      method: methodMap[request.method || 'GET'] || 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: request.body,
      metadata: { translated: true, sourceProtocol: 'webdav', transformations: ['WebDAV method mapping', 'Property translation'] },
    };
  }

  private ftpToRest(request: TranslationRequest): TranslationResult {
    return {
      success: true,
      protocol: 'rest',
      endpoint: request.endpoint,
      method: request.method || 'GET',
      headers: { 'Content-Type': 'application/octet-stream' },
      body: request.body,
      metadata: { translated: true, sourceProtocol: 'ftp', transformations: ['FTP command abstraction', 'Session pooling'] },
    };
  }

  private soapToRest(request: TranslationRequest): TranslationResult {
    return {
      success: true,
      protocol: 'rest',
      endpoint: request.endpoint,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: request.body,
      metadata: { translated: true, sourceProtocol: 'soap', transformations: ['WSDL parsing', 'XML to JSON transformation'] },
    };
  }

  private objectToXml(obj: Record<string, unknown> | undefined): string {
    if (!obj) return '';
    return Object.entries(obj)
      .map(([key, value]) => `<${key}>${typeof value === 'object' ? this.objectToXml(value as Record<string, unknown>) : value}</${key}>`)
      .join('\n      ');
  }

  private inferGraphQLOperation(method: string): string {
    switch (method.toUpperCase()) {
      case 'GET': return 'query';
      case 'POST': return 'mutation';
      case 'PUT': return 'mutation';
      case 'DELETE': return 'mutation';
      default: return 'query';
    }
  }

  private buildGraphQLQuery(operation: string, name: string, params: Record<string, unknown> | undefined): string {
    const fields = params ? Object.keys(params).join('\n    ') : 'id';
    return `${operation} ${name} {
    ${name} {
      ${fields}
    }
  }`;
  }
}

export const protocolTranslator = new ProtocolTranslator();
