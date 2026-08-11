use actix::prelude::*;
use actix_web_actors::ws;
use chrono::Utc;
use serde_json::json;
use std::time::{Duration, Instant};

use super::state::{WsMessage, WsState};

const HEARTBEAT_INTERVAL: Duration = Duration::from_secs(5);
const CLIENT_TIMEOUT: Duration = Duration::from_secs(10);

pub struct ChatSession {
    pub user_id: String,
    pub hb: Instant,
    pub state: WsState,
}

impl ChatSession {
    pub fn new(user_id: String, state: WsState) -> Self {
        Self {
            user_id,
            hb: Instant::now(),
            state,
        }
    }

    fn hb(&self, ctx: &mut ws::WebsocketContext<Self>) {
        ctx.run_interval(HEARTBEAT_INTERVAL, |act, ctx| {
            if Instant::now().duration_since(act.hb) > CLIENT_TIMEOUT {
                ctx.stop();
                return;
            }
            ctx.ping(b"");
        });
    }
}

impl Actor for ChatSession {
    type Context = ws::WebsocketContext<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        let user_id = self.user_id.clone();
        let addr = ctx.address();
        self.state.connect(user_id.clone(), addr);

        let presence_msg = WsMessage {
            event: "presence.change".to_string(),
            payload: json!({
                "user_id": user_id,
                "status": "online",
                "last_active": Utc::now().to_rfc3339(),
            }),
        };
        self.state.broadcast_to_room("global", &presence_msg, Some(&user_id));
        self.hb(ctx);
    }

    fn stopped(&mut self, _: &mut Self::Context) {
        let user_id = self.user_id.clone();
        self.state.disconnect(&user_id);

        let presence_msg = WsMessage {
            event: "presence.change".to_string(),
            payload: json!({
                "user_id": user_id,
                "status": "offline",
                "last_active": Utc::now().to_rfc3339(),
            }),
        };
        self.state.broadcast_to_room("global", &presence_msg, None);
    }
}

impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for ChatSession {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Ping(msg)) => {
                self.hb = Instant::now();
                ctx.pong(&msg);
            }
            Ok(ws::Message::Pong(_)) => {
                self.hb = Instant::now();
            }
            Ok(ws::Message::Text(text)) => {
                if let Ok(val) = serde_json::from_str::<serde_json::Value>(&text) {
                    self.handle_event(val, ctx);
                }
            }
            Ok(ws::Message::Binary(_)) => {}
            Ok(ws::Message::Close(reason)) => {
                ctx.close(reason);
                ctx.stop();
            }
            _ => ctx.stop(),
        }
    }
}

impl Handler<WsMessage> for ChatSession {
    type Result = ();

    fn handle(&mut self, msg: WsMessage, ctx: &mut Self::Context) {
        let json = serde_json::to_string(&msg).unwrap_or_default();
        ctx.text(json);
    }
}

impl ChatSession {
    fn handle_event(&self, val: serde_json::Value, ctx: &mut ws::WebsocketContext<Self>) {
        let event = val.get("event").and_then(|e| e.as_str()).unwrap_or("");
        let payload = val.get("payload").cloned().unwrap_or(json!({}));

        match event {
            "message.send" => {
                let user_id = self.user_id.clone();
                let msg = WsMessage {
                    event: "message.new".to_string(),
                    payload: json!({
                        "sender_id": user_id,
                        "content": payload,
                        "timestamp": Utc::now().to_rfc3339(),
                    }),
                };
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    self.state.broadcast_to_room(room_id, &msg, Some(&user_id));
                }
                let _ = ctx.address().try_send(msg);
            }
            "message.edit" => {
                let msg = WsMessage {
                    event: "message.updated".to_string(),
                    payload: payload.clone(),
                };
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    self.state.broadcast_to_room(room_id, &msg, None);
                }
            }
            "message.delete" => {
                let msg = WsMessage {
                    event: "message.deleted".to_string(),
                    payload: payload.clone(),
                };
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    self.state.broadcast_to_room(room_id, &msg, None);
                }
            }
            "message.react" => {
                let user_id = self.user_id.clone();
                let mut p = payload.clone();
                p["user_id"] = json!(user_id);
                let room_id = p.get("room_id").and_then(|r| r.as_str()).map(|s| s.to_string());
                let msg = WsMessage {
                    event: "message.reaction".to_string(),
                    payload: p,
                };
                if let Some(rid) = room_id {
                    self.state.broadcast_to_room(&rid, &msg, Some(&user_id));
                }
            }
            "typing.start" => {
                let user_id = self.user_id.clone();
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    let msg = WsMessage {
                        event: "typing.active".to_string(),
                        payload: json!({
                            "room_id": room_id,
                            "user_id": user_id,
                            "thread_id": payload.get("thread_id"),
                        }),
                    };
                    self.state.broadcast_to_room(room_id, &msg, Some(&user_id));
                }
            }
            "typing.stop" => {
                let user_id = self.user_id.clone();
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    let msg = WsMessage {
                        event: "typing.inactive".to_string(),
                        payload: json!({
                            "room_id": room_id,
                            "user_id": user_id,
                        }),
                    };
                    self.state.broadcast_to_room(room_id, &msg, Some(&user_id));
                }
            }
            "presence.update" => {
                let user_id = self.user_id.clone();
                let msg = WsMessage {
                    event: "presence.change".to_string(),
                    payload: json!({
                        "user_id": user_id,
                        "status": payload.get("status"),
                        "custom_status": payload.get("custom_status"),
                        "last_active": Utc::now().to_rfc3339(),
                    }),
                };
                self.state.broadcast_to_room("global", &msg, Some(&user_id));
            }
            "room.join" => {
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    self.state.join_room(room_id, &self.user_id);
                    let msg = WsMessage {
                        event: "room.member_joined".to_string(),
                        payload: json!({
                            "room_id": room_id,
                            "user_id": self.user_id,
                        }),
                    };
                    self.state.broadcast_to_room(room_id, &msg, Some(&self.user_id));
                }
            }
            "room.leave" => {
                if let Some(room_id) = payload.get("room_id").and_then(|r| r.as_str()) {
                    self.state.leave_room(room_id, &self.user_id);
                    let msg = WsMessage {
                        event: "room.member_left".to_string(),
                        payload: json!({
                            "room_id": room_id,
                            "user_id": self.user_id,
                        }),
                    };
                    self.state.broadcast_to_room(room_id, &msg, Some(&self.user_id));
                }
            }
            _ => {}
        }
    }
}

pub fn config_ws(cfg: &mut actix_web::web::ServiceConfig) {
    cfg.service(
        actix_web::web::resource("/ws/{user_id}")
            .route(actix_web::web::get().to(ws_index)),
    );
}

async fn ws_index(
    user_id: actix_web::web::Path<String>,
    req: actix_web::HttpRequest,
    stream: actix_web::web::Payload,
    state: actix_web::web::Data<WsState>,
) -> Result<actix_web::HttpResponse, actix_web::Error> {
    let session = ChatSession::new(user_id.into_inner(), state.get_ref().clone());
    ws::start(session, &req, stream)
}
