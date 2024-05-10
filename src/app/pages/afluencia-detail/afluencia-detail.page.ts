import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfluenciaService } from 'src/app/services/afluencia.service';

@Component({
  selector: 'app-afluencia-detail',
  templateUrl: './afluencia-detail.page.html',
  styleUrls: ['./afluencia-detail.page.scss'],
})
export class AfluenciaDetailPage implements OnInit {

  linea: string = '';
  direccion: string = ''; 
  ultimoTiempoActualizacion = new Date();

  afluencias: any = [];

  constructor(private route: ActivatedRoute, private afluenciaService: AfluenciaService) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      this.linea = params.get('linea');
      this.direccion = params.get('direccion');
      console.log('Línea:', this.linea, 'Dirección:', this.direccion);
      this.actualizarDatos();
      this.cargarAfluencias(this.linea, this.direccion);
    });

  }


  cargarAfluencias(linea: string, direccion: string) {
    this.afluenciaService.getAfluencias(linea, direccion).subscribe({
      next: (data) => {
        this.afluencias = data;
        //console.log(this.afluencias);
      },
      error: (error) => {
        console.error('Hubo un error al obtener las afluencias:', error);
      }
    });
  }

  //Configuracion detallada

  getProgressBarClass(afluencia: number): string {
    if (afluencia <= 20) return 'progress-muy-baja';
    if (afluencia <= 40) return 'progress-baja';
    if (afluencia <= 60) return 'progress-moderada';
    if (afluencia <= 80) return 'progress-alta';
    return 'progress-maxima';
  }

  getProgressLabel(afluencia: number): string {
    if (afluencia <= 20) return 'Muy Baja';
    if (afluencia <= 40) return 'Baja';
    if (afluencia <= 60) return 'Moderada';
    if (afluencia <= 80) return 'Alta';
    return 'Máxima';
  }

  //Configuracion básica

  configMode: 'basica' | 'detallada' = 'basica';

  semaforoConfig = [
    { max: 33, color: 'verde' },
    { max: 66, color: 'amarillo' },
    { max: 100, color: 'rojo' }
  ];
  
  getSemaforoColor(afluencia: number): string {
    for (let config of this.semaforoConfig) {
      if (afluencia <= config.max) {
        return config.color;
      }
    }
    return 'rojo';  // Por defecto, devuelve rojo si no hay coincidencia.
  }
  
  toggleConfigMode() {
    this.configMode = this.configMode === 'basica' ? 'detallada' : 'basica';
  }
  
  actualizarDatos() {
    // Lógica para actualizar los datos
    this.ultimoTiempoActualizacion = new Date(); // Actualiza la hora de la última actualización
  }
  
}
