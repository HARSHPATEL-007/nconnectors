export declare function seedDatabase(): Promise<void>;
export declare function getIntegrationCatalog(): Promise<{
    id: string;
    name: string;
    createdAt: Date;
    description: string;
    provider: string;
    category: string;
    iconUrl: string | null;
    authTypes: string[];
    capabilities: string[];
    config: import("@prisma/client/runtime/library").JsonValue;
}[]>;
export declare function getIntegrationsByCategory(category: string): Promise<{
    id: string;
    name: string;
    createdAt: Date;
    description: string;
    provider: string;
    category: string;
    iconUrl: string | null;
    authTypes: string[];
    capabilities: string[];
    config: import("@prisma/client/runtime/library").JsonValue;
}[]>;
//# sourceMappingURL=index.d.ts.map