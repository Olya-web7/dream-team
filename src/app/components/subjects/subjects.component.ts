import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from '../../interfaces/subject.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { filter, Subject, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private subjectsService: SubjectsService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
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
    
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

