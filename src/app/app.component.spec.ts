import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CartService } from './core/services/cart.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CommonModule],
      declarations: [AppComponent],
      providers: [CartService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title MyStore', () => {
    expect(component.title).toBe('MyStore');
  });

  it('should render brand name in navbar', () => {
    const brand = fixture.nativeElement.querySelector('.navbar__brand');
    expect(brand.textContent).toContain('MyStore');
  });

  it('should render Products link', () => {
    const links = fixture.nativeElement.querySelectorAll('.navbar__link');
    const productsLink = Array.from(links).find(
      (l: any) => l.textContent.includes('Products')
    );
    expect(productsLink).toBeTruthy();
  });

  it('should render Cart link', () => {
    const links = fixture.nativeElement.querySelectorAll('.navbar__link');
    const cartLink = Array.from(links).find(
      (l: any) => l.textContent.includes('Cart')
    );
    expect(cartLink).toBeTruthy();
  });

  it('should start with cart count 0', () => {
    expect(component.cartCount).toBe(0);
  });

  it('should not show badge when cart is empty', () => {
    const badge = fixture.nativeElement.querySelector('.navbar__badge');
    expect(badge).toBeFalsy();
  });

  it('should update cart count when items added', () => {
    const product = {
      _id: 'p1',
      name: 'Test',
      category: 'Test',
      price: 10,
      image: '',
      description: '',
      preview_img: [],
      types: [],
      reviews: [],
      overall_rating: 5
    };
    cartService.addToCart(product, 3);
    expect(component.cartCount).toBe(3);
  });

  it('should toggle mobile menu', () => {
    expect(component.mobileMenuOpen).toBeFalse();
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBeTrue();
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen).toBeFalse();
  });

  it('should close mobile menu', () => {
    component.mobileMenuOpen = true;
    component.closeMobileMenu();
    expect(component.mobileMenuOpen).toBeFalse();
  });

  it('should contain a router-outlet', () => {
    const outlet = fixture.nativeElement.querySelector('router-outlet');
    expect(outlet).toBeTruthy();
  });
});
