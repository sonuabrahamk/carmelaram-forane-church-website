import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isNavbarCollapsed: boolean = true;

  contactClick(): void {
    document
      .getElementById('footer')
      ?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  kalotsavamClick(): void {
    window.location.href = 'https://kalotsavam.cbcmandya.com';
  }
}
