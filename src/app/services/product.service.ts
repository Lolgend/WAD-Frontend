import { Injectable, EventEmitter } from '@angular/core';
import { Product } from "../pages/products/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productAdded = new EventEmitter<void>();

  products: Product[] = [
    new Product("Pixel 4 XL", "Pixel 4 is the phone made the Google way. Its camera takes the perfect shot every time, even when it’s dark outside. The Google Assistant helps you do things like control your phone with just your voice. Pixel 4 is also the first phone with Motion Sense, letting you use gestures to get things done without having to touch your phone. Best of all, it’s built around the Google software you know and love, which is always getting better.", "Google", 1119, "Phone", "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl2-.jpg"),
    new Product("Pixel 4 XL", "Pixel 4 is the phone made the Google way. Its camera takes the perfect shot every time, even when it’s dark outside. The Google Assistant helps you do things like control your phone with just your voice. Pixel 4 is also the first phone with Motion Sense, letting you use gestures to get things done without having to touch your phone. Best of all, it’s built around the Google software you know and love, which is always getting better.", "Google", 1119, "Phone", "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl2-.jpg"),
    new Product("G3 15", "Dell gaming machines are engineered with the specific, demanding needs of the gaming audience in mind. From the latest processors to powerful discrete graphics cards, they make every experience more intense and real.", "Dell", 999, 'Laptop', "https://i.dell.com/sites/csimages/Video_Imagery/all/26178-laptops-g5-17-3779-1280x720.jpg"),
    new Product("G3 15", "Dell gaming machines are engineered with the specific, demanding needs of the gaming audience in mind. From the latest processors to powerful discrete graphics cards, they make every experience more intense and real.", "Dell", 999, 'Laptop', "https://i.dell.com/sites/csimages/Video_Imagery/all/26178-laptops-g5-17-3779-1280x720.jpg"),
    new Product("G3 15", "Dell gaming machines are engineered with the specific, demanding needs of the gaming audience in mind. From the latest processors to powerful discrete graphics cards, they make every experience more intense and real.", "Dell", 999, 'Laptop', "https://i.dell.com/sites/csimages/Video_Imagery/all/26178-laptops-g5-17-3779-1280x720.jpg"),
  ]

  getProducts() {
    return this.products.slice();
  }

  constructor() { }
}
