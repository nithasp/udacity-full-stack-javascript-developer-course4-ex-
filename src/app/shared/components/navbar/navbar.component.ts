import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  title = 'MyStore';
  cartCount = 0;
  mobileMenuOpen = false;
  menuClosing = false;
  private cartSub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  toggleMobileMenu(): void {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.menuClosing = false;
      this.mobileMenuOpen = true;
    }
  }

  closeMobileMenu(): void {
    if (!this.mobileMenuOpen || this.menuClosing) return;
    this.menuClosing = true;
  }

  onMenuAnimationDone(event: AnimationEvent): void {
    if (this.menuClosing && event.target === event.currentTarget) {
      this.mobileMenuOpen = false;
      this.menuClosing = false;
    }
  }
}
