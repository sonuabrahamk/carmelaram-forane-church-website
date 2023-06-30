import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { eventsData } from 'src/app/components/constants/events-data';
import { DateElementComponent } from 'src/app/components/events-page/date-element/date-element.component';
import { EventContentComponent } from 'src/app/components/events-page/event-content/event-content.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public rowData: any;
  gridApiActive: any;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'date',
      suppressSizeToFit: true,
      sort: 'desc',
      width: 100,
      cellRenderer: DateElementComponent,
    },
    {
      field: 'title',
      valueGetter(params) {
        return params.data.title + '|' + params.data.organised_by;
      },
      flex: 1,
      wrapText: true,
      autoHeight: true,
      cellRenderer: EventContentComponent,
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: false,
    filter: false,
    resizable: false,
  };

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.gridApiActive = params.api;
    this.rowData = eventsData;
  }

  onSearchChange(event: any): void {
    this.gridApiActive.setQuickFilter(event.target.value);
  }
}
