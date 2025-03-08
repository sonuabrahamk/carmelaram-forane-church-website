import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diocese',
  templateUrl: './diocese.component.html',
  styleUrls: ['./diocese.component.css'],
})
export class DioceseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  readText: string = 'Read More';
  readIcon: string = 'down';

  readBtnClick(): void {
    if (this.readText === 'Read More') {
      document.getElementById('contentSection')?.classList.add('readMore');
      this.readText = 'Read Less';
      this.readIcon = 'up';
    } else {
      document.getElementById('contentSection')?.classList.remove('readMore');
      this.readText = 'Read More';
      this.readIcon = 'down';
    }
  }
}
