import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AuthGuardAdmin } from './guard/auth-admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule),
  },
  {
    path: 'confirm-password',
    loadChildren: () => import('./pages/confirm-password/confirm-password.module').then(m => m.ConfirmPasswordPageModule)
  },
  {
    path: 'password-changed',
    loadChildren: () => import('./pages/password-changed/password-changed.module').then(m => m.PasswordChangedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'afluencia',
    loadChildren: () => import('./pages/afluencia/afluencia.module').then( m => m.AfluenciaPageModule),
  },
  {
    path: 'afluencia-detail',
    loadChildren: () => import('./pages/afluencia-detail/afluencia-detail.module').then( m => m.AfluenciaDetailPageModule),
  },
  {
    path: 'avance',
    loadChildren: () => import('./pages/avance/avance.module').then( m => m.AvancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./pages/comunidad/comunidad.module').then( m => m.ComunidadPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'administrador-usuarios',
    loadChildren: () => import('./pages/administrador-usuarios/administrador-usuarios.module').then( m => m.AdministradorUsuariosPageModule)
  },
  {
    path: 'administrador-reportes',
    loadChildren: () => import('./pages/administrador-reportes/administrador-reportes.module').then( m => m.AdministradorReportesPageModule)
  },
  {
    path: 'administrador-tabs',
    loadChildren: () => import('./pages/administrador-tabs/administrador-tabs.module').then( m => m.AdministradorTabsPageModule),
    canActivate: [AuthGuardAdmin]
  },
  {
    path: 'generar-reporte',
    loadChildren: () => import('./pages/generar-reporte/generar-reporte.module').then( m => m.GenerarReportePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'filtro-reportes',
    loadChildren: () => import('./pages/filtro-reportes/filtro-reportes.module').then( m => m.FiltroReportesPageModule),
    canActivate: [AuthGuard]
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
