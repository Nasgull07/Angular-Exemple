import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.product = history.state.product;
    this.Initial();
  }

  Initial() {
    console.log(this.product);
  }
}
