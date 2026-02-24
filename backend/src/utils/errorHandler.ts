import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(public message: string, public statusCode: number = 400) {
    super(message);
  }
}

export const errorMiddleware = (
  err: Error, _req: Request, res: Response, _next: NextFunction
): void => {
  const statusCode = (err as AppError).statusCode || 500;
  res.status(statusCode).json({ error: err.message || 'Internal Server Error' });
};
