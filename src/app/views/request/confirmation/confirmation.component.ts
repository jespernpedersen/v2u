import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Backend Service
import { ChangeRequestService } from '../../../shared/_services/changerequest.service'
  
@Component({
    selector: 'view-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['confirmation.component.css'],
    providers: [ChangeRequestService]
})
  
export class ConfirmationComponent implements AfterViewInit, OnInit {
    constructor(
        private _changeRequest: ChangeRequestService,
        private router: Router
    ) 
    {}

    // List
    list = [];

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

    ngOnInit() {
        if(history.state[0]) {
            for (let key in history.state) {
                if(history.state[key].name) {
                    this.list.push(history.state[key])
                }
            }
        }
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
        // Empty request
        let request = [];

        // Data sent to database
        this.list.forEach((item) => {
            let itemArray = {
                id: item.id,
                name: item.name
            }
            request.push(itemArray);
        });

        // Send Create Request to Backend
        this._changeRequest.post(request).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.log("Error: ")
                console.log(error);
            });

        // Go to route
        this.router.navigateByUrl('/home/status');
    }
    addMore() {
        this.router.navigate(['/home'], {state: this.list});
    }

    removeItem(id) {
        history.state.added = false;
        this.list.forEach((item, index) => {
            if(item.id == id) {
                this.list.splice(index, 1);
            }
        })
    }
}