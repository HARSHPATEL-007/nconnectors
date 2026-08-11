import uuid
import time
import hmac
import hashlib
import json
from typing import Dict, List, Optional, Any, Callable
from datetime import datetime
from enum import Enum

from ..models import WebhookEvent, WebhookTrigger, WebhookSubscription


class DeliveryStatus(str, Enum):
    PENDING = "pending"
    DELIVERED = "delivered"
    FAILED = "failed"
    RETRYING = "retrying"


class WebhookManager:
    def __init__(self):
        self._subscriptions: Dict[str, WebhookSubscription] = {}
        self._delivery_log: List[Dict[str, Any]] = []
        self._handlers: Dict[WebhookTrigger, List[Callable]] = {}
        self._max_retries = 5
        self._retry_delays = [1, 5, 15, 60, 300]

    def subscribe(self, subscription: WebhookSubscription):
        self._subscriptions[subscription.subscription_id] = subscription

    def unsubscribe(self, subscription_id: str):
        self._subscriptions.pop(subscription_id, None)

    def register_handler(self, event_type: WebhookTrigger, handler: Callable):
        if event_type not in self._handlers:
            self._handlers[event_type] = []
        self._handlers[event_type].append(handler)

    async def emit(
        self,
        trigger: WebhookTrigger,
        tenant_id: str,
        payload: Dict[str, Any],
        agent_id: str = None,
    ) -> List[WebhookEvent]:
        event_id = f"evt_{uuid.uuid4().hex[:16]}"
        timestamp = datetime.utcnow()

        event = WebhookEvent(
            event_id=event_id,
            trigger=trigger,
            tenant_id=tenant_id,
            agent_id=agent_id,
            payload=payload,
            timestamp=timestamp,
            signature=self._sign_payload(payload, tenant_id),
        )

        delivered_events = []
        for sub in self._subscriptions.values():
            if sub.tenant_id != tenant_id:
                continue
            if trigger not in sub.events:
                continue
            if not sub.active:
                continue

            delivery = await self._deliver(sub, event)
            delivered_events.append(delivery)

        handlers = self._handlers.get(trigger, [])
        for handler in handlers:
            try:
                await handler(event)
            except Exception as e:
                pass

        return delivered_events

    async def _deliver(self, subscription: WebhookSubscription, event: WebhookEvent) -> Dict[str, Any]:
        delivery_record = {
            "delivery_id": f"del_{uuid.uuid4().hex[:12]}",
            "subscription_id": subscription.subscription_id,
            "event_id": event.event_id,
            "url": subscription.url,
            "status": DeliveryStatus.PENDING,
            "attempts": 0,
            "last_attempt": None,
            "response_code": None,
        }

        for attempt in range(self._max_retries):
            delivery_record["attempts"] = attempt + 1
            delivery_record["last_attempt"] = datetime.utcnow().isoformat()

            try:
                success = await self._send_http(subscription.url, event, subscription.secret)
                if success:
                    delivery_record["status"] = DeliveryStatus.DELIVERED
                    event.delivered = True
                    break
                else:
                    delivery_record["status"] = DeliveryStatus.RETRYING
                    if attempt < self._max_retries - 1:
                        await self._sleep(self._retry_delays[attempt])
            except Exception as e:
                delivery_record["status"] = DeliveryStatus.FAILED
                delivery_record["error"] = str(e)

        if delivery_record["status"] != DeliveryStatus.DELIVERED:
            delivery_record["status"] = DeliveryStatus.FAILED

        self._delivery_log.append(delivery_record)
        return delivery_record

    async def _send_http(self, url: str, event: WebhookEvent, secret: str) -> bool:
        try:
            import httpx
            headers = {
                "Content-Type": "application/json",
                "X-N0VA1O-Signature": self._sign_payload(event.payload, secret),
                "X-N0VA1O-Event": event.trigger.value,
                "X-N0VA1O-Timestamp": str(int(time.time())),
            }
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.post(url, json=event.payload, headers=headers)
                return 200 <= response.status_code < 300
        except ImportError:
            return True
        except Exception:
            return False

    def _sign_payload(self, payload: Dict[str, Any], secret: str) -> str:
        payload_str = json.dumps(payload, sort_keys=True, default=str)
        signature = hmac.new(
            secret.encode(),
            payload_str.encode(),
            hashlib.sha256,
        ).hexdigest()
        return f"sha256={signature}"

    def verify_signature(self, payload: Dict[str, Any], signature: str, secret: str) -> bool:
        expected = self._sign_payload(payload, secret)
        return hmac.compare_digest(expected, signature)

    async def _sleep(self, seconds: int):
        try:
            import asyncio
            await asyncio.sleep(seconds)
        except:
            pass

    def get_subscriptions(self, tenant_id: str) -> List[WebhookSubscription]:
        return [s for s in self._subscriptions.values() if s.tenant_id == tenant_id]

    def get_delivery_log(self, limit: int = 100) -> List[Dict[str, Any]]:
        return self._delivery_log[-limit:]

    def get_stats(self) -> Dict[str, Any]:
        total = len(self._delivery_log)
        delivered = sum(1 for d in self._delivery_log if d["status"] == DeliveryStatus.DELIVERED)
        failed = sum(1 for d in self._delivery_log if d["status"] == DeliveryStatus.FAILED)

        return {
            "total_deliveries": total,
            "delivered": delivered,
            "failed": failed,
            "success_rate": delivered / max(total, 1),
            "active_subscriptions": sum(1 for s in self._subscriptions.values() if s.active),
        }
