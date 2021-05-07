import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { FbContactsService } from 'src/app/services/fb-contacts.service';
import { SharedService } from 'src/app/services/shared.service';
import { ContactMedium } from 'src/app/shared/models/contactMedium.model';
import { MediumCharacteristic } from 'src/app/shared/models/mediumCharacteristic.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  contact: ContactMedium;

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

  constructor(private sharedService: SharedService, public dialogRef: MatDialogRef<UpdateContactComponent>, private service: FbContactsService) { }

  ngOnInit(): void {
    let id = this.dialogRef.id;
    let email = this.sharedService.EMAIL;
    let contactsClass = this;
    this.service.get(email).then(function(result: any) {
      if(!result) return;
      let contacts: ContactMedium[] = result.contactmedium;
      if(contacts == undefined) return;
      contactsClass.contact = contacts[id];
    });
  }

  close(): void {
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }

}
