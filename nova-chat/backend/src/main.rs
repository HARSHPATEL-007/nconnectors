mod config;
mod db;
mod handlers;
mod middleware;
mod models;
mod utils;
mod ws;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use log::info;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    let config = config::Config::from_env();
    info!("Starting N0VA Chat Backend on {}:{}", config.server_host, config.server_port);

    let db = db::init(&config.database_url).await.expect("Failed to connect to MongoDB");
    info!("Connected to MongoDB");

    let redis = redis::Client::open(config.redis_url.clone()).expect("Failed to connect to Redis");
    info!("Connected to Redis");

    let ws_state = ws::WsState::new(redis.clone(), db.clone());

    HttpServer::new(move || {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .app_data(web::Data::new(db.clone()))
            .app_data(web::Data::new(redis.clone()))
            .app_data(web::Data::new(ws_state.clone()))
            .app_data(web::Data::new(config.clone()))
            .configure(handlers::config_routes)
            .configure(ws::config_ws)
    })
    .bind(format!("{}:{}", config.server_host, config.server_port))?
    .run()
    .await
}
