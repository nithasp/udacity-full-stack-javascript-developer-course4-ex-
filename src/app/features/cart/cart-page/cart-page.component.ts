import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from '../../products/models/product';
import { CartService } from '../../../core/services/cart.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AddressEntry } from '../models/address.model';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  badge: string;
  color: string;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // ── Addresses ──────────────────────────────────────────────────────────────
  addresses: AddressEntry[] = [
    {
      id: 'addr-1',
      fullName: 'John Doe',
      phone: '+1 555 123 4567',
      address: '123 Main Street, Apt 4B',
      city: 'New York, NY 10001',
      isDefault: true,
      label: 'home'
    }
  ];
  selectedAddressId = 'addr-1';
  isAddressDialogOpen = false;

  // ── Payment ────────────────────────────────────────────────────────────────
  selectedPayment = 'visa';
  paymentMethods: PaymentMethod[] = [
    { id: 'visa',       name: 'Visa',          description: 'Credit / Debit Card',  badge: 'VISA', color: '#1a1f71' },
    { id: 'mastercard', name: 'Mastercard',     description: 'Credit / Debit Card',  badge: 'MC',   color: '#eb001b' },
    { id: 'qrcode',     name: 'QR Code',        description: 'Scan to Pay',          badge: 'QR',   color: '#6366f1' },
    { id: 'bank',       name: 'Bank Transfer',  description: 'Direct Bank Transfer', badge: 'BANK', color: '#059669' },
  ];

  // ── Discount ───────────────────────────────────────────────────────────────
  discountCode = '';
  appliedDiscount = 0;
  discountLabel = '';
  discountSuccess = '';
  discountError = '';

  private readonly MOCK_CODES: Record<string, number> = {
    '10%OFF': 0.1,
    'SAVE20': 0.2,
  };

  private cartSub!: Subscription;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(items => this.cartItems = items);
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  get cartTotal(): number { return this.cartService.getTotal(); }
  get cartCount(): number { return this.cartService.getCartCount(); }
  get discountAmount(): number { return this.cartTotal * this.appliedDiscount; }
  get cartTotalAfterDiscount(): number { return this.cartTotal - this.discountAmount; }

  get selectedAddress(): AddressEntry | undefined {
    return this.addresses.find(a => a.id === this.selectedAddressId);
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

  // ── Discount ───────────────────────────────────────────────────────────────
  applyDiscount(): void {
    const code = this.discountCode.trim().toUpperCase();
    if (!code) {
      this.discountError = 'Please enter a discount code.';
      this.discountSuccess = '';
      return;
    }
    const discount = this.MOCK_CODES[code];
    if (discount !== undefined) {
      this.appliedDiscount = discount;
      this.discountLabel = code;
      this.discountSuccess = `"${code}" applied — ${discount * 100}% off your order!`;
      this.discountError = '';
    } else {
      this.discountError = 'Invalid code. Try "10%OFF" or "SAVE20".';
      this.discountSuccess = '';
      this.appliedDiscount = 0;
      this.discountLabel = '';
    }
  }

  useHintCode(code: string): void {
    this.discountCode = code;
    this.applyDiscount();
  }

  removeDiscount(): void {
    this.appliedDiscount = 0;
    this.discountLabel = '';
    this.discountCode = '';
    this.discountSuccess = '';
    this.discountError = '';
  }

  onProceedToCheckout(): void {
    if (!this.selectedAddress) {
      this.notificationService.error('Please select a shipping address to continue.');
      this.isAddressDialogOpen = true;
      return;
    }
    this.cartService.clearCart();
    this.notificationService.success('Order placed successfully!', 'Thank You');
    this.router.navigate(['/cart/confirmation']);
  }
}
