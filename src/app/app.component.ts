import { Component } from '@angular/core';
import { ProductElement } from './interface/product-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productElements: ProductElement[] = [];
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  onAddproduct() {
    this.productElements.push({
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice
    });
  }

}
