import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCharacteristicComponent } from './update-characteristic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    UpdateCharacteristicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [UpdateCharacteristicComponent],
})
export class UpdateCharacteristicModule { }
