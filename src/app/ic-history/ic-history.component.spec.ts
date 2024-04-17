import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcHistoryComponent } from './ic-history.component';

describe('IcHistoryComponent', () => {
  let component: IcHistoryComponent;
  let fixture: ComponentFixture<IcHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcHistoryComponent]
    });
    fixture = TestBed.createComponent(IcHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
