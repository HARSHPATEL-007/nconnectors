# N0VA1O Infinite Integration Gateway

> One Gateway. Infinite Possibilities.

N0VA1O is the unified nervous system of the N0VA Workspace ecosystem. It collapses the N×M integration problem down to 1, enabling framework-agnostic AI agents to securely connect to 1,000+ third-party applications.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   N0VA1O INTEGRATION GATEWAY                │
├─────────────────────────────────────────────────────────────┤
│  AI Agents → MCP Mesh (stdio/HTTP-SSE/WebSocket) → Gateway  │
│  Gateway → Protocol Translator → Zero-Trust Auth → 1000+ Apps│
│  Gateway → Intent Router → Tool Discovery → Sandbox Exec    │
│  Gateway → Schema Modifiers → HITL Escalation → Audit Log   │
└─────────────────────────────────────────────────────────────┘
```

## Quick Start

### Backend (Rust)

```bash
cd nova-chat/backend
cargo run
```

The gateway starts on `http://localhost:8080` with:
- **MCP SSE**: `GET http://localhost:8080/v1/n0va1o/mcp/sse`
- **MCP Messages**: `POST http://localhost:8080/v1/n0va1o/mcp/message`
- **REST API**: `http://localhost:8080/v1/n0va1o/*`

### Frontend (Next.js)

```bash
cd ../
npm install
npm run dev
```

Dashboard available at `http://localhost:3000`

### Python SDK

```python
from n0va1o import N0VA1OClient, AgentConfig

client = N0VA1OClient(api_key="n0va_sk_...", tenant_id="tenant_001")
agent = client.agents.register(AgentConfig(
    name="Finance Agent",
    permissions={"storage": ["read"], "sheets": ["write"], "slack": ["post"]},
    autonomy_level="high",
    sandbox_enabled=True,
))

tools = client.tools.discover("Find Q3 invoices and upload to sheets")
session = client.sessions.create(agent.agent_id)
recipe = client.recipes.compile(session.session_id, "Monthly_Invoice_Sync")
```

### CLI

```bash
pip install n0va1o
n0va1o auth login --tenant tenant_001 --method sso
n0va1o agents create --name "Finance Agent" --autonomy high --sandbox
n0va1o tools discover --query "Find invoices and upload to sheets"
n0va1o sessions start --agent agent_001 --transport websocket
n0va1o audit trail --agent agent_001 --limit 50
```

## API Reference

### Agent Registration
`POST /v1/n0va1o/agents/register`

### Tool Discovery
`POST /v1/n0va1o/tools/discover`

### Session Management
- `POST /v1/n0va1o/sessions/create`
- `GET /v1/n0va1o/sessions`
- `POST /v1/n0va1o/sessions/{id}/suspend`
- `POST /v1/n0va1o/sessions/{id}/resume`

### Audit Trail
- `GET /v1/n0va1o/audit?limit=50`
- `GET /v1/n0va1o/audit/pending`

### Escalations (HITL)
- `GET /v1/n0va1o/escalations`
- `GET /v1/n0va1o/escalations/pending`
- `POST /v1/n0va1o/escalations/{id}/approve`
- `POST /v1/n0va1o/escalations/{id}/reject`

### Metrics
- `GET /v1/n0va1o/metrics/dashboard`

## Project Structure

```
nova-chat/
├── backend/          # Rust gateway (actix-web)
│   └── src/
│       ├── n0va1o/           # Core N0VA1O modules
│       │   ├── mcp/          # MCP protocol + server
│       │   ├── agents/       # Agent registration
│       │   ├── sessions/     # Session management
│       │   ├── audit/        # Audit logging
│       │   ├── schema/       # Schema modifiers
│       │   ├── intent/       # Intent classification
│       │   ├── catalog/      # 1100+ integrations
│       │   ├── adapters/     # Protocol adapters
│       │   ├── auth/         # OAuth + tokens
│       │   ├── templates/    # Connector/recipe templates
│       │   └── connectors/   # Platform connectors
│       └── handlers/n0va1o/  # REST API handlers
├── frontend/         # Next.js dashboard
│   └── src/
│       ├── app/              # Pages
│       ├── components/agents/ # Interrogation Room
│       └── lib/api/          # API client
└── sdk/
    ├── python/       # pip install n0va1o
    └── typescript/   # npm install @n0va1o/sdk
```

## Security

- Zero-trust agent authentication (OAuth 2.1 + OIDC)
- AES-256-GCM envelope encryption for tokens
- Schema modifiers for pre-LLM redaction
- Human-in-the-loop escalation for high-risk actions
- Immutable audit trail with cryptographic integrity

## License

N0VA Transcendent Edition v2026.07
