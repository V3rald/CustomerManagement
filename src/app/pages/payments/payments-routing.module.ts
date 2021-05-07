import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
const routes: Routes = [
    {
        path: '',
        component: PaymentsComponent,
        data: { title: 'Payments - Customer Management' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PaymentRoutingModule { }