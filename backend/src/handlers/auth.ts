import { Application, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'default-secret-for-dev';
const ACCESS_TOKEN_EXPIRY = '1h';
const REFRESH_TOKEN_EXPIRY = '1d';

// ── In-memory user store (mockup) ──────────────────────────────────────────────

interface MockUser {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

const users: MockUser[] = [];
let nextId = 1;

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Return a safe user object (no password). */
const safeUser = (u: MockUser) => ({
  id: u.id,
  username: u.username,
  first_name: u.first_name,
  last_name: u.last_name,
});

/** Generate an access + refresh token pair for the given user. */
const generateTokens = (user: MockUser) => {
  const accessToken = jwt.sign(
    { user: safeUser(user) },
    TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  const refreshToken = jwt.sign(
    { userId: user.id, username: user.username, type: 'refresh' },
    TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return { accessToken, refreshToken };
};

// ── Route handlers ─────────────────────────────────────────────────────────────

/**
 * POST /auth/register
 * Body: { username, password, first_name?, last_name? }
 */
const register = asyncHandler(async (req: Request, res: Response) => {
  const { username, password, first_name, last_name } = req.body;

  if (!username || typeof username !== 'string' || !username.trim()) {
    throw new AppError('username is required', 400);
  }
  if (!password || typeof password !== 'string' || password.length < 4) {
    throw new AppError('password is required and must be at least 4 characters', 400);
  }

  const trimmedUsername = username.trim();

  if (users.find((u) => u.username === trimmedUsername)) {
    throw new AppError('Username already exists', 409);
  }

  const newUser: MockUser = {
    id: nextId++,
    username: trimmedUsername,
    password,
    first_name: first_name?.trim() || trimmedUsername,
    last_name: last_name?.trim() || '',
  };

  users.push(newUser);

  const tokens = generateTokens(newUser);
  res.json({ user: safeUser(newUser), ...tokens });
});

/**
 * POST /auth/login
 * Body: { username, password }
 */
const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || !username.trim()) {
    throw new AppError('username is required', 400);
  }
  if (!password || typeof password !== 'string') {
    throw new AppError('password is required', 400);
  }

  const user = users.find(
    (u) => u.username === username.trim() && u.password === password
  );

  if (!user) {
    throw new AppError('Invalid username or password', 401);
  }

  const tokens = generateTokens(user);
  res.json({ user: safeUser(user), ...tokens });
});

/**
 * POST /auth/refresh
 * Body: { refreshToken }
 */
const refresh = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    throw new AppError('refreshToken is required', 400);
  }

  try {
    const decoded = jwt.verify(refreshToken, TOKEN_SECRET) as {
      userId: number;
      username: string;
      type: string;
    };

    if (decoded.type !== 'refresh') {
      throw new AppError('Invalid token type', 401);
    }

    const user = users.find((u) => u.id === decoded.userId);
    if (!user) {
      throw new AppError('User no longer exists', 401);
    }

    // Issue a fresh access token; keep the same refresh token
    const accessToken = jwt.sign(
      { user: safeUser(user) },
      TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );

    res.json({ accessToken, refreshToken });
  } catch (err) {
    if (err instanceof AppError) throw err;

    const jwtErr = err as { name?: string };
    if (jwtErr.name === 'TokenExpiredError') {
      throw new AppError('Refresh token has expired. Please log in again.', 401);
    }
    throw new AppError('Invalid refresh token', 401);
  }
});

/**
 * GET /auth/me   (protected – requires valid access token)
 * Returns the current user from the token payload.
 */
const me = asyncHandler(async (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError('No token provided', 401);

  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, TOKEN_SECRET) as { user: ReturnType<typeof safeUser> };
  res.json(decoded.user);
});

// ── Register routes ────────────────────────────────────────────────────────────

const authRoutes = (app: Application) => {
  app.post('/auth/register', register);
  app.post('/auth/login', login);
  app.post('/auth/refresh', refresh);
  app.get('/auth/me', me);
};

export default authRoutes;

// Export internals for testing
export { users, nextId, MockUser };

