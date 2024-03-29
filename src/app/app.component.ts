import { Component } from '@angular/core';
interface ProductElement {
  price: number;
  name: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productElements: ProductElement[] = [{price:23.5,name:"Product A",description:"This is my first product"}];

  onAddproduct(productData: ProductElement) {
    console.log("productData",productData);
    this.productElements.push({
      name: productData.name,
      description: productData.description,
      price: productData.price
    });
  }
}
