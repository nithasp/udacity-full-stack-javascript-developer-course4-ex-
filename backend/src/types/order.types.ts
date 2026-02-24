export interface Order {
  id?: number;
  user_id: number;
  status: string;
}

export interface OrderProduct {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
}

export interface RecentPurchase {
  product_id: number;
  name: string;
  price: number;
  category: string | null;
  quantity: number;
  order_id: number;
}
