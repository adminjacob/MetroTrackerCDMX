import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AfluenciaService {
  private apiUrl = 'http://localhost:9000/api';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de afluencias
  getAfluencias(linea: string, direccion: string) {
    return this.http.get(`${this.apiUrl}/afluencias/${linea}/${direccion}`);
  }
  
}