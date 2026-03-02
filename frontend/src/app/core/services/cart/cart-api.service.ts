import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartApiItem, AddCartItemPayload, CheckoutItem, CheckoutResponse } from '../../models/cart-api.model';

export type { CartApiItem, AddCartItemPayload, CheckoutItem, CheckoutResponse };

const API_URL = 'http://localhost:3000/cart';

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
