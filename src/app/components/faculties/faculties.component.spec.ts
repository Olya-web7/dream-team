import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { FacultiesComponent } from './faculties.component';

describe('FacultiesComponent', () => {
  let component: FacultiesComponent;
  let fixture: ComponentFixture<FacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultiesComponent ], 
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
    fixture = TestBed.createComponent(FacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
