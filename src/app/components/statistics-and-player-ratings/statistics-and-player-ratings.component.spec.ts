import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAndPlayerRatingsComponent } from './statistics-and-player-ratings.component';

describe('StatisticsAndPlayerRatingsComponent', () => {
  let component: StatisticsAndPlayerRatingsComponent;
  let fixture: ComponentFixture<StatisticsAndPlayerRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsAndPlayerRatingsComponent]
    });
    fixture = TestBed.createComponent(StatisticsAndPlayerRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
