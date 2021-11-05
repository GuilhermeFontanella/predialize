import { LoadModule } from './../load/load.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PresentationCardComponent } from './presentation-card.component';
import { MatCardModule } from '@angular/material';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [PresentationCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [ PresentationCardComponent ],
})
export class PresentationCardModule { }
