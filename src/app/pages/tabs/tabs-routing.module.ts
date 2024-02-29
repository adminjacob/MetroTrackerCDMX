import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../afluencia/afluencia.module').then(m => m.AfluenciaPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../avance/avance.module').then(m => m.AvancePageModule) //near me
      },
      {
        path: 'tab3',
        loadChildren: () => import('../comunidad/comunidad.module').then(m => m.ComunidadPageModule) //history
      },
      {
        path: 'tab4',
        loadChildren: () => import('../informacion/informacion.module').then(m => m.InformacionPageModule) //messages
      },
      {
        path: 'tab5',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
