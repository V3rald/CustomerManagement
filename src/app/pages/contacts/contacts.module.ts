import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AddContactModule } from './add-contact/add-contact.module';
import { MatCardModule } from '@angular/material/card';
import { UpdateContactModule } from './update-contact/update-contact.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    AddContactModule,
    UpdateContactModule,
    HomeModule,
  ],
  exports: [ContactsComponent],
})
export class ContactsModule { }
