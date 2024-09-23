import Entity from "./entity";
import Game from "./game";
import GameEvent from "./game-event";

export default class Choice extends Entity {
    header = "";
    description = "";
    image = "";
    action: (game: Game, gameEvent: GameEvent) => void;

    constructor(header: string, description: string, image: string, action: (game: Game, gameEvent: GameEvent) => void) {
        super();
        this.header = header;
        this.description = description;
        this.image = image;
        this.action = action;
    }
}