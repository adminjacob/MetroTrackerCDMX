import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosFiltroService {
  private datosFiltro: any = {};

  constructor() { }

  setDatosFiltro(datos: any) {
    this.datosFiltro = datos;
  }

  getDatosFiltro() {
    return this.datosFiltro;
  }
}