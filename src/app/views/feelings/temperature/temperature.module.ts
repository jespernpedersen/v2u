// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Main Component
import { TemperatureComponent } from './temperature.component';

// Shared Components
import { GoBackComponent } from '../../../shared/_components/GoBack/goback.component';


@NgModule({
  declarations: [
    TemperatureComponent, GoBackComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: []
})
export class TemperatureModule { }