import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plans-routing.module';
import { HomeModule } from '../home/home.module';
import { PlansComponent } from './plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    PlanRoutingModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    HomeModule
  ],
  exports: [PlansComponent],
})
export class PlansModule { }
