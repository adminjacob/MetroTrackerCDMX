import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.page.html',
  styleUrls: ['./avance.page.scss'],
})
export class AvancePage implements OnInit {


  ultimoTiempoActualizacion = new Date();

  constructor() { }

  ngOnInit() {
    this.actualizarDatos();
  }

  public segment: string = 'avance';

  lineas = [
    { nombre: 'Linea 1', imagen: 'Linea1.png', tiempo: 4 },
    { nombre: 'Linea 2', imagen: 'Linea2.png', tiempo: 4 },
    { nombre: 'Linea 3', imagen: 'Linea3.png', tiempo: 5 },
    { nombre: 'Linea 4', imagen: 'Linea4.png', tiempo: 6 },
    { nombre: 'Linea 5', imagen: 'Linea5.png', tiempo: 4 },
    { nombre: 'Linea 6', imagen: 'Linea6.png', tiempo: 5 },
    { nombre: 'Linea 7', imagen: 'Linea7.png', tiempo: 4 },
    { nombre: 'Linea 8', imagen: 'Linea8.png', tiempo: 4 },
    { nombre: 'Linea 9', imagen: 'Linea9.png', tiempo: 5 },
    { nombre: 'Linea A', imagen: 'LineaA.png', tiempo: 5 },
    { nombre: 'Linea B', imagen: 'LineaB.png', tiempo: 5 },
    { nombre: 'Linea 12', imagen: 'Linea12.png', tiempo: 4 }
  ];

  public tweets = [
    { fecha: '01 Oct 2023, 08:30', mensaje: 'Servicio restablecido en Línea 1.' },
    { fecha: '30 Sep 2023, 14:45', mensaje: 'Mantenimiento programado en Línea 3 este fin de semana.' },
    { fecha: '29 Sep 2023, 09:10', mensaje: 'Retraso en Línea 2 debido a obstrucción en vías.' },
    { fecha: '28 Sep 2023, 12:00', mensaje: 'Nueva estación inaugurada en Línea 4.' },
    { fecha: '27 Sep 2023, 07:50', mensaje: 'Servicio interrumpido en Línea 5 por avería técnica.' },
    { fecha: '26 Sep 2023, 08:15', mensaje: 'Precaución, piso mojado en estación Zócalo.' },
    { fecha: '25 Sep 2023, 17:30', mensaje: 'Se encontró cartera en estación Mixcoac, acudir a objetos perdidos.' }
    // ...otros tweets
  ];

  actualizarDatos() {
    // Lógica para actualizar los datos
    this.ultimoTiempoActualizacion = new Date(); // Actualiza la hora de la última actualización
  }

}
