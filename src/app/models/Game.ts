import Entity from "./Entity";

export default class Game extends Entity {

    nationName: string = "";
    rulerName: string = "";
    rulerTitle: string = "";

    constructor() {
        super();
    }
}