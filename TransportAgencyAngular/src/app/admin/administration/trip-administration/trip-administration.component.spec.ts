import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripAdministrationComponent } from './trip-administration.component';

describe('TripAdministrationComponent', () => {
  let component: TripAdministrationComponent;
  let fixture: ComponentFixture<TripAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
