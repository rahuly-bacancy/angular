import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
interface ProductElement {
  price: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  @Output() productAdd = new EventEmitter<ProductElement>();

  @ViewChild('productNameElement') productNameRef: ElementRef | null = null;

  addProduct(productName:HTMLInputElement) {
    console.log(this.productNameRef);
    console.log(this.productNameRef?.nativeElement.value);
    this.productAdd.emit({
      name: productName.value,
      description: this.productDescription,
      price: this.productPrice
    });
  }

}
