import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product 

  constructor(public route: ActivatedRoute, public productsService: ProductService, public router: Router) { }

  ngOnInit() {
    const product_id = this.route.snapshot.params['product_id'];

    const product = this.productsService.getProduct(product_id);
    console.log

    if (product != undefined){
      this.selectedProduct = product
    } else {
      this.router.navigate(['/not-found'])
    }
  }

}
