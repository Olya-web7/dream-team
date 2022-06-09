import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Specialty } from '../interfaces/specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  specialtyId: string = '';
  specialtyCode: string = '';
  specialtyName: string = '';

  specialtyIdDel: string = '';
  specialtyNameDel: string = '';

  constructor(private http: HttpClient) { }

  getSpecialties(){
    return this.http.get( `${environment.apiUrl}/Speciality/getRecords`);
  }

  deleteOne(id:string){
    return this.http.delete(`${environment.apiUrl}/Speciality/del/${id}`);
  }

  addOne(newSpecialty:Specialty){
    return this.http.post(`${environment.apiUrl}/Speciality/insertData`, JSON.stringify(newSpecialty));
  }

  editOne(id:string, editSpecialty:Specialty){
    return this.http.post(`${environment.apiUrl}/Speciality/update/${id}`, JSON.stringify(editSpecialty));
  }
}
