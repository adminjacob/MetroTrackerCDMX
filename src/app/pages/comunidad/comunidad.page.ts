import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReportService } from 'src/app/services/report.service';
import { ModalController } from '@ionic/angular';
import { FullScreenImageComponent } from '../../components/full-screen-image/full-screen-image.component';
import { LoadingController } from '@ionic/angular';
import { DatosFiltroService } from '../../services/datos-filtro.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {
  reportes: any = [];
  idUser: string = "";
  filtro: any = {};
  previousUrl: string = '';

  constructor(private router: Router, 
    private reporteService: ReportService, 
    private modalController: ModalController, 
    private loadingController: LoadingController,
    private datosFiltroService: DatosFiltroService) {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(this.previousUrl && event.url === '/tabs/tab3' && this.previousUrl === '/filtro-reportes') {
          // La lógica que se ejecutara solo cuando vengamos de /filtro-reportes
          this.filtro = this.datosFiltroService.getDatosFiltro();
          //console.log(this.filtro);
          this.cargarReportes(this.filtro);
        }
        // Actualiza la URL anterior después de toda la lógica para no sobrescribir con la actual prematuramente
        this.previousUrl = event.url;
      });
  }

  ngOnInit() {
    this.idUser = localStorage.getItem('id') || '';
    this.cargarReportes();
  }

  async cargarReportes(query = {}) {
    const loading = await this.loadingController.create({
      message: 'Cargando reportes...'
    });
    await loading.present();
  
    this.reporteService.obtenerReportes(query).subscribe(async result => {
      this.reportes = result;
      await loading.dismiss();
    }, async error => {
      console.error('Error al cargar los reportes: ', error);
      await loading.dismiss();
    });
  }

  navegarAFiltroReportes() {
    this.router.navigate(['/filtro-reportes']);
  }

  async openImageFullScreen(imageUrl: string) {
    const modal = await this.modalController.create({
      component: FullScreenImageComponent,
      componentProps: {
        imageUrl: imageUrl
      }
    });
    return await modal.present();
  }

  nuevoReporte() {
    this.router.navigate(['generar-reporte']);
  }

  likeReporte(reportId: string) {
    this.reporteService.likeReporte(reportId, this.idUser).subscribe(result => {
      if (result === "Like agregado correctamente.") {
        this.actualizarReporte(reportId, true);
      }
    });
  }

  dislikeReporte(reportId: string) {
    this.reporteService.dislikeReporte(reportId, this.idUser).subscribe(result => {
      if (result === "Dislike agregado correctamente.") {
        this.actualizarReporte(reportId, false);
      }
    });
  }

  actualizarReporte(reportId: string, liked: boolean) {
    const reportIndex = this.reportes.findIndex(r => r.id === reportId);
    if (reportIndex !== -1) {
      // Actualizar likes o dislikes basado en la respuesta
      if (liked) {
        this.reportes[reportIndex].likes++;
        this.reportes[reportIndex].usuariosQueDieronLike.push(this.idUser);
      } else {
        this.reportes[reportIndex].dislikes++;
        this.reportes[reportIndex].usuariosQueDieronDislike.push(this.idUser);
      }
    }
  }

  usuarioHaDadoLike(reportId: string): boolean {
    const reporte = this.reportes.find(r => r.id === reportId);
    return reporte && reporte.usuariosQueDieronLike.includes(this.idUser);
  }

  usuarioHaDadoDislike(reportId: string): boolean {
    const reporte = this.reportes.find(r => r.id === reportId);
    return reporte && reporte.usuariosQueDieronDislike.includes(this.idUser);
  }

}