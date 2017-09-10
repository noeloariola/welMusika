import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA, MdButtonModule} from '@angular/material';
import { NewEmployeeComponent } from '../employee/new-employee/new-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public mdDialog: MdDialog) { }

  ngOnInit() {
  }

  public addEmployee(): void {
    let dialogRef = this.mdDialog.open(NewEmployeeComponent, {
        height: '500px',
        width: '720px'
    });
  }

}
