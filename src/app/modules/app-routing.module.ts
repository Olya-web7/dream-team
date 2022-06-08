import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialtiesComponent } from '../components/specialties/specialties.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { FacultiesComponent } from "../components/faculties/faculties.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent, children: [
      { path: 'faculties', component: FacultiesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'speciality', component: SpecialtiesComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
