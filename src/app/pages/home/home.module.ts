import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from '../nav/nav.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule, MatCardModule, MatRippleModule, NavModule
  ], 
  exports: [HomeComponent],
})
export class HomeModule { }
