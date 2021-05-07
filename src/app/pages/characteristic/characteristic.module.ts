import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicRoutingModule } from './characteristic-routing.module';
import { CharacteristicComponent } from './characteristic.component';
import { HomeModule } from '../home/home.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UpdateCharacteristicModule } from './update-characteristic/update-characteristic.module';
import { AddCharacteristicModule } from './add-characteristic/add-characteristic.module';



@NgModule({
  declarations: [CharacteristicComponent],
  imports: [
    CommonModule,
    CharacteristicRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    HomeModule,
    UpdateCharacteristicModule,
    AddCharacteristicModule,
  ],
  exports: [CharacteristicComponent],
})
export class CharacteristicModule { }
