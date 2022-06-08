import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getCountSpeciality(){
    return this.http.get( `${environment.apiUrl}/Speciality/countRecords/`);
  }

  getCountSubjects(){
    return this.http.get( `${environment.apiUrl}/Faculty/countRecords/`);
  }

  getCountFaculties(){
    return this.http.get( `${environment.apiUrl}/Subject/countRecords/`);
  }
}
