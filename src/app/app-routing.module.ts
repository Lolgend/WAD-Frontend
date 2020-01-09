import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component"
import { ProductsComponent } from "./pages/products/products.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ProductDetailComponent } from "./pages/products/product-detail/product-detail.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CartComponent } from "./pages/cart/cart.component";


const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:searchTerm', component: ProductsComponent},
  {path: 'product-detail/:product_id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: '/not-found'}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
