pub mod agents;
pub mod audit;
pub mod connections;
pub mod escalations;
pub mod mcp_transport;
pub mod metrics;
pub mod sessions;
pub mod tools;

use actix_web::web;

pub fn config_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/v1/n0va1o")
            .configure(agents::config)
            .configure(sessions::config)
            .configure(audit::config)
            .configure(tools::config)
            .configure(connections::config)
            .configure(escalations::config)
            .configure(metrics::config)
            .configure(mcp_transport::config_mcp),
    );
}
