import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FooddataService} from '../fooddata.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css']
})
export class EditfoodComponent  {

  constructor(public dialogRef: MatDialogRef<EditfoodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fooddataService: FooddataService) { }


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







formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

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

stopEdit(): void {
this.fooddataService.updateIssue(this.data);
}
}