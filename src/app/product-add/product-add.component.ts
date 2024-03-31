import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('productName') productname!: ElementRef;

  addProduct() {
    this.addProductEvent.emit({
      name: this.productname.nativeElement.value,
      price: this.productPrice,
      description: this.productDescription
    });
  }
}
