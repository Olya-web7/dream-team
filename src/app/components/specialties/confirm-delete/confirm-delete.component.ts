import { Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SpecialtiesService } from 'src/app/services/specialties.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit, OnDestroy {


  subscription = new Subscription();
  specialtyId: string = '';
  specialtyName: string = '';

  constructor(private specialtiesService: SpecialtiesService, public dialogRef: MatDialogRef<ConfirmDeleteComponent>) { }

  ngOnInit(): void {
    this.specialtyId = this.specialtiesService.specialtyId;
    this.specialtyName = this.specialtiesService.specialtyName;
  }

  deleteOneSpecialty(){
    this.subscription.add(this.specialtiesService.deleteOne(this.specialtyId).subscribe((data:any) => {
      console.log("this: " + data)
    }));
    this.dialogRef.close(this.specialtyId);
  }

  cancel(){
    this.dialogRef.close();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
