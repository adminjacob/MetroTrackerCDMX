import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorTabsPage } from './administrador-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorTabsPage,
    children: [
      {
        path: 'administrador-reportes',
        loadChildren: () => import('../administrador-reportes/administrador-reportes.module').then(m => m.AdministradorReportesPageModule)
      },
      {
        path: 'administrador-usuarios',
        loadChildren: () => import('../administrador-usuarios/administrador-usuarios.module').then(m => m.AdministradorUsuariosPageModule)
      },
      {
        path: '',
        redirectTo: 'administrador-reportes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorTabsPageRoutingModule {}
