import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ParticipationAndInvitationsComponent } from './components/participation-and-invitations/participation-and-invitations.component';
import { StatisticsAndPlayerRatingsComponent } from './components/statistics-and-player-ratings/statistics-and-player-ratings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    ParticipationAndInvitationsComponent,
    StatisticsAndPlayerRatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
