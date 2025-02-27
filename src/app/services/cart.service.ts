import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
    console.log('Producto añadido:', product);
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }

  getCartItems() {
    return this.cart;
  }
}
