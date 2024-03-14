import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

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

  //Obtiene todos los reportes de la base de datos (acepta filtros)
  obtenerReportes(filtros: any = {}) {
    // Convertir los filtros en parámetros de URL
    let params = new HttpParams();
    for (const key in filtros) {
      if (filtros.hasOwnProperty(key) && filtros[key]) {
        params = params.append(key, filtros[key]);
      }
    }

    return this.http.get(this.apiUrl, { params });
  }

  // Agrega un like a un reporte específico
  likeReporte(reportId: string, userId: string) {
    return this.http.post(`${this.apiUrl}/${reportId}/like`, { userId: userId });
  }

  // Agrega un dislike a un reporte específico
  dislikeReporte(reportId: string, userId: string) {
    return this.http.post(`${this.apiUrl}/${reportId}/dislike`, { userId: userId });
  }

  // Eliminar un reporte
  deleteReport(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}