import { InputTextModule } from './../../components/inputs/input-text/input-text.module';
import { LoadModule } from './../../components/load/load.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './../../services/client.service';
import { CommonModule } from '@angular/common';
import { PresentationCardModule } from './../../components/presentation-card/presentation-card.module';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InfoClientModule } from './info-client/info-client.module';

@NgModule({
  declarations: [ClientComponent],
  exports: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    PresentationCardModule,
    HttpClientModule,
    LoadModule,
    MatSnackBarModule,
    InputTextModule,
    InfoClientModule
  ],
  providers: [ ClientService ]
})
export class ClientModule {}
