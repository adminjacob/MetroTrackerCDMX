import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfluenciaDetailPageRoutingModule } from './afluencia-detail-routing.module';

import { AfluenciaDetailPage } from './afluencia-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfluenciaDetailPageRoutingModule
  ],
  declarations: [AfluenciaDetailPage]
})
export class AfluenciaDetailPageModule {}
