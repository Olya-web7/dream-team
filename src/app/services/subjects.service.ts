import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../components/subjects/subject.model';

@Injectable({
  providedIn: 'root'
})

export class SubjectsService {
  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get('/dtapi.if.ua/Subject/getRecords/');
  }
}
