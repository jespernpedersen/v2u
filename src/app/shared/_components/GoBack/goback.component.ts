import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
  
@Component({
    selector: 'goback',
    templateUrl: './goback.component.html',
    styleUrls: ['goback.component.css'],
})

export class GoBackComponent {

    @Input() location = undefined;
    @Input() text = undefined;

    constructor(private _location: Location, private _router: Router) {}
  
    backClicked() {
        if(this.location){
            this._router.navigate([`/${this.location}`]);
            return;
        }

        this._location.back();
    }
}