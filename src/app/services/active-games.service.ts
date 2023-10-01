// // active-games.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ActiveGame } from '../models/active-games.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ActiveGamesService {
// //   private apiUrl = 'URL_ДЛЯ_ПОЛУЧЕНИЯ_ДАННЫХ'; // Замените на реальный URL

//   constructor(private http: HttpClient) {}

//   getActiveGames(): Observable<ActiveGame[]> {
//     return this.http.get<ActiveGame[]>(this.apiUrl);
//   }
// }
