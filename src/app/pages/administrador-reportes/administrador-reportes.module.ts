import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradorReportesPageRoutingModule } from './administrador-reportes-routing.module';

import { AdministradorReportesPage } from './administrador-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradorReportesPageRoutingModule
  ],
  declarations: [AdministradorReportesPage]
})
export class AdministradorReportesPageModule {}
