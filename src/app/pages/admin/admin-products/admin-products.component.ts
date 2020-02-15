import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../products/product.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(public productService: ProductService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productService.loadProducts()
      .subscribe((result) => {
        this.productList = this.productService.getProducts();
      });
    this.productService.productListUpdated
      .subscribe(() => {
        this.productList = this.productService.getProducts();
      });
  }

  removeProduct(product_id) {
    this.productService.deleteProduct(product_id);
  }

  onViewProduct(product_id: number) {
    this.router.navigate([`../edit-product/${product_id}`], { relativeTo: this.activatedRoute });
  }
}
