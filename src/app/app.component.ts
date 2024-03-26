import { Component } from '@angular/core';
interface ServerElement {
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
  serverElements: ServerElement[] = [];
  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;

  onAddproduct() {
    this.serverElements.push({
      name: this.productName,
      description: this.productDescription,
      price: this.productPrice
    });
  }

}
