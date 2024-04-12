import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatosFiltroService } from '../../services/datos-filtro.service';

@Component({
  selector: 'app-filtro-reportes',
  templateUrl: './filtro-reportes.page.html',
  styleUrls: ['./filtro-reportes.page.scss'],
})
export class FiltroReportesPage implements OnInit {

  // Opciones de dirección por línea
  direccionesPorLinea = {
    'Línea 1': ['Observatorio', 'Pantitlán'],
    'Línea 2': ['Cuatro Caminos', 'Tasqueña'],
    'Línea 3': ['Indios Verdes', 'Universidad'],
    'Línea 4': ['Martín Carrera', 'Santa Anita'],
    'Línea 5': ['Politécnico', 'Pantitlán'],
    'Línea 6': ['El Rosario', 'Martín Carrera'],
    'Línea 7': ['El Rosario', 'Barranca del Muerto'],
    'Línea 8': ['Garibaldi-Lagunilla', 'Constitución de 1917'],
    'Línea 9': ['Tacubaya', 'Pantitlán'],
    'Línea A': ['Pantitlán', 'La Paz'],
    'Línea B': ['Buenavista', 'Ciudad Azteca'],
    'Línea 12': ['Mixcoac', 'Tláhuac']
  };

  // Opciones de dirección que se mostrarán en el segundo <ion-select>
  opcionesDireccionActuales: string[] = [];

  filtro = {
    sort: '',
    linea: '',
    direccion: '', 
    fechaInicio: '',
    fechaFin: ''
  };

  constructor(private navCtrl: NavController,
    private datosFiltroService: DatosFiltroService) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.back();
  }

  // Método para actualizar las opciones de dirección cuando cambia la selección de la línea
  onLineaChange(event) {
    const lineaSeleccionada = event.detail.value;
    this.opcionesDireccionActuales = this.direccionesPorLinea[lineaSeleccionada] || [];
    this.filtro.direccion = this.opcionesDireccionActuales[0]; // Opcional: establecer la primera dirección como seleccionada por defecto
  }

  onSubmit() {
    this.datosFiltroService.setDatosFiltro(this.filtro);

    this.navCtrl.back();
  }
}
