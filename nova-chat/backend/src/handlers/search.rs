use actix_web::{web, HttpResponse, Result};
use mongodb::{Database, Collection};
use mongodb::options::FindOptions;
use futures::stream::TryStreamExt;

use crate::models::*;
use crate::utils::pagination::PaginatedResponse;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/search")
            .route("/messages", web::get().to(search_messages))
    );
}

async fn search_messages(
    db: web::Data<Database>,
    query: web::Query<SearchQuery>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");

    let mut filter = mongodb::bson::doc! {
        "$text": { "$search": &query.q },
    };

    if let Some(room_id) = &query.room_id {
        if let Ok(oid) = bson::oid::ObjectId::parse_str(room_id) {
            filter.insert("room_id", oid);
        }
    }

    if let Some(user_id) = &query.from_user {
        if let Ok(oid) = bson::oid::ObjectId::parse_str(user_id) {
            filter.insert("sender.user_id", oid);
        }
    }

    let limit = query.limit.unwrap_or(20);
    let find_opts = FindOptions::builder()
        .limit(limit)
        .sort(mongodb::bson::doc! { "score": { "$meta": "textScore" } })
        .build();

    let cursor = messages
        .find(filter, find_opts)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let messages_vec: Vec<Message> = cursor
        .try_collect()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let response: Vec<MessageResponse> = messages_vec.into_iter().map(|m| m.into()).collect();
    Ok(HttpResponse::Ok().json(response))
}
