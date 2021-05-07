import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactMedium } from 'src/app/shared/models/contactMedium.model';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { FbContactsService } from 'src/app/services/fb-contacts.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  categories = CATEGORIES;
  contacts: ContactMedium[] = [];
  email: string;
  constructor(private sharedService: SharedService, private dialog: MatDialog, private service: FbContactsService) { }

  openDialog() : void {
    const dialogRef = this.dialog.open(AddContactComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contacts.push(result);
        this.service.add(this.email, this.contacts);
      }
    });
  }

  openDialogUpdate(contactid: string) : void {
    const dialogRef = this.dialog.open(UpdateContactComponent, {id: contactid});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.contacts[contactid] = result;
        this.service.update(this.email, this.contacts);
      }
    });
  }

  remove(contactid: string) : void {
    this.contacts.splice(parseInt(contactid), 1);
    this.service.delete(this.email, this.contacts);
  }

  getContacts(){
    let contactsClass = this;
    this.service.get(this.email).then(function(result: any) {
      if(!result) return;
      let contacts: ContactMedium[] = result.contactmedium;
      if(contacts == undefined) return;
      for(let i = 0; i < contacts.length; i++){
        contactsClass.contacts.push(contacts[i]);
      }
    });
  }

  ngOnInit(): void {
    this.email = this.sharedService.EMAIL;
    this.contacts = [];
    this.getContacts();
  }

}

