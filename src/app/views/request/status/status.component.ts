import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'view-status',
    templateUrl: './status.component.html',
    styleUrls: ['status.component.css'],
})
  
export class StatusComponent implements OnInit {
    
    constructor(private router: Router) {}

    votecount : number = 0;
    totalvotes : number = 4;

    ngOnInit() {
        this.addVote();  
    }

    addVote() {   
        if(this.votecount != this.totalvotes) {     
            setTimeout(() => { 
                this.votecount++;
                this.addVote(); 
            }, 4000);  
        }
        else {
            // If vote is finished, we redirect
            this.router.navigateByUrl('/result');
        }
    }
}