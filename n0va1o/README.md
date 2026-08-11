# N0VA1O — Infinite Integration Gateway

**Transcendent Edition v2026.07**

> One Gateway. Infinite Possibilities.

N0VA1O collapses the N×M integration problem down to 1. A unified gateway enabling framework-agnostic AI agents to securely connect to 1,000+ third-party applications.

## Architecture

```
AI Agents (Claude, Codex, Custom)
       │
       ▼
┌─────────────────────────────────┐
│      MCP Mesh Layer             │
│  stdio │ HTTP SSE │ WebSocket   │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│    N0VA1O Gateway Core          │
│  Protocol Translator            │
│  Zero-Trust Auth (AES-256-GCM) │
│  Intent Router (Vector Store)   │
│  Recipe Compiler (Pydantic)     │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Ephemeral Execution Layer     │
│  Firecracker MicroVM Sandboxes  │
│  Virtual Filesystem (/workspace)│
│  Large Payload Offloading       │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│    1,000+ Platform Connections  │
│  Meta Ads │ Google │ Salesforce │
│  Slack │ GitHub │ Shopify │ ... │
└─────────────────────────────────┘
```

## Quick Start

### Docker (Recommended)

```bash
cd n0va1o
docker-compose up -d
```

- Gateway API: http://localhost:8000
- Dashboard: http://localhost:3000
- Health: http://localhost:8000/health

### Backend Only

```bash
cd n0va1o/backend
pip install -r requirements.txt
python -m src.main
```

### Frontend Only

```bash
cd n0va1o/frontend
npm install
npm run dev
```

## Python SDK

```python
import asyncio
from n0va1o import N0VA1OClient, AgentConfig, SandboxConfig

async def main():
    client = N0VA1OClient(
        api_key="n0va_sk_...",
        tenant_id="tenant_001",
        transport="websocket"
    )

    # Register an agent
    agent = await client.agents.register(AgentConfig(
        name="Finance Automation",
        autonomy_level="high",
        permissions=[
            {"resource": "storage", "actions": ["read", "write"]},
            {"resource": "sheets", "actions": ["read", "write"]},
        ]
    ))

    # Discover tools by intent
    tools = await client.tools.discover(
        query="Find Q3 invoices and upload to sheets",
        agent_id=agent["agent_id"]
    )
    print(f"Intent: {tools.intent} (confidence: {tools.confidence})")
    for tool in tools.tools:
        print(f"  - {tool['name']} ({tool['relevance']*100:.0f}%)")

    # Create a session
    session = await client.sessions.create(
        agent_id=agent["agent_id"],
        tools=[t["name"] for t in tools.tools]
    )

    # Execute sandboxed code
    result = await client.sandbox.execute(
        session_id=session["session_id"],
        code="import pandas as pd; print('Hello from sandbox!')"
    )

    # Compile a recipe
    recipe = await client.recipes.compile(
        session_id=session["session_id"],
        name="Q3_Invoice_Sync",
        schedule="0 9 1 * *"
    )

    # Execute compiled recipe (bypasses LLM)
    run = await client.recipes.execute(recipe["recipe_id"])
    print(f"Recipe executed in {run['latency_ms']}ms")

    await client.close()

asyncio.run(main())
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Gateway health check |
| POST | `/v1/ai/agents/register` | Register a new agent |
| GET | `/v1/ai/agents` | List agents |
| POST | `/v1/ai/sessions/create` | Create agent session |
| POST | `/v1/ai/tools/discover` | Intent-based tool discovery |
| GET | `/v1/ai/tools/catalog` | Browse tool catalog |
| POST | `/v1/ai/recipes/compile` | Compile workflow to recipe |
| POST | `/v1/ai/recipes/{id}/execute` | Execute compiled recipe |
| POST | `/v1/ai/sandbox/execute` | Execute code in sandbox |
| GET | `/v1/ai/connections` | List platform connections |
| POST | `/v1/ai/connections/{id}/switch` | Switch active account |
| GET | `/v1/ai/audit/trail` | Query audit trail |
| GET | `/v1/ai/metrics` | Gateway metrics |
| WS | `/ws/sessions/{id}` | WebSocket session |

## Core Capabilities

### Just-In-Time Authentication
Dynamic OAuth provisioning based on intent. Model never sees credentials. AES-256-GCM envelope encryption with automatic token rotation.

### Ephemeral Sandboxes
Isolated MicroVM execution for custom scripts. Python 3.12 + Bash v5.2 with CPU/RAM quotas. Memory wiped before deallocation.

### Intent-Driven Routing
Vector store + MCP dynamic discovery. Only 3-4 relevant tools injected into context window from 500+ available actions.

### Recipe Compilation
Serializes successful multi-app agent paths into deterministic Pydantic schemas. Bypasses LLM inference for <100ms p99 execution.

### Human-in-the-Loop
Interrogation rooms for high-risk actions. Digital signature approval. State machine suspension with full reasoning chain preservation.

### 8-Slot Plugin System
Auth Optimizer, Schema Drift Detector, Rate Limit Predictor, Error Classifier, Payload Compressor, Route Optimizer, Security Hardening, Cost Optimizer.

## Security

- **Encryption**: AES-256-GCM envelope, TLS 1.3 + Post-Quantum Hybrid (X25519Kyber768)
- **Auth**: OAuth 2.1 / OIDC, RBAC + ABAC + PBAC + ReBAC
- **Audit**: SHA3-512 integrity, Merkle tree, blockchain anchoring
- **Compliance**: GDPR, CCPA, SOC 2 Type II, ISO 27001, HIPAA, FedRAMP

## Project Structure

```
n0va1o/
├── backend/              # FastAPI gateway server
│   └── src/
│       ├── gateway/      # Main server + WebSocket
│       ├── auth/         # JWT + OAuth management
│       ├── tools/        # Registry + intent router
│       ├── sandbox/      # Ephemeral execution
│       ├── recipes/      # Workflow compiler
│       ├── audit/        # Immutable audit chain
│       ├── hitl/         # Interrogation rooms
│       ├── webhooks/     # Bidirectional triggers
│       ├── plugins/      # 8-slot plugin engine
│       ├── protocols/    # Protocol translation
│       └── models/       # Pydantic schemas
├── frontend/             # React dashboard
│   └── src/
│       ├── pages/        # Dashboard, Agents, Tools, etc.
│       ├── components/   # Layout, shared components
│       └── styles/       # CSS modules
├── sdk/
│   ├── python/           # pip install n0va1o
│   └── typescript/       # npm install @n0va1o/sdk
└── docker/               # Container orchestration
```

## License

N0VA Workspace — Transcendent Edition. All rights reserved.
