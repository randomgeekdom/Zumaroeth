
import Character from "./character";
import Entity from "./entity";
import GameEvent from "./game-event";

export default class Game extends Entity {

    rulerTitle: string = "";
    ruler: Character;
    year = 1;
    events: GameEvent[] = [];

    constructor(firstName: string, lastName: string, age: number) {
        super();
        this.ruler = new Character(firstName, lastName, age);
    }
}
