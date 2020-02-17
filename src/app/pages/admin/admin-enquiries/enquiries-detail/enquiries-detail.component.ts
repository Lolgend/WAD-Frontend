import { Component, OnInit } from '@angular/core';
import { Enquiry } from "../../../../models/enquiry.model";
import { ActivatedRoute, Router } from "@angular/router";
import { EnquiryService } from "../../../../services/enquiry.service";
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
  selector: 'app-enquiries-detail',
  templateUrl: './enquiries-detail.component.html',
  styleUrls: ['./enquiries-detail.component.css']
})
export class EnquiriesDetailComponent implements OnInit {

  selectedEnquiry: Enquiry;
  contactForm: FormGroup;
  submitted: boolean = false;
  response: string

  constructor(public route: ActivatedRoute, public router: Router, public enquiryService: EnquiryService, private location: Location) { }

  ngOnInit() {
    const enquiry_id = this.route.snapshot.params['enquiry_id'];
    const enquiry = this.enquiryService.getEnquiry(enquiry_id);

    this.contactForm = new FormGroup({
      response: new FormControl(null, [Validators.required, this.blankSpaces])
    })

    if (enquiry != undefined) {
      this.selectedEnquiry = enquiry;
      this.response = this.selectedEnquiry.response;

      let enquiryInfo = new Enquiry(this.selectedEnquiry.enquiry_id, this.selectedEnquiry.full_name, this.selectedEnquiry.email, this.selectedEnquiry.category, this.selectedEnquiry.message, "READ", this.selectedEnquiry.response);
      this.enquiryService.updateEnquiry(enquiryInfo).subscribe(
        (success) => {
          console.log("Read")
        }
      );
    } else {
      this.router.navigate(['/not-found'])
    }

    if (this.selectedEnquiry.response != null){
      this.submitted = true;
    }
  }

  markUnread() {
    let enquiryInfo = new Enquiry(this.selectedEnquiry.enquiry_id, this.selectedEnquiry.full_name, this.selectedEnquiry.email, this.selectedEnquiry.category, this.selectedEnquiry.message, "UNREAD", this.selectedEnquiry.response);
    this.enquiryService.updateEnquiry(enquiryInfo).subscribe(
      (success) => {
        alert("Marked as Unread!");
        this.location.back();
      }
    );
  }

  blankSpaces(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.length != 0 && control.value.trim().length == 0) {
      return { blankSpaces: true };
    }
    return null;
  }

  sendResponse() {
    let enquiryInfo = new Enquiry(this.selectedEnquiry.enquiry_id, this.selectedEnquiry.full_name, this.selectedEnquiry.email, this.selectedEnquiry.category, this.selectedEnquiry.message, "READ", this.response);
    this.enquiryService.updateEnquiry(enquiryInfo).subscribe(
      (success) => {
        alert("Response Sent!");
        this.submitted = true;
      }
    );
  }

}
