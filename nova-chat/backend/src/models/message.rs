use bson::oid::ObjectId;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Message {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub room_id: ObjectId,
    pub sender: MessageSender,
    pub content: MessageContent,
    pub thread_id: Option<ObjectId>,
    pub parent_message_id: Option<ObjectId>,
    pub reactions: Vec<Reaction>,
    pub attachments: Vec<Attachment>,
    pub is_edited: bool,
    pub edit_history: Vec<EditVersion>,
    pub ephemeral: Option<EphemeralConfig>,
    pub reply_count: u32,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MessageSender {
    pub user_id: ObjectId,
    pub display_name: String,
    pub avatar_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MessageContent {
    pub content_type: ContentType,
    pub body: String,
    pub formatted_body: Option<String>,
    pub language: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum ContentType {
    Text,
    Markdown,
    Code,
    Image,
    Video,
    File,
    Interactive,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Reaction {
    pub emoji: String,
    pub users: Vec<String>,
    pub count: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Attachment {
    pub file_id: String,
    pub filename: String,
    pub size: u64,
    pub mime_type: String,
    pub url: String,
    pub thumbnail_url: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EditVersion {
    pub version: u32,
    pub body: String,
    pub edited_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EphemeralConfig {
    pub enabled: bool,
    pub ttl_seconds: u64,
    pub expires_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize, Validate)]
pub struct SendMessageRequest {
    pub room_id: String,
    pub content: MessageContent,
    pub thread_id: Option<String>,
    pub attachments: Option<Vec<Attachment>>,
}

#[derive(Debug, Deserialize, Validate)]
pub struct EditMessageRequest {
    pub body: String,
}

#[derive(Debug, Deserialize)]
pub struct ReactionRequest {
    pub emoji: String,
}

#[derive(Debug, Serialize)]
pub struct MessageResponse {
    pub id: String,
    pub room_id: String,
    pub sender: MessageSenderResponse,
    pub content: MessageContent,
    pub thread_id: Option<String>,
    pub parent_message_id: Option<String>,
    pub reactions: Vec<Reaction>,
    pub attachments: Vec<Attachment>,
    pub is_edited: bool,
    pub reply_count: u32,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Serialize)]
pub struct MessageSenderResponse {
    pub user_id: String,
    pub display_name: String,
    pub avatar_url: Option<String>,
}

impl From<Message> for MessageResponse {
    fn from(msg: Message) -> Self {
        MessageResponse {
            id: msg.id.map(|id| id.to_hex()).unwrap_or_default(),
            room_id: msg.room_id.to_hex(),
            sender: MessageSenderResponse {
                user_id: msg.sender.user_id.to_hex(),
                display_name: msg.sender.display_name,
                avatar_url: msg.sender.avatar_url,
            },
            content: msg.content,
            thread_id: msg.thread_id.map(|id| id.to_hex()),
            parent_message_id: msg.parent_message_id.map(|id| id.to_hex()),
            reactions: msg.reactions,
            attachments: msg.attachments,
            is_edited: msg.is_edited,
            reply_count: msg.reply_count,
            created_at: msg.created_at,
            updated_at: msg.updated_at,
        }
    }
}

#[derive(Debug, Deserialize)]
pub struct SearchQuery {
    pub q: String,
    pub room_id: Option<String>,
    pub from_user: Option<String>,
    pub before: Option<String>,
    pub after: Option<String>,
    pub limit: Option<i64>,
}
