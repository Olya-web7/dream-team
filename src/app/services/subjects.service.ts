import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectModel } from '../interfaces/subject.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjectId: string = '';
  subjectName: string = '';

  constructor(private http: HttpClient) {}

  getSubjects() {
    return this.http.get<SubjectModel[]>(
      `${environment.apiUrl}/Subject/getRecords`
    );
  }
  
  addSubject(id: string) {
    return this.http.delete(`${environment.apiUrl}/Subject/add/${id}`);
  }

  deleteSubject(id: string) {
    return this.http.delete(`${environment.apiUrl}/Subject/del/${id}`);
  }
}
