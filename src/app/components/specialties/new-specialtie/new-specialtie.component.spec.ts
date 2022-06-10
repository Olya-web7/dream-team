import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { NewSpecialtieComponent } from './new-specialtie.component';

describe('NewSpecialtieComponent', () => {
  let component: NewSpecialtieComponent;
  let fixture: ComponentFixture<NewSpecialtieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpecialtieComponent ], 
      imports: [MatDialogModule, HttpClientModule],
      providers: [
        {
          provide: MatDialogRef, 
          useValue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecialtieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
