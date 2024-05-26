import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AfluenciaService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de afluencias
  getAfluencias(linea: string, direccion: string) {
    return this.http.post(`${this.apiUrl}/afluencias`, { linea, direccion });
  }
  
}