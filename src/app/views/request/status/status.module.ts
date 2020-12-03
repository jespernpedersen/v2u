// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Main Component
import { StatusComponent } from './status.component';


import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  exports: []
})
export class StatusModule { }