import { Component } from '@angular/core';
import { ProductElement } from './interface/product-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productElements: ProductElement[] = [
    {
      price:10,name:"Product A b C",description:"This is the product details for Product A"
    }
  ];


  onAddproduct(productData: ProductElement) {
    this.productElements.push(productData);
  }

}
