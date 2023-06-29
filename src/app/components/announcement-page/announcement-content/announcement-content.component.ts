import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-announcement-content',
  templateUrl: './announcement-content.component.html',
  styleUrls: ['./announcement-content.component.css'],
})
export class AnnouncementContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  heading: any;
  content: any;

  agInit(params: ICellRendererParams): void {
    let announcement = params.value.split('|');
    this.heading = announcement[0];
    this.content = announcement[1];
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
