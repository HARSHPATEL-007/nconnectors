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
declare class ProtocolTranslator {
    translateRequest(source: ProtocolType, target: ProtocolType, request: ProtocolRequest): ProtocolRequest;
    translateResponse(source: ProtocolType, target: ProtocolType, response: ProtocolResponse): ProtocolResponse;
    getSupportedTranslations(): Array<{
        source: ProtocolType;
        target: ProtocolType;
    }>;
    private restToSoap;
    private restToGraphQL;
    private restToGrpc;
    private dictToXml;
}
export declare const protocolTranslator: ProtocolTranslator;
export {};
//# sourceMappingURL=protocol-translator.d.ts.map