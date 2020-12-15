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
import { GameStartComponent } from './views/game/game-start/game-start.component';
import { GameDashboardComponent } from './views/game/game-dashboard/game-dashboard.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: '', component: ZoneViewComponent},
      {
        path: 'home', component: DashboardComponent,

        children: [
          { path: '', component: RoomFeelingsComponent, canActivate: [AuthGuardGuard]},
          // Feelings Routes
          { path: 'room', component: RoomFeelingsComponent, canActivate: [AuthGuardGuard] },
          { path: 'humidity', component: HumidityComponent, canActivate: [AuthGuardGuard] },
          { path: 'temperature', component: TemperatureComponent, canActivate: [AuthGuardGuard] },
          
          // Request Routes
          { path: 'confirmation', component: ConfirmationComponent, canActivate: [AuthGuardGuard] },
          { path: 'status', component: StatusComponent, canActivate: [AuthGuardGuard] },
          { path: 'voting', component: VotingComponent, canActivate: [AuthGuardGuard] },
          { path: 'result', component: ResultComponent, canActivate: [AuthGuardGuard] },
        ]},
          { path: 'zones', component: ZoneViewComponent, canActivate: [AuthGuardGuard] },
          { path: 'login', component: LoginComponent},
          { path: 'game', component: GameStartComponent},
          { path: 'game/level/:id', component: GameDashboardComponent },
        ] },
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
