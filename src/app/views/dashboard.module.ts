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
import { TemperatureModule } from './feelings/temperature/temperature.module';
import { HumidityModule } from './feelings/humidity/humidity.module';

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
    TemperatureModule,
    HumidityModule
  ],
  providers: [],
  exports: [

  ]
})
export class DashboardModule { }