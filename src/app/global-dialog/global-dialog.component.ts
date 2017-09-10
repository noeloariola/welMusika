import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-global-dialog',
  templateUrl: './global-dialog.component.html',
  styleUrls: ['./global-dialog.component.css']
})
export class GlobalDialogComponent implements OnInit {
	public dialogData = { };
	constructor(
		@Inject(MD_DIALOG_DATA) public data: any = {}
	) { }

  ngOnInit() {
	  if(this.data.action == 'add'){
		  this.dialogData = '';
		this.data.buttonTitle = 'save';
		
	  }else if(this.data.action == 'edit'){
		  this.dialogData = this.data.department;
		this.data.buttonTitle = 'update';
	  }else{

	  }
  }

}
