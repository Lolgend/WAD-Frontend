import { Component, OnInit, EventEmitter } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchBar = new EventEmitter<string>();

  amtOfProduct: number;

  constructor(public cartService: CartService, public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.amtOfProduct = this.cartService.getCartAmount();
    this.cartService.productAdded.subscribe(
      () => {
        this.amtOfProduct = this.cartService.getCartAmount();
      }
    )
  }

  onSearch(searchTerm: string) {
    this.searchBar.emit(searchTerm);
    this.router.navigate(['/products', searchTerm]);
  }

  onLogout() {
    this.authService.logout();
  }
}
