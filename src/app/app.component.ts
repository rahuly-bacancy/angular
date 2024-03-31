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
      price: 10, name: "Product A", description: "This is the product details for Product A"
    }
  ];


  onAddproduct(event: ProductElement) {
    this.productElements.push({
      name:event.name,
      price:event.price,
      description:event.description
    });
  }

}
