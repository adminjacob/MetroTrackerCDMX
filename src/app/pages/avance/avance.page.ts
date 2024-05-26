import { Component, OnInit } from '@angular/core';
import { TiemposService } from 'src/app/services/tiempos.service';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.page.html',
  styleUrls: ['./avance.page.scss'],
})
export class AvancePage implements OnInit {

  ultimoTiempoActualizacionAvance = new Date();
  ultimoTiempoActualizacionAnuncios = new Date();
  tweets:any=[];

  constructor(private tweetService:TweetsService,
              private tiemposService: TiemposService
  ) { }

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

  actualizarDatos() {
    this.tweetService.obtenerTweets().subscribe((result:any)=>{
      this.tweets=result;
      this.ultimoTiempoActualizacionAnuncios=this.tweets[0].tweetDate;
    });

    this.tiemposService.obtenerTiempo().subscribe((result:any)=>{
    
      this.ultimoTiempoActualizacionAvance=result.fechaHoraRegistro;

      this.lineas[0].tiempo=result.tiempos.linea_1;
      this.lineas[1].tiempo=result.tiempos.linea_2;
      this.lineas[2].tiempo=result.tiempos.linea_3;
      this.lineas[3].tiempo=result.tiempos.linea_4;
      this.lineas[4].tiempo=result.tiempos.linea_5;
      this.lineas[5].tiempo=result.tiempos.linea_6;
      this.lineas[6].tiempo=result.tiempos.linea_7;
      this.lineas[7].tiempo=result.tiempos.linea_8;
      this.lineas[8].tiempo=result.tiempos.linea_9;
      this.lineas[9].tiempo=result.tiempos.linea_A;
      this.lineas[10].tiempo=result.tiempos.linea_B;
      this.lineas[11].tiempo=result.tiempos.linea_12;
    });
  }

}
