// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Main Component
import { TemperatureComponent } from './temperature.component';

import { GoBackModule } from '../../../shared/_components/GoBack/goback.module';

@NgModule({
  declarations: [
    TemperatureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GoBackModule
  ],
  providers: [],
  exports: []
})
export class TemperatureModule { }