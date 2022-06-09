import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectModel } from '../interfaces/subject.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  subjectId: string = '';
  subjectDescription: string = '';
  subjectName: string = '';

  subjectIdDel: string = '';
  subjectNameDel: string = '';

  constructor(private http: HttpClient) {}

  getSubjects() {
    return this.http.get<SubjectModel[]>(
      `${environment.apiUrl}/Subject/getRecords`
    );
  }

  addSubject(newSubject: SubjectModel) {
    return this.http.post(
      `${environment.apiUrl}/Subject/insertData`,
      JSON.stringify(newSubject)
    );
  }

  deleteSubject(id: string) {
    return this.http.delete(`${environment.apiUrl}/Subject/del/${id}`);
  }

  editSubject(id: string, editSubject: SubjectModel) {
    return this.http.post(
      `${environment.apiUrl}/Subject/update/${id}`,
      JSON.stringify(editSubject)
    );
  }
}
