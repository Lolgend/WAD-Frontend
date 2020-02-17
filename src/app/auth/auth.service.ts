import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    this.loggedIn = (username == "wadca2user" && password == "password123");
    if (this.loggedIn) {
      this.router.navigate(["/admin"]);
    }
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(["/"]);
  }

  isAuthenticated() {
    const promise = new Promise (
      (resolve, reject) => {
        setTimeout(() => {resolve(this.loggedIn)}, 500)
      }
    );
    return promise;
  }
}
