import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    selector: 'view-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['voting.component.css'],
})
  
export class VotingComponent implements AfterViewInit {
    constructor(private router: Router) {}

    // Voting Slider
    inputRange;
    maxValue = 100;
    speed = 2;
    currValue = 12;
    rafID;
    isActive = false;

    // Pagination Settings
    transition = 3000;
    isCompleted = false;

    // List
    list = [
        {
            id: 0,
            icon: "local_fire_department",
            name: "Hot/Cold",
            status: "",
            selected: true
        },
        {
            id: 1,
            icon: "dry",
            name: "Too smelly",
            status: "",
            selected: false
        }
    ];

    ngAfterViewInit() {
        this.inputRange = document.getElementsByClassName('pullee')[0];
        this.inputRange.min = 0;
        this.inputRange.max = this.maxValue;

        this.addEventListeners();
    }

    // Set value
    confirmStartHandler() {
        window.cancelAnimationFrame(this.rafID);
        this.currValue = this.inputRange.value;
    }

    // Check if completed
    confirmEndHandler() {
        this.currValue = this.inputRange.value;

        if(this.currValue >= this.maxValue) {
            this.agreeHandler();
        }
        else if(this.currValue <= 0) {
            this.disagreeHandler();
        }
        else {
            if(this.currValue > 50) {
                this.rafID = window.requestAnimationFrame(() => {
                    this.animateHandlerMinus();
                });
            }
            else if(this.currValue < 50) {         
                this.rafID = window.requestAnimationFrame(() => {
                    this.animateHandlerPlus();
                });
            }
            else {
                return;
            }
        }
    }

    // Handle Animations
    animateHandlerMinus() {
        this.inputRange.value = this.currValue;
        if(this.currValue > 50) {
            window.requestAnimationFrame(() => {
                this.animateHandlerMinus();
            });
        }
        this.currValue = Number(this.currValue) - this.speed;
    }
    animateHandlerPlus() {
        this.inputRange.value = this.currValue;
        if(this.currValue < 50) {
            window.requestAnimationFrame(() => {
                this.animateHandlerPlus();
        });
        }
        this.currValue = Number(this.currValue) + this.speed;
    }
    disagreeHandler() {
        this.list.forEach((item) => {
            if(item.selected)  {
                item.status = "denied";
            }
        })        
        
        // Reset User Input
        setTimeout(() => {
            this.inputRange.value = 50;
        }, 500);
        
        this.findCurrentItem();
    }
    agreeHandler() {
        this.list.forEach((item) => {
            if(item.selected)  {
                item.status = "approved";
            }
        })
        // alert("Agree!");

        // Reset User Input
        setTimeout(() => {
            this.inputRange.value = 50;
        }, 500);

        this.findCurrentItem();
    }

    addEventListeners() {
        // Add All Start Drag Listeners
        this.inputRange.addEventListener("mousedown", () => {
            this.confirmStartHandler();
        });
        this.inputRange.addEventListener("mousestart", () => {
            this.confirmStartHandler();
        });
        this.inputRange.addEventListener("touchstart", () => {
            this.confirmStartHandler();
        });
        // Add All End Drag Listeners
        this.inputRange.addEventListener("mouseup", () => {
            this.confirmEndHandler();
        });
        this.inputRange.addEventListener("touchend", () => {
            this.confirmEndHandler();
        });
    }

    navigatetoStatus() {
        this.router.navigateByUrl('/home/status');
    }

    // Pagination
    nextItem(id) {
        let nextId = id + 1;
        this.list[id].selected = false;
        this.list[nextId].selected = true;
    }

    findCurrentItem() {
        this.list.forEach((item) => {
            if(item.selected) {
                // First item
                if(item.id == 0) {
                    setTimeout(() => {
                        this.nextItem(item.id);
                    }, 800)
                } 
                // Last item
                if(item.id == this.list.length - 1) {
                    this.isCompleted = true;
                    setTimeout(() => {
                        this.navigatetoStatus();
                    }, 2500)
                }
            }
        });
    }
}