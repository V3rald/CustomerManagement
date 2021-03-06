import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteristicComponent } from './characteristic.component';

const routes: Routes = [
    {
        path: '',
        component: CharacteristicComponent,
        data: { title: 'Characteristic - Customer Management' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharacteristicRoutingModule { }