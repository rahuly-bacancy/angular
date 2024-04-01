import { Component, EventEmitter, Output } from '@angular/core';
import { ProductElement } from '../interface/product-details';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  @Output() productAddEvent = new EventEmitter<ProductElement>();

  onAddproduct() {
    this.productAddEvent.emit({
      name: this.productName,
      price: this.productPrice,
      description: this.productDescription
    });
  }
}
