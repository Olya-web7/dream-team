import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFacultyDeleteComponent } from './confirm-faculty-delete.component';

describe('ConfirmFacultyDeleteComponent', () => {
  let component: ConfirmFacultyDeleteComponent;
  let fixture: ComponentFixture<ConfirmFacultyDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmFacultyDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmFacultyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
