use serde::{Deserialize, Serialize};
use std::collections::HashMap;

use super::{IntegrationClient, IntegrationError, IntegrationResult};

pub struct SlackClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SlackChannel {
    pub id: String,
    pub name: String,
    pub is_private: bool,
    pub member_count: u32,
    pub topic: Option<String>,
    pub purpose: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SlackMessage {
    pub ts: String,
    pub user: Option<String>,
    pub text: String,
    pub channel: String,
    pub thread_ts: Option<String>,
    pub reactions: Option<Vec<SlackReaction>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SlackReaction {
    pub name: String,
    pub count: u32,
    pub users: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SlackUser {
    pub id: String,
    pub name: String,
    pub real_name: Option<String>,
    pub email: Option<String>,
    pub is_bot: bool,
}

impl SlackClient {
    pub fn new(token: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://slack.com/api", token),
        }
    }

    pub async fn test_auth(&self) -> Result<serde_json::Value, IntegrationError> {
        self.client.get("auth.test").await
    }

    pub async fn list_channels(&self, exclude_archived: bool, limit: u32) -> Result<Vec<SlackChannel>, IntegrationError> {
        let mut params = format!("exclude_archived={}&limit={}", exclude_archived, limit);
        
        let result = self.client.get(&format!("conversations.list?{}", params)).await?;
        
        let channels = result["channels"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing channels array".to_string()))?
            .iter()
            .filter_map(|ch| {
                Some(SlackChannel {
                    id: ch["id"].as_str()?.to_string(),
                    name: ch["name"].as_str()?.to_string(),
                    is_private: ch["is_private"].as_bool().unwrap_or(false),
                    member_count: ch["num_members"].as_u64().unwrap_or(0) as u32,
                    topic: ch["topic"]["value"].as_str().map(|s| s.to_string()),
                    purpose: ch["purpose"]["value"].as_str().map(|s| s.to_string()),
                })
            })
            .collect();

        Ok(channels)
    }

    pub async fn post_message(&self, channel: &str, text: &str, thread_ts: Option<&str>) -> Result<SlackMessage, IntegrationError> {
        let mut body = serde_json::json!({
            "channel": channel,
            "text": text,
        });

        if let Some(ts) = thread_ts {
            body["thread_ts"] = serde_json::json!(ts);
        }

        let result = self.client.post("chat.postMessage", &body).await?;

        let message = SlackMessage {
            ts: result["ts"].as_str().unwrap_or("").to_string(),
            user: result["message"]["user"].as_str().map(|s| s.to_string()),
            text: result["message"]["text"].as_str().unwrap_or("").to_string(),
            channel: channel.to_string(),
            thread_ts: None,
            reactions: None,
        };

        Ok(message)
    }

    pub async fn fetch_messages(&self, channel: &str, limit: u32, oldest: Option<&str>) -> Result<Vec<SlackMessage>, IntegrationError> {
        let mut path = format!("conversations.history?channel={}&limit={}", channel, limit);
        
        if let Some(oldest_ts) = oldest {
            path.push_str(&format!("&oldest={}", oldest_ts));
        }

        let result = self.client.get(&path).await?;

        let messages = result["messages"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing messages array".to_string()))?
            .iter()
            .filter_map(|msg| {
                Some(SlackMessage {
                    ts: msg["ts"].as_str()?.to_string(),
                    user: msg["user"].as_str().map(|s| s.to_string()),
                    text: msg["text"].as_str()?.to_string(),
                    channel: channel.to_string(),
                    thread_ts: msg["thread_ts"].as_str().map(|s| s.to_string()),
                    reactions: msg["reactions"].as_array().map(|reactions| {
                        reactions.iter().filter_map(|r| {
                            Some(SlackReaction {
                                name: r["name"].as_str()?.to_string(),
                                count: r["count"].as_u64()? as u32,
                                users: r["users"].as_array()?.iter()
                                    .filter_map(|u| u.as_str().map(|s| s.to_string()))
                                    .collect(),
                            })
                        }).collect()
                    }),
                })
            })
            .collect();

        Ok(messages)
    }

    pub async fn add_reaction(&self, name: &str, channel: &str, timestamp: &str) -> Result<(), IntegrationError> {
        let body = serde_json::json!({
            "name": name,
            "channel": channel,
            "timestamp": timestamp,
        });

        self.client.post("reactions.add", &body).await?;
        Ok(())
    }

    pub async fn list_users(&self) -> Result<Vec<SlackUser>, IntegrationError> {
        let result = self.client.get("users.list?limit=200").await?;

        let users = result["members"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing members array".to_string()))?
            .iter()
            .filter_map(|u| {
                Some(SlackUser {
                    id: u["id"].as_str()?.to_string(),
                    name: u["name"].as_str()?.to_string(),
                    real_name: u["real_name"].as_str().map(|s| s.to_string()),
                    email: u["profile"]["email"].as_str().map(|s| s.to_string()),
                    is_bot: u["is_bot"].as_bool().unwrap_or(false),
                })
            })
            .collect();

        Ok(users)
    }

    pub async fn get_channel_info(&self, channel: &str) -> Result<SlackChannel, IntegrationError> {
        let result = self.client.get(&format!("conversations.info?channel={}", channel)).await?;

        let ch = result["channel"]
            .as_object()
            .ok_or_else(|| IntegrationError::Parse("Missing channel object".to_string()))?;

        Ok(SlackChannel {
            id: ch["id"].as_str().unwrap_or("").to_string(),
            name: ch["name"].as_str().unwrap_or("").to_string(),
            is_private: ch["is_private"].as_bool().unwrap_or(false),
            member_count: ch["num_members"].as_u64().unwrap_or(0) as u32,
            topic: ch["topic"]["value"].as_str().map(|s| s.to_string()),
            purpose: ch["purpose"]["value"].as_str().map(|s| s.to_string()),
        })
    }

    pub async fn verify_webhook(&self, signature: &str, timestamp: &str, body: &[u8], signing_secret: &str) -> bool {
        use hmac::{Hmac, Mac};
        use sha2::Sha256;

        let base_string = format!("v0:{}:{}", timestamp, String::from_utf8_lossy(body));
        
        let mut mac = Hmac::<Sha256>::new_from_slice(signing_secret.as_bytes())
            .expect("HMAC can take key of any size");
        mac.update(base_string.as_bytes());
        
        let result = mac.finalize();
        let expected_signature = format!("v0={}", hex::encode(result.into_bytes()));
        
        signature == expected_signature
    }
}
