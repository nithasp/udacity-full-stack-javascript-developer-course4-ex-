// Moved from: features/cart/cart-page/cart-page.component.ts

import { CartItem } from '../../products/models/product.model';

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  badge: string;
  color: string;
}

export interface ShopGroup {
  shopId: string;
  shopName: string;
  items: CartItem[];
}
