import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductType } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  selectedQuantity = 1;
  selectedType: ProductType | undefined;
  selectedImage = '';
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          if (product) {
            this.selectedImage = product.image;
            this.selectedType = product.types[0];
          }
          this.loading = false;
        },
        error: () => {
          this.notificationService.error('Failed to load product details');
          this.loading = false;
        }
      });
    }
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  selectType(type: ProductType): void {
    this.selectedType = type;
    this.selectedImage = type.image;
  }

  onQuantityChange(qty: number): void {
    this.selectedQuantity = qty;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.selectedQuantity, this.selectedType);
      this.notificationService.success(
        `${this.selectedQuantity}x ${this.product.name} added to cart!`,
        'Added to Cart'
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  get currentPrice(): number {
    return this.selectedType?.price ?? this.product?.price ?? 0;
  }

  get ratingStars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
