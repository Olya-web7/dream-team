import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class FacultiesService {
  constructor(private http: HttpClient) {
  }

  getFaculties() {
    return this.http.get<any[]>(`${environment.apiUrl}/Faculty/getRecords`);
  }
}
