import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TiemposService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api/tiempos';

  constructor(private http: HttpClient) { }

  //Obtiene el ultimo tiempo registrado
  obtenerTiempo(){
    return this.http.get(this.apiUrl);
  }
}