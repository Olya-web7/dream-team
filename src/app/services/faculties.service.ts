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

  public getFaculties() {
    return this.http.get<Faculty[]>(`${environment.apiUrl}/Faculty/getRecords`);
  }

  public addFaculty(body: Faculty) {
    return this.http.post(`${environment.apiUrl}/Faculty/insertData`, body);
  }

  public updateFaculty(id: string, body: Faculty) {
    return this.http.post(`${environment.apiUrl}/Faculty/update/${id}`, body);
  }

  public delFaculty(id: string) {
    return this.http.delete(`${environment.apiUrl}/Faculty/del/${id}`);
  }
}
