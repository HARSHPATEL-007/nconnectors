use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct JiraClient {
    client: IntegrationClient,
    base_url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JiraIssue {
    pub id: String,
    pub key: String,
    pub summary: String,
    pub description: Option<String>,
    pub status: String,
    pub priority: Option<String>,
    pub assignee: Option<String>,
    pub reporter: Option<String>,
    pub issue_type: String,
    pub project: String,
    pub created: String,
    pub updated: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JiraProject {
    pub id: String,
    pub key: String,
    pub name: String,
    pub description: Option<String>,
    pub lead: Option<String>,
    pub project_type: String,
}

impl JiraClient {
    pub fn new(base_url: &str, token: &str) -> Self {
        Self {
            client: IntegrationClient::new(&format!("{}/rest/api/3", base_url.trim_end_matches('/')), token),
            base_url: base_url.trim_end_matches('/').to_string(),
        }
    }

    pub async fn search_issues(&self, jql: &str, max_results: u32) -> Result<Vec<JiraIssue>, IntegrationError> {
        let body = serde_json::json!({
            "jql": jql,
            "maxResults": max_results,
            "fields": ["summary", "description", "status", "priority", "assignee", "reporter", "issuetype", "project", "created", "updated"],
        });

        let result = self.client.post("search", &body).await?;

        let issues = result["issues"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing issues array".to_string()))?
            .iter()
            .filter_map(|issue| {
                let fields = issue["fields"].as_object()?;
                Some(JiraIssue {
                    id: issue["id"].as_str()?.to_string(),
                    key: issue["key"].as_str()?.to_string(),
                    summary: fields["summary"].as_str()?.to_string(),
                    description: fields["description"].as_str().map(|s| s.to_string()),
                    status: fields["status"]["name"].as_str()?.to_string(),
                    priority: fields["priority"]["name"].as_str().map(|s| s.to_string()),
                    assignee: fields["assignee"]["displayName"].as_str().map(|s| s.to_string()),
                    reporter: fields["reporter"]["displayName"].as_str().map(|s| s.to_string()),
                    issue_type: fields["issuetype"]["name"].as_str()?.to_string(),
                    project: fields["project"]["key"].as_str()?.to_string(),
                    created: fields["created"].as_str()?.to_string(),
                    updated: fields["updated"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(issues)
    }

    pub async fn create_issue(&self, project_key: &str, summary: &str, description: Option<&str>, issue_type: &str, priority: Option<&str>) -> Result<JiraIssue, IntegrationError> {
        let body = serde_json::json!({
            "fields": {
                "project": {"key": project_key},
                "summary": summary,
                "description": description,
                "issuetype": {"name": issue_type},
                "priority": priority.map(|p| serde_json::json!({"name": p})),
            }
        });

        let result = self.client.post("issue", &body).await?;

        Ok(JiraIssue {
            id: result["id"].as_str().unwrap_or("").to_string(),
            key: result["key"].as_str().unwrap_or("").to_string(),
            summary: summary.to_string(),
            description: description.map(|s| s.to_string()),
            status: "To Do".to_string(),
            priority: priority.map(|s| s.to_string()),
            assignee: None,
            reporter: None,
            issue_type: issue_type.to_string(),
            project: project_key.to_string(),
            created: chrono::Utc::now().to_rfc3339(),
            updated: chrono::Utc::now().to_rfc3339(),
        })
    }

    pub async fn get_issue(&self, issue_key: &str) -> Result<JiraIssue, IntegrationError> {
        let path = format!("issue/{}", issue_key);
        let result = self.client.get(&path).await?;

        let fields = result["fields"]
            .as_object()
            .ok_or_else(|| IntegrationError::Parse("Missing fields object".to_string()))?;

        Ok(JiraIssue {
            id: result["id"].as_str().unwrap_or("").to_string(),
            key: result["key"].as_str().unwrap_or("").to_string(),
            summary: fields["summary"].as_str().unwrap_or("").to_string(),
            description: fields["description"].as_str().map(|s| s.to_string()),
            status: fields["status"]["name"].as_str().unwrap_or("").to_string(),
            priority: fields["priority"]["name"].as_str().map(|s| s.to_string()),
            assignee: fields["assignee"]["displayName"].as_str().map(|s| s.to_string()),
            reporter: fields["reporter"]["displayName"].as_str().map(|s| s.to_string()),
            issue_type: fields["issuetype"]["name"].as_str().unwrap_or("").to_string(),
            project: fields["project"]["key"].as_str().unwrap_or("").to_string(),
            created: fields["created"].as_str().unwrap_or("").to_string(),
            updated: fields["updated"].as_str().unwrap_or("").to_string(),
        })
    }

    pub async fn list_projects(&self) -> Result<Vec<JiraProject>, IntegrationError> {
        let result = self.client.get("project?expand=description,lead").await?;

        let projects = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Expected array of projects".to_string()))?
            .iter()
            .filter_map(|p| {
                Some(JiraProject {
                    id: p["id"].as_str()?.to_string(),
                    key: p["key"].as_str()?.to_string(),
                    name: p["name"].as_str()?.to_string(),
                    description: p["description"].as_str().map(|s| s.to_string()),
                    lead: p["lead"]["displayName"].as_str().map(|s| s.to_string()),
                    project_type: p["projectTypeKey"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(projects)
    }

    pub async fn transition_issue(&self, issue_key: &str, transition_id: &str) -> Result<(), IntegrationError> {
        let path = format!("issue/{}/transitions", issue_key);
        let body = serde_json::json!({
            "transition": {"id": transition_id},
        });

        self.client.post(&path, &body).await?;
        Ok(())
    }
}
