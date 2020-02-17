import { Component, OnInit } from '@angular/core';
import { Category } from "../../../models/category.model";
import { CategoryService } from "../../../services/category.service";
import { ProductService } from "../../../services/product.service";
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  categories: Category[] = [];
  productForm: FormGroup;

  constructor(public categoryService: CategoryService, public productService: ProductService) { }

  ngOnInit() {
    this.categoryService.loadCategories()
      .subscribe((result) => {
        this.categories = this.categoryService.getCategories();
      });

    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.blankSpaces]),
      brand: new FormControl(null, [Validators.required, this.blankSpaces]),
      category: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, this.blankSpaces]),
      imageURL: new FormControl(null, [Validators.required, this.blankSpaces])
    })
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.length != 0 && control.value.trim().length == 0) {
      return { blankSpaces: true };
    }
    return null;
  };

  addProduct(name: string, brand: string, category: string, price: number, description: string, imageURL: string ) {
    this.productService.addProduct(
      new Product(0, name,  description, brand,  price, category, imageURL)
    );
    alert("Product Added!")
  };

}
