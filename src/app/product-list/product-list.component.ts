import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProductElement } from '../interface/product-details';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() elementList!: ProductElement;
}