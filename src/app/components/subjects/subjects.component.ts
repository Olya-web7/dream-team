import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from './subject.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
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

  constructor(private subjectsService: SubjectsService) {
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
}
