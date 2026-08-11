use actix::prelude::*;
use dashmap::DashMap;
use mongodb::Database;
use redis::Client;
use serde::{Deserialize, Serialize};
use std::sync::Arc;

use crate::ws::ChatSession;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WsMessage {
    pub event: String,
    pub payload: serde_json::Value,
}

impl actix::Message for WsMessage {
    type Result = ();
}

#[allow(dead_code)]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WsMessageOld {
    pub event: String,
    pub payload: serde_json::Value,
}

#[derive(Debug, Clone)]
pub struct ConnectionInfo {
    pub user_id: String,
    pub addr: Addr<ChatSession>,
}

#[derive(Clone)]
pub struct WsState {
    pub sessions: Arc<DashMap<String, ConnectionInfo>>,
    pub rooms: Arc<DashMap<String, Vec<String>>>,
    pub redis: Client,
    pub db: Database,
}

impl WsState {
    pub fn new(redis: Client, db: Database) -> Self {
        Self {
            sessions: Arc::new(DashMap::new()),
            rooms: Arc::new(DashMap::new()),
            redis,
            db,
        }
    }

    pub fn connect(&self, user_id: String, addr: Addr<ChatSession>) {
        self.sessions.insert(user_id.clone(), ConnectionInfo {
            user_id,
            addr,
        });
    }

    pub fn disconnect(&self, user_id: &str) {
        self.sessions.remove(user_id);
        let uid = user_id.to_string();
        for mut entry in self.rooms.iter_mut() {
            entry.retain(|id| id != &uid);
        }
    }

    pub fn join_room(&self, room_id: &str, user_id: &str) {
        let mut members = self.rooms.entry(room_id.to_string()).or_default();
        if !members.contains(&user_id.to_string()) {
            members.push(user_id.to_string());
        }
    }

    pub fn leave_room(&self, room_id: &str, user_id: &str) {
        if let Some(mut members) = self.rooms.get_mut(room_id) {
            members.retain(|id| id != user_id);
        }
    }

    pub fn send_to_user(&self, user_id: &str, msg: &WsMessage) {
        if let Some(conn) = self.sessions.get(user_id) {
            let _ = addr::do_send(&conn.addr, msg.clone());
        }
    }

    pub fn broadcast_to_room(&self, room_id: &str, msg: &WsMessage, exclude_user: Option<&str>) {
        if let Some(members) = self.rooms.get(room_id) {
            for user_id in members.iter() {
                if let Some(exclude) = exclude_user {
                    if user_id == exclude {
                        continue;
                    }
                }
                self.send_to_user(user_id, msg);
            }
        }
    }

    pub fn get_room_members(&self, room_id: &str) -> Vec<String> {
        self.rooms
            .get(room_id)
            .map(|m| m.clone())
            .unwrap_or_default()
    }

    pub fn get_online_users(&self) -> Vec<String> {
        self.sessions.iter().map(|e| e.key().clone()).collect()
    }
}

mod addr {
    use actix::prelude::*;
    use crate::ws::ChatSession;
    use super::WsMessage;

    pub fn do_send(addr: &Addr<ChatSession>, msg: WsMessage) -> Result<(), SendError<WsMessage>> {
        addr.try_send(msg)
    }
}
