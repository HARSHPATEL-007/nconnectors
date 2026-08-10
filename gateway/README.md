# N0VA1O — Infinite Integration Gateway

**Transcendent Edition v2026.07**

N0VA1O collapses the N×M integration problem down to 1. Connect AI agents to 1,000+ third-party applications through a single unified gateway.

## Quick Start

```bash
# Start infrastructure
docker-compose up -d postgres redis

# Apply database schema
cd gateway
npx prisma db push

# Seed data & start server
npm run dev

# Frontend (separate terminal)
cd ..
npm run dev
```

Gateway: http://localhost:3001 | Dashboard: http://localhost:3000

## Architecture

```
Frontend (Next.js) → API Client → Gateway (Express) → PostgreSQL
                                      │
                                      ├── Redis (caching)
                                      ├── WebSocket MCP
                                      ├── Background jobs
                                      └── OAuth2 + Connectors
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/v1/ai/agents/register` | Register AI agents |
| `POST` | `/v1/ai/sessions/create` | Create sessions |
| `POST` | `/v1/ai/sessions/:id/execute` | Execute tool calls |
| `POST` | `/v1/ai/tools/discover` | Intent-based discovery |
| `POST` | `/v1/ai/recipes/compile` | Compile workflows |
| `GET` | `/v1/ai/audit` | Audit trail |
| `GET` | `/v1/ai/escalations` | HITL escalations |
| `POST` | `/v1/auth/:provider` | OAuth2 initiation |
| `POST` | `/v1/webhooks/:provider` | Webhook ingestion |
| `GET` | `/health` | Health check |
| `GET` | `/metrics` | Platform metrics |
| `WS` | `/v1/mcp/ws` | MCP WebSocket |

## Python SDK

```python
from n0va1o import N0VA1OClient, AgentConfig, SandboxConfig

client = N0VA1OClient({
    "api_key": "n0va1o_sk_...",
    "tenant_id": "tenant_001",
    "endpoint": "https://n0va1o.io"
})

# Register agent
agent = client.agents.register(AgentConfig(
    name="Finance Agent",
    type="workflow_orchestrator",
    permissions=["storage.read", "sheets.write", "slack.post"],
    autonomy_level="high",
    sandbox_enabled=True
))

# Discover tools
tools = client.tools.discover("Find Q3 invoices and upload to sheets")
print(f"Found {len(tools.tools)} tools: {tools.suggested_workflow}")

# Create session & execute
session = client.sessions.create(agent_id=agent.agent_id)
result = session.execute("Find invoices, convert to CSV, upload to sheets")

# Compile to recipe (bypasses LLM)
recipe = client.recipes.compile(session_id=session.session_id, name="Q3_Invoice_Sync")
result = client.recipes.execute(recipe.recipe_id)
```

## CLI

```bash
pip install n0va1o

n0va1o auth login --tenant tenant_001 --method sso
n0va1o agents create --name "Finance Agent" --type workflow_orchestrator --permissions "storage.read,sheets.write" --autonomy high --sandbox
n0va1o tools discover --query "Find invoices and upload to sheets" --max-tools 5
n0va1o sessions start --agent agent_001 --transport websocket
n0va1o recipes compile --session sess_abc123 --name "Monthly_Invoice_Sync" --schedule "0 9 1 * *"
n0va1o monitor --agent agent_001 --follow
n0va1o audit trail --agent agent_001 --since 2026-07-01
```

## Deployment

### Docker Compose
```bash
docker-compose up -d
```

### Kubernetes
```bash
kubectl apply -f deploy/kubernetes/
```

## Features

- **Zero-Trust Auth**: AES-256-GCM envelope encryption, API keys, OAuth2
- **Intent-Based Routing**: Vector search + dynamic tool discovery
- **HITL Escalation**: Risk assessment with interrogation rooms
- **Audit Trail**: SHA3-512 hashing + Merkle tree integrity
- **Self-Improving**: 8-slot plugin system (auth optimizer, drift detector, etc.)
- **Protocol Translation**: REST↔SOAP↔GraphQL↔gRPC
- **Background Jobs**: Token rotation, escalation timeouts, session cleanup
- **Observability**: Health checks, metrics, structured logging

## Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis (ioredis)
- **Frontend**: Next.js + React + Tailwind + Zustand
- **SDK**: Python (stdlib only, no deps)
- **Protocols**: HTTP SSE, WebSocket, JSON-RPC 2.0

## License

N0VA Workspace Core Integration Module v2026.07
