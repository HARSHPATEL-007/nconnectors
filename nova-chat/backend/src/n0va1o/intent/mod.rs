use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IntentQuery {
    pub query: String,
    pub agent_id: Option<String>,
    pub max_tools: usize,
    pub context_window_size: Option<u32>,
    pub preferred_latency: Option<String>,
    pub risk_tolerance: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IntentResult {
    pub intent: String,
    pub confidence: f64,
    pub tools: Vec<IntentTool>,
    pub suggested_workflow: String,
    pub context_tokens_saved: u32,
    pub total_estimated_latency_ms: u32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct IntentTool {
    pub name: String,
    pub relevance: f64,
    pub reason: String,
    pub estimated_latency_ms: u32,
    pub required_scopes: Vec<String>,
    pub risk_level: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WorkflowStep {
    pub step_number: u32,
    pub tool_name: String,
    pub description: String,
    pub dependencies: Vec<u32>,
}

pub struct IntentEngine {
    intent_patterns: Vec<IntentPattern>,
}

#[derive(Debug, Clone)]
struct IntentPattern {
    intent_type: String,
    keywords: Vec<String>,
    tool_categories: Vec<String>,
    workflow_template: String,
}

impl IntentEngine {
    pub fn new() -> Self {
        let intent_patterns = vec![
            IntentPattern {
                intent_type: "cross_platform_file_workflow".to_string(),
                keywords: vec!["find".to_string(), "file".to_string(), "convert".to_string(), "upload".to_string(), "csv".to_string(), "pdf".to_string()],
                tool_categories: vec!["storage".to_string(), "conversion".to_string()],
                workflow_template: "search → convert → import → notify".to_string(),
            },
            IntentPattern {
                intent_type: "campaign_optimization".to_string(),
                keywords: vec!["campaign".to_string(), "budget".to_string(), "ads".to_string(), "roas".to_string(), "performance".to_string()],
                tool_categories: vec!["advertising".to_string(), "analytics".to_string()],
                workflow_template: "analyze → adjust → notify".to_string(),
            },
            IntentPattern {
                intent_type: "crm_sync".to_string(),
                keywords: vec!["lead".to_string(), "contact".to_string(), "deal".to_string(), "crm".to_string(), "sync".to_string()],
                tool_categories: vec!["crm".to_string()],
                workflow_template: "fetch → update → notify".to_string(),
            },
            IntentPattern {
                intent_type: "communication".to_string(),
                keywords: vec!["message".to_string(), "notify".to_string(), "slack".to_string(), "email".to_string(), "send".to_string()],
                tool_categories: vec!["communication".to_string()],
                workflow_template: "compose → send".to_string(),
            },
            IntentPattern {
                intent_type: "data_analysis".to_string(),
                keywords: vec!["analyze".to_string(), "report".to_string(), "data".to_string(), "metrics".to_string(), "dashboard".to_string()],
                tool_categories: vec!["analytics".to_string(), "storage".to_string()],
                workflow_template: "fetch → analyze → visualize".to_string(),
            },
            IntentPattern {
                intent_type: "code_repository".to_string(),
                keywords: vec!["pr".to_string(), "pull request".to_string(), "ci".to_string(), "github".to_string(), "merge".to_string()],
                tool_categories: vec!["developer_tools".to_string()],
                workflow_template: "check → review → merge".to_string(),
            },
        ];

        Self { intent_patterns }
    }

    pub fn classify(&self, query: &str) -> (String, f64) {
        let query_lower = query.to_lowercase();
        let query_terms: Vec<&str> = query_lower.split_whitespace().collect();

        let mut best_match = ("general".to_string(), 0.0);

        for pattern in &self.intent_patterns {
            let match_count = pattern.keywords.iter()
                .filter(|kw| query_terms.iter().any(|t| t.contains(*kw) || kw.contains(t)))
                .count();

            if match_count > 0 {
                let score = match_count as f64 / pattern.keywords.len() as f64;
                if score > best_match.1 {
                    best_match = (pattern.intent_type.clone(), score);
                }
            }
        }

        best_match
    }

    pub fn suggest_tools(&self, intent: &str, available_tools: &[String], max_tools: usize) -> Vec<(String, f64, String)> {
        let mut suggestions: Vec<(String, f64, String)> = available_tools
            .iter()
            .map(|tool| {
                let tool_lower = tool.to_lowercase();
                let relevance = match intent {
                    "cross_platform_file_workflow" => {
                        if tool_lower.contains("search") || tool_lower.contains("file") { 0.95 }
                        else if tool_lower.contains("convert") || tool_lower.contains("csv") { 0.90 }
                        else if tool_lower.contains("import") || tool_lower.contains("upload") { 0.85 }
                        else if tool_lower.contains("slack") || tool_lower.contains("notify") { 0.80 }
                        else { 0.1 }
                    }
                    "campaign_optimization" => {
                        if tool_lower.contains("campaign") || tool_lower.contains("ads") { 0.95 }
                        else if tool_lower.contains("budget") || tool_lower.contains("analytics") { 0.85 }
                        else { 0.1 }
                    }
                    "crm_sync" => {
                        if tool_lower.contains("crm") || tool_lower.contains("contact") || tool_lower.contains("lead") { 0.95 }
                        else { 0.1 }
                    }
                    "communication" => {
                        if tool_lower.contains("message") || tool_lower.contains("slack") || tool_lower.contains("email") { 0.95 }
                        else { 0.1 }
                    }
                    "data_analysis" => {
                        if tool_lower.contains("analytics") || tool_lower.contains("report") || tool_lower.contains("data") { 0.95 }
                        else { 0.1 }
                    }
                    "code_repository" => {
                        if tool_lower.contains("github") || tool_lower.contains("pr") || tool_lower.contains("ci") { 0.95 }
                        else { 0.1 }
                    }
                    _ => 0.3,
                };

                let reason = format!("Relevant to {} intent", intent);
                (tool.clone(), relevance, reason)
            })
            .collect();

        suggestions.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        suggestions.truncate(max_tools);
        suggestions
    }

    pub fn get_workflow_template(&self, intent: &str) -> String {
        self.intent_patterns
            .iter()
            .find(|p| p.intent_type == intent)
            .map(|p| p.workflow_template.clone())
            .unwrap_or_else(|| "execute".to_string())
    }
}

impl Default for IntentEngine {
    fn default() -> Self {
        Self::new()
    }
}
