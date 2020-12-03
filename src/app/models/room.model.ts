export class Room{
    ID: Number;
    name: String;
    grid_size: Number;

    constructor() {}

    set(newRoom){
        this.ID = newRoom.ID;
        this.name = newRoom.name;
        this.grid_size = newRoom.grid_size;;
    }

}