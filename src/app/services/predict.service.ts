import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'https://c74e-2806-105e-1c-ee49-c83f-36ca-a89c-f878.ngrok-free.app/predict'; 

 constructor(private http: HttpClient) { }

    // Método para enviar datos de la predicción
    sendPrediction(prediccion: any) {
        return this.http.post<any>(this.apiUrl, prediccion);
    }
    
}