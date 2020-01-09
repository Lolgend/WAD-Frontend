import { Component, OnInit } from '@angular/core';
import { Product } from "./product.model";
import { ProductService } from "../../services/product.service";
import { CategoryService } from "../../services/category.service";
import { Category } from './category.model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  categoryFilter = [];
  brandFilter = [];
  searchTerm: string;

  constructor(public productService: ProductService, public categoryService: CategoryService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getCategories();
    this.route.params.subscribe(params => {
      this.searchTerm = params['searchTerm'];
    });
  }

  onCheckBoxChange(event, value) {
    if (event.path[2].id == 'categoriesfilter') {
      if (event.target.checked) {
        this.categoryFilter.push(event.target.value)
      } else if (!event.target.checked) {
        this.categoryFilter.splice(this.categoryFilter.indexOf(event.target.value), 1)
      }
    } else if (event.path[2].id == 'brandsfilter') {
      if (event.target.checked) {
        this.brandFilter.push(event.target.value)
      } else if (!event.target.checked) {
        this.brandFilter.splice(this.brandFilter.indexOf(event.target.value), 1)
      }
    }

  }

  onViewDetail(product_id: number) {
    this.router.navigate(['/product-detail', product_id]);
  }
}
