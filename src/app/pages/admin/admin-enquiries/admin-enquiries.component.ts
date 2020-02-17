import { Component, OnInit } from '@angular/core';
import { EnquiryService } from "../../../services/enquiry.service";
import { Enquiry } from "../../../models/enquiry.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-admin-enquiries',
  templateUrl: './admin-enquiries.component.html',
  styleUrls: ['./admin-enquiries.component.css']
})
export class AdminEnquiriesComponent implements OnInit {

  enquiryList: Enquiry[] = [];
  categoriesFilter: string;

  constructor(public enquiryService: EnquiryService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.enquiryService.loadEnquiries()
      .subscribe((result) => {
        this.enquiryList = this.enquiryService.getEnquiries();
      });
    this.enquiryService.enquiriesUpdated
      .subscribe(() => {
        this.enquiryList = this.enquiryService.getEnquiries();
      });
  }

  onViewEnquiry(enquiry_id: number) {
    this.router.navigate([`../view-enquiry/${enquiry_id}`], { relativeTo: this.activatedRoute });
  }

  deleteEnquiry(enquiry_id: number) {
    this.enquiryService.deleteEnquiry(enquiry_id);
  }

}
