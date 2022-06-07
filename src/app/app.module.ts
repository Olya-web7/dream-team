import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { MaterialModule } from './modules/material/material.module';
import { NewSpecialtieComponent } from './components/specialties/new-specialtie/new-specialtie.component';
import { SpecialtiesService } from './services/specialties.service';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { NewFacultyComponent } from './components/faculties/new-faculty/new-faculty.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewSubjectComponent } from './components/subjects/new-subject/new-subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialtiesComponent,
    NewSpecialtieComponent,
    FacultiesComponent,
    NewFacultyComponent,
    HomePageComponent,
    SubjectsComponent,
    NewSubjectComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [SpecialtiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
