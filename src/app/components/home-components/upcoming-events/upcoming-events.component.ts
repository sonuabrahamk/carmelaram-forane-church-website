import { Component, OnInit } from '@angular/core';
import { eventsData } from '../../constants/events-data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  eventsData = eventsData;

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 200,
    autoplay: true,
    pullDrag: true,
    mouseDrag: true,
    touchDrag: true,
    nav: true,
    navText: [
      "<i class='fa-solid fa-backward'></i>",
      "<i class='fa-solid fa-forward'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
