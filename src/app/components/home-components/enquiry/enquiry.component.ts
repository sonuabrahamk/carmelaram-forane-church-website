import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  private url = 'https://mailthis.to/carmelaramforanechurch';
  firstName: string | any;
  emailId: string | any;
  contactNo: number | any;
  category: string | null = null;
  comment: string | any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    const payload = {
      firstName: this.firstName,
      emailId: this.emailId,
      contactNo: this.contactNo,
      category: this.category,
      message: this.comment,
    };

    this.http.post(this.url, payload).subscribe((data) => {
      alert(data);
    });
    window.location.reload();
  }
}
