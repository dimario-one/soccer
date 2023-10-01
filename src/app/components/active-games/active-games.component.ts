import { Component, OnInit } from '@angular/core';
import { ActiveGame } from '../../models/active-games.model';
import { ActiveGamesService } from '../../services/active-games.service'; // Путь к сервису

@Component({
  selector: 'app-active-games',
  templateUrl: './active-games.component.html',
  styleUrls: ['./active-games.component.css']
})
export class ActiveGamesComponent implements OnInit {
  activeGames: ActiveGame[] = [];

  constructor(private activeGamesService: ActiveGamesService) {} // Внедрение сервиса

  ngOnInit() {
    this.loadActiveGames(); // Вызываем метод загрузки данных при инициализации компонента
  }

  private loadActiveGames() {
    this.activeGamesService.getActiveGames().subscribe(
      (data: ActiveGame[]) => {
        this.activeGames = data;
      },
      (error) => {
        console.error('Ошибка при получении данных:', error);
      }
    );
  }
}