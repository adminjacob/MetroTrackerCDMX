import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorUsuariosPage } from './administrador-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorUsuariosPageRoutingModule {}
