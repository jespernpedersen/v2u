import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ZoneGridComponent } from './Zone-grid.component';
import { VentComponent } from './vent/vent.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    VentComponent,
    ZoneGridComponent
    ],
  exports: [
    CommonModule,
    VentComponent,
    ZoneGridComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
    ]
})
export class ZoneGridModule { }