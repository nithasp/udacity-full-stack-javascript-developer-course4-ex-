import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

export const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: 'Access denied. No token provided.' });
      return;
    }
    jwt.verify(authHeader.split(' ')[1], TOKEN_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};
