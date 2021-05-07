import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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
        return this.afAuth.signInWithEmailAndPassword(email, password);
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