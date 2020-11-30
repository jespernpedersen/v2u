import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';

// Child Route Dashboard


const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { 
        path: '', component: DashboardComponent,
        children: [
          { path: '', component: DashboardComponent, },
          { path: 'humidity', component: DashboardComponent },
        ] },
        { path: 'classroom', component: DashboardComponent },
        { path: 'claim', component: DashboardComponent }
    ]
  },
  { path: 'login',   component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
