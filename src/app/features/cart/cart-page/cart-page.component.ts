import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from '../../products/models/product';
import { CartService } from '../../../core/services/cart.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  checkoutData = {
    fullName: '',
    address: '',
    city: '',
    creditCard: ''
  };

  private cartSub!: Subscription;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(
      items => this.cartItems = items
    );
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  get cartTotal(): number {
    return this.cartService.getTotal();
  }

  get cartCount(): number {
    return this.cartService.getCartCount();
  }

  getItemPrice(item: CartItem): number {
    return item.selectedType?.price ?? item.product.price;
  }

  getItemSubtotal(item: CartItem): number {
    return this.getItemPrice(item) * item.quantity;
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item.product._id, quantity, item.selectedType?._id);
    this.notificationService.info('Cart updated');
  }

  removeItem(item: CartItem): void {
    this.cartService.removeFromCart(item.product._id, item.selectedType?._id);
    this.notificationService.info(`${item.product.name} removed from cart`);
  }

  onFieldChange(_field: string, _value: string): void {
    // ngModelChange handler — can be extended for real-time validation feedback
  }

  get isFormValid(): boolean {
    return (
      this.checkoutData.fullName.trim().length >= 3 &&
      this.checkoutData.address.trim().length >= 6 &&
      this.checkoutData.city.trim().length >= 2 &&
      /^\d{16}$/.test(this.checkoutData.creditCard.replace(/\s/g, ''))
    );
  }

  onCheckout(): void {
    if (!this.isFormValid) {
      this.notificationService.error('Please fill in all fields correctly');
      return;
    }

    this.cartService.clearCart();
    this.notificationService.success('Order placed successfully!', 'Thank You');
    this.router.navigate(['/cart/confirmation']);
  }
}
