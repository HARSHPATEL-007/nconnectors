use actix_web::{web, HttpResponse, Result};
use bson::oid::ObjectId;
use chrono::Utc;
use mongodb::{Database, Collection};
use mongodb::options::FindOneOptions;

use crate::models::*;
use crate::utils::jwt::generate_token;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/register", web::post().to(register))
            .route("/login", web::post().to(login))
            .route("/me", web::get().to(me))
    );
}

async fn register(
    db: web::Data<Database>,
    req: web::Json<CreateUserRequest>,
) -> Result<HttpResponse> {
    let users: Collection<User> = db.collection("users");

    if users
        .find_one(mongodb::bson::doc! { "email": &req.email }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .is_some()
    {
        return Ok(HttpResponse::Conflict().json(serde_json::json!({
            "error": "Email already registered"
        })));
    }

    if users
        .find_one(mongodb::bson::doc! { "username": &req.username }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .is_some()
    {
        return Ok(HttpResponse::Conflict().json(serde_json::json!({
            "error": "Username already taken"
        })));
    }

    let password_hash = bcrypt::hash(&req.password, bcrypt::DEFAULT_COST)
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let now = Utc::now();
    let user = User {
        id: None,
        username: req.username.clone(),
        email: req.email.clone(),
        password_hash,
        display_name: req.display_name.clone(),
        avatar_url: req.avatar_url.clone(),
        status: UserStatus::Online,
        custom_status: None,
        created_at: now,
        updated_at: now,
        last_seen_at: now,
    };

    let result = users
        .insert_one(&user, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let user_id = result.inserted_id.as_object_id().unwrap().to_hex();
    let token = generate_token(&user_id, &user.username)
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Created().json(AuthResponse {
        token,
        user: user.into(),
    }))
}

async fn login(
    db: web::Data<Database>,
    req: web::Json<LoginRequest>,
) -> Result<HttpResponse> {
    let users: Collection<User> = db.collection("users");

    let user = users
        .find_one(mongodb::bson::doc! { "email": &req.email }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .ok_or_else(|| actix_web::error::ErrorUnauthorized("Invalid credentials"))?;

    let valid = bcrypt::verify(&req.password, &user.password_hash)
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    if !valid {
        return Ok(HttpResponse::Unauthorized().json(serde_json::json!({
            "error": "Invalid credentials"
        })));
    }

    let user_id = user.id.as_ref().unwrap().to_hex();
    let token = generate_token(&user_id, &user.username)
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(AuthResponse {
        token,
        user: user.into(),
    }))
}

async fn me() -> HttpResponse {
    HttpResponse::Ok().json(serde_json::json!({ "status": "ok" }))
}
