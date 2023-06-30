import { Component, OnInit } from '@angular/core';
import { eventsData } from '../../constants/events-data';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  eventsData = eventsData;
}
