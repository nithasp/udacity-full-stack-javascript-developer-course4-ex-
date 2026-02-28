import { Application, Request, Response } from 'express';
import { CartStore } from '../models/cart';
import { OrderStore } from '../models/order';
import { verifyAuthToken } from '../middleware/auth';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/errorHandler';
import { parseId, requirePositiveInt } from '../utils/validate';
import client from '../database';

const cartStore = new CartStore();
const orderStore = new OrderStore();

// GET /cart  — return all cart items for the authenticated user
const getCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  res.json(await cartStore.getByUser(userId));
});

// POST /cart  — add (or increment) a cart item
const addItem = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const product_id = requirePositiveInt(req.body.product_id, 'product_id');
  const quantity   = requirePositiveInt(req.body.quantity ?? 1, 'quantity');

  const type_id     = req.body.type_id     ?? null;
  const selected_type = req.body.selected_type ?? null;
  const shop_id     = req.body.shop_id     ?? null;
  const shop_name   = req.body.shop_name   ?? null;

  const item = await cartStore.upsert(userId, {
    product_id,
    quantity,
    type_id,
    selected_type,
    shop_id,
    shop_name,
  });

  res.status(201).json(item);
});

// PUT /cart/:id  — set exact quantity for a cart item
const updateItem = asyncHandler(async (req: Request, res: Response) => {
  const userId     = req.user!.userId;
  const cartItemId = parseId(req.params.id, 'cart item id');
  const quantity   = requirePositiveInt(req.body.quantity, 'quantity');

  const updated = await cartStore.updateQuantity(cartItemId, userId, quantity);
  if (!updated) throw new AppError(`Cart item ${cartItemId} not found`, 404);

  res.json(updated);
});

// DELETE /cart/:id  — remove a single cart item
const removeItem = asyncHandler(async (req: Request, res: Response) => {
  const userId     = req.user!.userId;
  const cartItemId = parseId(req.params.id, 'cart item id');

  const deleted = await cartStore.remove(cartItemId, userId);
  if (!deleted) throw new AppError(`Cart item ${cartItemId} not found`, 404);

  res.json(deleted);
});

// DELETE /cart  — clear ALL cart items for the authenticated user
const clearCart = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  await cartStore.clearByUser(userId);
  res.json({ message: 'Cart cleared' });
});

// POST /cart/checkout  — create a completed order from selected cart items, then clear cart
const checkout = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.user!.userId;

  // items: Array<{ product_id: number; quantity: number }>
  const items: { product_id: number; quantity: number }[] = req.body.items;
  if (!Array.isArray(items) || items.length === 0) {
    throw new AppError('items must be a non-empty array', 400);
  }

  // Validate each item
  for (const item of items) {
    requirePositiveInt(item.product_id, 'product_id');
    requirePositiveInt(item.quantity, 'quantity');
  }

  // Run everything in a single transaction
  const poolClient = await client.connect();
  try {
    await poolClient.query('BEGIN');

    // 1. Create an active order
    const { rows: orderRows } = await poolClient.query(
      `INSERT INTO orders (user_id, status) VALUES ($1, 'active') RETURNING *`,
      [userId]
    );
    const order = orderRows[0];

    // 2. Add each item to the order
    for (const item of items) {
      await poolClient.query(
        `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3)`,
        [order.id, item.product_id, item.quantity]
      );
    }

    // 3. Mark order as complete
    const { rows: completedRows } = await poolClient.query(
      `UPDATE orders SET status = 'complete' WHERE id = $1 RETURNING *`,
      [order.id]
    );

    // 4. Clear the user's cart
    await poolClient.query(`DELETE FROM cart_items WHERE user_id = $1`, [userId]);

    await poolClient.query('COMMIT');

    res.status(201).json({ order: completedRows[0] });
  } catch (err) {
    await poolClient.query('ROLLBACK');
    throw new Error(`Checkout failed: ${err}`);
  } finally {
    poolClient.release();
  }
});

const cartRoutes = (app: Application) => {
  app.get('/cart',          verifyAuthToken, getCart);
  app.post('/cart',         verifyAuthToken, addItem);
  app.post('/cart/checkout',verifyAuthToken, checkout);
  app.put('/cart/:id',      verifyAuthToken, updateItem);
  app.delete('/cart/:id',   verifyAuthToken, removeItem);
  app.delete('/cart',       verifyAuthToken, clearCart);
};

export default cartRoutes;
