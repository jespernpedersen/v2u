// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { HumidityComponent } from './humidity.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


import { GoBackModule } from '../../../shared/_components/GoBack/goback.module';

@NgModule({
  declarations: [
    HumidityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    GoBackModule
  ],
  providers: [],
  exports: []
})
export class HumidityModule { }