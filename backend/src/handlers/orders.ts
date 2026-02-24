import { Application, Request, Response } from 'express';
import { Order, OrderProduct } from '../types/order.types';
import { OrderStore } from '../models/order';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';
import { parseId, requirePositiveInt } from '../utils/validate';

const store = new OrderStore();

const index = asyncHandler(async (req: Request, res: Response) => {
  const status = req.query.status as string | undefined;
  if (status && !['active', 'complete'].includes(status))
    throw new AppError("status filter must be either 'active' or 'complete'", 400);

  const userIdParam = req.query.userId as string | undefined;
  const userId = userIdParam ? parseId(userIdParam, 'userId filter') : undefined;

  res.json(await store.index({ status, userId }));
});

const show = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'order id');
  const order = await store.show(id);
  if (!order) throw new AppError(`order with id ${req.params.id} not found`, 404);
  res.json(order);
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const user_id = requirePositiveInt(req.body.user_id, 'user_id');

  if (req.body.status && !['active', 'complete'].includes(req.body.status))
    throw new AppError("status must be either 'active' or 'complete'", 400);

  res.json(await store.create({ user_id, status: req.body.status || 'active' }));
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'order id');
  if (!req.body.status) throw new AppError('status is required', 400);
  if (!['active', 'complete'].includes(req.body.status))
    throw new AppError("status must be either 'active' or 'complete'", 400);

  const updatedOrder = await store.update(id, req.body.status);
  if (!updatedOrder) throw new AppError(`order with id ${req.params.id} not found`, 404);
  res.json(updatedOrder);
});

const destroy = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'order id');
  const deleted = await store.delete(id);
  if (!deleted) throw new AppError(`order with id ${req.params.id} not found`, 404);
  res.json(deleted);
});

const getOrderProducts = asyncHandler(async (req: Request, res: Response) => {
  const id = parseId(req.params.id, 'order id');
  res.json(await store.getOrderProducts(id));
});

const currentOrderByUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = parseId(req.params.userId, 'userId');
  res.json(await store.index({ status: 'active', userId }));
});

const completedOrdersByUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = parseId(req.params.userId, 'userId');
  res.json(await store.index({ status: 'complete', userId }));
});

const addProduct = asyncHandler(async (req: Request, res: Response) => {
  const order_id = parseId(req.params.id, 'order id in URL');
  const product_id = requirePositiveInt(req.body.product_id, 'product_id');
  const quantity = requirePositiveInt(req.body.quantity, 'quantity');

  res.json(await store.addProduct({ order_id, product_id, quantity }));
});

const orderRoutes = (app: Application) => {
  app.get('/orders', verifyAuthToken, index);
  app.get('/orders/user/:userId/current', verifyAuthToken, currentOrderByUser);
  app.get('/orders/user/:userId/completed', verifyAuthToken, completedOrdersByUser);
  app.get('/orders/:id/products', verifyAuthToken, getOrderProducts);
  app.post('/orders/:id/products', verifyAuthToken, addProduct);
  app.get('/orders/:id', verifyAuthToken, show);
  app.post('/orders', verifyAuthToken, create);
  app.put('/orders/:id', verifyAuthToken, update);
  app.delete('/orders/:id', verifyAuthToken, destroy);
};

export default orderRoutes;
