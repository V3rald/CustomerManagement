import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-characteristic',
  templateUrl: './add-characteristic.component.html',
  styleUrls: ['./add-characteristic.component.scss']
})
export class AddCharacteristicComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl(0, Validators.required),
  });
  constructor(public dialogRef: MatDialogRef<AddCharacteristicComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }

}
