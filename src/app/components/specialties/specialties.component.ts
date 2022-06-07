import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Specialty } from 'src/app/interfaces/specialty.model';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit, OnDestroy {

  @ViewChild('paginator') paginator: MatPaginatorModule | undefined;

  subscription: Subscription = new Subscription();

  specialties:Specialty[]=[];

  displayedColumns: string[] = ['speciality_code', 'speciality_name', 'icons'];

  paginatorLength: number = 0;
  pageSize:number = 5;
  dataSource:any;

  pageEvent:PageTransitionEvent | any;

  constructor(private specialtiesService: SpecialtiesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription.add(this.specialtiesService.getSpecialties().subscribe((data:any)=> {
      this.paginatorLength = this.specialties.length;
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
      this.specialties = data;
    }))
  }

  openDialog(){
    this.dialog.open(ConfirmDeleteComponent);
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
