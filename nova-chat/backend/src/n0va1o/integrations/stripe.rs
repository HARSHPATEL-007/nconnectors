use serde::{Deserialize, Serialize};

use super::{IntegrationClient, IntegrationError};

pub struct StripeClient {
    client: IntegrationClient,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StripeCustomer {
    pub id: String,
    pub email: Option<String>,
    pub name: Option<String>,
    pub created: i64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StripePaymentIntent {
    pub id: String,
    pub amount: i64,
    pub currency: String,
    pub status: String,
    pub customer: Option<String>,
    pub description: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StripeInvoice {
    pub id: String,
    pub customer: Option<String>,
    pub amount_due: i64,
    pub amount_paid: i64,
    pub currency: String,
    pub status: String,
    pub created: i64,
    pub invoice_pdf: Option<String>,
}

impl StripeClient {
    pub fn new(api_key: &str) -> Self {
        Self {
            client: IntegrationClient::new("https://api.stripe.com/v1", api_key),
        }
    }

    pub async fn list_customers(&self, limit: u32) -> Result<Vec<StripeCustomer>, IntegrationError> {
        let result = self.client.get(&format!("customers?limit={}", limit)).await?;

        let customers = result["data"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing customers data".to_string()))?
            .iter()
            .filter_map(|c| {
                Some(StripeCustomer {
                    id: c["id"].as_str()?.to_string(),
                    email: c["email"].as_str().map(|s| s.to_string()),
                    name: c["name"].as_str().map(|s| s.to_string()),
                    created: c["created"].as_i64().unwrap_or(0),
                })
            })
            .collect();

        Ok(customers)
    }

    pub async fn create_customer(&self, email: &str, name: Option<&str>) -> Result<StripeCustomer, IntegrationError> {
        let body = serde_json::json!({
            "email": email,
            "name": name,
        });

        let result = self.client.post("customers", &body).await?;

        Ok(StripeCustomer {
            id: result["id"].as_str().unwrap_or("").to_string(),
            email: result["email"].as_str().map(|s| s.to_string()),
            name: result["name"].as_str().map(|s| s.to_string()),
            created: result["created"].as_i64().unwrap_or(0),
        })
    }

    pub async fn create_payment_intent(&self, amount: i64, currency: &str, customer: Option<&str>, description: Option<&str>) -> Result<StripePaymentIntent, IntegrationError> {
        let body = serde_json::json!({
            "amount": amount,
            "currency": currency,
            "customer": customer,
            "description": description,
            "automatic_payment_methods": {"enabled": true},
        });

        let result = self.client.post("payment_intents", &body).await?;

        Ok(StripePaymentIntent {
            id: result["id"].as_str().unwrap_or("").to_string(),
            amount: result["amount"].as_i64().unwrap_or(0),
            currency: result["currency"].as_str().unwrap_or("").to_string(),
            status: result["status"].as_str().unwrap_or("").to_string(),
            customer: result["customer"].as_str().map(|s| s.to_string()),
            description: result["description"].as_str().map(|s| s.to_string()),
        })
    }

    pub async fn list_payment_intents(&self, limit: u32, customer: Option<&str>) -> Result<Vec<StripePaymentIntent>, IntegrationError> {
        let mut path = format!("payment_intents?limit={}", limit);
        if let Some(c) = customer {
            path.push_str(&format!("&customer={}", c));
        }

        let result = self.client.get(&path).await?;

        let intents = result["data"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing payment_intents data".to_string()))?
            .iter()
            .filter_map(|pi| {
                Some(StripePaymentIntent {
                    id: pi["id"].as_str()?.to_string(),
                    amount: pi["amount"].as_i64().unwrap_or(0),
                    currency: pi["currency"].as_str().unwrap_or("").to_string(),
                    status: pi["status"].as_str().unwrap_or("").to_string(),
                    customer: pi["customer"].as_str().map(|s| s.to_string()),
                    description: pi["description"].as_str().map(|s| s.to_string()),
                })
            })
            .collect();

        Ok(intents)
    }

    pub async fn list_invoices(&self, customer: Option<&str>, limit: u32) -> Result<Vec<StripeInvoice>, IntegrationError> {
        let mut path = format!("invoices?limit={}", limit);
        if let Some(c) = customer {
            path.push_str(&format!("&customer={}", c));
        }

        let result = self.client.get(&path).await?;

        let invoices = result["data"]
            .as_array()
            .ok_or_else(|| IntegrationError::Parse("Missing invoices data".to_string()))?
            .iter()
            .filter_map(|inv| {
                Some(StripeInvoice {
                    id: inv["id"].as_str()?.to_string(),
                    customer: inv["customer"].as_str().map(|s| s.to_string()),
                    amount_due: inv["amount_due"].as_i64().unwrap_or(0),
                    amount_paid: inv["amount_paid"].as_i64().unwrap_or(0),
                    currency: inv["currency"].as_str().unwrap_or("").to_string(),
                    status: inv["status"].as_str().unwrap_or("").to_string(),
                    created: inv["created"].as_i64().unwrap_or(0),
                    invoice_pdf: inv["invoice_pdf"].as_str().map(|s| s.to_string()),
                })
            })
            .collect();

        Ok(invoices)
    }

    pub async fn get_balance(&self) -> Result<serde_json::Value, IntegrationError> {
        self.client.get("balance").await
    }

    pub async fn verify_webhook_signature(&self, payload: &[u8], signature: &str, secret: &str) -> bool {
        use hmac::{Hmac, Mac};
        use sha2::Sha256;

        let parts: Vec<&str> = signature.split(',').collect();
        let mut timestamp = None;
        let mut sig_v1 = None;

        for part in &parts {
            let kv: Vec<&str> = part.splitn(2, '=').collect();
            if kv.len() == 2 {
                match kv[0] {
                    "t" => timestamp = Some(kv[1]),
                    "v1" => sig_v1 = Some(kv[1]),
                    _ => {}
                }
            }
        }

        let (Some(ts), Some(sig)) = (timestamp, sig_v1) else {
            return false;
        };

        let signed_payload = format!("{}.{}", ts, String::from_utf8_lossy(payload));

        let mut mac = Hmac::<Sha256>::new_from_slice(secret.as_bytes())
            .expect("HMAC can take key of any size");
        mac.update(signed_payload.as_bytes());

        let expected = hex::encode(mac.finalize().into_bytes());
        sig == expected
    }
}
