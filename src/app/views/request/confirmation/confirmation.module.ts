// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Main Component
import { ConfirmationComponent } from './confirmation.component';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';
import { GoBackComponent } from 'src/app/shared/_components/GoBack/goback.component';
import { GoBackModule } from 'src/app/shared/_components/GoBack/goback.module';


@NgModule({
  declarations: [
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    GoBackModule
  ],
  providers: [],
  exports: [
      
  ]
})
export class ConfirmationModule { }