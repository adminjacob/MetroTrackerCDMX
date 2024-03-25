import { Component, OnInit } from '@angular/core';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.page.html',
  styleUrls: ['./avance.page.scss'],
})
export class AvancePage implements OnInit {


  ultimoTiempoActualizacion = new Date();
  tweets:any=[];

  constructor(private tweetService:TweetsService) { }

  ngOnInit() {
    this.actualizarDatos();
    this.tweetService.obtenerTweets().subscribe(result=>{
      this.tweets=result;
      console.log(result);
    });
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

  actualizarDatos() {
    // Lógica para actualizar los datos
    this.ultimoTiempoActualizacion = new Date(); // Actualiza la hora de la última actualización
  }

}
