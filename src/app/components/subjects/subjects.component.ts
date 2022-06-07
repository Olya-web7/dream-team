import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from './subject.model';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements AfterViewInit {
  displayedColumns: string[] = ['subject_id', 'subject_name', 'subject_description'];
  subjects!: SubjectModel[];
  dataSource!: MatTableDataSource<SubjectModel>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private subjectsService: SubjectsService, private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource(this.subjects);
  }

  ngAfterViewInit(): void {
    this.subjectsService
      .getSubjects()
      .subscribe((subjects: SubjectModel[]) => {
        this.dataSource = new MatTableDataSource(subjects);
        this.subjects = subjects;
      });
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
