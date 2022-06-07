import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatListModule } from "@angular/material/list";


@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatListModule], 
  exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatListModule]

})
export class MaterialModule { }
