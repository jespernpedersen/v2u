import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vent } from '../../../models/vent.model';


@Component({
  selector: 'vent',
  templateUrl: './vent.component.html',
  styleUrls: ['./vent.component.css']
})
export class VentComponent {

  @Input() vent: Vent;
  @Input() currentVentId;
  @Output() ventClaimedEvent = new EventEmitter();
  @Output() ventUnclaimedEvent = new EventEmitter();

  claim(e) : void {
    this.ventClaimedEvent.emit(this.vent);
  }
  
  unclaim(e){
    this.ventUnclaimedEvent.emit();
  }

  isCurrent(){
    if(this.vent.ID == this.currentVentId) return "selected";
    return "";
  }

}