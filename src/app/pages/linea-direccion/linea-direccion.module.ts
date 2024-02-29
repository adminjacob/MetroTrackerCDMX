import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaDireccionPageRoutingModule } from './linea-direccion-routing.module';

import { LineaDireccionPage } from './linea-direccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaDireccionPageRoutingModule
  ],
  declarations: [LineaDireccionPage]
})
export class LineaDireccionPageModule {}
