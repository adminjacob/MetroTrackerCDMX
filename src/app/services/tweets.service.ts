import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TweetsService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api/tweets';

  constructor(private http: HttpClient) { }

  //Obtiene la lista de tweets
  obtenerTweets(){
    return this.http.get(this.apiUrl);
  }
}