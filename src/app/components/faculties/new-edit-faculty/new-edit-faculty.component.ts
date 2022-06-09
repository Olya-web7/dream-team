import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FacultiesService } from "../../../services/faculties.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-new-edit-faculty',
  templateUrl: './new-edit-faculty.component.html',
  styleUrls: ['./new-edit-faculty.component.scss'],
})
export class NewEditFacultyComponent implements OnInit, OnDestroy {

  public addFacultyForm: FormGroup;

  public addFacultySub: Subscription;
  public updateFacultySub: Subscription;

  constructor(
    private facultiesService: FacultiesService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    this.initAddFacultyForm();
  }

  ngOnDestroy(): void {
    if (this.addFacultySub) {
      this.addFacultySub.unsubscribe();
    } else if (this.updateFacultySub) {
      this.updateFacultySub.unsubscribe();
    }
  }

  public initAddFacultyForm(): void {
    this.addFacultyForm = this.fb.group({
      faculty_name: [this.data?.faculty_name, [
        Validators.required,
      ]],
      faculty_description: [this.data?.faculty_description, [
        Validators.required,
      ]],
    })
  }

  public edit(isNew: boolean): void {
    isNew ? this.addNew() : this.update();
  }

  public update(): void {
    this.updateFacultySub = this.facultiesService.updateFaculty(this.data.faculty_id, this.addFacultyForm.value)
      .subscribe(() => {
      })
  }

  public addNew(): void {
    this.addFacultySub = this.facultiesService.addFaculty(this.addFacultyForm.value)
      .subscribe(() => {
      })
  }
}
