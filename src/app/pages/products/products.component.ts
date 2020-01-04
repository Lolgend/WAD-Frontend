import { Component, OnInit } from '@angular/core';
import { Product } from "./product.model";
import { ProductService } from "../../services/product.service";
import { CategoryService } from "../../services/category.service";
import { Category } from './category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  categoryFilter = [];

  constructor(public productService: ProductService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getCategories();

  }

  onCheckBoxChange(event, value) {
    if (event.target.checked) {
      this.categoryFilter.push(event.target.value)
    } else if (!event.target.checked) {
      this.categoryFilter.splice(this.categoryFilter.indexOf(event.target.value), 1)
    }
  }
}
