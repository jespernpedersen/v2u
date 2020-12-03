import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
    selector: 'view-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['voting.component.css'],
})
  
export class VotingComponent implements AfterViewInit {
    constructor(private router: Router) {}

    inputRange;
    maxValue = 100;
    speed = 2;
    currValue = 12;
    rafID;
    isActive = false;

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
        console.log(this.currValue);

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
        alert("Disagree!");

        // Reset User Input
        this.inputRange.value = 50;
    }
    agreeHandler() {
        alert("Agree!");

        // Reset User Input
        this.inputRange.value = 50;
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
}