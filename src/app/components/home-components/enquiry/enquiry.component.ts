import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  firstName: string | any;
  emailId: string | any;
  contactNo: number | any;
  category: string | null = null;
  comment: string | any;

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
    alert('Thankyou! We will get back to you soon!');
    window.location.reload();
  }
}
