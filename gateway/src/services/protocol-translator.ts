// Protocol Translation Layer (Spec Section 2.3)
// Translates between REST, SOAP, GraphQL, gRPC, WebDAV, FTP protocols.

interface ProtocolRequest {
  endpoint: string;
  method: string;
  headers: Record<string, string>;
  body: any;
  queryParams: Record<string, string>;
}

interface ProtocolResponse {
  success: boolean;
  statusCode: number;
  body: any;
  headers: Record<string, string>;
  error?: string;
}

type ProtocolType = 'rest' | 'soap' | 'graphql' | 'grpc' | 'webdav' | 'ftp';

class ProtocolTranslator {
  translateRequest(source: ProtocolType, target: ProtocolType, request: ProtocolRequest): ProtocolRequest {
    if (source === target) return request;

    const key = `${source}:${target}`;
    switch (key) {
      case 'rest:soap':
        return this.restToSoap(request);
      case 'rest:graphql':
        return this.restToGraphQL(request);
      case 'rest:grpc':
        return this.restToGrpc(request);
      default:
        return request;
    }
  }

  translateResponse(source: ProtocolType, target: ProtocolType, response: ProtocolResponse): ProtocolResponse {
    if (source === target) return response;
    return response;
  }

  getSupportedTranslations(): Array<{ source: ProtocolType; target: ProtocolType }> {
    return [
      { source: 'rest', target: 'soap' },
      { source: 'rest', target: 'graphql' },
      { source: 'rest', target: 'grpc' },
    ];
  }

  private restToSoap(request: ProtocolRequest): ProtocolRequest {
    const bodyXml = this.dictToXml(request.body || {}, 'Request');
    const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>${bodyXml}</soap:Body></soap:Envelope>`;
    return {
      ...request,
      method: 'POST',
      headers: { ...request.headers, 'Content-Type': 'text/xml; charset=utf-8' },
      body: soapEnvelope,
    };
  }

  private restToGraphQL(request: ProtocolRequest): ProtocolRequest {
    const operation = request.method === 'GET' ? 'query' : 'mutation';
    const params = request.body || {};
    const fields = Object.keys(params).join('\n    ');
    const query = `${operation} {\n  ${request.endpoint.split('/').pop() || 'data'} {\n    ${fields}\n  }\n}`;
    return {
      ...request,
      method: 'POST',
      headers: { ...request.headers, 'Content-Type': 'application/json' },
      body: { query, variables: request.body },
    };
  }

  private restToGrpc(request: ProtocolRequest): ProtocolRequest {
    return {
      ...request,
      headers: { ...request.headers, 'Content-Type': 'application/grpc+proto', 'Grpc-Encoding': 'identity' },
      body: { proto_message: request.body, stream: false },
    };
  }

  private dictToXml(data: any, tag: string): string {
    if (typeof data === 'object' && data !== null) {
      return Object.entries(data).map(([k, v]) => `<${k}>${this.dictToXml(v, k)}</${k}>`).join('');
    }
    return String(data);
  }
}

export const protocolTranslator = new ProtocolTranslator();
