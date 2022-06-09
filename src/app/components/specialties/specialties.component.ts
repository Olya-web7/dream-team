import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Specialty } from 'src/app/interfaces/specialty.model';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { NewSpecialtieComponent } from './new-specialtie/new-specialtie.component';

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

  constructor(private specialtiesService: SpecialtiesService, public dialog: MatDialog, public dialogNewSpecialty: MatDialog) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.subscription.add(this.specialtiesService.getSpecialties().subscribe((data:any)=> {
      this.paginatorLength = this.specialties.length;
      this.dataSource = new MatTableDataSource<Element>(data);
      this.dataSource.paginator = this.paginator;
      this.specialties = data;
    }))
  }

  // confirm delete
  openDialog(id:string, name:string){
    this.specialtiesService.specialtyIdDel = id;
    this.specialtiesService.specialtyNameDel = name;
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '40%'
    });
    this.subscription.add(dialogRef.afterClosed().subscribe(data =>{
    if (data !== undefined){
      this.fetchData();
    }
  }))
  }

  // new or edit
  openDialog2(){
    const dialogRef = this.dialogNewSpecialty.open(NewSpecialtieComponent, {
      width: '40%'
    });
    this.subscription.add(dialogRef.afterClosed().subscribe(data => {
        this.fetchData();
    }))
  }

  openNewSpecialtyDialog(){
    this.openDialog2();
  }

  openEditSpecialtyDialog(id:string, code:string, name:string) {
    this.specialtiesService.specialtyId = id;
    this.specialtiesService.specialtyCode = code;
    this.specialtiesService.specialtyName = name;
    this.openDialog2();
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
