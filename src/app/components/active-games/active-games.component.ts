// active-games.component.ts
import { Component, OnInit } from '@angular/core';
import { ActiveGame } from '../../models/active-games.model';

@Component({
  selector: 'app-active-games',
  templateUrl: './active-games.component.html',
  styleUrls: ['./active-games.component.css']
})
export class ActiveGamesComponent implements OnInit {
  activeGames: ActiveGame[] = [
    { id: 1, name: 'Турнир 1', date: '2023-10-15' },
    { id: 2, name: 'Игра 1', date: '2023-10-18' },
    // Добавьте другие активные турниры и игры по аналогии
  ];

  constructor() {}

  ngOnInit() {}
}
