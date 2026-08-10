# N0VA FOR CHAT — Project Nexus Transcendent

> Hyper-Scale Team Messaging — Core Communication Module of the N0VA Workspace

A full-stack, real-time enterprise chat application built with Rust, Next.js, Python AI, MongoDB, and Redis.

---

## Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Next.js   │────▶│    Nginx    │────▶│  Rust API   │
│  Frontend   │     │   (port 80) │     │  (port 8080)│
│ (port 3000) │     └─────────────┘     └──────┬──────┘
└─────────────┘                                │
                                               ▼
                                    ┌─────────────────────┐
                                    │  MongoDB  │  Redis   │
                                    │ (port     │ (port    │
                                    │  27017)   │  6379)   │
                                    └─────────────────────┘
                                               │
                                               ▼
                                    ┌─────────────────────┐
                                    │   Python AI Service │
                                    │   (port 8000)       │
                                    │  Smart Reply, Sum,  │
                                    │  Embeddings, Search │
                                    └─────────────────────┘
```

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Backend** | Rust + Actix-web | REST API + WebSocket server |
| **Frontend** | Next.js 14 + Tailwind | Chat UI, real-time updates |
| **AI** | Python + FastAPI | Smart reply, summarization, embeddings |
| **Database** | MongoDB 7 | Messages, rooms, users, presence |
| **Cache** | Redis 7 | Sessions, presence, pub/sub |
| **Proxy** | Nginx | Reverse proxy, WebSocket upgrade |

---

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Or: Rust 1.75+, Node.js 20+, Python 3.11+, MongoDB, Redis

### Docker (Recommended)

```bash
cd nova-chat
docker-compose up --build
```

Access:
- **Frontend**: http://localhost (or http://localhost:3000)
- **API**: http://localhost:8080
- **AI Service**: http://localhost:8000/health

### Manual Development

**1. Start Infrastructure:**
```bash
docker-compose up mongodb redis
```

**2. Start Backend:**
```bash
cd backend
DATABASE_URL=mongodb://nova:nova_password_2026@localhost:27017/nova_chat?authSource=admin \
REDIS_URL=redis://:nova_redis_2026@localhost:6379 \
JWT_SECRET=dev_secret \
cargo run
```

**3. Start AI Service:**
```bash
cd ai-service
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**4. Start Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## Features Implemented

### Core Messaging
- [x] Real-time WebSocket messaging
- [x] Public & private channels
- [x] Direct messages
- [x] Message editing & deletion
- [x] Emoji reactions
- [x] Thread replies
- [x] Typing indicators
- [x] User presence (online/away/busy/DND)

### AI Integration
- [x] Smart reply suggestions
- [x] Thread summarization
- [x] Sentiment analysis
- [x] Toxicity detection
- [x] Action item extraction
- [x] Text embeddings (sentence-transformers)

### Infrastructure
- [x] JWT authentication
- [x] Password hashing (bcrypt)
- [x] MongoDB indexes (text search, room queries)
- [x] Redis connection management
- [x] Docker Compose orchestration
- [x] Nginx reverse proxy with WebSocket support

---

## API Reference

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/v1/auth/register` | Create account |
| POST | `/v1/auth/login` | Sign in, get JWT |

### Rooms
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/rooms` | List user's rooms |
| POST | `/v1/rooms` | Create room |
| GET | `/v1/rooms/{id}` | Room details |
| PATCH | `/v1/rooms/{id}` | Update room |
| GET | `/v1/rooms/{id}/messages` | Room messages (paginated) |
| POST | `/v1/rooms/{id}/join` | Join room |
| POST | `/v1/rooms/{id}/leave` | Leave room |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/messages/{id}` | Get message |
| PATCH | `/v1/messages/{id}` | Edit message |
| DELETE | `/v1/messages/{id}` | Delete message |
| POST | `/v1/messages/{id}/reactions` | Add reaction |
| GET | `/v1/messages/{id}/thread` | Get thread replies |
| POST | `/v1/messages/{id}/thread` | Reply in thread |

### Search
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/search/messages?q=query` | Full-text search |

### WebSocket Events
| Direction | Event | Description |
|-----------|-------|-------------|
| C→S | `message.send` | Send message |
| S→C | `message.new` | New message received |
| C→S | `typing.start` | Start typing |
| C→S | `typing.stop` | Stop typing |
| S→C | `typing.active` | User is typing |
| C→S | `presence.update` | Update status |
| S→C | `presence.change` | Status changed |

---

## Project Structure

```
nova-chat/
├── backend/              # Rust Actix-web API
│   ├── src/
│   │   ├── handlers/     # REST endpoints
│   │   │   ├── auth.rs
│   │   │   ├── rooms.rs
│   │   │   ├── messages.rs
│   │   │   ├── users.rs
│   │   │   └── search.rs
│   │   ├── ws/           # WebSocket engine
│   │   │   ├── handler.rs
│   │   │   └── state.rs
│   │   ├── models/       # Data structures
│   │   ├── middleware/   # Auth middleware
│   │   ├── utils/        # JWT, pagination
│   │   ├── config.rs
│   │   ├── db.rs
│   │   └── main.rs
│   ├── Cargo.toml
│   └── Dockerfile
├── frontend/             # Next.js app
│   ├── app/              # Routes
│   ├── components/       # React components
│   ├── lib/              # Store, API client
│   ├── package.json
│   └── Dockerfile
├── ai-service/           # Python FastAPI AI
│   ├── app/
│   │   └── main.py       # Smart reply, summarize, embed
│   ├── requirements.txt
│   └── Dockerfile
├── nginx/
│   └── nginx.conf
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## Roadmap (from VISI.md)

### Phase 1 — MVP ✅
- Real-time messaging
- Channels & DMs
- Presence & typing
- Basic AI integration

### Phase 2 — Growth
- Huddles (audio/video via WebRTC)
- File attachments
- Rich link previews
- Advanced search (semantic)
- Bot framework

### Phase 3 — Enterprise
- Federation (cross-tenant)
- E2E encryption
- Compliance (DLP, eDiscovery)
- Admin console
- Analytics dashboard

### Phase 4 — Transcendent
- BCI integration layer
- Post-quantum cryptography
- Neural interface preparation
- Custom silicon acceleration

---

## License

N0VA Proprietary — Build-Only, No-Partner, No-External-Dependency Core
