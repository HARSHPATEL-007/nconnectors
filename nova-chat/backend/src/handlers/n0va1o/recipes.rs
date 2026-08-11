use actix_web::{web, HttpResponse, Result};
use std::sync::Arc;

use crate::n0va1o::recipes::compiler::{RecipeCompiler, RecipeCompilationRequest};
use crate::n0va1o::recipes::engine::RecipeEngine;

pub struct RecipesAppState {
    pub compiler: Arc<RecipeCompiler>,
    pub engine: Arc<RecipeEngine>,
}

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/recipes")
            .route("/compile", web::post().to(compile_recipe))
            .route("", web::get().to(list_recipes))
            .route("/{id}", web::get().to(get_recipe))
            .route("/{id}/execute", web::post().to(execute_recipe))
            .route("/{id}", web::delete().to(delete_recipe))
            .route("/{id}/executions", web::get().to(list_executions)),
    );
}

async fn compile_recipe(
    state: web::Data<RecipesAppState>,
    body: web::Json<RecipeCompilationRequest>,
) -> Result<HttpResponse> {
    let result = state.compiler.compile(body.into_inner()).await;
    Ok(HttpResponse::Created().json(result))
}

async fn list_recipes(state: web::Data<RecipesAppState>) -> Result<HttpResponse> {
    let recipes = state.compiler.list().await;
    Ok(HttpResponse::Ok().json(recipes))
}

async fn get_recipe(
    state: web::Data<RecipesAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let recipe_id = path.into_inner();
    match state.compiler.get(&recipe_id).await {
        Some(recipe) => Ok(HttpResponse::Ok().json(recipe)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Not found"}))),
    }
}

async fn execute_recipe(
    state: web::Data<RecipesAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let recipe_id = path.into_inner();
    match state.compiler.get(&recipe_id).await {
        Some(recipe) => {
            let result = state.engine.execute(&recipe).await;
            Ok(HttpResponse::Ok().json(result))
        }
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Recipe not found"}))),
    }
}

async fn delete_recipe(
    state: web::Data<RecipesAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let recipe_id = path.into_inner();
    if state.compiler.delete(&recipe_id).await {
        Ok(HttpResponse::Ok().json(serde_json::json!({"deleted": true})))
    } else {
        Ok(HttpResponse::NotFound().json(serde_json::json!({"error": "Not found"})))
    }
}

async fn list_executions(
    state: web::Data<RecipesAppState>,
    path: web::Path<String>,
) -> Result<HttpResponse> {
    let recipe_id = path.into_inner();
    let executions = state.engine.list_executions(&recipe_id).await;
    Ok(HttpResponse::Ok().json(executions))
}
