import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product, ProductType } from '../../features/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product, quantity: number, selectedType?: ProductType): void {
    const existingIndex = this.cartItems.findIndex(
      item => item.product._id === product._id &&
        item.selectedType?._id === selectedType?._id
    );

    if (existingIndex > -1) {
      this.cartItems[existingIndex].quantity += quantity;
    } else {
      this.cartItems.push({ product, quantity, selectedType });
    }

    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(productId: string, typeId?: string): void {
    this.cartItems = this.cartItems.filter(
      item => !(item.product._id === productId &&
        item.selectedType?._id === typeId)
    );
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(productId: string, quantity: number, typeId?: string): void {
    const item = this.cartItems.find(
      i => i.product._id === productId &&
        i.selectedType?._id === typeId
    );
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      const price = item.selectedType?.price ?? item.product.price;
      return total + (price * item.quantity);
    }, 0);
  }

  getCartCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  getItems(): CartItem[] {
    return [...this.cartItems];
  }
}
