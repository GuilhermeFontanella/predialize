import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PresentationCardModule } from 'src/app/components/presentation-card/presentation-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoClientComponent } from './info-client.component';



@NgModule({
  declarations: [InfoClientComponent],
  imports: [
    CommonModule,
    PresentationCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class InfoClientModule { }
