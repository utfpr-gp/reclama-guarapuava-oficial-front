import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCategoryComponent } from './register-category.component';

describe('RegisterCategoryComponent', () => {
  let component: RegisterCategoryComponent;
  let fixture: ComponentFixture<RegisterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
