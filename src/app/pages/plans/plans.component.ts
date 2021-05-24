import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbPlansService } from 'src/app/services/plans/fb-plans.service';
import { SharedService } from 'src/app/services/shared.service';
import { AgreementRef } from 'src/app/shared/models/agreementref.model';
import { PaymentMethodRef } from 'src/app/shared/models/paymentmethodref.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  form: FormGroup = new FormGroup({
    agreementName: new FormControl('', Validators.required),
    paymentName: new FormControl('Cash', Validators.required),
  });

  errorMessage: string;
  message: string;

  agreements: AgreementRef[] = [];
  payments: PaymentMethodRef[] = [];
  status: string;

  constructor(private afs: AngularFirestore, private sharedService: SharedService, private service: FbPlansService) { }

  ngOnInit(): void {
    let email = this.sharedService.EMAIL;
    

    let plansClass = this;
    this.service.get(email).then(function(result: any) {
      if(!result) return;
      let payment: PaymentMethodRef[] = result.paymentmethodref;
      let agreement: AgreementRef[] = result.agreementref;
      let status: string = result.status;
      if(payment == undefined || agreement == undefined) return;
      for(let i = 0; i < payment.length; i++){
        plansClass.payments.push(payment[i]);
        plansClass.agreements.push(agreement[i]);
      }
      plansClass.status = status;
    });
  }

  buy(): void {
    let email = this.sharedService.EMAIL;

    let dateToday = new Date();
    let plansClass = this;
    this.service.get(email).then(function(result: any) {
      if(!result || result.validFor == null) return;
      let valid: Date = result.validFor.toDate();
      if(dateToday >= valid){
        plansClass.status = "refused";
        plansClass.service.updateStatus(email, "refused");
      }
    }).then(res => {
      if(plansClass.status === "accepted"){
        plansClass.message = null;
        plansClass.errorMessage = "You already have an activated plan!";
        return;
      }else{
        plansClass.errorMessage = null;
        plansClass.message = "Plan bought!";
      }
      let payment: PaymentMethodRef = {id: plansClass.afs.createId(), name: plansClass.form.value.paymentName};
      plansClass.payments.push(payment);
      plansClass.service.addPayment(email, plansClass.payments);
  
      let date = new Date();
      date.setMonth(date.getMonth() + 2);
      let month = date.getMonth().toString();
      let day = date.getDate().toString();
      if(month.length == 1)  month = "0" + month;
      if(day.length == 1)  day = "0" + day;
      let valid: string = date.getFullYear() + "-" + month + "-" + day;
  
      let agreement: AgreementRef = {id: plansClass.afs.createId(), name: plansClass.form.value.agreementName, validFor: valid};
      plansClass.agreements.push(agreement);
      plansClass.service.addAgreement(email, plansClass.agreements);
      
      plansClass.status = "accepted";
    });
  }

}
