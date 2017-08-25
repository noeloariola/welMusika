import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
    public gender = "female";
    constructor(
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
    }

    public close(): void{
       this.activeModal.close();
       console.log('Artist Modal closed');
    }

    public save(){
        console.log('Artist save button pressed');
        this.activeModal.close();
    }
}
