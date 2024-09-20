import Alert from "./alert";
import Character from "./character";
import Entity from "./entity";

export default class Game extends Entity {

    nationName: string = "";
    rulerTitle: string = "";
    ruler: Character;
    year = 1;
    alerts: Alert[] = [];

    constructor(firstName: string, lastName: string, age: number) {
        super();
        this.ruler = new Character(firstName, lastName, age);
    }
}
