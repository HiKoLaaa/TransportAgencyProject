import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAdministrationComponent } from './country-administration.component';

describe('CountryAdministrationComponent', () => {
  let component: CountryAdministrationComponent;
  let fixture: ComponentFixture<CountryAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
