import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'https://7c60-189-216-156-132.ngrok-free.app/predict'; 

 constructor(private http: HttpClient) { }

    // Método para enviar datos de la predicción
    sendPrediction(prediccion: any) {
        return this.http.post<any>(this.apiUrl, prediccion);
    }
    
}