import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { FbBaseService } from './fb-base.service';
import { Customer } from 'src/app/shared/models/customer.model'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor (private service: FbBaseService, private afAuth: AngularFireAuth){
        
    }

    async logout(): Promise<void>{
        await this.afAuth.signOut();
    }


    login(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
                    resolve(userCredential);
                }).catch(ex => {
                    reject(ex);
                });
            }).catch(e => {
                reject(e);
            });
        });
    }

    register(email: string, name: string, password: string): Promise<any> {
        let customer: Customer = {name: name, status: "new", validFor: null, id: null};
        this.service.add(email, customer);

        return this.afAuth.createUserWithEmailAndPassword(email, password);
    }

    authenticated(): boolean {
        return this.afAuth.user !== null;
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }
}