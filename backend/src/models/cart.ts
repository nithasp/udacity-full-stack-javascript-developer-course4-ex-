import client from '../database';
import { CartItem, UpsertCartItemPayload } from '../types/cart.types';

export { CartItem, UpsertCartItemPayload };

export class CartStore {
  async getByUser(userId: number): Promise<CartItem[]> {
    try {
      const { rows } = await client.query(
        `SELECT
           ci.*,
           p.name          AS product_name,
           p.price         AS product_price,
           p.category      AS product_category,
           p.image         AS product_image,
           p.description   AS product_description,
           p.preview_img   AS product_preview_img,
           p.types         AS product_types,
           p.reviews       AS product_reviews,
           p.overall_rating AS product_overall_rating,
           p.stock         AS product_stock,
           p.is_active     AS product_is_active,
           p.shop_id       AS product_shop_id,
           p.shop_name     AS product_shop_name
         FROM cart_items ci
         JOIN products p ON ci.product_id = p.id
         WHERE ci.user_id = $1
         ORDER BY ci.created_at ASC`,
        [userId]
      );
      return rows;
    } catch (err) {
      throw new Error(`Cannot get cart items for user ${userId}: ${err}`);
    }
  }

  /**
   * Insert a new cart item or add to the existing quantity if the
   * (user_id, product_id, type_id) combination already exists.
   */
  async upsert(userId: number, payload: UpsertCartItemPayload): Promise<CartItem> {
    try {
      const { rows } = await client.query(
        `INSERT INTO cart_items (user_id, product_id, quantity, type_id, selected_type, shop_id, shop_name)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT ON CONSTRAINT cart_items_user_product_type_unique
           DO UPDATE SET
             quantity      = cart_items.quantity + EXCLUDED.quantity,
             selected_type = EXCLUDED.selected_type,
             shop_id       = EXCLUDED.shop_id,
             shop_name     = EXCLUDED.shop_name,
             updated_at    = CURRENT_TIMESTAMP
         RETURNING *`,
        [
          userId,
          payload.product_id,
          payload.quantity,
          payload.type_id ?? '',
          payload.selected_type ? JSON.stringify(payload.selected_type) : null,
          payload.shop_id ?? null,
          payload.shop_name ?? null,
        ]
      );
      return rows[0];
    } catch (err) {
      throw new Error(`Cannot upsert cart item: ${err}`);
    }
  }

  async updateQuantity(cartItemId: number, userId: number, quantity: number): Promise<CartItem | null> {
    try {
      const { rows } = await client.query(
        `UPDATE cart_items
         SET quantity = $1, updated_at = CURRENT_TIMESTAMP
         WHERE id = $2 AND user_id = $3
         RETURNING *`,
        [quantity, cartItemId, userId]
      );
      return rows[0] ?? null;
    } catch (err) {
      throw new Error(`Cannot update cart item ${cartItemId}: ${err}`);
    }
  }

  async remove(cartItemId: number, userId: number): Promise<CartItem | null> {
    try {
      const { rows } = await client.query(
        `DELETE FROM cart_items WHERE id = $1 AND user_id = $2 RETURNING *`,
        [cartItemId, userId]
      );
      return rows[0] ?? null;
    } catch (err) {
      throw new Error(`Cannot remove cart item ${cartItemId}: ${err}`);
    }
  }

  async clearByUser(userId: number): Promise<void> {
    try {
      await client.query(`DELETE FROM cart_items WHERE user_id = $1`, [userId]);
    } catch (err) {
      throw new Error(`Cannot clear cart for user ${userId}: ${err}`);
    }
  }
}
