import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './plans.component';

const routes: Routes = [
    {
        path: '',
        component: PlansComponent,
        data: { title: 'Plans - Customer Management' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlanRoutingModule { }