import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOccurrenceComponent } from './register-occurrence.component';

describe('RegisterOccurrenceComponent', () => {
  let component: RegisterOccurrenceComponent;
  let fixture: ComponentFixture<RegisterOccurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOccurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
