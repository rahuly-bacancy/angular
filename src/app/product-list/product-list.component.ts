import { Component, Input } from '@angular/core';
import { ProductElement } from '../interface/product-details';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() element!: ProductElement;

  // constructor() {
  //   this.element = { name: "", price: 0, description: "" }
  // }
}
