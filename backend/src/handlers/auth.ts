import { Application, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserStore } from '../models/user';
import { RefreshTokenStore } from '../models/refreshToken';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';

const TOKEN_SECRET = process.env.TOKEN_SECRET || 'default-secret-for-dev';
const ACCESS_TOKEN_EXPIRY = '10s';
const REFRESH_TOKEN_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const userStore = new UserStore();
const refreshTokenStore = new RefreshTokenStore();

const generateAccessToken = (userId: number): string => {
  return jwt.sign({ userId }, TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

// ── POST /auth/register ─────────────────────────────────────────────────────

const register = asyncHandler(async (req: Request, res: Response) => {
  const { username, password, first_name, last_name } = req.body;

  if (!username || typeof username !== 'string' || !username.trim()) {
    throw new AppError('username is required', 400);
  }
  if (!password || typeof password !== 'string' || password.length < 4) {
    throw new AppError('password is required and must be at least 4 characters', 400);
  }

  const existing = await userStore.findByUsername(username.trim());
  if (existing) {
    throw new AppError('Username already exists', 409);
  }

  const user = await userStore.create({
    username: username.trim(),
    password,
    first_name: first_name?.trim() || username.trim(),
    last_name: last_name?.trim() || '',
  });

  const accessToken = generateAccessToken(user.id!);
  const refreshToken = await refreshTokenStore.create(user.id!, REFRESH_TOKEN_EXPIRY_MS);

  res.json({ user, accessToken, refreshToken });
});

// ── POST /auth/login ────────────────────────────────────────────────────────

const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string' || !username.trim()) {
    throw new AppError('username is required', 400);
  }
  if (!password || typeof password !== 'string') {
    throw new AppError('password is required', 400);
  }

  const user = await userStore.authenticate(username.trim(), password);
  if (!user) {
    throw new AppError('Invalid username or password', 401);
  }

  const accessToken = generateAccessToken(user.id!);
  const refreshToken = await refreshTokenStore.create(user.id!, REFRESH_TOKEN_EXPIRY_MS);

  res.json({ user, accessToken, refreshToken });
});

// ── POST /auth/refresh (with token rotation) ───────────────────────────────

const refresh = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    throw new AppError('refreshToken is required', 400);
  }

  const stored = await refreshTokenStore.findByToken(refreshToken);
  if (!stored) {
    throw new AppError('Invalid or expired refresh token', 401);
  }

  // Rotate: delete the consumed token, issue a new pair
  await refreshTokenStore.deleteByToken(refreshToken);

  const accessToken = generateAccessToken(stored.user_id);
  const newRefreshToken = await refreshTokenStore.create(
    stored.user_id,
    REFRESH_TOKEN_EXPIRY_MS
  );

  res.json({ accessToken, refreshToken: newRefreshToken });
});

// ── POST /auth/logout ───────────────────────────────────────────────────────

const logout = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (refreshToken && typeof refreshToken === 'string') {
    await refreshTokenStore.deleteByToken(refreshToken);
  }

  res.json({ message: 'Logged out successfully' });
});

// ── POST /auth/logout-all (requires valid access token) ─────────────────────

const logoutAll = asyncHandler(async (req: Request, res: Response) => {
  const token = req.headers.authorization!.split(' ')[1];
  const decoded = jwt.verify(token, TOKEN_SECRET) as { userId: number };

  await refreshTokenStore.deleteAllForUser(decoded.userId);

  res.json({ message: 'All sessions revoked' });
});

// ── GET /auth/me (requires valid access token) ─────────────────────────────

const me = asyncHandler(async (req: Request, res: Response) => {
  const token = req.headers.authorization!.split(' ')[1];
  const decoded = jwt.verify(token, TOKEN_SECRET) as { userId: number };

  const user = await userStore.show(decoded.userId);
  if (!user) throw new AppError('User not found', 404);

  res.json(user);
});

// ── Register routes ─────────────────────────────────────────────────────────

const authRoutes = (app: Application) => {
  app.post('/auth/register', register);
  app.post('/auth/login', login);
  app.post('/auth/refresh', refresh);
  app.post('/auth/logout', logout);
  app.post('/auth/logout-all', verifyAuthToken, logoutAll);
  app.get('/auth/me', verifyAuthToken, me);
};

export default authRoutes;
