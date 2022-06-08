import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialtiesComponent } from '../components/specialties/specialties.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'speciality', component: SpecialtiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
