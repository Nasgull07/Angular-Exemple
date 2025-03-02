import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  private updateCartCount() {
    const totalQuantity = this.cart.reduce((acc, product) => acc + (product.quantity || 1), 0);
    this.cartCount.next(totalQuantity); 
  }

  addToCart(product: any) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cart = [...this.cart];
    this.updateCartCount();
    console.log('Producto añadido:', product);
  }

  getCart(){
    return [...this.cart];
  }
  getTotal() {
    return this.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  getCartItems() {
    return this.cart;
  }

  increaseQuantity(product: any) {
    const index = this.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cart[index] = { ...this.cart[index], quantity: (this.cart[index].quantity || 0) + 1 };
      this.cart = [...this.cart]; 
    }
    this.updateCartCount();
  }

  decreaseQuantity(product: any) {
    const index = this.cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      
      if (this.cart[index].quantity > 1) {
        this.cart[index] = { ...this.cart[index], quantity: this.cart[index].quantity - 1 };
      } else {
        this.cart.splice(index, 1); 
      }
      this.cart = [...this.cart]; 
    }
    this.updateCartCount();
  }
}
