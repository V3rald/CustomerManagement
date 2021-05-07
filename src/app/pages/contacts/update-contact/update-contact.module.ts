import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateContactComponent } from './update-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [UpdateContactComponent],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [UpdateContactComponent],
})
export class UpdateContactModule { }
