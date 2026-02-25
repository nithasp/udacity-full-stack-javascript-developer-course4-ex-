import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'default-secret-for-dev';

/**
 * Middleware that verifies the Bearer access token.
 *
 * Returns distinct error codes so the frontend interceptor can decide
 * whether to attempt a token refresh or redirect to login:
 *
 *  - `no_token`       → no Authorization header at all
 *  - `token_expired`  → JWT signature is valid but the token has expired
 *  - `token_invalid`  → JWT is malformed or the signature doesn't match
 */
export const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({
        error: 'Access denied. No token provided.',
        code: 'no_token',
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, TOKEN_SECRET);
    next();
  } catch (err) {
    const jwtErr = err as { name?: string };

    if (jwtErr.name === 'TokenExpiredError') {
      res.status(401).json({
        error: 'Access token has expired.',
        code: 'token_expired',
      });
    } else {
      res.status(401).json({
        error: 'Invalid token.',
        code: 'token_invalid',
      });
    }
  }
};
