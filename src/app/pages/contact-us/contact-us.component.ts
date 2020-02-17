import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { EnquiryService } from "../../services/enquiry.service";
import { Enquiry } from 'src/app/models/enquiry.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submitted: boolean = false;
  contactForm: FormGroup;

  constructor(public enquiryService: EnquiryService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
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

  onSubmit(name: string, email: string, category: string, message: string) {
    this.submitted = true;
    this.enquiryService.addEnquiry(
      new Enquiry(0, name, email, category, message, "UNREAD", null)
    );
  }

  onReset() {
    this.submitted = false;
    ; this.contactForm.reset({
    });
  }

}
