import { Component } from '@angular/core';
import { Location } from '@angular/common';
  
@Component({
    selector: 'goback',
    templateUrl: './goback.component.html',
    styleUrls: ['goback.component.css'],
})

export class GoBackComponent {
    constructor(private _location: Location) {}
  
backClicked() {
    this._location.back();
    }
}