import { Component } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){

  }
  
  public actionMenu(title){
    alert(title);
  }

}
