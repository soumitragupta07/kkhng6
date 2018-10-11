import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component,Inject ,ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {DataService} from '../../services/data.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddComponent  {

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Issue,
    public dataService: DataService) { }

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
this.dataService.addIssue(this.data);
}
}
