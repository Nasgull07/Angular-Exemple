import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true
})
export class NavbarComponent {
  cartCount = 0;
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
