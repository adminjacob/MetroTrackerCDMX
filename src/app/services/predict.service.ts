import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://189.191.165.10:80/predict'; // Asegúrate de cambiar esto por la URL real de tu API

 constructor(private http: HttpClient) { }

    // Método para enviar datos de la predicción
    sendPrediction(prediccion: any) {
        return this.http.post<any>(this.apiUrl, prediccion);
    }
    
}