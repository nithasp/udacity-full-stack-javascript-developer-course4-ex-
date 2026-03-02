// Moved from: core/services/cart/cart-api.service.ts

import { ProductType } from '../../features/products/models/product.model';

export interface CartApiItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  typeId: string;
  selectedType: ProductType | null;
  shopId: string | null;
  shopName: string | null;
  createdAt: string;
  updatedAt: string;
  // Joined product fields (present when fetching cart)
  productName?: string;
  productPrice?: number;
  productCategory?: string;
  productImage?: string;
  productDescription?: string;
  productPreviewImg?: string[];
  productTypes?: ProductType[];
  productReviews?: unknown[];
  productOverallRating?: number;
  productStock?: number;
  productIsActive?: boolean;
  productShopId?: string | null;
  productShopName?: string | null;
}

export interface AddCartItemPayload {
  productId: number;
  quantity: number;
  typeId?: string | null;
  selectedType?: ProductType | null;
  shopId?: string | null;
  shopName?: string | null;
}

export interface CheckoutItem {
  productId: number;
  quantity: number;
}

export interface CheckoutResponse {
  order: { id: number; userId: number; status: string };
}
