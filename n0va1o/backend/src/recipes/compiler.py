import uuid
import time
import json
from typing import Dict, List, Optional, Any
from datetime import datetime

from ..models import (
    Session, Recipe, RecipeConfig, RecipeStatus, RecipeExecution,
    Tenant,
)


class RecipeCompiler:
    def __init__(self):
        self._compiled_graphs: Dict[str, List[Dict[str, Any]]] = {}

    async def compile(
        self,
        session: Session,
        config: RecipeConfig,
        tenant: Tenant,
    ) -> Recipe:
        recipe_id = f"rec_{uuid.uuid4().hex[:12]}"

        call_graph = self._extract_call_graph(session)
        risk_score = self._assess_recipe_risk(call_graph)
        latency_estimate = self._estimate_latency(call_graph)

        recipe = Recipe(
            recipe_id=recipe_id,
            tenant_id=tenant.tenant_id,
            agent_id=session.agent_id,
            session_id=session.session_id,
            config=config,
            status=RecipeStatus.ACTIVE,
            execution_endpoint=f"https://n0va1o.io/recipes/{recipe_id}/execute",
            estimated_latency_ms=latency_estimate,
            requires_approval=risk_score > 0.7,
            risk_score=risk_score,
            compiled_at=datetime.utcnow(),
            monitoring_dashboard=f"https://n0va1o.io/dashboard/recipes/{recipe_id}",
            source_call_graph=call_graph,
        )

        self._compiled_graphs[recipe_id] = call_graph
        return recipe

    async def execute(self, recipe: Recipe, params: Dict[str, Any]) -> RecipeExecution:
        execution_id = f"run_{uuid.uuid4().hex[:12]}"
        start_time = time.time()

        execution = RecipeExecution(
            execution_id=execution_id,
            recipe_id=recipe.recipe_id,
            tenant_id=recipe.tenant_id,
            status="running",
        )

        try:
            call_graph = self._compiled_graphs.get(recipe.recipe_id, recipe.source_call_graph)
            results = []

            for step in call_graph:
                step_result = await self._execute_step(step, params)
                results.append(step_result)

                if not step_result.get("success", False):
                    if recipe.config.failover_enabled:
                        continue
                    else:
                        execution.status = "failed"
                        execution.error = step_result.get("error", "Step failed")
                        break
            else:
                execution.status = "success"

            execution.latency_ms = int((time.time() - start_time) * 1000)
            execution.result = {
                "steps_completed": len(results),
                "total_steps": len(call_graph),
                "step_results": results,
                "params_used": params,
            }

            recipe.execution_count += 1
            if execution.status == "success":
                recipe.success_count += 1
            else:
                recipe.fail_count += 1

        except Exception as e:
            execution.status = "failed"
            execution.error = str(e)
            execution.latency_ms = int((time.time() - start_time) * 1000)
            recipe.execution_count += 1
            recipe.fail_count += 1

        execution.completed_at = datetime.utcnow()
        return execution

    def _extract_call_graph(self, session: Session) -> List[Dict[str, Any]]:
        if session.reasoning_chain:
            steps = []
            for i, reasoning in enumerate(session.reasoning_chain):
                steps.append({
                    "step": i + 1,
                    "action": reasoning,
                    "tool": self._infer_tool_from_reasoning(reasoning),
                    "parameters": {},
                })
            return steps

        return [
            {"step": 1, "action": "search_files", "tool": "dropbox.search_files", "parameters": {"query": "invoices"}},
            {"step": 2, "action": "convert_format", "tool": "csv_converter.convert", "parameters": {"source_format": "pdf"}},
            {"step": 3, "action": "import_data", "tool": "n0va_sheets.import_csv", "parameters": {}},
            {"step": 4, "action": "notify_team", "tool": "slack.post_message", "parameters": {"channel": "#finance"}},
        ]

    def _infer_tool_from_reasoning(self, reasoning: str) -> str:
        reasoning_lower = reasoning.lower()
        if "search" in reasoning_lower or "find" in reasoning_lower:
            return "dropbox.search_files"
        elif "convert" in reasoning_lower:
            return "csv_converter.convert"
        elif "import" in reasoning_lower or "upload" in reasoning_lower:
            return "n0va_sheets.import_csv"
        elif "notify" in reasoning_lower or "send" in reasoning_lower:
            return "slack.post_message"
        return "generic.execute"

    async def _execute_step(self, step: Dict[str, Any], params: Dict[str, Any]) -> Dict[str, Any]:
        await asyncio.sleep(0.01)
        return {
            "step": step["step"],
            "action": step["action"],
            "tool": step["tool"],
            "success": True,
            "output": f"Step {step['step']}: {step['action']} completed",
        }

    def _assess_recipe_risk(self, call_graph: List[Dict[str, Any]]) -> float:
        risk_scores = {
            "dropbox.search_files": 0.1,
            "csv_converter.convert": 0.1,
            "n0va_sheets.import_csv": 0.2,
            "slack.post_message": 0.3,
            "meta_ads.update_budget": 0.7,
            "salesforce.create": 0.4,
        }

        if not call_graph:
            return 0.1

        total_risk = sum(risk_scores.get(step.get("tool", ""), 0.2) for step in call_graph)
        return round(total_risk / len(call_graph), 2)

    def _estimate_latency(self, call_graph: List[Dict[str, Any]]) -> int:
        latency_map = {
            "dropbox.search_files": 450,
            "csv_converter.convert": 2000,
            "n0va_sheets.import_csv": 800,
            "slack.post_message": 300,
            "meta_ads.update_budget": 600,
            "salesforce.create": 700,
        }

        total = sum(latency_map.get(step.get("tool", ""), 500) for step in call_graph)
        return max(85, total)


import asyncio
