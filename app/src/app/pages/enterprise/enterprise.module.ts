import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { EnterpriseRoutingModule } from './enterprise-routing.module';


@NgModule({
  declarations: [EnterpriseComponent],
  exports: [EnterpriseComponent],
  imports: [
    CommonModule,
    EnterpriseRoutingModule
  ],
  providers: [EnterpriseService],
})
export class EnterpriseModule {}
