use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct HubSpotClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HubSpotContact {
    pub id: String,
    pub email: Option<String>,
    pub firstname: Option<String>,
    pub lastname: Option<String>,
    pub company: Option<String>,
    pub phone: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HubSpotDeal {
    pub id: String,
    pub name: String,
    pub stage: String,
    pub amount: Option<f64>,
    pub pipeline: String,
    pub close_date: Option<String>,
    pub created_at: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HubSpotCompany {
    pub id: String,
    pub name: String,
    pub domain: Option<String>,
    pub industry: Option<String>,
    pub city: Option<String>,
    pub country: Option<String>,
}

impl HubSpotClient {
    pub fn new(api_key: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://api.hubapi.com", api_key),
        }
    }

    pub async fn search_contacts(&self, query: &str, limit: u32) -> Result<Vec<HubSpotContact>, IntegrationError> {
        let body = serde_json::json!({
            "query": query,
            "limit": limit,
            "properties": ["email", "firstname", "lastname", "company", "phone"],
        });

        let result = self.client.post("crm/v3/objects/contacts/search", &body).await?;

        let contacts = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|c| {
                let props = c["properties"].as_object()?;
                Some(HubSpotContact {
                    id: c["id"].as_str()?.to_string(),
                    email: props["email"].as_str().map(|s| s.to_string()),
                    firstname: props["firstname"].as_str().map(|s| s.to_string()),
                    lastname: props["lastname"].as_str().map(|s| s.to_string()),
                    company: props["company"].as_str().map(|s| s.to_string()),
                    phone: props["phone"].as_str().map(|s| s.to_string()),
                    created_at: c["createdAt"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(contacts)
    }

    pub async fn create_contact(&self, email: &str, firstname: Option<&str>, lastname: Option<&str>, company: Option<&str>) -> Result<HubSpotContact, IntegrationError> {
        let body = serde_json::json!({
            "properties": {
                "email": email,
                "firstname": firstname,
                "lastname": lastname,
                "company": company,
            }
        });

        let result = self.client.post("crm/v3/objects/contacts", &body).await?;

        Ok(HubSpotContact {
            id: result["id"].as_str().unwrap_or("").to_string(),
            email: Some(email.to_string()),
            firstname: firstname.map(|s| s.to_string()),
            lastname: lastname.map(|s| s.to_string()),
            company: company.map(|s| s.to_string()),
            phone: None,
            created_at: result["createdAt"].as_str().unwrap_or("").to_string(),
        })
    }

    pub async fn search_deals(&self, limit: u32) -> Result<Vec<HubSpotDeal>, IntegrationError> {
        let body = serde_json::json!({
            "limit": limit,
            "properties": ["dealname", "dealstage", "amount", "pipeline", "closedate"],
        });

        let result = self.client.post("crm/v3/objects/deals/search", &body).await?;

        let deals = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|d| {
                let props = d["properties"].as_object()?;
                Some(HubSpotDeal {
                    id: d["id"].as_str()?.to_string(),
                    name: props["dealname"].as_str()?.to_string(),
                    stage: props["dealstage"].as_str()?.to_string(),
                    amount: props["amount"].as_str().and_then(|s| s.parse().ok()),
                    pipeline: props["pipeline"].as_str()?.to_string(),
                    close_date: props["closedate"].as_str().map(|s| s.to_string()),
                    created_at: d["createdAt"].as_str()?.to_string(),
                })
            })
            .collect();

        Ok(deals)
    }

    pub async fn search_companies(&self, query: &str, limit: u32) -> Result<Vec<HubSpotCompany>, IntegrationError> {
        let body = serde_json::json!({
            "query": query,
            "limit": limit,
            "properties": ["name", "domain", "industry", "city", "country"],
        });

        let result = self.client.post("crm/v3/objects/companies/search", &body).await?;

        let companies = result["results"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing results array".to_string()))?
            .iter()
            .filter_map(|c| {
                let props = c["properties"].as_object()?;
                Some(HubSpotCompany {
                    id: c["id"].as_str()?.to_string(),
                    name: props["name"].as_str()?.to_string(),
                    domain: props["domain"].as_str().map(|s| s.to_string()),
                    industry: props["industry"].as_str().map(|s| s.to_string()),
                    city: props["city"].as_str().map(|s| s.to_string()),
                    country: props["country"].as_str().map(|s| s.to_string()),
                })
            })
            .collect();

        Ok(companies)
    }

    pub async fn get_engagements(&self, object_type: &str, object_id: &str, limit: u32) -> Result<serde_json::Value, IntegrationError> {
        self.client.get(&format!("engagements/v1/engagements/{}/{}?limit={}", object_type, object_id, limit)).await
    }
}
