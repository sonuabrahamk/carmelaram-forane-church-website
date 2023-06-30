import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-date-element',
  templateUrl: './date-element.component.html',
  styleUrls: ['./date-element.component.css'],
})
export class DateElementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() data: Date | undefined;

  agInit(params: ICellRendererParams): void {
    this.data = params.value;
  }

  monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  getMonthName(val: number | undefined): string {
    if (val === undefined) {
      return this.monthNames[0];
    } else {
      return this.monthNames[val];
    }
  }
}
