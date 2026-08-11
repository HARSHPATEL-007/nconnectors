import type { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            agent?: {
                id: string;
                tenantId: string;
                name: string;
                apiKey: string;
            };
        }
    }
}
export declare function authenticateAgent(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function rateLimit(maxRequests?: number, windowMs?: number): (req: Request, res: Response, next: NextFunction) => void;
export declare function requestLogger(req: Request, res: Response, next: NextFunction): void;
export declare function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=middleware.d.ts.map