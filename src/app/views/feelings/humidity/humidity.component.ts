import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
@Component({
  selector: 'view-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['humidity.component.css'],
})
  
export class HumidityComponent implements OnInit {
  constructor(private router: Router) {}

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

  selectedList = [];

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

  confirmSelection() {
    if(this.selectedItem[0].id < 3) {
      let itemArray = {
        id: 6,
        icon: "invert_colors",
        name: this.selectedItem[0].name,
        added: true
      };
      this.selectedList.push(itemArray);
      history.pushState(this.selectedList, '', '');
      this.router.navigate(['/confirmation'], {state: history.state});
    }
    else if(this.selectedItem[0].id > 3) {
      let itemArray = {
        id: 6,
        icon: "invert_colors_off",
        name: this.selectedItem[0].name,
        added: true
      };
      this.selectedList.push(itemArray);
      history.pushState(this.selectedList, '', '');
      this.router.navigate(['/confirmation'], {state: history.state});
    }
  }

  ngOnInit() {
    if(history.state[0]) {
      for (let key in history.state) {
          if(history.state[key].name) {
              this.selectedList.push(history.state[key])
          }
      }
    }
  }
}