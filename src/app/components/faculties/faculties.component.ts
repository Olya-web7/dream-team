import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FacultiesService } from "../../services/faculties.service";
import { MatTableDataSource } from "@angular/material/table";
import { Faculty } from "../../interfaces/faculty.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { NewEditFacultyComponent } from "./new-edit-faculty/new-edit-faculty.component";
import { Subscription } from "rxjs";
import { ConfirmFacultyDeleteComponent } from "./confirm-faculty-delete/confirm-faculty-delete.component";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator: MatPaginator;

  public faculties: MatTableDataSource<Faculty>;
  public displayedColumns: string[] = ['faculty_id', 'faculty_name', 'faculty_description', 'actions'];

  public paginatorLength: number = 0;
  public pageSize: number = 5;

  public getDataSub: Subscription;

  constructor(
    private facultiesService: FacultiesService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getFaculties();
  }

  ngOnDestroy(): void {
    if (this.getDataSub) {
      this.getDataSub.unsubscribe();
    }
  }

  public getFaculties(): void {
    this.getDataSub = this.facultiesService.getFaculties()
      .subscribe((faculties: Faculty[]) => {
        this.faculties = new MatTableDataSource(faculties);
        this.faculties.paginator = this.paginator;
      });
  }

  public openNewEditDialog(isNew: boolean, id?: string, name?: string, description?: string): void {
    const dialogRef = this.dialog.open(NewEditFacultyComponent,
      {
        panelClass: 'add-faculty',
        data: {
          faculty_id: id,
          faculty_name: name,
          faculty_description: description,
          isNew: isNew,
        }
      }
    );
    dialogRef.afterClosed().subscribe(() => {
      this.getFaculties();
    })
  }

  public openDeleteDialog(faculty_id: string, faculty_name: string): void {
    const dialogRef = this.dialog.open(ConfirmFacultyDeleteComponent, {
      panelClass: 'delete-faculty',
      data: {
        faculty_id: faculty_id,
        faculty_name: faculty_name,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getFaculties();
    })
  }

}
