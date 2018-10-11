import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Inject ,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {FoodMasterComponent } from '../food-master.component';
import {FooddataService} from '../fooddata.service';
import {Issue} from '../issue';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
  //encapsulation: ViewEncapsulation.None,
})
export class AddfoodComponent  {

  constructor(public dialogRef: MatDialogRef<AddfoodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue,
    public FooddataService: FooddataService) { }

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);


//slider configuratoion
  autoTicks = false;
  disabled =false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  dat = 0;
  vertical = false;





getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}

submit() {
// emppty stuff
}

onNoClick(): void {
this.dialogRef.close();
}

 public confirmAdd(): void {

 this.FooddataService.addIssue(this.data);
 }
 }
