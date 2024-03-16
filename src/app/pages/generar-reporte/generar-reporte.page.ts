import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ReportService } from 'src/app/services/report.service';
import { Geolocation } from '@capacitor/geolocation';
import { NgForm } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { EstacionesService } from 'src/app/services/estaciones.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.page.html',
  styleUrls: ['./generar-reporte.page.scss'],
})
export class GenerarReportePage implements OnInit {

  id:string="";
  nombreCompleto: string;
  selectedFile: File;

  reporte:any = {
    descripcion: '',
    id_usuario: '',
    titulo: '',
    estacion: '',
    linea: '',
    direccion: ''
  };

  estaciones:any;
  estacionesCercanas: any;
  estacionSeleccionada: any;
  estacionesFiltradas: any;

  submitAttempted = false;

  @ViewChild('reportForm') reportForm: NgForm;

  constructor(private navCtrl: NavController, 
    private reportService: ReportService, 
    private actionSheetCtrl: ActionSheetController, 
    private estacionesService:EstacionesService,
    private userService: UserService) { }

  async ngOnInit() {
    const encryptedId=localStorage.getItem('id');
    this.id=this.userService.decrypt(encryptedId);
    this.reporte.id_usuario = this.id;

    this.estacionesService.obtenerLista().subscribe(async result => {
        this.estaciones = result;
        this.estacionesFiltradas = result;
        // Ahora esta línea se ejecuta después de que los datos están disponibles
        this.estacionesCercanas = await this.encontrarEstacionesMasCercanas(this.estaciones);
    });
}

  async checkPermissions() {
    const hasPermission = await Geolocation.checkPermissions();
    if (hasPermission.location !== 'granted') {
      await Geolocation.requestPermissions();
    }
  }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      return {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
    } catch (e) {
      console.error('Error getting location', e);
    }
  }

  //Fórmula de Haversine 
  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en kilómetros
  }

  async encontrarEstacionesMasCercanas(estaciones: any[]): Promise<any[]> {

    this.checkPermissions();
    const miUbicacion = await this.getCurrentPosition();
    let estacionesConDistancia = estaciones.map(estacion => ({
      ...estacion,
      distancia: this.calcularDistancia(miUbicacion.lat, miUbicacion.lng, estacion.position.lat, estacion.position.lng)
    }));
  
    // Ordenar las estaciones por distancia
    estacionesConDistancia.sort((a, b) => a.distancia - b.distancia);
  
    // Retornar las 4 estaciones más cercanas
    return estacionesConDistancia.slice(0, 4);
  }

  filtrarEstaciones(texto: string) {
    if (!texto) {
      this.estacionesFiltradas = this.estaciones; // Si no hay texto de búsqueda, muestra todas las estaciones
    } else {
      this.estacionesFiltradas = this.estaciones.filter(estacion =>
        estacion.estacion.toLowerCase().includes(texto.toLowerCase()) ||
        estacion.linea.toLowerCase().includes(texto.toLowerCase()) ||
        estacion.direccion.toLowerCase().includes(texto.toLowerCase())
      );
    }
  }

  actualizarReporte(estacion: any) {
    // Aquí se actualiza el objeto de reporte con la información de la estación seleccionada
    this.estacionSeleccionada = estacion;
    
    this.reporte.linea = estacion.linea;
    this.reporte.estacion = estacion.estacion;
    this.reporte.direccion = estacion.direccion;
  }

  goBack(){
    this.navCtrl.back();
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;

    console.log(file);
  }

  async getImage() {
    const buttons = [
      {
        text: 'Tomar foto',
        icon: 'camera',
        handler: () => {
          this.takePicture(CameraSource.Camera);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Tomar fotografia',
      mode: 'md',
      buttons
    });
    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: source // CameraSource.Camera para cámara o CameraSource.Photos para galería
    });
  
    // La imagen está disponible en image.webPath
    var imageUrl = image.webPath;

    // Convierte la URL de la imagen a Blob
    fetch(imageUrl).then(res => res.blob()).then(blob => {
      // Crea un objeto File a partir del Blob
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });

      // Ahora se asigna este archivo a una variable
      this.selectedFile = file;
    
    });
  
  }

  submitReport(){

    this.submitAttempted = true;

    // Verificar si el formulario es válido
    if (!this.reportForm.valid) {
      console.log('Formulario no válido, no se puede avanzar.');
      return; // Detener la ejecución si el formulario no es válido
    }

    const formData = new FormData();
    formData.append('descripcion', this.reporte.descripcion);
    formData.append('id_usuario', this.reporte.id_usuario);
    formData.append('titulo', this.reporte.titulo);
    formData.append('estacion', this.reporte.estacion);
    formData.append('linea', this.reporte.linea);
    formData.append('direccion', this.reporte.direccion);
    // Agregar la imagen si está presente
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    this.reportService.crearReporte(formData).subscribe(result=>{
      if(result==="Reporte creado de forma exitosa"){
        alert("Reporte creado de forma exitosa");
      }else{
        alert("Ocurrio un error al generar el reporte");
      }
    })
  }

}
