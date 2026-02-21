import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../features/products/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<{ product: Product; quantity: number }>();

  selectedQuantity = 1;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  onAddToCart(): void {
    this.addToCart.emit({
      product: this.product,
      quantity: this.selectedQuantity
    });
    this.selectedQuantity = 1;
  }

  get ratingStars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
