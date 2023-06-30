import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('body') private contentBody: ElementRef | any;

  isNavbarCollapsed: boolean = true;

  contactClick(): void {
    alert('clicked');
    this.contentBody.nativeElement.scrollTop =
      this.contentBody.nativeElement.scrollHeight;
  }
}
