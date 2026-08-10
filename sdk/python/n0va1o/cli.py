"""
N0VA1O Universal CLI
Usage:
    n0va1o auth login --tenant tenant_001 --method sso
    n0va1o agents create --name "Finance Agent" --type workflow_orchestrator --permissions "storage.read,sheets.write,slack.post" --autonomy high --sandbox
    n0va1o tools discover --agent agent_001 --query "Find invoices and upload to sheets" --max-tools 5
    n0va1o sessions start --agent agent_001 --transport websocket --sandbox-cpu 2 --sandbox-ram 4096
    n0va1o recipes compile --session sess_abc123 --name "Monthly_Invoice_Sync" --schedule "0 9 1 * *" --watch
    n0va1o recipes execute rec_001 --params '{"month": "2026-07"}'
    n0va1o monitor --agent agent_001 --follow
    n0va1o logs --session sess_abc123 --tail 100
    n0va1o audit trail --agent agent_001 --since 2026-07-01
    n0va1o security scan --agent agent_001
"""

import argparse
import json
import os
import sys
from typing import Optional

from n0va1o import N0VA1OClient, N0VA1OConfig, AgentConfig


CONFIG_DIR = os.path.expanduser("~/.n0va1o")
CONFIG_FILE = os.path.join(CONFIG_DIR, "config.json")


def load_config() -> dict:
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE) as f:
            return json.load(f)
    return {}


def save_config(config: dict):
    os.makedirs(CONFIG_DIR, exist_ok=True)
    with open(CONFIG_FILE, "w") as f:
        json.dump(config, f, indent=2)


def get_client() -> N0VA1OClient:
    config = load_config()
    api_key = config.get("api_key") or os.environ.get("N0VA1O_API_KEY")
    if not api_key:
        print("Error: Not authenticated. Run 'n0va1o auth login' first.")
        sys.exit(1)
    return N0VA1OClient(N0VA1OConfig(
        api_key=api_key,
        tenant_id=config.get("tenant_id", "default"),
        endpoint=config.get("endpoint", "https://n0va1o.io"),
    ))


def cmd_auth(args):
    """Authenticate with N0VA1O gateway."""
    config = load_config()
    config["tenant_id"] = getattr(args, "tenant", "default")
    config["endpoint"] = getattr(args, "endpoint", "https://n0va1o.io")

    if args.method == "sso":
        print(f"Opening SSO login for tenant: {config['tenant_id']}")
        print("Please authenticate in your browser and paste the API key:")
        api_key = input("API Key: ").strip()
        config["api_key"] = api_key
    elif args.method == "api-key":
        api_key = input("Enter your API key: ").strip()
        config["api_key"] = api_key

    save_config(config)
    print(f"Authenticated successfully. Config saved to {CONFIG_FILE}")


def cmd_agents(args):
    """Manage agents."""
    client = get_client()

    if args.action == "create":
        permissions = {}
        if args.permissions:
            for perm in args.permissions.split(","):
                parts = perm.strip().split(".", 1)
                if len(parts) == 2:
                    permissions.setdefault(parts[0], []).append(parts[1])
                else:
                    permissions.setdefault(parts[0], []).append("*")

        config = AgentConfig(
            name=args.name,
            type=args.type,
            permissions=permissions,
            autonomy_level=args.autonomy,
            sandbox_enabled=args.sandbox,
        )
        agent = client.agents.register(config)
        print(f"Agent registered successfully:")
        print(f"  ID:     {agent.agent_id}")
        print(f"  Name:   {agent.name}")
        print(f"  Status: {agent.status}")
        print(f"  API Key: {agent.api_key}")
        print(f"\nSave this API key — it won't be shown again!")

    elif args.action == "list":
        print("Agents: (use API directly for listing)")

    elif args.action == "toggle":
        print(f"Toggling agent: {args.agent_id}")


def cmd_tools(args):
    """Discover tools by intent."""
    client = get_client()
    result = client.tools.discover(query=args.query, max_tools=args.max_tools)
    print(f"Intent: {result.intent} (confidence: {result.confidence})")
    print(f"Workflow: {result.suggested_workflow}")
    print(f"\nTools found ({len(result.tools)}):")
    for tool in result.tools:
        print(f"  • {tool.name} (relevance: {tool.relevance}, latency: {tool.estimated_latency_ms}ms)")
        print(f"    {tool.reason}")


def cmd_sessions(args):
    """Manage sessions."""
    client = get_client()

    if args.action == "start":
        session = client.sessions.create(
            agent_id=args.agent,
            tools=args.tools.split(",") if args.tools else None,
        )
        print(f"Session created:")
        print(f"  ID:      {session.session_id}")
        print(f"  WS URL:  {session.websocket_url}")
        print(f"  Expires: {session.expires_at}")
        print(f"  Tools:   {session.tools_injected}")

    elif args.action == "execute":
        result = client.sessions.execute(args.session_id, args.instruction)
        print(json.dumps(result, indent=2))


def cmd_recipes(args):
    """Manage recipes."""
    client = get_client()

    if args.action == "compile":
        recipe = client.recipes.compile(
            session_id=args.session,
            name=args.name,
            description=args.description or "",
            schedule=args.schedule,
        )
        print(f"Recipe compiled:")
        print(f"  ID:       {recipe.recipe_id}")
        print(f"  Endpoint: {recipe.execution_endpoint}")
        print(f"  Latency:  {recipe.estimated_latency_ms}ms")

    elif args.action == "execute":
        result = client.recipes.execute(args.recipe_id)
        print(json.dumps(result, indent=2))


def cmd_monitor(args):
    """Monitor agents and sessions."""
    client = get_client()
    print(f"Monitoring agent: {args.agent}")
    print("(Press Ctrl+C to stop)")


def cmd_audit(args):
    """View audit trail."""
    client = get_client()
    entries = client.audit.query(limit=args.limit, since=args.since)
    print(json.dumps(entries, indent=2))


def cmd_security(args):
    """Run security scan."""
    client = get_client()
    escalations = client.escalations.list(status="pending")
    print(f"Pending escalations: {len(escalations)}")
    for esc in escalations:
        print(f"  • {esc.get('id')} [{esc.get('risk_level')}] {esc.get('action', {}).get('tool_name', '')}")


def main():
    parser = argparse.ArgumentParser(prog="n0va1o", description="N0VA1O Universal CLI")
    subparsers = parser.add_subparsers(dest="command", help="Command")

    # auth
    auth_parser = subparsers.add_parser("auth", help="Authentication")
    auth_parser.add_argument("method", choices=["sso", "api-key"], help="Auth method")
    auth_parser.add_argument("--tenant", default="default", help="Tenant ID")
    auth_parser.add_argument("--endpoint", default="https://n0va1o.io", help="Gateway URL")

    # agents
    agents_parser = subparsers.add_parser("agents", help="Agent management")
    agents_parser.add_argument("action", choices=["create", "list", "toggle"], help="Action")
    agents_parser.add_argument("--name", help="Agent name")
    agents_parser.add_argument("--type", default="workflow_orchestrator", help="Agent type")
    agents_parser.add_argument("--permissions", help="Permissions (comma-separated, format: resource.action)")
    agents_parser.add_argument("--autonomy", default="medium", choices=["low", "medium", "high"], help="Autonomy level")
    agents_parser.add_argument("--sandbox", action="store_true", help="Enable sandbox")
    agents_parser.add_argument("--agent-id", help="Agent ID for toggle")

    # tools
    tools_parser = subparsers.add_parser("tools", help="Tool discovery")
    tools_parser.add_argument("action", choices=["discover"], help="Action")
    tools_parser.add_argument("--query", required=True, help="Search query")
    tools_parser.add_argument("--max-tools", type=int, default=5, help="Max tools to return")

    # sessions
    sessions_parser = subparsers.add_parser("sessions", help="Session management")
    sessions_parser.add_argument("action", choices=["start", "execute"], help="Action")
    sessions_parser.add_argument("--agent", help="Agent ID")
    sessions_parser.add_argument("--session-id", help="Session ID")
    sessions_parser.add_argument("--tools", help="Tools (comma-separated)")
    sessions_parser.add_argument("--instruction", help="Instruction to execute")

    # recipes
    recipes_parser = subparsers.add_parser("recipes", help="Recipe management")
    recipes_parser.add_argument("action", choices=["compile", "execute"], help="Action")
    recipes_parser.add_argument("--session", help="Session ID")
    recipes_parser.add_argument("--name", help="Recipe name")
    recipes_parser.add_argument("--description", help="Recipe description")
    recipes_parser.add_argument("--schedule", help="Cron schedule")
    recipes_parser.add_argument("--recipe-id", help="Recipe ID")

    # monitor
    monitor_parser = subparsers.add_parser("monitor", help="Monitor agents")
    monitor_parser.add_argument("--agent", help="Agent ID")
    monitor_parser.add_argument("--follow", action="store_true", help="Follow mode")

    # audit
    audit_parser = subparsers.add_parser("audit", help="Audit trail")
    audit_parser.add_argument("action", choices=["trail"], help="Action")
    audit_parser.add_argument("--agent", help="Agent ID")
    audit_parser.add_argument("--since", help="Since date")
    audit_parser.add_argument("--limit", type=int, default=50, help="Max entries")

    # security
    security_parser = subparsers.add_parser("security", help="Security operations")
    security_parser.add_argument("action", choices=["scan"], help="Action")
    security_parser.add_argument("--agent", help="Agent ID")

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(1)

    commands = {
        "auth": cmd_auth,
        "agents": cmd_agents,
        "tools": cmd_tools,
        "sessions": cmd_sessions,
        "recipes": cmd_recipes,
        "monitor": cmd_monitor,
        "audit": cmd_audit,
        "security": cmd_security,
    }

    commands[args.command](args)


if __name__ == "__main__":
    main()
