import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {Inject ,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-pes-ac-nutrition-intakes',
  templateUrl: './pes-ac-nutrition-intakes.component.html',
  styleUrls: ['./pes-ac-nutrition-intakes.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class PesAcNutritionIntakesComponent implements OnInit {


  formControl = new FormControl('', [
    Validators.required
  ]);


//slider configuratoion
autoTicks = false;      data2=0; data3=0;data4=0;data5=0;data6="";data7="";data8="";data9="";data10="";      
disabled =false;        data11=""; data12=0;data13=0;data14=0;data15=0;data16=0;data17=0;data18=0;data19=0;
invert = false;         data20=0; data21=0;data22=0;data23=0;data24=0;data25=0;data26=0;data27=0;data28=0;
max = 100;              data30=0; data31=0;data32=0;data33=0;data34=0;data35=0;
min = 0;
showTicks = false;
step = 1;
thumbLabel = true;
data = 0;
data1=0;
vertical = false;





  constructor() { }

  ngOnInit() {
  }

}
