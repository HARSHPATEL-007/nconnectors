class N0VA1OError(Exception):
    """Base exception for N0VA1O SDK errors"""
    pass


class AuthenticationError(N0VA1OError):
    """Raised when authentication fails (invalid API key, expired token)"""
    pass


class RateLimitError(N0VA1OError):
    """Raised when rate limit is exceeded"""
    pass


class HITLRequiredError(N0VA1OError):
    """Raised when a human-in-the-loop approval is required"""
    def __init__(self, message: str, room_id: str = None, review_url: str = None):
        super().__init__(message)
        self.room_id = room_id
        self.review_url = review_url


class SandboxError(N0VA1OError):
    """Raised when sandbox execution fails"""
    pass


class ConnectionError(N0VA1OError):
    """Raised when platform connection fails"""
    pass


class SchemaDriftError(N0VA1OError):
    """Raised when API schema drift is detected"""
    def __init__(self, message: str, provider: str = None, changes: dict = None):
        super().__init__(message)
        self.provider = provider
        self.changes = changes or {}
