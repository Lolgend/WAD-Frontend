import { Injectable, EventEmitter } from '@angular/core';
import { Product } from "../pages/products/product.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productListUpdated = new EventEmitter<void>();
  products: Product[] = [];

  constructor(public httpClient: HttpClient) { }

  loadProducts() {
    return this.httpClient.get<Product[]>
      (`${APIEndpoint}/api/products`)
      .pipe(map((products) => {
        this.products = products;
        return products;
      }, (error) => {
        console.log("Error")
      }));
  };

  getProducts() {
    return this.products.slice();
  }

  getProduct(product_id: number) {
    for (let product of this.products) {
      if (product.product_id == product_id) {
        return product
      }
    }
  }

  addProduct(newProduct) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    }

    this.httpClient.post<Product>
      (`${APIEndpoint}/api/friends`, { info: newProduct }, options)
      .subscribe((respond) => {
        this.products.push(respond);
        this.productListUpdated.emit();
      })
  }

  deleteProduct(product_id) {
    this.httpClient.delete<{ success: boolean }>
      (`${APIEndpoint}/api/products/${product_id}`)
      .subscribe((respond) => {
        if (respond.success) {
          this.loadProducts().subscribe(() => {
            this.productListUpdated.emit();
          })
        }
      })
  }

  updateProduct(updateInfo: Product) {
    const product_id = updateInfo.product_id;
    delete updateInfo['product_id'];
    return this.httpClient.put<{ success: boolean }>
      (`${APIEndpoint}/api/products/${product_id}`, { info: updateInfo })
      .pipe(map(
        (result) => {
          return (result.success == true);
        },
        (error) => {
          console.log(error);
          return false;
        }
      ));
  }


}
