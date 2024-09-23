import Choice from "./choice";
import Entity from "./entity";

export default class GameEvent extends Entity {

    header = "";
    description = "";
    image = "";
    choices: Choice[] = [];

    constructor(header: string, description: string, image: string, choices: Choice[]) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
        this.choices = choices;   
    }
}