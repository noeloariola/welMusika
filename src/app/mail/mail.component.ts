import { Component, OnInit } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA, MdButtonModule} from '@angular/material';

import { ComposeMessageComponent } from '../mail/compose-message/compose-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
	selectedOption:any;
	constructor(
    public dialog: MdDialog) { }

	ngOnInit() {
  }
  
  composeMessage(){
    let dialogRef = this.dialog.open(ComposeMessageComponent, {
      height: '560px',
      width: '960px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    }); 
  }
  public openMessage() {
    
  }


}
