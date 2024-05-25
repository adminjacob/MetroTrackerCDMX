import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccesibilidadService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api/accesibilidad';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de accesibilidad
  obtenerLista(){
    return this.http.get(this.apiUrl);
  }
  
}