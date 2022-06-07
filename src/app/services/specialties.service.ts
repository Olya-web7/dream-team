import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  url: string = 'https://dtapi.if.ua/api/';

  constructor(private http: HttpClient) { }

  getSpecialties(){
    return this.http.get(this.url + "Speciality/getRecords");
  }

  deleteOne(id:number){
    return this.http.delete(`${this.url}Speciality/del/${id}`);
  }
}
