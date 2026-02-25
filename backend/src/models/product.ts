import client from '../database';
import { Product } from '../types/product.types';

export { Product };

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const { rows } = await client.query('SELECT * FROM products');
      return rows.map(this.mapRow);
    } catch (err) {
      throw new Error(`Cannot get products: ${err}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const { rows } = await client.query('SELECT * FROM products WHERE id=$1', [id]);
      return rows[0] ? this.mapRow(rows[0]) : rows[0];
    } catch (err) {
      throw new Error(`Cannot get product ${id}: ${err}`);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const { rows } = await client.query(
        `INSERT INTO products (name, price, category, image, description, preview_img, types, reviews, overall_rating, stock, is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [
          product.name,
          product.price,
          product.category || null,
          product.image || null,
          product.description || null,
          JSON.stringify(product.preview_img || []),
          JSON.stringify(product.types || []),
          JSON.stringify(product.reviews || []),
          product.overall_rating || 0,
          product.stock || 0,
          product.isActive !== undefined ? product.isActive : true
        ]
      );
      return this.mapRow(rows[0]);
    } catch (err) {
      throw new Error(`Cannot create product ${product.name}: ${err}`);
    }
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    try {
      const fields: string[] = [];
      const values: (string | number | boolean)[] = [];
      let i = 1;

      if (product.name) { fields.push(`name=$${i++}`); values.push(product.name); }
      if (product.price !== undefined) { fields.push(`price=$${i++}`); values.push(product.price); }
      if (product.category !== undefined) { fields.push(`category=$${i++}`); values.push(product.category as string); }
      if (product.image !== undefined) { fields.push(`image=$${i++}`); values.push(product.image as string); }
      if (product.description !== undefined) { fields.push(`description=$${i++}`); values.push(product.description as string); }
      if (product.preview_img !== undefined) { fields.push(`preview_img=$${i++}`); values.push(JSON.stringify(product.preview_img)); }
      if (product.types !== undefined) { fields.push(`types=$${i++}`); values.push(JSON.stringify(product.types)); }
      if (product.reviews !== undefined) { fields.push(`reviews=$${i++}`); values.push(JSON.stringify(product.reviews)); }
      if (product.overall_rating !== undefined) { fields.push(`overall_rating=$${i++}`); values.push(product.overall_rating); }
      if (product.stock !== undefined) { fields.push(`stock=$${i++}`); values.push(product.stock); }
      if (product.isActive !== undefined) { fields.push(`is_active=$${i++}`); values.push(product.isActive); }

      values.push(id);
      const { rows } = await client.query(
        `UPDATE products SET ${fields.join(', ')} WHERE id=$${i} RETURNING *`,
        values
      );
      return rows[0] ? this.mapRow(rows[0]) : rows[0];
    } catch (err) {
      throw new Error(`Cannot update product ${id}: ${err}`);
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      const { rows } = await client.query('DELETE FROM products WHERE id=$1 RETURNING *', [id]);
      return rows[0] ? this.mapRow(rows[0]) : rows[0];
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
      return rows.map(this.mapRow);
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
      return rows.map(this.mapRow);
    } catch (err) {
      throw new Error(`Cannot get products by category: ${err}`);
    }
  }

  /** Map a database row to the Product interface (snake_case → camelCase) */
  private mapRow(row: Record<string, unknown>): Product {
    return {
      id: row.id as number,
      name: row.name as string,
      price: row.price as number,
      category: row.category as string | undefined,
      image: row.image as string | undefined,
      description: row.description as string | undefined,
      preview_img: row.preview_img as string[] | undefined,
      types: row.types as Product['types'],
      reviews: row.reviews as Product['reviews'],
      overall_rating: row.overall_rating ? parseFloat(row.overall_rating as string) : undefined,
      stock: row.stock as number | undefined,
      isActive: row.is_active as boolean | undefined,
    };
  }
}
