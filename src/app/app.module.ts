import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { MaterialModule } from './modules/material/material.module';
import { NewSpecialtieComponent } from './components/specialties/new-specialtie/new-specialtie.component';
import { SpecialtiesService } from './services/specialties.service';
import { ConfirmDeleteComponent } from './components/specialties/confirm-delete/confirm-delete.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { NewFacultyComponent } from './components/faculties/new-faculty/new-faculty.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewSubjectComponent } from './components/subjects/new-subject/new-subject.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    ConfirmDeleteComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ],
  providers: [
    SpecialtiesService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
