import { Component, OnInit } from '@angular/core';

interface Notificacion {
  id: number;
  fecha: Date;
  mensaje: string;
}

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})

export class NotificacionesPage implements OnInit {

  notificaciones: Notificacion[] = [];

  constructor() { }

  ngOnInit() {
    this.notificaciones = [
      { id: 1, fecha: new Date(), mensaje: "Notificación 1" },
      { id: 2, fecha: new Date(), mensaje: "Notificación 2" },
      { id: 3, fecha: new Date(), mensaje: "Notificación 3" },
      { id: 3, fecha: new Date(), mensaje: "Notificación 4" },
      { id: 3, fecha: new Date(), mensaje: "Notificación 5" },
      { id: 3, fecha: new Date(), mensaje: "Notificación 6" }
    ];
  }

  eliminarNotificacion(notificacion: Notificacion) {
    this.notificaciones = this.notificaciones.filter(n => n.id !== notificacion.id);
  }

}
