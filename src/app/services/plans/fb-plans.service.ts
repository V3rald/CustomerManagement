import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbPlansService {
  constructor(private afs: AngularFirestore) { }

  async addPayment(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({paymentmethodref: data});
  }

  async addAgreement(email: string, data): Promise<void> {
    let date = new Date();
    date.setDate(date.getDate() + 30);
    this.afs.collection("customer").doc(email).update({status: "accepted", validFor: date})

    return this.afs.collection("customer").doc(email).update({agreementref: data});
  }

  async updateStatus(email: string, data: string): Promise<void> {
    return this.afs.collection("customer").doc(email).update({status: data})
  }

  async get(email: string){
    var docRef = this.afs.collection("customer").doc(email);
    let promise = await docRef.get().toPromise().then((doc) => {
      return doc.data();
    });
    return promise;
  }

  async update(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({characteristic: data});
  }

  async delete(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({characteristic: data});
  }
}
