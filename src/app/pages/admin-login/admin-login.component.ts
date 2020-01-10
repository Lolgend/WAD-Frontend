import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.blankSpaces]),
      password: new FormControl(null, [Validators.required, this.blankSpaces])
    })
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.length != 0 && control.value.trim().length == 0) {
      return { blankSpaces: true };
    }
    return null;
  }
}
