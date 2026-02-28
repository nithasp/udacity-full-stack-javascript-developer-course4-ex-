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
      return rows.map(this.mapOrderRow);
    } catch (err) {
      throw new Error(`Cannot get orders: ${err}`);
    }
  }

  async show(id: number): Promise<Order> {
    try {
      const { rows } = await client.query('SELECT * FROM orders WHERE id=$1', [id]);
      return rows[0] ? this.mapOrderRow(rows[0]) : rows[0];
    } catch (err) {
      throw new Error(`Cannot get order ${id}: ${err}`);
    }
  }

  async create(order: Order): Promise<Order> {
    try {
      const { rows } = await client.query(
        'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *',
        [order.userId, order.status]
      );
      return this.mapOrderRow(rows[0]);
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
      return rows[0] ? this.mapOrderRow(rows[0]) : rows[0];
    } catch (err) {
      throw new Error(`Cannot update order ${id}: ${err}`);
    }
  }

  async delete(id: number): Promise<Order> {
    try {
      const { rows } = await client.query('DELETE FROM orders WHERE id=$1 RETURNING *', [id]);
      return rows[0] ? this.mapOrderRow(rows[0]) : rows[0];
    } catch (err) {
      throw new Error(`Cannot delete order ${id}: ${err}`);
    }
  }

  async getOrderProducts(orderId: number): Promise<OrderProduct[]> {
    try {
      const { rows } = await client.query('SELECT * FROM order_products WHERE order_id=$1', [orderId]);
      return rows.map(this.mapOrderProductRow);
    } catch (err) {
      throw new Error(`Cannot get order products: ${err}`);
    }
  }

  async addProduct(orderProduct: OrderProduct): Promise<OrderProduct> {
    try {
      const { rows } = await client.query(
        'INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
        [orderProduct.orderId, orderProduct.productId, orderProduct.quantity]
      );
      return this.mapOrderProductRow(rows[0]);
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
      return rows.map(this.mapRecentPurchaseRow);
    } catch (err) {
      throw new Error(`Cannot get recent purchases for user ${userId}: ${err}`);
    }
  }

  private mapOrderRow(row: Record<string, unknown>): Order {
    return {
      id: row.id as number,
      userId: row.user_id as number,
      status: row.status as string,
    };
  }

  private mapOrderProductRow(row: Record<string, unknown>): OrderProduct {
    return {
      id: row.id as number,
      orderId: row.order_id as number,
      productId: row.product_id as number,
      quantity: row.quantity as number,
    };
  }

  private mapRecentPurchaseRow(row: Record<string, unknown>): RecentPurchase {
    return {
      productId: row.product_id as number,
      name: row.name as string,
      price: row.price as number,
      category: row.category as string | null,
      image: row.image as string | null,
      description: row.description as string | null,
      quantity: row.quantity as number,
      orderId: row.order_id as number,
    };
  }
}
