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

  @Output('addProductEventAlias') addProductEvent = new EventEmitter<ProductElement>();
  @ViewChild('inputRef') productNameRef!: ElementRef;

  onAddproduct(inputRef: HTMLInputElement) {
    console.log(this.productNameRef.nativeElement.value);
    this.productNameRef.nativeElement.focus();
    this.addProductEvent.emit({
      name: this.productNameRef.nativeElement.value,
      price: this.productPrice,
      description: this.productDescription
    });
  }
}
