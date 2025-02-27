import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(`${product.name} añadido al carrito`);
  }
  navigateToProductDetail(product: any) {
    this.router.navigate([`product/${product.name}`], { state: { product } });
    console.log(`Navegando a ${product.name}`);
  }
}
