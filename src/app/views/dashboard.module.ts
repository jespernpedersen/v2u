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
import { ZoneViewModule } from './zone-view/zone-view.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    RoomFeelingsModule,
    ZoneViewModule
  ],
  providers: [],
  exports: [

  ]
})
export class DashboardModule { }