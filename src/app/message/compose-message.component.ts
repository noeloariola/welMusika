import { Component, OnInit } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
	public editor;
	public editorContent = `<h3>I am Example content</h3>`;
	public editorOptions = {
		placeholder: "insert content..."
	};
	constructor() { }

	ngOnInit() {
		setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable(); 
    }, 2800)
	}

	onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }
 
  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }
 
  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }
 
  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
    console.log(text);
  }

}
