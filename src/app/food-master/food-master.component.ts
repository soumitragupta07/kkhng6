import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FooddataService} from './fooddata.service';
import {Issue} from './issue';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 import {AddfoodComponent} from './addfood/addfood.component';
 import {EditfoodComponent} from './editfood/editfood.component';
 import {DeletefoodComponent} from './deletefood/deletefood.component';

 @Component({
  selector: 'app-food-master',
  templateUrl: './food-master.component.html',
  styleUrls: ['./food-master.component.css']
})
export class FoodMasterComponent implements OnInit {

 

  displayedColumns = ['foodname','cal','fat','carbs','fiber','protein','actions'];
  exampleDatabase: FooddataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id2: string;
  public data:any;
  public loading =false;
  

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: FooddataService) {

                //this.dataService.refresh();       
              }
 
              

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  //ADD(+) DIALOG

  addNew(issue: Issue) {
    const dialogRef = this.dialog.open(AddfoodComponent, {
      width: '700px',
      height: '500px',
      data: {issue: issue }
    
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
        this.refresh();
      }
    });
  }

  //EDIT DIALOG----------------------------------------------------------------------------------

  startEdit(i: number, foodname: string, cal: number, fat: number, carbs: number, fiber: number, protein: number) {
    this.index = i;
    this.id2 = foodname;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditfoodComponent, {
      data: {foodname: foodname, cal: cal, fat: fat, carbs: carbs, fiber: fiber, protein:protein }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // Part where we do frontend update, first you need to find record using id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.foodname === this.id2);
        // Then you update that record using dialogData
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.refresh();
      }
    });
  }

//DELETE DIALOG----------------------------------------------------------------------------------------------

  deleteItem(i: number, foodname: string) {
    this.index = i;
    this.id2 = foodname;
    const dialogRef = this.dialog.open(DeletefoodComponent, {
      data: {foodname:foodname}
      //data: {id: id, name: name, age: age}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.foodname === this.id2);
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
        this.refresh();
      }
    });
  }


  private refreshTable() {
    // If there's no data in filter we do update using pagination, next page or previous page
    if (this.dataSource._filterChange.getValue() === '') {
      if (this.dataSource._paginator.pageIndex === 0) {
        this.dataSource._paginator.nextPage();
        this.dataSource._paginator.previousPage();
      } else {
        this.dataSource._paginator.previousPage();
        this.dataSource._paginator.nextPage();
      }
      // If there's something in filter, we reset it to 0 and then put back old value
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }


 



  public loadData() {
    this.loading=true;
    this.exampleDatabase = new FooddataService(this.httpClient);
    this.loading=false;
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
      
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}


export class ExampleDataSource extends DataSource<Issue> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Issue[] = [];
  renderedData: Issue[] = [];

  constructor(public _exampleDatabase:FooddataService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Issue[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
        const searchStr = (issue.foodname + issue.cal + issue.fat  + issue.carbs  + issue.fiber  + issue.protein).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: Issue[]): Issue[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'foodname': [propertyA, propertyB] = [a.foodname, b.foodname]; break;
        case 'cal': [propertyA, propertyB] = [a.cal, b.cal]; break;
        case 'fat': [propertyA, propertyB] = [a.fat, b.fat]; break;
        
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}

