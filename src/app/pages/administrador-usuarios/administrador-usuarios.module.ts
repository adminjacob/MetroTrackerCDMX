import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorUsuariosPageRoutingModule } from './administrador-usuarios-routing.module';

import { AdministradorUsuariosPage } from './administrador-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorUsuariosPageRoutingModule
  ],
  declarations: [AdministradorUsuariosPage]
})
export class AdministradorUsuariosPageModule {}
