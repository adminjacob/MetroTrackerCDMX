import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afluencia',
  templateUrl: './afluencia.page.html',
  styleUrls: ['./afluencia.page.scss'],
})
export class AfluenciaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  items = [
    { texto: 'Línea 1', imagen: 'Linea1.png', direccion1: 'Observatorio', direccion2: 'Pantitlán' },
    { texto: 'Línea 2', imagen: 'Linea2.png', direccion1: 'Cuatro Caminos', direccion2: 'Tasqueña' },
    { texto: 'Línea 3', imagen: 'Linea3.png', direccion1: 'Indios Verdes', direccion2: 'Universidad' },
    { texto: 'Línea 4', imagen: 'Linea4.png', direccion1: 'Martín Carrera', direccion2: 'Santa Anita' },
    { texto: 'Línea 5', imagen: 'Linea5.png', direccion1: 'Politécnico', direccion2: 'Pantitlán' },
    { texto: 'Línea 6', imagen: 'Linea6.png', direccion1: 'El Rosario', direccion2: 'Martín Carrera' },
    { texto: 'Línea 7', imagen: 'Linea7.png', direccion1: 'El Rosario', direccion2: 'Barranca del Muerto' },
    { texto: 'Línea 8', imagen: 'Linea8.png', direccion1: 'Garibaldi', direccion2: 'Constitución de 1917' },
    { texto: 'Línea 9', imagen: 'Linea9.png', direccion1: 'Tacubaya', direccion2: 'Pantitlán' },
    { texto: 'Línea A', imagen: 'LineaA.png', direccion1: 'Pantitlán', direccion2: 'La Paz' },
    { texto: 'Línea B', imagen: 'LineaB.png', direccion1: 'Buenavista', direccion2: 'Ciudad Azteca' },
    { texto: 'Línea 12', imagen: 'Linea12.png', direccion1: 'Mixcoac', direccion2: 'Tláhuac' }
  ];

  goToDetail(linea: string, direccion: string) {
    this.router.navigate(['/afluencia-detail'], { queryParams: { linea: linea, direccion: direccion } });
  }
  
}
