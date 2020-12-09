import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './Shared/Services/auth-guard.guard';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';

// Child Route Dashboard
import { RoomFeelingsComponent } from './views/feelings/room/room.component';
import { LoginComponent } from './views/login/login.component';
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
      { path: '', component: ZoneViewComponent},
      {
        path: 'home', component: DashboardComponent, canActivate: [AuthGuardGuard],

        children: [
          { path: '', component: RoomFeelingsComponent, },
          // Feelings Routes
          { path: 'room', component: RoomFeelingsComponent, },
          { path: 'humidity', component: HumidityComponent, },
          { path: 'temperature', component: TemperatureComponent, },
          
          // Request Routes
          { path: 'confirmation', component: ConfirmationComponent, canActivate: [AuthGuardGuard] },
          { path: 'status', component: StatusComponent, canActivate: [AuthGuardGuard] },
          { path: 'voting', component: VotingComponent, canActivate: [AuthGuardGuard] },
          { path: 'result', component: ResultComponent, canActivate: [AuthGuardGuard] },
        ]},
          { path: 'zones', component: ZoneViewComponent, canActivate: [AuthGuardGuard] },
          { path: 'login', component: LoginComponent}
        ] },
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
