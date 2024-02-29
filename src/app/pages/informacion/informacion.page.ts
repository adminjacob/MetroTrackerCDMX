import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.loadMap();
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

  markers: Marker[] = [
    //Linea 1
    {
      position: { lat: 19.3986, lng: -99.2000 },
      title: 'Observatorio',
      accessibility: 'Elevadores disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4022, lng: -99.1876 },
      title: 'Tacubaya',
      accessibility: 'Escaleras electromecánicas disponibles en direccion observatorio.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4122, lng: -99.1820 },
      title: 'Juanacatlán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4207, lng: -99.1767 },
      title: 'Chapultepec',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4215, lng: -99.1709 },
      title: 'Sevilla',
      accessibility: 'Elevadores disponibles en exterior antes de torniquetes para ambas direcciones. Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4236, lng: -99.1632 },
      title: 'Insurgentes',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4257, lng: -99.1546 },
      title: 'Cuauhtémoc',
      accessibility: 'Elevadores disponibles antes de torniquetes para ambas direcciones. Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4272, lng: -99.1489 },
      title: 'Balderas',
      accessibility: 'Elevadores disponibles después de torniquetes para dirección Observatorio. Escaleras electromecánicas disponibles en anden dirección Pantitlán.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4272, lng: -99.1420 },
      title: 'Salto del Agua',
      accessibility: 'Elevadores disponibles después de torniquetes para ambas direcciones. Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4264, lng: -99.1378 },
      title: 'Isabel la Católica',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4259, lng: -99.1326 },
      title: 'Pino Suárez',
      accessibility: 'Elevadores disponibles en andén para ambas direcciones. Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4287, lng: -99.1251 },
      title: 'Merced',
      accessibility: 'Elevadores disponibles después de torniquetes para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4295, lng: -99.1208 }, 
      title: 'Candelaria',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4302, lng: -99.1137 },
      title: 'San Lázaro',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4268, lng: -99.1097 },
      title: 'Moctezuma',
      accessibility: 'Elevadores disponibles en exterior antes de torniquetes para ambas direcciones. Escaleras electromecánicas disponibles cerca de torniquetes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4235, lng: -99.1024 },
      title: 'Balbuena',
      accessibility: 'Elevadores disponibles antes de torniquetes para ambas direcciones. Escaleras electromecánicas disponibles cerca de torniquetes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4210, lng: -99.0956 },
      title: 'Boulevard Puerto Aéreo',
      accessibility: 'Elevadores disponibles en exterior antes de torniquetes para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4168, lng: -99.0902 },
      title: 'Gómez Farías',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4120, lng: -99.0825 },
      title: 'Zaragoza',
      accessibility: 'Elevadores sin salida a la calle antes de torniquetes para dirección Observatorio. Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    {
      position: { lat: 19.4151, lng: -99.0742 },
      title: 'Pantitlán',
      accessibility: 'Elevadores disponibles en andén central y pasillo de correspondencia para L-1, L-5, L-9. Escaleras electromecánicas no especificadas.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7c/MetroCDMX_L%C3%ADnea_1.png"
    },
    //Linea 2
    {
      position: { lat: 19.4592, lng: -99.2158 },
      title: 'Cuatro Caminos',
      accessibility: 'Elevadores disponibles en el pasillo sobre andén y en el pasillo que sale a la calle. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4586, lng: -99.2029 },
      title: 'Panteones',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4592, lng: -99.1875 },
      title: 'Tacuba',
      accessibility: 'Escaleras electromecánicas disponibles en mezanine.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4572, lng: -99.1815 },
      title: 'Cuitláhuac',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4528, lng: -99.1755 },
      title: 'Popotla',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4492, lng: -99.1718 },
      title: 'Colegio Militar',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4447, lng: -99.1674 },
      title: 'Normal',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4419, lng: -99.1607 },
      title: 'San Cosme',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4391, lng: -99.1543 },
      title: 'Revolución',
      accessibility: 'Elevadores disponibles en la salida del andén hacia ambas direcciones. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4375, lng: -99.1475 },
      title: 'Hidalgo',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4364, lng: -99.1416 },
      title: 'Bellas Artes',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4354, lng: -99.1367 },
      title: 'Allende',
      accessibility: 'Elevadores disponibles en salida. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4325, lng: -99.1322 },
      title: 'Zócalo',
      accessibility: 'Elevadores en andén para ambas direcciones. Escaleras electromecánicas en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4259, lng: -99.1326 },
      title: 'Pino Suárez',
      accessibility: 'Elevadores en andén dirección Cuatro Caminos. Escaleras electromecánicas en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4157, lng: -99.1346 },
      title: 'San Antonio Abad',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4091, lng: -99.1356 },
      title: 'Chabacano',
      accessibility: 'Elevadores disponibles antes de los torniquetes, en el andén, salida a la correspondencia de L-2, L-8, y L-9, y cerca de la permanencia Chabacano en pasillo de correspondencia. Escaleras electromecánicas en andén para ambas direcciones y en andén central.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.4009, lng: -99.1368 },
      title: 'Viaducto',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3951, lng: -99.1379 },
      title: 'Xola',
      accessibility: 'Elevadores en andén central, salida Pte. lado vía dirección Tasqueña y salida Ote. lado vía dirección Cuatro Caminos. Escaleras electromecánicas en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3874, lng: -99.1389 },
      title: 'Villa de Cortés',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3795, lng: -99.1401 },
      title: 'Nativitas',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3698, lng: -99.1417 },
      title: 'Portales',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3610, lng: -99.1430 },
      title: 'Ermita',
      accessibility: 'Elevador disponible en la salida de la estación hacia Tasqueña. Escaleras electromecánicas en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3533, lng: -99.1450 },
      title: 'General Anaya',
      accessibility: 'Escaleras electromecánicas disponibles en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    {
      position: { lat: 19.3439, lng: -99.1395 },
      title: 'Tasqueña',
      accessibility: 'Elevadores en el puente peatonal central de autobús, después de torniquetes central de la estación, y en puente del paradero sur. Escaleras electromecánicas en andén para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/MetroDF_L%C3%ADnea_2.svg"
    },
    //Linea 3
    {
      position: { lat: 19.49563, lng: -99.11938 },
      title: 'Indios Verdes',
      accessibility: 'Elevadores disponibles después de torniquetes, en el puente peatonal.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.4851, lng: -99.1254 },
      title: 'Deportivo 18 de Marzo',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.47658, lng: -99.13177 },
      title: 'Potrero',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.4697, lng: -99.1365 },
      title: 'La Raza',
      accessibility: 'Elevadores disponibles en andén para direcciones Universidad e Indios Verdes. Escaleras electromecánicas disponibles.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.45515, lng: -99.14424 },
      title: 'Tlatelolco',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.44461, lng: -99.14544 },
      title: 'Guerrero',
      accessibility: 'Escaleras electromecánicas disponibles en andén para dirección Universidad.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.43764, lng: -99.14759 },
      title: 'Hidalgo',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Universidad e Indios Verdes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.4333, lng: -99.1476 },
      title: 'Juárez',
      accessibility: 'Elevadores disponibles después de torniquetes para direcciones Universidad e Indios Verdes. Escaleras electromecánicas disponibles en salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.42699, lng: -99.14902 },
      title: 'Balderas',
      accessibility: 'Elevadores disponibles en andén para direcciones Universidad e Indios Verdes. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.41937, lng: -99.15034 },
      title: 'Niños Héroes',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.41162, lng: -99.15572 },
      title: 'Hospital General',
      accessibility: 'Elevadores disponibles después de torniquetes y dan a la calle para direcciones Universidad e Indios Verdes. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.40635, lng: -99.15554 },
      title: 'Centro Médico',
      accessibility: 'Elevadores disponibles en andén para dirección Indios Verdes. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.39595, lng: -99.15593 },
      title: 'Etiopía/Plaza de la Transparencia',
      accessibility: 'Elevadores disponibles en andén con salida a la estación antes de torniquetes para direcciones Universidad e Indios Verdes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.38578, lng: -99.15661 },
      title: 'Eugenia',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.37901, lng: -99.15921 },
      title: 'División del Norte',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.37083, lng: -99.16475 },
      title: 'Zapata',
      accessibility: 'Elevadores exteriores disponibles, no cruzan torniquete, bajan a andén directo para direcciones Universidad e Indios Verdes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.36139, lng: -99.17024 },
      title: 'Coyoacán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.3541, lng: -99.1753 },
      title: 'Viveros/Derechos Humanos',
      accessibility: 'Escaleras electromecánicas disponibles en andén para dirección Universidad.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.34635, lng: -99.1806 },
      title: 'Miguel Ángel de Quevedo',
      accessibility: 'Escaleras electromecánicas disponibles antes de torniquetes y en salida para dirección Indios Verdes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.33559, lng: -99.17657 },
      title: 'Copilco',
      accessibility: 'Elevadores exteriores disponibles en salida Pte. lado vía dirección Universidad. Elevadores disponibles en andén para direcciones Universidad e Indios Verdes, pasan torniquete.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    {
      position: { lat: 19.32422, lng: -99.17424 },
      title: 'Universidad',
      accessibility: 'Elevadores disponibles que bajan a andén y en andén de salida, vía más alejada del campus de la Universidad, bajan al andén exterior.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/MetroDF_L%C3%ADnea_3.svg"
    },
    //Linea 4
    {
      position: { lat: 19.4829, lng: -99.1070 },
      title: 'Martín Carrera',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4744, lng: -99.1080 }, 
      title: 'Talismán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4646, lng: -99.1120 }, 
      title: 'Bondojito',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4580, lng: -99.1139 }, 
      title: 'Consulado',
      accessibility: 'Escaleras electromecánicas disponibles en andén y área de torniquetes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4488, lng: -99.1158 }, 
      title: 'Canal del Norte',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4396, lng: -99.1182 }, 
      title: 'Morelos',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Martín Carrera y Santa Anita.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4295, lng: -99.1209 }, 
      title: 'Candelaria',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4216, lng: -99.1206 }, 
      title: 'Fray Servando',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Martín Carrera y Santa Anita.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4108, lng: -99.1216 }, 
      title: 'Jamaica',
      accessibility: 'Escaleras electromecánicas disponibles en andén después de torniquetes, mezanine y pasillos de correspondencia.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    {
      position: { lat: 19.4041, lng: -99.1207 }, 
      title: 'Santa Anita',
      accessibility: 'Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/MetroDF_L%C3%ADnea_4.svg"
    },
    //Linea 5
    {
      position: { lat: 19.5007, lng: -99.1493 },
      title: 'Politécnico',
      accessibility: 'Elevadores disponibles: exterior baja a estación, andén de llegada sube a estación, andén de salida sube a andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4892, lng: -99.1447 },
      title: 'Instituto del Petróleo',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4790, lng: -99.1406 },
      title: 'Autobuses del Norte',
      accessibility: 'Elevadores disponibles: central de autobuses a antes de torniquetes para dirección Politécnico, después de torniquetes baja a andén para dirección Pantitlán, exterior después de torniquetes baja a andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4696, lng: -99.1365 },
      title: 'La Raza',
      accessibility: 'Elevadores disponibles en andén para direcciones Politécnico y Pantitlán, dentro de la estación llegan a andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4633, lng: -99.1304 },
      title: 'Misterios',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4589, lng: -99.1195 },
      title: 'Valle Gomez',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4515, lng: -99.1052 },
      title: 'Eduardo Molina',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4512, lng: -99.0961 },
      title: 'Aragón',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4451, lng: -99.0869 },
      title: 'Oceanía',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4341, lng: -99.0880 },
      title: 'Terminal Aérea',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4244, lng: -99.0883 },
      title: 'Hangares',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    {
      position: { lat: 19.4150, lng: -99.0743 },
      title: 'Pantitlán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/MetroDF_L%C3%ADnea_5.svg"
    },
    //Linea 6
    {
      position: { lat: 19.5052, lng: -99.2000 },
      title: 'El Rosario',
      accessibility: 'Elevadores disponibles en andén para direcciones Martín Carrera y El Rosario.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4948, lng: -99.1962 }, 
      title: 'Tezozómoc',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4908, lng: -99.1862 },
      title: 'UAM-Azcapotzalco',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4906, lng: -99.1741 }, 
      title: 'Ferrería/Arena Ciudad de México',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4887, lng: -99.1631 }, 
      title: 'Norte 45',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4898, lng: -99.1560 }, 
      title: 'Vallejo',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4893, lng: -99.1447 }, 
      title: 'Instituto del Petróleo',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4881, lng: -99.1351 }, 
      title: 'Lindavista',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4851, lng: -99.1253 }, 
      title: 'Deportivo 18 de Marzo',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones El Rosario y Martín Carrera.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4817, lng: -99.1184 }, 
      title: 'La Villa-Basílica',
      accessibility: 'Escaleras electromecánicas disponibles antes de torniquetes para dirección Martín Carrera.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    {
      position: { lat: 19.4849, lng: -99.1044 },
      title: 'Martín Carrera',
      accessibility: 'Escaleras electromecánicas disponibles después de torniquetes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/MetroDF_L%C3%ADnea_6.svg"
    },
    //Linea 7
    {
      position: { lat: 19.5048, lng: -99.2000 },
      title: 'El Rosario',
      accessibility: 'Elevadores disponibles en andén para direcciones Barranca del Muerto y El Rosario.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4907, lng: -99.1952 },
      title: 'Aquiles Serdán',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4790, lng: -99.1897 },
      title: 'Camarones',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4696, lng: -99.1901 },
      title: 'Refinería',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para dirección El Rosario.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4592, lng: -99.1876 },
      title: 'Tacuba',
      accessibility: 'Escaleras electromecánicas disponibles en pasillos de correspondencia de Línea 7 a Líneas 2 y 3, en andén y torinquetes para dirección Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4450, lng: -99.1918 },
      title: 'San Joaquín',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto, y después de torniquetes.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4337, lng: -99.1913 },
      title: 'Polanco',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4250, lng: -99.1919 },
      title: 'Auditorio',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4117, lng: -99.1913 },
      title: 'Constituyentes',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para dirección Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.4019, lng: -99.1873 },
      title: 'Tacubaya',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.3914, lng: -99.1858 },
      title: 'San Pedro de los Pinos',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.3850, lng: -99.1867 },
      title: 'San Antonio',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.3762, lng: -99.1879 },
      title: 'Mixcoac',
      accessibility: 'Escaleras electromecánicas disponibles en andén y salida para direcciones El Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    {
      position: { lat: 19.3614, lng: -99.1892 },
      title: 'Barranca del Muerto',
      accessibility: 'Escaleras electromecánicas disponibles en medio, andén y salida para direcciones Rosario y Barranca del Muerto.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/MetroDF_L%C3%ADnea_7.svg"
    },
    //Linea 8
    {
      position: { lat: 19.4438, lng: -99.1372 },
      title: 'Garibaldi-Lagunilla',
      accessibility: 'Escaleras electromecánicas disponibles en transbordes inferiores hacia Buenavista y Ciudad Azteca.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
      
    },
    {
      position: { lat: 19.4362, lng: -99.1412 },
      title: 'Bellas Artes',
      accessibility: 'Escaleras electromecánicas disponibles en andén central para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4315, lng: -99.1412 },
      title: 'San Juan de Letrán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4272, lng: -99.1420 },
      title: 'Salto del Agua',
      accessibility: 'Escaleras electromecánicas disponibles en andén central para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4215, lng: -99.1431 },
      title: 'Doctores',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4131, lng: -99.1440 },
      title: 'Obrera',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4090, lng: -99.1353 },
      title: 'Chabacano',
      accessibility: 'Elevadores disponibles desde la calle a antes de torniquetes para dirección Constitución de 1917 y después de torniquetes para dirección Garibaldi. Escaleras electromecánicas disponibles en andén medio y andén central.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4066, lng: -99.1262 },
      title: 'La Viga',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.4041, lng: -99.12112060 },
      title: 'Santa Anita',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3980, lng: -99.1134 },
      title: 'Coyuya',
      accessibility: 'Elevadores disponibles sobre el puente peatonal, antes de torniquetes detrás de taquilla para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3886, lng: -99.1122 },
      title: 'Iztacalco',
      accessibility: 'Elevadores disponibles en andén central libran torniquete baja a andén, y elevadores exteriores en salida oeste y este suben a estación.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3789, lng: -99.1094 },
      title: 'Apatlaco',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3730, lng: -99.1076 },
      title: 'Aculco',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3645, lng: -99.1092 },
      title: 'Escuadrón 201',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3562, lng: -99.1011 },
      title: 'Atlalilco',
      accessibility: 'Elevadores disponibles en el exterior bajan al andén para direcciones Garibaldi y Constitución de 1917.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3577, lng: -99.0932 },
      title: 'Iztapalapa',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3560, lng: -99.0856 },
      title: 'Cerro de la Estrella',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3509, lng: -99.0748 },
      title: 'UAM-I',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    {
      position: { lat: 19.3459, lng: -99.0638 },
      title: 'Constitución de 1917',
      accessibility: 'Elevadores disponibles bajan a andén de llegada y salida terminal Constitución, y elevador exterior en salida noroeste baja al andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/MetroDF_L%C3%ADnea_8.svg"
    },
    //Linea 9
    {
      position: { lat: 19.4022, lng: -99.1879 },
      title: 'Tacubaya',
      accessibility: 'Escaleras electromecánicas disponibles en pasillos de correspondencia L-1, L-7, y L-9.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4060, lng: -99.1788 },
      title: 'Patriotismo',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4058, lng: -99.1685 },
      title: 'Chilpancingo',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4065, lng: -99.1551 },
      title: 'Centro Médico',
      accessibility: 'Elevadores disponibles después de torniquetes bajan a andén para dirección Pantitlán y en andén central para direcciones Tacubaya y Pantitlán. Escaleras electromecánicas disponibles en andén central y correspondencia L-3 a L-9.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4072, lng: -99.1446 },
      title: 'Lázaro Cárdenas',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4080, lng: -99.1357 },
      title: 'Chabacano',
      accessibility: 'Elevadores disponibles en andén y salida con rampa para dirección Garibaldi. Escaleras electromecánicas disponibles en andén central y pasillos de correspondencia.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4090, lng: -99.1219 },
      title: 'Jamaica',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4084, lng: -99.1132 },
      title: 'Mixiuhca',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4085, lng: -99.1032 },
      title: 'Velódromo',
      accessibility: 'Elevadores disponibles en exterior suben a andén para dirección Tacubaya. Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4084, lng: -99.0912 },
      title: 'Ciudad Deportiva',
      accessibility: 'Elevadores disponibles en calle a antes de torniquetes y en pie de andén para dirección Tacubaya con puente para cruce. Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4072, lng: -99.0825 },
      title: 'Puebla',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Pantitlán y Tacubaya.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    {
      position: { lat: 19.4153, lng: -99.0722 },
      title: 'Pantitlán',
      accessibility: 'Escaleras electromecánicas disponibles en andén central para todas las direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MetroDF_L%C3%ADnea_9.svg"
    },
    //Linea A
    {
      position: { lat: 19.4146, lng: -99.0725 },
      title: 'Pantitlán',
      accessibility: 'Elevadores disponibles en andén estación correspondencia L-A a L-1 y en andén central para dirección La Paz.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.4047, lng: -99.0696 },
      title: 'Agrícola Oriental',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3987, lng: -99.0594 },
      title: 'Canal de San Juan',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3912, lng: -99.0463 },
      title: 'Tepalcates',
      accessibility: 'Elevadores disponibles en andén medio para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3852, lng: -99.0356 },
      title: 'Guelatao',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3733, lng: -99.0170 },
      title: 'Peñón Viejo',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3646, lng: -99.0059 },
      title: 'Acatitla',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3603, lng: -98.9953 },
      title: 'Santa Marta',
      accessibility: 'Elevadores disponibles en paradero para dirección La Paz.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3589, lng: -98.9768 },
      title: 'Los Reyes',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    {
      position: { lat: 19.3507, lng: -98.9609 },
      title: 'La Paz',
      accessibility: 'Elevadores disponibles en andén, salida y paradero para dirección La Paz.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/MetroDF_L%C3%ADnea_A.svg"
    },
    //Linea B
    {
      position: { lat: 19.4462, lng: -99.1523 },
      title: 'Buenavista',
      accessibility: 'Elevadores disponibles pegados a taquilla y en el pasillo de salida hacia la Biblioteca Vasconcelos.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4447, lng: -99.1451 },
      title: 'Guerrero',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Ciudad Azteca y Buenavista.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4437, lng: -99.1385 },
      title: 'Garibaldi/Lagunilla',
      accessibility: 'Escaleras electromecánicas disponibles en pasillo de correspondencia L-8 y L-B.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4433, lng: -99.1318 },
      title: 'Lagunilla',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4427, lng: -99.1241 },
      title: 'Tepito',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4396, lng: -99.1181 },
      title: 'Morelos',
      accessibility: 'Escaleras electromecánicas disponibles en andén para direcciones Ciudad Azteca y Buenavista.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4312, lng: -99.1036 },
      title: 'San Lázaro',
      accessibility: 'Elevadores disponibles en andén y pasillo peatonal para direcciones Ciudad Azteca y Buenavista, con puente para cruce. Escaleras electromecánicas disponibles en andén y pasillo de correspondencia L-1 L-B.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4366, lng: -99.0743 },
      title: 'Ricardo Flores Magón',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4408, lng: -99.0941 },
      title: 'Romero Rubio',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4459, lng: -99.0870 },
      title: 'Oceanía',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4509, lng: -99.0794 },
      title: 'Deportivo Oceanía',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4581, lng: -99.0693 },
      title: 'Bosque de Aragón',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4615, lng: -99.0614 },
      title: 'Villa de Aragón',
      accessibility: 'Elevadores disponibles después de torniquetes y al final del puente peatonal para direcciones Ciudad Azteca y Buenavista.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4725, lng: -99.0545 },
      title: 'Nezahualcóyotl',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4855, lng: -99.0491 },
      title: 'Impulsora',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.4910, lng: -99.0464 },
      title: 'Río de los Remedios',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.5015, lng: -99.0420 },
      title: 'Múzquiz',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.5155, lng: -99.0359 },
      title: 'Ecatepec',
      accessibility: 'Elevadores disponibles antes de torniquetes para ambas direcciones y en nivel calle en puente peatonal.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.5219, lng: -99.0333 },
      title: 'Olímpica',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.5284, lng: -99.0302 },
      title: 'Plaza Aragón',
      accessibility: 'Elevadores disponibles en andén central para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    {
      position: { lat: 19.5349, lng: -99.0276 },
      title: 'Ciudad Azteca',
      accessibility: 'Elevadores disponibles en andén central para ambas direcciones.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f6/MetroDF_L%C3%ADnea_B.svg"
    },
    //Linea 12
    {
      position: { lat: 19.3762, lng: -99.1878 },
      title: 'Mixcoac',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y salida a calle. Escaleras electromecánicas disponibles en terminal y andén, y en pasillo de correspondencia entre Línea 12 y otras líneas.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3734, lng: -99.1786 },
      title: 'Insurgentes Sur',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y salida a calle. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3718, lng: -99.1713 },
      title: 'Hospital 20 de Noviembre',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y salida a calle. Escaleras electromecánicas disponibles en andén y salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3710, lng: -99.1652 },
      title: 'Zapata',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y salida  a calle. Escaleras electromecánicas disponibles en andén y salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3707, lng: -99.1586 },
      title: 'Parque de los Venados',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y de calle. Escaleras electromecánicas disponibles en mezzanine y andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3613, lng: -99.1513 },
      title: 'Eje Central',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y de calle. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3600, lng: -99.1432 },
      title: 'Ermita',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y en pasillo de transbordo. Escaleras electromecánicas disponibles en andén y pasillo de correspondencia L-12 a L-2.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3577, lng: -99.1230 },
      title: 'Mexicaltzingo',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y de calle. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3527, lng: -99.1060 },
      title: 'Atlalilco',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y en pasillo de correspondencia. Escaleras electromecánicas disponibles en andén y pasillos de correspondencia.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3368, lng: -99.1088 },
      title: 'Culhuacán',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3281, lng: -99.1046 },
      title: 'San Andrés Tomatlán',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3221, lng: -99.0957 },
      title: 'Lomas Estrella',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3205, lng: -99.0860 },
      title: 'Calle 11',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3175, lng: -99.0749 },
      title: 'Periférico Oriente',
      accessibility: 'Elevadores disponibles de nivel calle a andén central. Escaleras electromecánicas disponibles en andén central y salida.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3063, lng: -99.0652 },
      title: 'Tezonco',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3043, lng: -99.0595 },
      title: 'Olivos',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.3003, lng: -99.0462 },
      title: 'Nopalera',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac. Escaleras electromecánicas disponibles en pasillo.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.2966, lng: -99.0343 },
      title: 'Zapotitlán',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.2944, lng: -99.0240 },
      title: 'Tlaltenco',
      accessibility: 'Información de accesibilidad no proporcionada por STC Metro.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    },
    {
      position: { lat: 19.2870, lng: -99.0138 },
      title: 'Tláhuac',
      accessibility: 'Elevadores disponibles en andén para direcciones Mixcoac y Tláhuac, y de calle. Escaleras electromecánicas disponibles en andén.',
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/MetroDF_L%C3%ADnea_12.svg"
    }
];

}