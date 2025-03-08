import { Component, OnInit } from '@angular/core';
import { announcements } from '../constants/announcements';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css'],
})
export class ScrollerComponent implements OnInit {
  announcements: string[] = announcements;
  constructor() {}

  ngOnInit(): void {}
}
