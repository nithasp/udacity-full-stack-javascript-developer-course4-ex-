import { Application, Request, Response } from 'express';
import { UserStore } from '../models/user';
import { OrderStore } from '../models/order';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';
import { parseId, requireString, optionalString } from '../utils/validate';

const store = new UserStore();
const orderStore = new OrderStore();

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
  // Token issuance is handled by POST /auth/register.
  // This endpoint only creates the record; the client should call /auth/login afterwards.
  res.status(201).json({ user: newUser });
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

const userRoutes = (app: Application) => {
  app.get('/users', verifyAuthToken, index);
  app.get('/users/:id', verifyAuthToken, show);
  app.post('/users', verifyAuthToken, create);
  app.put('/users/:id', verifyAuthToken, update);
  app.delete('/users/:id', verifyAuthToken, destroy);
};

export default userRoutes;
