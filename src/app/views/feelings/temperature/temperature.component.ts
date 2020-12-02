import { Component, AfterViewInit, OnInit } from '@angular/core';
@Component({
    selector: 'view-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['temperature.component.css'],
})
// export class TemperatureComponent implements AfterViewInit, OnInit 
export class TemperatureComponent {

    /* For you, Diogo 
    Perhaps make the entire slider a reusable component for both humidity and temperature view 
    */

    /*
    temperature : number;
    tempSelection = [
        {
            id: 1,
            name: "Little hot"
        },
        {
            id: 2,
            name: "Little cold"
        }
    ];
    ul;
    eventListener;
    tempNodeList: any;
    sendChanges;
    centerDimensions;


    // Scroll to Selection
    public scrollToSelection() {

    }

    ngAfterViewInit(): void{
        this.ul = document.querySelector(".temperature");
        this.tempNodeList = this.ul.children;

        this.onLoaded.emit();

        this.addListener();

        if(this.temperature) {
            this.scrollToTemperature();
        }
    }

    onScroll(): void {
        clearTimeout(this.sendChanges);
        this.sendChanges = setTimeout(() => {
            this.getCenterElement(this.temperature);
        }, 200)
    }

    getCenterElement(temperature) {
        if(!temperature) return;
          
          let curElIndex = (temperature) + 1;
          this.updateValues();

          while(true) {
              let currentElement = this.tempNodeList[curElIndex];

              let pos = { top: 0, bottom: 0}
              pos.top = currentElement.getBoundingClientRect().top;
              pos.bottom = currentElement.getBoundingClientRect().bottom;

              if(pos.top >= this.centerDimensions.top && pos.bottom <= this.centerDimensions.bottom){
                    let selected = document.querySelectorAll(".temperature .selected");
                    selected.forEach(el => el.classList.remove("selected") );
                    // this.temperature = curElIndex+this.minTemp-1;
                    currentElement.classList.add("selected");
                    break;
                }
                else if(pos.bottom <= this.centerDimensions.top){

                ++curElIndex;
                if(curElIndex < 1){
                    break;
                }

            } else if(pos.top >= this.centerDimensions.bottom){//if current element top is lower than bottom, it means that the list scrolled down
                
                --curElIndex;
                if(curElIndex > this.tempNodeList.lenght-2){
                    break;
                }

            }else break;
          }
      }
      addListener() {
          this.ul.addEventListener("scroll", () => {
              this.onScroll();
          })
      }

      removeListener() {
          this.ul.removeEventListener("scroll", () => {
              this.onScroll();
          })
      }

      updateValues() {
        let size = this.ul.getBoundingClientRect().height;
        this.centerDimensions = {
            top: this.ul.getBoundingClientRect().bottom - ( size / 2 ) -30,
            bottom: this.ul.getBoundingClientRect().top + ( size / 2 ) + 30
        }
  }
  */
}