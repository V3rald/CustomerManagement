import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { ContactMedium } from '../shared/models/contactMedium.model';
import { Customer } from '../shared/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {
  constructor(private afs: AngularFirestore) { }

  async add(email: string, data: Customer): Promise<void> {
    data.id = this.afs.createId();
    await this.afs.collection("customer").doc(email).set(data);
  }
}
