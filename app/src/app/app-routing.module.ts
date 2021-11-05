import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'clients' },
  { path: 'client', loadChildren:() => import('./pages/client/client.module').then((m) => m.ClientModule) },
  { path: 'enterprise', loadChildren:() => import('./pages/enterprise/enterprise.module').then((m) => m.EnterpriseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
