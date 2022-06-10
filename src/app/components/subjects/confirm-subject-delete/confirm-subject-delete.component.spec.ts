import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { ConfirmSubjectDeleteComponent } from './confirm-subject-delete.component';

describe('ConfirmSubjectDeleteComponent', () => {
  let component: ConfirmSubjectDeleteComponent;
  let fixture: ComponentFixture<ConfirmSubjectDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSubjectDeleteComponent ], 
      imports: [HttpClientModule, MatDialogModule], 
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
    fixture = TestBed.createComponent(ConfirmSubjectDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
