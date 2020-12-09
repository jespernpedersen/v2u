// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { DashboardComponent } from './dashboard.component';

// Views
import { RoomFeelingsModule } from './feelings/room/room.module';
import { ZoneViewModule } from './zone-view/zone-view.module';

import { TemperatureModule } from './feelings/temperature/temperature.module';
import { HumidityModule } from './feelings/humidity/humidity.module';
import { ConfirmationModule } from './request/confirmation/confirmation.module';
import { StatusModule } from './request/status/status.module';
import { VotingModule } from './request/voting/voting.module';
import { ResultModule } from './request/result/result.module';

// Material Design
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    RoomFeelingsModule,
    ZoneViewModule,
    TemperatureModule,
    HumidityModule,
    ConfirmationModule,
    StatusModule,
    VotingModule,
    ResultModule
  ],
  providers: [],
  exports: [

  ]
})
export class DashboardModule { }