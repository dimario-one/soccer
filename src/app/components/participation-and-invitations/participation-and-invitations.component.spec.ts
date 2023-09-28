import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationAndInvitationsComponent } from './participation-and-invitations.component';

describe('ParticipationAndInvitationsComponent', () => {
  let component: ParticipationAndInvitationsComponent;
  let fixture: ComponentFixture<ParticipationAndInvitationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipationAndInvitationsComponent]
    });
    fixture = TestBed.createComponent(ParticipationAndInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
