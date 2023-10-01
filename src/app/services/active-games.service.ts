// // active-games.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveGame } from '../models/active-games.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveGamesService {
  private apiUrl = 'http://localhost:3000/api/games/events'; 

  constructor(private http: HttpClient) {}

  getActiveGames(): Observable<ActiveGame[]> {
    return this.http.get<ActiveGame[]>(this.apiUrl);
  }
}
