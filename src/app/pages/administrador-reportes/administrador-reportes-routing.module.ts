import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorReportesPage } from './administrador-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorReportesPageRoutingModule {}
