// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Main Component
import { StatusComponent } from './status.component';


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: []
})
export class StatusModule { }