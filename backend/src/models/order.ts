import client from '../database';
import { Order, OrderProduct, RecentPurchase } from '../types/order.types';

export { Order, OrderProduct, RecentPurchase };

export class OrderStore {
  async index(filters?: { status?: string; userId?: number }): Promise<Order[]> {
    try {
      let sql = 'SELECT * FROM orders';
      const params: (string | number)[] = [];
      const conditions: string[] = [];

      if (filters?.status) { params.push(filters.status); conditions.push(`status=$${params.length}`); }
      if (filters?.userId) { params.push(filters.userId); conditions.push(`user_id=$${params.length}`); }
      if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');

      const { rows } = await client.query(sql, params);
      return rows;
    } catch (err) {
      throw new Error(`Cannot get orders: ${err}`);
    }
  }

  async show(id: number): Promise<Order> {
    try {
      const { rows } = await client.query('SELECT * FROM orders WHERE id=$1', [id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot get order ${id}: ${err}`);
    }
  }

  async create(order: Order): Promise<Order> {
    try {
      const { rows } = await client.query(
        'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *',
        [order.user_id, order.status]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot create order: ${err}`);
    }
  }

  async update(id: number, status: string): Promise<Order> {
    try {
      const { rows } = await client.query(
        'UPDATE orders SET status=$1 WHERE id=$2 RETURNING *',
        [status, id]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot update order ${id}: ${err}`);
    }
  }

  async delete(id: number): Promise<Order> {
    try {
      const { rows } = await client.query('DELETE FROM orders WHERE id=$1 RETURNING *', [id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot delete order ${id}: ${err}`);
    }
  }

  async getOrderProducts(orderId: number): Promise<OrderProduct[]> {
    try {
      const { rows } = await client.query('SELECT * FROM order_products WHERE order_id=$1', [orderId]);
      return rows;
    } catch (err) {
      throw new Error(`Cannot get order products: ${err}`);
    }
  }

  async addProduct(orderProduct: OrderProduct): Promise<OrderProduct> {
    try {
      const { rows } = await client.query(
        'INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
        [orderProduct.order_id, orderProduct.product_id, orderProduct.quantity]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot add product to order: ${err}`);
    }
  }

  async recentPurchases(userId: number, limit: number = 5): Promise<RecentPurchase[]> {
    try {
      const { rows } = await client.query(
        `SELECT p.id AS product_id, p.name, p.price, p.category, p.image, p.description, op.quantity, o.id AS order_id
         FROM orders o
         JOIN order_products op ON o.id = op.order_id
         JOIN products p ON op.product_id = p.id
         WHERE o.user_id = $1 AND o.status = 'complete'
         ORDER BY o.id DESC
         LIMIT $2`,
        [userId, limit]
      );
      return rows;
    } catch (err) {
      throw new Error(`Cannot get recent purchases for user ${userId}: ${err}`);
    }
  }
}
