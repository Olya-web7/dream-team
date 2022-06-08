import {Component, OnInit} from '@angular/core';
import {FacultiesService} from "../../services/faculties.service";
import {MatTableDataSource} from "@angular/material/table";
import {Faculties} from "../../interfaces/faculties.model";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {
  public faculties: MatTableDataSource<Faculties>;
  public displayedColumns: string[] = ['faculty_id', 'faculty_name', 'faculty_description'];

  constructor(private facultiesService: FacultiesService) {
  }

  ngOnInit(): void {
    this.getFaculties();
  }

  public getFaculties(): void {
    this.facultiesService.getFaculties().subscribe((faculties: Faculties[]) => {
      this.faculties = new MatTableDataSource(faculties);
    })
  }

}
