import { Component, OnInit } from '@angular/core';
import { Product } from "./product.model";
import { ProductService } from "../../services/product.service";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories = [];

  constructor(public productService: ProductService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getCategories();

  }

  onCheckBoxChange(event, value) {
    if (event.target.checked) {
      console.log("Checked " + event.target.value)
    } else if (!event.target.checked) {
      console.log("Not checked " + event.target.value)
    }
  }
}
