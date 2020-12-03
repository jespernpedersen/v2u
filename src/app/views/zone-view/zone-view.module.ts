// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Subcomponents
import { MatIconModule } from '@angular/material/icon';
import { ZoneViewComponent } from './zone-view.component';
import { RoomsService } from 'src/app/services/rooms.service';
import { VentsService } from 'src/app/services/vents.service';
import { HttpClientModule } from '@angular/common/http';
import { ZoneGridModule } from 'src/app/shared/zone-grid/zone-grid.module';
import { UsersService } from 'src/app/services/users.service';


@NgModule({
  declarations: [ZoneViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    ZoneGridModule
  ],
  providers: [RoomsService, VentsService, UsersService],
  exports: [ZoneViewComponent]
})
export class ZoneViewModule { }