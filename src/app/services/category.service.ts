import { Injectable} from '@angular/core';
import { Category } from "../pages/products/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category ('Laptop', 'Laptop is a laptop'),
    new Category ('Phone', 'Phone is a Phone'),
    new Category ('Television', 'Television is a Television')
  ]

  getCategories() {
    return this.categories.slice();
  }

  constructor() { }

  
}
