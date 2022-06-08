import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectModel } from '../interfaces/subject.model';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class SubjectsService {
  constructor(private http: HttpClient) { }

  getSubjects() {
    return this.http.get<SubjectModel[]>(`${environment.apiUrl}/Subject/getRecords`);
  }
}
