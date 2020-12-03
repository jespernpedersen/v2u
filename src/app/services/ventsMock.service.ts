import { Injectable } from '@angular/core';
import { Vent } from '../models/vent.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentsMockService {

  constructor() { }

  getFromRoom(roomID){

    let vents = [];
    for(let i = 0; i < 4; i++){
      let vent = new Vent();
      vent.ID = i+1;
      vents.push(vent);
    }
    return of(vents);
  }
}
