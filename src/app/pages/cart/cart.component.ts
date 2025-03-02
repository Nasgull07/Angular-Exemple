import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  increaseQuantity(item: any) {
    this.cartService.increaseQuantity(item);
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    console.log(`${item.name} añadido al carrito ${item.quantity}`);
  }

  decreaseQuantity(item: any) {
    this.cartService.decreaseQuantity(item);
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    console.log(`${item.name} eliminado del carrito`);
  }
}
