import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  countSpeciality: any;
  countSubjects: any;
  countFaculties: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getCountSpeciality().subscribe((count) => {
      this.countSpeciality = count;
    });
    this.dashboardService.getCountSubjects().subscribe((count) => {
      this.countSubjects = count;
    });
    this.dashboardService.getCountFaculties().subscribe((count) => {
      this.countFaculties = count;
    });
  }
}
