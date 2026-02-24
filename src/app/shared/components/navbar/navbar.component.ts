import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';

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
  isLoggedIn = false;
  private cartSub!: Subscription;
  private authSub!: Subscription;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });

    this.authSub = this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
    this.authSub.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
    this.notification.success('You have been logged out.');
    this.closeMobileMenu();
    this.router.navigate(['/auth/login']);
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

  /** Close the mobile menu when the user clicks outside the navbar. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.mobileMenuOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.closeMobileMenu();
    }
  }

  /** Close the mobile menu on Escape key press. */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
