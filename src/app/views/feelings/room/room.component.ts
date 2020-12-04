import { Component } from '@angular/core';
  
  @Component({
    selector: 'view-room-feelings',
    templateUrl: './room.component.html',
    styleUrls: ['room.component.css'],
  })
  
  export class RoomFeelingsComponent {
    // List
    list = [
      {
        id: 0,
        icon: "local_fire_department",
        name: "Hot/Cold"
      },
      {
        id: 1,
        icon: "dry",
        name: "Too smelly"
      },
      {
        id: 2,
        icon: "toys",
        name: "Fresh air", 
      },
      {
        id: 3,
        icon: "whatshot",
        name: "Too sweaty", 
      },
      {
        id: 4,
        icon: "ac_unit",
        name: "Freezing", 
      },
      {
        id: 5,
        icon: "waves",
        name: "Too windy", 
      },
      {
        id: 6,
        icon: "invert_colors_off",
        name: "Humid/Dry", 
      }
  ];

  }