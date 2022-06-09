import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Faculty } from "../interfaces/faculty.model";

@Injectable({
  providedIn: 'root'
})

export class FacultiesService {
  constructor(private http: HttpClient) {
  }

  getFaculties() {
    return this.http.get<Faculty[]>(`${environment.apiUrl}/Faculty/getRecords`);
  }

  addFaculty(body: Faculty) {
    return this.http.post(`${environment.apiUrl}/Faculty/insertData`, body);
  }
}
