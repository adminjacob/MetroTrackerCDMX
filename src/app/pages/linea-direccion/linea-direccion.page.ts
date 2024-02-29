import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linea-direccion',
  templateUrl: './linea-direccion.page.html',
  styleUrls: ['./linea-direccion.page.scss'],
})
export class LineaDireccionPage implements OnInit {

  public searchTerm: string = '';

  public lineas = [
    { nombre: 'Línea 1 - Dirección: Observatorio' },
    { nombre: 'Línea 1 - Dirección: Pantitlán' },
    { nombre: 'Línea 2 - Dirección: Cuatro Caminos' },
    { nombre: 'Línea 2 - Dirección: Tasqueña' },
    { nombre: 'Línea 3 - Dirección: Indios Verdes' },
    { nombre: 'Línea 3 - Dirección: Universidad' },
    { nombre: 'Línea 4 - Dirección: Martín Carrera' },
    { nombre: 'Línea 4 - Dirección: Santa Anita' },
    { nombre: 'Línea 5 - Dirección: Politécnico' },
    { nombre: 'Línea 5 - Dirección: Pantitlán' },
    { nombre: 'Línea 6 - Dirección: El Rosario' },
    { nombre: 'Línea 6 - Dirección: Martín Carrera' },
    { nombre: 'Línea 7 - Dirección: El Rosario' },
    { nombre: 'Línea 7 - Dirección: Mixcoac' },
    { nombre: 'Línea 8 - Dirección: Garibaldi / Lagunilla' },
    { nombre: 'Línea 8 - Dirección: Constitución de 1917' },
    { nombre: 'Línea 9 - Dirección: Tacubaya' },
    { nombre: 'Línea 9 - Dirección: Pantitlán' },
    { nombre: 'Línea A - Dirección: Pantitlán' },
    { nombre: 'Línea A - Dirección: La Paz' },
    { nombre: 'Línea B - Dirección: Buenavista' },
    { nombre: 'Línea B - Dirección: Ciudad Azteca' },
    { nombre: 'Línea 12 - Dirección: Mixcoac' },
    { nombre: 'Línea 12 - Dirección: Tláhuac' },
  ];
  

  constructor() { }

  ngOnInit() {
  }

  cancel(){
    console.log("cancel");
  }

  search(){
    console.log("search");
  }

}
