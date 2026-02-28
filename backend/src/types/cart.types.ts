export interface CartItem {
  id?: number;
  user_id: number;
  product_id: number;
  quantity: number;
  type_id?: string;
  selected_type?: Record<string, unknown> | null;
  shop_id?: string | null;
  shop_name?: string | null;
  created_at?: Date;
  updated_at?: Date;
}

export interface UpsertCartItemPayload {
  product_id: number;
  quantity: number;
  type_id?: string | null;
  selected_type?: Record<string, unknown> | null;
  shop_id?: string | null;
  shop_name?: string | null;
}
