import { Component, Inject } from '@angular/core';
import { FacultiesService } from "../../../services/faculties.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Faculty } from "../../../interfaces/faculty.model";

@Component({
  selector: 'app-confirm-faculty-delete',
  templateUrl: './confirm-faculty-delete.component.html',
  styleUrls: ['./confirm-faculty-delete.component.scss']
})
export class ConfirmFacultyDeleteComponent {

  constructor(
    private facultiesService: FacultiesService,
    @Inject(MAT_DIALOG_DATA) public data: Faculty,
  ) {
  }

  public deleteFaculty(id: string): void {
    this.facultiesService.delFaculty(id).subscribe(() => {
    })
  }

}
