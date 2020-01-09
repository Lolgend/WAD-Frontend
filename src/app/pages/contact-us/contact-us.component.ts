import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submitted: boolean = false;
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup ({
      fullname: new FormControl(null, [Validators.required, this.blankSpaces]),
      email: new FormControl(null, [Validators.required, this.blankSpaces, Validators.email]),
      category: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required, this.blankSpaces])
    })
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.length != 0 && control.value.trim().length == 0) {
      return { blankSpaces: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
  }

  onReset() {
    this.submitted = false;
    ; this.contactForm.reset({
    });
  }

}
