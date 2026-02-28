import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../../features/products/models/product';

const API_URL = 'http://localhost:3000/cart';

export interface CartApiItem {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  type_id: string;
  selected_type: ProductType | null;
  shop_id: string | null;
  shop_name: string | null;
  created_at: string;
  updated_at: string;
  // Joined product fields (present when fetching cart)
  product_name?: string;
  product_price?: number;
  product_category?: string;
  product_image?: string;
  product_description?: string;
  product_preview_img?: string[];
  product_types?: ProductType[];
  product_reviews?: unknown[];
  product_overall_rating?: number;
  product_stock?: number;
  product_is_active?: boolean;
  product_shop_id?: string | null;
  product_shop_name?: string | null;
}

export interface AddCartItemPayload {
  product_id: number;
  quantity: number;
  type_id?: string | null;
  selected_type?: ProductType | null;
  shop_id?: string | null;
  shop_name?: string | null;
}

export interface CheckoutItem {
  product_id: number;
  quantity: number;
}

export interface CheckoutResponse {
  order: { id: number; user_id: number; status: string };
}

@Injectable({ providedIn: 'root' })
export class CartApiService {
  constructor(private http: HttpClient) {}

  getCart(): Observable<CartApiItem[]> {
    return this.http.get<CartApiItem[]>(API_URL);
  }

  addItem(payload: AddCartItemPayload): Observable<CartApiItem> {
    return this.http.post<CartApiItem>(API_URL, payload);
  }

  updateItem(cartItemId: number, quantity: number): Observable<CartApiItem> {
    return this.http.put<CartApiItem>(`${API_URL}/${cartItemId}`, { quantity });
  }

  removeItem(cartItemId: number): Observable<CartApiItem> {
    return this.http.delete<CartApiItem>(`${API_URL}/${cartItemId}`);
  }

  clearCart(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(API_URL);
  }

  checkout(items: CheckoutItem[]): Observable<CheckoutResponse> {
    return this.http.post<CheckoutResponse>(`${API_URL}/checkout`, { items });
  }
}
