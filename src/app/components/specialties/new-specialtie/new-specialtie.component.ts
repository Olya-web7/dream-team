import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Specialty } from 'src/app/interfaces/specialty.model';
import { SpecialtiesService } from 'src/app/services/specialties.service';

@Component({
  selector: 'app-new-specialtie',
  templateUrl: './new-specialtie.component.html',
  styleUrls: ['./new-specialtie.component.scss']
})
export class NewSpecialtieComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  newSpecialtyForm: FormGroup;

  specialtyId: string = '';
  specialtyCode: string = '';
  specialtyName: string = '';

  constructor(public dialogRef: MatDialogRef<NewSpecialtieComponent>, private specialtiesService: SpecialtiesService) { }

  ngOnInit(): void {
    this.newSpecialtyForm = new FormGroup({
      'codeInput': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
      'nameInput': new FormControl(null, Validators.required)
    })

    // get data form service, when edit:
    this.specialtyId = this.specialtiesService.specialtyId;
    this.specialtyCode = this.specialtiesService.specialtyCode;
    this.specialtyName = this.specialtiesService.specialtyName;

    if (this.specialtyId) {
      this.newSpecialtyForm.setValue({
        'codeInput': this.specialtyCode,
        'nameInput': this.specialtyName
      })
    }
  }


  getErrors(){
    if (this.newSpecialtyForm?.get('codeInput')?.hasError('required')) {
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
    const newSpecialty:Specialty = {
      speciality_code: this.newSpecialtyForm.get('codeInput')?.value,
      speciality_name: this.newSpecialtyForm.get('nameInput')?.value
    }
    if (this.specialtyId) {
      this.subscription.add(this.specialtiesService.editOne(this.specialtyId, newSpecialty).subscribe((response:any) => {
        console.log(response);
      }));;
    } else {
      this.subscription.add(this.specialtiesService.addOne(newSpecialty).subscribe((response:any) => {
        console.log(response);
      }));;
    }
    this.resetValues();
    this.dialogRef.close();
  }

  resetValues() {
    this.specialtiesService.specialtyId = '';
    this.specialtyId = '';
    this.newSpecialtyForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
