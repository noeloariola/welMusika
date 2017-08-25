import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';

@Component({  
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']    
})
export class SettingComponent implements OnInit {
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    
    public departments: any = [];
    dataSource = this.departments;
    @ViewChild(MdPaginator) paginator: MdPaginator;
    
    private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        private header = new Headers({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'});
    
    newDepartment: any = {};
    constructor(private http: Http) {
        
     }

    
    ngOnInit() {
        this.get();
        // this.getById("12");
    }
    public add(title): void {
        console.log(title);
        let dep = {
            "title": title
        };
        this.http.post('http://localhost:8080/JAXRS/api/department/add', dep, {headers: this.header})
            .subscribe((response: Response) => {
                this.departments = response.json();
            });

        // this.http.post('http://localhost:8080/JAXRS/api/department', {data : t   itle}, {headers: this.header })
        //     .toPromise()
        //     .then(() => this.get());
    }

    public get() {
        this.http.get('http://localhost:8080/JAXRS/api/department', {headers : this.header}).map((response:Response) => {
            this.departments = response.json();
            console.log(this.departments);
            response.json();
        }).subscribe();
    }
    
    public getById(id): void {
        this.http.get(`http://localhost:8080/JAXRS/api/department/${id}`).map((response:Response) => {
            this.departments = response.json();
            console.log(this.departments);
            response.json();
        }).subscribe();
    }

    public edit(department): void {
        console.log(department.id);
        console.log(department.title);
        this.newDepartment.id = `${department.id}`;
        this.newDepartment.title = department.title;
    }
    public update(){
        console.log(this.newDepartment);
        this.http.put('http://localhost:8080/JAXRS/api/department/update', this.newDepartment, {headers: this.header})
            .subscribe((response: Response) => {
                this.departments = response.json();
            });
    }
    public delete(id): void {
        var url = `http://localhost:8080/JAXRS/api/department/${id}`;
        this.http.delete(url).toPromise().then(() => this.get());
        
    }

}

export interface UserData {
  id: string;
  title: string;
  edit: string;
  delete: string;
}

// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MdPaginator) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<UserData[]> {
//     const displayDataChanges = [
//       this._exampleDatabase.dataChange,
//       this._paginator.page,
//     ];

//     return Observable.merge(...displayDataChanges).map(() => {
//       const data = this._exampleDatabase.data.slice();

//       // Grab the page's slice of data.
//       const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
//       return data.splice(startIndex, this._paginator.pageSize);
//     });
//   }

//   disconnect() {}
// }