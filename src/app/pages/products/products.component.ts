import { Component, OnInit } from '@angular/core';
import { Product } from "./product.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
