import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { VentsService } from '../../services/vents.service';
import { Vent } from '../../models/vent.model';
import { RoomsService } from 'src/app/services/rooms.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'zoneView',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.css']
})
export class ZoneViewComponent implements OnInit {

  private _userId = 1;
  @Input() 
  get userId(){
    return this._userId;
  }
  set userId(value){
    this._userId = value;
    this.getCurrentVent();
  }
  currentVent = new Vent();

  room;
  vents;
  vent;

  canExit = false;

  constructor(private _ventsService: VentsService, private _roomsService: RoomsService, private _usersService: UsersService, private _router: Router) { }

  @Output() claimEvent = new EventEmitter();

  ngOnInit(): void {

    if(!sessionStorage.getItem("zone")) this.canExit = false;

    if(this.userId){
      this._usersService.get(1).subscribe(user => {
        this._ventsService.getOne(user[0].vent_id).subscribe(vent => {
          
          this.currentVent.set(vent[0]);
          sessionStorage.setItem("zone", `Zone ${vent[0].vent_group_id}`);
          this.canExit = true;
        });
      });
    }

    this._roomsService.findOne(6).subscribe(room => {
      this.room = room[0];

      this.vents = this._ventsService.getFromRoom(this.room.ID).subscribe(vents => {
        this.vents = vents;
      });
    });
  }

  claimVent(vent){
    vent.user_id = this.userId;
    this.vent = vent;

    if(this.currentVent.ID) 
    {
      this.unclaimVent(() => {
        let user = {ID: this.userId, vent_id: this.vent.ID}

        this._usersService.update(user).subscribe( data => {
          debugger;
          sessionStorage.setItem("zone", `Zone ${vent.vent_group_id}`);
          this.claimEvent.emit(this.vent);
          this._router.navigate(['/home']);
        });

      });
    } else {
      let user = {ID: this.userId, vent_id: this.vent.ID}
      this._usersService.update(user).subscribe( data => {
          this.claimEvent.emit(this.vent);
          sessionStorage.setItem("zone", `Zone ${vent.vent_group_id}`);
          this._router.navigate(['/home']);
      });
    }
    

  }

  unclaimVent(callback){

    let user = {ID: this.userId, vent_id: null};

    this._usersService.update(user).subscribe( data => {
      this.claimEvent.emit(this.currentVent);//update dashboard
      this.vents.find(vent => vent.ID == this.currentVent.ID).user_count -= 1;
      this.currentVent = new Vent();

      if(callback) callback();

    });

  }

  getCurrentVent(){
    this._ventsService.getFromUser(this.userId).subscribe(vents => {
      this.currentVent = vents[0];
    });
  }

}
