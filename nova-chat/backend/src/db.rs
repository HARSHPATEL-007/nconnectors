use mongodb::{Client, Database};
use crate::models::indexes;

pub async fn init(uri: &str) -> Result<Database, mongodb::error::Error> {
    let client = Client::with_uri_str(uri).await?;
    let db = client.database("nova_chat");
    indexes::create_indexes(&db).await?;
    Ok(db)
}

pub fn collection<T>(db: &Database, name: &str) -> mongodb::Collection<T> {
    db.collection(name)
}
