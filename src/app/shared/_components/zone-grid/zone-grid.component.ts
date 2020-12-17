import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zone-grid',
  templateUrl: './zone-grid.component.html',
  styleUrls: ['./zone-grid.component.css']
})
export class ZoneGridComponent {

  private _vents;

  @Input() currentVentId;
  @Input() room;
  @Input() 
  get vents() { return this._vents; }
  set vents(value){
    if(value instanceof Array) this.setVentGroups(value);
    this._vents = value;
  };

  @Output() onVentClaimed = new EventEmitter();
  @Output() onVentUnclaimed = new EventEmitter();

  ventGroups = [];
  gridStyle;
  isLoaded = false;

  private setVentGroups(vents){

    if(vents.length == 0) return;
    this.gridStyle = this.GetColumnsCount();

    for(let i = 0; i < vents.length; i++){

      if(this.ventGroups.length == 0 || this.ventGroups[this.ventGroups.length-1].ID != vents[i].vent_group_id) {
        this.ventGroups.push({ID: vents[i].vent_group_id, vents: [], size: 0, grid_style: ""});

        if(this.ventGroups.length > 1) {
          this.ventGroups[this.ventGroups.length-2].size =  this.ventGroups[this.ventGroups.length-2].vents.length;
          this.ventGroups[this.ventGroups.length-2].grid_style =  this.GetColumnsCount(this.ventGroups[this.ventGroups.length-2]);
        }
      }
      this.ventGroups[this.ventGroups.length-1].vents.push(vents[i]);
    }
    this.ventGroups[this.ventGroups.length-1].size =  this.ventGroups[this.ventGroups.length-1].vents.length;
    this.ventGroups[this.ventGroups.length-1].grid_style =  this.GetColumnsCount(this.ventGroups[this.ventGroups.length-1]);

    this.ventGroups.sort(this.sort);
    this.isLoaded = true;
  }

  public GetColumnsCount(ventGroup?): string{
    let style = "";

    //this equation makes squared groups (like 2x2, 3x3, ect...)
    let columnCount = ventGroup ? Math.ceil(Math.sqrt(ventGroup.size)) : this.room.grid_size;

    for(let i = 0; i < columnCount; i++){
      style += 'minmax(0,1fr) ';
    }

    return style;
  }

  public claimVent(vent){
    this.onVentClaimed.emit(vent);
  }

  public unclaimVent(vent){
    this.onVentUnclaimed.emit(vent);
  }

  private sort(a, b) {
    if (a.ID < b.ID) {
      return -1;
    }
    if (a > b.ID) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

}