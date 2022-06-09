import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FacultiesService } from "../../../services/faculties.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-new-faculty',
  templateUrl: './new-faculty.component.html',
  styleUrls: ['./new-faculty.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewFacultyComponent implements OnInit, OnDestroy{

  public addFacultyForm: FormGroup;

  public addFacultySub: Subscription;

  constructor(
    private facultiesService: FacultiesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initAddFacultyForm();
  }

  ngOnDestroy(): void {
    if (this.addFacultySub) {
      this.addFacultySub.unsubscribe();
    }
  }

  public initAddFacultyForm(): void {
    this.addFacultyForm = this.fb.group({
      faculty_name: ['', [
        Validators.required,
      ]],
      faculty_description: ['', [
        Validators.required,
      ]],
    })
  }

  public addNew() {
    if (this.addFacultyForm.invalid) {
      return;
    }
    this.addFacultySub = this.facultiesService.addFaculty(this.addFacultyForm.value)
      .subscribe(() => {
      })
  }
}
