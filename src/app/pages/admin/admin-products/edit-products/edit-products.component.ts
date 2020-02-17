import { Component, OnInit } from '@angular/core';
import { Product } from "../../../../models/product.model";
import { Category } from "../../../../models/category.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../../services/product.service";
import { CategoryService } from "../../../../services/category.service";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  selectedProduct: Product;
  name: string = "";
  brand: string = "";
  description: string = "";
  price: number;
  imageURL: string = "";
  productDetail: FormGroup;
  categories: Category[] = [];

  constructor(public route: ActivatedRoute, public router: Router, public productsService: ProductService, public categoryService: CategoryService) { }

  ngOnInit() {
    const product_id = this.route.snapshot.params['product_id'];
    const product = this.productsService.getProduct(product_id);

    this.categoryService.loadCategories()
      .subscribe((result) => {
        this.categories = this.categoryService.getCategories();
      });

    if (product != undefined) {
      this.selectedProduct = product;
      this.name = this.selectedProduct.name;
      this.brand = this.selectedProduct.brand;
      this.description = this.selectedProduct.description;
      this.price = this.selectedProduct.price;
      this.imageURL = this.selectedProduct.imageURL;
    } else {
      this.router.navigate(['/not-found'])
    }

    this.productDetail = new FormGroup({
      productName: new FormControl(null, [Validators.required, this.blankSpaces]),
      productBrand: new FormControl(null, [Validators.required, this.blankSpaces]),
      productDescription: new FormControl(null, [Validators.required, this.blankSpaces]),
      productPrice: new FormControl(null, [Validators.required]),
      imageURL: new FormControl(null, [Validators.required, this.blankSpaces])
    })
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.length != 0 && control.value.trim().length == 0) {
      return { blankSpaces: true };
    }
    return null;
  }

  onSaveChanges(name, description, brand, price, category, imageURL) {
    let productInfo = new Product(this.selectedProduct.product_id, name, description, brand, price, category, imageURL);
    this.productsService.updateProduct(productInfo).subscribe(
      (success) => {
        if (success) {
          alert("Product Updated");
          this.router.navigate(['/admin']);
        } else {
          alert("Update Failed, Please Try Again");
        }
      }
    )
  }


}
