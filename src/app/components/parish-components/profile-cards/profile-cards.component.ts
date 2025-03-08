import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.css'],
})
export class ProfileCardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() profileImgUrl: string | any;
  @Input() profileName: string | any;
  @Input() profileTitle: string | any;
}
