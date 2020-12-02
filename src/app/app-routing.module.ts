import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';

// Child Route Dashboard
import { RoomFeelingsComponent } from './views/feelings/room/room.component';
import { HumidityComponent } from './views/feelings/humidity/humidity.component';
import { TemperatureComponent } from './views/feelings/temperature/temperature.component';
import { ConfirmationComponent } from './views/request/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { 
        path: '', component: DashboardComponent,
        children: [
          { path: '', component: RoomFeelingsComponent, },
          { path: 'room', component: RoomFeelingsComponent, },
          { path: 'humidity', component: HumidityComponent, },
          { path: 'temperature', component: TemperatureComponent, },
          { path: 'confirmation', component: ConfirmationComponent, },
        ] },
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
