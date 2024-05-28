import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReportService } from 'src/app/services/report.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FullScreenImageComponent } from '../../components/full-screen-image/full-screen-image.component';
import { LoadingController } from '@ionic/angular';
import { DatosFiltroService } from '../../services/datos-filtro.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-administrador-reportes',
  templateUrl: './administrador-reportes.page.html',
  styleUrls: ['./administrador-reportes.page.scss'],
})
export class AdministradorReportesPage implements OnInit {
  
  reportes: any = [];
  previousUrl: string = '';
  filtro: any = {};

  constructor(private router: Router, 
    private reporteService: ReportService, 
    private modalController: ModalController, 
    private loadingController: LoadingController,
    private datosFiltroService: DatosFiltroService,
    private toastController:ToastController,
    public alertController: AlertController) {
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if(this.previousUrl && event.url === '/administrador-tabs/administrador-reportes' && this.previousUrl === '/filtro-reportes') {
          // La lógica que se ejecutara solo cuando vengamos de /filtro-reportes
          //console.log(event.url);
          this.filtro = this.datosFiltroService.getDatosFiltro();
          console.log(this.filtro);
          this.cargarReportes(this.filtro);
        }
        // Actualiza la URL anterior después de toda la lógica para no sobrescribir con la actual prematuramente
        this.previousUrl = event.url;
      });
    }

  ngOnInit() {
    this.cargarReportes();
  }

  async cargarReportes(query = {}) {
    const loading = await this.loadingController.create({
      message: 'Cargando reportes...'
    });
    await loading.present();
  
    this.reporteService.obtenerReportes(query).subscribe(async result => {
      this.reportes = result;
      //console.log(this.reportes);
      await loading.dismiss();
    }, async error => {
      console.error('Error al cargar los reportes: ', error);
      await loading.dismiss();
    });
  }

  prepararDatosParaExcel(datos: any[]): any[] {
    return datos.map(reporte => ({
      Autor: reporte.autor,
      Titulo: reporte.titulo,
      Descripcion: reporte.descripcion,
      FechaHora: reporte.fechaHora,
      Linea: reporte.linea,
      Direccion: reporte.direccion,
      Estacion: reporte.estacion,
      Likes: reporte.likes,
      Dislikes: reporte.dislikes,
    }));
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

  exportarAExcel(): void {
    // Preparar los datos para el Excel
    const datosParaExcel = this.prepararDatosParaExcel(this.reportes);

    // Crear una hoja de cálculo con los datos preparados
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datosParaExcel);
    
    // Crear un libro de trabajo y añadir la hoja de cálculo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reportes');
    
    // Generar el archivo Excel
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    
    // Usar file-saver para guardar el archivo en el cliente
    const data: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    saveAs(data, 'reportes.xlsx');
  }

  async confirmarEliminacion(reporte) {
    const toast = await this.toastController.create({
      message: `¿Deseas eliminar el reporte "${reporte.titulo}"?`,
      duration: 3000,
      buttons: [
        {
          side: 'end',
          text: 'Eliminar',
          handler: () => {
            this.eliminarReporte(reporte);
          }
        }
      ]
    });
    await toast.present();
  }

  async eliminarReporte(reporte) {
    try {
      const result = await this.reporteService.deleteReport(reporte.id).toPromise();
  
      if (result === "Reporte eliminado con éxito.") {
        this.reportes = this.reportes.filter(r => r !== reporte);
      } else {
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: 'Ocurrió un error al eliminar el reporte.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    } catch (error) {
      console.log(error);
    }
  }

}
