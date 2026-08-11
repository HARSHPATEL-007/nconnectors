import { prisma } from '../infrastructure/database.js';
import { logger } from '../infrastructure/logger.js';
import { toolRegistry } from '../services/tool-registry.js';
import { integrations, tools } from './data.js';
export async function seedDatabase() {
    logger.info({}, 'Seeding database...');
    // Seed integrations
    for (const integration of integrations) {
        await prisma.integration.upsert({
            where: { provider: integration.provider },
            update: {
                name: integration.name,
                category: integration.category,
                description: integration.description,
                authTypes: integration.authTypes,
                capabilities: integration.capabilities,
            },
            create: {
                provider: integration.provider,
                name: integration.name,
                category: integration.category,
                description: integration.description,
                authTypes: integration.authTypes,
                capabilities: integration.capabilities,
            },
        });
    }
    // Seed tools into in-memory registry
    for (const tool of tools) {
        toolRegistry.registerTool({
            name: tool.name,
            description: tool.description,
            parameters: {},
            provider: tool.provider,
            integration: tool.provider,
            category: tool.category,
            risk_level: tool.riskLevel,
            required_scopes: tool.requiredScopes,
            estimated_latency_ms: tool.estimatedLatencyMs,
            deprecated: false,
        });
    }
    // Seed integrations into tool registry
    for (const integration of integrations) {
        toolRegistry.registerIntegration(integration.provider, integration.name, integration.category);
    }
    const integrationCount = await prisma.integration.count();
    logger.info({ integrations: integrationCount, tools: tools.length }, 'Database seeded successfully');
}
export async function getIntegrationCatalog() {
    return prisma.integration.findMany({
        orderBy: [{ category: 'asc' }, { name: 'asc' }],
    });
}
export async function getIntegrationsByCategory(category) {
    return prisma.integration.findMany({
        where: { category },
        orderBy: { name: 'asc' },
    });
}
//# sourceMappingURL=index.js.map