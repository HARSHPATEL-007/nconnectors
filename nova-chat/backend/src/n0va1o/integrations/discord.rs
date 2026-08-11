use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct DiscordClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscordChannel {
    pub id: String,
    pub name: String,
    pub channel_type: u32,
    pub guild_id: Option<String>,
    pub position: Option<u32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscordMessage {
    pub id: String,
    pub content: String,
    pub author_id: String,
    pub author_name: String,
    pub channel_id: String,
    pub timestamp: String,
    pub edited_timestamp: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DiscordGuild {
    pub id: String,
    pub name: String,
    pub icon: Option<String>,
    pub owner_id: String,
    pub member_count: Option<u32>,
}

impl DiscordClient {
    pub fn new(bot_token: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://discord.com/api/v10", bot_token),
        }
    }

    pub async fn list_guilds(&self) -> Result<Vec<DiscordGuild>, IntegrationError> {
        let result = self.client.get("users/@me/guilds").await?;

        let guilds = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing guilds array".to_string()))?
            .iter()
            .filter_map(|g| {
                Some(DiscordGuild {
                    id: g["id"].as_str()?.to_string(),
                    name: g["name"].as_str()?.to_string(),
                    icon: g["icon"].as_str().map(|s| s.to_string()),
                    owner_id: g["owner_id"].as_str()?.to_string(),
                    member_count: g["member_count"].as_u64().map(|n| n as u32),
                })
            })
            .collect();

        Ok(guilds)
    }

    pub async fn list_channels(&self, guild_id: &str) -> Result<Vec<DiscordChannel>, IntegrationError> {
        let result = self.client.get(&format!("guilds/{}/channels", guild_id)).await?;

        let channels = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing channels array".to_string()))?
            .iter()
            .filter_map(|ch| {
                Some(DiscordChannel {
                    id: ch["id"].as_str()?.to_string(),
                    name: ch["name"].as_str()?.to_string(),
                    channel_type: ch["type"].as_u64().unwrap_or(0) as u32,
                    guild_id: ch["guild_id"].as_str().map(|s| s.to_string()),
                    position: ch["position"].as_u64().map(|n| n as u32),
                })
            })
            .collect();

        Ok(channels)
    }

    pub async fn send_message(&self, channel_id: &str, content: &str) -> Result<DiscordMessage, IntegrationError> {
        let body = serde_json::json!({
            "content": content,
        });

        let result = self.client.post(&format!("channels/{}/messages", channel_id), &body).await?;

        let author = result["author"]
            .as_object()
            .ok_or_else(|| IntegrationError::Parse("Missing author object".to_string()))?;

        Ok(DiscordMessage {
            id: result["id"].as_str().unwrap_or("").to_string(),
            content: result["content"].as_str().unwrap_or("").to_string(),
            author_id: author["id"].as_str().unwrap_or("").to_string(),
            author_name: author["username"].as_str().unwrap_or("").to_string(),
            channel_id: channel_id.to_string(),
            timestamp: result["timestamp"].as_str().unwrap_or("").to_string(),
            edited_timestamp: result["edited_timestamp"].as_str().map(|s| s.to_string()),
        })
    }

    pub async fn get_messages(&self, channel_id: &str, limit: u32) -> Result<Vec<DiscordMessage>, IntegrationError> {
        let result = self.client.get(&format!("channels/{}/messages?limit={}", channel_id, limit)).await?;

        let messages = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing messages array".to_string()))?
            .iter()
            .filter_map(|msg| {
                let author = msg["author"].as_object()?;
                Some(DiscordMessage {
                    id: msg["id"].as_str()?.to_string(),
                    content: msg["content"].as_str()?.to_string(),
                    author_id: author["id"].as_str()?.to_string(),
                    author_name: author["username"].as_str()?.to_string(),
                    channel_id: channel_id.to_string(),
                    timestamp: msg["timestamp"].as_str()?.to_string(),
                    edited_timestamp: msg["edited_timestamp"].as_str().map(|s| s.to_string()),
                })
            })
            .collect();

        Ok(messages)
    }

    pub async fn get_current_user(&self) -> Result<serde_json::Value, IntegrationError> {
        self.client.get("users/@me").await
    }

    pub async fn create_webhook(&self, channel_id: &str, name: &str) -> Result<serde_json::Value, IntegrationError> {
        let body = serde_json::json!({ "name": name });
        self.client.post(&format!("channels/{}/webhooks", channel_id), &body).await
    }
}
