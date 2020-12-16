import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { GameSliderComponent } from './game-slider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GameSliderComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [
    GameSliderComponent
  ]
})
export class GameSliderModule { }
