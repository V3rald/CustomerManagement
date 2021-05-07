import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  characteristicTest: FormGroup = new FormGroup({
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  form: FormGroup = new FormGroup({
    characteristic: this.characteristicTest,
    mediumType: new FormControl('', Validators.required),
    preferred: new FormControl(false, Validators.required),
  });
  constructor(public dialogRef: MatDialogRef<AddContactComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }
}
