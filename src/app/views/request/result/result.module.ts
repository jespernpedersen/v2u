// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { ResultComponent } from './result.component';


import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  exports: []
})
export class ResultModule { }