import { Component } from '@angular/core';

// Определение интерфейса для событий
export interface Event {
  date: Date;
  time: string;
  title: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // Создание массива событий и заполнение данными о тренировках и играх
  events: Event[] = [
    { date: new Date(2023, 9, 5), time: '15:00', title: 'Тренировка' },
    { date: new Date(2023, 9, 10), time: '19:30', title: 'Игра с командой А' },
    // Добавьте другие события
  ];
}
