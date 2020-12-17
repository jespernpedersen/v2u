import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
         this.AnimateWrong("It is still a <strong>little <span class='blue'>cold</span></strong>");
      } else if( this.answer >= this.game[this.level-1].answer.min - 6 &&  this.answer <= this.game[this.level-1].answer.min-3){
         this.AnimateWrong("It is still <strong><span class='blue'>cold</span></strong>");
      }else if( this.answer <= this.game[this.level-1].answer.min-6){
         this.AnimateWrong("It is still <strong>really <span class='blue'>cold</span></strong>");
      } else if( this.answer <= this.game[this.level-1].answer.max + 3 &&  this.answer > this.game[this.level-1].answer.max){
        this.AnimateWrong("It is still <strong>a little <span class='red'>hot</span></strong>");
      } else if( this.answer <= this.game[this.level-1].answer.max + 3 &&  this.answer > this.game[this.level-1].answer.max){
        this.AnimateWrong("It is still <strong><span class='red'>hot</span></strong>");
      } else {
        this.AnimateWrong("It is still <strong>really <span class='red'>hot</span></strong>");
      }
    }
  }

  AnimateWrong(tip){
    let card = document.querySelector("#gameCard");
    card.classList.add("animate__animated", "animate__shakeX", "animate__fast");
    this.showTip = false;
    card.addEventListener('animationend', (e) => {
      e.stopPropagation();
      card.classList.remove("animate__animated", "animate__shakeX", "animate__fast");
      this.changeTip(tip);
      this.showTip = true;
    });

  }

  changeTip(text){
    let tipEl = document.querySelector("#tip");
    this.tip = text;
    tipEl.classList.add("animate__animated", "animate__flipInX", "animate__fast");
    tipEl.addEventListener('animationend', (e) => {
      e.stopPropagation();
      tipEl.classList.remove("animate__animated", "animate__flipInX", "animate__fast");
    });
  }

  NextLevel(){
    this.changeTip("It's perfect!");
    let card = document.querySelector("#gameCard");
    card.classList.add("animate__animated", "animate__pulse", "animate__faster");
    card.addEventListener('animationend', () => {
      card.classList.remove("animate__pulse", "animate__faster");
      card.classList.add("animate__fadeOut", "animate__fast");
      card.addEventListener('animationend', () => {
        this.showTip = false;
        this.isInChallenge = false;
      });
    });
  }

  SetAnswer(answer){
    this.answer = answer;
  }

}
