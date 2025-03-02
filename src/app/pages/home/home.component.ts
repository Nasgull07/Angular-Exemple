import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any[] = [];
  private token: string = '';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
 //   this.authService.getAuthToken('your-username', 'your-password').subscribe(response => {
//      this.token = response.access_token;
      this.loadProducts();
 //   }, error => {
//      console.error('Error fetching auth token:', error);
 //   });
  }

  loadProducts() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });


    this.http.get<any[]>('https://fakestoreapi.com/products')

      .subscribe(data => {
        this.products = data;
      }, error => {
        console.error('Error fetching products:', error);
      });
  }

}
