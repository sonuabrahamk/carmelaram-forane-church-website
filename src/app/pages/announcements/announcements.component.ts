import { Component, OnInit, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AnnouncementContentComponent } from 'src/app/components/announcement-page/announcement-content/announcement-content.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public rowData: any;
  gridApiActive: any;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'content',
      suppressSizeToFit: true,
      flex: 1,
      autoHeight: true,
      cellRenderer: AnnouncementContentComponent,
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
    this.rowData = [
      {
        content:
          'Heading of the Announcement 1 | This is the content of the announcement 1.',
      },
      {
        content:
          'Heading of the Announcement 2 | This is the content of the announcement 2.',
      },
    ];
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  onSearchChange(event: any): void {
    this.gridApiActive.setQuickFilter(event.target.value);
  }
}
