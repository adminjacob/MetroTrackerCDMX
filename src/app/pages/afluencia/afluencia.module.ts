import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfluenciaPageRoutingModule } from './afluencia-routing.module';

import { AfluenciaPage } from './afluencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfluenciaPageRoutingModule
  ],
  declarations: [AfluenciaPage]
})
export class AfluenciaPageModule {}
