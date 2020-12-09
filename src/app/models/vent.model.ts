export class Vent{
    ID: Number;
    vent_group_id: Number;
    room_id: Number;
    user_count: Number;

    constructor() {}

    set(newVent){
        this.ID = newVent.ID;
        this.room_id = newVent.room_id;
        this.vent_group_id = newVent.vent_group_id;
        this.user_count = newVent.user_count;
    }

}