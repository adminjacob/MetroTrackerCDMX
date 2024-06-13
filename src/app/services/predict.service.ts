import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'https://a88e-2806-105e-1c-b0c3-1aa-bfc1-f8cf-9dfa.ngrok-free.app/predict'; 

 constructor(private http: HttpClient) { }

    // Método para enviar datos de la predicción
    sendPrediction(prediccion: any) {
        return this.http.post<any>(this.apiUrl, prediccion);
    }
    
}