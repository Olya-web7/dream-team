import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialtiesComponent } from '../components/specialties/specialties.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { FacultiesComponent } from "../components/faculties/faculties.component";
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, children: [
      { path: 'faculties', component: FacultiesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'speciality', component: SpecialtiesComponent},
      { path: '', component: DashboardComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
