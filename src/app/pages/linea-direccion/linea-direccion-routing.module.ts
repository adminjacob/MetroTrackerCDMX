import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaDireccionPage } from './linea-direccion.page';

const routes: Routes = [
  {
    path: '',
    component: LineaDireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaDireccionPageRoutingModule {}
