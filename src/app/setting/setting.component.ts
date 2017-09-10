import { Component, OnInit, ViewChild } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA, MdButtonModule, MdDialogModule} from '@angular/material';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { GlobalDialogComponent } from '../global-dialog/global-dialog.component';

@Component({  
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']    
})
export class SettingComponent implements OnInit {
// x-www-form-urlencoded
    public departments: any = [];
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        private header = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'});
    
    public uri = "ws://" + window.location.host +"/APIandMaven/endpoint";
    public websocket = null;
    public message = "";
    
    
    
    newDepartment: any = { id: '', title: '' };
    public departmentTitle = '';
    titleIsExist = false;
    public clientInfo: {};
    constructor(
        private http: Http,
        public dialog: MdDialog) {
       
            
     }

    
    ngOnInit() {
        this.get();

        // this.sendMessage();
        // this.jacksonTest();
        // this.refreshDepartmentTable();
        
    }



    selectedOption: string;
    public addDialog() {
        let dialogRef = this.dialog.open(GlobalDialogComponent, {
            height: '300px',
            width: '420px',
            data: {title: 'Add new department', department: '', action: 'add'}
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result){
                this.add(result);
            }
            
        }); 
    }
    public editDialog(department) {
        this.newDepartment.id = `${department.id}`;
        this.newDepartment.title = department.title;

        let dialogRef = this.dialog.open(GlobalDialogComponent, {
            height: '300px',
            width: '420px',
            data: {title: 'Update department', department: department.title, action: 'edit'}
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result){
                this.newDepartment.title = result;
                this.update();
            }
            
        }); 
    }
    public add(title): void {
        // console.log(title);
        let dep = {
            "title": title
        };
        
        if(title.trim() == ''){
            alert("Please input a title!");
        }else{
            for(var row = 0; row < this.departments.length; row++){
                // console.log(this.departments[1]['id']);
                if(this.departments[row]['id'] == title){
                    alert('Title already exist!');
                    this.titleIsExist = true;
                }
            }
            
            if(this.titleIsExist == false){
                this.http.post('http://192.168.1.7:8080/APIandMaven/api/department/add', dep, {headers: this.header})
                    .subscribe((response: Response) => {
                        this.openConnection();
                        this.sendMessage(); 
                        console.log(response.json());
                        this.departments = response.json();
                        this.departmentTitle = '';
                });
            }
            
        }
    }

    public get() {
        this.http.get('http://192.168.1.7:8080/APIandMaven/api/department', {headers : this.headers}).map((response:Response) => {
            this.departments = response.json();
            // console.log(this.departments);
            response.json();
        }).subscribe();
        
    }
    
    public getById(id): void {
        this.http.get(`http://192.168.1.7:8080/APIandMaven/api/department/${id}`).map((response:Response) => {
            this.departments = response.json();
            console.log(this.departments);
            response.json();
        }).subscribe(

        );
    }

    public edit(department): void {
        this.newDepartment.id = `${department.id}`;
        this.newDepartment.title = department.title;
    }
    public update(){
        if(this.newDepartment.id == ''){
            alert("Choose department to edit!");
        }
        else if(this.newDepartment.title == ''){
            alert("Please input a title!");
        }else{
            console.log(this.newDepartment.title)
            this.http.put('http://192.168.1.7:8080/APIandMaven/api/department/update', this.newDepartment, {headers: this.header})
            .subscribe((response: Response) => {
                this.departments = response.json();
            });
        }
        
    }
    public delete(id): void {
        var url = `http://192.168.1.7:8080/APIandMaven/api/department/${id}`;
        this.http.delete(url).toPromise().then(() => this.get());
        
    }


    public jacksonTest(){
        let a = [
            { "name" : "A", "program" : "IT" },
            { "name" : "B", "program" : "CS" }
        ];
        //  this.http.post('http://192.168.1.7:8080/AA/api/rest/add', a , {headers: this.header})
        //             .subscribe((response: Response) => {
        //                 console.log("hep hep");
        //             });        
    }

     
     public openConnection() {
         
        this.websocket = new WebSocket(this.uri);
        
        this.websocket.onmessage = function (event) {
			    console.log(event.data);
                console.log("SHIT NAMAN OH!");
        };

        this.websocket.onopen = function () {
            console.log("ON OPEN");
        }
        this.websocket.onclose = function () {
            console.log("ON CLOSE");
        }
        this.websocket.onerror = function () {
            console.log("ON ERROR");
        }

     }

     public closeConnection() {
        this.websocket.close();
     }

     
     public sendMessage() {
        if(this.websocket.readyState == 1) {
            this.websocket.send("newDepartment");
            console.log("SEND");
        }
    }

     

}
