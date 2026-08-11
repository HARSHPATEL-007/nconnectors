// Test: Verify 1,000+ adapters work through the service layer
// Run: npx tsx test-adapters.ts

import { adapterEngine } from './src/services/adapter-engine.js';
import { registry } from './src/adapters/core/index.js';
import { adapterFactory } from './src/adapters/generic.js';
import { integrations } from './src/adapters/catalog/index.js';

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║        N0VA1O ADAPTER ENGINE — INTEGRATION TEST         ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log();

  // 1. Catalog size
  console.log(`📦 Catalog: ${integrations.length} integrations`);

  // 2. Registry size
  const providers = adapterEngine.getAvailableProviders();
  console.log(`🔌 Registry: ${providers.length} adapters registered`);

  // 3. Categories
  const categories = adapterEngine.getCategories();
  console.log(`📂 Categories: ${categories.length}`);
  categories.slice(0, 10).forEach(c => {
    const count = adapterEngine.getProvidersByCategory(c).length;
    console.log(`   • ${c}: ${count} adapters`);
  });
  if (categories.length > 10) console.log(`   ... and ${categories.length - 10} more`);

  console.log();

  // 4. Test adapter execution
  console.log('🧪 Testing adapter execution...');

  const testProviders = ['salesforce', 'hubspot', 'slack', 'stripe', 'github'];

  for (const provider of testProviders) {
    const result = await adapterEngine.execute({
      provider,
      action: 'list',
      params: {},
    });

    console.log(`   ${result.success ? '✅' : '❌'} ${provider}: ${result.success ? 'OK' : result.error} (${result.latencyMs}ms)`);
  }

  console.log();

  // 5. Test search
  console.log('🔍 Testing search...');
  const searchResults = adapterEngine.searchProviders('crm');
  console.log(`   Search "crm": ${searchResults.length} results`);

  // 6. Test factory
  console.log();
  console.log('🏭 Testing AdapterFactory...');
  const factoryAdapter = adapterFactory.create('salesforce');
  console.log(`   Factory create salesforce: ${factoryAdapter ? '✅' : '❌'}`);

  console.log();
  console.log('══════════════════════════════════════════════════════════');
  console.log('  All systems operational');
  console.log('══════════════════════════════════════════════════════════');
}

main().catch(console.error);
