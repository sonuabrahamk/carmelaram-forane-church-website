import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { AnnouncementContentComponent } from '../../announcement-page/announcement-content/announcement-content.component';

@Component({
  selector: 'app-event-content',
  templateUrl: './event-content.component.html',
  styleUrls: ['./event-content.component.css'],
})
export class EventContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heading: string | undefined;
  content: string | undefined;
  organizer: string | undefined;

  agInit(params: ICellRendererParams): void {
    this.heading = params.data.title;
    this.content = params.data.content;
    this.organizer = params.data.organised_by;
  }
}
