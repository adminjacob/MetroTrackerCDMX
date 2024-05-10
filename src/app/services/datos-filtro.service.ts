import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosFiltroService {
  private datosFiltro: any = {};
  private filtroAplicado = new BehaviorSubject<boolean>(false);

  private reporteGeneradoSource = new BehaviorSubject<boolean>(false);
  public reporteGenerado$ = this.reporteGeneradoSource.asObservable();

  constructor() { }

  setDatosFiltro(datos: any) {
    this.datosFiltro = datos;
    this.filtroAplicado.next(true);
  }

  getDatosFiltro() {
    return this.datosFiltro;
  }

  isFiltroAplicado() {
    return this.filtroAplicado.asObservable();
  }

  resetFiltroAplicado() {
    this.filtroAplicado.next(false);
  }

  reporteGenerado() {
    this.reporteGeneradoSource.next(true);
  }

  resetReporteGenerado() {
    this.reporteGeneradoSource.next(false);
  }

}