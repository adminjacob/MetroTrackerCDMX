import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EstacionesService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api/estaciones';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de estaciones
  obtenerLista(){
    return this.http.get(this.apiUrl);
  }

  //Se obtiene la lista local de estaciones en dado caso de que el usuario no tenga internet
  obtenerListaLocal(){
    return [
      {
          "position": { "lat": 19.3986, "lng": -99.2000 },
          "estacion": "Observatorio",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.3986, "lng": -99.2000 },
          "estacion": "Observatorio",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4022, "lng": -99.1876 },
          "estacion": "Tacubaya",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4022, "lng": -99.1876 },
          "estacion": "Tacubaya",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4122, "lng": -99.1820 },
          "estacion": "Juanacatlán",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4122, "lng": -99.1820 },
          "estacion": "Juanacatlán",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4207, "lng": -99.1767 },
          "estacion": "Chapultepec",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4207, "lng": -99.1767 },
          "estacion": "Chapultepec",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4215, "lng": -99.1709 },
          "estacion": "Sevilla",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4215, "lng": -99.1709 },
          "estacion": "Sevilla",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4236, "lng": -99.1632 },
          "estacion": "Insurgentes",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4236, "lng": -99.1632 },
          "estacion": "Insurgentes",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4257, "lng": -99.1546 },
          "estacion": "Cuauhtémoc",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4257, "lng": -99.1546 },
          "estacion": "Cuauhtémoc",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1489 },
          "estacion": "Balderas",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1489 },
          "estacion": "Balderas",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1420 },
          "estacion": "Salto del Agua",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1420 },
          "estacion": "Salto del Agua",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4264, "lng": -99.1378 },
          "estacion": "Isabel la Católica",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4264, "lng": -99.1378 },
          "estacion": "Isabel la Católica",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4259, "lng": -99.1326 },
          "estacion": "Pino Suárez",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4259, "lng": -99.1326 },
          "estacion": "Pino Suárez",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4255, "lng": -99.1262 },
          "estacion": "Merced",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4255, "lng": -99.1262 },
          "estacion": "Merced",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4251, "lng": -99.1211 },
          "estacion": "Candelaria",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4251, "lng": -99.1211 },
          "estacion": "Candelaria",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4305, "lng": -99.1149 },
          "estacion": "San Lázaro",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4305, "lng": -99.1149 },
          "estacion": "San Lázaro",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4360, "lng": -99.1093 },
          "estacion": "Moctezuma",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4360, "lng": -99.1093 },
          "estacion": "Moctezuma",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4409, "lng": -99.1041 },
          "estacion": "Balbuena",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4409, "lng": -99.1041 },
          "estacion": "Balbuena",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4454, "lng": -99.0996 },
          "estacion": "Boulevard Puerto Aéreo",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4454, "lng": -99.0996 },
          "estacion": "Boulevard Puerto Aéreo",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4509, "lng": -99.0951 },
          "estacion": "Gómez Farías",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4509, "lng": -99.0951 },
          "estacion": "Gómez Farías",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4564, "lng": -99.0905 },
          "estacion": "Zaragoza",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4564, "lng": -99.0905 },
          "estacion": "Zaragoza",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      {
          "position": { "lat": 19.4633, "lng": -99.0866 },
          "estacion": "Pantitlán",
          "linea": "Línea 1",
          "direccion": "Pantitlán"
      },
      {
          "position": { "lat": 19.4633, "lng": -99.0866 },
          "estacion": "Pantitlán",
          "linea": "Línea 1",
          "direccion": "Observatorio"
      },
      //Linea 2
      {
          "position": { "lat": 19.4592, "lng": -99.2158 },
          "estacion": "Cuatro Caminos",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4592, "lng": -99.2158 },
          "estacion": "Cuatro Caminos",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4586, "lng": -99.2029 },
          "estacion": "Panteones",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4586, "lng": -99.2029 },
          "estacion": "Panteones",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4592, "lng": -99.1875 },
          "estacion": "Tacuba",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4592, "lng": -99.1875 },
          "estacion": "Tacuba",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4572, "lng": -99.1815 },
          "estacion": "Cuitláhuac",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4572, "lng": -99.1815 },
          "estacion": "Cuitláhuac",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4528, "lng": -99.1755 },
          "estacion": "Popotla",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4528, "lng": -99.1755 },
          "estacion": "Popotla",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4492, "lng": -99.1718 },
          "estacion": "Colegio Militar",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4492, "lng": -99.1718 },
          "estacion": "Colegio Militar",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4447, "lng": -99.1674 },
          "estacion": "Normal",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4447, "lng": -99.1674 },
          "estacion": "Normal",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4419, "lng": -99.1607 },
          "estacion": "San Cosme",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4419, "lng": -99.1607 },
          "estacion": "San Cosme",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4391, "lng": -99.1543 },
          "estacion": "Revolución",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4391, "lng": -99.1543 },
          "estacion": "Revolución",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4365, "lng": -99.1474 },
          "estacion": "Hidalgo",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4365, "lng": -99.1474 },
          "estacion": "Hidalgo",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4364, "lng": -99.1416 },
          "estacion": "Bellas Artes",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4364, "lng": -99.1416 },
          "estacion": "Bellas Artes",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4354, "lng": -99.1367 },
          "estacion": "Allende",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4354, "lng": -99.1367 },
          "estacion": "Allende",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4325, "lng": -99.1322 },
          "estacion": "Zócalo",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4325, "lng": -99.1322 },
          "estacion": "Zócalo",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4259, "lng": -99.1326 },
          "estacion": "Pino Suárez",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4259, "lng": -99.1326 },
          "estacion": "Pino Suárez",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4157, "lng": -99.1346 },
          "estacion": "San Antonio Abad",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4157, "lng": -99.1346 },
          "estacion": "San Antonio Abad",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4091, "lng": -99.1356 },
          "estacion": "Chabacano",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4091, "lng": -99.1356 },
          "estacion": "Chabacano",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.4009, "lng": -99.1368 },
          "estacion": "Viaducto",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.4009, "lng": -99.1368 },
          "estacion": "Viaducto",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3951, "lng": -99.1379 },
          "estacion": "Xola",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3951, "lng": -99.1379 },
          "estacion": "Xola",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3874, "lng": -99.1389 },
          "estacion": "Villa de Cortés",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3874, "lng": -99.1389 },
          "estacion": "Villa de Cortés",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3795, "lng": -99.1401 },
          "estacion": "Nativitas",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3795, "lng": -99.1401 },
          "estacion": "Nativitas",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3698, "lng": -99.1417 },
          "estacion": "Portales",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3698, "lng": -99.1417 },
          "estacion": "Portales",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3610, "lng": -99.1430 },
          "estacion": "Ermita",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3610, "lng": -99.1430 },
          "estacion": "Ermita",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3533, "lng": -99.1450 },
          "estacion": "General Anaya",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3533, "lng": -99.1450 },
          "estacion": "General Anaya",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      {
          "position": { "lat": 19.3439, "lng": -99.1395 },
          "estacion": "Tasqueña",
          "linea": "Línea 2",
          "direccion": "Cuatro Caminos"
      },
      {
          "position": { "lat": 19.3439, "lng": -99.1395 },
          "estacion": "Tasqueña",
          "linea": "Línea 2",
          "direccion": "Tasqueña"
      },
      //Linea 3
      {
          "position": { "lat": 19.49563, "lng": -99.11938 },
          "estacion": "Indios Verdes",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.49563, "lng": -99.11938 },
          "estacion": "Indios Verdes",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.4851, "lng": -99.1254 },
          "estacion": "Deportivo 18 de Marzo",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.4851, "lng": -99.1254 },
          "estacion": "Deportivo 18 de Marzo",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.47658, "lng": -99.13177 },
          "estacion": "Potrero",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.47658, "lng": -99.13177 },
          "estacion": "Potrero",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.4697, "lng": -99.1365 },
          "estacion": "La Raza",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.4697, "lng": -99.1365 },
          "estacion": "La Raza",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.45515, "lng": -99.14424 },
          "estacion": "Tlatelolco",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.45515, "lng": -99.14424 },
          "estacion": "Tlatelolco",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.44461, "lng": -99.14544 },
          "estacion": "Guerrero",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.44461, "lng": -99.14544 },
          "estacion": "Guerrero",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.43764, "lng": -99.14759 },
          "estacion": "Hidalgo",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.43764, "lng": -99.14759 },
          "estacion": "Hidalgo",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.4333, "lng": -99.1476 },
          "estacion": "Juárez",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.4333, "lng": -99.1476 },
          "estacion": "Juárez",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.42699, "lng": -99.14902 },
          "estacion": "Balderas",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.42699, "lng": -99.14902 },
          "estacion": "Balderas",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.41978, "lng": -99.15036 },
          "estacion": "Niños Héroes",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.41978, "lng": -99.15036 },
          "estacion": "Niños Héroes",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.41237, "lng": -99.15303 },
          "estacion": "Hospital General",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.41237, "lng": -99.15303 },
          "estacion": "Hospital General",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.4058, "lng": -99.1552 },
          "estacion": "Centro Médico",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.4058, "lng": -99.1552 },
          "estacion": "Centro Médico",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.39893, "lng": -99.15678 },
          "estacion": "Etiopía/Plaza de la Transparencia",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.39893, "lng": -99.15678 },
          "estacion": "Etiopía/Plaza de la Transparencia",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.39523, "lng": -99.15863 },
          "estacion": "Eugenia",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.39523, "lng": -99.15863 },
          "estacion": "Eugenia",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.38627, "lng": -99.16225 },
          "estacion": "División del Norte",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.38627, "lng": -99.16225 },
          "estacion": "División del Norte",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.37863, "lng": -99.164 },
          "estacion": "Zapata",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.37863, "lng": -99.164 },
          "estacion": "Zapata",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.37072, "lng": -99.16588 },
          "estacion": "Coyoacán",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.37072, "lng": -99.16588 },
          "estacion": "Coyoacán",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.36152, "lng": -99.17093 },
          "estacion": "Viveros/Derechos Humanos",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.36152, "lng": -99.17093 },
          "estacion": "Viveros/Derechos Humanos",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.35529, "lng": -99.17541 },
          "estacion": "Miguel Ángel de Quevedo",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.35529, "lng": -99.17541 },
          "estacion": "Miguel Ángel de Quevedo",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.3467, "lng": -99.1805 },
          "estacion": "Copilco",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.3467, "lng": -99.1805 },
          "estacion": "Copilco",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      {
          "position": { "lat": 19.32402, "lng": -99.17444 },
          "estacion": "Universidad",
          "linea": "Línea 3",
          "direccion": "Indios Verdes"
      },
      {
          "position": { "lat": 19.32402, "lng": -99.17444 },
          "estacion": "Universidad",
          "linea": "Línea 3",
          "direccion": "Universidad"
      },
      //Linea 4
      {
          "position": { "lat": 19.4829, "lng": -99.1070 },
          "estacion": "Martín Carrera",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4829, "lng": -99.1070 },
          "estacion": "Martín Carrera",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4744, "lng": -99.1080 },
          "estacion": "Talismán",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4744, "lng": -99.1080 },
          "estacion": "Talismán",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4646, "lng": -99.1120 },
          "estacion": "Bondojito",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4646, "lng": -99.1120 },
          "estacion": "Bondojito",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4580, "lng": -99.1139 },
          "estacion": "Consulado",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4580, "lng": -99.1139 },
          "estacion": "Consulado",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4488, "lng": -99.1158 },
          "estacion": "Canal del Norte",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4488, "lng": -99.1158 },
          "estacion": "Canal del Norte",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4396, "lng": -99.1182 },
          "estacion": "Morelos",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4396, "lng": -99.1182 },
          "estacion": "Morelos",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4295, "lng": -99.1209 },
          "estacion": "Candelaria",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4295, "lng": -99.1209 },
          "estacion": "Candelaria",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4216, "lng": -99.1206 },
          "estacion": "Fray Servando",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4216, "lng": -99.1206 },
          "estacion": "Fray Servando",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4108, "lng": -99.1216 },
          "estacion": "Jamaica",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4108, "lng": -99.1216 },
          "estacion": "Jamaica",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4041, "lng": -99.1207 },
          "estacion": "Santa Anita",
          "direccion": "Santa Anita",
          "linea": "Línea 4"
      },
      {
          "position": { "lat": 19.4041, "lng": -99.1207 },
          "estacion": "Santa Anita",
          "direccion": "Martín Carrera",
          "linea": "Línea 4"
      },
      //Linea 5
      {
          "position": { "lat": 19.5007, "lng": -99.1493 },
          "estacion": "Politécnico",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.5007, "lng": -99.1493 },
          "estacion": "Politécnico",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4892, "lng": -99.1447 },
          "estacion": "Instituto del Petróleo",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4892, "lng": -99.1447 },
          "estacion": "Instituto del Petróleo",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4790, "lng": -99.1406 },
          "estacion": "Autobuses del Norte",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4790, "lng": -99.1406 },
          "estacion": "Autobuses del Norte",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4696, "lng": -99.1365 },
          "estacion": "La Raza",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4696, "lng": -99.1365 },
          "estacion": "La Raza",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4633, "lng": -99.1304 },
          "estacion": "Misterios",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4633, "lng": -99.1304 },
          "estacion": "Misterios",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4589, "lng": -99.1195 },
          "estacion": "Valle Gomez",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4589, "lng": -99.1195 },
          "estacion": "Valle Gomez",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4515, "lng": -99.1052 },
          "estacion": "Eduardo Molina",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4515, "lng": -99.1052 },
          "estacion": "Eduardo Molina",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4512, "lng": -99.0961 },
          "estacion": "Aragón",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4512, "lng": -99.0961 },
          "estacion": "Aragón",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4451, "lng": -99.0869 },
          "estacion": "Oceanía",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4451, "lng": -99.0869 },
          "estacion": "Oceanía",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4341, "lng": -99.0880 },
          "estacion": "Terminal Aérea",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4341, "lng": -99.0880 },
          "estacion": "Terminal Aérea",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4244, "lng": -99.0883 },
          "estacion": "Hangares",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4244, "lng": -99.0883 },
          "estacion": "Hangares",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4150, "lng": -99.0743 },
          "estacion": "Pantitlán",
          "direccion": "Pantitlán",
          "linea": "Línea 5"
      },
      {
          "position": { "lat": 19.4150, "lng": -99.0743 },
          "estacion": "Pantitlán",
          "direccion": "Politécnico",
          "linea": "Línea 5"
      },
      //Linea 6
      {
          "position": { "lat": 19.5052, "lng": -99.2000 },
          "estacion": "El Rosario",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.5052, "lng": -99.2000 },
          "estacion": "El Rosario",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4948, "lng": -99.1962 },
          "estacion": "Tezozómoc",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4948, "lng": -99.1962 },
          "estacion": "Tezozómoc",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4908, "lng": -99.1862 },
          "estacion": "UAM-Azcapotzalco",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4908, "lng": -99.1862 },
          "estacion": "UAM-Azcapotzalco",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4906, "lng": -99.1741 },
          "estacion": "Ferrería/Arena Ciudad de México",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4906, "lng": -99.1741 },
          "estacion": "Ferrería/Arena Ciudad de México",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4887, "lng": -99.1631 },
          "estacion": "Norte 45",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4887, "lng": -99.1631 },
          "estacion": "Norte 45",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4898, "lng": -99.1560 },
          "estacion": "Vallejo",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4898, "lng": -99.1560 },
          "estacion": "Vallejo",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4893, "lng": -99.1447 },
          "estacion": "Instituto del Petróleo",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4893, "lng": -99.1447 },
          "estacion": "Instituto del Petróleo",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4881, "lng": -99.1351 },
          "estacion": "Lindavista",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4881, "lng": -99.1351 },
          "estacion": "Lindavista",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4867, "lng": -99.1253 },
          "estacion": "Deportivo 18 de Marzo",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4867, "lng": -99.1253 },
          "estacion": "Deportivo 18 de Marzo",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4855, "lng": -99.1148 },
          "estacion": "La Villa-Basílica",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4855, "lng": -99.1148 },
          "estacion": "La Villa-Basílica",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4849, "lng": -99.1044 },
          "estacion": "Martín Carrera",
          "direccion": "Martín Carrera",
          "linea": "Línea 6"
      },
      {
          "position": { "lat": 19.4849, "lng": -99.1044 },
          "estacion": "Martín Carrera",
          "direccion": "El Rosario",
          "linea": "Línea 6"
      },
      //Linea 7
      {
          "position": { "lat": 19.5048, "lng": -99.2000 },
          "estacion": "El Rosario",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.5048, "lng": -99.2000 },
          "estacion": "El Rosario",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4907, "lng": -99.1952 },
          "estacion": "Aquiles Serdán",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4907, "lng": -99.1952 },
          "estacion": "Aquiles Serdán",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4790, "lng": -99.1897 },
          "estacion": "Camarones",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4790, "lng": -99.1897 },
          "estacion": "Camarones",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4696, "lng": -99.1901 },
          "estacion": "Refinería",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4696, "lng": -99.1901 },
          "estacion": "Refinería",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4592, "lng": -99.1876 },
          "estacion": "Tacuba",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4592, "lng": -99.1876 },
          "estacion": "Tacuba",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4450, "lng": -99.1918 },
          "estacion": "San Joaquín",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4450, "lng": -99.1918 },
          "estacion": "San Joaquín",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4337, "lng": -99.1913 },
          "estacion": "Polanco",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4337, "lng": -99.1913 },
          "estacion": "Polanco",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4250, "lng": -99.1919 },
          "estacion": "Auditorio",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4250, "lng": -99.1919 },
          "estacion": "Auditorio",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4117, "lng": -99.1913 },
          "estacion": "Constituyentes",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4117, "lng": -99.1913 },
          "estacion": "Constituyentes",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4019, "lng": -99.1873 },
          "estacion": "Tacubaya",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.4019, "lng": -99.1873 },
          "estacion": "Tacubaya",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3914, "lng": -99.1858 },
          "estacion": "San Pedro de los Pinos",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3914, "lng": -99.1858 },
          "estacion": "San Pedro de los Pinos",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3850, "lng": -99.1867 },
          "estacion": "San Antonio",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3850, "lng": -99.1867 },
          "estacion": "San Antonio",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3762, "lng": -99.1879 },
          "estacion": "Mixcoac",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3762, "lng": -99.1879 },
          "estacion": "Mixcoac",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3614, "lng": -99.1892 },
          "estacion": "Barranca del Muerto",
          "direccion": "Barranca del Muerto",
          "linea": "Línea 7"
      },
      {
          "position": { "lat": 19.3614, "lng": -99.1892 },
          "estacion": "Barranca del Muerto",
          "direccion": "El Rosario",
          "linea": "Línea 7"
      },
      //Linea 8
      {
          "position": { "lat": 19.4438, "lng": -99.1372 },
          "estacion": "Garibaldi-Lagunilla",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4438, "lng": -99.1372 },
          "estacion": "Garibaldi-Lagunilla",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4362, "lng": -99.1412 },
          "estacion": "Bellas Artes",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4362, "lng": -99.1412 },
          "estacion": "Bellas Artes",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4315, "lng": -99.1412 },
          "estacion": "San Juan de Letrán",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4315, "lng": -99.1412 },
          "estacion": "San Juan de Letrán",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1420 },
          "estacion": "Salto del Agua",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4272, "lng": -99.1420 },
          "estacion": "Salto del Agua",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4215, "lng": -99.1431 },
          "estacion": "Doctores",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4215, "lng": -99.1431 },
          "estacion": "Doctores",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4131, "lng": -99.1440 },
          "estacion": "Obrera",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4131, "lng": -99.1440 },
          "estacion": "Obrera",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4090, "lng": -99.1353 },
          "estacion": "Chabacano",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4090, "lng": -99.1353 },
          "estacion": "Chabacano",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4066, "lng": -99.1262 },
          "estacion": "La Viga",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4066, "lng": -99.1262 },
          "estacion": "La Viga",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4041, "lng": -99.12112060 },
          "estacion": "Santa Anita",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.4041, "lng": -99.12112060 },
          "estacion": "Santa Anita",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3980, "lng": -99.1134 },
          "estacion": "Coyuya",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3980, "lng": -99.1134 },
          "estacion": "Coyuya",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3886, "lng": -99.1122 },
          "estacion": "Iztacalco",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3886, "lng": -99.1122 },
          "estacion": "Iztacalco",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3789, "lng": -99.1094 },
          "estacion": "Apatlaco",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3789, "lng": -99.1094 },
          "estacion": "Apatlaco",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3730, "lng": -99.1076 },
          "estacion": "Aculco",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3730, "lng": -99.1076 },
          "estacion": "Aculco",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3645, "lng": -99.1092 },
          "estacion": "Escuadrón 201",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3645, "lng": -99.1092 },
          "estacion": "Escuadrón 201",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3562, "lng": -99.1011 },
          "estacion": "Atlalilco",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3562, "lng": -99.1011 },
          "estacion": "Atlalilco",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3577, "lng": -99.0932 },
          "estacion": "Iztapalapa",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3577, "lng": -99.0932 },
          "estacion": "Iztapalapa",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3560, "lng": -99.0856 },
          "estacion": "Cerro de la Estrella",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3560, "lng": -99.0856 },
          "estacion": "Cerro de la Estrella",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3509, "lng": -99.0748 },
          "estacion": "UAM-I",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3509, "lng": -99.0748 },
          "estacion": "UAM-I",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3459, "lng": -99.0638 },
          "estacion": "Constitución de 1917",
          "direccion": "Garibaldi-Lagunilla",
          "linea": "Línea 8"
      },
      {
          "position": { "lat": 19.3459, "lng": -99.0638 },
          "estacion": "Constitución de 1917",
          "direccion": "Constitución de 1917",
          "linea": "Línea 8"
      },
      //Linea 9
      {
          "position": { "lat": 19.4022, "lng": -99.1879 },
          "estacion": "Tacubaya",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4022, "lng": -99.1879 },
          "estacion": "Tacubaya",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4060, "lng": -99.1788 },
          "estacion": "Patriotismo",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4060, "lng": -99.1788 },
          "estacion": "Patriotismo",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4058, "lng": -99.1685 },
          "estacion": "Chilpancingo",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4058, "lng": -99.1685 },
          "estacion": "Chilpancingo",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4065, "lng": -99.1551 },
          "estacion": "Centro Médico",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4065, "lng": -99.1551 },
          "estacion": "Centro Médico",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4072, "lng": -99.1446 },
          "estacion": "Lázaro Cárdenas",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4072, "lng": -99.1446 },
          "estacion": "Lázaro Cárdenas",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4080, "lng": -99.1357 },
          "estacion": "Chabacano",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4080, "lng": -99.1357 },
          "estacion": "Chabacano",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4090, "lng": -99.1219 },
          "estacion": "Jamaica",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4090, "lng": -99.1219 },
          "estacion": "Jamaica",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4084, "lng": -99.1132 },
          "estacion": "Mixiuhca",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4084, "lng": -99.1132 },
          "estacion": "Mixiuhca",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4085, "lng": -99.1032 },
          "estacion": "Velódromo",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4085, "lng": -99.1032 },
          "estacion": "Velódromo",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4084, "lng": -99.0912 },
          "estacion": "Ciudad Deportiva",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4084, "lng": -99.0912 },
          "estacion": "Ciudad Deportiva",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4072, "lng": -99.0825 },
          "estacion": "Puebla",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4072, "lng": -99.0825 },
          "estacion": "Puebla",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4153, "lng": -99.0722 },
          "estacion": "Pantitlán",
          "direccion": "Tacubaya",
          "linea": "Línea 9"
      },
      {
          "position": { "lat": 19.4153, "lng": -99.0722 },
          "estacion": "Pantitlán",
          "direccion": "Pantitlán",
          "linea": "Línea 9"
      },
      //Linea A
      {
          "position": { "lat": 19.4146, "lng": -99.0725 },
          "estacion": "Pantitlán",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.4146, "lng": -99.0725 },
          "estacion": "Pantitlán",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.4047, "lng": -99.0696 },
          "estacion": "Agrícola Oriental",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.4047, "lng": -99.0696 },
          "estacion": "Agrícola Oriental",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3987, "lng": -99.0594 },
          "estacion": "Canal de San Juan",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3987, "lng": -99.0594 },
          "estacion": "Canal de San Juan",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3912, "lng": -99.0463 },
          "estacion": "Tepalcates",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3912, "lng": -99.0463 },
          "estacion": "Tepalcates",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3852, "lng": -99.0356 },
          "estacion": "Guelatao",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3852, "lng": -99.0356 },
          "estacion": "Guelatao",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3733, "lng": -99.0170 },
          "estacion": "Peñón Viejo",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3733, "lng": -99.0170 },
          "estacion": "Peñón Viejo",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3646, "lng": -99.0059 },
          "estacion": "Acatitla",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3646, "lng": -99.0059 },
          "estacion": "Acatitla",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3603, "lng": -98.9953 },
          "estacion": "Santa Marta",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3603, "lng": -98.9953 },
          "estacion": "Santa Marta",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3589, "lng": -98.9768 },
          "estacion": "Los Reyes",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3589, "lng": -98.9768 },
          "estacion": "Los Reyes",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3507, "lng": -98.9609 },
          "estacion": "La Paz",
          "direccion": "Pantitlán",
          "linea": "Línea A"
      },
      {
          "position": { "lat": 19.3507, "lng": -98.9609 },
          "estacion": "La Paz",
          "direccion": "La Paz",
          "linea": "Línea A"
      },
      //Linea B
      {
          "position": { "lat": 19.4462, "lng": -99.1523 },
          "estacion": "Buenavista",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4462, "lng": -99.1523 },
          "estacion": "Buenavista",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4447, "lng": -99.1451 },
          "estacion": "Guerrero",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4447, "lng": -99.1451 },
          "estacion": "Guerrero",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4437, "lng": -99.1385 },
          "estacion": "Garibaldi/Lagunilla",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4437, "lng": -99.1385 },
          "estacion": "Garibaldi/Lagunilla",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4433, "lng": -99.1318 },
          "estacion": "Lagunilla",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4433, "lng": -99.1318 },
          "estacion": "Lagunilla",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4427, "lng": -99.1241 },
          "estacion": "Tepito",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4427, "lng": -99.1241 },
          "estacion": "Tepito",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4396, "lng": -99.1181 },
          "estacion": "Morelos",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4396, "lng": -99.1181 },
          "estacion": "Morelos",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4312, "lng": -99.1036 },
          "estacion": "San Lázaro",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4312, "lng": -99.1036 },
          "estacion": "San Lázaro",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4366, "lng": -99.0743 },
          "estacion": "Ricardo Flores Magón",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4366, "lng": -99.0743 },
          "estacion": "Ricardo Flores Magón",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4408, "lng": -99.0941 },
          "estacion": "Romero Rubio",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4408, "lng": -99.0941 },
          "estacion": "Romero Rubio",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4459, "lng": -99.0870 },
          "estacion": "Oceanía",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4459, "lng": -99.0870 },
          "estacion": "Oceanía",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4509, "lng": -99.0794 },
          "estacion": "Deportivo Oceanía",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4509, "lng": -99.0794 },
          "estacion": "Deportivo Oceanía",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4581, "lng": -99.0693 },
          "estacion": "Bosque de Aragón",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4581, "lng": -99.0693 },
          "estacion": "Bosque de Aragón",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4615, "lng": -99.0614 },
          "estacion": "Villa de Aragón",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4615, "lng": -99.0614 },
          "estacion": "Villa de Aragón",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4725, "lng": -99.0545 },
          "estacion": "Nezahualcóyotl",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4725, "lng": -99.0545 },
          "estacion": "Nezahualcóyotl",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4855, "lng": -99.0491 },
          "estacion": "Impulsora",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4855, "lng": -99.0491 },
          "estacion": "Impulsora",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4910, "lng": -99.0464 },
          "estacion": "Río de los Remedios",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.4910, "lng": -99.0464 },
          "estacion": "Río de los Remedios",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5015, "lng": -99.0420 },
          "estacion": "Múzquiz",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5015, "lng": -99.0420 },
          "estacion": "Múzquiz",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5155, "lng": -99.0359 },
          "estacion": "Ecatepec",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5155, "lng": -99.0359 },
          "estacion": "Ecatepec",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5219, "lng": -99.0333 },
          "estacion": "Olímpica",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5219, "lng": -99.0333 },
          "estacion": "Olímpica",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5284, "lng": -99.0302 },
          "estacion": "Plaza Aragón",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5284, "lng": -99.0302 },
          "estacion": "Plaza Aragón",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5349, "lng": -99.0276 },
          "estacion": "Ciudad Azteca",
          "direccion": "Buenavista",
          "linea": "Línea B"
      },
      {
          "position": { "lat": 19.5349, "lng": -99.0276 },
          "estacion": "Ciudad Azteca",
          "direccion": "Ciudad Azteca",
          "linea": "Línea B"
      },
      //Linea 12
      {
          "position": { "lat": 19.3762, "lng": -99.1878 },
          "estacion": "Mixcoac",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3762, "lng": -99.1878 },
          "estacion": "Mixcoac",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3734, "lng": -99.1786 },
          "estacion": "Insurgentes Sur",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3734, "lng": -99.1786 },
          "estacion": "Insurgentes Sur",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3718, "lng": -99.1713 },
          "estacion": "Hospital 20 de Noviembre",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3718, "lng": -99.1713 },
          "estacion": "Hospital 20 de Noviembre",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3710, "lng": -99.1652 },
          "estacion": "Zapata",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3710, "lng": -99.1652 },
          "estacion": "Zapata",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3707, "lng": -99.1586 },
          "estacion": "Parque de los Venados",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3707, "lng": -99.1586 },
          "estacion": "Parque de los Venados",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3613, "lng": -99.1513 },
          "estacion": "Eje Central",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3613, "lng": -99.1513 },
          "estacion": "Eje Central",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3600, "lng": -99.1432 },
          "estacion": "Ermita",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3600, "lng": -99.1432 },
          "estacion": "Ermita",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3577, "lng": -99.1230 },
          "estacion": "Mexicaltzingo",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3577, "lng": -99.1230 },
          "estacion": "Mexicaltzingo",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3527, "lng": -99.1060 },
          "estacion": "Atlalilco",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3527, "lng": -99.1060 },
          "estacion": "Atlalilco",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3368, "lng": -99.1088 },
          "estacion": "Culhuacán",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3368, "lng": -99.1088 },
          "estacion": "Culhuacán",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3281, "lng": -99.1046 },
          "estacion": "San Andrés Tomatlán",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3281, "lng": -99.1046 },
          "estacion": "San Andrés Tomatlán",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3221, "lng": -99.0957 },
          "estacion": "Lomas Estrella",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3221, "lng": -99.0957 },
          "estacion": "Lomas Estrella",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3205, "lng": -99.0860 },
          "estacion": "Calle 11",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3205, "lng": -99.0860 },
          "estacion": "Calle 11",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3175, "lng": -99.0749 },
          "estacion": "Periférico Oriente",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3175, "lng": -99.0749 },
          "estacion": "Periférico Oriente",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3063, "lng": -99.0652 },
          "estacion": "Tezonco",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3063, "lng": -99.0652 },
          "estacion": "Tezonco",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3043, "lng": -99.0595 },
          "estacion": "Olivos",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3043, "lng": -99.0595 },
          "estacion": "Olivos",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3003, "lng": -99.0462 },
          "estacion": "Nopalera",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.3003, "lng": -99.0462 },
          "estacion": "Nopalera",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2966, "lng": -99.0343 },
          "estacion": "Zapotitlán",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2966, "lng": -99.0343 },
          "estacion": "Zapotitlán",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2944, "lng": -99.0240 },
          "estacion": "Tlaltenco",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2944, "lng": -99.0240 },
          "estacion": "Tlaltenco",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2870, "lng": -99.0138 },
          "estacion": "Tláhuac",
          "direccion": "Mixcoac",
          "linea": "Línea 12"
      },
      {
          "position": { "lat": 19.2870, "lng": -99.0138 },
          "estacion": "Tláhuac",
          "direccion": "Tláhuac",
          "linea": "Línea 12"
      }
    ];
  
  }

}