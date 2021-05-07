import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbContactsService {

  constructor(private afs: AngularFirestore) { }

  async add(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({contactmedium: data});
  }

  async get(email: string){
    var docRef = this.afs.collection("customer").doc(email);
    let promise = await docRef.get().toPromise().then((doc) => {
      return doc.data();
    });
    return promise;
  }

  async update(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({contactmedium: data});
  }

  async delete(email: string, data): Promise<void> {
    return this.afs.collection("customer").doc(email).update({contactmedium: data});
  }
}
