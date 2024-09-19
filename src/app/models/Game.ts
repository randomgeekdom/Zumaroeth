import Alert from "./Alert";
import Entity from "./Entity";

export default class Game extends Entity {

    nationName: string = "";
    rulerName: string = "";
    rulerTitle: string = "";
    year = 1;
    alerts: Alert[] = [];

    constructor() {
        super();
    }
}