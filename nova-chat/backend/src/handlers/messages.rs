use actix_web::{web, HttpResponse, Result};
use bson::oid::ObjectId;
use chrono::Utc;
use mongodb::{Database, Collection};
use mongodb::options::FindOptions;
use futures::stream::TryStreamExt;
use serde_json::json;

use crate::models::*;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/messages")
            .route("/{message_id}", web::get().to(get_message))
            .route("/{message_id}", web::patch().to(edit_message))
            .route("/{message_id}", web::delete().to(delete_message))
            .route("/{message_id}/reactions", web::post().to(add_reaction))
            .route("/{message_id}/reactions/{emoji}", web::delete().to(remove_reaction))
            .route("/{message_id}/thread", web::get().to(get_thread))
            .route("/{message_id}/thread", web::post().to(reply_thread))
    );
}

async fn get_message(db: web::Data<Database>, message_id: web::Path<String>) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;

    let msg = messages
        .find_one(mongodb::bson::doc! { "_id": oid }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("Message not found"))?;

    Ok(HttpResponse::Ok().json(MessageResponse::from(msg)))
}

async fn edit_message(
    db: web::Data<Database>,
    message_id: web::Path<String>,
    req: web::Json<EditMessageRequest>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();

    let edit = EditVersion {
        version: 1,
        body: req.body.clone(),
        edited_at: Utc::now(),
    };

    messages
        .update_one(
            mongodb::bson::doc! { "_id": oid, "sender.user_id": ObjectId::parse_str(&user_id).ok().unwrap_or_else(ObjectId::new) },
            mongodb::bson::doc! {
                "$set": {
                    "content.body": &req.body,
                    "is_edited": true,
                    "updated_at": Utc::now(),
                },
                "$push": { "edit_history": mongodb::bson::to_bson(&edit).unwrap() },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "edited" })))
}

async fn delete_message(
    db: web::Data<Database>,
    message_id: web::Path<String>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;

    messages
        .delete_one(mongodb::bson::doc! { "_id": oid }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "deleted" })))
}

async fn add_reaction(
    db: web::Data<Database>,
    message_id: web::Path<String>,
    req: web::Json<ReactionRequest>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();

    let existing = messages
        .find_one(
            mongodb::bson::doc! {
                "_id": oid,
                "reactions.emoji": &req.emoji,
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    if existing.is_some() {
        messages
            .update_one(
                mongodb::bson::doc! { "_id": oid, "reactions.emoji": &req.emoji },
                mongodb::bson::doc! {
                    "$addToSet": { "reactions.$.users": &user_id },
                    "$inc": { "reactions.$.count": 1 },
                },
                None,
            )
            .await
            .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;
    } else {
        let reaction = Reaction {
            emoji: req.emoji.clone(),
            users: vec![user_id],
            count: 1,
        };
        messages
            .update_one(
                mongodb::bson::doc! { "_id": oid },
                mongodb::bson::doc! {
                    "$push": { "reactions": mongodb::bson::to_bson(&reaction).unwrap() },
                },
                None,
            )
            .await
            .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;
    }

    Ok(HttpResponse::Ok().json(json!({ "status": "reaction added" })))
}

async fn remove_reaction(
    db: web::Data<Database>,
    path: web::Path<(String, String)>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let (message_id, emoji) = path.into_inner();
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();

    messages
        .update_one(
            mongodb::bson::doc! { "_id": oid, "reactions.emoji": &emoji },
            mongodb::bson::doc! {
                "$pull": { "reactions.$.users": &user_id },
                "$inc": { "reactions.$.count": -1 },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "reaction removed" })))
}

async fn get_thread(db: web::Data<Database>, message_id: web::Path<String>) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;

    let filter = mongodb::bson::doc! { "thread_id": oid };
    let find_opts = FindOptions::builder()
        .sort(mongodb::bson::doc! { "created_at": 1 })
        .build();

    let cursor = messages
        .find(filter, find_opts)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let replies: Vec<Message> = cursor
        .try_collect()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let response: Vec<MessageResponse> = replies.into_iter().map(|m| m.into()).collect();
    Ok(HttpResponse::Ok().json(response))
}

async fn reply_thread(
    db: web::Data<Database>,
    message_id: web::Path<String>,
    req: web::Json<serde_json::Value>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&message_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid message ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();
    let user_oid = ObjectId::parse_str(&user_id).unwrap_or_else(|_| ObjectId::new());

    let body = req.get("body").and_then(|b| b.as_str()).unwrap_or("");
    let now = Utc::now();

    let reply = Message {
        id: None,
        room_id: ObjectId::new(),
        sender: MessageSender {
            user_id: user_oid,
            display_name: "Unknown".to_string(),
            avatar_url: None,
        },
        content: MessageContent {
            content_type: ContentType::Text,
            body: body.to_string(),
            formatted_body: None,
            language: "en".to_string(),
        },
        thread_id: Some(oid),
        parent_message_id: Some(oid),
        reactions: vec![],
        attachments: vec![],
        is_edited: false,
        edit_history: vec![],
        ephemeral: None,
        reply_count: 0,
        created_at: now,
        updated_at: now,
    };

    messages
        .insert_one(&reply, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    messages
        .update_one(
            mongodb::bson::doc! { "_id": oid },
            mongodb::bson::doc! { "$inc": { "reply_count": 1 } },
            None,
        )
        .await
        .ok();

    Ok(HttpResponse::Created().json(json!({ "status": "reply sent" })))
}
