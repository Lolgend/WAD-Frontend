import { Injectable, EventEmitter } from '@angular/core';
import { Product } from "../pages/products/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productAdded = new EventEmitter<void>();

  products: Product[] = [
    new Product("Pixel 4 XL", "Pixel 4 is the phone made the Google way. Its camera takes the perfect shot every time, even when it’s dark outside. The Google Assistant helps you do things like control your phone with just your voice. Pixel 4 is also the first phone with Motion Sense, letting you use gestures to get things done without having to touch your phone. Best of all, it’s built around the Google software you know and love, which is always getting better.", "Google", 1119, "Phone", "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl2-.jpg"),
    new Product("Pixel 3a", "Pixel 3a is Google's Premium entry smartphone. The phone has Pixel's nightsight camera technology that takes pictures in dark without flash. Save your photos and videos with free unlimited storage in high quality with Google Photos. Pixel 3a's battery lasts up to 30 hours. Pixel’s Adaptive Battery learns your favourite apps and reduces power to those you rarely use. Pixel 3a also has fast charging feature. Enjoy up to 7 hours of use on a 15-minute charge with the 18 W adaptor included.", "Google", 659, "Phone", "https://cdn.hachi.tech/assets/images/product_images_thumb/8a35f70bf46e4a7ed7bc2c712b56bba4.png"),
    new Product("Pixel 3a XL", "Pixel 3a is Google's Premium entry smartphone. The phone has Pixel's nightsight camera technology that takes pictures in dark without flash. Save your photos and videos with free unlimited storage in high quality with Google Photos. Pixel 3a's battery lasts up to 30 hours. Pixel’s Adaptive Battery learns your favourite apps and reduces power to those you rarely use. Pixel 3a also has fast charging feature. Enjoy up to 7 hours of use on a 15-minute charge with the 18 W adaptor included.", "Google", 779, "Phone", "https://cdn.hachi.tech/assets/images/product_images_thumb/8a35f70bf46e4a7ed7bc2c712b56bba4.png"),
    new Product("iPhone XS Max", "All-new Depth Control cameras let you adjust focus of the photo after you shoot Support dual SIM functionality Powerful A12 Bionic chip with next-generation Neural Engine Rated IP68 dust and water resistance * Please note that most of our products come in sealed boxes. However, certain import devices must be opened and activated by our suppliers before they can be sold internationally, and in those cases the device may not be sealed.", "Apple", 1629, "Phone", "https://cdn.hachi.tech/assets/images/product_images_thumb/47d7d349b743e77772ff3b30fe9d78ca.png"),
    new Product("iPhone 8", "iPhone 8 introduces an all‐new glass design. The world’s most popular camera, now even better. The smartest, most powerful chip ever in a smartphone. Wireless charging that’s truly effortless. And augmented reality experiences never before possible. iPhone 8. A new generation of iPhone.", "Apple", 899, "Phone", "https://cdn.hachi.tech/assets/images/product_images_thumb/47d7d349b743e77772ff3b30fe9d78ca.png"),
    new Product("Galaxy Note 10", "The Note 10 has a 6.3-inch AMOLED display with a Full HD resolution, coming in at 2280 x 1080 pixels, with 401 pixels per inch. It includes HDR10+ technology, and considering that Samsung hasn't opted for a QHD display here we're impressed with how the display looks.", "Samsung", 1398, "Phone", "https://cdn.hachi.tech/assets/images/product_images_thumb/410f2b90609af7ec56a746681b0a24f3.png"),
    new Product("Surface Pro 7", "The Microsoft 12.3 Multi-Touch Surface Pro 7 combines the portability of a tablet with the performance of a laptop thanks to its 10th Gen Intel Core processor Wi-Fi 6 (802.1ax) connectivity and the USB Type-C port. Weighing just 1.74 pounds and measuring just 0.33 thin the Surface Pro 7 features a magnesium design with hidden perimeter venting. Use the multi-position Kickstand and the Surface Pro Type Cover (sold separately) to turn the Surface Pro into a laptop.", "Microsoft", 1388, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/aa7a363ada1f3fa56977c85eb1a72abf.png"),
    new Product("MacBook Air", "The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps and all-day battery life. It’s thin, light and durable enough to take everywhere you go — and powerful enough to do everything once you get there. ", "Apple", 1178, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/f2b56ca09f6e656d5946f031ba31ec8b.png"),
    new Product("MacBook Pro", "MacBook Pro features a new quad-core Intel processor for up to 90 percent faster performance.A brilliant and colorful. Retina display with True Tone technology for a more comfortable viewing experience. Touch ID. The latest Apple-designed keyboard. And dynamic, contextual controls with Touch Bar. So you can take productivity to the next level.", "Apple", 2899, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/4f36991f45dce84b5b0e4eb5652cb92a.png"),
    new Product("Razer Blade 15", "The new Razer Blade 15 (Select Advanced Model) is now available with the world’s first optical laptop switches in a gaming laptop. All models have options for the latest 6-Core Intel® Core™ processors and NVIDIA® GeForce RTX™ graphics, combined with ample memory and fast storage options. The Base Model features a Full HD display up to 144Hz, while the Advanced Model offers Full HD panels up to 240Hz or 4K Touch options, including a new OLED panel for vibrant colors and deep blacks. The precision crafted aluminum chassis is compact and durable, while remaining as thin as 0.70-inch in select models.", "Razer", 3839, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/e95d053aa63cb33dc2f1cec89c8d2cc1.png"),
    new Product("ThinkPad 13s", "Designed for style, engineered for business The ThinkBook 13s features a sleek slim design with its mineral gray all-aluminum chassis and narrow bezel display. Log in or boot up in a flash thanks to the integrated fingerprint reader on the power button. This 13-inch laptop offers more than just good looks-it delivers speedy response times with its solid-state drive, default discrete graphics, and hot keys for Skype calls. What's more, it also boasts Dolby Audio with Harman speakers.", "Lenovo", 1749, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/8c7065d2b494aef0797927afcdcdae64.png"),
    new Product("ThinkPad E490s", "The ThinkPad E490s laptop boasts a sleek metallic design, two color options, and a narrow borderless display—all of which are sure to impress. What’s more, the durable construction and powerful performance with the latest Intel® CPUs, blazing-fast SSD options, and AMD discrete graphics make this the perfect choice for professionals on the go.", "Lenovo", 1689, 'Laptop', "https://cdn.hachi.tech/assets/images/product_images_thumb/9750a065735686f678d7e3c4a2c51921.png")
  ]

  getProducts() {
    return this.products.slice();
  }

  constructor() { }
}
