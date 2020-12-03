import { Component } from '@angular/core';  
@Component({
  selector: 'view-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['humidity.component.css'],
})
  
export class HumidityComponent {
  humidity = [
    {
      id: 0,
      name: "Very humid",
      selected: false
    },
    {
      id: 1,
      name: "Humid",
      selected: false
    },
    {
      id: 2,
      name: "Little dry",
      selected: false
    },
    {
      id: 3,
      name: "Dry",
      selected: false
    },
    {
      id: 4,
      name: "Very dry",
      selected: false
    }
  ];

  selectedItem;

  selectItem(id) {
    this.humidity.forEach((item) => {
      if(item.id != id) {
        item.selected = false;
      }
      else {
        item.selected = true;
      }
    });
    this.selectedItem = [];
    this.selectedItem.push(this.humidity[id]);
  }
}