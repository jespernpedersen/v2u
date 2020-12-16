import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'game-slider',
  templateUrl: './game-slider.component.html',
  styleUrls: ['./game-slider.component.css']
})
export class GameSliderComponent implements OnInit {

  @Output() onValueChanged = new EventEmitter();
  @Input() unit = "";
  private _range = {min: 0, max: 0 };
  @Input() 
  get range(){
    return this._range;
  }
  set range(value){
    this._range = value;
    this.SetupSlider();
  }
  isLoading = true;

  currentValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  SetupSlider(){
    this.currentValue = Math.round(this._range.max / 2);
  }

  ValueChanged(){
    this.onValueChanged.emit(this.currentValue.toString());
  }

}
