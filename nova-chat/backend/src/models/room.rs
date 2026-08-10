use bson::oid::ObjectId;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Room {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub display_name: String,
    pub description: Option<String>,
    pub room_type: RoomType,
    pub members: Vec<RoomMember>,
    pub member_count: u32,
    pub created_by: ObjectId,
    pub is_archived: bool,
    pub retention_policy: RetentionPolicy,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
    pub last_message_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RoomType {
    Dm,
    GroupDm,
    PublicChannel,
    PrivateChannel,
    Announcement,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RoomMember {
    pub user_id: ObjectId,
    pub role: MemberRole,
    pub joined_at: DateTime<Utc>,
    pub last_read_at: Option<DateTime<Utc>>,
    pub notification_pref: NotificationPref,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum MemberRole {
    Owner,
    Admin,
    Member,
    Guest,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotificationPref {
    pub mute: bool,
    pub notify_on_mention: bool,
    pub notify_on_thread: bool,
}

impl Default for NotificationPref {
    fn default() -> Self {
        Self {
            mute: false,
            notify_on_mention: true,
            notify_on_thread: true,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RetentionPolicy {
    Standard,
    Extended,
    Compliance,
    LegalHold,
    Ephemeral,
}

#[derive(Debug, Deserialize, Validate)]
pub struct CreateRoomRequest {
    pub name: String,
    pub display_name: String,
    pub description: Option<String>,
    pub room_type: RoomType,
    pub member_ids: Vec<String>,
}

#[derive(Debug, Deserialize)]
pub struct UpdateRoomRequest {
    pub display_name: Option<String>,
    pub description: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct RoomResponse {
    pub id: String,
    pub name: String,
    pub display_name: String,
    pub description: Option<String>,
    pub room_type: RoomType,
    pub members: Vec<RoomMemberResponse>,
    pub member_count: u32,
    pub is_archived: bool,
    pub created_at: DateTime<Utc>,
    pub last_message_at: Option<DateTime<Utc>>,
}

#[derive(Debug, Serialize)]
pub struct RoomMemberResponse {
    pub user_id: String,
    pub role: MemberRole,
    pub joined_at: DateTime<Utc>,
    pub last_read_at: Option<DateTime<Utc>>,
}

impl From<Room> for RoomResponse {
    fn from(room: Room) -> Self {
        RoomResponse {
            id: room.id.map(|id| id.to_hex()).unwrap_or_default(),
            name: room.name,
            display_name: room.display_name,
            description: room.description,
            room_type: room.room_type,
            members: room.members.into_iter().map(|m| RoomMemberResponse {
                user_id: m.user_id.to_hex(),
                role: m.role,
                joined_at: m.joined_at,
                last_read_at: m.last_read_at,
            }).collect(),
            member_count: room.member_count,
            is_archived: room.is_archived,
            created_at: room.created_at,
            last_message_at: room.last_message_at,
        }
    }
}
