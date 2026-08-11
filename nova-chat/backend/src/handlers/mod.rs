pub mod auth;
pub mod n0va1o;
pub mod rooms;
pub mod messages;
pub mod users;
pub mod search;

use actix_web::web;

pub fn config_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/v1")
            .configure(auth::config)
            .configure(rooms::config)
            .configure(messages::config)
            .configure(users::config)
            .configure(search::config)
            .configure(n0va1o::config_routes)
    );
}
