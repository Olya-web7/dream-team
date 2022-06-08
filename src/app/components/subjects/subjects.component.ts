import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from '../../interfaces/subject.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { filter, Subject, takeUntil } from 'rxjs';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['subject_id', 'subject_name', 'subject_description', 'action'];
  subjects!: SubjectModel[];
  dataSource!: MatTableDataSource<SubjectModel>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private subjectsService: SubjectsService, private _liveAnnouncer: LiveAnnouncer) {
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
      });
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort): void {    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
