import { Component, OnInit } from '@angular/core';
import { Product } from "../../../models/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product 

  constructor(public route: ActivatedRoute, public productsService: ProductService, public router: Router, public cartService: CartService) { }

  ngOnInit() {
    const product_id = this.route.snapshot.params['product_id'];

    const product = this.productsService.getProduct(product_id);

    if (product != undefined){
      this.selectedProduct = product
    } else {
      this.router.navigate(['/not-found'])
    }
  }

  addProductToCart(product) {
    this.cartService.addProductsToCart(product);
  }

}
