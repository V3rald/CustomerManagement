import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { PaymentRoutingModule } from './payments-routing.module';
import { HomeModule } from '../home/home.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatCardModule,
    HomeModule
  ],
  exports: [PaymentsComponent],
})
export class PaymentsModule { }
