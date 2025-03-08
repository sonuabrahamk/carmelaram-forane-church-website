import { Component, OnInit } from '@angular/core';
import { FlosCarmeliActionsComponent } from 'src/app/components/flos-carmeli-actions/flos-carmeli-actions.component';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { flosCarmeliData } from 'src/app/components/constants/flos-carmeli-data';
import { IFlosCarmeli } from 'src/app/components/interfaces/IFlosCarmeli';

@Component({
  selector: 'app-flos-carmeli-list',
  templateUrl: './flos-carmeli.component.html',
  styleUrls: ['./flos-carmeli.component.css'],
})
export class FlosCarmeliListComponent implements OnInit {
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
