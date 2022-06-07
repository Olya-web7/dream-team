<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
=======
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from "@angular/material/list";
>>>>>>> 853b77b52ac427a2ddd03e8d2aaf1523b47d0323

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
<<<<<<< HEAD
    MatFormFieldModule,
=======
    MatPaginatorModule,
    MatDialogModule,
>>>>>>> 853b77b52ac427a2ddd03e8d2aaf1523b47d0323
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
<<<<<<< HEAD
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
=======
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class MaterialModule {
}
>>>>>>> 853b77b52ac427a2ddd03e8d2aaf1523b47d0323
