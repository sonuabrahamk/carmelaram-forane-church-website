import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-flos-carmeli-actions',
  templateUrl: './flos-carmeli-actions.component.html',
  styleUrls: ['./flos-carmeli-actions.component.css'],
})
export class FlosCarmeliActionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  filename: string | any;

  agInit(params: ICellRendererParams): void {
    this.filename = params.value;
  }
}
