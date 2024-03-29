import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  @Input('productElement') element: { price: number; name: string; description: string; } | undefined;
}
