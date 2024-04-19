import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTeamSevenComponent } from './sub-team-seven.component';

describe('SubTeamSevenComponent', () => {
  let component: SubTeamSevenComponent;
  let fixture: ComponentFixture<SubTeamSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubTeamSevenComponent]
    });
    fixture = TestBed.createComponent(SubTeamSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
