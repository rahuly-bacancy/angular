import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  addProductEvent = new EventEmitter();

  addProduct() {
    this.addProductEvent.emit({
      name: this.productName,
      price: this.productPrice,
      desciption: this.productDescription
    });
  }
}
