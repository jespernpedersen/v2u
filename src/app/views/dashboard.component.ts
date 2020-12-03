import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
  
export class DashboardComponent implements OnInit, AfterViewInit {
  page;
  url;

  constructor(private _router: Router){}

  ngOnInit(): void {
    this._router.events.subscribe((e) => {
      this.setSpecial(e); 
    });
  }

  ngAfterViewInit(): void{
    this.setSpecial(this._router);
  }
  
  public setSpecial(event) {
    if(event instanceof NavigationEnd || event instanceof Router) {
      if(event.url == this.url) return;

      this.page = document.querySelector(".app");

      this.url = event.url;

      switch(event.url) {
        case "/": 
          this.removeSpecial();
          break;
        case "/confirmation":
          this.addSpecial();
          break;
        case "/status": 
          this.addSpecial();
          break;
        case "/voting":
          this.addSpecial();
          break;
        case "/result": 
          this.addSpecial();
          break;
        default: break;
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