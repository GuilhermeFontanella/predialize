import { InfoClientComponent } from './info-client/info-client.component';
import { ClientComponent } from './client.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'client/:_id/enterprises', component: InfoClientComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
