// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { GoBackComponent } from './goback.component';


@NgModule({
  declarations: [
    GoBackComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [GoBackComponent]
})
export class GoBackModule { }