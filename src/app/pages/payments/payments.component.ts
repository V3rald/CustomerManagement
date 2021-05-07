import { Component, OnInit } from '@angular/core';
import { FbPlansService } from 'src/app/services/plans/fb-plans.service';
import { SharedService } from 'src/app/services/shared.service';
import { AgreementRef } from 'src/app/shared/models/agreementref.model';
import { PaymentMethodRef } from 'src/app/shared/models/paymentmethodref.model';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  agreements: AgreementRef[] = [];
  payments: PaymentMethodRef[] = [];
  
  constructor(private sharedService: SharedService, private service: FbPlansService) { }

  ngOnInit(): void {
    let email = this.sharedService.EMAIL;

    let plansClass = this;
    this.service.get(email).then(function(result: any) {
      if(!result) return;
      let payment: PaymentMethodRef[] = result.paymentmethodref;
      let agreement: AgreementRef[] = result.agreementref;
      if(payment == undefined || agreement == undefined) return;
      for(let i = 0; i < payment.length; i++){
        plansClass.payments.push(payment[i]);
        plansClass.agreements.push(agreement[i]);
      }
    });
  }

}
