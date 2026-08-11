use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use std::time::{Duration, Instant};
use tokio::sync::RwLock;

use super::runtime::{RuntimeType, RuntimeConfig, ExecutionResult};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SandboxConfig {
    pub cpu_quota: u32,
    pub ram_quota_mb: u32,
    pub disk_quota_mb: u32,
    pub timeout_seconds: u32,
    pub network_mode: NetworkMode,
    pub runtime: RuntimeType,
    pub allowed_domains: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum NetworkMode {
    Isolated,
    Filtered,
    Full,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SandboxResult {
    pub sandbox_id: String,
    pub status: SandboxStatus,
    pub stdout: String,
    pub stderr: String,
    pub exit_code: i32,
    pub duration_ms: u64,
    pub memory_peak_mb: u64,
    pub output_files: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum SandboxStatus {
    Running,
    Completed,
    Failed,
    Timeout,
    Killed,
}

pub struct SandboxEngine {
    active_sandboxes: Arc<RwLock<HashMap<String, SandboxInstance>>>,
    config: SandboxConfig,
}

#[derive(Debug)]
struct SandboxInstance {
    id: String,
    config: SandboxConfig,
    started_at: Instant,
    status: SandboxStatus,
}

impl SandboxEngine {
    pub fn new(config: SandboxConfig) -> Self {
        Self {
            active_sandboxes: Arc::new(RwLock::new(HashMap::new())),
            config,
        }
    }

    pub async fn create(&self) -> String {
        let sandbox_id = format!("sb_{}", generate_id());
        let instance = SandboxInstance {
            id: sandbox_id.clone(),
            config: self.config.clone(),
            started_at: Instant::now(),
            status: SandboxStatus::Running,
        };

        let mut sandboxes = self.active_sandboxes.write().await;
        sandboxes.insert(sandbox_id.clone(), instance);

        sandbox_id
    }

    pub async fn execute(&self, sandbox_id: &str, code: &str) -> SandboxResult {
        let start = Instant::now();

        let config = {
            let sandboxes = self.active_sandboxes.read().await;
            match sandboxes.get(sandbox_id) {
                Some(sb) => sb.config.clone(),
                None => {
                    return SandboxResult {
                        sandbox_id: sandbox_id.to_string(),
                        status: SandboxStatus::Failed,
                        stdout: String::new(),
                        stderr: format!("Sandbox {} not found", sandbox_id),
                        exit_code: -1,
                        duration_ms: 0,
                        memory_peak_mb: 0,
                        output_files: vec![],
                    };
                }
            }
        };

        let exec_result = self.run_in_sandbox(code, &config).await;

        let duration = start.elapsed();

        let mut sandboxes = self.active_sandboxes.write().await;
        if let Some(sb) = sandboxes.get_mut(sandbox_id) {
            sb.status = if exec_result.success {
                SandboxStatus::Completed
            } else {
                SandboxStatus::Failed
            };
        }

        SandboxResult {
            sandbox_id: sandbox_id.to_string(),
            status: if exec_result.success {
                SandboxStatus::Completed
            } else {
                SandboxStatus::Failed
            },
            stdout: exec_result.stdout,
            stderr: exec_result.stderr,
            exit_code: if exec_result.success { 0 } else { 1 },
            duration_ms: duration.as_millis() as u64,
            memory_peak_mb: exec_result.memory_peak_mb,
            output_files: exec_result.output_files,
        }
    }

    async fn run_in_sandbox(&self, code: &str, config: &SandboxConfig) -> ExecutionResult {
        ExecutionResult {
            success: true,
            stdout: format!("Executed {} bytes of code in {:?} runtime", code.len(), config.runtime),
            stderr: String::new(),
            memory_peak_mb: 128,
            output_files: vec![],
        }
    }

    pub async fn destroy(&self, sandbox_id: &str) -> bool {
        let mut sandboxes = self.active_sandboxes.write().await;
        sandboxes.remove(sandbox_id).is_some()
    }

    pub async fn get_status(&self, sandbox_id: &str) -> Option<SandboxStatus> {
        let sandboxes = self.active_sandboxes.read().await;
        sandboxes.get(sandbox_id).map(|sb| sb.status.clone())
    }

    pub async fn list_active(&self) -> Vec<String> {
        let sandboxes = self.active_sandboxes.read().await;
        sandboxes.keys().cloned().collect()
    }

    pub async fn kill(&self, sandbox_id: &str) -> bool {
        let mut sandboxes = self.active_sandboxes.write().await;
        if let Some(sb) = sandboxes.get_mut(sandbox_id) {
            sb.status = SandboxStatus::Killed;
            true
        } else {
            false
        }
    }

    pub async fn cleanup_expired(&self) -> usize {
        let mut sandboxes = self.active_sandboxes.write().await;
        let now = Instant::now();
        let timeout = Duration::from_secs(self.config.timeout_seconds as u64);

        let expired: Vec<String> = sandboxes
            .iter()
            .filter(|(_, sb)| now.duration_since(sb.started_at) > timeout)
            .map(|(id, _)| id.clone())
            .collect();

        let count = expired.len();
        for id in &expired {
            sandboxes.remove(id);
        }

        count
    }
}

fn generate_id() -> String {
    uuid::Uuid::new_v4().to_string().replace('-', "")[..12].to_string()
}

impl Default for SandboxConfig {
    fn default() -> Self {
        Self {
            cpu_quota: 2,
            ram_quota_mb: 4096,
            disk_quota_mb: 10240,
            timeout_seconds: 600,
            network_mode: NetworkMode::Isolated,
            runtime: RuntimeType::Python,
            allowed_domains: vec![],
        }
    }
}
