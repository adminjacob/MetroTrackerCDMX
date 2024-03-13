import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroReportesPageRoutingModule } from './filtro-reportes-routing.module';

import { FiltroReportesPage } from './filtro-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroReportesPageRoutingModule
  ],
  declarations: [FiltroReportesPage]
})
export class FiltroReportesPageModule {}
