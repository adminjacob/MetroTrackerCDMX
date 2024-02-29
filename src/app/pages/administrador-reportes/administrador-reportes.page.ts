import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-administrador-reportes',
  templateUrl: './administrador-reportes.page.html',
  styleUrls: ['./administrador-reportes.page.scss'],
})
export class AdministradorReportesPage implements OnInit {
  public reportes = [
    {
      fotoPerfil: '../../assets/imgs/avtar/user1.png',
      nombre: 'Juan Perez',
      fechaHora: '10 Oct 2023, 8:30 AM',
      linea: 'Línea 1',
      estacion: 'Indios Verdes',
      texto: 'Vagón muy concurrido en hora pico.',
      likes: 5,
      dislikes: 10,
      imagen: '../../assets/imgs/reports/report1.jpg',
      votados: 15
    },
    {
      fotoPerfil: '../../assets/imgs/avtar/user2.png',
      nombre: 'Maria Gonzales',
      fechaHora: '10 Oct 2023, 9:00 AM',
      linea: 'Línea 2',
      estacion: 'Bellas Artes',
      texto: 'Falla eléctrica en estación.',
      likes: 5,
      dislikes: 10,
      imagen: '../../assets/imgs/reports/report2.png',
      votados: 20
    },
    {
      fotoPerfil: '../../assets/imgs/avtar/user3.png',
      nombre: 'Carlos Ramirez',
      fechaHora: '10 Oct 2023, 10:00 AM',
      linea: 'Línea 3',
      estacion: 'Hidalgo',
      texto: 'La marcha es lenta.',
      likes: 5,
      dislikes: 10,
      imagen: '../../assets/imgs/reports/report3.jpg',
      votados: 8
    },
    {
      fotoPerfil: '../../assets/imgs/avtar/user4.png',
      nombre: 'Luisa Fernanda',
      fechaHora: '10 Oct 2023, 10:30 AM',
      linea: 'Línea 4',
      estacion: 'Martín Carrera',
      texto: 'Ocurrio una pelea',
      likes: 5,
      dislikes: 10,
      imagen: '../../assets/imgs/reports/report4.jpg',
      votados: 12
    },
    {
      fotoPerfil: '../../assets/imgs/avtar/user5.png',
      nombre: 'Miguel Ángel',
      fechaHora: '10 Oct 2023, 11:00 AM',
      linea: 'Línea 5',
      estacion: 'La Raza',
      texto: 'Afluencia moderada.',
      likes: 5,
      dislikes: 10,
      imagen: '../../assets/imgs/reports/report5.jpg',
      votados: 10
    },
    // ... y otros reportes
  ];


  constructor(private toastController: ToastController) {}

  ngOnInit() {
    // Carga inicial de reportes
  }

  async confirmarEliminacion(reporte) {
    const toast = await this.toastController.create({
      message: `¿Deseas eliminar el reporte de ${reporte.nombre}?`,
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

  eliminarReporte(reporte) {
    this.reportes = this.reportes.filter(r => r !== reporte);
    // Agrega aquí la lógica para eliminar el reporte de la base de datos
  }

  descargarCSV(){
    console.log("descargarCSV");
  }

  onSegmentChange($event){
    console.log("onSegmentChange");
  }
}
