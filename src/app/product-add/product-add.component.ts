import { Component, EventEmitter, Output } from '@angular/core';
import { ProductElement } from '../interface/product-details';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  @Output('alisaProductAdd') addProductEvent = new EventEmitter<ProductElement>();

  addProduct(productname: HTMLInputElement) {
    this.addProductEvent.emit({
      name: productname,
      price: this.productPrice,
      description: this.productDescription
    });
  }
}
