import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditFacultyComponent } from './new-edit-faculty.component';

describe('NewFacultyComponent', () => {
  let component: NewEditFacultyComponent;
  let fixture: ComponentFixture<NewEditFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
