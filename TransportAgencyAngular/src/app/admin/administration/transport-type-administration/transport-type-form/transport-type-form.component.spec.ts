import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTypeFormComponent } from './transport-type-form.component';

describe('TransportTypeFormComponent', () => {
  let component: TransportTypeFormComponent;
  let fixture: ComponentFixture<TransportTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
