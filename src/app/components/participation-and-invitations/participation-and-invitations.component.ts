import { Component } from '@angular/core';

// Определение интерфейсов для участников и приглашений
export interface Participant {
  id: number;
  name: string;
  email: string;
}

export interface Invitation {
  id: number;
  event: string;
  sender: string;
}

@Component({
  selector: 'app-participation-and-invitations',
  templateUrl: './participation-and-invitations.component.html',
  styleUrls: ['./participation-and-invitations.component.css']
})
export class ParticipationAndInvitationsComponent {
  // Массив участников
  participants: Participant[] = [
    { id: 1, name: 'Иван', email: 'ivan@example.com' },
    { id: 2, name: 'Мария', email: 'maria@example.com' },
  ];

  // Массив приглашений
  invitations: Invitation[] = [
    { id: 1, event: 'Мероприятие 1', sender: 'Пользователь 1' },
    { id: 2, event: 'Мероприятие 2', sender: 'Пользователь 2' },
  ];
}
