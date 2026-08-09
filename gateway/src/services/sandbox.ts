import { EventEmitter } from 'node:events';
import type { SandboxConfig } from '../types/index.js';

interface SandboxInstance {
  id: string;
  config: SandboxConfig;
  status: 'provisioning' | 'running' | 'completed' | 'failed' | 'terminated';
  created_at: string;
  filesystem: Map<string, string>;
  logs: string[];
  result?: unknown;
}

class SandboxRuntime extends EventEmitter {
  private sandboxes: Map<string, SandboxInstance> = new Map();

  provision(config: SandboxConfig): SandboxInstance {
    const id = `sandbox_${Date.now().toString(36)}`;

    const sandbox: SandboxInstance = {
      id,
      config,
      status: 'provisioning',
      created_at: new Date().toISOString(),
      filesystem: new Map([
        ['/workspace/README', 'N0VA1O Ephemeral Sandbox - Python 3.12 / Bash 5.2'],
        ['/workspace/outputs/.gitkeep', ''],
        ['/workspace/data/.gitkeep', ''],
      ]),
      logs: [],
    };

    this.sandboxes.set(id, sandbox);

    setTimeout(() => {
      sandbox.status = 'running';
      sandbox.logs.push(`[${new Date().toISOString()}] Sandbox provisioned successfully`);
      sandbox.logs.push(`[${new Date().toISOString()}] CPU: ${config.cpu_quota} vCPU | RAM: ${config.ram_quota}MB | Network: ${config.network_mode}`);
      this.emit('sandbox.ready', { sandbox_id: id });
    }, 200);

    return sandbox;
  }

  async execute(sandboxId: string, code: string, language: 'python' | 'bash' = 'python'): Promise<{ success: boolean; output: string; logs: string[] }> {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) throw new Error('Sandbox not found');
    if (sandbox.status !== 'running') throw new Error(`Sandbox is ${sandbox.status}`);

    sandbox.logs.push(`[${new Date().toISOString()}] Executing ${language} code (${code.length} bytes)`);

    const timeoutMs = sandbox.config.timeout_seconds * 1000;
    const startTime = Date.now();

    try {
      const result = this.simulateExecution(code, language, sandbox);
      const elapsed = Date.now() - startTime;

      if (elapsed > timeoutMs) {
        throw new Error(`Execution timeout (${sandbox.config.timeout_seconds}s exceeded)`);
      }

      sandbox.logs.push(`[${new Date().toISOString()}] Execution completed in ${elapsed}ms`);
      sandbox.status = 'completed';

      return { success: true, output: result, logs: sandbox.logs };
    } catch (err) {
      sandbox.status = 'failed';
      const error = err instanceof Error ? err.message : 'Execution failed';
      sandbox.logs.push(`[${new Date().toISOString()}] ERROR: ${error}`);
      return { success: false, output: error, logs: sandbox.logs };
    }
  }

  getSandbox(sandboxId: string): SandboxInstance | undefined {
    return this.sandboxes.get(sandboxId);
  }

  writeFile(sandboxId: string, path: string, content: string): boolean {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) return false;
    sandbox.filesystem.set(path, content);
    sandbox.logs.push(`[${new Date().toISOString()}] File written: ${path} (${content.length} bytes)`);
    return true;
  }

  readFile(sandboxId: string, path: string): string | null {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) return null;
    return sandbox.filesystem.get(path) || null;
  }

  listFiles(sandboxId: string, dir: string = '/workspace'): string[] {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) return [];
    return Array.from(sandbox.filesystem.keys()).filter(p => p.startsWith(dir));
  }

  grepSearch(sandboxId: string, pattern: string, file?: string): string[] {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) return [];

    const results: string[] = [];
    const regex = new RegExp(pattern, 'i');

    for (const [path, content] of sandbox.filesystem.entries()) {
      if (file && path !== file) continue;
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (regex.test(lines[i])) {
          results.push(`${path}:${i + 1}: ${lines[i]}`);
        }
      }
    }

    return results;
  }

  terminate(sandboxId: string): boolean {
    const sandbox = this.sandboxes.get(sandboxId);
    if (!sandbox) return false;

    sandbox.status = 'terminated';
    sandbox.filesystem.clear();
    sandbox.logs.push(`[${new Date().toISOString()}] Sandbox terminated - memory wiped`);

    this.emit('sandbox.terminated', { sandbox_id: sandboxId });
    return true;
  }

  getActiveSandboxes(): SandboxInstance[] {
    return Array.from(this.sandboxes.values()).filter(s => s.status === 'running');
  }

  private simulateExecution(code: string, language: 'python' | 'bash', sandbox: SandboxInstance): string {
    if (code.includes('import pandas') || code.includes('pd.')) {
      sandbox.logs.push(`[${new Date().toISOString()}] Pandas detected - analytical stack loaded`);
      return 'DataFrame processed successfully. Shape: (1000, 15)';
    }

    if (code.includes('import numpy') || code.includes('np.')) {
      sandbox.logs.push(`[${new Date().toISOString()}] NumPy detected - numerical computing stack loaded`);
      return 'Array operations completed. Result shape: (100,)';
    }

    if (code.includes('open(') && code.includes('write')) {
      const match = code.match(/open\(['"]([^'"]+)['"]/);
      const filePath = match ? match[1] : '/workspace/outputs/result.txt';
      sandbox.filesystem.set(filePath, 'Generated output data');
      return `File written: ${filePath}`;
    }

    if (language === 'bash' && code.includes('grep')) {
      return 'Search completed. 42 matches found.';
    }

    if (code.includes('csv')) {
      return 'CSV processed successfully. 500 rows, 12 columns.';
    }

    return `${language} execution completed successfully. Output: ${code.length} bytes processed.`;
  }
}

export const sandboxRuntime = new SandboxRuntime();
