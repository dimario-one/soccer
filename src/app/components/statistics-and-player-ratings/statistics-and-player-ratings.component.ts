import { Component, OnInit } from '@angular/core';

// Определение моделей данных
export interface GameStatistics {
  gameName: string;
  bestScore: number;
}

export interface PlayerRating {
  playerName: string;
  rating: number;
}

@Component({
  selector: 'app-statistics-and-player-ratings',
  templateUrl: './statistics-and-player-ratings.component.html',
  styleUrls: ['./statistics-and-player-ratings.component.css']
})
export class StatisticsAndPlayerRatingsComponent implements OnInit {
  // Массив данных для статистики игр
  gameStatistics: GameStatistics[] = [];

  // Массив данных для оценок игроков
  playerRatings: PlayerRating[] = [];

  constructor() { }

  ngOnInit() {
    // Заполнение массивов данными (пример)
    this.gameStatistics = [
      { gameName: 'Игра 1', bestScore: 100 },
      { gameName: 'Игра 2', bestScore: 150 },
    ];

    this.playerRatings = [
      { playerName: 'Игрок 1', rating: 9.5 },
      { playerName: 'Игрок 2', rating: 8.8 },
    ];
  }
}
