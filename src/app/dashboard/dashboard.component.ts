import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ArtistComponent } from '../artist/artist.component';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Headers, Http, Response } from '@angular/http';
// import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('animationSelector', [
        state('small', style({
          transform: 'scale(.5)',

        })),
        state('large', style({
          transform: 'scale(1.5)',
        })),
        transition('small <=> large', animate('300ms ease-in', style({
          transform: 'translateY(70px)'
        }))),


    ])
  ]
})

export class DashboardComponent implements OnInit {
  public isHappy = true;
  public valueFromClass = "This is a link";

  public testBinding = 'Bind stablish!';


  public cssClasses = {
    'blue-text':  true,
    'big-text': true
  }   

  public isGreen = true;

  public titleStyles = {
    'color': 'brown',
    'font-size': '3em'
  };


  state: string = 'small';

  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});

  
  public sample: any = [];
  constructor(public modalService: NgbModal,
    private http: Http){ 
  }

  public animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
    
  ngOnInit() {
     this.http.get('http://localhost:8080/JAXRS/api/author').map((response:Response) => {
                this.sample = response.json();
                console.log(this.sample[1]);
                response.json();
            }).subscribe();
  }


}
