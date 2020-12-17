import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PATH } from '../services/config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
  
export class DashboardComponent implements OnInit, AfterViewInit {
  page;
  url;
  userId = 1;
  zone = "";

  constructor(private _router: Router){}

  ngOnInit(): void {
    this._router.events.subscribe((e) => {
      this.setSpecial(e); 
    });

    if(sessionStorage.getItem("zone")) this.zone = sessionStorage.getItem("zone");
  }

  ngAfterViewInit(): void{
    this.setSpecial(this._router);
  }
  
  public setSpecial(event) {
    if(event instanceof NavigationEnd || event instanceof Router) {
      if( event.url == this.url ) return;

      this.page = document.querySelector(".app");

      this.url = event.url;

      switch(event.url) {
        case "/home/confirmation":
        case "/home/status": 
        case "/home/voting":
        case "/home/result": 
          this.addSpecial();
          break;
        default: 
          this.removeSpecial();
        break;
      }
    }
  }
  removeSpecial() {
    this.page.classList.remove("special");
  }
  addSpecial() {
    this.page.classList.add("special");
  }
}
