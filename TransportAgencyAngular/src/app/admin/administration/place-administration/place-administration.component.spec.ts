import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAdministrationComponent } from './place-administration.component';

describe('PlaceAdministrationComponent', () => {
  let component: PlaceAdministrationComponent;
  let fixture: ComponentFixture<PlaceAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
