import { Component, OnInit, ViewChild } from '@angular/core';
import { announcements } from '../../components/constants/announcements';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public announcementsList: string[] = announcements;
}
