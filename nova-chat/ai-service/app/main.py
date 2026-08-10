from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import time

app = FastAPI(title="N0VA AI Service", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = None


class SmartReplyRequest(BaseModel):
    message: str
    context: Optional[List[str]] = []


class SmartReplyResponse(BaseModel):
    replies: List[str]
    model: str
    latency_ms: float


class SummarizeRequest(BaseModel):
    messages: List[str]
    max_length: Optional[int] = 100


class SummarizeResponse(BaseModel):
    summary: str
    model: str
    latency_ms: float


class EmbedRequest(BaseModel):
    texts: List[str]


class EmbedResponse(BaseModel):
    embeddings: List[List[float]]
    dimensions: int
    model: str
    latency_ms: float


class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
    version: str


def load_model():
    global model
    try:
        from sentence_transformers import SentenceTransformer
        model_name = "sentence-transformers/all-MiniLM-L6-v2"
        model = SentenceTransformer(model_name)
        print(f"Loaded model: {model_name}")
        return True
    except Exception as e:
        print(f"Could not load sentence-transformers: {e}")
        print("Running without ML model (fallback mode)")
        return False


@app.on_event("startup")
async def startup():
    load_model()


@app.get("/health", response_model=HealthResponse)
async def health():
    return HealthResponse(
        status="healthy",
        model_loaded=model is not None,
        version="0.1.0",
    )


@app.post("/smart-reply", response_model=SmartReplyResponse)
async def smart_reply(req: SmartReplyRequest):
    start = time.time()
    replies = generate_smart_replies(req.message, req.context)
    latency = (time.time() - start) * 1000
    return SmartReplyResponse(
        replies=replies,
        model="n0va-reply-v1",
        latency_ms=round(latency, 2),
    )


@app.post("/summarize", response_model=SummarizeResponse)
async def summarize(req: SummarizeRequest):
    start = time.time()
    summary = generate_summary(req.messages, req.max_length)
    latency = (time.time() - start) * 1000
    return SummarizeResponse(
        summary=summary,
        model="n0va-summarize-v1",
        latency_ms=round(latency, 2),
    )


@app.post("/embed", response_model=EmbedResponse)
async def embed(req: EmbedRequest):
    start = time.time()

    if model is not None:
        embeddings = model.encode(req.texts).tolist()
        dims = len(embeddings[0]) if embeddings else 0
    else:
        embeddings = [[0.0] * 384 for _ in req.texts]
        dims = 384

    latency = (time.time() - start) * 1000
    return EmbedResponse(
        embeddings=embeddings,
        dimensions=dims,
        model="all-MiniLM-L6-v2" if model else "fallback",
        latency_ms=round(latency, 2),
    )


@app.post("/sentiment")
async def sentiment(req: dict):
    text = req.get("text", "")
    score = analyze_sentiment(text)
    return {"sentiment": score, "label": sentiment_label(score)}


@app.post("/toxicity")
async def toxicity(req: dict):
    text = req.get("text", "")
    score = analyze_toxicity(text)
    return {"toxicity": score, "is_toxic": score > 0.7}


@app.post("/action-items")
async def action_items(req: dict):
    text = req.get("text", "")
    items = extract_action_items(text)
    return {"action_items": items}


def generate_smart_replies(message: str, context: List[str]) -> List[str]:
    msg_lower = message.lower()

    if "?" in message:
        return [
            "Great question! Let me look into that and get back to you.",
            "I'll check with the team and follow up shortly.",
            "That's a good point — let's discuss this in our next standup.",
        ]
    elif any(w in msg_lower for w in ["meeting", "schedule", "calendar"]):
        return [
            "I'll send out a calendar invite right away.",
            "Let me check everyone's availability and propose some times.",
            "Scheduled! I'll add it to the team calendar.",
        ]
    elif any(w in msg_lower for w in ["bug", "issue", "error", "broken"]):
        return [
            "I'll create a ticket and assign it to the team right now.",
            "Can you share more details? Steps to reproduce would help.",
            "Looking into this — I'll update the thread once I have more info.",
        ]
    elif any(w in msg_lower for w in ["deadline", "due", "urgent", "asap"]):
        return [
            "Understood — I'll prioritize this and update the timeline.",
            "Let me assess the impact and get back to you with a plan.",
            "I'll flag this for the team and we'll address it today.",
        ]
    elif any(w in msg_lower for w in ["thanks", "thank you", "great work", "awesome"]):
        return [
            "You're welcome! Great job on this one.",
            "Happy to help! Let me know if you need anything else.",
            "Team effort! Really proud of what we've accomplished.",
        ]
    else:
        return [
            "Got it — I'll take care of that.",
            "Thanks for the update! I'll follow up on this.",
            "Sounds good. Let me know if you need anything else.",
        ]


def generate_summary(messages: List[str], max_length: int) -> str:
    if not messages:
        return "No messages to summarize."

    total_msgs = len(messages)
    participants = set()

    for msg in messages[:20]:
        if ":" in msg:
            participants.add(msg.split(":", 1)[0].strip())

    summary = f"Discussion with {len(participants)} participant(s) across {total_msgs} message(s). "

    topics = []
    for msg in messages[:10]:
        msg_lower = msg.lower()
        if any(w in msg_lower for w in ["bug", "issue", "error"]):
            topics.append("bug reports")
        elif any(w in msg_lower for w in ["meeting", "schedule"]):
            topics.append("scheduling")
        elif any(w in msg_lower for w in ["design", "mockup", "ui"]):
            topics.append("design discussion")
        elif any(w in msg_lower for w in ["deploy", "release", "ship"]):
            topics.append("deployment")

    if topics:
        summary += f"Topics covered: {', '.join(set(topics))}."

    return summary[:max_length]


def analyze_sentiment(text: str) -> float:
    positive_words = ["good", "great", "excellent", "awesome", "amazing", "love", "happy", "thanks", "perfect", "wonderful"]
    negative_words = ["bad", "terrible", "awful", "hate", "angry", "frustrated", "disappointed", "broken", "wrong", "fail"]

    words = text.lower().split()
    pos_count = sum(1 for w in words if w in positive_words)
    neg_count = sum(1 for w in words if w in negative_words)
    total = pos_count + neg_count

    if total == 0:
        return 0.5
    return pos_count / total


def sentiment_label(score: float) -> str:
    if score > 0.6:
        return "positive"
    elif score < 0.4:
        return "negative"
    return "neutral"


def analyze_toxicity(text: str) -> float:
    toxic_words = ["stupid", "idiot", "hate", "dumb", "shut up", "ugly", "worst", "terrible", "pathetic"]
    words = text.lower().split()
    toxic_count = sum(1 for w in words if w in toxic_words)

    if not words:
        return 0.0
    return min(1.0, toxic_count / max(len(words) * 0.1, 1))


def extract_action_items(text: str) -> List[str]:
    items = []
    lines = text.split("\n")

    for line in lines:
        line_lower = line.lower().strip()
        if any(line_lower.startswith(w) for w in ["todo:", "action:", "- [ ]", "* [ ]", "task:"]):
            items.append(line.strip())
        elif any(w in line_lower for w in ["please", "need to", "should", "must", "assign", "follow up"]):
            if len(line.strip()) > 10:
                items.append(line.strip())

    return items[:5]


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
