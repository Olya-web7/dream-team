import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  specialtyId: string = '';
  specialtyName: string = '';

  constructor(private http: HttpClient) { }

  getSpecialties(){
    return this.http.get( `${environment.apiUrl}/Speciality/getRecords`);
  }

  deleteOne(id:string){
    return this.http.delete(`${environment.apiUrl}/Speciality/del/${id}`);
  }
}
