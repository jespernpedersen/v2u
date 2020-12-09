// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { VotingComponent } from './voting.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    VotingComponent
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
export class VotingModule { }