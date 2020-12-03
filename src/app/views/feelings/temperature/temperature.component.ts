import { Component, AfterViewInit, OnInit } from '@angular/core';
@Component({
    selector: 'view-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['temperature.component.css'],
})
// export class TemperatureComponent implements AfterViewInit, OnInit 
export class TemperatureComponent {

    humidity = [
        {
          id: 0,
          name: "Very hot",
          selected: false
        },
        {
          id: 1,
          name: "Hot",
          selected: false
        },
        {
          id: 2,
          name: "Little hot",
          selected: false
        },
        {
          id: 3,
          name: "Little cold",
          selected: false
        },
        {
          id: 4,
          name: "Cold",
          selected: false
        },
        {
          id: 5,
          name: "Very cold",
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