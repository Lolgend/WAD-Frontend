import { Injectable} from '@angular/core';
import { Category } from "../pages/products/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category ('Laptop', 'Laptop is a laptop'),
    new Category ('Phone', 'Phone is a Phone'),
    new Category ('Tablet', 'Tablet is a Tablet')
  ]

  getCategories() {
    return this.categories.slice();
  }

  constructor() { }

  
}
