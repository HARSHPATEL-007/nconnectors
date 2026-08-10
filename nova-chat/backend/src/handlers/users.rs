use actix_web::{web, HttpResponse, Result};
use bson::oid::ObjectId;
use chrono::Utc;
use mongodb::{Database, Collection};
use futures::stream::TryStreamExt;
use serde_json::json;

use crate::models::*;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/users")
            .route("", web::get().to(list_users))
            .route("/{user_id}", web::get().to(get_user))
            .route("/{user_id}", web::patch().to(update_user))
            .route("/{user_id}/presence", web::get().to(get_presence))
            .route("/{user_id}/presence", web::patch().to(update_presence))
    );
}

async fn list_users(db: web::Data<Database>) -> Result<HttpResponse> {
    let users: Collection<User> = db.collection("users");
    let cursor = users
        .find(None, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let users_vec: Vec<User> = cursor
        .try_collect()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let response: Vec<UserResponse> = users_vec.into_iter().map(|u| u.into()).collect();
    Ok(HttpResponse::Ok().json(response))
}

async fn get_user(db: web::Data<Database>, user_id: web::Path<String>) -> Result<HttpResponse> {
    let users: Collection<User> = db.collection("users");
    let oid = ObjectId::parse_str(&user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    let user = users
        .find_one(mongodb::bson::doc! { "_id": oid }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("User not found"))?;

    Ok(HttpResponse::Ok().json(UserResponse::from(user)))
}

async fn update_user(
    db: web::Data<Database>,
    user_id: web::Path<String>,
    req: web::Json<UpdateUserRequest>,
) -> Result<HttpResponse> {
    let users: Collection<User> = db.collection("users");
    let oid = ObjectId::parse_str(&user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    let mut update_doc = mongodb::bson::doc! { "updated_at": Utc::now() };
    if let Some(name) = &req.display_name {
        update_doc.insert("display_name", name);
    }
    if let Some(avatar) = &req.avatar_url {
        update_doc.insert("avatar_url", avatar);
    }
    if let Some(status) = &req.status {
        update_doc.insert("status", mongodb::bson::to_bson(status).unwrap());
    }
    if let Some(custom) = &req.custom_status {
        update_doc.insert("custom_status", custom);
    }

    users
        .update_one(
            mongodb::bson::doc! { "_id": oid },
            mongodb::bson::doc! { "$set": update_doc },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "updated" })))
}

async fn get_presence(db: web::Data<Database>, user_id: web::Path<String>) -> Result<HttpResponse> {
    let presence: Collection<Presence> = db.collection("presence");
    let oid = ObjectId::parse_str(&user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    let p = presence
        .find_one(mongodb::bson::doc! { "user_id": oid }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    match p {
        Some(p) => Ok(HttpResponse::Ok().json(PresenceResponse::from(p))),
        None => Ok(HttpResponse::Ok().json(json!({
            "user_id": user_id.into_inner(),
            "status": "offline",
            "focus_mode": false,
        }))),
    }
}

async fn update_presence(
    db: web::Data<Database>,
    user_id: web::Path<String>,
    req: web::Json<UpdatePresenceRequest>,
) -> Result<HttpResponse> {
    let presence: Collection<Presence> = db.collection("presence");
    let oid = ObjectId::parse_str(&user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    let now = Utc::now();
    let mut update_doc = mongodb::bson::doc! { "updated_at": now };
    if let Some(status) = &req.status {
        update_doc.insert("status", mongodb::bson::to_bson(status).unwrap());
    }
    if let Some(custom) = &req.custom_status {
        update_doc.insert("custom_status", custom);
    }
    if let Some(focus) = req.focus_mode {
        update_doc.insert("focus_mode", focus);
    }
    update_doc.insert("last_active_at", now);

    presence
        .update_one(
            mongodb::bson::doc! { "user_id": oid },
            mongodb::bson::doc! {
                "$set": update_doc,
                "$setOnInsert": {
                    "user_id": oid,
                    "last_seen_platform": "web",
                },
            },
            mongodb::options::UpdateOptions::builder().upsert(true).build(),
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "presence updated" })))
}
