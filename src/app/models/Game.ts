import Entity from "./Entity";

export default class Game extends Entity {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}