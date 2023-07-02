import { Component, OnInit, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AnnouncementContentComponent } from 'src/app/components/announcement-page/announcement-content/announcement-content.component';
import { flosCarmeliData } from 'src/app/components/constants/flos-carmeli-data';
import { FlosCarmeliActionsComponent } from 'src/app/components/flos-carmeli-actions/flos-carmeli-actions.component';
import { IFlosCarmeli } from 'src/app/components/interfaces/IFlosCarmeli';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public rowData: IFlosCarmeli[] | any;
  gridApiActive: any;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'volume',
      sortable: true,
    },
    {
      field: 'issue',
      sortable: true,
    },
    {
      field: 'date',
      sortable: true,
      sort: 'desc',
    },
    {
      field: 'name',
      flex: 1,
      sortable: true,
    },
    {
      field: 'file',
      flex: 1,
      autoHeight: true,
      cellRenderer: FlosCarmeliActionsComponent,
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    filter: false,
    resizable: false,
  };

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.gridApiActive = params.api;
    this.rowData = flosCarmeliData;
  }

  onSearchChange(event: any): void {
    this.gridApiActive.setQuickFilter(event.target.value);
  }
}
