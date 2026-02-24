import client from '../database';
import { Product } from '../types/product.types';

export { Product };

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const { rows } = await client.query('SELECT * FROM products');
      return rows;
    } catch (err) {
      throw new Error(`Cannot get products: ${err}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const { rows } = await client.query('SELECT * FROM products WHERE id=$1', [id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot get product ${id}: ${err}`);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const { rows } = await client.query(
        'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *',
        [product.name, product.price, product.category]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot create product ${product.name}: ${err}`);
    }
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    try {
      const fields: string[] = [];
      const values: (string | number)[] = [];
      let i = 1;

      if (product.name) { fields.push(`name=$${i++}`); values.push(product.name); }
      if (product.price !== undefined) { fields.push(`price=$${i++}`); values.push(product.price); }
      if (product.category !== undefined) { fields.push(`category=$${i++}`); values.push(product.category as string); }

      values.push(id);
      const { rows } = await client.query(
        `UPDATE products SET ${fields.join(', ')} WHERE id=$${i} RETURNING *`,
        values
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot update product ${id}: ${err}`);
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      const { rows } = await client.query('DELETE FROM products WHERE id=$1 RETURNING *', [id]);
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot delete product ${id}: ${err}`);
    }
  }

  async mostPopular(limit: number = 5): Promise<Product[]> {
    try {
      const { rows } = await client.query(
        `SELECT p.*, COALESCE(SUM(op.quantity), 0) AS total_quantity
         FROM products p LEFT JOIN order_products op ON p.id = op.product_id
         GROUP BY p.id ORDER BY total_quantity DESC LIMIT $1`,
        [limit]
      );
      return rows;
    } catch (err) {
      throw new Error(`Cannot get most popular products: ${err}`);
    }
  }

  async getByCategory(category: string): Promise<Product[]> {
    try {
      const { rows } = await client.query(
        'SELECT * FROM products WHERE LOWER(category) = LOWER($1)',
        [category]
      );
      return rows;
    } catch (err) {
      throw new Error(`Cannot get products by category: ${err}`);
    }
  }
}
