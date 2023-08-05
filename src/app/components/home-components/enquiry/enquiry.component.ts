import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  private url = 'https://carmelaramforanechurch.com/snippets/emailer.php';
  firstName: string | any;
  emailId: string | any;
  contactNo: number | any;
  category: string | null = null;
  comment: string | any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    let toEmail: string;
    if (this.category === 'Office') {
      toEmail = 'info@carmelaramforanechurch.com';
    } else if (this.category === 'Catechism') {
      toEmail = 'info@carmelaramforanechurch.com';
    } else if (this.category === 'Carmel Mercy Home') {
      toEmail = 'info@carmelaramforanechurch.com';
    } else if (this.category === 'Parish Hall') {
      toEmail = 'info@carmelaramforanechurch.com';
    } else {
      toEmail = 'info@carmelaramforanechurch.com';
    }

    const payload = {
      firstName: this.firstName,
      emailId: this.emailId,
      contactNo: this.contactNo,
      category: toEmail,
      message: this.comment,
    };

    this.http.post(this.url, payload).subscribe((data) => {
      alert(data);
    });
  }
}
