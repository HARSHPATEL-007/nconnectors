use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum RuntimeType {
    Python,
    Bash,
    NodeJs,
    Rust,
    Go,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RuntimeConfig {
    pub runtime_type: RuntimeType,
    pub version: String,
    pub packages: Vec<String>,
    pub env_vars: std::collections::HashMap<String, String>,
}

#[derive(Debug, Clone)]
pub struct ExecutionResult {
    pub success: bool,
    pub stdout: String,
    pub stderr: String,
    pub memory_peak_mb: u64,
    pub output_files: Vec<String>,
}

impl Default for RuntimeConfig {
    fn default() -> Self {
        Self {
            runtime_type: RuntimeType::Python,
            version: "3.12".to_string(),
            packages: vec![
                "pandas".to_string(),
                "numpy".to_string(),
                "scikit-learn".to_string(),
                "matplotlib".to_string(),
            ],
            env_vars: std::collections::HashMap::new(),
        }
    }
}
