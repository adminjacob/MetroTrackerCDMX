import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AccesibilidadService } from 'src/app/services/accesibilidad.service';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
  accessibility: string;
  icon: string;
}

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss']
})
export class InformacionPage implements OnInit {

  map=null;
  markers:any;

  constructor(private accesibilidadService:AccesibilidadService) { }

  ngOnInit() {
    this.accesibilidadService.obtenerLista().subscribe((result)=>{
      this.markers=result;
      const miUbicacion = this.getCurrentPosition();
      console.log(miUbicacion);
      this.loadMap();
    });
  }

  async checkPermissions() {
    const hasPermission = await Geolocation.checkPermissions();
    if (hasPermission.location !== 'granted') {
      await Geolocation.requestPermissions();
    }
  }

  async getCurrentPosition() {
    this.checkPermissions();
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const currentPosition = {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude
      };
      this.addCurrentLocationMarker(currentPosition);
    } catch (e) {
      console.error('Error getting location', e);
    }
  }

  addCurrentLocationMarker(position: {lat: number, lng: number}) {
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      title: 'Tu ubicación',
      icon: {
        url: 'https://i.stack.imgur.com/pQ1Cq.png',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50) 
      }
    });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 19.432608, lng: -99.133209};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      this.getCurrentPosition();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    // Crear el marcador
    const googleMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
      icon: {
        url: marker.icon, 
        scaledSize: new google.maps.Size(22, 22), 
        origin: new google.maps.Point(0, 0), 
        anchor: new google.maps.Point(20, 40)
      }
    });

    // Crear un InfoWindow
    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${marker.title}</h3> <br> <h4>${marker.accessibility}</h4>`
      
    });

    // Agregar un evento de clic al marcador
    googleMarker.addListener('click', () => {
      infoWindow.open(this.map, googleMarker);
    });

    return googleMarker;
  }


  openMap() {
    window.open('https://metro-cdmx.com.mx/wp-content/uploads/2022/04/plano-red-metro-cdmx.jpg', '_blank');
  }

}