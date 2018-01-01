import { Component } from '@angular/core';
import {ProductService} from './product.service';
declare var owlCarousel: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor (private products: ProductService) {
    this.products.search();

  }
  injectScript() {
    new owlCarousel();
  }
}
