import { AfterViewInit, Component } from '@angular/core';
import {Router} from '@angular/router';
  
@Component({
    selector: 'view-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['confirmation.component.css'],
})
  
export class ConfirmationComponent implements AfterViewInit {
    constructor(private router: Router) {}

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
        }
    ];

    // Confirmation Slider
    inputRange;
    maxValue = 150;
    speed = 12;
    currValue = 12;
    rafID;
    isActive = false;
    isSwiping = false;

    ngAfterViewInit() {
        this.inputRange = document.getElementsByClassName('pullee')[0];
        this.inputRange.min = 0;
        this.inputRange.max = this.maxValue;

        this.addEventListeners();
    }

    // Set value
    confirmStartHandler() {
        this.isSwiping = true;
        window.cancelAnimationFrame(this.rafID);
        this.currValue = this.inputRange.value;
    }

    // Check if completed
    confirmEndHandler() {
        this.isSwiping = false;
        this.currValue = this.inputRange.value;

        if(this.currValue >= this.maxValue) {
            this.successHandler();
        }
        else {
            this.rafID = window.requestAnimationFrame(() => {
                this.animateHandler();
            });
        }
    }

    // Handle Animations
    animateHandler() {
        this.inputRange.value = this.currValue;
        if(this.currValue > -1) {
            window.requestAnimationFrame(() => {
                this.animateHandler();
            });
        }
        // Animation Speed
        this.currValue = this.currValue - this.speed;
    }
    successHandler() {
        this.navigatetoStatus();

        // Reset User Input
        this.inputRange.value = 0;
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
        this.router.navigateByUrl('/status');
    }
    addMore() {
        this.router.navigateByUrl('/');
    }

    removeItem(id) {
        this.list.forEach((item, index) => {
            if(item.id == id) {
                this.list.splice(index, 1);
            }
        })
    }
}