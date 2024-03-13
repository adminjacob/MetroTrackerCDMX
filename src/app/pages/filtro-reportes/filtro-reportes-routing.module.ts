import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroReportesPage } from './filtro-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: FiltroReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroReportesPageRoutingModule {}
