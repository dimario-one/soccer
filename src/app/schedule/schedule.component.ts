import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'путь-к-вашему-schedule-service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events: Event[] = []; // Указываем тип Event[] для переменной events

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    // При инициализации компонента загрузим расписание мероприятий
    this.loadEvents();
  }

  // Метод для загрузки мероприятий
  loadEvents(): void {
    this.scheduleService.getEvents()
      .subscribe((events: Event[]) => {
        this.events = events;
      });
  }
}

// Интерфейс для мероприятия (можете настроить по своим потребностям)
interface Event {
  id: number;
  date: string;
  time: string;
  location: string;
  participants: string[];
}
