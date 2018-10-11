import { Injectable } from '@angular/core';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Issue} from './issue';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {ExampleDataSource } from './food-master.component';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Observable} from 'rxjs/Observable';

import {DataSource} from '@angular/cdk/collections';

@Injectable()
export class FooddataService {




  //private readonly API_URL = './assets/nutrients.json';
  private readonly API_URL = 'http://localhost:8081/all-food';
   private readonly API_URL1 = 'http://localhost:8081/food';

  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  exampleDatabase: FooddataService | null;
  dataSource: ExampleDataSource | null;
  
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  id:number;
  name:string;
  age:number;
  public message: string = "";
  

  constructor (private httpClient: HttpClient) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  // refresh() {
  //   this.loadData();
  // }


  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Issue[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below


  addIssue (issue: Issue): void
   {
    
    this.dialogData = issue;
    console.log(issue);
    console.log(issue.foodname);
    console.log(issue.cal);
    console.log(issue.fat);
    console.log(issue.carbs);
    console.log(issue.fiber);
    console.log(issue.protein);


    this.httpClient.post(this.API_URL1,{
      "foodname": (issue.foodname),
      "cal": (issue.cal),
      "fat":(issue.fat),
      "carbs": (issue.carbs),
      "fiber": (issue.fiber),
      "protein": (issue.protein)
     
      })
     
    

       .subscribe(res => console.log(res) ,
       error =>  this.message = "Sorry! msg Not Sent!");
    
//this.loadData();
    }






  updateIssue (issue: Issue): void
   {
    this.dialogData = issue;
    console.log(issue);
    console.log(issue.foodname);
    console.log(issue.cal);
    console.log(issue.fat);
    console.log(issue.carbs);
    console.log(issue.fiber);
    console.log(issue.protein);


    this.httpClient.put(this.API_URL1,{
	    "foodname": (issue.foodname),
      "cal": (issue.cal),
      "fat":(issue.fat),
      "carbs": (issue.carbs),
      "fiber": (issue.fiber),
      "protein": (issue.protein)
      })
     
       .subscribe(res => console.log(res),
       error =>  this.message = "Sorry! msg Not Sent!");
    
       this.getAllIssues();
       //refresh();
    }

  

  deleteIssue (foodname: String): void {
    console.log(foodname);
    //console.log(issue.name);
    //console.log(issue.age);


    this.httpClient.delete(this.API_URL1 + "/" +foodname)
     
       .subscribe( res => console.log(res),
       error =>  this.message = "Sorry! msg Not Sent!");
    
       
        this.getAllIssues();
      
    }




//----------------------------------------------------------------------------------------------------------
//     public loadData() {
//       this.exampleDatabase = new FooddataService(this.httpClient);
//       this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
//       Observable.fromEvent(this.filter.nativeElement, 'keyup')
//         .debounceTime(150)
//         .distinctUntilChanged()
//         .subscribe(() => {
//           if (!this.dataSource) {
//             return;
//           }
//           this.dataSource.filter = this.filter.nativeElement.value;
//         });
//     }
  

// // 







}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/







