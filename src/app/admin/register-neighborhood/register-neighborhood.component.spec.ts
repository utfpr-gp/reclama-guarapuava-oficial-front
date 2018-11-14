import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNeighborhoodComponent } from './register-neighborhood.component';

describe('RegisterNeighborhoodComponent', () => {
  let component: RegisterNeighborhoodComponent;
  let fixture: ComponentFixture<RegisterNeighborhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNeighborhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
