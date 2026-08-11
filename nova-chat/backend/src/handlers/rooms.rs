use actix_web::{web, HttpResponse, Result};
use bson::oid::ObjectId;
use chrono::Utc;
use mongodb::{Database, Collection};
use mongodb::options::{FindOptions, FindOneOptions};
use futures::stream::TryStreamExt;
use serde_json::json;

use crate::models::*;
use crate::utils::pagination::PaginatedResponse;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/rooms")
            .route("", web::get().to(list_rooms))
            .route("", web::post().to(create_room))
            .route("/{room_id}", web::get().to(get_room))
            .route("/{room_id}", web::patch().to(update_room))
            .route("/{room_id}/messages", web::get().to(get_room_messages))
            .route("/{room_id}/members", web::post().to(add_member))
            .route("/{room_id}/members/{user_id}", web::delete().to(remove_member))
            .route("/{room_id}/join", web::post().to(join_room))
            .route("/{room_id}/leave", web::post().to(leave_room))
    );
}

async fn list_rooms(
    db: web::Data<Database>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();

    let filter = mongodb::bson::doc! {
        "members.user_id": ObjectId::parse_str(&*user_id).ok().unwrap_or_else(ObjectId::new),
        "is_archived": false,
    };

    let page = query.get("page").and_then(|p| p.parse::<u64>().ok()).unwrap_or(1);
    let per_page = query.get("per_page").and_then(|p| p.parse::<i64>().ok()).unwrap_or(20);
    let skip = (page - 1) as u64 * per_page as u64;

    let total = rooms
        .count_documents(filter.clone(), None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let find_opts = FindOptions::builder()
        .skip(skip)
        .limit(per_page)
        .sort(mongodb::bson::doc! { "last_message_at": -1 })
        .build();

    let cursor = rooms
        .find(filter, find_opts)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let rooms_vec: Vec<Room> = cursor
        .try_collect()
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let response: Vec<RoomResponse> = rooms_vec.into_iter().map(|r| r.into()).collect();
    Ok(HttpResponse::Ok().json(PaginatedResponse::new(response, total, page, per_page as u64)))
}

async fn create_room(
    db: web::Data<Database>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
    req: web::Json<CreateRoomRequest>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();
    let creator_oid = ObjectId::parse_str(&*user_id).unwrap_or_else(|_| ObjectId::new());

    let now = Utc::now();
    let mut members = vec![RoomMember {
        user_id: creator_oid,
        role: MemberRole::Owner,
        joined_at: now,
        last_read_at: None,
        notification_pref: NotificationPref::default(),
    }];

    for member_id in &req.member_ids {
        if let Ok(oid) = ObjectId::parse_str(member_id) {
            if oid != creator_oid {
                members.push(RoomMember {
                    user_id: oid,
                    role: MemberRole::Member,
                    joined_at: now,
                    last_read_at: None,
                    notification_pref: NotificationPref::default(),
                });
            }
        }
    }

    let room = Room {
        id: None,
        name: req.name.clone(),
        display_name: req.display_name.clone(),
        description: req.description.clone(),
        room_type: req.room_type.clone(),
        members,
        member_count: req.member_ids.len() as u32 + 1,
        created_by: creator_oid,
        is_archived: false,
        retention_policy: RetentionPolicy::Standard,
        created_at: now,
        updated_at: now,
        last_message_at: None,
    };

    let result = rooms
        .insert_one(&room, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let room_id = result.inserted_id.as_object_id().unwrap().to_hex();
    Ok(HttpResponse::Created().json(json!({ "id": room_id, "room": room })))
}

async fn get_room(db: web::Data<Database>, room_id: web::Path<String>) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;

    let room = rooms
        .find_one(mongodb::bson::doc! { "_id": oid }, None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?
        .ok_or_else(|| actix_web::error::ErrorNotFound("Room not found"))?;

    Ok(HttpResponse::Ok().json(RoomResponse::from(room)))
}

async fn update_room(
    db: web::Data<Database>,
    room_id: web::Path<String>,
    req: web::Json<UpdateRoomRequest>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;

    let mut update_doc = mongodb::bson::doc! { "updated_at": Utc::now() };
    if let Some(name) = &req.display_name {
        update_doc.insert("display_name", name);
    }
    if let Some(desc) = &req.description {
        update_doc.insert("description", desc);
    }

    rooms
        .update_one(
            mongodb::bson::doc! { "_id": oid },
            mongodb::bson::doc! { "$set": update_doc },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "updated" })))
}

async fn get_room_messages(
    db: web::Data<Database>,
    room_id: web::Path<String>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> Result<HttpResponse> {
    let messages: Collection<Message> = db.collection("messages");
    let oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;

    let page = query.get("page").and_then(|p| p.parse::<u64>().ok()).unwrap_or(1);
    let per_page = query.get("per_page").and_then(|p| p.parse::<i64>().ok()).unwrap_or(50);
    let skip = (page - 1) as u64 * per_page as u64;

    let filter = mongodb::bson::doc! {
        "room_id": oid,
        "thread_id": null,
    };

    let total = messages
        .count_documents(filter.clone(), None)
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    let find_opts = FindOptions::builder()
        .skip(skip)
        .limit(per_page)
        .sort(mongodb::bson::doc! { "created_at": -1 })
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
    Ok(HttpResponse::Ok().json(PaginatedResponse::new(response, total, page, per_page as u64)))
}

async fn add_member(
    db: web::Data<Database>,
    path: web::Path<(String, String)>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let (room_id, user_id) = path.into_inner();
    let room_oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;
    let user_oid = ObjectId::parse_str(&*user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    let member = RoomMember {
        user_id: user_oid,
        role: MemberRole::Member,
        joined_at: Utc::now(),
        last_read_at: None,
        notification_pref: NotificationPref::default(),
    };

    rooms
        .update_one(
            mongodb::bson::doc! { "_id": room_oid },
            mongodb::bson::doc! {
                "$push": { "members": mongodb::bson::to_bson(&member).unwrap() },
                "$inc": { "member_count": 1 },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "member added" })))
}

async fn remove_member(
    db: web::Data<Database>,
    path: web::Path<(String, String)>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let (room_id, user_id) = path.into_inner();
    let room_oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;
    let user_oid = ObjectId::parse_str(&*user_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid user ID"))?;

    rooms
        .update_one(
            mongodb::bson::doc! { "_id": room_oid },
            mongodb::bson::doc! {
                "$pull": { "members": { "user_id": user_oid } },
                "$inc": { "member_count": -1 },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "member removed" })))
}

async fn join_room(
    db: web::Data<Database>,
    room_id: web::Path<String>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let room_oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();
    let user_oid = ObjectId::parse_str(&*user_id).unwrap_or_else(|_| ObjectId::new());

    let member = RoomMember {
        user_id: user_oid,
        role: MemberRole::Member,
        joined_at: Utc::now(),
        last_read_at: None,
        notification_pref: NotificationPref::default(),
    };

    rooms
        .update_one(
            mongodb::bson::doc! { "_id": room_oid },
            mongodb::bson::doc! {
                "$addToSet": { "members": mongodb::bson::to_bson(&member).unwrap() },
                "$inc": { "member_count": 1 },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "joined" })))
}

async fn leave_room(
    db: web::Data<Database>,
    room_id: web::Path<String>,
    user: Option<web::ReqData<crate::middleware::auth::Claims>>,
) -> Result<HttpResponse> {
    let rooms: Collection<Room> = db.collection("rooms");
    let room_oid = ObjectId::parse_str(&*room_id)
        .map_err(|_| actix_web::error::ErrorBadRequest("Invalid room ID"))?;
    let user_id = user.as_ref().map(|u| u.sub.clone()).unwrap_or_default();
    let user_oid = ObjectId::parse_str(&*user_id).unwrap_or_else(|_| ObjectId::new());

    rooms
        .update_one(
            mongodb::bson::doc! { "_id": room_oid },
            mongodb::bson::doc! {
                "$pull": { "members": { "user_id": user_oid } },
                "$inc": { "member_count": -1 },
            },
            None,
        )
        .await
        .map_err(|e| actix_web::error::ErrorInternalServerError(e.to_string()))?;

    Ok(HttpResponse::Ok().json(json!({ "status": "left" })))
}
