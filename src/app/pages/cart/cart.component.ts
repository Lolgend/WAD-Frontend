import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productInCart: Product[] = [];
  totalPrice: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.productInCart = this.cartService.getProductsInCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

}
