import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGamesComponent } from './active-games.component';

describe('ActiveGamesComponent', () => {
  let component: ActiveGamesComponent;
  let fixture: ComponentFixture<ActiveGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveGamesComponent]
    });
    fixture = TestBed.createComponent(ActiveGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
