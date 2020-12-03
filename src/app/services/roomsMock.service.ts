import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from "../models/room.model";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsMockService {

  constructor() { }

  findOne(id){
    let room = new Room();
    room.ID = 1;
    room.name = "D13";
    room.grid_size = 2;

    return of(room);
  }
}
