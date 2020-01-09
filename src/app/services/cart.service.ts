import { Injectable, EventEmitter } from '@angular/core';
import { Product } from "../pages/products/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productAdded = new EventEmitter<void>();

  productInCart: Product[] = [];

  constructor() { }

  getProductsInCart() {
    return this.productInCart.slice();
  }

  addProductsToCart(product) {
    this.productInCart.push(product);
    this.productAdded.emit();
  }

  getCartAmount() {
    let productCount = 0
    for (let product of this.productInCart) {
      productCount += 1;
    }
    return productCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let product of this.productInCart){
      totalPrice += product.price;
    }
    return totalPrice;
  }
}
