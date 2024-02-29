import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReportService {
  private apiUrl = 'http://localhost:9000/api/report';

  constructor(private http: HttpClient) { }

  //Crea un reporte en la base de datos
  crearReporte(reporte: any) {
    return this.http.post<any>(this.apiUrl, reporte);
  }

  //Obtiene todos los reportes de la base de datos
  obtenerReportes(){
    return this.http.get(this.apiUrl);
  }

  // Agrega un like a un reporte específico
  likeReporte(reportId: string, userId: string) {
    return this.http.post(`${this.apiUrl}/${reportId}/like`, { userId: userId });
  }

  // Agrega un dislike a un reporte específico
  dislikeReporte(reportId: string, userId: string) {
    return this.http.post(`${this.apiUrl}/${reportId}/dislike`, { userId: userId });
  }
  
}