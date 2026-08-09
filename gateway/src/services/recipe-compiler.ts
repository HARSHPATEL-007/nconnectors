import { EventEmitter } from 'node:events';
import type { Session, Recipe, RecipeSchedule } from '../types/index.js';
import { generateRecipeId } from './crypto.js';

interface CompiledRecipe {
  recipe_id: string;
  name: string;
  description: string;
  source_session_id: string;
  version: string;
  schema: string;
  execution_endpoint: string;
  estimated_latency_ms: number;
  requires_approval: boolean;
  risk_score: number;
  schedule?: RecipeSchedule;
  steps: CompiledStep[];
  created_at: string;
}

interface CompiledStep {
  step_number: number;
  tool_name: string;
  parameters: Record<string, unknown>;
  error_handling: string;
  retry_count: number;
}

class RecipeCompiler extends EventEmitter {
  private recipes: Map<string, CompiledRecipe> = new Map();

  compile(session: Session, name: string, description: string, schedule?: RecipeSchedule): CompiledRecipe {
    const recipe_id = generateRecipeId();
    const steps = this.extractSteps(session);
    const schema = this.generatePydanticSchema(name, steps);

    const recipe: CompiledRecipe = {
      recipe_id,
      name,
      description,
      source_session_id: session.session_id,
      version: '1.0.0',
      schema,
      execution_endpoint: `https://n0va1o.io/recipes/${recipe_id}/execute`,
      estimated_latency_ms: steps.reduce((sum, s) => sum + 100, 0),
      requires_approval: steps.some(s => s.tool_name.includes('delete') || s.tool_name.includes('transfer')),
      risk_score: 0.12,
      schedule,
      steps,
      created_at: new Date().toISOString(),
    };

    this.recipes.set(recipe_id, recipe);
    this.emit('recipe.compiled', recipe);
    return recipe;
  }

  execute(recipeId: string, params?: Record<string, unknown>): { success: boolean; recipe_id: string; results: unknown[]; latency_ms: number } {
    const recipe = this.recipes.get(recipeId);
    if (!recipe) throw new Error('Recipe not found');

    const startTime = Date.now();
    const results: unknown[] = [];

    for (const step of recipe.steps) {
      const stepResult = this.executeStep(step, params);
      results.push(stepResult);
    }

    const latency = Date.now() - startTime;

    this.emit('recipe.executed', { recipe_id: recipeId, results, latency_ms: latency });

    return { success: true, recipe_id: recipeId, results, latency_ms: latency };
  }

  getRecipe(recipeId: string): CompiledRecipe | undefined {
    return this.recipes.get(recipeId);
  }

  getAllRecipes(): CompiledRecipe[] {
    return Array.from(this.recipes.values());
  }

  private extractSteps(session: Session): CompiledStep[] {
    return session.steps
      .filter(s => s.status === 'completed')
      .map((s, idx) => ({
        step_number: idx + 1,
        tool_name: s.tool_name,
        parameters: s.parameters,
        error_handling: 'continue_on_error',
        retry_count: 3,
      }));
  }

  private generatePydanticSchema(name: string, steps: CompiledStep[]): string {
    const className = name.replace(/[^a-zA-Z0-9]/g, '_');

    const fieldDefs = steps.map(s => `    ${s.tool_name.split('.')[1]}: str = "${s.tool_name}"`).join('\n');

    const executeBody = steps.map(s => `        await self._call_tool("${s.tool_name}", self.${s.tool_name.split('.')[1]})`).join('\n');

    return `from pydantic import BaseModel, Field
from n0va1o.recipes import workflow, WorkflowContext

class ${className}(BaseModel):
    """Auto-compiled recipe from session"""

${fieldDefs}

    @workflow(version="1.0.0")
    async def execute(self, ctx: WorkflowContext):
${executeBody}
        return {"status": "success", "steps": ${steps.length}}`;
  }

  private executeStep(step: CompiledStep, params?: Record<string, unknown>): unknown {
    return {
      step: step.step_number,
      tool: step.tool_name,
      status: 'completed',
      params: { ...step.parameters, ...params },
      timestamp: new Date().toISOString(),
    };
  }
}

export const recipeCompiler = new RecipeCompiler();
