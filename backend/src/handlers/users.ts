import { Application, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../types/user.types';
import { UserStore } from '../models/user';
import { OrderStore } from '../models/order';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';
import { parseId, requireString, optionalString } from '../utils/validate';

const store = new UserStore();
const orderStore = new OrderStore();
const TOKEN_SECRET = process.env.TOKEN_SECRET as string;

const index = asyncHandler(async (_req: Request, res: Response) => {
  res.json(await store.index());
});

const show = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'user id');
  const user = await store.show(id);
  if (!user) throw new AppError(`user with id ${req.params.id} not found`, 404);
  const recentPurchases = await orderStore.recentPurchases(id);
  res.json({ ...user, recent_purchases: recentPurchases });
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const newUser = await store.create({
    first_name: requireString(req.body.first_name, 'first_name'),
    last_name: requireString(req.body.last_name, 'last_name'),
    username: requireString(req.body.username, 'username'),
    password: requireString(req.body.password, 'password'),
  });
  const token = jwt.sign({ userId: newUser.id }, TOKEN_SECRET, { expiresIn: '1h' });
  res.json({ user: newUser, token });
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'user id');
  const { first_name, last_name, username, password } = req.body;

  if (!first_name && !last_name && !username && !password)
    throw new AppError('at least one field (first_name, last_name, username, password) is required to update', 400);

  const updatedUser = await store.update(id, {
    first_name: optionalString(first_name, 'first_name'),
    last_name: optionalString(last_name, 'last_name'),
    username: optionalString(username, 'username'),
    password: optionalString(password, 'password'),
  });
  if (!updatedUser) throw new AppError(`user with id ${req.params.id} not found`, 404);
  res.json(updatedUser);
});

const destroy = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'user id');
  const deleted = await store.delete(id);
  if (!deleted) throw new AppError(`user with id ${req.params.id} not found`, 404);
  res.json(deleted);
});

const authenticate = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.username || typeof req.body.username !== 'string' || !req.body.username.trim())
    throw new AppError('username is required', 400);
  if (!req.body.password || typeof req.body.password !== 'string')
    throw new AppError('password is required', 400);

  const user = await store.authenticate(req.body.username.trim(), req.body.password);
  if (!user) throw new AppError('Invalid credentials', 401);
  const token = jwt.sign({ userId: user.id }, TOKEN_SECRET, { expiresIn: '1h' });
  res.json({ user, token });
});

const userRoutes = (app: Application) => {
  app.get('/users', verifyAuthToken, index);
  app.get('/users/:id', verifyAuthToken, show);
  app.post('/users', create);
  app.put('/users/:id', verifyAuthToken, update);
  app.delete('/users/:id', verifyAuthToken, destroy);
  app.post('/users/authenticate', authenticate);
};

export default userRoutes;
