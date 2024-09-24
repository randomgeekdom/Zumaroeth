import Choice from "./choice";
import Entity from "./entity";
import { EventType } from "./enumerations/event-type";

export default class GameEvent extends Entity {

    header = "";
    description = "";
    image = "";
    eventType = EventType.Alert;
    choices: Choice[] = [];

    constructor(eventType: EventType, header: string, description: string, image: string, choices: Choice[]) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
        this.choices = choices;   
        this.eventType = eventType;
    }
}