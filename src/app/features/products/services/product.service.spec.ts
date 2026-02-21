import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const mockProducts: Product[] = [
    {
      _id: 'prod1',
      name: 'Product 1',
      category: 'Electronics',
      price: 99.99,
      image: 'https://example.com/img1.jpg',
      description: 'First product',
      preview_img: [],
      types: [],
      reviews: [],
      overall_rating: 4.5
    },
    {
      _id: 'prod2',
      name: 'Product 2',
      category: 'Furniture',
      price: 199.99,
      image: 'https://example.com/img2.jpg',
      description: 'Second product',
      preview_img: [],
      types: [],
      reviews: [],
      overall_rating: 5
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch products via HttpClient', () => {
    service.getProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products[0].name).toBe('Product 1');
      expect(products[1].name).toBe('Product 2');
    });

    const req = httpMock.expectOne('data/mockup-data.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should find a product by ID', () => {
    service.getProductById('prod2').subscribe(product => {
      expect(product).toBeTruthy();
      expect(product?.name).toBe('Product 2');
      expect(product?.price).toBe(199.99);
    });

    const req = httpMock.expectOne('data/mockup-data.json');
    req.flush(mockProducts);
  });

  it('should return undefined for a non-existent product ID', () => {
    service.getProductById('nonexistent').subscribe(product => {
      expect(product).toBeUndefined();
    });

    const req = httpMock.expectOne('data/mockup-data.json');
    req.flush(mockProducts);
  });
});
