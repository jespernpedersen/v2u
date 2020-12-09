// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { DashboardComponent } from './dashboard.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// Views
import { RoomFeelingsModule } from './feelings/room/room.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    RoomFeelingsModule
  ],
  providers: [],
  exports: [

  ]
})
export class DashboardModule { }