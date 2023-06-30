import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parish',
  templateUrl: './parish.component.html',
  styleUrls: ['./parish.component.css'],
})
export class ParishComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  readText: string = 'More';
  readIcon: string = 'down';

  readBtnClick(): void {
    if (this.readText === 'More') {
      document.getElementById('contentSection')?.classList.add('readMore');
      this.readText = 'Less';
      this.readIcon = 'up';
    } else {
      document.getElementById('contentSection')?.classList.remove('readMore');
      this.readText = 'More';
      this.readIcon = 'down';
    }
  }
}
