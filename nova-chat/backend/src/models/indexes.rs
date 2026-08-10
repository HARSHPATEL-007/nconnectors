use mongodb::{Database, IndexModel};
use mongodb::options::IndexOptions;

pub async fn create_indexes(db: &Database) -> Result<(), mongodb::error::Error> {
    let messages = db.collection::<super::Message>("messages");
    messages.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "room_id": 1, "created_at": -1 })
            .build(),
        None,
    ).await?;
    messages.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "sender.user_id": 1 })
            .build(),
        None,
    ).await?;
    messages.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "thread_id": 1 })
            .build(),
        None,
    ).await?;
    messages.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "content.body": "text" })
            .options(IndexOptions::builder().name(Some("text_search".to_string())).build())
            .build(),
        None,
    ).await?;

    let rooms = db.collection::<super::Room>("rooms");
    rooms.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "members.user_id": 1 })
            .build(),
        None,
    ).await?;
    rooms.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "room_type": 1 })
            .build(),
        None,
    ).await?;

    let users = db.collection::<super::User>("users");
    users.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "email": 1 })
            .options(IndexOptions::builder().unique(Some(true)).build())
            .build(),
        None,
    ).await?;
    users.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "username": 1 })
            .options(IndexOptions::builder().unique(Some(true)).build())
            .build(),
        None,
    ).await?;

    let presence = db.collection::<super::Presence>("presence");
    presence.create_index(
        IndexModel::builder()
            .keys(mongodb::bson::doc! { "user_id": 1 })
            .options(IndexOptions::builder().unique(Some(true)).build())
            .build(),
        None,
    ).await?;

    Ok(())
}
