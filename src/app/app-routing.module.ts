import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// Login Routes
import { DashboardComponent } from './views/dashboard.component';

// Child Route Dashboard
import { HowFeelingsComponent } from './views/feelings/how/how.component';
import { WhereFeelingsComponent } from './views/feelings/where/where.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { 
        path: '', component: DashboardComponent,
        children: [
          { path: '', component: HowFeelingsComponent, },
          { path: 'where', component: WhereFeelingsComponent },
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
