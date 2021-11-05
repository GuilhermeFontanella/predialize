import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";


@NgModule({
  imports: [
    CommonModule,
    ClientModule,
    EnterpriseModule,
  ],

})
export class PagesModule {}
