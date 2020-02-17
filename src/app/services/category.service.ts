import { Injectable } from '@angular/core';
import { Category } from "../models/category.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
  ];

  loadCategories() {
    return this.httpClient.get<Category[]>
      (`${APIEndpoint}/api/categories`)
      .pipe(map((categories) => {
        this.categories = categories;
        return categories;
      }, (error) => {
        console.log("Error")
      }));
  };

  getCategories() {
    return this.categories.slice();
  }

  constructor(public httpClient: HttpClient) { }


}
