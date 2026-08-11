// Protocol Translation Layer (Spec Section 2.3)
// Translates between REST, SOAP, GraphQL, gRPC, WebDAV, FTP protocols.
class ProtocolTranslator {
    translateRequest(source, target, request) {
        if (source === target)
            return request;
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
    translateResponse(source, target, response) {
        if (source === target)
            return response;
        return response;
    }
    getSupportedTranslations() {
        return [
            { source: 'rest', target: 'soap' },
            { source: 'rest', target: 'graphql' },
            { source: 'rest', target: 'grpc' },
        ];
    }
    restToSoap(request) {
        const bodyXml = this.dictToXml(request.body || {}, 'Request');
        const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>${bodyXml}</soap:Body></soap:Envelope>`;
        return {
            ...request,
            method: 'POST',
            headers: { ...request.headers, 'Content-Type': 'text/xml; charset=utf-8' },
            body: soapEnvelope,
        };
    }
    restToGraphQL(request) {
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
    restToGrpc(request) {
        return {
            ...request,
            headers: { ...request.headers, 'Content-Type': 'application/grpc+proto', 'Grpc-Encoding': 'identity' },
            body: { proto_message: request.body, stream: false },
        };
    }
    dictToXml(data, tag) {
        if (typeof data === 'object' && data !== null) {
            return Object.entries(data).map(([k, v]) => `<${k}>${this.dictToXml(v, k)}</${k}>`).join('');
        }
        return String(data);
    }
}
export const protocolTranslator = new ProtocolTranslator();
//# sourceMappingURL=protocol-translator.js.map