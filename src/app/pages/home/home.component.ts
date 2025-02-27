import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products = [
    {name: 'Product 1', price: 100},
    {name: 'Product 2', price: 200},
    {name: 'Product 3', price: 300},
    {name: 'Product 4', price: 400},
  ]
}
