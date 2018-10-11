import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {FooddataService} from '../fooddata.service';
@Component({
  selector: 'app-deletefood',
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.css']
})
export class DeletefoodComponent  {

  constructor(public dialogRef: MatDialogRef<DeletefoodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fooddataService: FooddataService) { }

onNoClick(): void {
this.dialogRef.close();
}

confirmDelete(): void {
this.fooddataService.deleteIssue(this.data.foodname);
}
}