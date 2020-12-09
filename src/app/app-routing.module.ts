import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './Shared/Services/auth-guard.guard';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';
import { HumidityComponent } from './views/feelings/humidity/humidity.component';

// Child Route Dashboard
import { RoomFeelingsComponent } from './views/feelings/room/room.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      {
        path: '', component: DashboardComponent, canActivate: [AuthGuardGuard],
        children: [
          { path: '', component: RoomFeelingsComponent, },
          { path: 'room', component: RoomFeelingsComponent, },
          { path: 'humidity', component: HumidityComponent, },
        ] },

        {
          path: 'login', component: LoginComponent
        }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
