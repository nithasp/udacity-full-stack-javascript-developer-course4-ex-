import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductCardComponent } from './product-card.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { Product } from '../../../features/products/models/product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    _id: 'prod1',
    name: 'Test Headphones',
    category: 'Electronics',
    price: 79.99,
    image: 'https://example.com/img.jpg',
    description: 'Premium wireless headphones with noise cancellation',
    preview_img: ['https://example.com/img.jpg'],
    types: [
      {
        _id: 'type1',
        product_id: 1001,
        color: 'Black',
        quantity: 50,
        price: 79.99,
        stock: 50,
        image: 'https://example.com/img.jpg'
      }
    ],
    reviews: [{ star: 5, comment: 'Great!' }],
    overall_rating: 4.5,
    stock: 50
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ProductCardComponent, TruncatePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive product via @Input', () => {
    expect(component.product.name).toBe('Test Headphones');
    expect(component.product.price).toBe(79.99);
  });

  it('should display product name', () => {
    const name = fixture.nativeElement.querySelector('.product-card__name');
    expect(name.textContent).toContain('Test Headphones');
  });

  it('should display product price', () => {
    const price = fixture.nativeElement.querySelector('.product-card__price');
    expect(price.textContent).toContain('79.99');
  });

  it('should display product image', () => {
    const img = fixture.nativeElement.querySelector('.product-card__image');
    expect(img.src).toContain('example.com/img.jpg');
  });

  it('should display product category', () => {
    const category = fixture.nativeElement.querySelector('.product-card__category');
    expect(category.textContent).toContain('Electronics');
  });

  it('should initialize with quantity 1', () => {
    expect(component.selectedQuantity).toBe(1);
  });

  it('should emit addToCart event with product and quantity', () => {
    spyOn(component.addToCart, 'emit');
    component.selectedQuantity = 3;
    component.onAddToCart();
    expect(component.addToCart.emit).toHaveBeenCalledWith({
      product: mockProduct,
      quantity: 3
    });
  });

  it('should reset quantity after adding to cart', () => {
    component.selectedQuantity = 5;
    component.onAddToCart();
    expect(component.selectedQuantity).toBe(1);
  });

  it('should generate 5 rating stars', () => {
    expect(component.ratingStars.length).toBe(5);
    expect(component.ratingStars).toEqual([1, 2, 3, 4, 5]);
  });

  it('should have a link to product detail page', () => {
    const link = fixture.nativeElement.querySelector('.product-card__image-link');
    expect(link.getAttribute('href')).toContain('/products/prod1');
  });
});
