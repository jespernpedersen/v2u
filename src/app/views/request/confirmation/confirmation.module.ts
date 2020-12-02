// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { ConfirmationComponent } from './confirmation.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  providers: [],
  exports: [
      
  ]
})
export class ConfirmationModule { }