import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpecialtiesService } from 'src/app/services/specialties.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit, OnDestroy {

  subscription = new Subscription();

  constructor(private specialtiesService: SpecialtiesService) { }

  ngOnInit(): void {
  }

  deleteOneSpecialty(id:number){
    this.subscription.add(this.specialtiesService.deleteOne(id).subscribe((data:any) => {
      console.log("this: " + data)
    }));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
