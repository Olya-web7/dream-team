import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Subject } from './subject.model';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects!: Subject[];

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    // this.subjectsService.getSubjects();      
  }

}
