import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component"
import { ProductsComponent } from "./pages/products/products.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ProductDetailComponent } from "./pages/products/product-detail/product-detail.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AdminLoginComponent } from "./pages/admin-login/admin-login.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AdminEnquiriesComponent } from "./pages/admin/admin-enquiries/admin-enquiries.component";
import { AdminProductsComponent } from "./pages/admin/admin-products/admin-products.component";
import { EditProductsComponent } from "./pages/admin/admin-products/edit-products/edit-products.component";
import { EnquiriesDetailComponent } from "./pages/admin/admin-enquiries/enquiries-detail/enquiries-detail.component";
import { AdminAddProductComponent } from "./pages/admin/admin-add-product/admin-add-product.component";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:searchTerm', component: ProductsComponent },
  { path: 'product-detail/:product_id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  {
    path: 'admin', canActivate: [AuthGuard], component: AdminComponent,
    children: [
      { path: '', redirectTo: '/admin/(admin:admin-products)', pathMatch: 'full' },
      { path: 'admin-enquiries', component: AdminEnquiriesComponent, outlet: 'admin' },
      { path: 'view-enquiry/:enquiry_id', component: EnquiriesDetailComponent, outlet: 'admin' },
      { path: 'admin-products', component: AdminProductsComponent, outlet: 'admin' },
      { path: 'edit-product/:product_id', component: EditProductsComponent, outlet: 'admin' },
      { path: 'admin-add-product', component: AdminAddProductComponent, outlet: 'admin' }]
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: '/not-found' }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
