use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct GitHubClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitHubRepo {
    pub id: u64,
    pub name: String,
    pub full_name: String,
    pub description: Option<String>,
    pub url: String,
    pub stars: u32,
    pub forks: u32,
    pub open_issues: u32,
    pub language: Option<String>,
    pub private: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitHubIssue {
    pub id: u64,
    pub number: u32,
    pub title: String,
    pub body: Option<String>,
    pub state: String,
    pub user: String,
    pub labels: Vec<String>,
    pub created_at: String,
    pub updated_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GitHubPullRequest {
    pub id: u64,
    pub number: u32,
    pub title: String,
    pub body: Option<String>,
    pub state: String,
    pub user: String,
    pub head_branch: String,
    pub base_branch: String,
    pub merged: bool,
    pub mergeable: Option<bool>,
}

impl GitHubClient {
    pub fn new(token: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://api.github.com", token),
        }
    }

    pub async fn get_authenticated_user(&self) -> Result<serde_json::Value, IntegrationError> {
        self.client.get("user").await
    }

    pub async fn list_repos(&self, org: Option<&str>, per_page: u32) -> Result<Vec<GitHubRepo>, IntegrationError> {
        let path = match org {
            Some(org_name) => format!("orgs/{}/repos?per_page={}&sort=updated", org_name, per_page),
            None => format!("user/repos?per_page={}&sort=updated&affiliation=owner", per_page),
        };

        let result = self.client.get(&path).await?;

        let repos = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Expected array of repos".to_string()))?
            .iter()
            .filter_map(|r| {
                Some(GitHubRepo {
                    id: r["id"].as_u64()?,
                    name: r["name"].as_str()?.to_string(),
                    full_name: r["full_name"].as_str()?.to_string(),
                    description: r["description"].as_str().map(|s| s.to_string()),
                    url: r["html_url"].as_str()?.to_string(),
                    stars: r["stargazers_count"].as_u64().unwrap_or(0) as u32,
                    forks: r["forks_count"].as_u64().unwrap_or(0) as u32,
                    open_issues: r["open_issues_count"].as_u64().unwrap_or(0) as u32,
                    language: r["language"].as_str().map(|s| s.to_string()),
                    private: r["private"].as_bool().unwrap_or(false),
                })
            })
            .collect();

        Ok(repos)
    }

    pub async fn list_issues(&self, owner: &str, repo: &str, state: &str) -> Result<Vec<GitHubIssue>, IntegrationError> {
        let path = format!("repos/{}/{}/issues?state={}&per_page=100", owner, repo, state);
        let result = self.client.get(&path).await?;

        let issues = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Expected array of issues".to_string()))?
            .iter()
            .filter_map(|i| {
                Some(GitHubIssue {
                    id: i["id"].as_u64()?,
                    number: i["number"].as_u64()? as u32,
                    title: i["title"].as_str()?.to_string(),
                    body: i["body"].as_str().map(|s| s.to_string()),
                    state: i["state"].as_str()?.to_string(),
                    user: i["user"]["login"].as_str()?.to_string(),
                    labels: i["labels"].as_array()?.iter()
                        .filter_map(|l| l["name"].as_str().map(|s| s.to_string()))
                        .collect(),
                    created_at: i["created_at"].as_str()?.to_string(),
                    updated_at: i["updated_at"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(issues)
    }

    pub async fn create_issue(&self, owner: &str, repo: &str, title: &str, body: Option<&str>, labels: &[&str]) -> Result<GitHubIssue, IntegrationError> {
        let path = format!("repos/{}/{}/issues", owner, repo);
        let body_json = serde_json::json!({
            "title": title,
            "body": body,
            "labels": labels,
        });

        let result = self.client.post(&path, &body_json).await?;

        Ok(GitHubIssue {
            id: result["id"].as_u64().unwrap_or(0),
            number: result["number"].as_u64().unwrap_or(0) as u32,
            title: result["title"].as_str().unwrap_or("").to_string(),
            body: result["body"].as_str().map(|s| s.to_string()),
            state: result["state"].as_str().unwrap_or("").to_string(),
            user: result["user"]["login"].as_str().unwrap_or("").to_string(),
            labels: result["labels"].as_array().map(|arr| {
                arr.iter().filter_map(|l| l["name"].as_str().map(|s| s.to_string())).collect()
            }).unwrap_or_default(),
            created_at: result["created_at"].as_str().unwrap_or("").to_string(),
            updated_at: result["updated_at"].as_str().unwrap_or("").to_string(),
        })
    }

    pub async fn list_pull_requests(&self, owner: &str, repo: &str, state: &str) -> Result<Vec<GitHubPullRequest>, IntegrationError> {
        let path = format!("repos/{}/{}/pulls?state={}&per_page=100", owner, repo, state);
        let result = self.client.get(&path).await?;

        let prs = result
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Expected array of PRs".to_string()))?
            .iter()
            .filter_map(|pr| {
                Some(GitHubPullRequest {
                    id: pr["id"].as_u64()?,
                    number: pr["number"].as_u64()? as u32,
                    title: pr["title"].as_str()?.to_string(),
                    body: pr["body"].as_str().map(|s| s.to_string()),
                    state: pr["state"].as_str()?.to_string(),
                    user: pr["user"]["login"].as_str()?.to_string(),
                    head_branch: pr["head"]["ref"].as_str()?.to_string(),
                    base_branch: pr["base"]["ref"].as_str()?.to_string(),
                    merged: pr["merged_at"].is_null() == false,
                    mergeable: pr["mergeable"].as_bool(),
                })
            })
            .collect();

        Ok(prs)
    }

    pub async fn merge_pull_request(&self, owner: &str, repo: &str, number: u32, commit_message: Option<&str>) -> Result<bool, IntegrationError> {
        let path = format!("repos/{}/{}/pulls/{}/merge", owner, repo, number);
        let body = serde_json::json!({
            "commit_message": commit_message.unwrap_or("Merged via N0VA1O"),
            "merge_method": "merge",
        });

        let result = self.client.put(&path, &body).await?;
        Ok(result["merged"].as_bool().unwrap_or(false))
    }
}
