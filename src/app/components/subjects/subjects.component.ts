import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { SubjectModel } from './subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {

  subjects!: SubjectModel[];

  displayedColumns: string[] = [
    'subject_id',
    'subject_name',
    'subject_description',
  ];

  constructor(private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.subjectsService.getSubjects().subscribe((subjects) => this.subjects = subjects)
  }
}
