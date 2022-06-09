import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSubjectDeleteComponent } from './confirm-subject-delete.component';

describe('ConfirmSubjectDeleteComponent', () => {
  let component: ConfirmSubjectDeleteComponent;
  let fixture: ComponentFixture<ConfirmSubjectDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSubjectDeleteComponent ]
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
