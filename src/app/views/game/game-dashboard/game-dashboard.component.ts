import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {

  level = 1;
  answer = 0;
  isInChallenge = true;

  tip = "The room feels <strong>cold!</strong>";
  showTip = false;

  game = [
    {
      "sliders": [
        {
          range: {min: 15, max: 26},
          unit: "°C"
        }
      ],
      "answer": {
        min: 20,
        max: 23
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  CheckAnswer(){
    if(this.answer >= this.game[this.level-1].answer.min && this.answer <= this.game[this.level-1].answer.max){
      this.NextLevel();
    } else{

      if(this.answer >= this.game[this.level-1].answer.min - 3 && this.answer < this.game[this.level-1].answer.min){
        this.tip = "It is still a <strong>little <span class='blue'>cold</span></strong>";
      } else if( this.answer >= this.game[this.level-1].answer.min - 6 &&  this.answer <= this.game[this.level-1].answer.min-3){
        this.tip = "It is still <strong><span class='blue'>cold</span></strong>";
      }else if( this.answer <= this.game[this.level-1].answer.min-6){
        this.tip = "It is still <strong>really <span class='blue'>cold</span></strong>";
      } else if( this.answer <= this.game[this.level-1].answer.max + 3 &&  this.answer > this.game[this.level-1].answer.max){
        this.tip = "It is still <strong>a little <span class='red'>hot</span></strong>";
      } else if( this.answer <= this.game[this.level-1].answer.max + 3 &&  this.answer > this.game[this.level-1].answer.max){
        this.tip = "It is still <strong><span class='red'>hot</span></strong>";
      } else {
        this.tip = "It is still <strong>really <span class='red'>hot</span></strong>";
      }
      this.showTip = true;
    }
  }

  NextLevel(){
    this.showTip = false;
    this.isInChallenge = false;
  }

  SetAnswer(answer){
    this.answer = answer;
  }

}
