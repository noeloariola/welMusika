import { Component } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import {MdDialog, MdDialogRef} from '@angular/material';
import { MailComponent } from './mail/mail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  selectedOption: string;

  title = 'app';
  constructor(public dialog: MdDialog){

  }
  
  toggleCollapse() {
    this.show = !this.show
  }

  public actionMenu(title){
    alert(title);
  }

  // public openMessage() {
  //   let dialogRef = this.dialog.open(MessageComponent, {
  //     height: '540px',
  //     width: '960px',
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.selectedOption = result;
  //   }); 
  // }

}
