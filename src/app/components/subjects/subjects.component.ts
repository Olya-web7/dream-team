import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from '../../interfaces/subject.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { filter, Subject, Subscription, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSubjectDeleteComponent } from './confirm-subject-delete/confirm-subject-delete.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'subject_id',
    'subject_name',
    'subject_description',
    'action',
  ];
  dataSource!: MatTableDataSource<SubjectModel>;
  subjects!: SubjectModel[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  paginatorLength: number = 0;
  subscription: Subscription = new Subscription();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private subjectsService: SubjectsService,
    public dialog: MatDialog,
    public dialogNewSubject: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource(this.subjects);
  }

  ngAfterViewInit(): void {
    this.subjectsService
      .getSubjects()
      .pipe(
        takeUntil(this.destroy$),
        filter((subjects) => !!subjects)
      )
      .subscribe((subjects) => {
        this.dataSource = new MatTableDataSource(subjects);
        this.subjects = subjects;
        this.paginatorLength = this.subjects.length;
        this.dataSource.paginator = this.paginator;
      });
    this.dataSource.paginator = this.paginator;
  }

  deleteSubject(id:string, name:string) {
    this.subjectsService.subjectIdDel = id;
    this.subjectsService.subjectNameDel = name;
    const dialogRef = this.dialog.open(ConfirmSubjectDeleteComponent, {
      width: '40%'
    });
    this.subscription.add(dialogRef.afterClosed().subscribe(data =>{
      if (data !== undefined){
        this.subjectsService.getSubjects()
      }
    }))    
  }  

  openDialog() {
    const dialogRef = this.dialogNewSubject.open(NewSubjectComponent, {
      width: '40%',
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(() => {
        this.subjectsService.getSubjects()
      })
    );
  }

  openNewSubjectDialog() {
    this.openDialog();
  }

  openEditSpecialtyDialog(id: string, description: string, name: string) {
    this.subjectsService.subjectId = id;
    this.subjectsService.subjectDescription = description;
    this.subjectsService.subjectName = name;
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

