import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TiemposService {
  private apiUrl = 'http://localhost:9000/api/tiempos';

  constructor(private http: HttpClient) { }

  //Obtiene el ultimo tiempo registrado
  obtenerTiempo(){
    return this.http.get(this.apiUrl);
  }
}