import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
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
        routing: "/temperature",
        added: false
      },
      {
        id: 1,
        icon: "dry",
        name: "Too smelly",
        routing: "/confirmation",
        added: false
      },
      {
        id: 2,
        icon: "toys",
        name: "Fresh air", 
        routing: "/confirmation",
        added: false
      },
      {
        id: 3,
        icon: "whatshot",
        name: "Too sweaty", 
        routing: "/confirmation",
        added: false
      },
      {
        id: 4,
        icon: "ac_unit",
        name: "Freezing", 
        routing: "/confirmation",
        added: false
      },
      {
        id: 5,
        icon: "waves",
        name: "Too windy", 
        routing: "/confirmation",
        added: false
      },
      {
        id: 6,
        icon: "invert_colors_off",
        name: "Humid/Dry", 
        routing: "/humidity",
        added: false
      }
    ];

    selectedItems = [];

    addItem(item) {
      // If list is empty
      if(this.selectedItems.length == 0) {
        if(item.routing == "/confirmation") {
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
        for (let key in this.selectedItems) {
          if(this.selectedItems[key].id == item.id) {
            duplicate = true;
            alert("You've already added this item");
          }
        } 
        if(!duplicate) {
          if(item.routing == "/confirmation") {
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
      this.router.navigate(['/confirmation'], {state: history.state}); 
    }

    ngOnInit() {
      if(history.state[0]) {
        for (let key in history.state) {
            if(history.state[key].name) {
                this.selectedItems.push(history.state[key])
            }
        }
      }
      
    }

  }