import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'view-result',
    templateUrl: './result.component.html',
    styleUrls: ['result.component.css'],
})
  
export class ResultComponent implements OnInit {
    list = [
        {
            id: 1,
            icon: "local_fire_department",
            name: "Hot/Cold",
            status: ""
        },
        {
            id: 2,
            icon: "dry",
            name: "Too smelly",
            status: ""
        }
    ];

    title = "Applying changes";

    showReturn = false;

    ngOnInit() {
        // Placeholder Animation Showcase
        setTimeout(() => { 
            this.approveItem();
        }, 4000);
    }

    approveItem() {
        this.list[0].status = "approved";
        setTimeout(() => {
            this.denyItem();
        }, 4000)
    };

    denyItem() {
        this.list[1].status = "denied";
        this.changesCompleted();
    }

    changesCompleted() {
        this.showReturn = true;
        this.title = "Changes have been applied";
    }
}