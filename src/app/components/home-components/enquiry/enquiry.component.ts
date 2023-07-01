import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  firstName: string | undefined;
  emailId: string | undefined;
  contactNo: number | undefined;
  category: string | null = null;
  comment: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    const payload = {
      firstName: this.firstName,
      emailId: this.emailId,
      contactNo: this.contactNo,
      category: this.category,
      message: this.comment,
    };
    alert(JSON.stringify(payload));
  }
}
