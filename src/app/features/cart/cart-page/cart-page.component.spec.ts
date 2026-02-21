import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CartPageComponent } from './cart-page.component';
import { CartService } from '../../../core/services/cart.service';
import { NotificationService } from '../../../core/services/notification.service';
import { InputFieldComponent } from '../../../shared/components/form/input-field/input-field.component';
import { Product, CartItem } from '../../products/models/product';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let cartService: CartService;
  let notificationSpy: jasmine.SpyObj<NotificationService>;

  const mockProduct: Product = {
    _id: 'prod1',
    name: 'Test Product',
    category: 'Electronics',
    price: 79.99,
    image: 'https://example.com/img.jpg',
    description: 'A test product',
    preview_img: [],
    types: [
      { _id: 't1', product_id: 1001, color: 'Black', quantity: 50, price: 79.99, stock: 50, image: '' }
    ],
    reviews: [],
    overall_rating: 4.5,
    stock: 50
  };

  beforeEach(async () => {
    notificationSpy = jasmine.createSpyObj('NotificationService', ['success', 'error', 'info', 'warning']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ToastrModule.forRoot()],
      declarations: [CartPageComponent, InputFieldComponent],
      providers: [
        CartService,
        { provide: NotificationService, useValue: notificationSpy }
      ]
    }).compileComponents();

    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty cart message when no items', () => {
    const empty = fixture.nativeElement.querySelector('.cart-page__empty');
    expect(empty).toBeTruthy();
  });

  it('should display cart items when cart has products', () => {
    cartService.addToCart(mockProduct, 2, mockProduct.types[0]);
    fixture.detectChanges();
    const items = fixture.nativeElement.querySelectorAll('.cart-item');
    expect(items.length).toBe(1);
  });

  it('should calculate item price correctly', () => {
    const item: CartItem = { product: mockProduct, quantity: 1, selectedType: mockProduct.types[0] };
    expect(component.getItemPrice(item)).toBe(79.99);
  });

  it('should calculate item subtotal correctly', () => {
    const item: CartItem = { product: mockProduct, quantity: 3, selectedType: mockProduct.types[0] };
    expect(component.getItemSubtotal(item)).toBeCloseTo(239.97, 2);
  });

  it('should calculate cart total', () => {
    cartService.addToCart(mockProduct, 2, mockProduct.types[0]);
    expect(component.cartTotal).toBeCloseTo(159.98, 2);
  });

  it('should remove item from cart', () => {
    cartService.addToCart(mockProduct, 1, mockProduct.types[0]);
    const item: CartItem = { product: mockProduct, quantity: 1, selectedType: mockProduct.types[0] };
    component.removeItem(item);
    expect(component.cartItems.length).toBe(0);
    expect(notificationSpy.info).toHaveBeenCalled();
  });

  it('should show checkout form when toggled', () => {
    cartService.addToCart(mockProduct, 1, mockProduct.types[0]);
    fixture.detectChanges();
    component.toggleCheckout();
    fixture.detectChanges();
    expect(component.showCheckout).toBeTrue();
  });

  it('should warn when trying to checkout empty cart', () => {
    component.toggleCheckout();
    expect(notificationSpy.warning).toHaveBeenCalledWith('Your cart is empty');
    expect(component.showCheckout).toBeFalse();
  });

  it('should validate checkout form - invalid when empty', () => {
    expect(component.isFormValid).toBeFalse();
  });

  it('should validate checkout form - invalid when name too short', () => {
    component.checkoutData = { fullName: 'AB', address: '123 Main St', city: 'NY', creditCard: '1234567890123456' };
    expect(component.isFormValid).toBeFalse();
  });

  it('should validate checkout form - invalid credit card', () => {
    component.checkoutData = { fullName: 'John Doe', address: '123 Main St', city: 'NY', creditCard: '123' };
    expect(component.isFormValid).toBeFalse();
  });

  it('should validate checkout form - valid', () => {
    component.checkoutData = {
      fullName: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      creditCard: '1234567890123456'
    };
    expect(component.isFormValid).toBeTrue();
  });

  it('should not submit invalid form', () => {
    component.checkoutData = { fullName: '', address: '', city: '', creditCard: '' };
    component.onCheckout();
    expect(notificationSpy.error).toHaveBeenCalled();
  });

  it('should clear cart and navigate on successful checkout', () => {
    cartService.addToCart(mockProduct, 1, mockProduct.types[0]);
    component.checkoutData = {
      fullName: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      creditCard: '1234567890123456'
    };
    component.onCheckout();
    expect(cartService.getItems().length).toBe(0);
    expect(notificationSpy.success).toHaveBeenCalled();
  });
});
