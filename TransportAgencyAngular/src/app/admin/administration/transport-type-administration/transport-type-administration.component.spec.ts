import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTypeAdministrationComponent } from './transport-type-administration.component';

describe('TransportTypeAdministrationComponent', () => {
  let component: TransportTypeAdministrationComponent;
  let fixture: ComponentFixture<TransportTypeAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTypeAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTypeAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
