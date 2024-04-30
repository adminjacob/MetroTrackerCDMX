import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AfluenciaService } from 'src/app/services/afluencia.service';

@Component({
  selector: 'app-afluencia-detail',
  templateUrl: './afluencia-detail.page.html',
  styleUrls: ['./afluencia-detail.page.scss'],
})
export class AfluenciaDetailPage implements OnInit {

  linea: string = "1";
  segment: string = '';  // Valor inicial
  ultimoTiempoActualizacion = new Date();

  afluencias: any = [];

  estacionesPantitlan = [
    { nombre: 'Observatorio', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/observatorio.png', afluencia: 25 },
    { nombre: 'Tacubaya', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/tacubaya.png', afluencia: 40 },
    { nombre: 'Juanacatlán', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/juanacatlan.png', afluencia: 30 },
    { nombre: 'Chapultepec', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/chapultepec.png', afluencia: 55 },
    { nombre: 'Sevilla', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sevilla.png', afluencia: 10 },
    { nombre: 'Insurgentes', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/insurgentes.png', afluencia: 45 },
    { nombre: 'Cuauhtémoc', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/cuauhtemoc.png', afluencia: 70 },
    { nombre: 'Balderas', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balderas.png', afluencia: 85 },
    { nombre: 'Salto del Agua', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/saltodelagua.png', afluencia: 90 },
    { nombre: 'Isabel la Católica', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/isabellacatolica.png', afluencia: 75 },
    { nombre: 'Pino Suárez', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pinosuarez.png', afluencia: 80 },
    { nombre: 'Merced', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/merced.png', afluencia: 65 },
    { nombre: 'Candelaria', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/candelaria.png', afluencia: 50 },
    { nombre: 'San Lázaro', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sanlazaro.png', afluencia: 95 },
    { nombre: 'Moctezuma', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/moctezuma.png', afluencia: 100 },
    { nombre: 'Balbuena', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balbuena.png', afluencia: 45 },
    { nombre: 'Boulevard Puerto Aéreo', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/boulevard.png', afluencia: 35 },
    { nombre: 'Gómez Farías', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/gomezfarias.png', afluencia: 40 },
    { nombre: 'Zaragoza', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/zaragoza.png', afluencia: 55 },
    { nombre: 'Pantitlán', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pantitlan.png', afluencia: 10 }
  ];

  estacionesObservatorio = [
    { nombre: 'Pantitlán', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pantitlan.png', afluencia: 20 },
    { nombre: 'Zaragoza', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/zaragoza.png', afluencia: 45 },
    { nombre: 'Gómez Farías', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/gomezfarias.png', afluencia: 20 },
    { nombre: 'Boulevard Puerto Aéreo', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/boulevard.png', afluencia: 85 },
    { nombre: 'Balbuena', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balbuena.png', afluencia: 100 },
    { nombre: 'Moctezuma', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/moctezuma.png', afluencia: 100 },
    { nombre: 'San Lázaro', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sanlazaro.png', afluencia: 75 },
    { nombre: 'Candelaria', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/candelaria.png', afluencia: 30 },
    { nombre: 'Merced', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/merced.png', afluencia: 40 },
    { nombre: 'Pino Suárez', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pinosuarez.png', afluencia: 50 },
    { nombre: 'Isabel la Católica', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/isabellacatolica.png', afluencia: 40 },
    { nombre: 'Salto del Agua', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/saltodelagua.png', afluencia: 10 },
    { nombre: 'Balderas', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balderas.png', afluencia: 60 },
    { nombre: 'Cuauhtémoc', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/cuauhtemoc.png', afluencia: 10 },
    { nombre: 'Insurgentes', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/insurgentes.png', afluencia: 65 },
    { nombre: 'Sevilla', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sevilla.png', afluencia: 30 },
    { nombre: 'Chapultepec', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/chapultepec.png', afluencia: 70 },
    { nombre: 'Juanacatlán', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/juanacatlan.png', afluencia: 90 },
    { nombre: 'Tacubaya', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/tacubaya.png', afluencia: 100 },
    { nombre: 'Observatorio', imagen: 'https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/observatorio.png', afluencia: 25 }
  ];

  constructor(private route: ActivatedRoute, private afluenciaService: AfluenciaService) { }

  ngOnInit() {
    this.segment = this.route.snapshot.queryParamMap.get('direccion');
    console.log(this.segment);
    this.actualizarDatos();

    this.cargarAfluencias('Línea 1', 'Observatorio');
  }

  cargarAfluencias(linea: string, direccion: string) {
    this.afluenciaService.getAfluencias(linea, direccion).subscribe({
      next: (data) => {
        this.afluencias = data;
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
