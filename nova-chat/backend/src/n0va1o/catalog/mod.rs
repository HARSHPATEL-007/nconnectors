use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CatalogEntry {
    pub id: String,
    pub name: String,
    pub category: String,
    pub subcategory: String,
    pub description: String,
    pub auth_type: String,
    pub capabilities: Vec<String>,
    pub status: String,
    pub protocol: String,
    pub popularity: u32,
    pub regions: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CatalogCategory {
    pub name: String,
    pub subcategory: String,
    pub count: u32,
}

#[derive(Clone)]
pub struct ConnectorCatalog {
    entries: Vec<CatalogEntry>,
    categories: HashMap<String, Vec<CatalogEntry>>,
}

impl ConnectorCatalog {
    pub fn new() -> Self {
        let entries = Self::generate_catalog();
        let mut categories: HashMap<String, Vec<CatalogEntry>> = HashMap::new();
        for entry in &entries {
            categories
                .entry(entry.category.clone())
                .or_default()
                .push(entry.clone());
        }
        Self { entries, categories }
    }

    pub fn count(&self) -> usize {
        self.entries.len()
    }

    pub fn list_all(&self) -> &[CatalogEntry] {
        &self.entries
    }

    pub fn list_by_category(&self, category: &str) -> Vec<&CatalogEntry> {
        self.entries
            .iter()
            .filter(|e| e.category.to_lowercase() == category.to_lowercase())
            .collect()
    }

    pub fn list_by_subcategory(&self, subcategory: &str) -> Vec<&CatalogEntry> {
        self.entries
            .iter()
            .filter(|e| e.subcategory.to_lowercase() == subcategory.to_lowercase())
            .collect()
    }

    pub fn search(&self, query: &str) -> Vec<&CatalogEntry> {
        let q = query.to_lowercase();
        self.entries
            .iter()
            .filter(|e| {
                e.name.to_lowercase().contains(&q)
                    || e.description.to_lowercase().contains(&q)
                    || e.category.to_lowercase().contains(&q)
                    || e.subcategory.to_lowercase().contains(&q)
                    || e.capabilities.iter().any(|c| c.to_lowercase().contains(&q))
            })
            .collect()
    }

    pub fn categories(&self) -> &HashMap<String, Vec<CatalogEntry>> {
        &self.categories
    }

    pub fn category_names(&self) -> Vec<&String> {
        self.categories.keys().collect()
    }

    pub fn get(&self, id: &str) -> Option<&CatalogEntry> {
        self.entries.iter().find(|e| e.id == id)
    }

    pub fn top_integrations(&self, limit: usize) -> Vec<&CatalogEntry> {
        let mut sorted: Vec<&CatalogEntry> = self.entries.iter().collect();
        sorted.sort_by(|a, b| b.popularity.cmp(&a.popularity));
        sorted.into_iter().take(limit).collect()
    }

    fn generate_catalog() -> Vec<CatalogEntry> {
        let mut entries = Vec::with_capacity(1100);
        let mut id_counter = 0;

        let categories: Vec<(&'static str, Vec<(&'static str, Vec<&'static str>)>)> = vec![
            ("Social & Collaboration", vec![
                ("Team Chat", vec!["Slack", "Microsoft Teams", "Discord", "Telegram", "WhatsApp Business", "Signal", "Mattermost", "Rocket.Chat", "Zulip", "Flock", "Chanty", "Flowdock", "Glip", "HipChat", "Symphony", "Viber Business", "WeChat Work", "Line Works", "KakaoTalk Work", "Matrix/Element", "IRC", "XMPP/Jabber", "Google Chat", "Figma Slack", "Twitch Chat", "YouTube Live Chat", "Reddit", "Guilded"]),
                ("Video Conferencing", vec!["Zoom", "Google Meet", "Microsoft Teams", "Webex", "GoToMeeting", "BlueJeans", "Jitsi", "Whereby", "Lifesize", "RingCentral Video", "8x8 Video", "DialPad Meet", "Zoho Meeting", "BigMarker", "ClickMeeting", "Zoom Phone", "Amazon Chouse", "Cisco Meeting"]),
                ("Community Platforms", vec!["Discourse", "Vanilla Forums", "phpBB", "vBulletin", "XenForo", "Invision Community", "Khoros", "Higher Logic", "Tribe", "Mighty Networks", "Circle", "Kajabi", "Podia", "Discord Server", "Telegram Group", "Facebook Group", "LinkedIn Group", "Reddit Community"]),
                ("Social Media Management", vec!["Hootsuite", "Buffer", "Sprout Social", "Later", "Sendible", "Agorapulse", "SocialBee", "CoSchedule", "Loomly", "Planoly", "Tailwind", "MeetEdgar", "SocialPilot", "Falcon.io", "Brandwatch", "Mention", "BuzzSumo"]),
            ]),
            ("CRM & Sales", vec![
                ("CRM Platforms", vec!["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Freshsales", "Insightly", "Nimble", "SugarCRM", "Agile CRM", "Capsule CRM", "Really Simple Systems", "Benchmark.one", "Less Annoying CRM", "Apptivo", "Vtiger", "Bitrix24", "Salesflare", "Nutshell", "Zendesk Sell", "Close"]),
                ("Sales Engagement", vec!["Outreach", "SalesLoft", "Groove", "Apollo.io", "ZoomInfo", "Lusha", "Clearbit", "Leadfeeder", "6sense", "Demandbase", "Engagio", "Terminus", "AdRoll", "Drift", "Intercom", "Crisp", "Tidio", "LiveChat", "Olark"]),
                ("Proposal & Contract", vec!["PandaDoc", "DocuSign", "HelloSign", "SignNow", "Adobe Sign", "Proposaly", "Qwilr", "Bidsketch", "Proposify", "GetAccept", "Conga", "Ironclad", "ContractWorks", "Icertis", "Agiloft", "SpringCM"]),
                ("Customer Support", vec!["Zendesk", "Freshdesk", "Help Scout", "Intercom", "Crisp", "Drift", "Tidio", "LiveChat", "Olark", "HelpCrunch", "Kayako", "Groove", "Front", "HappyFox", "Zoho Desk", "Vision Helpdesk", "Jira Service Management", "ServiceNow", "Salesforce Service Cloud", "HubSpot Service"]),
            ]),
            ("Developer Tools", vec![
                ("Code Hosting", vec!["GitHub", "GitLab", "Bitbucket", "Azure DevOps", "SourceForge", "Gitea", "Gogs", "Launchpad", "Savannah", "Codeberg", "NotABug", "GitKraken", "Beanstalk", "CloudForge", "Assembla", "Phabricator", "RhodeCode", "Kallithea"]),
                ("CI/CD", vec!["Jenkins", "CircleCI", "Travis CI", "GitHub Actions", "GitLab CI", "TeamCity", "Bamboo", "AWS CodePipeline", "Azure Pipelines", "Google Cloud Build", "Drone", "Buildkite", "Semaphore", "Codefresh", "Harness", "Spinnaker", "ArgoCD", "Tekton", "GoCD", "Buddy"]),
                ("Monitoring", vec!["Datadog", "New Relic", "Grafana", "Prometheus", "Splunk", "ELK Stack", "PagerDuty", "Opsgenie", "VictorOps", "BigPanda", "Moogsoft", "Honeycomb", "Lightstep", "Sentry", "Bugsnag", "Rollbar", "LogRocket", "FullStory", "Heap", "Amplitude"]),
                ("Cloud Platforms", vec!["AWS", "Google Cloud", "Azure", "DigitalOcean", "Linode", "Vultr", "Heroku", "Render", "Fly.io", "Netlify", "Vercel", "Cloudflare", "Fastly", "Akamai", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud", "Hetzner", "OVHcloud", "Scaleway"]),
                ("API Management", vec!["Postman", "Insomnia", "Swagger", "Stoplight", "RapidAPI", "MuleSoft", "Apigee", "Kong", "Tyk", "3scale", "WSO2", "AWS API Gateway", "Azure API Management", "Google Cloud Endpoints"]),
            ]),
            ("Project Management", vec![
                ("Agile & Scrum", vec!["Jira", "Linear", "Shortcut", "Clubhouse", "Monday.com", "Asana", "Trello", "ClickUp", "Notion", "Wrike", "Targetprocess", "VersionOne", "Rally", "Azure Boards", "YouTrack", "Redmine", "OpenProject", "Taiga", "GitKraken Boards"]),
                ("Task Management", vec!["Todoist", "TickTick", "Any.do", "Things 3", "OmniFocus", "Remember The Milk", "Wunderlist", "Microsoft To Do", "Google Tasks", "Habitica", "Quire", "Focalpoint", "Sunsama", "Akiflow", "Morgen"]),
                ("Time Tracking", vec!["Toggl Track", "Harvest", "Clockify", "TimeCamp", "Timely", "RescueHub", "Everhour", "Hubstaff", "Time Doctor", "DeskTime", "Timetrack.io", "Paymo", "BigTime", "Unanet", "Mavenlink"]),
                ("Resource Planning", vec!["Float", "Resource Guru", "Savioz", "10,000ft", "Kantata", "Politan", "Runn", "Forecast", "Ganttic", "Hub Planner"]),
            ]),
            ("Productivity", vec![
                ("Document Management", vec!["Notion", "Confluence", "Coda", "GitBook", "Slab", "Obsidian", "Roam Research", "Logseq", "Craft", "Anytype", "Nuclino", "ClickUp Docs", "Dropbox Paper", "Quip", "Google Docs"]),
                ("Note Taking", vec!["Evernote", "OneNote", "Apple Notes", "Bear", "Simplenote", "Standard Notes", "Joplin", "Zoho Notebook", "Notability", "GoodNotes", "Nebo", "Squid", "MetaMoJi"]),
                ("Email", vec!["Gmail", "Outlook", "ProtonMail", "Zoho Mail", "Fastmail", "HEY", "Superhuman", "Spark", "Airmail", "eM Client", "Mailbird", "Postbox", "Thunderbird", "Mailspring", "Front"]),
                ("Calendar", vec!["Google Calendar", "Outlook Calendar", "Apple Calendar", "Calendly", "Doodle", "Acuity Scheduling", "YouCanBook.me", "SavvyCal", "Reclaim.ai", "Clockwise", "Fantastical", "Morgen", "TimeTap", "Setmore", "SimplyBook.me"]),
                ("Cloud Storage", vec!["Google Drive", "Dropbox", "OneDrive", "Box", "iCloud", "AWS S3", "Azure Blob", "Google Cloud Storage", "Wasabi", "Backblaze B2", "pCloud", "Mega", "Sync.com", "Tresorit", "Nextcloud"]),
            ]),
            ("Finance & Payments", vec![
                ("Payment Processing", vec!["Stripe", "PayPal", "Square", "Adyen", "Braintree", "2Checkout", "Authorize.Net", "Worldpay", "Klarna", "Afterpay", "Affirm", "Sezzle", "Payoneer", "Wise", "Revolut Business", "Mercado Pago", "Razorpay", "PayU", "iDEAL", "Giropay"]),
                ("Accounting", vec!["QuickBooks", "Xero", "FreshBooks", "Wave", "Sage", "Zoho Books", "FreeAgent", "Kashoo", "Sage Intacct", "NetSuite", "Sage 50", "Sage 100", "MYOB", "Reckon", "ClearBooks"]),
                ("Expense Management", vec!["Expensify", "Brex", "Ramp", "Divvy", "Airbase", "TripActions", "Coupa", "Spendesk", "Soldo", "Pleo", "VirtaCorp", "Zoho Expense", "Fyle", "Emburse", "Chrome River"]),
                ("Invoicing", vec!["Invoice Ninja", "Zoho Invoice", "Invoiced", "Chargebee", "Recurly", "Fusebill", "SaaSOptics", "ChartMogul", "Baremetrics", "ProfitWell", "Bling", "Hiveage", "Bookkeeper", "SliQ Invoicing", "Invoice2go"]),
                ("Banking", vec!["Plaid", "Yodlee", "Finicity", "MX", "Tink", "Salt Edge", "Token.io", "Railsbank", "Synapse", "Unit", "Lithic", "Marqeta", "Galileo", "Stripe Treasury", "Modern Treasury"]),
            ]),
            ("E-commerce & Operations", vec![
                ("E-commerce Platforms", vec!["Shopify", "WooCommerce", "Magento", "BigCommerce", "Squarespace", "Wix", "PrestaShop", "OpenCart", "osCommerce", "Volusion", "3dcart", "Big Cartel", "Ecwid", "Selz", "Gumroad", "Shopify Plus", "Shopware", "Sylius", "Saleor", "Spree"]),
                ("Marketplaces", vec!["Amazon Seller", "eBay", "Etsy", "Walmart Marketplace", "Target Plus", "Best Buy Marketplace", "Newegg", "Rakuten", "Mercado Libre", "Alibaba", "AliExpress", "Wish", "Facebook Marketplace", "Instagram Shopping", "Google Shopping"]),
                ("Inventory Management", vec!["TradeGecko", "Cin7", "Zoho Inventory", "Finale Inventory", "Skubana", "Linnfish", "Fishbowl", "Katana", "MRPeasy", "Odoo Inventory", "ERPNext", "SkuVault", "Skubana", "SOS Inventory", "Orderhive"]),
                ("Shipping & Logistics", vec!["ShipStation", "Shippo", "ShipBob", "EasyPost", "AfterShip", "ParcelTrack", "17Track", "Track-POD", "Ordoro", "ShipMonk", "Deliverr", "Flexport", "Freightos", "uShip", "Shipwire"]),
            ]),
            ("Marketing", vec![
                ("Email Marketing", vec!["Mailchimp", "SendGrid", "Constant Contact", "Campaign Monitor", "AWeber", "GetResponse", "ConvertKit", "ActiveCampaign", "Drip", "Klaviyo", "Omnisend", "MailerLite", "Sendinblue", "Benchmark Email", "Moosend"]),
                ("Marketing Automation", vec!["HubSpot Marketing", "Marketo", "Pardot", "Eloqua", "Act-On", "SharpSpring", "ActiveCampaign", "Drip", "Autopilot", "Customer.io", "Braze", "Iterable", "Leanplum", "Appboy", "Kahuna"]),
                ("Social Media", vec!["Facebook Ads", "Google Ads", "LinkedIn Ads", "Twitter Ads", "TikTok Ads", "Instagram Ads", "Pinterest Ads", "Snapchat Ads", "Reddit Ads", "Quora Ads", "Bing Ads", "Yandex Ads", "VK Ads", "WeChat Ads", "Line Ads"]),
                ("Analytics", vec!["Google Analytics", "Mixpanel", "Amplitude", "Heap", "Kissmetrics", "Hotjar", "Crazy Egg", "FullStory", "LogRocket", "Pendo", "Appcues", "Userpips", "Chameleon", "WalkMe", "Whatfix"]),
                ("SEO", vec!["SEMrush", "Ahrefs", "Moz", "Serpstat", "Ubersuggest", "SpyFu", "KWFinder", "Majestic", "Screaming Frog", "Yoast", "RankMath", "SEOPress", "Squirrly", "Linkody", "Nightwatch"]),
            ]),
            ("HR & People", vec![
                ("HRIS", vec!["BambooHR", "Gusto", "Zenefits", "Workday", "SAP SuccessFactors", "ADP", "Paychex", "Paylocity", "UKG Pro", "Ceridian Dayforce", "Namely", " Namely", "HR Cloud", "Sage HR", "Zoho People"]),
                ("Recruiting", vec!["Greenhouse", "Lever", "Workable", "Breezy HR", "SmartRecruiters", "iCIMS", "Jobvite", "JazzHR", "Workday Recruiting", "BambooHR ATS", "Recruitee", "Fetcher", "Paradox", "HireVue", "Phenom"]),
                ("Performance", vec!["Lattice", "15Five", "Culture Amp", "Lattice", "Betterworks", "Workboard", "Gtmhub", "Perdoo", "7Geese", "EngageBay", "Reflektive", "Synergita", "SAP SuccessFactors", "Workday", "Oracle HCM"]),
                ("Learning", vec!["Lessonly", "Trainual", "TalentLMS", "LearnUpon", "Docebo", "Cornerstone", "360Learning", "EdCast", "Absorb LMS", "Moodle", "Canvas", "Blackboard", "D2L", "Thinkific", "Teachable"]),
            ]),
            ("IT & Infrastructure", vec![
                ("ITSM", vec!["ServiceNow", "Jira Service Management", "Freshservice", "ManageEngine", "SolarWinds", "BMC Remedy", "Ivanti", "Cherwell", "Axios Assyst", "TOPdesk", "InvGate", "Alloy Navigator", "Samanage", "Spiceworks", "Jira Service Desk"]),
                ("Endpoint Management", vec!["Jamf", "Intune", "Workspace ONE", "Munki", "Mosyle", "Kandji", "Addigy", "FileWave", "NinjaOne", "ConnectWise", "Kaseya", "Datto", "Atera", "Syncro", "SuperOps"]),
                ("Security", vec!["Okta", "OneLogin", "Ping Identity", "Auth0", "CyberArk", "Duo", "Google Authenticator", "YubiKey", "SailPoint", "SailPoint", "Saviynt", "Omada", "Microsoft Entra", "ForgeRock", "IBM Security"]),
                ("Network Monitoring", vec!["PRTG", "SolarWinds", "Nagios", "Zabbix", "Auvik", "Domotz", "Duda", "LogicMonitor", "ScienceCatch", "ThousandEyes", "Cisco DNA", "Aruba Central", "Juniper Mist", "ExtremeCloud", "Ruckus Cloud"]),
            ]),
            ("Design & Creative", vec![
                ("Design Tools", vec!["Figma", "Adobe Creative Cloud", "Sketch", "Canva", "InVision", "Abstract", "Framer", "ProtoPie", "Principle", "Marvel", "Axure", "Balsamiq", "UXPin", "Origami", "Flinto"]),
                ("Prototyping", vec!["InVision", "Marvel", "Principle", "ProtoPie", "Framer", "Origami Studio", "Flinto", "Protopie", "Axure RP", "Balsamiq", "Moqups", "Mockplus", "Justinmind", "UXPin", "Pidoco"]),
                ("Asset Management", vec!["Brandfolder", "Bynder", "Canto", "DAM", "Adobe Experience Manager", "Cloudinary", "Imgix", "ImageKit", "Uploadcare", "Filepicker", "Filestack", "PCloud", "Dropbox", "Google Drive", "OneDrive"]),
            ]),
            ("Communication", vec![
                ("Voice & Telephony", vec!["Twilio", "Vonage", "RingCentral", "8x8", "DialPad", "Grasshopper", "Nextiva", "Ooma", "Phone.com", "Line2", "Freshcaller", "Aircall", "JustCall", "OpenPhone", "Google Voice"]),
                ("SMS", vec!["Twilio", "Vonage", "MessageBird", "Sinch", "Plivo", "Telnyx", "TextMagic", "SimpleTexting", "EZTexting", "SMSBump", "Postscript", "Attentive", "Klaviyo SMS", "SMSAPI", "ClickSend"]),
                ("Live Chat", vec!["Intercom", "Drift", "Crisp", "Tidio", "LiveChat", "Olark", "HelpCrunch", "Userlike", "PureChat", "Tawk.to", "Freshchat", "Zendesk Chat", "SnapEngage", "PurerChat", "Chaport"]),
            ]),
            ("Data & Analytics", vec![
                ("Business Intelligence", vec!["Tableau", "Power BI", "Looker", "Mode", "Sisense", "Domo", "Qlik", "ThoughtSpot", "Sisense", "Yellowfin", "Klipfolio", "Datapine", "KPI fire", "Rossboards", "Izenda"]),
                ("Data Warehousing", vec!["Snowflake", "BigQuery", "Redshift", "Databricks", "Firebolt", "Singular", "Apache Druid", "ClickHouse", "Apache Pinot", "Rockset", "Materialize", "Firebolt", "Yellowbrick", "Exasol", "Vertica"]),
                ("ETL & Pipelines", vec!["Fivetran", "Stitch", "Airbyte", "dbt", "Matillion", "Talend", "Informatica", "Alteryx", "Pentaho", "Apache NiFi", "StreamSets", "Meltano", "Dagster", "Prefect", "Airflow"]),
                ("Data Governance", vec!["Collibra", "Alation", "Informatica", "Talend", "Apache Atlas", "Atlan", "Monte Carlo", "Bigeye", "Soda", "Great Expectations", "Anomalo", "Validio", "Acceldata", "DATUM", "FirstEigen"]),
            ]),
            ("AI & Machine Learning", vec![
                ("AI Platforms", vec!["OpenAI", "Anthropic", "Google Vertex AI", "AWS Bedrock", "Azure OpenAI", "Cohere", "AI21 Labs", "Stability AI", "Hugging Face", "Replicate", "Together AI", "Anyscale", "Groq", "Mistral AI", "Fireworks AI"]),
                ("ML Ops", vec!["MLflow", "Weights & Biases", "Neptune.ai", "Comet", "DVC", "Pachyderm", "Kubeflow", "Seldon", "BentoML", "Ray", "ClearML", "Truera", "Arize AI", "Fiddler", "WhyLabs"]),
                ("Vector Databases", vec!["Pinecone", "Weaviate", "Milvus", "Qdrant", "Chroma", "pgVector", "Redis Vector", "LanceDB", "Marqo", "Vespa", "Zilliz", "Tencent Vector", "MongoDB Atlas", "SingleStore", "Supabase"]),
            ]),
            ("Legal & Compliance", vec![
                ("Contract Management", vec!["Ironclad", "Conga", "DocuSign CLM", "Icertis", "Agiloft", "ContractWorks", "SpringCM", "PandaDoc", "Zoho Sign", "SignNow", "OneSpan", "Lexion", "LinkSquares", "Evisort", "Spotdraft"]),
                ("Compliance", vec!["Vanta", "Drata", "Secureframe", "Hyperproof", "LogicGate", "OneTrust", "StandardFusion", "SkillQualification", "Compyl", "Laika", "Tugboat Logic", "A-LIGN", "Coalfire", "Cure53", "Securicy"]),
                ("eDiscovery", vec!["Relativity", "Everlaw", "Logikcull", "Disco", "Reveal", "Brainspace", "Nuix", "OpenText", "Exterro", "Zapproved", "Nextpoint", "CloudCourt", "Everlaw", "Onna", "Disco"]),
            ]),
            ("Healthcare", vec![
                ("EHR", vec!["Epic", "Cerner", "Meditech", "Allscripts", "Athenahealth", "eClinicalWorks", "NextGen", "Practice Fusion", "DrChrono", "Kareo", "AdvancedMD", "CareCloud", "Greenway", "Chronicle", "PointClickCare"]),
                ("Telehealth", vec!["Doxy.me", "Teladoc", "Amwell", "MDLive", "MeMD", "Doctor on Demand", "HealthTap", "SnapMD", "VSee", "Chiron Health", "BlueSky", "TheraNest", "SimplePractice", "TherapyNotes", "Practice Better"]),
                ("Medical Devices", vec!["Philips Health", "GE Healthcare", "Siemens Healthineers", "Medtronic", "Abbott", "Roche", "Thermo Fisher", "Becton Dickinson", "Stryker", "Boston Scientific", "Zimmer Biomet", "Smith+Nephew", "Olympus", "Intuitive", "Edwards Lifesciences"]),
            ]),
            ("Education", vec![
                ("LMS", vec!["Canvas", "Blackboard", "D2L", "Moodle", "Schoology", "Brightspace", "Edmodo", "Google Classroom", "Apple Classroom", "Thinkific", "Teachable", "Kajabi", "Podia", "LearnWorlds", "Skillshare"]),
                ("Student Information", vec!["PowerSchool", "Infinite Campus", "Skyward", "Alma", "Illuminate", "Frontline", "Ellucian", "Workday Student", "Oracle Campus", "Jenzabar", "Banner", "PeopleSoft", "Colleague", "SCT", "Slate"]),
                ("Assessment", vec!["Turnitin", "Gradescope", "ExamSoft", "Proctorio", "ProctorU", "Honorlock", "Respondus", "TestReach", "Questionmark", "Crowdmark", "Edulastic", "ZipGrade", "AKINDO", "Mettl", "HackerRank"]),
            ]),
            ("Real Estate", vec![
                ("Property Management", vec!["AppFolio", "Buildium", "Yardi", "MRI Software", "RealPage", "Entrata", "ResMan", "Propertyware", "Rent Manager", "TenantCloud", "Avail", "Cozy.co", "Hemlane", "Rentec Direct", "LandlordStation"]),
                ("CRM", vec!["Follow Up Boss", "BossHub", "KVHub", "MoxiWorks", "SkySlope", "Dotloop", "DocuSign", "Lone Wolf", "Propertybase", "Realty Juggler", "Contactually", "Top Producer", "Wise Agent", "Market Leader", "REsurety"]),
                ("MLS", vec!["Bright MLS", "Stellar MLS", "California Regional MLS", "Miami MLS", "Houston MLS", "Northwest MLS", "REcolorado", "Northstar MLS", "Realcomp", "First MLS", "Arkansas MLS", "Georgia MLS", "New Jersey MLS", "Pennsylvania MLS", "Ohio MLS"]),
            ]),
            ("Manufacturing", vec![
                ("ERP", vec!["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Epicor", "Infor", "SYSPRO", "IQMS", "Global Shop", "ECi M1", "JobBOSS", "ProShop", "MRPeasy", "Odoo", "ERPNext", "xTuple"]),
                ("MES", vec!["Siemens Opcenter", "Rockwell Automation", "AVEVA", "GE Digital", "Parsec Trak", "Schneider Electric", "Honeywell", "Dassault", "SAP ME", "Oracle MES", "Plex", "Atefo", "Aegis", "Critical Manufacturing", "iBASEt"]),
                ("Quality Management", vec!["MasterControl", "ETQ", "Qualio", "Veeva Vault", "Greenlight Guru", "ComplianceQuest", "Intelex", "Sphera", "AssurX", "TrackWise", "QT9", "uniPoint", "EASE", "Pilgrim", "Ideagen"]),
            ]),
            ("Government", vec![
                ("Civic Tech", vec!["Granicus", "CivicPlus", "OpenGov", "Accela", "Tyler Technologies", "CentralSquare", "Superion", "New World Systems", "Harris Nova", "FIS", "PayIt", "OpenCounter", "SeamlessDocs", "CivicOptimize", "OpenDataSoft"]),
                ("Defense", vec!["Palantir", "Anduril", "Shield AI", "Rebellion Defense", "Govini", "BigBear.ai", "ManTech", "Booz Allen", "SAIC", "Leidos", "CACI", "General Dynamics", "Northrop Grumman", "Lockheed Martin", "Raytheon"]),
            ]),
        ];

        for &(cat_name, ref subcategories) in categories.iter() {
            for &(sub_name, ref integrations) in subcategories.iter() {
                for &integration_name in integrations.iter() {
                    id_counter += 1;
                    let id = format!("n0va1o.{:.30}", integration_name.to_lowercase().replace([' ', '/', '.', '-'], "_"));
                    let capabilities = generate_capabilities(cat_name, integration_name);
                    let auth_type = determine_auth_type(cat_name, integration_name);
                    let protocol = determine_protocol(integration_name);
                    let popularity = calculate_popularity(id_counter, integration_name);

                    entries.push(CatalogEntry {
                        id,
                        name: integration_name.to_string(),
                        category: cat_name.to_string(),
                        subcategory: sub_name.to_string(),
                        description: format!("{} integration with {} — {}", cat_name, integration_name, generate_description(cat_name, integration_name)),
                        auth_type,
                        capabilities,
                        status: if id_counter <= 15 { "available".to_string() } else if id_counter <= 100 { "beta".to_string() } else { "coming_soon".to_string() },
                        protocol,
                        popularity,
                        regions: vec!["global".to_string()],
                    });
                }
            }
        }

        entries
    }
}

fn generate_capabilities(category: &str, name: &str) -> Vec<String> {
    let base_caps = match category {
        "Social & Collaboration" => vec!["message_sync", "channel_sync", "user_sync"],
        "CRM & Sales" => vec!["contact_sync", "deal_tracking", "activity_logging"],
        "Developer Tools" => vec!["code_sync", "issue_tracking", "ci_notifications"],
        "Project Management" => vec!["task_sync", "project_updates", "milestone_tracking"],
        "Productivity" => vec!["document_sync", "calendar_sync", "file_sync"],
        "Finance & Payments" => vec!["payment_alerts", "invoice_sync", "transaction_tracking"],
        "E-commerce & Operations" => vec!["order_sync", "inventory_sync", "customer_sync"],
        "Marketing" => vec!["campaign_sync", "analytics_sync", "lead_tracking"],
        "HR & People" => vec!["employee_sync", "recruiting_sync", "performance_sync"],
        "IT & Infrastructure" => vec!["alert_routing", "incident_sync", "monitoring"],
        "Design & Creative" => vec!["asset_sync", "prototype_sync", "feedback_sync"],
        "Communication" => vec!["message_sync", "call_sync", "presence_sync"],
        "Data & Analytics" => vec!["data_sync", "report_sync", "dashboard_sync"],
        "AI & Machine Learning" => vec!["model_sync", "inference_sync", "training_sync"],
        "Legal & Compliance" => vec!["contract_sync", "compliance_sync", "ediscovery"],
        "Healthcare" => vec!["patient_sync", "appointment_sync", "record_sync"],
        "Education" => vec!["course_sync", "grade_sync", "student_sync"],
        "Real Estate" => vec!["property_sync", "listing_sync", "tenant_sync"],
        "Manufacturing" => vec!["production_sync", "quality_sync", "inventory_sync"],
        "Government" => vec!["civic_sync", "compliance_sync", "public_sync"],
        _ => vec!["sync"],
    };

    let mut caps: Vec<String> = base_caps.iter().map(|s| s.to_string()).collect();
    caps.push("webhook_support".to_string());
    caps.push("api_access".to_string());

    if name == "Slack" || name == "Discord" || name == "GitHub" {
        caps.push("bidirectional".to_string());
    }

    caps
}

fn determine_auth_type(category: &str, name: &str) -> String {
    match name {
        "Stripe" | "Shopify" | "Twilio" | "SendGrid" | "Postman" => "api_key".to_string(),
        _ => match category {
            "Finance & Payments" => "api_key".to_string(),
            _ => "oauth2".to_string(),
        }
    }
}

fn determine_protocol(name: &str) -> String {
    match name {
        "GitHub" | "GitLab" | "Stripe" | "Twilio" | "Slack" | "Discord" => "rest".to_string(),
        "Google Cloud" | "AWS" | "Azure" => "rest".to_string(),
        "Notion" | "Airtable" | "Linear" => "rest".to_string(),
        _ => "rest".to_string(),
    }
}

fn calculate_popularity(counter: u32, name: &str) -> u32 {
    let base_popularity = match name {
        "Slack" | "GitHub" | "Google Workspace" | "Microsoft Teams" | "Discord" => 100,
        "Jira" | "Notion" | "Zoom" | "Salesforce" | "HubSpot" => 95,
        "Stripe" | "Shopify" | "AWS" | "Figma" | "Trello" => 90,
        "Asana" | "GitLab" | "Linear" | "Twilio" | "Mailchimp" => 85,
        _ => 100 - (counter / 10).min(80),
    };
    base_popularity
}

fn generate_description(category: &str, name: &str) -> String {
    format!("Connect N0VA Chat with {} for seamless {} workflows", name, category.to_lowercase())
}

impl Default for ConnectorCatalog {
    fn default() -> Self {
        Self::new()
    }
}
