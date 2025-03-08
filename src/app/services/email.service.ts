import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = 'https://mailthis.to/carmelaramforanechurch';
  constructor(private http: HttpClient) {}

  SendEmail(input: any) {
    return this.http.post(this.url, input).subscribe((data) => {
      alert(data);
    });
  }
}
