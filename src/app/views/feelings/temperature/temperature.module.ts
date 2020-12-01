// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Main Component
import { TemperatureComponent } from './temperature.component';

// Shared Components
import { GoBackComponent } from '../../../shared/_components/GoBack/goback.component';


@NgModule({
  declarations: [
    TemperatureComponent, GoBackComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: []
})
export class TemperatureModule { }