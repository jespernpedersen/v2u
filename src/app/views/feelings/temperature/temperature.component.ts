import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'view-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['temperature.component.css'],
})
// export class TemperatureComponent implements AfterViewInit, OnInit 
export class TemperatureComponent implements OnInit {
  constructor(private router: Router) {}

    temperature = [
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

      selectedList = [];
    
      selectItem(id) {
        this.temperature.forEach((item) => {
          if(item.id != id) {
            item.selected = false;
          }
          else {
            item.selected = true;
          }
        });
        this.selectedItem = [];
        this.selectedItem.push(this.temperature[id]);
      }

      confirmSelection() {
        if(this.selectedItem[0].id < 3) {
          let itemArray = {
            id: 0,
            icon: "local_fire_department",
            name: this.selectedItem[0].name,
            added: true
          };
          this.selectedList.push(itemArray);
          history.pushState(this.selectedList, '', '');
          this.router.navigate(['/home/confirmation'], {state: history.state});
        }
        else if(this.selectedItem[0].id > 3) {
          let itemArray = {
            id: 0,
            icon: "ac_unit",
            name: this.selectedItem[0].name,
            added: true
          };
          this.selectedList.push(itemArray);
          history.pushState(this.selectedList, '', '');
          this.router.navigate(['/home/confirmation'], {state: history.state});
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