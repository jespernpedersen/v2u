import { Component } from '@angular/core';

@Component({
    selector: 'view-status',
    templateUrl: './status.component.html',
    styleUrls: ['status.component.css'],
})
  
export class StatusComponent {
    votecount : number = 0;
    totalvotes : number = 4;
}