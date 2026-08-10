use futures_util::{SinkExt, StreamExt};
use tokio_tungstenite::{connect_async, tungstenite::protocol::Message};
use std::collections::HashMap;

pub struct WebSocketAdapter {
    url: String,
    headers: HashMap<String, String>,
}

impl WebSocketAdapter {
    pub fn new(url: &str) -> Self {
        Self {
            url: url.to_string(),
            headers: HashMap::new(),
        }
    }

    pub fn with_header(mut self, key: &str, value: &str) -> Self {
        self.headers.insert(key.to_string(), value.to_string());
        self
    }

    pub async fn connect(&self) -> Result<WsConnection, String> {
        let request = tokio_tungstenite::tungstenite::handshake::client::Request::builder()
            .uri(&self.url)
            .header("Content-Type", "application/json")
            .body(());

        let request = match request {
            Ok(r) => r,
            Err(e) => return Err(format!("Failed to build request: {}", e)),
        };

        match connect_async(request).await {
            Ok((stream, _)) => {
                let (write, read) = stream.split();
                Ok(WsConnection { write: Some(write), read: Some(read) })
            }
            Err(e) => Err(format!("WebSocket connection failed: {}", e)),
        }
    }
}

pub struct WsConnection {
    write: Option<futures_util::stream::SplitSink<tokio_tungstenite::WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>, Message>>,
    read: Option<futures_util::stream::SplitStream<tokio_tungstenite::WebSocketStream<tokio_tungstenite::MaybeTlsStream<tokio::net::TcpStream>>>>,
}

impl WsConnection {
    pub async fn send_text(&mut self, text: &str) -> Result<(), String> {
        if let Some(ref mut write) = self.write {
            write.send(Message::Text(text.to_string()))
                .await
                .map_err(|e| format!("Send error: {}", e))
        } else {
            Err("Connection closed".to_string())
        }
    }

    pub async fn send_json(&mut self, json: &serde_json::Value) -> Result<(), String> {
        self.send_text(&json.to_string()).await
    }

    pub async fn recv_text(&mut self) -> Option<String> {
        if let Some(ref mut read) = self.read {
            match read.next().await {
                Some(Ok(Message::Text(text))) => Some(text),
                _ => None,
            }
        } else {
            None
        }
    }
}
