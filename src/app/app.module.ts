import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './views/dashboard.module';
import { GoBackModule } from './shared/_components/GoBack/goback.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    GoBackModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
