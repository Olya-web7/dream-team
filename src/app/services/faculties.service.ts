import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FacultiesService {
  constructor(private http: HttpClient) {
  }

  getFaculties() {
    return this.http.get<any[]>('https://dtapi.if.ua/api/Faculty/getRecords');
  }
}
