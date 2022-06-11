import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from '../../interfaces/subject.model';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSubjectDeleteComponent } from './confirm-subject-delete/confirm-subject-delete.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  subscription: Subscription = new Subscription();
  subjects: SubjectModel[] = [];

  displayedColumns: string[] = ['subject_id', 'subject_name', 'subject_description', 'action'];
  dataSource!: MatTableDataSource<SubjectModel>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  paginatorLength: number = 0;
  pageSize: number = 5;

  constructor(
    private subjectsService: SubjectsService,
    public dialog: MatDialog,
    public dialogNewSubject: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource(this.subjects);
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this.subscription.add(
      this.subjectsService.getSubjects().subscribe((subjects) => {
        this.paginatorLength = this.subjects.length;
        this.dataSource = new MatTableDataSource(subjects);
        this.dataSource.paginator = this.paginator;
        this.subjects = subjects;
      })
    )
  }

  deleteSubject(id:string, name:string) {
    this.subjectsService.subjectIdDel = id;
    this.subjectsService.subjectNameDel = name;
    const dialogRef = this.dialog.open(ConfirmSubjectDeleteComponent, {
      width: '40%'
    });
    this.subscription.add(dialogRef.afterClosed().subscribe(data =>{
      if (data !== undefined){
        this.getSubjects();
      }
    }))
  }

  openDialog() {
    const dialogRef = this.dialogNewSubject.open(NewSubjectComponent, {
      width: '40%',
    });
    this.subscription.add(
      dialogRef.afterClosed().subscribe(() => {
        this.getSubjects();
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
    this.subscription.unsubscribe();
  }
}

