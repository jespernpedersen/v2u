// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';

// components
import { GameStartComponent } from './game-start/game-start.component';

// Material Design
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GameSliderModule } from 'src/app/shared/_components/game-slider/game-slider.module';
import { GoBackModule } from 'src/app/shared/_components/GoBack/goback.module';

@NgModule({
  declarations: [
    GameDashboardComponent,
    GameStartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    GameSliderModule,
    GoBackModule
  ],
  providers: [],
  exports: [
    GameDashboardComponent,
    GameStartComponent
  ]
})
export class GameModule { }