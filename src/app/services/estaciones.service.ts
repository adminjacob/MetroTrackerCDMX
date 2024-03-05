import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EstacionesService {
  private apiUrl = 'http://localhost:9000/api/estaciones';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de estaciones
  obtenerLista(){
    return this.http.get(this.apiUrl);
  }
  
}