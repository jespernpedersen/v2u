// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { DashboardComponent } from './dashboard.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';

// Views
import { RoomFeelingsModule } from './feelings/room/room.module';
import { TemperatureModule } from './feelings/temperature/temperature.module';
import { HumidityModule } from './feelings/humidity/humidity.module';
import { ConfirmationModule } from './request/confirmation/confirmation.module';
import { StatusModule } from './request/status/status.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    RoomFeelingsModule,
    TemperatureModule,
    HumidityModule,
    ConfirmationModule,
    StatusModule
  ],
  providers: [],
  exports: [

  ]
})
export class DashboardModule { }