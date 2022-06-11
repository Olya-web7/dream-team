import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SubjectModel } from 'src/app/interfaces/subject.model';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.scss']
})
export class NewSubjectComponent implements OnInit {
  subscription: Subscription = new Subscription();
  newSubjectForm: FormGroup;
  subjectId: string = '';
  subjectDescription: string = '';
  subjectName: string = '';

  constructor(public dialogRef: MatDialogRef<NewSubjectComponent>, private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.newSubjectForm = new FormGroup({
      'descriptionInput': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'nameInput': new FormControl(null, Validators.required)
    });

    this.subjectId = this.subjectsService.subjectId;
    this.subjectDescription = this.subjectsService.subjectDescription;
    this.subjectName = this.subjectsService.subjectName;

    if (this.subjectId) {
      this.newSubjectForm.setValue({
        'descriptionInput': this.subjectDescription,
        'nameInput': this.subjectName,
      })
    }
  }

  getErrors(){
    if (this.newSubjectForm?.get('descriptionInput')?.hasError('required')) {
      return "This field is required";
    } else {
      return "This field can contain up to 5 characters";
    }
  }

  cancel(){
    this.resetValues();
    this.dialogRef.close();
  }

  onSubmit(){
    const newSubject: SubjectModel = {
      subject_description: this.newSubjectForm.get('descriptionInput')?.value,
      subject_name: this.newSubjectForm.get('nameInput')?.value
    }
    if (this.subjectId) {
      this.subscription.add(this.subjectsService.editSubject(this.subjectId, newSubject).subscribe((response: any) => {
        console.log(response);
      }));;
    } else {
      this.subscription.add(this.subjectsService.addSubject(newSubject).subscribe((response: any) => {
        console.log(response);
      }));
    }
    this.resetValues();
    this.dialogRef.close();
  }

  resetValues() {
    this.subjectsService.subjectId = '';
    this.subjectId = '';
    this.newSubjectForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
