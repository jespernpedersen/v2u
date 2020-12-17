import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
  
  @Component({
    selector: 'view-room-feelings',
    templateUrl: './room.component.html',
    styleUrls: ['room.component.css'],
  })
  
  export class RoomFeelingsComponent implements OnInit {

    constructor(private router: Router) {}

    // List
    list = [
      {
        id: 0,
        icon: "local_fire_department",
        name: "Hot/Cold",
        routing: "/home/temperature",
        added: false
      },
      {
        id: 1,
        icon: "dry",
        name: "Too smelly",
        routing: "/home/confirmation",
        added: false
      },
      {
        id: 2,
        icon: "toys",
        name: "Fresh air", 
        routing: "/home/confirmation",
        added: false
      },
      {
        id: 3,
        icon: "whatshot",
        name: "Too sweaty", 
        routing: "/home/confirmation",
        added: false
      },
      {
        id: 4,
        icon: "ac_unit",
        name: "Freezing", 
        routing: "/home/confirmation",
        added: false
      },
      {
        id: 5,
        icon: "waves",
        name: "Too windy", 
        routing: "/home/confirmation",
        added: false
      },
      {
        id: 6,
        icon: "invert_colors_off",
        name: "Humid/Dry", 
        routing: "/home/humidity",
        added: false
      }
    ];

    selectedItems = [];

    addItem(item) {
      // If list is empty
      if(this.selectedItems.length == 0) {
        if(item.routing == "/home/confirmation") {
          item.added = true;
          this.selectedItems.push(item);
          history.pushState(this.selectedItems, '', '');
          this.router.navigate([item.routing], {state: history.state});
        }
        else {
          this.router.navigate([item.routing], {state: history.state});
        }
      }
      // If list has already has items
      else {
        let duplicate;
        if(!duplicate) {
          if(item.routing == "/home/confirmation") {
            item.added = true;
            this.selectedItems.push(item);
            history.pushState(this.selectedItems, '', '');
            this.router.navigate([item.routing], {state: history.state});
          }
          else {
            this.router.navigate([item.routing], {state: history.state});
          }
          return;
        }
      }
    }

    confirmSelection() {
      history.pushState(this.selectedItems, '', '');
      this.router.navigate(['/home/confirmation'], {state: history.state}); 
    }

    ngOnInit() {
      if(history.state[0]) {
        for (let key in history.state) {
            if(history.state[key].id) {
              let filter = this.list.filter((list) => {
                return list.id === history.state[key].id;
              })
              filter[0].added = true;
            }
            if(history.state[key].name) {
                this.selectedItems.push(history.state[key])
            }
        }
      }
      
    }

  }