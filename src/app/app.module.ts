import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { MaterialModule } from './modules/material/material.module';
import { NewSpecialtieComponent } from './components/specialties/new-specialtie/new-specialtie.component';
import { SpecialtiesService } from './services/specialties.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDeleteComponent } from './components/specialties/confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    SpecialtiesComponent,
    NewSpecialtieComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule
  ],
  providers: [SpecialtiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
