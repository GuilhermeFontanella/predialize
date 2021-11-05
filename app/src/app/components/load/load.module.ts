import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './load.component';
import { MatProgressSpinnerModule } from '@angular/material';



@NgModule({
  declarations: [LoadComponent],
  exports: [LoadComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class LoadModule { }
