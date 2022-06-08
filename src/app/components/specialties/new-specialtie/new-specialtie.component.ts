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

  constructor(public dialogRef: MatDialogRef<NewSpecialtieComponent>, private specialtiesService: SpecialtiesService) { }

  ngOnInit(): void {
    this.newSpecialtyForm = new FormGroup({
      'codeInput': new FormControl(null, [Validators.required, Validators.maxLength(5)]),
      'nameInput': new FormControl(null, Validators.required)
    })
  }


  getErrors(){
    if (this.newSpecialtyForm?.get('codeInput')?.hasError('required')) {
      return "This field is required";
    } else {
      return "This field can contain up to 5 characters";
    }
  }

  cancel(){
    this.dialogRef.close();
  }

  onSubmit(){
    const newSpecialty:Specialty = {
      speciality_code: this.newSpecialtyForm.get('codeInput')?.value,
      speciality_name: this.newSpecialtyForm.get('nameInput')?.value
    }
    this.subscription.add(this.specialtiesService.addOne(newSpecialty).subscribe((response:any) => {
      console.log(response);
    }));;
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
