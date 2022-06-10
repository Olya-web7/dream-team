import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { NewEditFacultyComponent } from './new-edit-faculty.component';

describe('NewFacultyComponent', () => {
  let component: NewEditFacultyComponent;
  let fixture: ComponentFixture<NewEditFacultyComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditFacultyComponent ], 
      imports: [HttpClientModule, MatDialogModule], 
      providers: [
        {
          provide: MatDialogRef, 
          useValue: {}
        }, 
        {
          provide: FormBuilder, 
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
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
