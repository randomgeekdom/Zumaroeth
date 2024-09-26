
import Character from "./character";
import Entity from "./entity";
import { Sex } from "./enumerations/sex";
import GameEvent from "./game-event";

export default class Game extends Entity {

    rulerTitle: string = "";
    ruler: Character;
    year = 1;
    events: GameEvent[] = [];
    aristocracy: Character[] = [];
    population = 500;

    constructor(firstName: string, lastName: string, age: number, sex: Sex, title: string) {
        super();
        this.ruler = new Character(firstName, lastName, age, sex, title);
    }
}
