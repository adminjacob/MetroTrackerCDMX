import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://189.191.188.152:80/predict'; 

 constructor(private http: HttpClient) { }

    // Método para enviar datos de la predicción
    sendPrediction(prediccion: any) {
        return this.http.post<any>(this.apiUrl, prediccion);
    }
    
}