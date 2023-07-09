import { Component, OnInit } from '@angular/core';
import { announcements } from '../../components/constants/announcements';

@Component({
  selector: 'app-flos-carmeli',
  templateUrl: './flos-carmeli.component.html',
  styleUrls: ['./flos-carmeli.component.css'],
})
export class FlosCarmeliComponent implements OnInit {
  announcements: string[] = announcements;
  constructor() {}

  ngOnInit(): void {}
}
