import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';

// Child Route Dashboard
import { RoomFeelingsComponent } from './views/feelings/room/room.component';
import { ZoneViewComponent } from './views/zone-view/zone-view.component';
import { HumidityComponent } from './views/feelings/humidity/humidity.component';
import { TemperatureComponent } from './views/feelings/temperature/temperature.component';
import { ConfirmationComponent } from './views/request/confirmation/confirmation.component';
import { StatusComponent } from './views/request/status/status.component';
import { VotingComponent } from './views/request/voting/voting.component';
import { ResultComponent } from './views/request/result/result.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { 
        path: '', component: DashboardComponent,
        children: [
          { path: '', component: RoomFeelingsComponent, },
          // Feelings Routes
          { path: 'room', component: RoomFeelingsComponent, },
          { path: 'humidity', component: HumidityComponent, },
          { path: 'temperature', component: TemperatureComponent, },
          
          // Request Routes
          { path: 'confirmation', component: ConfirmationComponent, },
          { path: 'status', component: StatusComponent },
          { path: 'voting', component: VotingComponent },
          { path: 'result', component: ResultComponent },
        ]},
          { path: 'zones', component: ZoneViewComponent },
        ] },
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
