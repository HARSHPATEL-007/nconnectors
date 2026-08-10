use bson::oid::ObjectId;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Presence {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub user_id: ObjectId,
    pub status: PresenceStatus,
    pub custom_status: Option<String>,
    pub last_active_at: DateTime<Utc>,
    pub last_seen_platform: String,
    pub current_room_id: Option<ObjectId>,
    pub focus_mode: bool,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum PresenceStatus {
    Online,
    Away,
    Busy,
    Dnd,
    Offline,
    InMeeting,
    InFocus,
}

#[derive(Debug, Deserialize)]
pub struct UpdatePresenceRequest {
    pub status: Option<PresenceStatus>,
    pub custom_status: Option<String>,
    pub focus_mode: Option<bool>,
}

#[derive(Debug, Serialize)]
pub struct PresenceResponse {
    pub user_id: String,
    pub status: PresenceStatus,
    pub custom_status: Option<String>,
    pub last_active_at: DateTime<Utc>,
    pub focus_mode: bool,
}

impl From<Presence> for PresenceResponse {
    fn from(p: Presence) -> Self {
        PresenceResponse {
            user_id: p.user_id.to_hex(),
            status: p.status,
            custom_status: p.custom_status,
            last_active_at: p.last_active_at,
            focus_mode: p.focus_mode,
        }
    }
}
