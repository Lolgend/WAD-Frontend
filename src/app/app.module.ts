import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FindPipe } from './find.pipe';
import { HoverEffectsDirective } from './hover-effects.directive';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchPipe } from './search.pipe';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminEnquiriesComponent } from './pages/admin/admin-enquiries/admin-enquiries.component';
import { EditProductsComponent } from './pages/admin/admin-products/edit-products/edit-products.component';
import { EnquiriesDetailComponent } from './pages/admin/admin-enquiries/enquiries-detail/enquiries-detail.component';
import { AdminAddProductComponent } from './pages/admin/admin-add-product/admin-add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent,
    FindPipe,
    HoverEffectsDirective,
    ProductDetailComponent,
    NotFoundComponent,
    CartComponent,
    SearchPipe,
    AdminLoginComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminEnquiriesComponent,
    EditProductsComponent,
    EnquiriesDetailComponent,
    AdminAddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
