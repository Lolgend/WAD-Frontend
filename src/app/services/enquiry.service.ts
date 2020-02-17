import { Injectable, EventEmitter } from '@angular/core';
import { Enquiry } from "../models/enquiry.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  enquiriesUpdated = new EventEmitter<void>();
  enquiries: Enquiry[] = [];

  constructor(public httpClient: HttpClient) { }

  loadEnquiries() {
    return this.httpClient.get<Enquiry[]>
      (`${APIEndpoint}/api/enquiries`)
      .pipe(map((enquiries) => {
        this.enquiries = enquiries;
        return enquiries;
      }, (error) => {
        console.log("Error")
      }));
  };

  getEnquiries() {
    return this.enquiries.slice();
  }

  getEnquiry(enquiry_id: number) {
    for (let enquiry of this.enquiries) {
      if (enquiry.enquiry_id == enquiry_id) {
        return enquiry
      }
    }
  }

  updateEnquiry(updateInfo: Enquiry) {
    const enquiry_id = updateInfo.enquiry_id;
    delete updateInfo['enquiry_id'];
    return this.httpClient.put<{ success: boolean }>
      (`${APIEndpoint}/api/enquiries/${enquiry_id}`, { info: updateInfo })
      .pipe(map(
        (result) => {
          return (result.success == true);
        },
        (error) => {
          console.log(error);
          return false;
        }
      ));
  }

  addEnquiry(newEnquiry) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    }

    this.httpClient.post<Enquiry>
      (`${APIEndpoint}/api/enquiries`, { info: newEnquiry }, options)
      .subscribe((respond) => {
        this.enquiries.push(respond);
        this.enquiriesUpdated.emit();
      })
  }

  deleteEnquiry(enquiry_id) {
    this.httpClient.delete<{ success: boolean }>
      (`${APIEndpoint}/api/enquiries/${enquiry_id}`)
      .subscribe((respond) => {
        if (respond.success) {
          this.loadEnquiries().subscribe(() => {
            this.enquiriesUpdated.emit();
          })
        }
      })
  }
}
